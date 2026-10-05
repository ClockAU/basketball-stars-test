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
var n = nape.geom.Vec2;
var a = nape.phys.Body;
var o = nape.phys.BodyType;
var r = nape.shape.Polygon;
var h = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.objType = h.ObjectsType.ARENA;
    e.create();
    e.add();
    return e;
  }
  s(e, t);
  e.prototype.create = function () {
    this.createBody();
    this.createGraphic();
  };
  e.prototype.createBody = function () {
    this.body = new a(o.STATIC, n.get(0, 0));
    var t = new r(r.rect(-50, 420, 900, 60), h.Materials.FlOOR, h.Filters.ARENA);
    t.cbTypes.add(h.CbTypes.cbGround);
    this.body.shapes.add(t);
    var e = new r(r.rect(0, -800, 5, 1300), h.Materials.FlOOR, h.Filters.BORDER);
    e.cbTypes.add(h.CbTypes.cbBorders);
    this.body.shapes.add(e);
    var i = new r(r.rect(795, -800, 5, 1300), h.Materials.FlOOR, h.Filters.BORDER);
    i.cbTypes.add(h.CbTypes.cbBorders);
    this.body.shapes.add(i);
    var s = new r(r.rect(-80, -800, 40, 1300), h.Materials.FlOOR, h.Filters.ARENA);
    s.cbTypes.add(h.CbTypes.cbBorders);
    this.body.shapes.add(s);
    var l = new r(r.rect(840, -800, 5, 1300), h.Materials.FlOOR, h.Filters.ARENA);
    l.cbTypes.add(h.CbTypes.cbBorders);
    this.body.shapes.add(l);
  };
  e.prototype.createGraphic = function () {
    var t = new Phaser.Group(c.default.game);
    var e = new Phaser.Image(c.default.game, 0, 0, l.Atlases.Gameplay, "0bg_gameplay0000");
    t.addChild(e);
    this.graphic = t;
  };
  e.rndPart = function () {
    return 1 + Math.random() * 6 >> 0;
  };
  e.prototype.setLogo = function (t) {};
  return e;
}(h.GameObject);
exports.ArenaObject = u;