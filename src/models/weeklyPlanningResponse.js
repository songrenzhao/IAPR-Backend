import mongoose, { Schema } from './index';

const selectionSchema = new Schema({
  activity: {
    type: String,
    required: true,
  },
  reaction: {
    type: String,
  },
});

const formDataSchema = new Schema({
  selections: {
    type: [selectionSchema],
    required: true,
  },
});

const weeklyFormResponseSchema = new Schema({
  formData: [formDataSchema],
  participant: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WeeklyFormResponse = mongoose.model('weeklyformresponse', weeklyFormResponseSchema);

export default WeeklyFormResponse;
