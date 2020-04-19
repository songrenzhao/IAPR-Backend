import mongoose, { Schema } from './index';

const selectionSchema = new Schema({
  activity: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

const formDataSchema = new Schema({
  selections: {
    type: [selectionSchema],
    required: true,
  },
});

const weeklyFormSchema = new Schema({
  formData: [formDataSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WeeklyForm = mongoose.model('weeklyform', weeklyFormSchema);

export default WeeklyForm;
