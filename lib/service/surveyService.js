"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSurvey = createSurvey;
exports.viewSurvey = viewSurvey;

var _Survey = _interopRequireDefault(require("../models/Survey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var preprepareViewSurveyPayload = function preprepareViewSurveyPayload(surveyInfo) {
  var name = surveyInfo.name,
      date = surveyInfo.date;
  var query = {
    createdAt: {
      $gte: new Date(new Date(date) - 6 * 60 * 60 * 1000),
      $lte: new Date()
    }
  };

  if (name) {
    Object.assign(query, {
      name: name
    });
  }

  return query;
};

function createSurvey(_x) {
  return _createSurvey.apply(this, arguments);
}

function _createSurvey() {
  _createSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(surveyInfo) {
    var name, question, results, newSurvey, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            name = surveyInfo.name, question = surveyInfo.question, results = surveyInfo.results;
            newSurvey = new _Survey["default"]({
              name: name,
              question: question,
              results: results
            });
            _context.next = 5;
            return newSurvey.save();

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _createSurvey.apply(this, arguments);
}

function viewSurvey(_x2) {
  return _viewSurvey.apply(this, arguments);
}

function _viewSurvey() {
  _viewSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(surveyInfo) {
    var payload, surveys;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            payload = preprepareViewSurveyPayload(surveyInfo);
            _context2.next = 4;
            return _Survey["default"].find(payload);

          case 4:
            surveys = _context2.sent;
            return _context2.abrupt("return", surveys);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _viewSurvey.apply(this, arguments);
}