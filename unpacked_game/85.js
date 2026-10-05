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
var a = require("./46.js");
var o = require("./4.js");
var r = require("./20.js");
var h = require("./13.js");
var l = nape.geom.Vec2;
var c = nape.shape.Polygon;
var u = nape.phys.Body;
var d = nape.phys.BodyType;
var p = require("./86.js");
var f = require("./87.js");
var g = require("./40.js");
var m = require("./3.js");
var y = require("./15.js");
var v = require("./5.js");
var b = require("./1.js");
var _ = require("./14.js");
var x = require("./24.js");
var w = function (t) {
  function e(e, i, s, r, c, u, d = null, m = null) {
    var v = t.call(this) || this;
    v.opponents = null;
    v.state = "";
    v.prevState = "";
    v.wb = false;
    v.objType = n.ObjectsType.PLAYER;
    v.playerID = i;
    v.playerNo = c;
    v.SIDE = e === 0 ? -1 : 1;
    var b = o.default.WIDTH;
    v.velX = n.ObjectsData.PLAYER_MOVE;
    v.velBallX = n.ObjectsData.PLAYER_MOVE_WITH_BALL;
    v.velY = n.ObjectsData.PLAYER_JUMP;
    v.stealDistance = n.ObjectsData.STEAL_DISTANCE;
    v.delayDig = n.ObjectsData.DIG_TIME + Math.random();
    v.gamecore = h.MainGameCore.instance;
    v.matchProcessor = g.MatchProcessor.instance;
    v.ball = v.gamecore.ball;
    v.playerSignal = y.Signals.PlayerSignal;
    if (v.SIDE === 1) {
      v.marker = 0;
      v.threePointDistance = n.ObjectsData.THREE_POINTS_DISTANCE;
      v.paintStartX = n.ObjectsData.PAINT_START_X;
      v.paintMiddleX = n.ObjectsData.PAINT_MIDDLE_X;
      v.dunkX = n.ObjectsData.DUNK_X;
      v.superDunkX = n.ObjectsData.ALLEY_OOP_X;
      v.superDashX = [n.ObjectsData.SUPER_DASH_X1, n.ObjectsData.SUPER_DASH_X2];
    } else {
      v.marker = b;
      v.threePointDistance = b - n.ObjectsData.THREE_POINTS_DISTANCE;
      v.paintStartX = b - n.ObjectsData.PAINT_MIDDLE_X;
      v.paintMiddleX = b - n.ObjectsData.PAINT_START_X;
      v.dunkX = b - n.ObjectsData.DUNK_X;
      v.superDunkX = b - n.ObjectsData.ALLEY_OOP_X;
      v.superDashX = [n.ObjectsData.SUPER_DASH_X2, n.ObjectsData.SUPER_DASH_X1];
    }
    v.dunkStart1Y = n.ObjectsData.DUNK_ZONE1_Y;
    v.dunkStart2Y = n.ObjectsData.DUNK_ZONE2_Y;
    v.dunkY = n.ObjectsData.DUNK_Y;
    v.superDunkY = n.ObjectsData.ALLEY_OOP_Y;
    v.superDunkEndX = v.dunkX + v.SIDE * 20;
    v.superDunkEndY = v.dunkY + 30;
    v.superDashY = n.ObjectsData.SUPER_DASH_Y;
    v.superID = s;
    var _ = 1;
    var x = parseInt(u.substr(1, 1));
    if (u.indexOf("B") >= 0) {
      v.isHuman = false;
      v.controller = x === 0 ? new n.AIController(v, v.superShot) : new n.AIController2(v, v.superShot);
      v.controller.init(d);
    } else {
      v.isHuman = true;
      _ = 2;
      if (x === 0) {
        v.controller = new n.PlayerControllerGeneral(v);
      } else if (x === 1) {
        v.controller = new n.PlayerController(v);
      } else {
        v.controller = new n.PlayerController2(v);
        _ = 3;
      }
      if (i >= n.PlayersData.TEAMS_COUNT) {
        v.superID += 2;
      }
    }
    v.energyBar = new n.EnergyBar(x, v.superID, d.coolDown);
    if (v.superID === 0 || v.superID === 2) {
      v.teleport = new n.Teleport();
    } else if (v.superID === 1) {
      v.shield = new p.ShieldObject(v.SIDE);
    } else {
      v.superID;
    }
    v.accuracy = d.accuracy;
    v.chanceToCompleteDunk = d.chanceToCompleteDunk;
    v.createGraphic(i, s, r, m.armature);
    v.createBody();
    v.indents = [];
    if (c === 0) {
      v.indents.push(l.get(o.default.WIDTH2 + v.SIDE * n.ObjectsData.PLAYER_INDENT_X, n.ObjectsData.PLAYER_INDENT_Y));
      var w = v.SIDE === -1 ? n.ObjectsData.INDENT_GENERAL_X : o.default.WIDTH - n.ObjectsData.INDENT_GENERAL_X;
      v.indents.push(l.get(w, n.ObjectsData.PLAYER_INDENT_Y));
    } else {
      v.indents.push(l.get(o.default.WIDTH2 + v.SIDE * 200, n.ObjectsData.PLAYER_INDENT_Y));
    }
    v.baseFriction = n.Materials.PLAYER.dynamicFriction;
    v.shadow = new a.ShadowObject(v.graphic, _);
    v.dashDelay = new f.UseDelay(n.ObjectsData.DASH_DELAY);
    t.prototype.add.call(v);
    v.theSpace = v.body.space;
    return v;
  }
  s(e, t);
  e.prototype.createGraphic = function (t, e, i, s) {
    this.armature = s;
    this.armature.display.y = 35;
    this.armature.display.scale.set(0.73);
    e = e === 0 ? 1 : 0;
    this.skinID = t * 2 - e - 1;
    n.PlayersData.switchPlayer(s, this.skinID, t * 2 - 2 + i);
    this.armature.display.addDBEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this);
    this.armature.display.addDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEvent, this);
    this.graphic = new Phaser.Group(m.default.game);
    this.graphic.addChild(this.armature.display);
    this.graphic.scale.x = -this.SIDE;
  };
  e.prototype.createBody = function () {
    this.body = new u(d.DYNAMIC, l.get(0, 0));
    this.legs = new c(c.box(20, 70), n.Materials.PLAYER.copy(), n.Filters.PLAYER);
    this.legs.cbTypes.add(n.CbTypes.cbPlayer);
    this.body.shapes.add(this.legs);
    var t = new c(c.box(30, 80));
    t.sensorEnabled = true;
    t.cbTypes.add(n.CbTypes.cbPlayersHands);
    this.body.shapes.add(t);
    this.block = new c(c.rect(-5, 0, 10, -70), n.Materials.BASKET, n.Filters.BASKET);
    this.block.cbTypes.add(n.CbTypes.cbPlayersBlock);
    this.blockBody = new c(c.box(20, 70), n.Materials.PLAYER, n.Filters.PLAYER_BLOCK);
    this.body.align();
    this.baseMass = this.body.gravMass * 3;
    this.blockMass = this.baseMass * 2;
    this.body.gravMass = this.baseMass;
    this.body.allowRotation = false;
    this.body.userData.graphic = this.graphic;
    this.body.userData.owner = this;
    this.body.userData.direction = this.SIDE;
  };
  e.prototype.restart = function (t = 0) {
    this.resetVars();
    this.removeBlock();
    this.withBall = false;
    if (t === 0) {
      this.opponents = this.SIDE === 1 ? this.gamecore.playersLeft : this.gamecore.playersRight;
      this.mark = this.ball.body;
      if (this.superID === 3) {
        this.teamMate = this.gamecore.getTeamMate(this.playerNo);
        this.dashOpponents = [];
      }
    }
    this.unBlock();
    this.controller.restart(t);
    var e = 0;
    if (this.playerNo === 0) {
      e = t === this.SIDE ? 1 : 0;
    }
    this.body.position.set(this.indents[e]);
    this.body.velocity.setxy(0, 0);
    this.updateGraphic();
    this.shadow.update();
    this.graphic.scale.x = -this.SIDE;
    this.playState("idle");
    this.dashDelay.activate();
  };
  e.prototype.resetVars = function () {
    this.isRestart = true;
    this.isUnderEmotion = false;
    this.isGrounded = true;
    this.canTakeInHands = true;
    this.canDoAction = true;
    this.needBlock = false;
    this.isBlockedOrPump = false;
    this.readyForDash = false;
    this.canAct = true;
    this.deltaDig = 0;
    this.isSuperShot = false;
  };
  e.prototype.ballInHands = function (t = 0, e = 0) {
    if (this.SIDE === t) {
      if (this.playerNo === e) {
        this.takeBallInHands();
      }
      this.controller.ballInOwnHands(e);
      this.mark = null;
      this.needBlock = false;
    } else {
      this.controller.ballInOpponentsHands(e);
      this.mark = this.opponents[e].body;
      this.needBlock = true;
    }
  };
  e.prototype.ballShooting = function (t = 0, e = 0) {
    if (this.SIDE === t) {
      this.controller.ballOwnShoot(e);
      this.needBlock = false;
    } else {
      this.controller.ballOpponentShoot(e);
      this.needBlock = true;
    }
    this.mark = this.ball.body;
  };
  e.prototype.ballOthers = function () {
    this.controller.ballOthers();
    this.mark = this.ball.body;
    this.needBlock = false;
    this.removeBlock();
  };
  e.prototype.jump = function (t) {
    if (t && this.isGrounded && this.state !== "jump") {
      if (this.withBall) {
        this.makeJump("A");
      } else {
        this.makeJump();
      }
    }
  };
  e.prototype.isUnderGlass = function () {
    var t = this.body.position.x;
    if (this.SIDE === -1) {
      return t > 600 && t < 700;
    } else {
      return t > 100 && t < 200;
    }
  };
  e.prototype.makeJump = function (t = "") {
    var e;
    if (t === "") {
      this.attackJump = false;
      if (this.needBlock) {
        this.useBlock();
      }
      e = "fly1";
    } else {
      this.pointOfThrow = this.body.position.x;
      this.attackJump = true;
      this.canThrow = true;
      e = "fly1";
    }
    this.playState(e);
    this.playerSignal.dispatch("jump" + t, this.SIDE, this.playerNo);
    this.body.velocity.y = this.velY;
    this.isGrounded = false;
  };
  e.prototype.makeSteal = function () {
    if (this.opponents && this.opponents.length !== 0) {
      this.move(3);
      this.playerSignal.dispatch("startSteal", this.SIDE, this.playerNo);
      this.playState("steal");
      v.default.getInstance().play(b.Sounds.p_swoosh);
      this.canAct = false;
      this.canTakeInHands = false;
    }
  };
  e.prototype.tryToSteal = function () {
    this.canDoAction = false;
    this.playerSignal.dispatch("steal", this.SIDE, this.playerNo);
    this.gamecore.steal(this.SIDE, this.body.position.x, this.graphic.scale.x, this.isHuman);
  };
  e.prototype.useBlock = function () {
    this.canTakeInHands = false;
    this.body.shapes.add(this.block);
  };
  e.prototype.removeBlock = function () {
    return !!this.body.shapes.has(this.block) && (this.body.shapes.remove(this.block), true);
  };
  e.prototype.checkToBeStolen = function (t, e, i = false) {
    var s = -1;
    if (this.isGrounded) {
      var n = undefined;
      var a = undefined;
      if (e === 1) {
        n = t;
        a = t + this.stealDistance;
      } else {
        n = t - this.stealDistance;
        a = t;
      }
      var o = this.body.position.x;
      if (o >= n && o <= a) {
        s = Math.abs(o - t);
      }
    }
    return s;
  };
  e.prototype.getBeStolen = function (t, e = true) {
    var i = this.withBall;
    this.move(0);
    this.playState("stun");
    v.default.getInstance().play(b.Sounds.p_stunned);
    this.canAct = false;
    if (this.isBlockedOrPump) {
      this.unBlock();
    }
    this.canTakeInHands = false;
    if (this.withBall && (this.withBall = false, e)) {
      var s = this.body.position.x - t;
      var n = s > 0 ? 1 : -1;
      this.ball.applySteal(this.body.position, Math.abs(s) / this.stealDistance, n);
    }
    this.playerSignal.dispatch("stun", this.SIDE, this.playerNo);
    return i;
  };
  e.prototype.onGroundCollision = function () {
    if (this.isRestart) {
      this.isRestart = false;
    } else if (this.isUnderEmotion || this.state === "stun") {
      this.isGrounded = true;
      this.canThrow = true;
    } else if (this.isSuperDash) {
      this.isSuperDash = false;
      this.playState("idle");
      this.isGrounded = true;
      this.canAct = true;
    } else {
      this.canAct = false;
      this.move(0);
      if (this.withBall) {
        if (this.attackJump) {
          this.makeThrow();
          this.canTakeInHands = true;
        } else {
          this.canThrow = true;
          this.controller.playerOnGround();
        }
      } else {
        this.removeBlock();
        this.controller.playerOnGround();
        this.canTakeInHands = true;
        this.canThrow = true;
      }
      this.isGrounded = true;
      this.body.velocity.y = 0;
      this.playState("landing");
    }
  };
  e.prototype.move = function (t) {
    if (t === -1 || t === 1) {
      this.legs.material.dynamicFriction = this.legs.material.staticFriction = 0;
      var e = this.withBall ? this.velBallX : this.velX;
      this.body.velocity.x = t * e;
      if (this.isGrounded && this.checkRunState()) {
        this.playState("run");
      }
    } else {
      this.legs.material.dynamicFriction = this.baseFriction;
      this.legs.material.staticFriction = this.baseFriction;
      if (t === 0) {
        if (this.isGrounded && this.checkIdleState() && this.checkDigState()) {
          this.playState("idle");
        } else {
          this.body.velocity.x *= 0.95;
        }
      } else if (t === 2) {
        this.body.velocity.x = 0;
      } else if (t === 3) {
        this.legs.material.dynamicFriction = 0.08;
        this.legs.material.staticFriction = 0.08;
      } else if (t === 4) {
        this.legs.material.dynamicFriction = this.baseFriction;
        this.legs.material.staticFriction = this.baseFriction;
        this.body.velocity.x = 0;
      }
    }
  };
  e.prototype.action = function (t) {
    if (t && this.canDoAction) {
      if (this.withBall) {
        if (this.canThrow) {
          if (this.isGrounded) {
            this.makeFloorThrow();
          } else {
            this.makeThrow();
          }
        }
      } else if (this.isGrounded) {
        this.makeSteal();
      }
    }
  };
  e.prototype.makeFloorThrow = function () {
    this.move(2);
    this.canAct = false;
    this.playState("throw_land");
  };
  e.prototype.makeThrow = function () {
    this.withBall = false;
    this.attackJump = false;
    this.canDoAction = false;
    var t = this.body.position.x;
    var e = this.body.position.y;
    if (t >= this.paintStartX && t <= this.paintMiddleX && e <= this.dunkStart1Y) {
      this.makeDunk(1 + Math.round(Math.random() * 2));
    } else if ((t - this.paintStartX) * this.SIDE < 0 && e <= this.dunkStart2Y) {
      this.makeDunk(1);
    } else {
      var i = 35;
      if (this.isGrounded) {
        this.pointOfThrow = this.body.position.x;
        i = 20;
      } else {
        this.playState("fly1");
      }
      this.canTakeInHands = this.isGrounded;
      this.ball.shoot(this.SIDE, t - this.SIDE * i, e - 50, this.body.velocity.x, this.accuracy);
    }
    var s = (this.pointOfThrow - this.threePointDistance) * this.SIDE >= 0 ? 0 : 6;
    this.matchProcessor.shoot(this.SIDE, this.isHuman, s);
  };
  e.prototype.removeFromPhysics = function () {
    this.canAct = false;
    this.body.velocity.setxy(0, 0);
    this.body.space = null;
  };
  e.prototype.returnToPhysics = function (t = null) {
    if (t) {
      this.body.position.set(t);
    } else {
      this.body.position.setxy(this.dunkX, this.dunkY);
    }
    this.body.space = this.theSpace;
    this.canTakeInHands = false;
  };
  e.prototype.makeDunk = function (t) {
    this.removeFromPhysics();
    var e = "dunk" + t.toString();
    var i = 520;
    if (t == 2) {
      i = 350;
    } else if (t == 3) {
      i = 480;
    }
    this.playState(e);
    m.default.game.add.tween(this.graphic).to({
      x: this.dunkX,
      y: this.dunkY
    }, i / 1.3333).start();
  };
  e.prototype.endDunk = function () {
    var t = this.ball.dunk(this.SIDE, this.chanceToCompleteDunk);
    var e = t ? 1 : 9;
    this.matchProcessor.shoot(this.SIDE, this.isHuman, e);
    if (!this.isHuman && !t) {
      y.Signals.EventSignal.dispatch(false, 9);
    }
    this.returnToPhysics();
  };
  e.prototype.superShot = function (t) {
    var e = false;
    if (t && this.readyForSuper && !this.gamecore.isSuperShot) {
      if (this.superID === 0) {
        if (this.withBall) {
          this.startSuper();
          this.makeMegaDunk();
          e = true;
        }
      } else if (this.superID === 1) {
        this.startSuper();
        this.makeShield();
        e = true;
      } else if (this.superID === 2) {
        if (this.withBall) {
          this.startSuper();
          this.makeAlleyOop();
          e = true;
        }
      } else if (this.superID === 3) {
        this.startSuper();
        this.makeSuperDash();
        e = true;
      }
    }
    return e;
  };
  e.prototype.startSuper = function () {
    this.readyForSuper = false;
    this.isSuperShot = true;
    this.energyBar.reset();
    this.gamecore.isSuperShot = true;
  };
  e.prototype.endSuper = function () {
    this.isSuperShot = false;
    this.gamecore.isSuperShot = false;
  };
  e.prototype.makeAlleyOop = function () {
    if (this.controller instanceof n.AIController2) {
      this.playerID;
    }
    this.canAct = false;
    this.move(4);
    this.canTakeInHands = false;
    this.graphic.scale.x = this.marker - this.body.position.x > 0 ? 1 : -1;
    if (this.isGrounded) {
      this.playState("throw_land");
    } else {
      this.startAlleyOop();
    }
  };
  e.prototype.startAlleyOop = function () {
    this.ball.alleyOop(this.SIDE, this.body.position.x - this.SIDE * 20, this.body.position.y - 30, this);
    this.withBall = false;
    if (!this.isGrounded) {
      this.playState("fly1");
    }
  };
  e.prototype.continueAlleyOop = function () {
    this.teleport.startPlay(this.body.position.x, this.body.position.y);
    v.default.getInstance().play(b.Sounds.p_teleport);
    this.removeFromPhysics();
    var t = m.default.game.add.tween(this.graphic.scale);
    t.onComplete.addOnce(this.endAlleyOop, this);
    t.to({
      x: 0,
      y: 0
    }, 400).start();
  };
  e.prototype.endAlleyOop = function () {
    this.graphic.x = this.superDunkX;
    this.graphic.y = this.superDunkY;
    this.graphic.scale.x = -this.SIDE;
    this.graphic.scale.y = 1;
    this.graphic.visible = true;
    this.armature.animation.gotoAndStopByFrame("pumpEnd", 0);
    this.teleport.startPlay(this.superDunkX, this.superDunkY);
    v.default.getInstance().play(b.Sounds.p_teleport);
    this.ball.removeFromPhysics();
    var t = m.default.game.add.tween(this.graphic.scale);
    t.onComplete.addOnce(this.continueSuperDunk, this);
    t.from({
      x: 0,
      y: 0
    }, 400).start();
  };
  e.prototype.makeShield = function () {
    this.shield.activate();
    this.endSuper();
  };
  e.prototype.makeMegaDunk = function () {
    this.canAct = false;
    this.graphic.scale.x = -this.SIDE;
    var t = r.default.dist(this.body.position.x, this.body.position.y, this.superDunkX, this.superDunkY);
    this.removeFromPhysics();
    var e = t / 700 / 1.3333;
    if (e < 0.3) {
      e = 0.3;
    }
    this.playState("megadunk");
    v.default.getInstance().play(b.Sounds.p_megaStart);
    var i = m.default.game.add.tween(this.graphic);
    i.onComplete.addOnce(this.continueSuperDunk, this);
    i.to({
      x: this.superDunkX,
      y: this.superDunkY
    }, e * 1000).start();
  };
  e.prototype.continueSuperDunk = function () {
    this.playState("megadunk_end");
    m.default.game.add.tween(this.graphic).to({
      x: this.superDunkEndX,
      y: this.superDunkEndY
    }, 100).start();
  };
  e.prototype.endSuperDunk = function () {
    this.withBall = false;
    this.ball.dunk(this.SIDE, 1);
    var t = this.superID === 0 ? 7 : 8;
    this.matchProcessor.shoot(this.SIDE, this.isHuman, t);
    this.returnToPhysics();
    this.endSuper();
  };
  e.prototype.makeSuperDash = function () {
    var t = -1;
    this.opponentsCount = this.opponents ? this.opponents.length : 0;
    for (var e = 0; e < this.opponentsCount; e++) {
      if (this.opponents[e].withBall) {
        t = this.opponents[e].getX();
      }
      this.dashOpponents[e] = 0;
    }
    if (t < 0) {
      if (this.ball.isInGame()) {
        t = this.ball.getX();
      }
      if (this.teamMate) {
        if (this.teamMate.withBall) {
          t = this.teamMate.getX();
        }
        this.dashTeammate = 1;
      } else {
        this.dashTeammate = -1;
      }
    }
    var i = this.body.position.x;
    if (this.withBall) {
      this.dashPoint = 0;
    } else {
      this.dashPoint = t < i ? 1 : 0;
    }
    this.isSuperDash = true;
    this.canAct = false;
    this.attackJump = false;
    var s = r.default.dist(i, this.body.position.y, this.superDashX[this.dashPoint], this.superDashY);
    var n = s / 600 / 1.3333;
    this.removeFromPhysics();
    this.playState("md_start");
    v.default.getInstance().play(b.Sounds.p_superDash);
    this.toRight = this.dashPoint === 0;
    var a = m.default.game.add.tween(this.graphic);
    a.onComplete.addOnce(this.continueSuperDash, this);
    a.onUpdateCallback(this.onSuperDashUpdate, this);
    a.to({
      x: this.superDashX[this.dashPoint],
      y: this.superDashY
    }, n * 1000).start();
  };
  e.prototype.onSuperDashUpdate = function () {
    var t = this.graphic.x;
    for (var e = 0; e < this.opponentsCount; e++) {
      if (this.dashOpponents[e] === 0 && (this.toRight && t > this.opponents[e].getX() || !this.toRight && t < this.opponents[e].getX())) {
        this.dashOpponents[e] = -1;
        if (this.opponents[e].getBeStolen(t, false)) {
          this.gamecore.ballInHands(this.SIDE, this.playerNo);
        }
      }
    }
    if (!this.withBall) {
      if (this.ball.isInGame()) {
        if (this.toRight && t > this.ball.getX() || !this.toRight && t < this.ball.getX()) {
          this.ball.takeInHands(this.SIDE, this.playerNo, true);
          this.gamecore.ballInHands(this.SIDE, this.playerNo);
        }
      } else if (this.dashTeammate > 0 && (this.toRight && t > this.teamMate.getX() || !this.toRight && t < this.teamMate.getX())) {
        this.dashTeammate = 0;
        if (this.teamMate.withBall) {
          this.teamMate.freeBall();
          this.gamecore.ballInHands(this.SIDE, this.playerNo);
        }
      }
    }
  };
  e.prototype.continueSuperDash = function () {
    this.playState("md_end");
    this.canThrow = true;
    this.returnToPhysics(l.weak(this.superDashX[this.dashPoint], this.superDashY));
    this.endSuper();
  };
  e.prototype.takeBallInHands = function () {
    this.withBall = true;
    var t = this.isUnderGlass();
    this.canThrow = t || this.isGrounded;
    if (t) {
      this.pointOfThrow = this.body.position.x;
    }
    this.playState(this.state);
  };
  e.prototype.freeBall = function () {
    return !!this.withBall && (this.withBall = false, this.isGrounded ? this.playState("idle") : (this.canAct = false, this.playState("fly1")), true);
  };
  e.prototype.setEmotion = function (t) {
    this.canTakeInHands = false;
    this.isUnderEmotion = true;
    this.move(2);
    if (this.withBall) {
      this.withBall = false;
      this.ball.fromHands(this.body.position, this.graphic.scale.x);
    }
    if (this.SIDE === t) {
      this.emotionState = "happiness";
    } else if (this.SIDE === -t) {
      this.emotionState = "sad";
    } else {
      this.emotionState = "idle";
    }
    this.playState(this.emotionState);
    this.canAct = false;
  };
  e.prototype.update = function (t = 0) {
    if (this.state !== "steal" && !this.isSuperShot) {
      var e = this.mark === null ? this.marker : this.mark.position.x;
      this.graphic.scale.x = e - this.body.position.x > 0 ? 1 : -1;
    }
    this.canDoAction ||= this.controller.readyForAction();
    this.readyForDash ||= this.dashDelay.update(t) === 1;
    if (!this.isUnderEmotion) {
      if (!this.readyForSuper && !this.isSuperShot) {
        this.readyForSuper = this.energyBar.update(t);
        if (this.readyForSuper && this.isHuman) {
          v.default.getInstance().play(b.Sounds.p_energy);
        }
      }
      if (this.canAct) {
        this.controller.update(t);
        if (this.isBlockedOrPump) {
          this.releaseBlockOrPump(this.controller.releaseBlockOrPump(t));
        } else {
          this.move(this.controller.currentMove);
          this.jump(this.controller.currentJump);
          this.action(this.controller.currentAction);
          this.makeDash(this.controller.currentDash);
          this.makeBlockOrPump(this.controller.currentBlockOrPump);
          this.superShot(this.controller.currentSuper);
          if (this.state === "idle" && this.ball.state === "inHands") {
            this.deltaDig += t;
            if (this.deltaDig >= this.delayDig) {
              this.deltaDig = 0;
              this.makeDig();
            }
          } else {
            this.deltaDig = 0;
          }
        }
      }
    }
  };
  e.prototype.makeDash = function (t) {
    if (t !== 0 && this.readyForDash && this.isGrounded) {
      this.canAct = false;
      this.playState("dash");
      v.default.getInstance().play(b.Sounds.p_dash);
      this.playerSignal.dispatch("dash", this.SIDE, this.playerNo);
      this.legs.material.dynamicFriction = this.legs.material.staticFriction = 0;
      this.body.velocity.x = this.velX * 1.7 * t;
    }
  };
  e.prototype.endDash = function () {
    if (!this.isHuman && this.withBall) {
      this.controller.playerOnDashEnd();
    }
    this.legs.material.dynamicFriction = this.legs.material.staticFriction = this.baseFriction;
    this.canAct = true;
    this.readyForDash = false;
    this.dashDelay.activate();
  };
  e.prototype.makeBlockOrPump = function (t) {
    if (t && this.isGrounded) {
      this.move(2);
      this.canAct = false;
      if (this.withBall) {
        this.playState("pumpStart");
        this.playerSignal.dispatch("pump", this.SIDE, this.playerNo);
      } else {
        this.canTakeInHands = false;
        this.playState("blockStart");
      }
    }
  };
  e.prototype.setBlock = function () {
    this.canAct = true;
    this.body.gravMass = this.blockMass;
    this.isBlockedOrPump = true;
    this.body.shapes.add(this.blockBody);
    this.controller.playerOnBlock();
  };
  e.prototype.releaseBlockOrPump = function (t) {
    if (t) {
      this.canAct = false;
      if (this.withBall) {
        this.playState("pumpEnd");
      } else {
        this.playState("blockEnd");
        this.unBlock();
      }
    }
  };
  e.prototype.unBlock = function () {
    this.body.gravMass = this.baseMass;
    this.body.shapes.remove(this.blockBody);
    this.isBlockedOrPump = false;
    this.canTakeInHands = true;
  };
  e.prototype.release = function () {
    m.default.game.tweens.removeFrom(this.graphic);
    this.gamecore = null;
    this.matchProcessor = null;
    this.ball = null;
    this.opponents = null;
    this.teamMate = null;
    this.shadow = null;
    this.theSpace = null;
    this.energyBar = null;
    this.armature.display.removeDBEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this);
    this.armature.display.removeDBEventListener(dragonBones.EventObject.FRAME_EVENT, this.onFrameEvent, this);
    this.armature = null;
    this.controller.dispose();
    this.controller = null;
    for (var e = this.indents.length, i = 0; i < e; i++) {
      this.indents[i].dispose();
    }
    this.indents.splice(0, e);
    this.indents = null;
    this.legs = null;
    this.block = null;
    this.blockBody = null;
    this.mark = null;
    this.teleport = null;
    this.shield = null;
    this.playerSignal = null;
    this.dashDelay = null;
    this.superDashX = null;
    this.dashOpponents = null;
    this.graphic = null;
    t.prototype.release.call(this);
  };
  e.prototype.onAnimationComplete = function (t) {
    var e = t.animationState.name;
    var i = "";
    if (e === "throw_land" || e === "blockEnd" || e.indexOf("landing") >= 0) {
      this.canAct = !this.isSuperShot;
      i = "idle";
    } else if (e === "steal" || e === "stun") {
      this.canAct = true;
      this.canTakeInHands = true;
      i = "idle";
    } else if (e === "megadunk_end") {
      this.canTakeInHands = true;
      i = "idle";
    } else if (e.indexOf("dash") >= 0) {
      i = "run";
      this.endDash();
    } else if (e === "blockStart") {
      this.setBlock();
    } else if (e === "pumpStart") {
      this.isBlockedOrPump = true;
      this.canAct = true;
    } else if (e === "pumpEnd") {
      this.isBlockedOrPump = false;
      this.canAct = true;
      i = "idle";
    } else if (e.indexOf("dig") >= 0) {
      i = "idle";
    } else if (e.indexOf("md_start") >= 0) {
      i = "md_mid";
    } else if (e.indexOf("md_end") >= 0) {
      i = "idle";
    }
    if (i.length > 0) {
      this.playState(i);
    }
  };
  e.prototype.onFrameEvent = function (t) {
    var e = t.name;
    if (e === "floor0") {
      v.default.getInstance().play(b.Sounds.p_floorStand);
    } else if (e === "floor") {
      v.default.getInstance().play(b.Sounds.p_floorRun);
    } else if (e === "action") {
      this.tryToSteal();
    } else if (e === "throw") {
      if (this.isSuperShot) {
        this.startAlleyOop();
      } else {
        this.makeThrow();
      }
    } else if (e === "mega") {
      this.endSuperDunk();
    } else if (e === "dunk") {
      this.endDunk();
    }
  };
  e.prototype.playState = function (t) {
    var e = t;
    var i = false;
    if (this.withBall && (t === "idle" || t === "run" || t === "dash" || t === "landing" || t.indexOf("fly") >= 0 || t.indexOf("md_") >= 0)) {
      e = t + "_wb";
      if (!this.wb) {
        i = true;
      }
      this.wb = true;
    } else {
      this.wb = this.withBall;
    }
    if (e !== this.state) {
      this.prevState = this.state;
      this.state = e;
      if (i) {
        this.armature.animation.gotoAndPlay(this.state, 0);
      } else {
        this.armature.animation.gotoAndPlay(this.state);
      }
      if (!m.default.game.device.desktop && x.Inventory.instance.gameMode <= 2 && this.isHuman) {
        if (this.prevState.indexOf("_wb") < 0 && this.state.indexOf("_wb") > 0) {
          _.default.instance.btnDown.labelState.loadTexture(b.Atlases.Gameplay, "shoot_icon0000");
        }
        if (this.prevState.indexOf("_wb") > 0 && this.state.indexOf("_wb") < 0) {
          _.default.instance.btnDown.labelState.loadTexture(b.Atlases.Gameplay, "shoot_icon0001");
        }
      }
    }
  };
  e.prototype.checkRunState = function () {
    return this.state.indexOf("run") < 0;
  };
  e.prototype.checkIdleState = function () {
    return this.state.indexOf("idle") < 0;
  };
  e.prototype.checkDigState = function () {
    return this.state.indexOf("dig") < 0;
  };
  e.prototype.isMoving = function () {
    return Math.abs(this.body.velocity.x) > 200;
  };
  e.prototype.isReadyToDash = function () {
    return this.state.indexOf("dash") < 0 && this.readyForDash;
  };
  e.prototype.makeDig = function () {
    var t = 1 + Math.round(Math.random() * 2);
    this.playState("dig" + t.toString());
  };
  return e;
}(n.GameObject);
exports.PlayerObject = w;