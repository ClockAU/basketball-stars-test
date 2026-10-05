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
var n = require("./48.js");
var a = require("./2.js");
var o = function (t) {
  function e(e, i) {
    var s = t.call(this, e, i) || this;
    s.defensePoint = s.SIDE === -1 ? a.ObjectsData.DEFENSE_POINT : s.width - a.ObjectsData.DEFENSE_POINT;
    return s;
  }
  s(e, t);
  e.prototype.onJumpBall = function () {
    if (this.playerNo === 0) {
      this.jumpBall.activate();
    }
    this.opponent = this.opponents[this.playerNo];
  };
  e.prototype.ballInOwnHands = function (e = 0) {
    this.opponent = this.opponents[e];
    if (this.playerNo === e) {
      this.currentNo = 0;
      t.prototype.ballInOwnHands.call(this);
    } else {
      this.currentNo = 1;
      this.resetBaseDelays();
      this.resetCurrents();
      this.strategy = 4;
      this.reboundPoint = this.reboundPointInAttack;
    }
  };
  e.prototype.ballInOpponentsHands = function (e = 0) {
    t.prototype.ballInOpponentsHands.call(this, e);
    this.opponent = this.opponents[e];
    if (this.playerNo != e) {
      this.strategy = 5;
    }
  };
  e.prototype.init = function (e) {
    t.prototype.init.call(this, e);
    this.chanceForThree *= a.ObjectsData.CHANCE_FOR_THREE2;
  };
  e.prototype.strategyDefence2 = function (t) {
    this.currentMove = this.moveToo(this.defensePoint);
    var e = this.stealDelay.update(t);
    if (e === -1) {
      this.tryToSteal();
    }
    this.currentAction = e === 1;
    this.currentJump = this.defence.update(t) === 1 && this.isOpponentCloseBehind(180);
  };
  return e;
}(n.BaseAIController);
exports.AIController2 = o;