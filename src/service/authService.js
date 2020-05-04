import Admin from '../models/Admin';
import Participant from '../models/Participant';

export async function signUpAdmin(userInfo) {
  try {
    const {
      username, password, email, name,
    } = userInfo;
    const admins = await Admin.find({
      $or: [{ username }, { name }],
    });
    if (admins.length !== 0) {
      return false;
    }
    const newAdmin = new Admin({
      name, username, email, password,
    });
    const response = await newAdmin.save();
    return !!response;
  } catch (err) {
    throw err;
  }
}

export async function signInAdmin(userInfo) {
  try {
    const { username, password } = userInfo;
    const admins = await Admin.find({ username, password });
    return admins.length !== 0;
  } catch (err) {
    throw err;
  }
}

export async function signUpParticipant(userInfo) {
  try {
    const { name, picture } = userInfo;
    const participants = await Participant.find({ name });
    if (participants.length !== 0) {
      return false;
    }
    const newParticipant = new Participant({ name, picture });
    const response = await newParticipant.save();
    return !!response;
  } catch (err) {
    throw err;
  }
}

export async function removeParticipant(userInfo) {
  try {
    const { name } = userInfo;
    const participants = await Participant.find({ name });
    if (participants.length === 0) {
      return false;
    }
    const { ok: response } = await Participant.deleteOne({ name });
    return !!response;
  } catch (err) {
    throw err;
  }
}

export async function signInParticipant(userInfo) {
  try {
    const { name } = userInfo;
    const participants = await Participant.find({ name });
    return participants.length !== 0;
  } catch (err) {
    throw err;
  }
}
