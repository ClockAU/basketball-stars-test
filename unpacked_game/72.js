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
var a = require("./4.js");
var o = require("./73.js");
var r = function (t) {
  function e(e, i, s) {
    var n = t.call(this) || this;
    n.baseData = new o.AchievsData();
    n.limits = a.default.LIMITS_FOR_ACHIEVS;
    n.init(e, i, s);
    return n;
  }
  s(e, t);
  e.prototype.getValuesForRead = function () {
    return this.baseData.getValuesForRead();
  };
  e.prototype.updateData = function (t, e = 0) {
    if (this.values[t] !== 1) {
      if (t < 11) {
        if (e >= this.limits[t]) {
          this.setAchievement(t);
        }
      } else {
        this.setAchievement(t);
      }
    }
  };
  e.prototype.setAchievement = function (t) {
    this.values[t] = 1;
    this.saveData();
  };
  return e;
}(n.BaseDataManager);
exports.AchievsDataManager = r;