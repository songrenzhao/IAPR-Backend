import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  mongodb_username: process.env.MONGODB_USERNAME,
  mongodb_password: process.env.MONGODB_PASSWORD,
};
