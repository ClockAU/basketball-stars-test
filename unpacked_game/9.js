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
var n = require("./4.js");
var a = require("./1.js");
var o = require("./0.js");
var r = function (t) {
  function e(i, s, r, h) {
    var l = t.call(this, i) || this;
    if (e.prevState.length === 2) {
      e.prevState.shift();
    }
    e.prevState.push(r + "");
    i.add.existing(l);
    if (s.backgroundBase) {
      var c = l.game.make.sprite(0, 0, a.Atlases.Preloader, e.BASE_BG[e.INDEX_BG + 1 === 3 ? 0 : e.INDEX_BG + 1] + "0000");
      s.backgroundBase.addChildAt(c, 1);
      c.alpha = 0.03;
      if (s.popup) {
        var u = l.game.add.tween(s.popup);
        u.to({
          alpha: 0
        }, n.default.PRELOADER_TIME_HALF, o.Easing.Linear.None);
        u.onComplete.add(function () {
          l.startTransition(s, c, r, h);
        }, l);
        u.start();
      } else {
        l.startTransition(s, c, r, h);
      }
    } else {
      i.state.start(r, true, false, h);
    }
    return l;
  }
  s(e, t);
  e.getBG = function () {
    return this.BASE_BG[this.INDEX_BG] + "0000";
  };
  e.prototype.startTransition = function (t, e, i, s) {
    var a = this;
    if (t.hide) {
      t.hide();
    }
    var r = this.game.add.tween(e);
    r.to({
      alpha: 0.5
    }, n.default.PRELOADER_TIME_HALF, o.Easing.Linear.None);
    r.onComplete.add(function () {
      a.game.state.start(i, true, false, s);
    });
    r.start();
  };
  e.prevState = [];
  e.INDEX_BG = 0;
  e.BASE_BG = ["bg1", "bg2blue", "bg1red"];
  return e;
}(Phaser.Graphics);
exports.default = r;