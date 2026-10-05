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
    e.names = ["points3", "dunks", "fromBlock", "buzzer", "blocks", "steals", "scores", "scores1", "scores2"];
    e.count = 9;
    e.createEmpty();
    return e;
  }
  s(e, t);
  return e;
}(n.BaseData);
exports.StatsData = a;