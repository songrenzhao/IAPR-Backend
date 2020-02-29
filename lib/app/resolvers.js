"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _Admin = _interopRequireDefault(require("../models/Admin"));

var _authService = require("../service/authService");

var _surveyService = require("../service/surveyService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resolvers = {
  Query: {
    hello: function hello() {
      return 'hello';
    },
    admins: function admins() {
      return _Admin["default"].find();
    },
    surveys: function () {
      var _surveys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, args) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _surveyService.viewSurvey)(args);

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function surveys(_x, _x2) {
        return _surveys.apply(this, arguments);
      }

      return surveys;
    }()
  },
  Mutation: {
    signUp: function () {
      var _signUp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, args) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _authService.signUpAdmin)(args);

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", {
                  status: response
                });

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw new _apolloServerExpress.UserInputError('Please Check Again');

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function signUp(_x3, _x4) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }(),
    signIn: function () {
      var _signIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, args) {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (0, _authService.signInAdmin)(args);

              case 3:
                response = _context3.sent;
                return _context3.abrupt("return", {
                  status: response
                });

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                throw new _apolloServerExpress.UserInputError('Please Check Again');

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function signIn(_x5, _x6) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }(),
    createSurvey: function () {
      var _createSurvey2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, args) {
        var response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _surveyService.createSurvey)(args);

              case 3:
                response = _context4.sent;
                return _context4.abrupt("return", response);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw new _apolloServerExpress.UserInputError('Please Check Again');

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function createSurvey(_x7, _x8) {
        return _createSurvey2.apply(this, arguments);
      }

      return createSurvey;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;