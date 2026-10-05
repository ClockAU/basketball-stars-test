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
var n = require("./5.js");
var a = require("./3.js");
var o = require("./35.js");
var r = require("./13.js");
var h = require("./1.js");
var l = require("./7.js");
var c = require("./2.js");
var u = require("./15.js");
var d = function (t) {
  function e() {
    var e = t.call(this, a.default.game) || this;
    e.timer = null;
    e.x = 400;
    e.y = 77;
    e.timer = new l.default(a.default.game, " ", o.default.styleTimer, null, null, h.Atlases.Gameplay);
    e.addChild(e.timer);
    e.timer.label.setMaxSize(150, 70);
    e.timer.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    e.timer.label.setShadow(3, 3, "rgba(0,0,0,0.5)", 5);
    e.timer.setText("2:00");
    return e;
  }
  s(e, t);
  e.prototype.start = function (t) {
    this.wasEnd = false;
    this.fullTime = t;
    this.noticeTime = 4;
    this.process(0);
  };
  Object.defineProperty(e.prototype, "fullTimeMatch", {
    get: function () {
      return this.fullTime;
    },
    enumerable: true,
    configurable: true
  });
  e.prototype.updateScore = function (t, e) {
    if (t === 1) {
      r.MainGameCore.instance.infoPanel.updateScore(e, c.Inventory.instance.matchData.matchScore[1]);
    } else {
      r.MainGameCore.instance.infoPanel.updateScore(c.Inventory.instance.matchData.matchScore[0], e);
    }
  };
  e.prototype.process = function (t) {
    var e = this.fullTime - t;
    if (e <= 0) {
      if (!this.wasEnd) {
        this.timer.label.text = "00.0";
        this.wasEnd = true;
        u.Signals.MatchEndSignal.dispatch();
      }
    } else if (e === 120) {
      this.timer.label.text = "2:00";
    } else if (e >= 60) {
      var i = e - 60 >> 0;
      this.timer.label.text = i >= 10 ? "1:" + i.toString() : "1:0" + i.toString();
    } else {
      var s = e >> 0;
      var a = (e - s) * 10 >> 0;
      if (e >= 10) {
        this.timer.label.text = s.toString() + "." + a.toString();
      } else {
        this.timer.label.text = "0" + s.toString() + "." + a.toString();
        if (s === this.noticeTime && this.noticeTime >= 0) {
          n.default.getInstance().play(h.Sounds.m_countdown);
          this.noticeTime--;
        }
      }
    }
  };
  return e;
}(Phaser.Group);
exports.TimerObject = d;