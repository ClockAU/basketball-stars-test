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
require("./6.js");
require("./0.js");
var n = require("./5.js");
var a = require("./1.js");
var o = require("./17.js");
var r = require("./9.js");
var h = require("./8.js");
var l = require("./18.js");
var c = require("./106.js");
var u = require("./2.js");
var d = require("./4.js");
var p = require("./0.js");
var f = require("./12.js");
var g = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i.table = [];
    i.manager = null;
    return i;
  }
  s(e, t);
  e.prototype.init = function () {
    this.game.world.removeAll();
    this.manager = u.Inventory.instance;
    this.table = [];
  };
  e.prototype.create = function () {
    t.prototype.create.call(this);
    this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, r.default.getBG());
    this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000");
    this.backgroundBase.addChild(this.backgroundBase2);
    this.backgroundBaseMask = this.game.add.graphics(0, 0);
    this.backgroundBaseMask.beginFill(65280, 0);
    this.backgroundBaseMask.drawRect(0, 0, 1398, 480);
    this.backgroundBaseMask.endFill();
    this.background4 = this.game.add.sprite(200, 240, a.Atlases.Interface, "bg0000");
    this.background4.anchor.set(0.5);
    this.createButtons();
    this.setUp();
    this.backgroundBase2.addChild(this.background4);
    this.logo = this.game.add.sprite(400, 25, a.Atlases.Interface, "bg0000");
    this.logo.anchor.set(0.5);
    var e = "TOURNAMENT GRID";
    var i = new h.default(this.game, e, a.Constants.styleTitle2, null, null, a.Atlases.Interface);
    i.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.setProp("#000000", 7, "#FFFFFF", 15);
    this.logo.addChild(i);
    this.logo.x = 400;
    this.backgroundBase2.addChild(this.logo);
    this.playBtn = new h.default(this.game, "NEXT", a.Constants.stylePlayGreen, this.onPlay, this, a.Atlases.Interface);
    this.playBtn.setFrames("arrow20000", "arrow20000", "arrow20000", "arrow20000");
    this.playBtn.btn.btn.x = 110;
    this.playBtn.x = 646;
    this.playBtn.y = 450;
    this.playBtn.setProp("#000000", 7, "#FFFFFF", 15);
    this.backBtn = new h.default(this.game, "BACK", a.Constants.styleBackArrow, this.onBack, this, a.Atlases.Interface);
    this.backBtn.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000");
    this.backBtn.btn.btn.x = -110;
    this.backBtn.setProp("#330099", 7, "#FF99FF", 15);
    this.backBtn.x = 160;
    this.backBtn.y = 450;
    this.backgroundBase2.addChild(this.backBtn);
    this.backgroundBase2.addChild(this.playBtn);
    this.resize();
    new o.default(this.game, this, this.show);
  };
  e.prototype.show = function () {
    var t = this.game.add.tween(this.logo);
    t.from({
      alpha: 0.001
    }, d.default.PRELOADER_TIME);
    t.start();
    t = this.game.add.tween(this.playBtn);
    t.from({
      y: 520
    }, d.default.PRELOADER_TIME, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.backBtn);
    t.from({
      y: 520
    }, d.default.PRELOADER_TIME, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[0]);
    t.from({
      x: -70
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[1]);
    t.from({
      x: -70
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[2]);
    t.from({
      x: -70
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[3]);
    t.from({
      x: -70
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[4]);
    t.from({
      x: 870
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[5]);
    t.from({
      x: 870
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[6]);
    t.from({
      x: 870
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[7]);
    t.from({
      x: 870
    }, 300, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.textQuarter1);
    t.from({
      x: -70
    }, d.default.PRELOADER_TIME - 50, p.Easing.Back.Out, false, 50);
    t.start();
    t = this.game.add.tween(this.table[8]);
    t.from({
      x: -70
    }, 400, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[9]);
    t.from({
      x: -70
    }, 400, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.textQuarter2);
    t.from({
      x: 870
    }, d.default.PRELOADER_TIME - 50, p.Easing.Back.Out, false, 50);
    t.start();
    t = this.game.add.tween(this.table[10]);
    t.from({
      x: 870
    }, 400, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.table[11]);
    t.from({
      x: 870
    }, 400, p.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.textSemi1);
    t.from({
      x: -70
    }, d.default.PRELOADER_TIME - 100, p.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.table[12]);
    t.from({
      x: -70
    }, d.default.PRELOADER_TIME - 100, p.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.textSemi2);
    t.from({
      x: 870
    }, d.default.PRELOADER_TIME - 100, p.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.table[13]);
    t.from({
      x: 870
    }, d.default.PRELOADER_TIME - 100, p.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.textFinal);
    t.from({
      y: -70
    }, d.default.PRELOADER_TIME - 150, p.Easing.Back.Out, false, 150);
    t.start();
    t = this.game.add.tween(this.table[14]);
    t.from({
      y: -70
    }, d.default.PRELOADER_TIME - 100, p.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.text3rdPlace);
    t.from({
      y: 550
    }, d.default.PRELOADER_TIME - 50, p.Easing.Back.Out, false, 50);
    t.start();
    t = this.game.add.tween(this.table[15]);
    t.from({
      y: 550
    }, d.default.PRELOADER_TIME - 100, p.Easing.Back.Out, false, 100);
    t.start();
  };
  e.prototype.hide = function () {
    var t = this.game.add.tween(this.logo);
    t.to({
      alpha: 0.001
    }, d.default.PRELOADER_TIME);
    t.start();
    t = this.game.add.tween(this.logo);
    t.to({
      y: -60
    }, d.default.PRELOADER_TIME, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.playBtn);
    t.to({
      y: 520
    }, d.default.PRELOADER_TIME, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.backBtn);
    t.to({
      y: 520
    }, d.default.PRELOADER_TIME, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[0]);
    t.to({
      x: -70
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[1]);
    t.to({
      x: -70
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[2]);
    t.to({
      x: -70
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[3]);
    t.to({
      x: -70
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[4]);
    t.to({
      x: 870
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[5]);
    t.to({
      x: 870
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[6]);
    t.to({
      x: 870
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[7]);
    t.to({
      x: 870
    }, 300, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.textQuarter1);
    t.to({
      x: -70
    }, d.default.PRELOADER_TIME - 50, p.Easing.Linear.None, false, 50);
    t.start();
    t = this.game.add.tween(this.table[8]);
    t.to({
      x: -70
    }, d.default.PRELOADER_TIME, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[9]);
    t.to({
      x: -70
    }, d.default.PRELOADER_TIME, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.textQuarter2);
    t.to({
      x: 870
    }, d.default.PRELOADER_TIME - 50, p.Easing.Linear.None, false, 50);
    t.start();
    t = this.game.add.tween(this.table[10]);
    t.to({
      x: 870
    }, d.default.PRELOADER_TIME, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.table[11]);
    t.to({
      x: 870
    }, d.default.PRELOADER_TIME, p.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.textSemi1);
    t.to({
      x: -70
    }, d.default.PRELOADER_TIME - 100, p.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.table[12]);
    t.to({
      x: -70
    }, d.default.PRELOADER_TIME - 100, p.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.textSemi2);
    t.to({
      x: 870
    }, d.default.PRELOADER_TIME - 100, p.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.table[13]);
    t.to({
      x: 870
    }, d.default.PRELOADER_TIME - 100, p.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.textFinal);
    t.to({
      y: -70
    }, d.default.PRELOADER_TIME - 50, p.Easing.Linear.None, false, 50);
    t.start();
    t = this.game.add.tween(this.table[14]);
    t.to({
      y: -70
    }, d.default.PRELOADER_TIME - 100, p.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.text3rdPlace);
    t.to({
      y: 550
    }, d.default.PRELOADER_TIME - 150, p.Easing.Linear.None, false, 150);
    t.start();
    t = this.game.add.tween(this.table[15]);
    t.to({
      y: 550
    }, d.default.PRELOADER_TIME - 100, p.Easing.Linear.None, false, 100);
    t.start();
  };
  e.prototype.createButtons = function () {
    var t = this.game.cache.getJSON(a.JSONData.Players);
    var e;
    for (var i = 1; i < 17; i++) {
      var s = t["match" + i].x;
      var n = t["match" + i].y;
      var o = "";
      var r = {
        font: "12px Impact",
        fill: "#FFFFFF"
      };
      this.createButton(s, n);
      if (i === 9 || i === 11) {
        o = "QUARTERFINAL";
        if (i === 11) {
          s += -2;
        } else {
          s -= 5;
        }
      } else if (i === 13 || i === 14) {
        o = "SEMIFINAL";
        if (i === 13) {
          s += 22;
        } else {
          s -= 25;
        }
      } else if (i === 16) {
        o = "3rd PLACE MATCH";
      } else if (i === 15) {
        o = "FINAL";
        r = {
          font: "14px Impact",
          fill: "#FF9900"
        };
      }
      if (o !== "") {
        e = new h.default(this.game, o, r, null, null, a.Atlases.Interface);
        e.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
        e.setProp("#000000", 3, "#FFFFFF", 5);
        e.x = s;
        e.y = n - 58;
        this.backgroundBase2.addChild(e);
        switch (i) {
          case 9:
            this.textQuarter1 = e;
            break;
          case 11:
            this.textQuarter2 = e;
            break;
          case 13:
            this.textSemi1 = e;
            break;
          case 14:
            this.textSemi2 = e;
            break;
          case 15:
            this.textFinal = e;
            break;
          case 16:
            this.text3rdPlace = e;
        }
      }
    }
  };
  e.prototype.createButton = function (t, e) {
    var i = new c.MatchPanelResult();
    i.x = t;
    i.y = e;
    this.backgroundBase2.addChild(i);
    this.table.push(i);
  };
  e.prototype.setUp = function () {
    var t = u.Inventory.instance.tournament.state;
    if (t === 0) {
      this.fillStandings(8, 0);
    } else if (t === 1) {
      this.fillStandings(12, 8);
    } else if (t === 2) {
      this.fillStandings(14, 12);
    } else {
      this.fillStandings(16, 14);
    }
  };
  e.prototype.fillStandings = function (t, e) {
    var i = this.manager.tournament.rounds;
    var s = this.manager.tournament.results;
    var n = this.manager.tournament.team;
    var a = this.manager.tournament.teamRound + 1;
    for (var o = 0; o < this.table.length; o++) {
      var r = this.table[o];
      var h = o + 1;
      if (h <= t) {
        var l = i[h - 1][0];
        var c = i[h - 1][1];
        r.setEmblems(l, c);
        if (n === l || n === c) {
          r.setBG(2);
        }
        if (h === a) {
          r.setBG(3);
        }
        if (h <= e) {
          r.ccc.text = "" + s[h - 1][0];
          r.ccc2.text = "" + s[h - 1][1];
        }
      }
    }
  };
  e.prototype.onBack = function () {
    n.default.getInstance().play(a.Sounds.Click);
    new r.default(this.game, this, l.default.Name);
  };
  e.prototype.onPlay = function () {
    n.default.getInstance().play(a.Sounds.Click);
    new r.default(this.game, this, f.Gameplay.Name);
  };
  e.prototype.resize = function () {
    var e = 1;
    e = this.game.width / a.Constants.WIDTH;
    e = e > 1 ? 1 : e;
    e *= 1.33333;
    this.backgroundBase.scale.set(e);
    this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER);
    this.backgroundBaseMask.scale.set(e, e);
    this.backgroundBaseMask.x = this.backgroundBase.x;
    this.backgroundBaseMask.y = this.backgroundBase.y;
    t.prototype.resize.call(this);
  };
  e.prototype.shutdown = function () {
    this.backgroundBase2 = null;
    this.backgroundBaseMask = null;
    this.backBtn = null;
    this.playBtn = null;
    t.prototype.shutdown.call(this);
  };
  e.Name = "tournamentstate";
  return e;
}(Phaser.State);
exports.default = g;