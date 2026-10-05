exports.__esModule = true;
var s = require("./4.js");
var n = require("./47.js");
var a = require("./3.js");
var o = require("./12.js");
var r = function () {
  function t() {}
  t.setupPlayers = function () {
    n.AISkillsData.create();
    for (var e = 0; e < t.PLAYERS_COUNT; e++) {
      t.heads[e] = "head" + (e + 1).toString();
      t.bodies[e] = "body" + (e + 1).toString();
      t.legs[e] = "leg" + (1 + (Math.random() * 5 >> 0)).toString();
    }
    t.legs[32] = t.legs[33] = "leg6";
  };
  t.switchPlayer = function (e, i, n = 1) {
    var r = i;
    var h = n;
    e.getBone("head").slot.childArmature.animation.gotoAndPlay(t.heads[r]);
    e.getBone("body").slot.childArmature.animation.gotoAndPlay(t.bodies[h]);
    e.getBone("left hand").slot.childArmature.animation.gotoAndPlay("hand" + t.hands[r]);
    e.getBone("right hand").slot.childArmature.animation.gotoAndPlay("hand" + t.hands[r]);
    e.getBone("left leg").slot.childArmature.animation.gotoAndPlay(t.legs[r]);
    e.getBone("right leg").slot.childArmature.animation.gotoAndPlay(t.legs[r]);
    if (a.default.game.state.current === o.Gameplay.Name) {
      e.getBone("dighand").slot.childArmature.animation.gotoAndPlay("hand" + t.hands[r]);
      e.getBone("digleg").slot.childArmature.animation.gotoAndPlay(t.legs[r]);
    }
    e.animation.gotoAndPlay("idle");
    e.advanceTime(s.default.STEP);
  };
  t.setPoint = function (e, i) {
    t.POINTS[e] = i;
  };
  t.getPoint = function (e) {
    return t.POINTS[e];
  };
  t.PLAYERS_COUNT = 34;
  t.POINTS = [0, 0, 0, 0, 0, 0];
  t.heads = [];
  t.bodies = [];
  t.legs = [];
  t.hands = [2, 3, 1, 2, 2, 1, 2, 1, 2, 1, 1, 3, 3, 2, 1, 2, 3, 3, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 2, 1];
  t.TEAMS_COUNT = 16;
  return t;
}();
exports.PlayersData = r;