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
var n = require("./1.js");
var a = require("./4.js");
var o = require("./9.js");
var r = require("./0.js");
var h = function (t) {
  function e(e, i, s = null) {
    var h = t.call(this, e) || this;
    e.add.existing(h);
    if (i.backgroundBase) {
      var l = h.game.make.sprite(0, 0, n.Atlases.Preloader, o.default.BASE_BG[o.default.INDEX_BG + 1 === 3 ? 0 : o.default.INDEX_BG + 1] + "0000");
      i.backgroundBase.addChildAt(l, 0);
      l.alpha = 0.5;
      var c = h.game.add.tween(l);
      c.to({
        alpha: 1
      }, a.default.PRELOADER_TIME_HALF, r.Easing.Linear.None);
      c.start();
      o.default.INDEX_BG++;
      if (o.default.INDEX_BG >= o.default.BASE_BG.length) {
        o.default.INDEX_BG = 0;
      }
      if (i.backgroundBaseMask) {
        i.backgroundBase.mask = i.backgroundBaseMask;
      }
    }
    if (s !== null) {
      s.call(i);
    }
    return h;
  }
  s(e, t);
  return e;
}(Phaser.Graphics);
exports.default = h;