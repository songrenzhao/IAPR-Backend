import { UserInputError } from 'apollo-server-express';
import Admin from '../models/Admin';
import { signUpAdmin, signInAdmin } from '../service/authService';

const resolvers = {
  Query: {
    hello: () => 'hello',
    admins: () => Admin.find(),
  },
  Mutation: {
    signUp: async (_, args) => {
      try {
        const response = await signUpAdmin(args);
        return {
          status: response,
        };
      } catch (err) {
        throw new UserInputError('Please Check Again');
      }
    },
    signIn: async (_, args) => {
      try {
        const response = await signInAdmin(args);
        return {
          status: response,
        };
      } catch (err) {
        throw new UserInputError('Please Check Again');
      }
    },
  },
};

export default resolvers;
