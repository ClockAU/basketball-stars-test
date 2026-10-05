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
var n = require("./3.js");
var a = require("./1.js");
var o = require("./8.js");
var r = require("./2.js");
var h = require("./51.js");
var l = function (t) {
  function e(e) {
    var i = t.call(this, n.default.game) || this;
    i.id = e;
    var s = r.Inventory.instance.matchData.teams[0] - 1;
    var h = r.Inventory.instance.matchData.teams[1] - 1;
    var l = "";
    var c = "";
    var u = 1;
    if (e === 0) {
      l = "MATCH PREVIEW";
      i.createTitle();
      i.createTitleState(l, a.Constants.stylePreMatchState);
      c = "0 : 0";
      i.createMode();
    } else {
      u = 2;
      l = r.Inventory.instance.matchData.matchScore[0] > r.Inventory.instance.matchData.matchScore[1] ? "YOU WON!!!" : "YOU LOST";
      i.createTitleState(l, a.Constants.styleEndMatchTop);
      c = r.Inventory.instance.matchData.matchScore[0].toString() + " : " + r.Inventory.instance.matchData.matchScore[1].toString();
    }
    i.score = new o.default(i.game, c, i.id === 2 ? a.Constants.styleEndMatchScore : a.Constants.stylePreMatchScore, null, null, a.Atlases.Interface);
    i.score.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.score.setProp("#000000", 7, "#FFFFFF", 15);
    if (i.id === 2) {
      i.score.y = 60;
    } else {
      i.score.y = 140;
    }
    i.addChild(i.score);
    i.ccc = new o.default(i.game, "", a.Constants.stylePreMatchNames, null, null, a.Atlases.Interface);
    i.ccc.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.ccc.setProp("#000000", 4, "#FFFFFF", 8);
    i.ccc.y = 220;
    i.ccc.x = u * -150;
    i.addChild(i.ccc);
    i.ccc2 = new o.default(i.game, "", a.Constants.stylePreMatchNames, null, null, a.Atlases.Interface);
    i.ccc2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.ccc2.setProp("#000000", 4, "#FFFFFF", 8);
    i.ccc2.y = 220;
    i.ccc2.x = u * 150;
    i.addChild(i.ccc2);
    i.ccc.visible = false;
    i.ccc2.visible = false;
    i.team1 = i.game.add.image(-270, 0, a.Atlases.Interface, "emptyBg0000");
    i.team1.anchor.set(0.5);
    i.team1.scale.set(0.75);
    i.team1.y = 50;
    i.addChild(i.team1);
    i.team2 = i.game.add.image(270, 0, a.Atlases.Interface, "emptyBg0000");
    i.team2.anchor.set(0.5);
    i.team2.scale.set(0.75);
    i.team2.y = 50;
    i.addChild(i.team2);
    i.team1.loadTexture(a.Atlases.Interface, "Emblems00" + (s < 10 ? "0" : "") + s);
    i.team2.loadTexture(a.Atlases.Interface, "Emblems00" + (h < 10 ? "0" : "") + h);
    return i;
  }
  s(e, t);
  e.prototype.createTitle = function () {
    this.title = new o.default(this.game, this.defineLeg(), a.Constants.stylePreMatchTop, null, null, a.Atlases.Interface);
    this.title.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.title.setProp("#000000", 6, "#FFFFFF", 12);
    this.addChild(this.title);
  };
  e.prototype.createMode = function () {
    this.matchModePanel = new h.MatchModePanel(null);
    this.matchModePanel.y = 220;
    this.matchModePanel.hideBG();
    this.matchModePanel.showCurrentMode();
    this.addChild(this.matchModePanel);
  };
  e.prototype.createTitleState = function (t, e) {
    this.title_state = new o.default(this.game, t, e, null, null, a.Atlases.Interface);
    this.title_state.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.title_state.setProp("#000000", 5, "#FFFFFF", 10);
    if (this.id === 2) {
      this.title_state.setProp("#000000", 10, "#FFFFFF", 22);
      this.title_state.y = -50;
    } else {
      this.title_state.setProp("#000000", 5, "#FFFFFF", 10);
      this.title_state.y = 55;
    }
    this.addChild(this.title_state);
  };
  e.prototype.defineLeg = function () {
    var t = r.Inventory.instance.tournament.state;
    var e;
    if (t === 0) {
      e = "ROUND OF 16";
    } else if (t === 1) {
      e = "QUARTERFINAL";
    } else if (t === 2) {
      e = "SEMIFINAL";
    } else if (t === 3) {
      e = r.Inventory.instance.isFinal() ? "FINAL" : "3rd PLACE MATCH";
    }
    return e;
  };
  return e;
}(Phaser.Group);
exports.PreMatchPanelResult = l;