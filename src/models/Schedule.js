import mongoose, { Schema } from './index';

const scheduleSchema = new Schema({
  title: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  id: {
    type: Number,
  },
  allDay: {
    type: Boolean,
  },
});

const schedulesArraySchema = new Schema({
  schedule: {
    type: [scheduleSchema],
  },
});

const schedules = mongoose.model('schedule', schedulesArraySchema);

export default schedules;
