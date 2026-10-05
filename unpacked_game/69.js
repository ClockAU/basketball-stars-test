exports.__esModule = true;
var s = function () {
  function t(t) {
    this.restarted = false;
    this.firstTeam = t ? 1 : 17;
    this.baseInit();
    this.resetPartly();
  }
  Object.defineProperty(t.prototype, "matchMode", {
    get: function () {
      return this._matchMode;
    },
    set: function (t) {
      this._matchMode = t;
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.resetData = function () {
    this.teams = [];
    this.players = [[], []];
  };
  t.prototype.resetPartly = function () {
    this.matchMode = 0;
    this.pb = [[], []];
    this.skills = [[], []];
    this.forms = [0, 1];
    this.matchScore = [0, 0];
  };
  t.prototype.resetAll = function () {
    this.resetData();
    this.resetPartly();
  };
  t.prototype.baseInit = function () {
    this.matchMode = 0;
    this.teams = [this.firstTeam, 2];
    this.players = [[0], [0]];
  };
  t.prototype.resetScore = function () {
    this.matchScore = [0, 0];
  };
  t.prototype.startQuickMatch = function () {
    this.resetAll();
    var t = 1 + Math.random() * 16 >> 0;
    var e = 1 + Math.random() * 16 >> 0;
    if (t === e) {
      if (e === 16) {
        e--;
      } else {
        e++;
      }
    }
    this.teams = [t, e];
    this.players[0][0] = Math.random() <= 0.5 ? 0 : 1;
    this.players[1][0] = Math.random() <= 0.5 ? 0 : 1;
    this.pb = [["P0"], ["B0"]];
    this.skills = [[0], [2]];
  };
  t.prototype.startTraining = function () {
    this.resetAll();
    this.teams[0] = 1 + Math.random() * 16 >> 0;
    this.teams[1] = this.teams[0];
    this.players[0] = [Math.random() <= 0.5 ? 0 : 1];
    this.players[1] = [];
    this.pb = [["P0"]];
    this.skills = [[0]];
    this.rndForms();
  };
  t.prototype.startRandomMatch = function () {
    if (this.matchMode === 0) {
      this.pb = [["P0"], ["B0"]];
      this.skills = [[0], [3]];
    } else {
      this.fill2ndPlayers();
      this.pb = [["P0", "B2"], ["B1", "B2"]];
      this.skills = [[0, 3], [3, 3]];
    }
    this.rndForms();
  };
  t.prototype.startPlayers2Match = function () {
    if (this.matchMode === 0) {
      var t = this.players[0][0];
      var e = this.players[1][0];
      this.players = [[t], [e]];
      this.pb = [["P1"], ["P2"]];
      this.skills = [[0], [0]];
    } else if (this.matchMode === 1) {
      this.fill2ndPlayers();
      this.pb = [["P1", "B2"], ["P2", "B2"]];
      this.skills = [[0, 4], [0, 4]];
    } else {
      this.fill2ndPlayers();
      this.pb = [["P1", "P2"], ["B1", "B2"]];
      this.skills = [[0, 0], [4, 4]];
    }
    this.rndForms();
  };
  t.prototype.fill2ndPlayers = function () {
    if (this.players[0].length === 2) {
      this.players[0][1] = this.players[0][0] === 0 ? 1 : 0;
    } else {
      this.players[0].push(this.players[0][0] === 0 ? 1 : 0);
    }
    if (this.players[1].length === 2) {
      this.players[1][1] = this.players[1][0] === 0 ? 1 : 0;
    } else {
      this.players[1].push(this.players[1][0] === 0 ? 1 : 0);
    }
  };
  t.prototype.startTournamentMatch = function (t) {
    this.resetAll();
    this.matchMode = t.mode;
    this.teams = [t.team, t.opponent];
    this.players[0][0] = t.player;
    this.players[1][0] = Math.random() <= 0.5 ? 0 : 1;
    var e = t.difficulty * 4 + t.state + 1;
    if (t.isThirdPlaceMatch()) {
      e--;
    }
    if (this.matchMode === 0) {
      this.pb = [["P0"], ["B0"]];
      this.skills = [[0], [e]];
    } else {
      this.players[0][1] = this.players[0][0] == 0 ? 1 : 0;
      this.players[1][1] = this.players[1][0] == 0 ? 1 : 0;
      this.pb = [["P0", "B2"], ["B1", "B2"]];
      this.skills = [[0, 4], [e, e]];
    }
    this.rndForms();
  };
  t.prototype.finishMatch = function (t) {
    if (t === 2 || t === 3) {
      this.baseInit();
    } else {
      this.cutPlayers(0);
      this.cutPlayers(1);
    }
    this.resetPartly();
  };
  t.prototype.cutPlayers = function (t) {
    if (this.players[t].length === 2) {
      this.players[t].pop();
    }
  };
  t.prototype.rndForms = function () {
    this.forms = [0, 1];
  };
  t.prototype.whoWins = function () {
    var t;
    return t = this.matchScore[0] > this.matchScore[1] ? -1 : this.matchScore[0] < this.matchScore[1] ? 1 : 0;
  };
  return t;
}();
exports.MatchData = s;