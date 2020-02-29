import Admin from '../models/Admin';

export async function signUpAdmin(userInfo) {
  try {
    const {
      username, password, email, name,
    } = userInfo;
    const userDoesExist = await Admin.find({
      $or: [{ username }, { name }],
    });
    if (userDoesExist.length !== 0) {
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
    const userDoesMatch = await Admin.find({ username, password });
    return userDoesMatch.length !== 0;
  } catch (err) {
    throw err;
  }
}
