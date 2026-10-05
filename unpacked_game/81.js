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
var o = nape.geom.Vec2;
var r = nape.phys.Body;
var h = nape.phys.BodyType;
var l = nape.constraint.PivotJoint;
var c = nape.constraint.DistanceJoint;
var u = nape.shape.Polygon;
var d = require("./22.js");
var p = require("./3.js");
var f = require("./1.js");
var g = function (t) {
  function e(e) {
    var i = t.call(this) || this;
    i.objType = n.ObjectsType.BASKET;
    i.side = e;
    i.radius = n.ObjectsData.BASKET_RADIUS;
    i.height = n.ObjectsData.BASKET_HEIGHT;
    i.partRadius = n.ObjectsData.BASKET_PART_RADIUS;
    if (e === -1) {
      i.center = n.ObjectsData.BASKET_CENTER;
      i.glassPos = -i.center;
    } else {
      i.center = n.ObjectsData.BASKET_CENTER2;
      i.glassPos = n.ObjectsData.BASKET_CENTER - n.ObjectsData.GLASS_WIDTH;
    }
    i.leftPoint = i.center - i.radius;
    i.rightPoint = i.center + i.radius;
    i.theSpace = d.NapePhysics.space;
    i.createGlass();
    i.createRing();
    i.createNet();
    i.createGraphic();
    t.prototype.add.call(i);
    return i;
  }
  s(e, t);
  e.prototype.showEar = function () {
    this.frontEar.alpha = 1;
    p.default.game.add.tween(this.frontEar).from({
      alpha: 0
    }, 500).start();
  };
  e.prototype.hideEar = function () {
    p.default.game.add.tween(this.frontEar).to({
      alpha: 0
    }, 500).start();
  };
  e.prototype.createGlass = function () {
    this.body = new r(h.STATIC, o.weak(this.center, this.height));
    this.glass = new u(u.rect(this.glassPos, n.ObjectsData.GLASS_Y, n.ObjectsData.GLASS_WIDTH, n.ObjectsData.GLASS_HEIGHT), n.Materials.GLASS, n.Filters.BASKET);
    this.glass.cbTypes.add(n.CbTypes.cbBasket);
    this.body.shapes.add(this.glass);
    this.body.userData.side = this.side;
  };
  e.prototype.createRing = function () {
    this.leftPart = n.NapeUtil.createCircleBody(h.STATIC, n.Filters.BASKET, false, this.partRadius, this.leftPoint, this.height, 0, n.CbTypes.cbRing, n.Materials.BASKET);
    this.leftPart.space = this.theSpace;
    this.rightPart = n.NapeUtil.createCircleBody(h.STATIC, n.Filters.BASKET, false, this.partRadius, this.rightPoint, this.height, 0, n.CbTypes.cbRing, n.Materials.BASKET);
    this.rightPart.space = this.theSpace;
    this.centerPart = n.NapeUtil.createCircleBody(h.STATIC, n.Filters.BASKET, true, this.partRadius, this.center, this.height, 0, n.CbTypes.cbRing, n.Materials.BASKET);
    this.centerPart.space = this.theSpace;
    this.upperSensor = new u(u.rect(-n.ObjectsData.SENSOR_HALF, n.ObjectsData.SENSOR_UP, n.ObjectsData.SENSOR_WIDTH, n.ObjectsData.SENSOR_HEIGHT), null, n.Filters.BASKET);
    this.upperSensor.sensorEnabled = true;
    this.upperSensor.cbTypes.add(n.CbTypes.cbUpperSensor);
    this.body.shapes.add(this.upperSensor);
    this.downSensor = new u(u.rect(-n.ObjectsData.SENSOR_HALF, n.ObjectsData.SENSOR_DOWN, n.ObjectsData.SENSOR_WIDTH, n.ObjectsData.SENSOR_HEIGHT), null, n.Filters.BASKET);
    this.downSensor.sensorEnabled = true;
    this.downSensor.cbTypes.add(n.CbTypes.cbDownSensor);
    this.body.shapes.add(this.downSensor);
  };
  e.prototype.createNet = function () {
    var t = this.leftPoint + 2;
    var e = this.rightPoint - 2;
    var i = this.height + 3;
    var s = new o(t, i);
    var a = new o(this.center, i);
    var r = new o(e, i);
    var h = new o(t, i + 14);
    var u = new o(this.center, i + 12);
    var d = new o(e, i + 14);
    var p = new o(t, i + 32);
    var f = new o(this.center, i + 30);
    var g = new o(e, i + 32);
    this.body1 = this.createBody(s.x, (s.y + h.y) / 2, n.Filters.NET_COLLIDE);
    this.body2 = this.createBody(h.x, (h.y + p.y) / 2, n.Filters.NET_COLLIDE);
    this.body3 = this.createBody(r.x, (r.y + d.y) / 2, n.Filters.NET_COLLIDE);
    this.body4 = this.createBody(d.x, (d.y + g.y) / 2, n.Filters.NET_COLLIDE);
    this.body5 = this.createBody(a.x, (a.y + u.y) / 2, n.Filters.NET_NOT_COLLIDE);
    this.body6 = this.createBody(u.x, (u.y + f.y) / 2, n.Filters.NET_NOT_COLLIDE);
    this.body7 = this.createBody(p.x, p.y + 4, n.Filters.NET_NOT_COLLIDE);
    this.body8 = this.createBody(g.x, g.y + 4, n.Filters.NET_NOT_COLLIDE);
    this.body9 = this.createBody(f.x, f.y + 4, n.Filters.NET_NOT_COLLIDE);
    this.pivotJoint1 = new l(this.body1, this.leftPart, this.body1.worldPointToLocal(s), this.leftPart.worldPointToLocal(s));
    this.pivotJoint2 = new l(this.body1, this.body2, this.body1.worldPointToLocal(h), this.body2.worldPointToLocal(h));
    this.addPivotJoint(this.pivotJoint1);
    this.addPivotJoint(this.pivotJoint2);
    this.pivotJoint3 = new l(this.body3, this.rightPart, this.body3.worldPointToLocal(r), this.rightPart.worldPointToLocal(r));
    this.pivotJoint4 = new l(this.body3, this.body4, this.body3.worldPointToLocal(d), this.body4.worldPointToLocal(d));
    this.addPivotJoint(this.pivotJoint3);
    this.addPivotJoint(this.pivotJoint4);
    this.pivotJoint5 = new l(this.body5, this.centerPart, this.body5.worldPointToLocal(a), this.centerPart.worldPointToLocal(a));
    this.pivotJoint6 = new l(this.body5, this.body6, this.body5.worldPointToLocal(u), this.body6.worldPointToLocal(u));
    this.addPivotJoint(this.pivotJoint5);
    this.addPivotJoint(this.pivotJoint6);
    this.pivotJoint7 = new l(this.body2, this.body7, this.body2.worldPointToLocal(p), this.body7.worldPointToLocal(p));
    this.addPivotJoint(this.pivotJoint7);
    this.pivotJoint8 = new l(this.body4, this.body8, this.body4.worldPointToLocal(g), this.body8.worldPointToLocal(g));
    this.addPivotJoint(this.pivotJoint8);
    this.pivotJoint9 = new l(this.body6, this.body9, this.body6.worldPointToLocal(f), this.body9.worldPointToLocal(f));
    this.addPivotJoint(this.pivotJoint9);
    this.distJoint1 = new c(this.body1, this.body5, this.body1.worldPointToLocal(h), this.body5.worldPointToLocal(u), 14, 14);
    this.distJoint2 = new c(this.body3, this.body5, this.body3.worldPointToLocal(d), this.body5.worldPointToLocal(u), 14, 14);
    this.addDistanceJoint(this.distJoint1);
    this.addDistanceJoint(this.distJoint2);
    this.distJoint3 = new c(this.body2, this.body6, this.body2.worldPointToLocal(p), this.body6.worldPointToLocal(f), 13, 13);
    this.distJoint4 = new c(this.body6, this.body4, this.body6.worldPointToLocal(f), this.body4.worldPointToLocal(g), 13, 13);
    this.addDistanceJoint(this.distJoint3);
    this.addDistanceJoint(this.distJoint4);
  };
  e.prototype.createBody = function (t, e, i) {
    var s = new r(h.DYNAMIC, new o(t, e));
    var a = new u(u.box(2, 14), n.Materials.NET, i);
    s.shapes.add(a);
    s.space = this.theSpace;
    return s;
  };
  e.prototype.addPivotJoint = function (t) {
    t.ignore = true;
    t.space = this.theSpace;
  };
  e.prototype.addDistanceJoint = function (t) {
    t.stiff = false;
    t.frequency = 4;
    t.ignore = true;
    t.space = this.theSpace;
  };
  e.prototype.dampNet = function (t) {
    this.updateBodyDampening(this.body1, t);
    this.updateBodyDampening(this.body2, t);
    this.updateBodyDampening(this.body3, t);
    this.updateBodyDampening(this.body4, t);
    this.updateBodyDampening(this.body5, t);
    this.updateBodyDampening(this.body6, t);
    this.updateBodyDampening(this.body7, t);
    this.updateBodyDampening(this.body8, t);
    this.updateBodyDampening(this.body9, t);
  };
  e.prototype.updateBodyDampening = function (t, e) {
    t.velocity.muleq(Math.pow(0.2, e));
    t.angularVel *= Math.pow(0.2, e);
  };
  e.prototype.createGraphic = function () {
    this.graphic = new Phaser.Group(p.default.game);
    var t = new a.Image(p.default.game, 0, 0, f.Atlases.Gameplay, "BasketGraphic0000");
    t.anchor.set(0.64, 0.75);
    this.graphic.addChild(t);
    var e = this.side === -1 ? 1 : -1;
    this.graphic.scale.set(e, 1);
    this.netSpritegraphics = new a.Graphics(p.default.game);
    this.netSpritegraphics.x = -this.center;
    this.netSpritegraphics.y = -this.height;
    this.updateGraphics();
    this.frontEar = new a.Sprite(p.default.game, 0, 0, f.Atlases.Gameplay, "FrontEar0000");
    this.frontEar.x = this.center;
    this.frontEar.y = this.height;
    this.frontEar.anchor.set(0.5);
    this.frontEar.scale.set(e, 1);
    this.frontEar.addChildAt(this.netSpritegraphics, 0);
  };
  e.prototype.updateGraphics = function () {
    this.netSpritegraphics.clear();
    this.netSpritegraphics.beginFill(16777215);
    this.netSpritegraphics.lineStyle(2, 16777215);
    var t = this.pivotJoint1.body1.localPointToWorld(this.pivotJoint1.anchor1);
    var e = this.pivotJoint2.body1.localPointToWorld(this.pivotJoint2.anchor1);
    this.netSpritegraphics.moveTo(t.x, t.y);
    this.netSpritegraphics.lineTo(e.x, e.y);
    var i = this.pivotJoint2.body1.localPointToWorld(this.pivotJoint2.anchor1);
    var s = this.pivotJoint7.body1.localPointToWorld(this.pivotJoint7.anchor1);
    this.netSpritegraphics.moveTo(i.x, i.y);
    this.netSpritegraphics.lineTo(s.x, s.y);
    var n = this.pivotJoint3.body1.localPointToWorld(this.pivotJoint3.anchor1);
    var a = this.pivotJoint4.body1.localPointToWorld(this.pivotJoint4.anchor1);
    this.netSpritegraphics.moveTo(n.x, n.y);
    this.netSpritegraphics.lineTo(a.x, a.y);
    var r = this.pivotJoint4.body1.localPointToWorld(this.pivotJoint4.anchor1);
    var h = this.pivotJoint8.body1.localPointToWorld(this.pivotJoint8.anchor1);
    this.netSpritegraphics.moveTo(r.x, r.y);
    this.netSpritegraphics.lineTo(h.x, h.y);
    var l = this.pivotJoint5.body1.localPointToWorld(this.pivotJoint5.anchor1);
    var c = this.pivotJoint6.body1.localPointToWorld(this.pivotJoint6.anchor1);
    this.netSpritegraphics.moveTo(l.x, l.y);
    this.netSpritegraphics.lineTo(c.x, c.y);
    var u = this.pivotJoint6.body1.localPointToWorld(this.pivotJoint6.anchor1);
    var d = this.pivotJoint9.body1.localPointToWorld(this.pivotJoint9.anchor1);
    this.netSpritegraphics.moveTo(u.x, u.y);
    this.netSpritegraphics.lineTo(d.x, d.y);
    var p = this.distJoint1.body1.localPointToWorld(this.distJoint1.anchor1);
    var f = this.distJoint1.body2.localPointToWorld(this.distJoint1.anchor1);
    this.netSpritegraphics.moveTo(p.x, p.y);
    this.netSpritegraphics.lineTo(f.x, f.y);
    var g = this.distJoint2.body1.localPointToWorld(this.distJoint2.anchor1);
    var m = this.distJoint2.body2.localPointToWorld(this.distJoint2.anchor1);
    this.netSpritegraphics.moveTo(g.x, g.y);
    this.netSpritegraphics.lineTo(m.x, m.y);
    var y = this.distJoint3.body1.localPointToWorld(this.distJoint3.anchor1);
    var v = this.distJoint3.body2.localPointToWorld(this.distJoint3.anchor1);
    this.netSpritegraphics.moveTo(y.x, y.y);
    this.netSpritegraphics.lineTo(v.x, v.y);
    var b = this.distJoint4.body1.localPointToWorld(this.distJoint4.anchor1);
    var _ = this.distJoint4.body2.localPointToWorld(this.distJoint4.anchor1);
    this.netSpritegraphics.moveTo(b.x, b.y);
    this.netSpritegraphics.lineTo(_.x, _.y);
    var x = this.pivotJoint7.body2.localPointToWorld(this.pivotJoint7.anchor2);
    var w = this.pivotJoint7.body2.localPointToWorld(new o(0, 5));
    this.netSpritegraphics.moveTo(x.x, x.y);
    this.netSpritegraphics.lineTo(w.x, w.y);
    var P = this.pivotJoint9.body2.localPointToWorld(this.pivotJoint9.anchor2);
    var T = this.pivotJoint9.body2.localPointToWorld(new o(0, 5));
    this.netSpritegraphics.moveTo(P.x, P.y);
    this.netSpritegraphics.lineTo(T.x, T.y);
    var S = this.pivotJoint8.body2.localPointToWorld(this.pivotJoint8.anchor2);
    var C = this.pivotJoint8.body2.localPointToWorld(new o(0, 5));
    this.netSpritegraphics.moveTo(S.x, S.y);
    this.netSpritegraphics.lineTo(C.x, C.y);
    this.netSpritegraphics.endFill();
  };
  e.prototype.update = function (t = 0) {
    this.dampNet(t);
    this.updateGraphics();
  };
  e.prototype.release = function () {
    this.glass = null;
    this.leftPart = null;
    this.rightPart = null;
    this.centerPart = null;
    this.body1 = null;
    this.body2 = null;
    this.body3 = null;
    this.body4 = null;
    this.body5 = null;
    this.body6 = null;
    this.body7 = null;
    this.body8 = null;
    this.body9 = null;
    this.pivotJoint1.space = null;
    this.pivotJoint1 = null;
    this.pivotJoint2.space = null;
    this.pivotJoint2 = null;
    this.pivotJoint3.space = null;
    this.pivotJoint3 = null;
    this.pivotJoint4.space = null;
    this.pivotJoint4 = null;
    this.pivotJoint5.space = null;
    this.pivotJoint5 = null;
    this.pivotJoint6.space = null;
    this.pivotJoint6 = null;
    this.pivotJoint7.space = null;
    this.pivotJoint7 = null;
    this.pivotJoint8.space = null;
    this.pivotJoint8 = null;
    this.pivotJoint9.space = null;
    this.pivotJoint9 = null;
    this.distJoint1.space = null;
    this.distJoint1 = null;
    this.distJoint2.space = null;
    this.distJoint2 = null;
    this.distJoint3.space = null;
    this.distJoint3 = null;
    this.distJoint4.space = null;
    this.distJoint4 = null;
    this.upperSensor = null;
    this.downSensor = null;
    this.theSpace = null;
    this.frontEar.removeChild(this.netSpritegraphics);
    this.netSpritegraphics = null;
    this.frontEar = null;
    t.prototype.release.call(this);
  };
  return e;
}(n.GameObject);
exports.BasketObject = g;