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
var n = require("./41.js");
var a = require("./75.js");
var o = function (t) {
  function e(e, i, s, n) {
    var o = t.call(this) || this;
    o.baseData = new a.StatsData();
    o.achievsMgr = n;
    o.init(e, i, s);
    o.scoresNo = o.values.length - 2;
    return o;
  }
  s(e, t);
  e.prototype.updateData = function (t, e = 0) {
    if (t === 6) {
      this.incScore();
    } else {
      if (t === 0) {
        this.incScore(3);
      } else if (t < 4) {
        this.incScore();
      }
      this.values[t]++;
      this.achievsMgr.updateData(t, this.values[t]);
    }
    this.saveData();
  };
  e.prototype.updateScore = function (t, e) {
    var i = this.scoresNo + e;
    if (t > this.values[i]) {
      this.values[i] = t;
      this.saveData();
    }
  };
  e.prototype.getTotalScores = function () {
    return this.values[this.scoresNo] + this.values[this.scoresNo + 1];
  };
  e.prototype.incScore = function (t = 2) {
    this.values[6] += t;
    this.achievsMgr.updateData(6, this.values[6]);
  };
  return e;
}(n.BaseDataManager);
exports.StatsDataManager = o;