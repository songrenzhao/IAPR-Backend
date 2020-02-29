"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createApp;

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createApp() {
  var app = (0, _express["default"])();
  app.use((0, _cors["default"])());
  var server = new _apolloServerExpress.ApolloServer({
    typeDefs: _typeDefs["default"],
    resolvers: _resolvers["default"]
  });
  server.applyMiddleware({
    app: app
  });
  return app;
}