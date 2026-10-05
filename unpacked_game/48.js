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
var n = require("./25.js");
var a = require("./13.js");
var o = require("./4.js");
var r = require("./2.js");
var h = require("./21.js");
var l = require("./89.js");
var c = require("./90.js");
var u = require("./91.js");
var d = require("./15.js");
var p = function (t) {
  function e(e, i) {
    var s = t.call(this, e) || this;
    s.deltaDistance = 20;
    s.chanceToBlock = 1;
    s.downTime = 5;
    s.superShot = i;
    s.superID = e.superID;
    s.megaDunkDelay = new h.FullDelay(0.5, 0.5);
    s.gamecore = a.MainGameCore.instance;
    s.ball = s.gamecore.ball;
    s.opponents = s.SIDE === -1 ? s.gamecore.playersRight : s.gamecore.playersLeft;
    s.playerNo = e.playerNo;
    s.width = o.default.WIDTH;
    s.delta = s.SIDE === -1 ? 0 : o.default.WIDTH;
    s.incDownTime = o.default.STEP;
    d.Signals.PlayerSignal.add(s.processPlayerSignal, s);
    return s;
  }
  s(e, t);
  e.prototype.initZones = function () {
    if (this.SIDE === 1) {
      this.attackZoneStart = r.ObjectsData.ATTACK_ZONE_START;
      this.attackZoneEnd = r.ObjectsData.ATTACK_ZONE_END;
      this.dashZoneStart = r.ObjectsData.DASH_ZONE_START;
      this.dashZoneEnd = r.ObjectsData.DASH_ZONE_END;
      if (this.playerNo === 0) {
        this.baseEndPoint = 280;
        this.reboundPointInAttack = 190;
        this.reboundPointInDefence = 610;
      } else {
        this.baseEndPoint = 400;
        this.reboundPointInAttack = 150;
        this.reboundPointInDefence = 680;
      }
    } else {
      this.attackZoneStart = this.width - r.ObjectsData.ATTACK_ZONE_END;
      this.attackZoneEnd = this.width - r.ObjectsData.ATTACK_ZONE_START;
      this.dashZoneStart = this.width - r.ObjectsData.DASH_ZONE_END;
      this.dashZoneEnd = this.width - r.ObjectsData.DASH_ZONE_START;
      if (this.playerNo === 0) {
        this.baseEndPoint = 580;
        this.reboundPointInAttack = 610;
        this.reboundPointInDefence = 190;
      } else {
        this.baseEndPoint = 400;
        this.reboundPointInAttack = 650;
        this.reboundPointInDefence = 120;
      }
    }
  };
  e.prototype.init = function (t) {
    this.jumpBall = new l.NegativeDelay(r.ObjectsData.IDEAL_JUMP_BALL_JUMP, t.jumpBall);
    this.attack = new h.FullDelay(r.ObjectsData.IDEAL_ATTACK_JUMP, t.attack);
    this.attackJumpDelay = new c.SimpleDelay(t.attackAtOnce);
    this.chanceToRebound = t.chanceToRebound;
    this.chanceToAvoidSteal = t.avoidSteal;
    this.chanceToMakePump = t.makePump;
    this.chanceToReactOnCloseOpponent = t.reactOnOpponent;
    this.chanceToDash = t.makeDash;
    this.dashDelay = new u.AIUseDelay(0.1, t.delayDash);
    this.defence = new c.SimpleDelay(t.defence);
    this.chanceToJumpWhenThrow = t.jumpThrow;
    this.chanceToUseSteal = t.makeSteal;
    this.stealDelay = new u.AIUseDelay(0.1, r.ObjectsData.STEAL_DURATION + t.delaySteal);
    this.chanceToJumpWhenPump = t.jumpPump;
    this.chanceToBlock = t.makeBlock;
    this.blockDelay = new h.FullDelay(0, 0.2);
    this.reboundDelay = new h.FullDelay(t.reboundRange, t.reboundFixed);
    this.moveDelay = new h.FullDelay(t.moveDelay, 0.05);
    this.opponentDelta = r.ObjectsData.OPPONENT_DELTA;
    this.chanceForThree = r.ObjectsData.CHANCE_FOR_THREE;
    this.initZones();
  };
  e.prototype.restart = function (e) {
    this.strategy = 3;
    if (e === 0) {
      this.onJumpBall();
    }
    this.deltaDownTime = 0;
    this.endPoint = this.baseEndPoint;
    this.currentSuper = false;
    this.resetAllDelays();
    this.resetCurrents();
    this.isPumped = false;
    this.pumpCount = 0;
    this.canJump = true;
    this.willAttackAtOnce = false;
    t.prototype.restart.call(this, e);
  };
  e.prototype.onJumpBall = function () {};
  e.prototype.resetCurrents = function (t = 0, e = false, i = false, s = 0) {
    this.currentMove = t;
    this.currentJump = e;
    this.currentAction = i;
    this.currentDash = s;
  };
  e.prototype.resetBaseDelays = function () {
    this.attackJumpDelay.reset();
    this.attack.reset();
    this.defence.reset();
    this.moveDelay.reset();
    this.stealDelay.reset();
    this.resetAvoidSteal();
  };
  e.prototype.resetAllDelays = function () {
    this.dashDelay.reset();
    this.resetBaseDelays();
  };
  e.prototype.resetAvoidSteal = function () {
    this.avoidStealJump = false;
    this.avoidStealMove = 0;
  };
  e.prototype.ballInOwnHands = function (t = 0) {
    if (this.superID === 0 && this.player.readyForSuper) {
      this.megaDunkDelay.activate();
    }
    this.resetBaseDelays();
    this.resetCurrents();
    this.strategy = 2;
    var e = this.isReboundInAttackZone();
    if (e === -1) {
      this.willAttackAtOnce = !this.player.isGrounded;
      this.setAttackPoint(150, this.player.getX());
    } else if (e === 0) {
      this.willAttackAtOnce = !this.player.isGrounded;
      var i = this.player.getX();
      this.setAttackPoint(i, i);
    } else {
      this.setAttackPoint(0);
      if (Math.abs(this.player.getX() - this.attackPoint) < 50) {
        this.willAttackAtOnce = !this.player.isGrounded;
      } else {
        this.willAttackAtOnce = false;
      }
    }
    if (this.willAttackAtOnce) {
      this.canJump = false;
    }
  };
  e.prototype.ballInOpponentsHands = function (t = 0) {
    this.resetBaseDelays();
    this.resetCurrents();
    this.willAttackAtOnce = false;
    this.isPumped = false;
    this.strategy = 0;
  };
  e.prototype.ballOwnShoot = function (t = 0) {
    this.resetCurrents();
    this.strategy = 4;
    this.reboundPoint = this.reboundPointInAttack;
  };
  e.prototype.ballOpponentShoot = function (t = 0) {
    if (this.superID === 1) {
      this.superShot(true);
    }
    this.resetCurrents();
    this.strategy = 4;
    this.currentJump = this.opponent.isGrounded && this.isOpponentCloseBehind(120) && Math.random() <= this.chanceToJumpWhenThrow;
    this.reboundPoint = this.reboundPointInDefence;
  };
  e.prototype.ballOthers = function () {
    this.strategy = 1;
  };
  e.prototype.setAttackPoint = function (t, e = 0) {
    if (t != 0) {
      this.attackPoint = t;
      this.jumpPoint = e;
    } else {
      if ((this.player.getX() - 450) * this.SIDE > 0 && Math.random() <= this.chanceForThree) {
        this.attackPoint = 510;
      } else if (Math.random() <= 0.7) {
        this.attackPoint = 120 + Math.random() * 200;
      } else {
        this.attackPoint = 320 + Math.random() * 160;
      }
      this.jumpPoint = this.attackPoint <= 200 ? this.attackPoint + 100 : this.attackPoint;
    }
    if (this.SIDE === -1) {
      this.attackPoint = this.width - this.attackPoint;
      this.jumpPoint = this.width - this.jumpPoint;
    }
  };
  e.prototype.processPlayerSignal = function (t, e, i = 0) {
    if (t === "startSteal") {
      this.playerStartSteal(e, i);
    } else if (t === "steal") {
      this.playerSteal(e, i);
    } else if (t === "jumpA") {
      this.playerJumpA(e, i);
    } else if (t === "pump") {
      this.playerPump(e, i);
    } else if (t === "dash") {
      this.playerDash(e, i);
    } else if (t === "stun") {
      this.playerStun(e, i);
    }
  };
  e.prototype.playerStartSteal = function (t, e = 0) {
    if (this.SIDE === -t) {
      if (this.player.withBall && this.player.isGrounded && (this.isOpponentCloseBehind(80) || this.isOpponentCloseBehind(140) && this.opponent.isMoving())) {
        this.tryToAvoid();
      }
    } else {
      this.stealDelay.useIt();
    }
  };
  e.prototype.tryToAvoid = function () {
    if (Math.random() <= this.chanceToAvoidSteal || this.player.getX() > 600) {
      var t = Math.random();
      if (t <= 0.1 && this.player.isReadyToDash()) {
        this.currentDash = -this.SIDE;
      } else if (t <= 0.4 && this.isInAttackZone()) {
        this.avoidStealJump = true;
        this.moveDelay.reset();
      } else {
        this.avoidStealMove = this.SIDE;
      }
    }
  };
  e.prototype.playerJumpA = function (t, e = 0) {
    if (this.SIDE === t) {
      if (e === this.playerNo) {
        this.resetAvoidSteal();
        this.attack.activate();
        this.throwPoint = this.player.getX();
        this.directionToFly = this.player.getX() - this.attackPoint >= 0 ? -1 : 1;
      }
    } else if (Math.random() <= this.chanceToJumpWhenThrow) {
      this.defence.activate();
    }
  };
  e.prototype.playerPump = function (t, e = 0) {
    if (this.SIDE === -t && this.player.canAct && ++this.pumpCount <= 3 && this.isOpponentCloseBehind(90) && Math.random() <= this.chanceToJumpWhenPump) {
      this.defence.activate();
      this.stealDelay.reset();
      this.currentMove = 0;
      this.isPumped = true;
    }
  };
  e.prototype.playerDash = function (t, e = 0) {
    if (this.SIDE === t) {
      this.attack.reset();
    } else if (this.strategy === 0 && this.player.canAct && this.isOpponentInRangeBehind() && Math.random() <= this.chanceToBlock) {
      this.resetCurrents();
      this.resetAllDelays();
      this.currentBlockOrPump = true;
    }
  };
  e.prototype.playerStun = function (t, e = 0) {
    if (this.SIDE === t) {
      this.resetAllDelays();
    }
  };
  e.prototype.playerSteal = function (t, e = 0) {
    if (this.SIDE === -t) {
      this.resetAvoidSteal();
    }
  };
  e.prototype.playerOnGround = function () {
    this.isPumped = false;
    if (this.player.withBall && this.willAttackAtOnce) {
      this.resetCurrents();
      this.attackJumpDelay.activate();
    }
  };
  e.prototype.playerOnDashEnd = function () {
    if ((this.player.getX() - this.attackPoint) * this.SIDE < 0) {
      this.attackPoint = this.player.getX() - this.SIDE * 10;
    }
  };
  e.prototype.playerOnBlock = function () {
    this.currentBlockOrPump = false;
    this.blockDelay.activate();
  };
  e.prototype.releaseBlockOrPump = function (t) {
    return this.blockDelay.update(t) === 1;
  };
  e.prototype.isReboundInAttackZone = function () {
    var t = this.player.getX();
    var e = 0;
    if ((t - this.attackZoneStart) * this.SIDE <= 0) {
      e = -1;
    } else if ((t - this.attackZoneEnd) * this.SIDE >= 0) {
      e = 1;
    }
    return e;
  };
  e.prototype.isInAttackZone = function () {
    if (this.SIDE === 1) {
      return this.player.getX() < 600;
    } else {
      return this.player.getX() > 200;
    }
  };
  e.prototype.inDashingZone = function () {
    return this.playerX >= this.dashZoneStart;
  };
  e.prototype.moveToo = function (t) {
    var e;
    var i = this.player.getX() - t;
    return e = Math.abs(i) <= this.deltaDistance ? 0 : i > 0 ? -1 : 1;
  };
  e.prototype.moveInAttack = function () {
    var t = this.moveToo(this.jumpPoint);
    if (t === 0) {
      this.attackJump = true;
      t = this.jumpPoint === this.attackPoint ? 2 : this.moveToo(this.attackPoint);
    } else {
      this.attackJump = false;
      t = this.moveToo(this.attackPoint);
    }
    return t;
  };
  e.prototype.readyForAction = function () {
    return true;
  };
  e.prototype.dispose = function () {
    d.Signals.PlayerSignal.remove(this.processPlayerSignal, this);
    this.gamecore = null;
    this.ball = null;
    this.opponent = null;
    this.opponents = null;
    this.superShot = null;
    this.attackJumpDelay = null;
    this.moveDelay = null;
    this.stealDelay = null;
    this.dashDelay = null;
    this.jumpBall = null;
    this.attack = null;
    this.defence = null;
    this.blockDelay = null;
    this.reboundDelay = null;
    this.megaDunkDelay = null;
    t.prototype.dispose.call(this);
  };
  e.prototype.update = function (t) {
    this.currentDash = 0;
    var e = this.attackJumpDelay.update(t);
    if (e >= 0) {
      if (e === 1) {
        this.currentMove = 0;
        this.currentJump = true;
        this.currentAction = false;
        this.canJump = true;
      } else {
        this.currentMove = this.avoidStealMove;
        this.currentJump = this.avoidStealJump;
      }
    } else {
      this.calcPositions();
      if (this.strategy === 0) {
        this.strategyDefence(t);
      } else if (this.strategy === 1) {
        this.strategyBallFight(t);
      } else if (this.strategy === 2) {
        this.strategyAttack(t);
      } else if (this.strategy === 3) {
        this.strategyJumpBall(t);
      } else if (this.strategy === 4) {
        this.strategyRebound(t);
      } else if (this.strategy === 5) {
        this.strategyDefence2(t);
      }
    }
  };
  e.prototype.calcPositions = function () {
    this.playerX = this.player.getX();
    this.opponentX = this.opponent.getX();
  };
  e.prototype.strategyDefence = function (t) {
    var e = this.stealDelay.update(t);
    var i = this.moveDelay.update(t);
    if (this.isPumped) {
      this.currentMove = 0;
    } else {
      if (this.player.isGrounded) {
        if (i === -1) {
          var s;
          s = (this.opponentX - this.endPoint) * this.SIDE < 0 ? this.endPoint : this.opponent.isGrounded ? this.opponentX + this.SIDE * this.opponentDelta : this.opponentX + this.SIDE * (this.opponentDelta - 10);
          this.currentMove = this.moveToo(s);
          this.moveDelay.activate();
        }
      } else {
        this.currentMove = this.moveToo(this.opponentX + this.SIDE * (this.opponentDelta - 10));
      }
      if (e === -1) {
        this.tryToSteal();
      }
    }
    this.currentJump = this.defence.update(t) === 1 && this.isOpponentCloseAbs(180);
    this.currentAction = e === 1;
    if (this.currentAction === false && this.currentJump === false && this.currentMove === 0) {
      this.deltaDownTime += this.incDownTime;
      if (this.deltaDownTime >= this.downTime) {
        this.endPoint = this.SIDE === 1 ? 0 : this.width;
        this.deltaDownTime = 0;
      }
    } else {
      this.deltaDownTime = 0;
    }
  };
  e.prototype.tryToSteal = function () {
    if (this.opponent.isGrounded) {
      if (this.isOpponentCloseBehind(80)) {
        if (Math.random() <= this.chanceToUseSteal) {
          this.stealDelay.activate();
        } else {
          this.stealDelay.skipIt();
        }
      } else if (this.isOpponentCloseToBasket(45)) {
        if (Math.random() <= this.chanceToUseSteal * 1.5) {
          this.stealDelay.activate();
        } else {
          this.stealDelay.skipIt();
        }
      }
    }
  };
  e.prototype.strategyDefence2 = function (t) {};
  e.prototype.strategyBallFight = function (t) {
    var e = this.ball.getX();
    var i = e - this.playerX >= 0 ? 10 : -10;
    var s = this.reboundDelay.update(t);
    this.currentMove = this.moveToo(e + i);
    this.currentJump = false;
    if (this.ball.state != "bounce" && this.ball.state != "shooting") {
      if (this.ball.state === "basket") {
        if (s === -1 && this.isBallInReboundZone()) {
          this.reboundDelay.activate();
        } else {
          this.currentJump = s === 1 && Math.random() < +this.chanceToRebound && this.isBallInReboundZone();
        }
      } else {
        this.currentJump = Math.abs(this.deltaBallX()) < 60 && Math.abs(this.deltaBallY()) > 70;
      }
    }
    this.currentAction = false;
  };
  e.prototype.isBallInReboundZone = function () {
    return Math.abs(this.deltaBallX()) < 60 && Math.abs(this.deltaBallY()) > 70;
  };
  e.prototype.strategyAttack = function (t) {
    if (this.player.withBall) {
      if (this.megaDunkDelay.update(t) === 1) {
        this.currentSuper = true;
      } else if (this.avoidStealJump || this.avoidStealMove != 0) {
        this.currentMove = this.avoidStealMove;
        this.currentJump = this.avoidStealJump;
      } else if (this.player.isGrounded) {
        if (this.moveDelay.update(t) === -1) {
          var e = this.moveInAttack();
          if (this.attackJump) {
            this.currentJump = true;
            this.currentMove = e;
          } else if (this.isAICloserForBasket()) {
            if (e === -this.SIDE) {
              this.currentMove = -this.SIDE;
              this.currentJump = false;
            } else {
              this.currentMove = e;
              this.currentJump = true;
            }
          } else {
            this.currentJump = false;
            this.currentDash = 0;
            if (this.isOpponentCloseBehind()) {
              if (this.isUnderOwnBasket()) {
                if (this.player.readyForDash) {
                  this.currentDash = -this.SIDE;
                  this.currentMove = 0;
                } else {
                  if (Math.random() <= 0.5) {
                    this.currentMove = -this.SIDE;
                  } else {
                    this.currentMove = 0;
                  }
                  this.moveDelay.activate();
                }
              } else if (Math.random() <= this.chanceToReactOnCloseOpponent) {
                this.currentJump = false;
                if (this.player.readyForDash && this.inDashingZone() && Math.random() <= this.chanceToDash) {
                  this.currentDash = -this.SIDE;
                } else {
                  if (Math.random() <= 0.5) {
                    this.currentMove = 0;
                  } else {
                    this.currentMove = this.SIDE;
                  }
                  this.moveDelay.activate();
                }
              } else {
                this.currentMove = -this.SIDE;
                this.moveDelay.activate();
              }
            } else {
              this.currentMove = -this.SIDE;
            }
          }
        }
      } else {
        this.currentMove = (this.playerX - this.attackPoint) * this.directionToFly > 0 ? this.directionToFly : 0;
        this.currentJump = false;
        this.currentAction = this.attack.update(t) === 1;
      }
    }
  };
  e.prototype.strategyJumpBall = function (t) {
    this.currentMove = 0;
    this.currentJump = this.jumpBall.update(t) === 1;
    this.currentAction = false;
  };
  e.prototype.strategyRebound = function (t) {
    if (this.currentJump) {
      this.currentMove = 0;
    } else {
      this.currentMove = this.player.isGrounded ? this.moveToo(this.reboundPoint) : 0;
    }
  };
  e.prototype.deltaBallX = function () {
    return this.player.getX() - this.ball.getX();
  };
  e.prototype.deltaBallY = function () {
    return this.player.getY() - this.ball.getY();
  };
  e.prototype.isOpponentCloseBehind = function (t = 100) {
    var e = (this.player.getX() - this.opponent.getX()) * this.SIDE;
    return e > 0 && e <= t;
  };
  e.prototype.isOpponentInRangeBehind = function (t = 40, e = 180) {
    var i = (this.player.getX() - this.opponent.getX()) * this.SIDE;
    return i > 0 && i >= t && i <= e;
  };
  e.prototype.isOpponentCloseToBasket = function (t = 30) {
    var e = (this.playerX - this.opponentX) * this.SIDE;
    return e < 0 && e + t >= 0;
  };
  e.prototype.isAICloserForBasket = function () {
    return (this.playerX - this.opponentX) * this.SIDE < 0;
  };
  e.prototype.isOpponentCloseAbs = function (t = 100) {
    return Math.abs(this.playerX - this.opponentX) <= t;
  };
  e.prototype.isUnderOwnBasket = function () {
    if (this.SIDE === 1) {
      return this.playerX > 700;
    } else {
      return this.playerX < 100;
    }
  };
  return e;
}(n.BaseController);
exports.BaseAIController = p;