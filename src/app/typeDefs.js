import { gql } from 'apollo-server-express';

const typeDefs = gql`
  input resultsInput {
    question: String!,
    answer: [String!]!
  }

  type Query {
    hello: String!
    admins: [Admin!]!
    surveys(name: String, date: String!): [survey]
  }

  type Admin {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type results {
    question: String!,
    answer: [String!]!
  }

  type statusMessage {
    status: Boolean!
  }

  type survey {
    name: String,
    results: [results],
    createdAt: String,
    updatedAt: String,
  }

  type Mutation {
    signUp(name: String!, username: String!, email: String!, password: String!): statusMessage
    signIn(username: String!, password: String!): statusMessage
    createSurvey(name: String!, results: [resultsInput!]!, createdAt: String, updatedAt: String): survey
  }
`;

export default typeDefs;
