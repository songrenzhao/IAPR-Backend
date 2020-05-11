import Schedules from '../models/Schedule';

export async function updateSchedules(schedulesInfo) {
  try {
    const { schedule } = schedulesInfo;
    await Schedules.deleteMany({});
    const newSchedules = new Schedules({ schedule });
    const response = await newSchedules.save();
    return !!response;
  } catch (err) {
    throw err;
  }
}

export async function viewSchedules() {
  try {
    const [schedules] = await Schedules.find({});
    const { schedule } = schedules;
    return schedule;
  } catch (err) {
    throw err;
  }
}
