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
  function e(e, i = 0) {
    return t.call(this, e, i) || this;
  }
  s(e, t);
  e.prototype.activate = function () {
    t.prototype.activate.call(this);
    var e = Math.random() <= 0.5 ? -1 : 1;
    this.delay = this.fixed + e * this.dispersion;
  };
  return e;
}(n.FullDelay);
exports.NegativeDelay = a;