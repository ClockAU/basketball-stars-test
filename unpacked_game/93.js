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
var n = require("./14.js");
var a = require("./49.js");
var o = require("./0.js");
var r = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    i.moveLeftKey = o.Keyboard.A;
    i.moveRightKey = o.Keyboard.D;
    i.jumpKey = o.Keyboard.W;
    i.downKey = o.Keyboard.S;
    i.actionKey = o.Keyboard.B;
    i.superKey = o.Keyboard.V;
    return i;
  }
  s(e, t);
  e.prototype.update = function () {
    this.currentMove = 0;
    this.currentDash = 0;
    if (n.default.instance.isbtnA) {
      if (n.default.instance.isbtnADouble) {
        this.currentDash = -1;
      }
      this.currentMove--;
    }
    if (n.default.instance.isbtnD) {
      if (n.default.instance.isbtnDDouble) {
        this.currentDash = 1;
      }
      this.currentMove++;
    }
    this.currentJump = n.default.instance.isbtnW;
    this.currentAction = n.default.instance.isbtnB;
    this.currentSuper = n.default.instance.isbtnV;
    this.currentBlockOrPump = n.default.instance.isbtnS;
  };
  e.prototype.readyForAction = function () {
    return !n.default.instance.isbtnV;
  };
  e.prototype.releaseBlockOrPump = function () {
    return !n.default.instance.isbtnS;
  };
  e.prototype.getJump = function () {
    return n.default.instance.isbtnW;
  };
  e.prototype.readyToJump = function () {
    return !n.default.instance.isbtnW;
  };
  e.prototype.getShoot = function () {
    return n.default.instance.isbtnB;
  };
  e.prototype.getTackle = function () {
    return n.default.instance.isbtnS;
  };
  e.prototype.getSuperShot = function () {
    return n.default.instance.isbtnV;
  };
  return e;
}(a.PlayerBaseController);
exports.PlayerController = r;