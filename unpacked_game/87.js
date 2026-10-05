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
var n = require("./21.js");
var a = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  s(e, t);
  e.prototype.activate = function () {
    this.delta = 0;
    this.delay = this.range;
  };
  return e;
}(n.FullDelay);
exports.UseDelay = a;