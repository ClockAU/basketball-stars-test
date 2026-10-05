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
var o = require("./7.js");
var r = require("./17.js");
var h = require("./9.js");
var l = require("./2.js");
var c = require("./11.js");
var u = require("./8.js");
var d = require("./12.js");
var p = require("./26.js");
var f = require("./103.js");
var g = require("./16.js");
var m = require("./53.js");
var y = require("./104.js");
var v = require("./4.js");
var b = require("./0.js");
var _ = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i.player1 = null;
    i.player2 = null;
    i.armatureDisplay = null;
    i.armatureDisplay2 = null;
    i._armatureDisplay = null;
    i._armatureDisplay2 = null;
    i.manager = null;
    return i;
  }
  s(e, t);
  e.prototype.init = function () {
    this.game.world.removeAll();
    this.manager = l.Inventory.instance;
    dragonBones.PhaserFactory.init(this.game);
  };
  e.prototype.create = function () {
    t.prototype.create.call(this);
    var e = this.game.cache.getJSON(a.JSONData.DBPers);
    var i = this.game.cache.getJSON(a.JSONData.DBPers_Texture);
    var s = this.game.cache.getImage(a.Images.DBPers, true).base;
    dragonBones.PhaserFactory.factory.parseDragonBonesData(e);
    dragonBones.PhaserFactory.factory.parseTextureAtlasData(i, s);
    this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG());
    this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000");
    this.backgroundBase.addChild(this.backgroundBase2);
    this.backgroundBaseMask = this.game.add.graphics(0, 0);
    this.backgroundBaseMask.beginFill(65280, 0);
    this.backgroundBaseMask.drawRect(0, 0, 1398, 480);
    this.backgroundBaseMask.endFill();
    this.armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this.armatureDisplay.animation.play("idle", 0);
    this.armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this.armatureDisplay2.animation.play("idle", 0);
    this.logo = this.game.add.sprite(400, 100, a.Atlases.Interface, "bg0000");
    this.logo.anchor.set(0.5);
    this.logo.x = 400;
    this.backgroundBase2.addChild(this.logo);
    this.backBtn = new u.default(this.game, "RESTART", a.Constants.styleBackArrow, this.onBack, this, a.Atlases.Interface);
    this.backBtn.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.backBtn.setProp("#000000", 7, "#FFFFFF", 14);
    this.backBtn.x = 130;
    this.backBtn.y = 450;
    this.backgroundBase2.addChild(this.backBtn);
    var n;
    if (l.Inventory.instance.gameMode === 0) {
      n = this.manager.nextLeg();
    }
    this.setUp();
    if (l.Inventory.instance.gameMode === 3 || l.Inventory.instance.gameMode === 2) {
      this.nextState = d.Menu.Name;
    } else if (l.Inventory.instance.gameMode === 0) {
      if (n[0] === true) {
        this.nextState = n[1] === "Standings" ? d.TournamentState.Name : m.default.Name;
      } else {
        this.nextState = m.default.Name;
      }
    } else {
      this.nextState = p.default.Name;
    }
    this.musicBtn = new o.default(this.game, "", {}, this.toggleMusic, this, a.Atlases.Gameplay);
    this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.musicBtn.sScale = 42 / this.musicBtn.btn.width;
    this.musicBtn.x = 772;
    this.musicBtn.y = 25;
    this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000");
    this.backgroundBase2.addChild(this.musicBtn);
    this.updateSoundButtons();
    this.playBtn = new u.default(this.game, "NEXT", a.Constants.stylePlayGreen, this.onNextState, this, a.Atlases.Interface);
    this.playBtn.setFrames("arrow20000", "arrow20000", "arrow20000", "arrow20000");
    this.playBtn.btn.btn.x = 110;
    this.playBtn.x = 655;
    this.playBtn.y = 450;
    this.playBtn.setProp("#000000", 7, "#FFFFFF", 14);
    this.backgroundBase2.addChild(this.playBtn);
    this.resize();
    new r.default(this.game, this, this.show);
  };
  e.prototype.show = function () {
    var t = this.game.add.tween(this.scoreLabel);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.scoreText);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.scoreBestLabel);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.scoreBestText);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.playBtn);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.backBtn);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.from({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.panel.score);
    t.from({
      y: -220
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.panel.title ? this.game.add.tween(this.panel.title) : this.game.add.tween(this.panel.title_state);
    t.from({
      y: -220
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.panel.ccc);
    t.from({
      x: -600
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.panel.team1);
    t.from({
      x: -550
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.player1);
    t.from({
      x: -550
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.panel.ccc2);
    t.from({
      x: 600
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.panel.team2);
    t.from({
      x: 550
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.player2);
    t.from({
      x: 880
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
  };
  e.prototype.hide = function () {
    var t = this.game.add.tween(this.scoreLabel);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.scoreText);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.scoreBestLabel);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.scoreBestText);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.playBtn);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.backBtn);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.to({
      y: 520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.panel.score);
    t.to({
      y: -220
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.panel.title ? this.game.add.tween(this.panel.title) : this.game.add.tween(this.panel.title_state);
    t.to({
      y: -220
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.panel.ccc);
    t.to({
      x: -600
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.panel.team1);
    t.to({
      x: -550
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.player1);
    t.to({
      x: -550
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.panel.ccc2);
    t.to({
      x: 600
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.panel.team2);
    t.to({
      x: 550
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.player2);
    t.to({
      x: 880
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
  };
  e.prototype.render = function () {
    dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1);
    t.prototype.render.call(this);
  };
  e.prototype.setUp = function () {
    l.PlayersData.switchPlayer(this.armatureDisplay.armature, (l.Inventory.instance.matchData.teams[0] - 1) * 2 + l.Inventory.instance.matchData.players[0][0], l.Inventory.instance.matchData.teams[0] * 2 - 2);
    l.PlayersData.switchPlayer(this.armatureDisplay2.armature, (l.Inventory.instance.matchData.teams[1] - 1) * 2 + l.Inventory.instance.matchData.players[1][0], l.Inventory.instance.matchData.teams[1] * 2 - 2 + 1);
    var t = l.Inventory.instance.matchData.matchScore[0];
    var e = l.Inventory.instance.matchData.matchScore[1];
    this.panel = new f.PreMatchPanelResult(2);
    if (t > e) {
      this.armatureDisplay.armature.animation.play("happiness", -1);
      this.armatureDisplay2.armature.animation.play("sad", -1);
    } else {
      this.armatureDisplay.armature.animation.play("sad", -1);
      this.armatureDisplay2.armature.animation.play("happiness", -1);
    }
    this.player1 = this.game.add.group();
    this.player1.x = 216;
    this.player1.y = 388;
    this.player2 = this.game.add.group();
    this.player2.x = 584;
    this.player2.y = 388;
    var i = this.game.add.sprite(0, 0, a.Atlases.Gameplay, "ShadowMC0002");
    i.scale.set(2.5);
    i.anchor.set(0.5);
    this.player1.addChild(i);
    i = this.game.add.sprite(0, 0, a.Atlases.Gameplay, "ShadowMC0002");
    i.scale.set(2.5);
    i.anchor.set(0.5);
    this.player2.addChild(i);
    this.player1.addChild(this.armatureDisplay.armature.display);
    this.player2.addChild(this.armatureDisplay2.armature.display);
    this.player1.scale.set(0.9);
    this.player2.scale.set(-0.9, 0.9);
    this.backgroundBase2.addChild(this.player1);
    this.backgroundBase2.addChild(this.player2);
    this.logo.addChild(this.panel);
    this.branding2 = new o.default(this.game, "", null, this.onMoreGames, this, a.Atlases.Preloader);
    this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000");
    this.branding2.y = 200;
    this.branding2.sScale = 1.2;
    if (g.default.getInstance().checkDomain(document.URL.split("//")[1].split("/")[0])) {
      this.branding2.inputEnableChildren = false;
    }
    this.panel.addChild(this.branding2);
    var s = {
      font: " 20px Impact2",
      fill: "#FFFFFF"
    };
    this.leaderBoardBtn = new o.default(this.game, "LEADERBOARD", s, this.onScoreList, this, a.Atlases.Interface);
    this.leaderBoardBtn.setFrames("btnRect0000", "btnRect0000", "btnRect0000", "btnRect0000");
    this.leaderBoardBtn.sScale = 1;
    this.leaderBoardBtn.sLabelScale = 1;
    this.leaderBoardBtn.label.y = 5;
    this.leaderBoardBtn.x = this.branding2.x;
    this.leaderBoardBtn.y = this.branding2.y + 100;
    this.leaderBoardBtn.visible = false;
    this.panel.addChild(this.leaderBoardBtn);
    this.scoreLabel = new u.default(this.game, "SCORE:", a.Constants.styleIDnetScore, null, null, a.Atlases.Interface);
    this.scoreLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreLabel.setProp("#000000", 5, "#FFFFFF", 10);
    this.scoreLabel.x = 250;
    this.scoreLabel.y = 460;
    this.backgroundBase2.addChild(this.scoreLabel);
    this.scoreBestLabel = new u.default(this.game, "BEST SCORE:", a.Constants.styleIDnetBestScore, null, null, a.Atlases.Interface);
    this.scoreBestLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreBestLabel.setProp("#000000", 5, "#FFFFFF", 10);
    this.scoreBestLabel.x = 460;
    this.scoreBestLabel.y = 460;
    this.backgroundBase2.addChild(this.scoreBestLabel);
    this.scoreText = new u.default(this.game, "", a.Constants.styleIDnetScore2, null, null, a.Atlases.Interface);
    this.scoreText.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreText.x = 310;
    this.scoreText.y = 460;
    this.backgroundBase2.addChild(this.scoreText);
    this.scoreBestText = new u.default(this.game, "", a.Constants.styleIDnetBestScore2, null, null, a.Atlases.Interface);
    this.scoreBestText.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreBestText.x = 540;
    this.scoreBestText.y = 460;
    this.backgroundBase2.addChild(this.scoreBestText);
    if (l.Inventory.instance.gameMode === 3 || l.Inventory.instance.gameMode === 2) {
      this.scoreLabel.visible = false;
      this.scoreText.visible = false;
      this.scoreBestLabel.visible = false;
      this.scoreBestText.visible = false;
    } else {
      this.backBtn.visible = false;
      if (l.Inventory.instance.gameMode === 0) {
        this.scoreText.setText(l.Inventory.instance.getMatchScores() + "");
        this.scoreBestText.setText(l.Inventory.instance.getTournamentScores() + "");
        this.scoreBestText.setProp("#000000", 5, "#FFFFFF", 10);
        this.scoreText.setProp("#000000", 5, "#FFFFFF", 10);
      } else {
        this.scoreLabel.visible = false;
        this.scoreText.visible = false;
        this.scoreBestLabel.visible = false;
        this.scoreBestText.visible = false;
      }
    }
    var n = this.manager.showAdditionalGUI();
    if (n === 1) {
      this.popup = new y.PopupGUI(false);
      this.popup.signalOk.addOnce(this.onOk, this);
      this.world.addChild(this.popup);
    } else if (n === 2) {
      this.popup = new y.PopupGUI(true);
      this.world.addChild(this.popup);
      var r = this.game.add.group(this.popup.popup);
      var h = undefined;
      h = this.game.add.image(-55, 30, a.Atlases.Interface, "loginSelect0000");
      h.anchor.set(0.5);
      r.addChild(h);
      h = this.game.add.image(45, 30, a.Atlases.Interface, "loginSelect0000");
      h.anchor.set(0.5);
      r.addChild(h);
      h = this.game.add.image(-53, 122, a.Atlases.Gameplay, "btn_bg0000");
      h.anchor.set(0.5);
      h.scale.set(0.43);
      r.addChild(h);
      h = this.game.add.image(48, 122, a.Atlases.Gameplay, "btn_bg0000");
      h.anchor.set(0.5);
      h.scale.set(0.43);
      r.addChild(h);
      h = this.game.add.image(-53, 122, a.Atlases.Gameplay, "icon_ball0002");
      h.anchor.set(0.5);
      h.scale.set(0.5);
      r.addChild(h);
      h = this.game.add.image(48, 122, a.Atlases.Gameplay, "icon_ball0003");
      h.anchor.set(0.5);
      h.scale.set(0.5);
      r.addChild(h);
      this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
      this._armatureDisplay.x = -50;
      this._armatureDisplay.y = 90;
      this._armatureDisplay.animation.play("idle", 0);
      r.addChild(this._armatureDisplay);
      l.PlayersData.switchPlayer(this._armatureDisplay.armature, 32, 32);
      this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
      this._armatureDisplay2.x = 50;
      this._armatureDisplay2.y = 90;
      this._armatureDisplay2.animation.play("idle", 0);
      r.addChild(this._armatureDisplay2);
      l.PlayersData.switchPlayer(this._armatureDisplay2.armature, 33, 32);
      this._armatureDisplay.scale.set(0.65);
      this._armatureDisplay2.scale.set(0.65);
      r.scale.set(0.8);
    }
  };
  e.prototype.onOk = function () {
    l.Inventory.instance.checkForumAchievement();
    window.open("https://forum.y8.com/t/basketball-legends/1741", "_blank");
  };
  e.prototype.onMoreGames = function () {
    window.open(g.default.getInstance().getUrl(g.default.Current), "_blank");
  };
  e.prototype.onScoreList = function () {
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.toggleMusic = function () {
    if (c.default.getInstance().music) {
      n.default.getInstance().toggleMusic();
    } else if (c.default.getInstance().sfx) {
      n.default.getInstance().toggleSfx();
    } else {
      n.default.getInstance().toggleSfx();
      n.default.getInstance().toggleMusic();
    }
    this.updateSoundButtons();
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.updateSoundButtons = function () {
    var t = c.default.getInstance().music ? 0 : 1;
    t += c.default.getInstance().sfx ? 0 : 1;
    this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t);
  };
  e.prototype.onBack = function () {
    n.default.getInstance().play(a.Sounds.Click);
    l.Inventory.instance.matchData.resetScore();
    new h.default(this.game, this, d.Gameplay.Name);
  };
  e.prototype.onNextState = function () {
    n.default.getInstance().play(a.Sounds.Click);
    this.showBanner();
    new h.default(this.game, this, this.nextState);
  };
  e.prototype.showBanner = function () {
    if (typeof gdsdk != "undefined" && gdsdk.showBanner !== "undefined") {
      var t = gdsdk.showBanner();
    }
  };
  e.prototype.resize = function () {
    t.prototype.resize.call(this);
    var e = 1;
    e = this.game.width / a.Constants.WIDTH;
    e = e > 1 ? 1 : e;
    e *= 1.33333;
    this.backgroundBase.scale.set(e);
    this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER);
    this.backgroundBaseMask.scale.set(e, e);
    this.backgroundBaseMask.x = this.backgroundBase.x;
    this.backgroundBaseMask.y = this.backgroundBase.y;
    if (this.popup) {
      this.popup.resize(e);
    }
  };
  e.prototype.shutdown = function () {
    this.backgroundBase2 = null;
    this.backgroundBaseMask = null;
    this.backBtn = null;
    this.playBtn = null;
    this.musicBtn = null;
    this.armatureDisplay = null;
    this.armatureDisplay2 = null;
    t.prototype.shutdown.call(this);
  };
  e.Name = "postmatchstate";
  return e;
}(Phaser.State);
exports.default = _;