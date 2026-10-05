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
var n = require("./0.js");
var a = require("./3.js");
var o = function (t) {
  function e() {
    var e = t.call(this, a.default.game) || this;
    e.beginFill(0);
    e.drawRect(0, 0, 1398, 480);
    e.endFill();
    e.alpha = 0;
    e.callBackOnShow = null;
    e.callBackOnHide = null;
    e.contextForAll = null;
    return e;
  }
  s(e, t);
  e.prototype.setCallBacks = function (t, e, i) {
    if (this.callBackOnShow === null) {
      this.callBackOnShow = t;
      this.callBackOnHide = e;
      this.contextForAll = i;
    }
  };
  e.prototype.setTime = function (t) {
    this.time = t;
  };
  e.prototype.show = function () {
    this.alpha = 0;
    var t = a.default.game.add.tween(this);
    t.onComplete.add(this.callBackOnShow, this.contextForAll);
    t.to({
      alpha: 1
    }, this.time, n.Easing.Linear.None, false, this.time).start();
  };
  e.prototype.hide = function () {
    this.alpha = 1;
    var t = a.default.game.add.tween(this);
    t.onComplete.add(this.callBackOnHide, this.contextForAll);
    t.to({
      alpha: 0
    }, this.time).start();
  };
  return e;
}(n.Graphics);
exports.MatchPreloader = o;