import mongoose, { Schema } from './index';

const resultsSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: [String],
    required: true,
  },
});

const surveySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  results: [resultsSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Survey = mongoose.model('surveys', surveySchema);

export default Survey;
