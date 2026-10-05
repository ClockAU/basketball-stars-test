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
var n = require("./42.js");
var a = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.names = ["points3", "dunks", "fromBlock", "buzzer", "blocks", "steals", "scores", "pointsM", "pointsMH", "pointsT", "pointsTH", "idNet", "forum", "GC1", "SC1", "BC1", "GC2", "SC2", "BC2", "GC1H", "GC2H"];
    e.count = 21;
    e.createEmpty();
    return e;
  }
  s(e, t);
  e.prototype.checkAchievement = function (t) {
    if (this.values[t] === 0) {
      this.values[t] = 1;
    }
  };
  e.prototype.getValuesForRead = function () {
    return this.values;
  };
  return e;
}(n.BaseData);
exports.AchievsData = a;