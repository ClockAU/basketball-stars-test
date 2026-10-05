exports.__esModule = true;
var s = require("./37.js");
var n = require("./69.js");
var a = require("./70.js");
var o = require("./71.js");
var r = require("./72.js");
var h = require("./74.js");
var l = function () {
  function t() {
    this.nickNames = ["points3", "dunks", "fromBlock", "buzzer", "blocks", "steals", "scores", "pointsM", "pointsMH", "pointsT", "pointsTH", "idNet", "forum", "GC1", "SC1", "BC1", "GC2", "SC2", "BC2", "GC1H", "GC2H"];
    this.save = null;
    this.firstEnter = false;
    this.inited = false;
    this.isLocal = true;
    this.gameMode = 0;
    this.matchData = null;
    this.tournament = null;
    this.currentScore = 0;
    this.clearWin = 0;
    this.losesCount = 0;
    this.localGamesCount = 0;
    this.prevShowForum = 0;
    this.SAVE = "tsave";
    this.ACHIEVS = "achievs";
    this.STATS = "stats";
    this.outInfo = "";
    this.timeToShowAdditionalGUI = 1800000;
    this.notLogged = true;
    if (t._instance !== null) {
      throw new Error("Signleton: Must be only one Object");
    }
    this.isLocal = true;
    //!SaveGame.getInstance().useOnlineSave;
    this.matchData = new n.MatchData(this.isLocal);
    this.tournament = new a.TournamentData();
    this.matchData.matchMode = 0;
  }
  t.prototype.initManagers = function () {
    this.achievsMgr = new r.AchievsDataManager(this.save, this.ACHIEVS, !this.isLocal);
    this.achievsMgr.signalSave.add(s.default.getInstance().save, s.default.getInstance());
    this.statsMgr = new h.StatsDataManager(this.save, this.STATS, !this.isLocal, this.achievsMgr);
    this.statsMgr.signalSave.add(s.default.getInstance().save, s.default.getInstance());
  };
  Object.defineProperty(t, "instance", {
    get: function () {
      if (t._instance === null) {
        t._instance = new t();
      }
      return t._instance;
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.init = function () {
    if (!this.inited) {
      this.inited = true;
      this.save = {};
      var e = this.save[t.LAST_ENTER];
      this.save[t.LAST_ENTER] = Date.now();
      if (!e) {
        this.firstEnter = true;
      }
      this.gameMode = 0;
      this.currentScore = 0;
      this.clearWin = 0;
      this.losesCount = 0;
      this.localGamesCount = 0;
      this.prevShowForum = 0;
      t.instance.initManagers();
    }
  };
  t.prototype.saveTournament = function () {
    var t = this.tournament.getValues();
    var e = this.SAVE;
    this.save[e] = t;
    s.default.getInstance().save();
  };
  t.prototype.getTournament = function () {
    var t = this.SAVE;
    var e = this.save[t];
    return !!e && (this.tournament.setValues(e), true);
  };
  t.prototype.breakTournament = function () {
    this.clearTournamentData();
    this.clearTournamentSave();
  };
  t.prototype.clearTournamentData = function () {
    this.tournament.resetAll();
  };
  t.prototype.clearTournamentSave = function () {
    var t = this.SAVE;
    delete this.save[t];
    s.default.getInstance().save();
  };
  t.prototype.reset = function () {
    this.inited = false;
    this.init();
  };
  t.prototype.checkQuickMatch = function () {
    return this.gameMode === 3;
  };
  t.prototype.isFinal = function () {
    return this.team === this.rounds[28] || this.team === this.rounds[29];
  };
  t.prototype.summarizeMatch = function () {
    if (this.gameMode === 0) {
      this.matchScores = o.ScoresCalculator.calcScores(this.matchData.matchScore, this.tournament.state, this.tournament.difficulty, this.tournament.isSecondPlace());
      this.tournament.scores += this.matchScores;
      this.statsMgr.updateScore(this.tournament.scores, this.tournament.mode);
      var t = this.matchData.matchScore[0];
      this.tournament.points += t;
      this.achievsMgr.updateData(7, t);
      if (this.tournament.difficulty === 1) {
        this.achievsMgr.updateData(8, t);
      }
    }
  };
  t.prototype.checkForumAchievement = function () {
    this.achievsMgr.updateData(12);
  };
  Object.defineProperty(t.prototype, "firstRun", {
    get: function () {
      return !this.save.hasOwnProperty("firstRun") || this.save.firstRun;
    },
    set: function (t) {
      this.save.firstRun = t;
      s.default.getInstance().save();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "firstRun2", {
    get: function () {
      return !this.save.hasOwnProperty("firstRun2") || this.save.firstRun2;
    },
    set: function (t) {
      this.save.firstRun2 = t;
      s.default.getInstance().save();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "rounds", {
    get: function () {
      return this.tournament.rounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "results", {
    get: function () {
      return this.tournament.results;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "opponent", {
    get: function () {
      return this.tournament.opponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "team", {
    get: function () {
      return this.tournament.team;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "teamNo", {
    get: function () {
      return this.tournament.teamRound;
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.nextLeg = function () {
    var t = "Standings";
    this.calcVars();
    var e = this.tournament.generateResults(this.startId, this.endId, this.isFinalLegs, this.matchData.matchScore);
    this.tournament.state++;
    this.summarizeMatch();
    if (this.tournament.state === 4) {
      this.summarizeTournament(true);
      t = "Final";
    } else if (e) {
      this.tournament.defineOpponent();
      this.saveTournament();
      t = "Standings";
    } else {
      for (var i = this.tournament.state; i < 4; i++) {
        this.calcVars();
        this.tournament.generateResults(this.startId, this.endId, this.isFinalLegs);
        this.tournament.state++;
      }
      this.summarizeTournament(false);
      t = "Final";
    }
    return [e, t];
  };
  t.prototype.calcVars = function () {
    this.isFinalLegs = false;
    var t = this.tournament.state;
    if (t === 0) {
      this.startId = 0;
      this.endId = 8;
    } else if (t === 1) {
      this.startId = 8;
      this.endId = 12;
    } else if (t === 2) {
      this.startId = 12;
      this.endId = 14;
      this.isFinalLegs = true;
    } else {
      this.startId = 14;
      this.endId = 16;
      this.isFinalLegs = true;
    }
  };
  t.prototype.summarizeTournament = function (t) {
    var e = this.tournament.getPlace();
    if (t && e < 4) {
      this.achievsMgr.updateData(14 + this.tournament.mode * 3 + e);
      if (e === 1) {
        if (this.tournament.team === 17) {
          this.achievsMgr.updateData(11);
        }
        if (this.tournament.difficulty === 1) {
          this.achievsMgr.updateData(13 + this.tournament.mode);
        }
      }
    }
    this.achievsMgr.updateData(9, this.tournament.points);
    if (this.tournament.difficulty === 1) {
      this.achievsMgr.updateData(10, this.tournament.points);
    }
  };
  t.prototype.breakMatch = function () {
    if (this.gameMode === 0) {
      this.breakTournament();
    }
    this.matchData.finishMatch(this.gameMode);
  };
  t.prototype.getTitleFrame = function () {
    var t = this.matchData.whoWins() === -1;
    var e;
    return e = this.gameMode === 4 ? this.matchData.matchMode === 2 ? t ? 1 : 2 : t ? 3 : 4 : t ? 1 : 2;
  };
  t.prototype.isPvP = function () {
    return this.gameMode === 4 && this.matchData.matchMode < 2;
  };
  t.prototype.createNewTournament = function () {
    this.tournament.createNewTournament(this.matchData);
    this.saveTournament();
  };
  t.prototype.startTournamentMatch = function () {
    this.matchData.startTournamentMatch(this.tournament);
  };
  t.prototype.showAdditionalGUI = function () {
    if (this.gameMode === 0 && this.matchData.matchScore[0] <= this.matchData.matchScore[1]) {
      this.losesCount++;
    }
    if (this.isLocal && this.notLogged) {
      this.localGamesCount++;
    }
    var t = Date.now();
    if (this.losesCount >= 3 && (this.prevShowForum === 0 || t - this.prevShowForum >= this.timeToShowAdditionalGUI)) {
      this.prevShowForum = t;
      this.losesCount = 0;
      return 1;
    } else if (this.localGamesCount >= 3 && (this.prevShowRegister === 0 || t - this.prevShowRegister >= this.timeToShowAdditionalGUI)) {
      this.prevShowRegister = t;
      this.localGamesCount = 0;
      return 2;
    } else {
      return 0;
    }
  };
  t.prototype.getAchievsArray = function () {
    return this.achievsMgr.getValuesForRead();
  };
  t.prototype.getMatchScores = function () {
    return this.matchScores;
  };
  t.prototype.getTournamentScores = function () {
    return this.tournament.scores;
  };
  t.prototype.getTotalScores = function () {
    return this.statsMgr.getTotalScores();
  };
  t.LAST_ENTER = "l_e";
  t._instance = null;
  return t;
}();
exports.Inventory = l;