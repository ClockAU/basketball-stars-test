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
var n = require("./2.js");
var a = require("./19.js");
var o = require("./3.js");
var r = require("./1.js");
var h = require("./0.js");
var l = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.tween = null;
    e.blackBg = null;
    e.whiteBg = null;
    e.anim = null;
    e.graphic = new Phaser.Group(o.default.game);
    e.blackBg = o.default.game.make.sprite(0, 0, r.Atlases.Gameplay, "teleport10000");
    e.whiteBg = o.default.game.make.sprite(0, 0, r.Atlases.Gameplay, "teleport40000");
    e.anim = o.default.game.make.sprite(0, 0, r.Atlases.Gameplay, "bg0000");
    e.anim.anchor.set(0.5);
    e.anim.animations.add("teleport3", Phaser.Animation.generateFrameNames("teleport3", 0, 3, "", 4));
    e.anim.animations.getAnimation("teleport3").play(30);
    e.anim.animations.getAnimation("teleport3").stop();
    e.blackBg.anchor.set(0.5);
    e.whiteBg.anchor.set(0.5);
    var i = o.default.game.make.image(0, 0, r.Atlases.Gameplay, "teleport20000");
    i.anchor.set(0.5);
    e.graphic.addChild(e.blackBg);
    e.graphic.addChild(e.anim);
    e.graphic.addChild(e.whiteBg);
    e.blackBg.addChild(i);
    e.objType = a.ObjectsType.EFFECTS;
    e.endPlay();
    t.prototype.add.call(e);
    return e;
  }
  s(e, t);
  e.prototype.startPlay = function (t, e) {
    this.graphic.x = t;
    this.graphic.y = e;
    this.graphic.visible = true;
    this.anim.visible = false;
    this.whiteBg.visible = false;
    this.whiteBg.scale.set(0.086, 0.027);
    this.blackBg.scale.set(0.12);
    var i = this.blackBg.game.add.tween(this.blackBg.scale);
    i.onComplete.addOnce(this.blackTween, this);
    i.to({
      x: 1,
      y: 1
    }, 60, h.Easing.Linear.None, false);
    i.start();
    i = this.blackBg.game.add.tween(this.blackBg);
    i.to({
      angle: 180
    }, 60, h.Easing.Linear.None, false);
    i.start();
  };
  e.prototype.blackTween = function () {
    this.anim.visible = true;
    var t = this.blackBg.game.add.tween(this.blackBg.scale);
    t.to({
      x: 0,
      y: 0
    }, 80, h.Easing.Back.In, false);
    t.start();
    var e = this.blackBg.game.add.tween(this.blackBg);
    e.onComplete.addOnce(this.whiteTween, this);
    e.to({
      angle: 360
    }, 70, h.Easing.Linear.None, false);
    e.start();
    this.anim.animations.getAnimation("teleport3").play(30);
  };
  e.prototype.whiteTween = function () {
    this.whiteBg.visible = true;
    this.anim.visible = false;
    var t = this.blackBg.game.add.tween(this.whiteBg.scale);
    t.onComplete.addOnce(this.endPlay, this);
    t.to({
      x: 0.658,
      y: 0.596
    }, 30, h.Easing.Linear.None).to({
      x: 0.084,
      y: 1.258
    }, 30, h.Easing.Linear.None).to({
      x: 0.028,
      y: 0.072
    }, 24, h.Easing.Linear.None);
    t.start();
  };
  e.prototype.endPlay = function () {
    this.graphic.visible = false;
  };
  return e;
}(n.GameObject);
exports.Teleport = l;