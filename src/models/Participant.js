import mongoose, { Schema } from './index';

const participantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
});

const participant = mongoose.model('participants', participantSchema);

export default participant;
