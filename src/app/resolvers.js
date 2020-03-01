import { UserInputError } from 'apollo-server-express';
import Admin from '../models/Admin';
import Participant from '../models/Participant';
import {
  signUpAdmin, signInAdmin, signUpParticipant, signInParticipant,
} from '../service/authService';
import { createSurvey, viewSurvey } from '../service/surveyService';

const resolvers = {
  Query: {
    hello: () => 'hello',
    admins: () => Admin.find(),
    participants: () => Participant.find(),
    surveys: async (_, args) => {
      const response = await viewSurvey(args);
      return response;
    },
  },

  survey: {
    results: (parent, args) => {
      if (args.question) {
        return parent.results.filter((result) => result.question === args.question);
      }
      return parent.results;
    },
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
    createSurvey: async (_, args) => {
      try {
        const response = await createSurvey(args);
        return response;
      } catch (err) {
        throw new UserInputError('Please Check Again');
      }
    },
    signUpParticipant: async (_, args) => {
      try {
        const response = await signUpParticipant(args);
        return {
          status: response,
        };
      } catch (err) {
        throw new UserInputError('Please Check Again');
      }
    },
    signInParticipant: async (_, args) => {
      try {
        const response = await signInParticipant(args);
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
