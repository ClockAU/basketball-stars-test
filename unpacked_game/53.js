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
var d = require("./18.js");
var p = require("./16.js");
var f = require("./0.js");
var g = require("./4.js");
var m = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i._armatureDisplay = null;
    i._armatureDisplay2 = null;
    i._armatureDisplay3 = null;
    i._armatureDisplay4 = null;
    i.thePlayer = null;
    i.player1 = null;
    i.player2 = null;
    i.player3 = null;
    i.player4 = null;
    i.tribune = null;
    i.tribune4 = null;
    i.place1 = null;
    i.place2 = null;
    i.place3 = null;
    i.place4 = null;
    i.manager = null;
    i.frame = "";
    i.texts = ["1st place!!!", "2nd place!!!", "3rd place!!!", "4th place", "You lost"];
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
    this.background = this.game.add.sprite(0, 0, a.Atlases.Interface, "bg0000");
    this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG());
    this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000");
    this.backgroundBase.addChild(this.backgroundBase2);
    this.backgroundBaseMask = this.game.add.graphics(0, 0);
    this.backgroundBaseMask.beginFill(65280, 0);
    this.backgroundBaseMask.drawRect(0, 0, 1398, 480);
    this.backgroundBaseMask.endFill();
    this.background4 = this.game.add.sprite(200, 240, a.Atlases.Interface, "bg0000");
    this.background4.anchor.set(0.5);
    this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay.x = -50;
    this._armatureDisplay.y = 60;
    this._armatureDisplay.animation.play("idle", 0);
    this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay2.x = 50;
    this._armatureDisplay2.y = 60;
    this._armatureDisplay2.animation.play("idle", 0);
    this._armatureDisplay3 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay3.x = -50;
    this._armatureDisplay3.y = 60;
    this._armatureDisplay3.animation.play("idle", 0);
    this._armatureDisplay4 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay4.x = 50;
    this._armatureDisplay4.y = 60;
    this._armatureDisplay4.animation.play("idle", 0);
    this._armatureDisplay4.visible = false;
    this.world.addChild(this._armatureDisplay);
    this.world.addChild(this._armatureDisplay2);
    this.world.addChild(this._armatureDisplay3);
    this.world.addChild(this._armatureDisplay4);
    this.musicBtn = new o.default(this.game, "", {}, this.toggleMusic, this, a.Atlases.Gameplay);
    this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.musicBtn.sScale = 42 / this.musicBtn.btn.width;
    this.musicBtn.x = 772;
    this.musicBtn.y = 25;
    this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000");
    this.backgroundBase2.addChild(this.musicBtn);
    this.backgroundBase2.addChild(this.background4);
    this.updateSoundButtons();
    this.logo = this.game.add.sprite(400, 35, a.Atlases.Interface, "bg0000");
    this.logo.anchor.set(0.5);
    this.backgroundBase2.addChild(this.logo);
    this.playBtn = new u.default(this.game, "MENU", a.Constants.stylePlayGreen, this.onPlay, this, a.Atlases.Interface);
    this.playBtn.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.playBtn.x = 720;
    this.playBtn.y = 447;
    this.background4.addChild(this.playBtn);
    this.playBtn.setProp("#000000", 7, "#FFFFFF", 14);
    this.backgroundBase2.addChild(this.playBtn);
    this.branding2 = new o.default(this.game, "", null, this.onMoreGames, this, a.Atlases.Preloader);
    this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000");
    this.branding2.position.set(70, 420);
    this.backgroundBase2.addChild(this.branding2);
    this.leaderBoardBtn = new o.default(this.game, "", null, this.onScoreList, this, a.Atlases.Gameplay);
    this.leaderBoardBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.leaderBoardBtn.sScale = 1;
    this.leaderBoardBtn.sLabelScale = 1;
    var e = this.game.add.image(0, 0, a.Atlases.Interface, "lead_icon0000");
    e.anchor.set(0.5);
    this.leaderBoardBtn.label.parent.addChild(e);
    this.leaderBoardBtn.x = this.branding2.x;
    this.leaderBoardBtn.y = this.branding2.y - 130;
    this.leaderBoardBtn.visible = false;
    this.backgroundBase2.addChild(this.leaderBoardBtn);
    this.setUp();
    this.manager.breakTournament();
    this.resize();
    new r.default(this.game, this, this.show);
  };
  e.prototype.show = function () {
    var t = this.game.add.tween(this.place1);
    t.from({
      y: -60
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out, false, 50);
    t.start();
    t = this.game.add.tween(this.place2);
    t.from({
      y: -60
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out, false, 50);
    t.start();
    t = this.game.add.tween(this.place3);
    t.from({
      y: -60
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out, false, 50);
    t.start();
    t = this.game.add.tween(this.logo);
    t.from({
      y: -100
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out, false, 100);
    t.start();
    t = this.game.add.tween(this.tribune);
    t.from({
      y: 800
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.from({
      x: -110
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.from({
      x: -110
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.from({
      y: 600
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.from({
      y: 600
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.scoreLabel);
    t.from({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.scoreText);
    t.from({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.scoreBestLabel);
    t.from({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.scoreTotalText);
    t.from({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.playBtn);
    t.from({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
    t.start();
    if (this.player4) {
      t = this.game.add.tween(this.place4);
      t.from({
        x: 900
      }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
      t.start();
      t = this.game.add.tween(this.tribune4);
      t.from({
        x: 900
      }, g.default.PRELOADER_TIME, f.Easing.Back.Out);
      t.start();
    }
  };
  e.prototype.hide = function () {
    var t = this.game.add.tween(this.place1);
    t.to({
      y: -60
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None, false, 50);
    t.start();
    t = this.game.add.tween(this.place2);
    t.to({
      y: -60
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None, false, 50);
    t.start();
    t = this.game.add.tween(this.place3);
    t.to({
      y: -60
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None, false, 50);
    t.start();
    t = this.game.add.tween(this.logo);
    t.to({
      y: -100
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None, false, 100);
    t.start();
    t = this.game.add.tween(this.tribune);
    t.to({
      y: 800
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.to({
      x: -110
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.to({
      x: -110
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.to({
      y: 600
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.to({
      y: 600
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.scoreLabel);
    t.to({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.scoreText);
    t.to({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.scoreBestLabel);
    t.to({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.scoreTotalText);
    t.to({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.playBtn);
    t.to({
      y: 520
    }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    if (this.player4) {
      t = this.game.add.tween(this.place4);
      t.to({
        x: 900
      }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
      t.start();
      t = this.game.add.tween(this.tribune4);
      t.to({
        x: 900
      }, g.default.PRELOADER_TIME, f.Easing.Linear.None);
      t.start();
    }
  };
  e.prototype.onScoreList = function () {
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.setUp = function () {
    this.tribune = new Phaser.Sprite(this.game, 400, 448, a.Atlases.Interface, "TribuneFinal0000");
    this.tribune.anchor.set(0.58, 1.2);
    this.tribune4 = new Phaser.Sprite(this.game, 716, 380, a.Atlases.Interface, "bg0000");
    this.tribune4.anchor.set(0.5);
    this.player1 = new Phaser.Group(this.game);
    this.player1.x = 40;
    this.player1.y = -168;
    this.player2 = new Phaser.Group(this.game);
    this.player2.x = -147;
    this.player2.y = -155;
    this.player3 = new Phaser.Group(this.game);
    this.player3.x = 147;
    this.player3.y = -146;
    this.player1.scale.set(0.8);
    this.player2.scale.set(0.8);
    this.player3.scale.set(0.8);
    this.backgroundBase2.addChild(this.tribune);
    this.backgroundBase2.addChild(this.tribune4);
    this.tribune.addChild(this.player3);
    this.tribune.addChild(this.player1);
    this.tribune.addChild(this.player2);
    var t = this.manager.rounds;
    var e = this.manager.tournament.getFinalistsArray();
    var i = l.Inventory.instance.matchData.teams[0];
    var s = l.Inventory.instance.matchData.players[0][0] + 1;
    var n = "";
    var o = e.pop();
    if (o === 1) {
      l.PlayersData.switchPlayer(this._armatureDisplay.armature, (i - 1) * 2 + (s - 1), i * 2 - 2);
      this._armatureDisplay.armature.animation.play("happiness");
      this.thePlayer = this._armatureDisplay.armature;
      this.frame = "cup1";
      n = "1st PLACE!!!";
    } else {
      l.PlayersData.switchPlayer(this._armatureDisplay.armature, (e[0] - 1) * 2, e[0] * 2 - 2);
      this._armatureDisplay.armature.animation.gotoAndPlay("idle");
    }
    if (o === 2) {
      l.PlayersData.switchPlayer(this._armatureDisplay2.armature, (i - 1) * 2 + (s - 1), i * 2 - 2);
      this._armatureDisplay2.armature.animation.gotoAndPlay("happiness");
      this.thePlayer = this._armatureDisplay2.armature;
      this.frame = "cup2";
      n = "2nd PLACE!!!";
    } else {
      l.PlayersData.switchPlayer(this._armatureDisplay2.armature, (e[1] - 1) * 2, e[1] * 2 - 2);
      this._armatureDisplay2.armature.animation.gotoAndPlay("idle");
    }
    if (o === 3) {
      l.PlayersData.switchPlayer(this._armatureDisplay3.armature, (i - 1) * 2 + (s - 1), i * 2 - 2);
      this._armatureDisplay3.armature.animation.gotoAndPlay("happiness");
      this.thePlayer = this._armatureDisplay3.armature;
      this.frame = "cup3";
      n = "3d PLACE!!!";
    } else {
      l.PlayersData.switchPlayer(this._armatureDisplay3.armature, (e[2] - 1) * 2, e[2] * 2 - 2);
      this._armatureDisplay3.armature.animation.gotoAndPlay("idle");
    }
    if (o >= 4) {
      n = o === 4 ? "4th PLACE" : "YOU LOST";
    }
    var r = new u.default(this.game, n, a.Constants.styleTitleFinalTournamet, null, null, a.Atlases.Interface);
    r.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    r.setProp("#000000", 7, "#FFFFFF", 15);
    this.logo.addChild(r);
    this.player1.addChild(this._armatureDisplay.armature.display);
    this.player2.addChild(this._armatureDisplay2.armature.display);
    this.player3.addChild(this._armatureDisplay3.armature.display);
    this.place1 = this.game.add.sprite(400, 110, a.Atlases.Gameplay, "btn_bg20000");
    this.place2 = this.game.add.sprite(294, 110, a.Atlases.Gameplay, "btn_bg20000");
    this.place3 = this.game.add.sprite(506, 110, a.Atlases.Gameplay, "btn_bg20000");
    this.place1.anchor.set(0.5);
    this.place2.anchor.set(0.5);
    this.place3.anchor.set(0.5);
    this.backgroundBase2.addChild(this.place1);
    this.backgroundBase2.addChild(this.place2);
    this.backgroundBase2.addChild(this.place3);
    var h = this.game.add.image(0, 0);
    var c = this.game.add.image(0, 0);
    var d = this.game.add.image(0, 0);
    this.place1.addChild(h);
    this.place2.addChild(c);
    this.place3.addChild(d);
    h.loadTexture(a.Atlases.Interface, "Emblems00" + (e[0] - 1 < 10 ? "0" : "") + (e[0] - 1));
    c.loadTexture(a.Atlases.Interface, "Emblems00" + (e[1] - 1 < 10 ? "0" : "") + (e[1] - 1));
    d.loadTexture(a.Atlases.Interface, "Emblems00" + (e[2] - 1 < 10 ? "0" : "") + (e[2] - 1));
    h.anchor.set(0.5);
    h.scale.set(0.25);
    c.anchor.set(0.5);
    c.scale.set(0.25);
    d.anchor.set(0.5);
    d.scale.set(0.25);
    if (o <= 3) {
      this.tribune4.visible = false;
      this.thePlayer.getBone("effects stun").slot.childArmature.animation.gotoAndStop(this.frame, 0.1);
    } else {
      this.place4 = this.game.add.sprite(716, 160, a.Atlases.Gameplay, "btn_bg20000");
      this.place4.anchor.set(0.5);
      this.backgroundBase2.addChild(this.place4);
      var p = this.game.add.image(0, 0, a.Atlases.Interface, "Emblems00" + (i - 1 < 10 ? "0" : "") + (i - 1));
      p.anchor.set(0.5);
      p.scale.set(0.25);
      this.place4.addChild(p);
      this.player4 = new Phaser.Group(this.game);
      this.player4.x = 40;
      this.player4.y = -72;
      this.player4.scale.set(-0.8, 0.8);
      var f = new Phaser.Image(this.game, 0, -23, a.Atlases.Gameplay, "ShadowMC0002");
      f.anchor.set(0.5);
      f.scale.set(1.8);
      this.tribune4.addChild(f);
      this.tribune4.addChild(this.player4);
      this._armatureDisplay4.visible = true;
      l.PlayersData.switchPlayer(this._armatureDisplay4.armature, (i - 1) * 2 + (s - 1), i * 2 - 2);
      this._armatureDisplay4.armature.animation.play("sad", -1);
      this.player4.addChild(this._armatureDisplay4.armature.display);
    }
    this.scoreLabel = new u.default(this.game, "SCORE:", a.Constants.styleIDnetScore, null, null, a.Atlases.Interface);
    this.scoreLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreLabel.setProp("#000000", 5, "#FFFFFF", 10);
    this.scoreLabel.x = 250;
    this.scoreLabel.y = 460;
    this.backgroundBase2.addChild(this.scoreLabel);
    this.scoreBestLabel = new u.default(this.game, "TOTAL SCORE:", a.Constants.styleIDnetBestScore, null, null, a.Atlases.Interface);
    this.scoreBestLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreBestLabel.setProp("#000000", 5, "#FFFFFF", 10);
    this.scoreBestLabel.x = 460;
    this.scoreBestLabel.y = 460;
    this.backgroundBase2.addChild(this.scoreBestLabel);
    this.scoreText = new u.default(this.game, "", a.Constants.styleIDnetScore2, null, null, a.Atlases.Interface);
    this.scoreText.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreText.x = 330;
    this.scoreText.y = 460;
    this.backgroundBase2.addChild(this.scoreText);
    this.scoreTotalText = new u.default(this.game, "", a.Constants.styleIDnetBestScore2, null, null, a.Atlases.Interface);
    this.scoreTotalText.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.scoreTotalText.x = 570;
    this.scoreTotalText.y = 460;
    this.backgroundBase2.addChild(this.scoreTotalText);
    this.scoreText.setText(this.manager.getTournamentScores().toString());
    this.scoreTotalText.setText(this.manager.getTotalScores().toString());
    this.scoreText.setProp("#000000", 5, "#FFFFFF", 10);
    this.scoreTotalText.setProp("#000000", 5, "#FFFFFF", 10);
  };
  e.prototype.onMoreGames = function () {
    window.open(p.default.getInstance().getUrl(p.default.Current), "_blank");
  };
  e.prototype.render = function () {
    dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1);
    t.prototype.render.call(this);
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
  e.prototype.onPlay = function () {
    n.default.getInstance().play(a.Sounds.Click);
    l.Inventory.instance.clearTournamentData();
    new h.default(this.game, this, d.default.Name);
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
    this.playBtn = null;
    this.musicBtn = null;
    this._armatureDisplay = null;
    this._armatureDisplay2 = null;
    t.prototype.shutdown.call(this);
  };
  e.Name = "finaltournamentstate";
  return e;
}(Phaser.State);
exports.default = m;