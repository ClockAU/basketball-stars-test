exports.__esModule = true;
var s = require("./2.js");
var n = require("./45.js");
var a = require("./24.js");
var o = require("./3.js");
var r = require("./80.js");
var h = require("./81.js");
var l = require("./47.js");
var c = function () {
  function t() {
    var t = a.Inventory.instance.gameMode;
    if (t === 0) {
      a.Inventory.instance.startTournamentMatch();
    } else if (t === 3) {
      a.Inventory.instance.matchData.startTraining();
    } else if (a.Inventory.instance.matchData.restarted) {
      a.Inventory.instance.matchData.restarted = false;
      a.Inventory.instance.matchData.resetScore();
    } else if (t === 1) {
      a.Inventory.instance.matchData.startRandomMatch();
    } else if (t === 2) {
      a.Inventory.instance.matchData.startQuickMatch();
    } else if (t === 4) {
      a.Inventory.instance.matchData.startPlayers2Match();
    }
  }
  t.prototype.start = function (t, e, i) {
    var c = new r.ArenaObject();
    new h.BasketObject(-1);
    new h.BasketObject(1);
    new n.BallObject();
    new s.CountDownObject();
    new s.MessageInfo();
    for (var u = a.Inventory.instance.matchData, d = 0; d < u.teams.length; d++) {
      for (var p = 0; p < u.players[d].length; p++) {
        var f = i.pop();
        o.default.game.world.addChild(f);
        new s.PlayerObject(d, u.teams[d], u.players[d][p], u.forms[d], p, u.pb[d][p], l.AISkillsData.botsSkills[u.skills[d][p]], f);
      }
    }
    c.setLogo(u.teams[0]);
    t.call(e);
  };
  return t;
}();
exports.GameBuilder = c;