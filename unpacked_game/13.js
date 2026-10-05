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
var a = require("./66.js");
var o = require("./3.js");
var r = require("./22.js");
var h = require("./0.js");
var l = require("./5.js");
var c = require("./24.js");
var u = require("./11.js");
var d = require("./76.js");
var p = require("./4.js");
var f = require("./15.js");
var g = require("./30.js");
var m = require("./1.js");
var y = require("./14.js");
var v = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.isPlaying = false;
    e.isPaused = false;
    e.isWaiting = false;
    e.scoredByHuman = false;
    e.isEnd = false;
    e.SIDE = 0;
    e.delayEndTime = 1.5;
    e.matchTime = 0;
    e.endTime = 0;
    e.leftCounter = 0;
    e.rightCounter = 0;
    e.nextState = "";
    e.slowSignal = new h.Signal();
    e.matchEndSignal = new h.Signal();
    e.menuPauseSignal = new h.Signal();
    f.Signals.MatchProcessorSignal.add(e.processMatchProcessor, e);
    return e;
  }
  s(e, t);
  Object.defineProperty(e, "instance", {
    get: function () {
      e._instance ||= new e();
      return e._instance;
    },
    enumerable: true,
    configurable: true
  });
  e.prototype.init = function (e) {
    t.prototype.init.call(this, e);
    this.view = new a.MainGameView(o.default.game);
    this.physics = new r.NapePhysics();
    this.physics2 = new d.Physics2();
    this.playersLeft = [];
    this.playersRight = [];
    this.opponents = [];
  };
  e.prototype.start = function () {
    t.prototype.start.call(this);
    this.matchPreloader = this.view.matchPreloader;
    this.matchPreloader.setCallBacks(this.restart2, this.startPlay, this);
    f.Signals.MatchProcessorSignal.add(this.processMatchProcessor, this);
    f.Signals.EventSignal.add(this.processEvent, this);
    this.isTraining = c.Inventory.instance.gameMode === 3;
    this.isTraining = this.isTraining;
    var e = c.Inventory.instance.matchData.matchMode === 0;
    this.isSinglePlayer = e;
    this.infoPanel = this.view.infoPanel;
    this.timer = this.view.timer;
    this.infoPanel.start(c.Inventory.instance.matchData.teams, c.Inventory.instance.matchData.matchScore[0], c.Inventory.instance.matchData.matchScore[1]);
    this.winSnds = [];
    this.winSnds[0] = m.Sounds.m_win;
    this.winSnds[1] = c.Inventory.instance.isPvP() ? m.Sounds.m_win : m.Sounds.m_lost;
    this.startMatch(true);
    if (!this.isTraining) {
      this.m_tribune = l.default.getInstance().play(m.Sounds.m_tribune, u.default.getInstance().sfx ? 1 : 0, true);
    }
  };
  e.prototype.startMatch = function (t = true) {
    this.SIDE = this.isTraining ? 1 : 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.isOvertime = false;
    this.isEnd = false;
    this.isWaiting = false;
    this.matchTime = 0;
    var i = this.isTraining ? 250 : 500;
    this.matchPreloader.setTime(i);
    if (!this.isTraining) {
      this.endTime = t ? p.default.MATCH_TIME : p.default.OVERTIME_TIME;
      this.countDown.activate();
    }
    if (t) {
      c.Inventory.instance.matchData.resetScore();
    }
    this.infoPanel.updateScore(c.Inventory.instance.matchData.matchScore[0], c.Inventory.instance.matchData.matchScore[1]);
    this.timer.start(this.endTime);
    this.restart2();
    if (c.Inventory.instance.gameMode === 4) {
      if (c.Inventory.instance.firstRun2) {
        c.Inventory.instance.firstRun2 = false;
        g.default.instance.signalPause.dispatch(e.HELP);
      }
    } else if (c.Inventory.instance.firstRun) {
      c.Inventory.instance.firstRun = false;
      g.default.instance.signalPause.dispatch(e.HELP);
    }
  };
  e.prototype.startPlay = function () {
    this.isScored = false;
  };
  e.prototype.restart2 = function () {
    this.restart(this.SIDE);
    this.matchPreloader.hide();
  };
  e.prototype.getNextState = function () {
    var t = "";
    return t = c.Inventory.instance.gameMode === 0 || c.Inventory.instance.gameMode === 1 || c.Inventory.instance.gameMode === 3 ? "GameMode" : "NumPlayers";
  };
  e.prototype.processMatchProcessor = function (t, e, i, s) {
    if (!this.isEnd) {
      var n = t === -1 ? 1 : 0;
      l.default.getInstance().play(this.winSnds[n]);
      c.Inventory.instance.matchData.matchScore[n] += e;
      this.timer.updateScore(t, c.Inventory.instance.matchData.matchScore[n]);
      this.view.shake(s);
      if (this.isTraining) {
        this.matchPreloader.show();
        this.setEmotions(0);
      } else {
        this.SIDE = t;
        this.isScored = true;
        this.scoredByHuman = i;
        if (!this.isWaiting) {
          this.processEvent(i, s);
          this.matchPreloader.show();
          this.setEmotions(-t);
        }
      }
    }
  };
  e.prototype.update = function (e) {
    // MULTIPLAYER: Guests do NOT run the game loop. Only receive and apply state from host.
    if (window.netState && window.netState.isGuest) {
      // Apply host's state if available
      if (window.latestHostState) {
        var s = window.latestHostState;
        if (this.ball && this.ball.body && s.b) {
          this.ball.body.position.setxy(s.b.x, s.b.y);
          this.ball.body.velocity.setxy(s.b.vx, s.b.vy);
          if (this.ball.updateGraphic) this.ball.updateGraphic();
        }
        if (this.playersLeft[0] && this.playersLeft[0].body && s.p1) {
          this.playersLeft[0].body.position.setxy(s.p1.x, s.p1.y);
          this.playersLeft[0].body.velocity.setxy(s.p1.vx, s.p1.vy);
          if (this.playersLeft[0].updateGraphic) this.playersLeft[0].updateGraphic();
        }
        if (this.playersRight[0] && this.playersRight[0].body && s.p2) {
          this.playersRight[0].body.position.setxy(s.p2.x, s.p2.y);
          this.playersRight[0].body.velocity.setxy(s.p2.vx, s.p2.vy);
          if (this.playersRight[0].updateGraphic) this.playersRight[0].updateGraphic();
        }
        // Update score display only if it changed
        if (s.s && (s.s[0] !== c.Inventory.instance.matchData.matchScore[0] || s.s[1] !== c.Inventory.instance.matchData.matchScore[1])) {
          c.Inventory.instance.matchData.matchScore = s.s;
          this.timer.updateScore(-1, s.s[0]);
          this.timer.updateScore(1, s.s[1]);
        }
      }
      // Guest doesn't run game logic, just renders what the host sent
      return;
    }

    // HOST AND OFFLINE: Run the full game loop

    if (this.isPaused) {
      if (this.m_tribune) {
        this.m_tribune.volume = 0;
      }
    } else {
      if (this.m_tribune) {
        this.m_tribune.volume = u.default.getInstance().sfx ? 1 : 0;
      }
      if (this.isPlaying) {
        if (this.isAlleyOop) {
          this.physics2.update(e);
        }
        t.prototype.update.call(this, e);
        if (this.isEnd) {
          this.deltaEndTime += e;
          if (this.deltaEndTime > this.delayEndTime) {
            if (this.isOvertime) {
              this.startMatch(false);
            } else {
              this.isPlaying = false;
              this.nextState = "PostMatch";
              this.finishMatch();
            }
          }
        } else if (!this.isWaiting && !this.isScored && !this.isTraining && !this.isSuperShot) {
          this.matchTime += e;
          this.timer.process(this.matchTime);
          if (this.matchTime >= this.endTime) {
            this.endOfTime();
          }
        }
      } else if (this.countDown.process(e)) {
        l.default.getInstance().play(m.Sounds.m_whistle);
        this.isPlaying = true;
      }
    }

    // HOST BROADCAST: Send physics state to the Guest every frame
    if (window.netState && window.netState.isHost && window.socket) {
      window.socket.emit("host_state", {
        b: this.ball && this.ball.body ? { x: this.ball.body.position.x, y: this.ball.body.position.y, vx: this.ball.body.velocity.x, vy: this.ball.body.velocity.y } : null,
        p1: this.playersLeft[0] && this.playersLeft[0].body ? { x: this.playersLeft[0].body.position.x, y: this.playersLeft[0].body.position.y, vx: this.playersLeft[0].body.velocity.x, vy: this.playersLeft[0].body.velocity.y } : null,
        p2: this.playersRight[0] && this.playersRight[0].body ? { x: this.playersRight[0].body.position.x, y: this.playersRight[0].body.position.y, vx: this.playersRight[0].body.velocity.x, vy: this.playersRight[0].body.velocity.y } : null,
        s: c.Inventory.instance.matchData.matchScore
      });
    }
  };

  e.prototype.endOfTime = function () {
    l.default.getInstance().play(m.Sounds.m_buzzer);
    if (this.isBallInGame()) {
      this.isWaiting = true;
      this.activateWaiting();
      f.Signals.MatchEndSignal.add(this.processMatchEnd, this);
    } else {
      this.endMatch();
    }
  };
  e.prototype.processMatchEnd = function () {
    f.Signals.MatchEndSignal.remove(this.processMatchEnd, this);
    this.isWaiting = false;
    this.endMatch();
  };
  e.prototype.endMatch = function () {
    this.isEnd = true;
    this.isOvertime = false;
    var t = c.Inventory.instance.matchData.whoWins();
    var e = 10;
    if (t === 0) {
      e = 11;
      this.isOvertime = true;
    }
    this.setEmotions(t);
    if (this.isScored) {
      this.processEvent(this.scoredByHuman, 3, e);
    } else {
      this.messageInfo.show2(e);
    }
    this.deltaEndTime = 0;
  };
  e.prototype.add = function (e) {
    if (e !== null) {
      if (e.objType === n.ObjectsType.BALL) {
        this.ball = e;
        this.ball.space2 = d.Physics2.space;
      } else if (e.objType === n.ObjectsType.PLAYER) {
        var i = e;
        if (i.SIDE === -1) {
          this.playersLeft.push(i);
        } else {
          this.playersRight.push(i);
        }
      } else if (e.objType === n.ObjectsType.BASKET) {
        var s = e;
        if (s.side === -1) {
          this.basket1 = s;
        } else {
          this.basket2 = s;
        }
      } else {
        e.objType;
        n.ObjectsType.ARENA;
      }
      if (e instanceof n.CountDownObject) {
        this.countDown = e;
      }
      t.prototype.add.call(this, e);
    }
  };
  e.prototype.restart = function (e = 0) {
    t.prototype.restart.call(this, e);
    this.isSuperShot = false;
    this.isAlleyOop = false;
    if (this.isTraining) {
      this.ball.takeInHands(-1, 0, true);
      this.playersLeft[0].takeBallInHands();
    } else if (e !== 0) {
      if (e === -1) {
        this.ball.takeInHands(e, this.leftCounter, true);
        this.playersLeft[this.leftCounter].takeBallInHands();
        this.leftCounter = this.leftCounter++ / 2 >> 0;
      } else {
        this.ball.takeInHands(e, this.rightCounter, true);
        this.playersRight[this.rightCounter].takeBallInHands();
        this.rightCounter = this.rightCounter++ / 2 >> 0;
      }
    } else if (!this.game.device.desktop) {
      y.default.instance.btnDown.labelState.loadTexture(m.Atlases.Gameplay, "shoot_icon0001");
    }
    this.physics.update(p.default.STEP);
  };
  e.prototype.ballInHands = function (t = 0, e = 0) {
    for (var i = 0; i < this.playersLeft.length; i++) {
      this.playersLeft[i].ballInHands(t, e);
    }
    for (var s = 0; s < this.playersRight.length; s++) {
      this.playersRight[s].ballInHands(t, e);
    }
  };
  e.prototype.ballShooting = function (t = 0, e = 0) {
    for (var i = 0; i < this.playersLeft.length; i++) {
      this.playersLeft[i].ballShooting(t, e);
    }
    for (var s = 0; s < this.playersRight.length; s++) {
      this.playersRight[s].ballShooting(t, e);
    }
  };
  e.prototype.ballOthers = function () {
    for (var t = 0; t < this.playersLeft.length; t++) {
      this.playersLeft[t].ballOthers();
    }
    for (var e = 0; e < this.playersRight.length; e++) {
      this.playersRight[e].ballOthers();
    }
  };
  e.prototype.setEmotions = function (t) {
    for (var e = 0; e < this.playersLeft.length; e++) {
      this.playersLeft[e].setEmotion(t);
    }
    for (var i = 0; i < this.playersRight.length; i++) {
      this.playersRight[i].setEmotion(t);
    }
  };
  e.prototype.release = function () {
    this.ball = null;
    this.basket1 = null;
    this.basket2 = null;
    this.playersLeft.splice(0, this.playersLeft.length);
    this.playersRight.splice(0, this.playersRight.length);
    this.opponents.splice(0, this.opponents.length);
    this.physics2.release();
    f.Signals.MatchProcessorSignal.remove(this.processMatchProcessor, this);
    t.prototype.release.call(this);
  };
  e.prototype.steal = function (t, e, i, s) {
    if (!this.isTraining && !this.isSuperShot) {
      this.opponents = t === -1 ? this.playersRight : this.playersLeft;
      var n = false;
      if (this.isSinglePlayer) {
        n = this.stealSinglePlayer(e, i, 0);
      } else {
        var a = this.opponents[0].checkToBeStolen(e, i);
        if (a < 0) {
          n = this.stealSinglePlayer(e, i, 1);
        } else {
          var o = this.opponents[1].checkToBeStolen(e, i);
          if (o > 0 && o < a) {
            this.opponents[1].getBeStolen(e);
          } else {
            this.opponents[0].getBeStolen(e);
          }
          n = true;
        }
      }
      if (s && n) {
        f.Signals.EventSignal.dispatch(true, 5);
      }
    }
  };
  e.prototype.stealSinglePlayer = function (t, e, i) {
    return this.opponents[i].checkToBeStolen(t, e) >= 0 && (this.opponents[i].getBeStolen(t), true);
  };
  e.prototype.isBallInGame = function () {
    return this.ball.state === "shooting" || this.ball.state === "basket" || this.ball.state === "dunk" || this.ball.state === "block";
  };
  e.prototype.activateWaiting = function () {
    this.ball.isWaiting = true;
    this.setEmotions(0);
  };
  e.prototype.getTeamMate = function (t) {
    var e;
    if (this.isSinglePlayer) {
      e = null;
    } else {
      var i = t === 0 ? 1 : 0;
      e = this.playersLeft[i];
    }
    return e;
  };
  e.prototype.processEvent = function (t, e, i = 0) {
    if (e < 9 && e !== 4 && e !== 5) {
      this.messageInfo.show2(e, i);
    }
    if (c.Inventory.instance.gameMode === 0 && t && e < 7) {
      c.Inventory.instance.statsMgr.updateData(e);
    }
  };
  e.prototype.finishMatch = function () {
    if (!this.isTraining) {
      l.default.getInstance().stop(m.Sounds.m_tribune);
    }
    if (this.nextState === "") {
      this.nextState = e.FULL_TIME;
    }
    this.isPaused = true;
    e.instance.menuPauseSignal.dispatch(this.nextState);
  };
  e.PAUSE = "pause";
  e.HELP = "help";
  e.FULL_TIME = "PostMatch";
  return e;
}(n.GameCore);
exports.MainGameCore = v;
