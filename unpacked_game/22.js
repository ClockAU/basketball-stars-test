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
var n = nape.space.Space;
var a = require("./28.js");
var o = require("./23.js");
var r = nape.callbacks.CbEvent;
var h = nape.callbacks.InteractionListener;
var l = nape.callbacks.InteractionType;
var c = require("./2.js");
var u = require("./40.js");
var d = require("./15.js");
var p = function (t) {
  function e() {
    var i = t.call(this) || this;
    e.space = new n(c.ObjectsData.GRAVITY);
    return i;
  }
  s(e, t);
  e.prototype.start = function () {
    if (!e.hasListeners) {
      this.setupListners();
    }
  };
  e.prototype.setupListners = function () {
    e.space.listeners.add(new h(r.BEGIN, l.COLLISION, c.CbTypes.cbBall, c.CbTypes.cbGround, this.onBallGround));
    e.space.listeners.add(new h(r.BEGIN, l.COLLISION, c.CbTypes.cbBall, c.CbTypes.cbBorders, this.onBallBorder));
    e.space.listeners.add(new h(r.BEGIN, l.COLLISION, c.CbTypes.cbBall, c.CbTypes.cbBasket, this.onBallBasket));
    e.space.listeners.add(new h(r.BEGIN, l.COLLISION, c.CbTypes.cbBall, c.CbTypes.cbRing, this.onBallRing));
    e.space.listeners.add(new h(r.BEGIN, l.COLLISION, c.CbTypes.cbBall, c.CbTypes.cbShield, this.onBallShield));
    e.space.listeners.add(new h(r.BEGIN, l.SENSOR, c.CbTypes.cbBall, c.CbTypes.cbPlayersHands, this.onBallHands));
    e.space.listeners.add(new h(r.BEGIN, l.COLLISION, c.CbTypes.cbBall, c.CbTypes.cbPlayersBlock, this.onBallBlock));
    e.space.listeners.add(new h(r.BEGIN, l.SENSOR, c.CbTypes.cbPlayersBlock, c.CbTypes.cbDownSensor, this.onBlockSensor));
    e.space.listeners.add(new h(r.BEGIN, l.COLLISION, c.CbTypes.cbPlayer, c.CbTypes.cbGround, this.onPlayerGround));
    e.space.listeners.add(new h(r.BEGIN, l.SENSOR, c.CbTypes.cbBall, c.CbTypes.cbUpperSensor, this.onUpperSensor));
    e.space.listeners.add(new h(r.BEGIN, l.SENSOR, c.CbTypes.cbBall, c.CbTypes.cbDownSensor, this.onDownSensor));
    e.hasListeners = true;
  };
  e.prototype.onBallGround = function (t) {
    t.int1.castBody.userData.owner.onGroundCollision(true);
  };
  e.prototype.onBallBorder = function (t) {
    t.int1.castBody.userData.owner.onGroundCollision(false);
  };
  e.prototype.onBallRing = function (t) {
    var e = t.int1.castBody.userData.owner;
    e.setState("basket");
    if (t.arbiters.length > 0 && t.arbiters.at(0).collisionArbiter.contacts.at(0).position.y < 198) {
      e.playSnd(1);
    }
  };
  e.prototype.onBallBasket = function (t) {
    var e = t.int1.castBody.userData.owner;
    e.setState("basket");
    e.playSnd(2);
  };
  e.prototype.onBallBlock = function (t) {
    var e = t.int1.castBody.userData.owner;
    var i = false;
    if (t.int2.castShape.body) {
      i = (e.getX() - t.int2.castShape.worldCOM.x) * e.SIDE > 0;
    }
    if (t.int2.castShape.body && i) {
      var s = t.int2.castShape.body.userData.owner;
      e.setState("block", s.SIDE);
      u.MatchProcessor.instance.block(s.SIDE, s.isHuman);
      d.Signals.EventSignal.dispatch(s.isHuman, 4);
    }
  };
  e.prototype.onBallHands = function (t) {
    var e = t.int2.castShape.body.userData.owner;
    var i = e.SIDE;
    var s = e.playerNo;
    if (e.canTakeInHands) {
      t.int1.castBody.userData.owner.takeInHands(i, s);
    }
  };
  e.prototype.onBlockSensor = function (t) {
    if (t.int1.castShape.body) {
      t.int1.castShape.body.userData.owner.removeBlock();
    }
  };
  e.prototype.onPlayerGround = function (t) {
    t.int1.castShape.body.userData.owner.onGroundCollision();
  };
  e.prototype.onUpperSensor = function (t) {
    d.Signals.SensorSignal.dispatch(0, t.int2.castShape.body.userData.side);
  };
  e.prototype.onDownSensor = function (t) {
    d.Signals.SensorSignal.dispatch(1, t.int2.castShape.body.userData.side);
    t.int1.castBody.userData.owner.onDownSensor();
  };
  e.prototype.onBallShield = function (t) {
    var e = t.int2.castShape.body.userData.side;
    t.int1.castBody.userData.owner.onShieldCollision(e);
  };
  e.prototype.update = function (t) {
    // MULTIPLAYER: Only the host runs physics. Guest receives state from host.
    if (window.netState && window.netState.isGuest) {
      return;
    }
    e.space.step(t);
  };
  e.prototype.updateGraphics = function () {
    for (var t = e.space.liveBodies.iterator(), i; t.hasNext();) {
      var s = t.next();
      var n = s.userData;
      if (n.graphic) {
        i = n.graphic;
        i.x = s.position.x;
        i.y = s.position.y;
        i.rotation = s.rotation % (2 * Math.PI);
      }
    }
  };
  e.prototype.add = function (t) {
    if (t.body) {
      t.body.space = e.space;
    }
  };
  e.prototype.release = function () {
    while (!e.space.bodies.empty()) {
      o.NapeUtil.disposeBody(e.space.bodies.at(0));
    }
    t.prototype.release.call(this);
    e.space.clear();
    e.space = null;
    e.hasListeners = false;
  };
  e.hasListeners = false;
  e.isGoal = false;
  return e;
}(a.GamePhysics);
exports.NapePhysics = p;
