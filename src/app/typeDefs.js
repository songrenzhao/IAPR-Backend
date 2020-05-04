import { gql } from 'apollo-server-express';

const typeDefs = gql`
  input resultsInput {
    question: String!,
    answer: [String!]!
  } 
 
  input formData {
    title: String!,
    description: String!,
    selections: [selections!]!,
  }

  input selections {
    choice: String!,
    url: String,
  }

  input weeklyPlanning {
    activity: String!,
    url: String,
  }

  input weeklyPlannings {
    selections: [weeklyPlanning!]!
  }

  input activityReactionArray {
    selections: [activitySelection!]!
  }

  input activitySelection {
    activity: String
    reaction: String
  }

  type weeklyPlanningOutput {
    activity: String!,
    url: String,
  }

  type weeklyPlanningOutputs {
    selections: [weeklyPlanningOutput!]!
  }

  type Participant {
    name: String!
    picture: String
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
    results(question: String): [results],
    createdAt: String,
    updatedAt: String,
  }

  type surveyForm {
    title: String!,
    description: String!,
    limit: Int!,
    question: String!,
    selections: [selectionsOutput!]!,
  }

  type selectionsOutput {
    choice: String!,
    url: String!,
  }

  type weeklyPlanningParticipantSelection {
    activity: String!,
    reaction: String,
  }

  type weeklyPlanningParticipantSelections {
    selections: [weeklyPlanningParticipantSelection]!
  }

  type weeklyPlanningParticipantResponse {
    formData: [weeklyPlanningParticipantSelections]!
    participant: String!
    createdAt: String
  }

  type Query {
    hello: String!
    admins: [Admin!]!
    participants: [Participant]!
    surveys(name: String, date: String): [survey]
    viewSurveyForm(date: String): [surveyForm]
    viewWeeklyPlanning: [weeklyPlanningOutputs!]!
    viewWeeklyPlanningResponse(participant: String, createdAt: String): [weeklyPlanningParticipantResponse]
  }

  type Mutation {
    signUp(name: String!, username: String!, email: String!, password: String!): statusMessage
    signIn(username: String!, password: String!): statusMessage
    signUpParticipant(name: String!, picture: String): statusMessage
    removeParticipant(name: String!): statusMessage
    signInParticipant(name: String!): statusMessage
    createSurveyForm(formData: [formData!]!, createdAt: String): statusMessage
    createSurveyResponse(name: String!, results: [resultsInput!]!, createdAt: String, updatedAt: String): survey
    createWeeklyPlanning(weeklyPlanningData: [weeklyPlannings!]!): statusMessage
    createWeeklyPlanningResponse(data: [activityReactionArray]!, participant: String!): statusMessage
  }
`;

export default typeDefs;
