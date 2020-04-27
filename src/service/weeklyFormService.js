import WeeklyPlanning from '../models/weeklyPlanning';
import WeeklyFormResponse from '../models/weeklyPlanningResponse';

const preprepareViewSurveyPayload = (responseInfo) => {
  const { participant, createdAt } = responseInfo;
  const query = {};
  if (!!createdAt) {
    Object.assign(query, {
      createdAt: {
        $gte: new Date(parseInt(createdAt, 10) - 1),
        $lte: new Date(parseInt(createdAt, 10) + 1),
      },
    });
  } else {
    Object.assign(query, {
      createdAt: {
        $gte: new Date() - 2 * 24 * 60 * 60 * 1000, // display 2 days
        $lte: new Date(),
      },
    });
  }
  if (participant) {
    Object.assign(query, { participant });
  }
  return query;
};

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

export async function createWeeklyPlanningResponse(weeklyFormResponse) {
  try {
    const { data, participant } = weeklyFormResponse;
    await WeeklyFormResponse.deleteMany({
      participant,
    });
    const newWeeklyPlanningResponse = new WeeklyFormResponse({
      formData: data,
      participant,
    });
    const response = await newWeeklyPlanningResponse.save();
    return !!response;
  } catch (err) {
    throw err;
  }
}

export async function viewWeeklyPlanningResponse(responseInfo) {
  try {
    const payload = preprepareViewSurveyPayload(responseInfo);
    const response = await WeeklyFormResponse.find(payload);
    return response;
  } catch (err) {
    throw err;
  }
}
