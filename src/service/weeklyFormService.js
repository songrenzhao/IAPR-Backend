import WeeklyPlanning from '../models/weeklyPlanning';

export async function createWeeklyPlanning(weeklyForm) {
  try {
    const { weeklyPlanningData } = weeklyForm;
    await WeeklyPlanning.deleteMany({});
    const newWeeklyPlanning = new WeeklyPlanning({ formData: weeklyPlanningData });
    const response = await newWeeklyPlanning.save();
    return !!response;
  } catch (err) {
    throw err;
  }
}

export async function viewWeeklyPlanning() {
  try {
    const [weeklyPlannings] = await WeeklyPlanning.find();
    const { formData } = weeklyPlannings;
    return formData;
  } catch (err) {
    throw err;
  }
}
