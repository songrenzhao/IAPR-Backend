"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  input resultsInput {\n    question: String!,\n    answer: [String!]!\n  }\n\n  type Query {\n    hello: String!\n    admins: [Admin!]!\n    surveys(name: String, date: String!): [survey]\n  }\n\n  type Admin {\n    name: String!\n    username: String!\n    email: String!\n    password: String!\n  }\n\n  type results {\n    question: String!,\n    answer: [String!]!\n  }\n\n  type statusMessage {\n    status: Boolean!\n  }\n\n  type survey {\n    name: String,\n    results: [results],\n    createdAt: String,\n    updatedAt: String,\n  }\n\n  type Mutation {\n    signUp(name: String!, username: String!, email: String!, password: String!): statusMessage\n    signIn(username: String!, password: String!): statusMessage\n    createSurvey(name: String!, results: [resultsInput!]!, createdAt: String, updatedAt: String): survey\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject());
var _default = typeDefs;
exports["default"] = _default;