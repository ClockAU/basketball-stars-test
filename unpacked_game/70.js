exports.__esModule = true;
var s = function () {
  function t() {
    this.obj = {};
    this.resetAll();
  }
  Object.defineProperty(t.prototype, "state", {
    get: function () {
      return this.obj.state;
    },
    set: function (t) {
      this.obj.state = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "difficulty", {
    get: function () {
      return this.obj.difficulty;
    },
    set: function (t) {
      this.obj.difficulty = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "mode", {
    get: function () {
      return this.obj.mode;
    },
    set: function (t) {
      this.obj.mode = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "scores", {
    get: function () {
      return this.obj.scores;
    },
    set: function (t) {
      this.obj.scores = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "team", {
    get: function () {
      return this.obj.team;
    },
    set: function (t) {
      this.obj.team = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "player", {
    get: function () {
      return this.obj.player;
    },
    set: function (t) {
      this.obj.player = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "teamRound", {
    get: function () {
      return this.obj.teamRound;
    },
    set: function (t) {
      this.obj.teamRound = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "posOfTeam", {
    get: function () {
      return this.obj.posOfTeam;
    },
    set: function (t) {
      this.obj.posOfTeam = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "opponent", {
    get: function () {
      return this.obj.opponent;
    },
    set: function (t) {
      this.obj.opponent = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "rounds", {
    get: function () {
      return this.obj.rounds;
    },
    set: function (t) {
      this.obj.rounds = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "results", {
    get: function () {
      return this.obj.results;
    },
    set: function (t) {
      this.obj.results = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "points", {
    get: function () {
      return this.obj.points;
    },
    set: function (t) {
      this.obj.points = t;
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.resetAll = function () {
    this.state = -1;
    this.mode = 0;
    this.scores = 0;
    this.team = 0;
    this.difficulty = 0;
    this.player = 0;
    this.teamRound = 0;
    this.posOfTeam = [0, 1];
    this.opponent = 0;
    this.rounds = [];
    this.results = [];
    this.points = 0;
  };
  t.prototype.createNewTournament = function (t) {
    this.resetAll();
    this.team = t.teams[0];
    this.player = t.players[0][0];
    this.mode = t.matchMode;
    this.rounds = [];
    var e = 16;
    var i = [];
    for (var s = 0; s < 16; s++) {
      i[s] = s + 1;
    }
    this.swapTeams(i, 0);
    this.swapTeams(i, 8);
    if (this.team > 16) {
      var n = Math.random() <= 0.5 ? 8 : 16;
      for (var a = 0; a < 16; a++) {
        if (i[a] === n) {
          i[a] = 17;
          break;
        }
      }
    }
    for (var o = 0; o < i.length / 2; o++) {
      this.rounds[o] = [i[o * 2], i[o * 2 + 1]];
      if (i[o * 2] === this.team || i[o * 2 + 1] === this.team) {
        this.teamRound = o;
      }
    }
    this.results = [];
    this.state = 0;
    this.scores = 0;
    this.defineOpponent();
  };
  t.prototype.swapTeams = function (t, e) {
    for (var i = e + 8, s = e; s < i; s++) {
      var n = e + Math.random() * 8 >> 0;
      var a = t[s];
      t[s] = t[n];
      t[n] = a;
    }
  };
  t.prototype.defineOpponent = function () {
    this.posOfTeam = this.rounds[this.teamRound][0] === this.team ? [0, 1] : [1, 0];
    this.opponent = this.rounds[this.teamRound][this.posOfTeam[1]];
  };
  t.prototype.generateResults = function (t, e, i, s = null) {
    var n = true;
    for (var a = 0; a < e - t; a++) {
      var o = a + t;
      var r = e + (a / 2 >> 0);
      if (this.rounds.length === r) {
        this.rounds.push([]);
      }
      var h = a % 2;
      var l = undefined;
      var c = undefined;
      if (o === this.teamRound) {
        if (this.rounds[o][0] === this.team) {
          this.results[o] = [s[0], s[1]];
        } else if (this.rounds[o][1] === this.team) {
          this.results[o] = [s[1], s[0]];
        }
        if (s[0] > s[1]) {
          l = this.posOfTeam[0];
          c = this.posOfTeam[1];
          n = true;
          this.teamRound = r;
        } else {
          l = this.posOfTeam[1];
          c = this.posOfTeam[0];
          n = i;
          if (i) {
            this.teamRound = r + 1;
          }
        }
      } else {
        if (Math.random() <= 0.5) {
          l = 0;
          c = 1;
        } else {
          l = 1;
          c = 0;
        }
        this.generateMatchScore(l, c, o);
      }
      this.rounds[r][h] = this.rounds[o][l];
      if (i) {
        if (this.rounds.length === r + 1) {
          this.rounds.push([]);
        }
        this.rounds[r + 1][h] = this.rounds[o][c];
      }
    }
    return n;
  };
  t.prototype.generateMatchScore = function (t, e, i) {
    var s = [0, 0];
    var n = 30 + Math.random() * 20 >> 0;
    var a = 1 + Math.random() * 10 >> 0;
    var o = n - a;
    s[t] = n;
    s[e] = o;
    this.results[i] = s;
  };
  t.prototype.getFinalistsArray = function () {
    var t = [];
    var e = this.getPlace();
    t.push(this.rounds[16][0], this.rounds[17][0], this.rounds[16][1]);
    if (e > 3) {
      t.push(this.team);
    }
    t.push(e);
    return t;
  };
  t.prototype.getPlace = function () {
    var t = 5;
    if (this.team === this.rounds[16][0]) {
      t = 1;
    } else if (this.team === this.rounds[17][0]) {
      t = 2;
    } else if (this.team === this.rounds[16][1]) {
      t = 3;
    } else if (this.team === this.rounds[17][1]) {
      t = 4;
    }
    return t;
  };
  t.prototype.isSecondPlace = function () {
    return !!this.rounds[17] && this.team === this.rounds[17][0];
  };
  t.prototype.isThirdPlaceMatch = function () {
    return this.state === 3 && (this.team === this.rounds[15][0] || this.team === this.rounds[15][1]);
  };
  t.prototype.setValues = function (t) {
    for (var e in t) {
      if (this.obj.hasOwnProperty(e)) {
        this.obj[e] = t[e];
      }
    }
  };
  t.prototype.getValues = function () {
    var t = {};
    for (var e in this.obj) {
      if (this.obj.hasOwnProperty(e)) {
        t[e] = this.obj[e];
      }
    }
    return t;
  };
  return t;
}();
exports.TournamentData = s;