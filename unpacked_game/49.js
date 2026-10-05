var s = this && this.__extends || function () {
  var t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      if (e.hasOwnProperty(i)) {
        t[i] = e[i];
      }
    }
  };
  return function (e, i) {
    function s() {
      this.constructor = e;
    }
    t(e, i);
    e.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
}();
exports.__esModule = true;
var n = require("./25.js");
var a = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  s(e, t);
  e.prototype.update = function () {
    this.currentMove = 0;
  };
  e.prototype.readyForAction = function () {
    return false;
  };
  e.prototype.releaseBlockOrPump = function () {
    return false;
  };
  return e;
}(n.BaseController);
exports.PlayerBaseController = a;