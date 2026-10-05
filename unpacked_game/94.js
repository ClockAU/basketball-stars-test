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
var o = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  s(e, t);
  e.prototype.update = function () {
    this.currentMove = 0;
    this.currentDash = 0;

    // MULTIPLAYER: If hosting, ONLY use network inputs. Strictly block local fallback.
    if (window.netState && window.netState.isHost) {
      if (window.remoteP2Input) {
        var inp = window.remoteP2Input;
        if (inp.left) this.currentMove--;
        if (inp.right) this.currentMove++;
        this.currentJump = !!inp.jump;
        this.currentAction = !!inp.action;
        this.currentSuper = !!inp.super;
        this.currentBlockOrPump = !!inp.down;
      }
      return; // Do NOT process offline keys below
    }

    if (n.default.instance.isbtnLeft) {
      if (n.default.instance.isbtnLeftDouble) {
        this.currentDash = -1;
      }
      this.currentMove--;
    }
    if (n.default.instance.isbtnRight) {
      if (n.default.instance.isbtnRightDouble) {
        this.currentDash = 1;
      }
      this.currentMove++;
    }
    this.currentJump = n.default.instance.isbtnUp;
    this.currentAction = n.default.instance.isbtnL;
    this.currentSuper = n.default.instance.isbtnK;
    this.currentBlockOrPump = n.default.instance.isbtnDown;
  };
  e.prototype.readyForAction = function () {
    return !n.default.instance.isbtnL;
  };
  e.prototype.releaseBlockOrPump = function () {
    return !n.default.instance.isbtnDown;
  };
  e.prototype.getJump = function () {
    return n.default.instance.isbtnUp;
  };
  e.prototype.readyToJump = function () {
    return !n.default.instance.isbtnUp;
  };
  e.prototype.getShoot = function () {
    return n.default.instance.isbtnL;
  };
  e.prototype.getTackle = function () {
    return n.default.instance.isbtnDown;
  };
  e.prototype.getSuperShot = function () {
    return n.default.instance.isbtnK;
  };
  return e;
}(a.PlayerBaseController);
exports.PlayerController2 = o;