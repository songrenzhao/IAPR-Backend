"use strict";

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _app["default"])();
var port = _config["default"].PORT || 8080; // eslint-disable-next-line no-console

app.listen(_config["default"].PORT || 8080, function () {
  return console.log("Server on Port ".concat(port));
});