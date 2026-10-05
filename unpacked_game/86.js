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
var a = nape.geom.Vec2;
var o = nape.shape.Polygon;
var r = nape.phys.Body;
var h = nape.phys.BodyType;
var l = require("./13.js");
var c = require("./3.js");
var u = require("./1.js");
var d = require("./0.js");
var p = require("./5.js");
var f = function (t) {
  function e(e) {
    var i = t.call(this) || this;
    i.showTime = 3;
    i.currentTime = 0;
    i.animBlur = null;
    i.animStart = null;
    i.anim = null;
    i.objType = n.ObjectsType.EFFECTS;
    i.graphic = new Phaser.Group(c.default.game);
    i.animBlur = new Phaser.Image(c.default.game, 1, 0, u.Atlases.Gameplay, "ShieldMC0000");
    i.animStart = new Phaser.Image(c.default.game, 1, 0, u.Atlases.Gameplay, "ShieldMC0000");
    i.animBlur.anchor.set(0.5);
    i.animStart.anchor.set(0.5);
    i.anim = c.default.game.make.sprite(0, 0, u.Atlases.Gameplay, "bg0000");
    i.anim.anchor.set(0.5);
    i.anim.animations.add("ShieldMC2", Phaser.Animation.generateFrameNames("ShieldMC2", 0, 20, "", 4));
    i.anim.animations.getAnimation("ShieldMC2").play(30);
    i.anim.animations.getAnimation("ShieldMC2").stop();
    i.anim.animations.getAnimation("ShieldMC2").onStart.add(i.addBodyToSpace, i);
    i.anim.animations.getAnimation("ShieldMC2").onComplete.add(i.blickComplete, i);
    var s;
    var d = -49;
    if (e === -1) {
      s = n.ObjectsData.BASKET_CENTER - 13;
      i.basket = l.MainGameCore.instance.basket1;
      d += 26;
    } else {
      s = n.ObjectsData.BASKET_CENTER2 + 13;
      i.graphic.scale.set(-1, 1);
      i.basket = l.MainGameCore.instance.basket2;
    }
    var p = n.ObjectsData.BASKET_HEIGHT - 40;
    i.filterBlur = c.default.game.add.filter("BlurY");
    i.body = new r(h.STATIC, a.get(s, p));
    var f = new o(o.rect(d, 30, 70, 10));
    f.filter = n.Filters.ARENA;
    f.cbTypes.add(n.CbTypes.cbShield);
    i.body.shapes.add(f);
    i.body.userData.side = e;
    t.prototype.add.call(i);
    i.graphic.addChild(i.animStart);
    i.graphic.addChild(i.animBlur);
    i.graphic.addChild(i.anim);
    i.animBlur.filters = [i.filterBlur];
    i.theSpace = i.body.space;
    i.body.space = null;
    i.hide();
    return i;
  }
  s(e, t);
  e.prototype.blickComplete = function () {
    this.currentTime = 0;
    this.anim.visible = false;
  };
  e.prototype.addBodyToSpace = function () {
    this.body.space = this.theSpace;
  };
  e.prototype.activate = function () {
    this.startPlay();
    this.basket.hideEar();
    p.default.getInstance().play(u.Sounds.shield);
  };
  e.prototype.hide = function () {
    this.graphic.visible = false;
    this.currentTime = -1;
  };
  e.prototype.startPlay = function () {
    this.graphic.alpha = 1;
    this.graphic.visible = true;
    this.animBlur.visible = true;
    this.animStart.visible = false;
    var t = c.default.game.add.tween(this.animBlur);
    t.from({
      y: -600
    }, 120, d.Easing.Back.Out, false);
    t.start();
    t = c.default.game.add.tween({
      x: 0
    });
    t.onComplete.addOnce(this.blackTween, this);
    t.to({
      x: 100
    }, 140, d.Easing.Linear.None, false);
    t.start();
  };
  e.prototype.blackTween = function () {
    this.animStart.visible = true;
    this.animBlur.visible = false;
    this.anim.visible = true;
    this.anim.animations.getAnimation("ShieldMC2").play(30);
  };
  e.prototype.update = function (t = 0) {
    if (this.graphic.visible && this.currentTime >= 0 && (this.currentTime += t, this.currentTime >= this.showTime)) {
      this.currentTime = -1;
      var e = c.default.game.add.tween(this.graphic);
      e.onComplete.addOnce(this.hide, this);
      e.to({
        alpha: 0
      }, 500).start();
      this.body.space = null;
      this.basket.showEar();
    }
  };
  e.prototype.release = function () {
    this.theSpace = null;
    this.basket = null;
  };
  return e;
}(n.GameObject);
exports.ShieldObject = f;