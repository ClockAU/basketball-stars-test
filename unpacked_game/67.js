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
var a = require("./10.js");
var o = require("./1.js");
var r = require("./4.js");
var h = function (t) {
  function e() {
    var e = t.call(this, n.default.game) || this;
    e.emblem1 = null;
    e.emblem2 = null;
    e.score1 = null;
    e.score2 = null;
    e.x = r.default.GAME_W2;
    e.y = 60;
    var i = e.game.add.sprite(0, -6, o.Atlases.Gameplay, "infoPanel0000");
    i.anchor.set(0.5);
    e.addChild(i);
    e.emblem1 = e.game.add.image(-101, -18, o.Atlases.Gameplay, "bg0000");
    e.emblem2 = e.game.add.image(103, -18, o.Atlases.Gameplay, "bg0000");
    e.emblem1.anchor.set(0.5);
    e.emblem2.anchor.set(0.5);
    e.emblem1.scale.set(0.25);
    e.emblem2.scale.set(0.25);
    var s = {
      font: "46px CfCrackBold",
      fill: "#FF9900"
    };
    e.score1 = new a.default(e.game, -10, 5, "", s);
    e.score1.anchor.set(1, 1);
    e.score1.stroke = "#000000";
    e.score1.strokeThickness = 2;
    e.addChild(e.score1);
    e.score2 = new a.default(e.game, 14, 5, "", s);
    e.score2.anchor.set(0, 1);
    e.score2.stroke = "#000000";
    e.score2.strokeThickness = 2;
    e.addChild(e.score2);
    e.addChild(e.emblem1);
    e.addChild(e.emblem2);
    return e;
  }
  s(e, t);
  e.prototype.start = function (t, e, i) {
    this.emblem1.loadTexture(o.Atlases.Interface, "Emblems00" + (t[0] - 1 < 10 ? "0" : "") + (t[0] - 1));
    this.emblem2.loadTexture(o.Atlases.Interface, "Emblems00" + (t[1] - 1 < 10 ? "0" : "") + (t[1] - 1));
    this.score1.text = e.toString();
    this.score2.text = i.toString();
  };
  e.prototype.updateScore = function (t, e) {
    this.score1.text = t.toString();
    this.score2.text = e.toString();
  };
  return e;
}(Phaser.Group);
exports.InfoPanelGUI = h;