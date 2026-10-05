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
    this.delta = 0;
    this.delay = Math.random() * this.range;
  };
  e.prototype.update = function (t) {
    if (this.delta >= 0) {
      this.result = 0;
      this.delta += t;
      if (this.delta >= this.delay) {
        this.result = 1;
        this.delta = -1;
      }
      return this.result;
    }
    if (this.delta === -1) {
      return -1;
    }
    var e = -2;
    this.delta += t;
    if (this.delta >= -1) {
      this.delta = -1;
      e = -1;
    }
    return e;
  };
  e.prototype.useIt = function () {
    this.delta = -1 - this.fixed;
  };
  e.prototype.skipIt = function () {
    this.delta = -1 - this.fixed / 2;
  };
  return e;
}(n.FullDelay);
exports.AIUseDelay = a;