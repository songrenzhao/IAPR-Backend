import mongoose, { Schema } from 'mongoose';
import config from '../config';

const USERNAME = config.mongodb_username;
const PASSWORD = config.mongodb_password;
const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@iaprdb-sdt3e.mongodb.net/iapr?retryWrites=true&w=majority`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose;
export { Schema };
