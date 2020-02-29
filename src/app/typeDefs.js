import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String!
    admins: [Admin!]!
  }

  type Admin {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type statusMessage {
    status: Boolean!
  }

  type Mutation {
    signUp(name: String!, username: String!, email: String!, password: String!): statusMessage
    signIn(username: String!, password: String!): statusMessage
  }
`;

export default typeDefs;
