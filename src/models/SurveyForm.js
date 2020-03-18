import mongoose, { Schema } from './index';

const selectionSchema = new Schema({
  choice: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

const formDataSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  selections: {
    type: [selectionSchema],
    required: true,
  },
});

const surveyFormSchema = new Schema({
  formData: [formDataSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SurveyForm = mongoose.model('surveyforms', surveyFormSchema);

export default SurveyForm;
