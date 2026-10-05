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
var a = require("./0.js");
var o = nape.geom.Ray;
var r = nape.geom.Vec2;
var h = require("./22.js");
var l = require("./3.js");
var c = require("./1.js");
var u = function (t) {
  function e(e, i) {
    var s = t.call(this) || this;
    s.objType = n.ObjectsType.SHADOW;
    s.space = h.NapePhysics.space;
    s.owner = e;
    s.ray = new o(r.weak(e.x, e.y), r.weak(0, 1));
    s.graphic = new a.Sprite(l.default.game, 0, 0, c.Atlases.Gameplay, "ShadowMC0002");
    s.graphic.anchor.set(0.5);
    s.dist = 250;
    var u;
    if (i === 0) {
      s.dist = 400;
      s.graphic.scale.set(0.7);
    } else if (i !== 1) {
      if (i === 2) {
        u = new Phaser.Image(l.default.game, 0, 0, c.Atlases.Gameplay, "ShadowMC0000");
        u.anchor.set(0.5);
        s.graphic.addChild(u);
      } else if (i === 3) {
        u = new Phaser.Image(l.default.game, 0, 0, c.Atlases.Gameplay, "ShadowMC0001");
        u.anchor.set(0.5);
        s.graphic.addChild(u);
      }
    }
    t.prototype.add.call(s);
    return s;
  }
  s(e, t);
  e.prototype.update = function (t = 0) {
    if (this.space && this.graphic.visible) {
      this.ray.origin = r.weak(this.owner.x, this.owner.y);
      var e = this.space.rayCast(this.ray, false, n.Filters.RAY);
      if (e) {
        var i = this.ray.at(e.distance);
        this.graphic.x = i.x;
        this.graphic.y = i.y;
        this.graphic.alpha = 1 - e.distance / this.dist > 0 ? 1 - e.distance / this.dist : 0;
        i.dispose();
        e.dispose();
      }
    }
  };
  e.prototype.release = function () {
    this.space = null;
    this.owner = null;
    this.ray.origin.dispose();
    this.ray.direction.dispose();
    this.ray = null;
    t.prototype.release.call(this);
  };
  e.prototype.show = function () {
    this.graphic.visible = true;
    this.update();
  };
  e.prototype.hide = function () {
    this.graphic.visible = false;
  };
  return e;
}(n.GameObject);
exports.ShadowObject = u;