"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpAdmin = signUpAdmin;
exports.signInAdmin = signInAdmin;
exports.signUpParticipant = signUpParticipant;
exports.signInParticipant = signInParticipant;

var _Admin = _interopRequireDefault(require("../models/Admin"));

var _Participant = _interopRequireDefault(require("../models/Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function signUpAdmin(_x) {
  return _signUpAdmin.apply(this, arguments);
}

function _signUpAdmin() {
  _signUpAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userInfo) {
    var username, password, email, name, admins, newAdmin, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            username = userInfo.username, password = userInfo.password, email = userInfo.email, name = userInfo.name;
            _context.next = 4;
            return _Admin["default"].find({
              $or: [{
                username: username
              }, {
                name: name
              }]
            });

          case 4:
            admins = _context.sent;

            if (!(admins.length !== 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", false);

          case 7:
            newAdmin = new _Admin["default"]({
              name: name,
              username: username,
              email: email,
              password: password
            });
            _context.next = 10;
            return newAdmin.save();

          case 10:
            response = _context.sent;
            return _context.abrupt("return", !!response);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _signUpAdmin.apply(this, arguments);
}

function signInAdmin(_x2) {
  return _signInAdmin.apply(this, arguments);
}

function _signInAdmin() {
  _signInAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userInfo) {
    var username, password, admins;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            username = userInfo.username, password = userInfo.password;
            _context2.next = 4;
            return _Admin["default"].find({
              username: username,
              password: password
            });

          case 4:
            admins = _context2.sent;
            return _context2.abrupt("return", admins.length !== 0);

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
  return _signInAdmin.apply(this, arguments);
}

function signUpParticipant(_x3) {
  return _signUpParticipant.apply(this, arguments);
}

function _signUpParticipant() {
  _signUpParticipant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userInfo) {
    var name, participants, newParticipant, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            name = userInfo.name;
            _context3.next = 4;
            return _Participant["default"].find({
              name: name
            });

          case 4:
            participants = _context3.sent;

            if (!(participants.length !== 0)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", false);

          case 7:
            newParticipant = new _Participant["default"]({
              name: name
            });
            _context3.next = 10;
            return newParticipant.save();

          case 10:
            response = _context3.sent;
            return _context3.abrupt("return", !!response);

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return _signUpParticipant.apply(this, arguments);
}

function signInParticipant(_x4) {
  return _signInParticipant.apply(this, arguments);
}

function _signInParticipant() {
  _signInParticipant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(userInfo) {
    var name, participants;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            name = userInfo.name;
            _context4.next = 4;
            return _Participant["default"].find({
              name: name
            });

          case 4:
            participants = _context4.sent;
            return _context4.abrupt("return", participants.length !== 0);

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _signInParticipant.apply(this, arguments);
}