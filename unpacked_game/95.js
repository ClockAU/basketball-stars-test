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
var a = require("./14.js");
var o = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    i.type = 1;
    return i;
  }
  s(e, t);
  e.prototype.update = function (t) {
    this.currentDash = 0;
    if (a.default.instance.isbtnLeft || a.default.instance.isbtnA) {
      this.currentMove = -1;
      if (a.default.instance.isbtnLeftDouble || a.default.instance.isbtnADouble) {
        this.currentDash = -1;
      }
    } else if (a.default.instance.isbtnRight || a.default.instance.isbtnD) {
      this.currentMove = 1;
      if (a.default.instance.isbtnRightDouble || a.default.instance.isbtnDDouble) {
        this.currentDash = 1;
      }
    } else {
      this.currentMove = 0;
    }
    this.currentJump = a.default.instance.isbtnUp || a.default.instance.isbtnW;
    this.currentAction = a.default.instance.isbtnX || a.default.instance.isbtnL;
    this.currentSuper = a.default.instance.isbtnZ || a.default.instance.isbtnK;
    this.currentBlockOrPump = a.default.instance.isbtnDown || a.default.instance.isbtnS;
  };
  e.prototype.readyForAction = function () {
    return !a.default.instance.isbtnL && !a.default.instance.isbtnX;
  };
  e.prototype.releaseBlockOrPump = function (t) {
    return !a.default.instance.isbtnDown && !a.default.instance.isbtnS;
  };
  e.prototype.getJump = function () {
    return a.default.instance.isbtnUp || a.default.instance.isbtnW;
  };
  e.prototype.readyToJump = function () {
    return a.default.instance.isbtnUp !== true && a.default.instance.isbtnW !== true;
  };
  e.prototype.getShoot = function () {
    return a.default.instance.isbtnX || a.default.instance.isbtnL;
  };
  e.prototype.getTackle = function () {
    return a.default.instance.isbtnDown || a.default.instance.isbtnS;
  };
  e.prototype.getSuperShot = function () {
    return a.default.instance.isbtnZ || a.default.instance.isbtnK;
  };
  return e;
}(n.BaseController);
exports.PlayerControllerGeneral = o;