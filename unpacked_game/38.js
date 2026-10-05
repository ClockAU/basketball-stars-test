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
var n = require("./3.js");
var a = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    i.game = e;
    return i;
  }
  s(e, t);
  e.prototype.add = function (t) {};
  e.prototype.shake = function (t) {};
  e.prototype.shakeContainer = function (t = null, e) {
    var i = n.default.game.add.tween(t);
    var s = t.x;
    var a = t.y;
    i.to({
      x: t.x - e,
      y: t.y - e
    }, 25, Phaser.Easing.Bounce.InOut, false, 0, 4, true);
    i.onComplete.addOnce(function () {
      t.x = s;
      t.y = a;
    }, this);
    i.start();
  };
  e.prototype.release = function () {
    this.game = null;
  };
  e.prototype.start = function () {};
  e.prototype.resize = function () {};
  return e;
}(Phaser.Group);
exports.GameView = a;