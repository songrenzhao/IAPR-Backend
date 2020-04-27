import Survey from '../models/Survey';
import SurveyForm from '../models/SurveyForm';

const preprepareViewSurveyPayload = (surveyInfo) => {
  const { name, date } = surveyInfo;

  const query = {};
  if (!!date) {
    Object.assign(query, {
      createdAt: {
        $gte: new Date(parseInt(date, 10) - 1),
        $lte: new Date(parseInt(date, 10) + 1),
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
  if (name) {
    Object.assign(query, { name });
  }
  return query;
};

export async function createSurveyResponse(surveyInfo) {
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

export async function createSurveyForm(surveyInfo) {
  try {
    const { formData, createdAt } = surveyInfo;
    const newSurveyFom = new SurveyForm({ formData, createdAt });
    const response = await newSurveyFom.save();
    return !!response;
  } catch (err) {
    throw err;
  }
}

export async function viewSurveyForm() {
  try {
    const [surveys] = await SurveyForm.find().sort({ createdAt: 'descending' }).limit(1);
    const { formData } = surveys;
    return formData;
  } catch (err) {
    throw err;
  }
}
