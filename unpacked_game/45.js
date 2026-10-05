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
var a = nape.phys.BodyType;
var o = require("./43.js");
var r = require("./23.js");
var h = require("./2.js");
var l = require("./19.js");
var c = require("./4.js");
var u = require("./29.js");
var d = require("./3.js");
var p = require("./1.js");
var f = require("./46.js");
var g = require("./15.js");
var m = require("./5.js");
var y = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.isWaiting = false;
    e.setVisibleOnframe = false;
    e.gamecore = h.MainGameCore.instance;
    e.objType = l.ObjectsType.BALL;
    e.width = c.default.WIDTH;
    e.velUp = u.ObjectsData.BALL_UP_VELOCITY_Y;
    e.bounceVel = u.ObjectsData.BALL_BOUNCE;
    e.stealVelXBase = u.ObjectsData.BALL_STEAL_VELOCITY_X_BASE;
    e.stealVelXAdd = u.ObjectsData.BALL_STEAL_VELOCITY_X_ADD;
    e.stealVelY = u.ObjectsData.BALL_STEAL_VELOCITY_Y;
    e.xB1 = u.ObjectsData.BASKET_CENTER;
    e.xB2 = u.ObjectsData.BASKET_CENTER2;
    e.yB = u.ObjectsData.BASKET_HEIGHT;
    e.gravity = u.ObjectsData.GRAVITY.y * u.ObjectsData.BALL_GRAVMASS;
    e.alleyOopX1 = u.ObjectsData.ALLEY_OOP_X;
    e.alleyOopX2 = e.width - u.ObjectsData.ALLEY_OOP_X;
    e.alleyOopY = u.ObjectsData.ALLEY_OOP_Y;
    e.baseDispersion = u.ObjectsData.DISPERSION;
    e.vertDispersion = u.ObjectsData.VERTICAL_DISPERSION;
    e.maxVelX = u.ObjectsData.PLAYER_MOVE_WITH_BALL;
    e.basket1 = u.ObjectsData.BASKET_CENTER;
    e.basket2 = u.ObjectsData.BASKET_CENTER2;
    e.createBody();
    e.createGraphic();
    e.indent = n.get(c.default.WIDTH2, u.ObjectsData.BALL_INDENT_Y_CENTER);
    t.prototype.add.call(e);
    e.space1 = e.body.space;
    return e;
  }
  s(e, t);
  e.prototype.createGraphic = function () {
    this.graphic = new Phaser.Group(d.default.game);
    var t = new Phaser.Sprite(d.default.game, 0, 0, p.Atlases.Gameplay, "BallMC0000");
    t.anchor.set(0.5);
    this.graphic.addChild(t);
    this.shadow = new f.ShadowObject(this.graphic, 0);
  };
  e.prototype.createBody = function () {
    this.body = r.NapeUtil.createCircleBody(a.DYNAMIC, h.Filters.BALL, false, u.ObjectsData.BALL_RADIUS, 0, 0, 0, h.CbTypes.cbBall, h.Materials.BALL);
    this.body.userData.graphic = this.graphic;
    this.body.userData.owner = this;
    this.body.gravMass *= u.ObjectsData.BALL_GRAVMASS;
  };
  e.prototype.restart = function (t = 0) {
    if (t === 0) {
      this.body.velocity.setxy(0, this.velUp);
      this.state = "up";
      this.body.position.set(this.indent);
      this.body.rotation = 0;
      this.body.angularVel = 0;
      this.updateGraphic();
      this.shadow.update();
      if (this.body.space === null) {
        this.returnToPhysics();
      }
    }
  };
  e.prototype.setState = function (t, e = 2, i = 0, s = false) {
    if (t !== this.state || s) {
      if (e < 2) {
        this.SIDE = e;
      }
      if (t === "inHands") {
        this.gamecore.ballInHands(this.SIDE, i);
      } else if (t === "shooting") {
        this.gamecore.ballShooting(this.SIDE, i);
      } else {
        this.gamecore.ballOthers();
      }
      if (!!this.isWaiting && (t === "bounce" || t === "score")) {
        this.isWaiting = false;
        g.Signals.MatchEndSignal.dispatch();
      }
      this.state = t;
    }
  };
  e.prototype.shoot = function (t, e, i, s, n) {
    this.SIDE = t;
    this.body.position.setxy(e, i);
    var a = this.calcThrowVel(e, i);
    var o = t === 1 ? e : this.width - e;
    var r = Math.abs(s) / this.maxVelX * 0.1;
    var h = this.calcDispersion(o, i, r, n);
    if (h < 2) {
      this.body.velocity.setxy(a.x * h, a.y);
    } else if (h === 2) {
      this.body.velocity.set(this.calcThrowVel(e, i, this.SIDE * 30));
    } else {
      this.body.velocity.set(this.calcThrowVel(e, i, -this.SIDE * 30));
    }
    this.body.rotation = 0;
    this.body.angularVel = t * (5 + Math.random() * 10);
    this.setState("shooting");
    a.dispose();
    this.returnToPhysics();
  };
  e.prototype.alleyOop = function (t, e, i, s) {
    this.player = s;
    this.SIDE = t;
    this.body.position.setxy(e, i);
    this.body.rotation = 0;
    var n = t === 1 ? this.alleyOopX1 : this.alleyOopX2;
    this.body.velocity.set(this.calcVel(e, i, n, this.alleyOopY, 150));
    this.toPhysics2();
  };
  e.prototype.calcThrowVel = function (t, e, i = 0) {
    var s;
    var n;
    if (this.SIDE === 1) {
      s = this.xB1 + i;
      n = t;
    } else {
      s = this.xB2 + i;
      n = this.width - t;
    }
    var a;
    a = n <= 150 ? 70 : n <= 250 ? 100 : n <= 350 ? n * 0.3 + 40 : n <= 540 ? 150 : 130;
    a *= 1 + (Math.random() <= 0.5 ? -1 : 1) * 0.1 * Math.random();
    if (a > 185) {
      a = 185;
    }
    return this.calcVel(t, e, s, this.yB, a);
  };
  e.prototype.calcVel = function (t, e, i, s, a) {
    var o = e - (s - a);
    var r = -Math.sqrt(this.gravity * 2 * o);
    var h = -r / this.gravity;
    var l = Math.sqrt(a * 2 / this.gravity);
    return new n((i - t) / (h + l) * 1.035, r);
  };
  e.prototype.calcDispersion = function (t, e, i, s) {
    var n;
    var a;
    if (e < 235) {
      n = 0;
    } else if (e >= 295) {
      n = this.vertDispersion;
    } else {
      var o = 295 - e;
      n = (1 - o / 60) * this.vertDispersion;
    }
    a = t <= 100 ? 0 : t <= 200 ? 0.01 : t <= 300 ? 0.02 : t <= 400 ? 0.03 : t <= 490 ? 0.04 : t <= 540 ? 0.01 : 0.07;
    var r = Math.random() < 0.5 ? -1 : 1;
    var h = r * (this.baseDispersion + n + a + s + i) * Math.random();
    if (Math.abs(h) <= 0.02) {
      return 1;
    } else if (h < -0.08) {
      return 2;
    } else if (h > 0.08) {
      return 3;
    } else {
      return 1 + h;
    }
  };
  e.prototype.dunk = function (t, e) {
    this.SIDE = t;
    var i;
    var s;
    var a;
    if (Math.random() <= e) {
      i = t === 1 ? this.basket1 + 17 : this.basket2 - 17;
      s = n.get(t * -260, 400);
      a = true;
    } else {
      i = t === 1 ? this.basket1 : this.basket2;
      s = n.get(t * -550, 400);
      a = false;
      m.default.getInstance().play(p.Sounds.b_brick);
    }
    this.body.position.setxy(i, 170);
    this.body.velocity.set(s);
    this.body.rotation = 0;
    this.body.angularVel = 0;
    this.setState("dunk");
    this.returnToPhysics();
    s.dispose();
    return a;
  };
  e.prototype.takeInHands = function (t, e, i = false) {
    var s = false;
    if (i || this.state !== "shooting" && this.state !== "inHands") {
      this.removeFromPhysics();
      this.SIDE = t;
      this.setState("inHands", this.SIDE, e, i);
      s = true;
    }
    return s;
  };
  e.prototype.fromHands = function (t, e) {
    this.setState("down");
    this.body.position.set(t);
    this.body.velocity.setxy(e * 150, -100);
    this.returnToPhysics();
  };
  e.prototype.applySteal = function (t, e, i) {
    this.setState("steal");
    this.body.position.set(t);
    var s = i * (this.stealVelXBase + e * this.stealVelXAdd);
    this.body.velocity.setxy(s, this.stealVelY);
    this.returnToPhysics();
  };
  e.prototype.onGroundCollision = function (t = true) {
    if (this.state !== "inHands") {
      this.setState("bounce");
      if (t) {
        this.body.velocity.y = this.bounceVel;
        m.default.getInstance().play(p.Sounds.b_bounce);
      }
    }
  };
  e.prototype.isInGame = function () {
    return this.body.space !== null;
  };
  e.prototype.removeFromPhysics = function () {
    this.shadow.hide();
    this.body.velocity.setxy(0, 0);
    this.body.angularVel = 0;
    this.body.rotation = 0;
    this.graphic.visible = false;
    this.body.space = null;
  };
  e.prototype.returnToPhysics = function () {
    this.body.space = this.space1;
    this.updateGraphic();
    this.setVisibleOnframe = true;
  };
  e.prototype.toPhysics2 = function () {
    this.gamecore.isAlleyOop = true;
    this.body.space = this.space2;
    this.updateGraphic();
    this.graphic.visible = true;
  };
  e.prototype.playSnd = function (t) {
    if (t === 0) {
      m.default.getInstance().play(p.Sounds.b_net);
    } else if (t === 1) {
      var e = undefined;
      var i = Math.abs(this.body.velocity.length);
      e = i > 300 ? 1 : i / 300 * 0.8;
      m.default.getInstance().play(p.Sounds.b_ring, e);
    } else if (t === 2) {
      m.default.getInstance().play(p.Sounds.b_basket);
    }
  };
  e.prototype.onDownSensor = function () {
    this.setState("score");
    this.playSnd(0);
  };
  e.prototype.onShieldCollision = function (t) {
    if (this.state !== "score") {
      m.default.getInstance().play(p.Sounds.b_steel);
      this.body.velocity.setxy(-t * (200 + Math.random() * 100), -200 - Math.random() * 100);
      this.setState("basket");
    }
  };
  e.prototype.update = function (t = 0) {
    if (this.player && this.body.velocity.y > 0) {
      this.player.continueAlleyOop();
      this.player = null;
    }
    if (this.setVisibleOnframe) {
      this.setVisibleOnframe = false;
      this.graphic.visible = true;
      this.shadow.show();
    }
  };
  e.prototype.release = function () {
    this.shadow = null;
    this.space1 = null;
    this.space2 = null;
    this.indent.dispose();
    this.indent = null;
    this.player = null;
    t.prototype.release.call(this);
  };
  return e;
}(o.GameObject);
exports.BallObject = y;