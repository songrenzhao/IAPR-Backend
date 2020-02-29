import Survey from '../models/Survey';

const preprepareViewSurveyPayload = (surveyInfo) => {
  const { name, date } = surveyInfo;
  const query = {
    createdAt: {
      $gte: new Date(new Date(date) - 6 * 60 * 60 * 1000),
      $lte: new Date(),
    },
  };
  if (name) {
    Object.assign(query, { name });
  }
  return query;
};

export async function createSurvey(surveyInfo) {
  try {
    const { name, question, results } = surveyInfo;
    const newSurvey = new Survey({ name, question, results });
    const response = await newSurvey.save();
    return response;
  } catch (err) {
    throw err;
  }
}

export async function viewSurvey(surveyInfo) {
  try {
    const payload = preprepareViewSurveyPayload(surveyInfo);
    const surveys = await Survey.find(payload);
    return surveys;
  } catch (err) {
    throw err;
  }
}
