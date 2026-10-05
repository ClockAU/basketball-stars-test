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

// MULTIPLAYER: Helper to check if we're the host and should use remote input
function getRemoteInput() {
  return window.netState && window.netState.isHost ? (window.remoteP2Input || {}) : null;
}

// MULTIPLAYER: Helper to check if we're a guest (guest should NOT process any local input)
function isGuest() {
  return window.netState && window.netState.isGuest;
}

var o = function (t) {
  function e(e) {
    return t.call(this, e) || this;
  }
  s(e, t);
  e.prototype.update = function () {
    // MULTIPLAYER: Guests do NOT process input at all. Physics sync handles movement.
    if (isGuest()) {
      this.currentMove = 0;
      this.currentDash = 0;
      this.currentJump = false;
      this.currentAction = false;
      this.currentSuper = false;
      this.currentBlockOrPump = false;
      return;
    }

    this.currentMove = 0;
    this.currentDash = 0;

    // MULTIPLAYER: If hosting, ONLY use network inputs for P2. Strictly block local fallback.
    var r = getRemoteInput();
    if (r) {
      if (r.left) this.currentMove--;
      if (r.right) this.currentMove++;
      this.currentJump = !!r.jump;
      this.currentAction = !!r.action;
      this.currentSuper = !!r.super;
      this.currentBlockOrPump = !!r.down;
      return; // Do NOT process offline keys below
    }

    // LOCAL GAME: Process keyboard input normally
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
    var r = getRemoteInput();
    return r ? !r.action : !n.default.instance.isbtnL;
  };

  e.prototype.releaseBlockOrPump = function () {
    var r = getRemoteInput();
    return r ? !r.down : !n.default.instance.isbtnDown;
  };

  e.prototype.getJump = function () {
    var r = getRemoteInput();
    return r ? !!r.jump : n.default.instance.isbtnUp;
  };

  e.prototype.readyToJump = function () {
    var r = getRemoteInput();
    return r ? !r.jump : !n.default.instance.isbtnUp;
  };

  e.prototype.getShoot = function () {
    var r = getRemoteInput();
    return r ? !!r.action : n.default.instance.isbtnL;
  };

  e.prototype.getTackle = function () {
    var r = getRemoteInput();
    return r ? !!r.down : n.default.instance.isbtnDown;
  };

  e.prototype.getSuperShot = function () {
    var r = getRemoteInput();
    return r ? !!r.super : n.default.instance.isbtnK;
  };

  return e;
}(a.PlayerBaseController);
exports.PlayerController2 = o;
