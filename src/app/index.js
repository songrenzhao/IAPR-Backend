import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

export default function createApp() {
  const app = express();
  app.use(cors());
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });
  return app;
}
