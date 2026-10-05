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
var a = require("./1.js");
var o = require("./10.js");
var r = function (t) {
  function e() {
    var e = t.call(this, n.default.game) || this;
    e.bg = e.game.add.sprite(0, 0, a.Atlases.Interface, "MatchBack0000");
    e.bg.anchor.set(0.5);
    e.addChild(e.bg);
    var i = {
      font: "bold 24px Impact2",
      fill: "#FFFFFF"
    };
    e.ccc = new o.default(e.game, 30, -22, "-", i);
    e.ccc.anchor.set(0.5);
    e.addChild(e.ccc);
    e.ccc2 = new o.default(e.game, 30, 22, "-", i);
    e.ccc2.anchor.set(0.5);
    e.addChild(e.ccc2);
    e.team1 = e.game.add.image(-30, -21, a.Atlases.Interface, "emptyBg0000");
    e.team1.anchor.set(0.5);
    e.team1.scale.set(0.65);
    e.addChild(e.team1);
    e.team2 = e.game.add.image(-30, 17, a.Atlases.Interface, "emptyBg0000");
    e.team2.anchor.set(0.5);
    e.team2.scale.set(0.65);
    e.addChild(e.team2);
    return e;
  }
  s(e, t);
  e.prototype.setEmblems = function (t, e) {
    var i = this.game.add.image(-30, -21, a.Atlases.Interface, "Emblems00" + (t - 1 < 10 ? "0" : "") + (t - 1));
    var s = this.game.add.image(-30, 17, a.Atlases.Interface, "Emblems00" + (e - 1 < 10 ? "0" : "") + (e - 1));
    i.anchor.set(0.5);
    s.anchor.set(0.5);
    i.scale.set(0.15);
    s.scale.set(0.15);
    this.addChild(i);
    this.addChild(s);
  };
  e.prototype.setBG = function (t) {
    this.bg.loadTexture(a.Atlases.Interface, "MatchBack000" + (t - 1));
  };
  return e;
}(Phaser.Group);
exports.MatchPanelResult = r;