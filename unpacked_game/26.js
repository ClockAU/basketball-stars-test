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
var c = require("./10.js");
var u = require("./11.js");
var d = require("./8.js");
var p = require("./31.js");
var f = require("./18.js");
var g = require("./102.js");
var m = require("./51.js");
var y = require("./12.js");
var v = require("./4.js");
var b = require("./0.js");
var _ = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i._armatureDisplay = null;
    i._armatureDisplay2 = null;
    i._armatureDisplay3 = null;
    i._armatureDisplay4 = null;
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
    this.background5 = this.game.add.sprite(600, 240, a.Atlases.Interface, "bg0000");
    this.background4 = this.game.add.sprite(200, 240, a.Atlases.Interface, "bg0000");
    this.background5.anchor.set(0.5);
    this.background4.anchor.set(0.5);
    this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay.x = -50;
    this._armatureDisplay.y = 90;
    this._armatureDisplay.animation.play("idle", 0);
    this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay2.x = 50;
    this._armatureDisplay2.y = 90;
    this._armatureDisplay2.animation.play("idle", 0);
    this._armatureDisplay3 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay3.x = -50;
    this._armatureDisplay3.y = 90;
    this._armatureDisplay3.animation.play("idle", 0);
    this._armatureDisplay4 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player");
    this._armatureDisplay4.x = 50;
    this._armatureDisplay4.y = 90;
    this._armatureDisplay4.animation.play("idle", 0);
    this.selectPlayer = new g.SelectPlayer(0, this._armatureDisplay.armature, this._armatureDisplay2.armature);
    this.selectPlayer.x = 162;
    this.selectPlayer.y = 131;
    this.backgroundBase2.addChild(this.selectPlayer);
    this.musicBtn = new o.default(this.game, "", {}, this.toggleMusic, this, a.Atlases.Gameplay);
    this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.musicBtn.sScale = 42 / this.musicBtn.btn.width;
    this.musicBtn.x = 772;
    this.musicBtn.y = 25;
    this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000");
    this.backgroundBase2.addChild(this.musicBtn);
    this.backgroundBase2.addChild(this.background4);
    this.updateSoundButtons();
    this.manager.matchData.matchMode = 0;
    if (this.manager.gameMode === 0) {
      if (this.manager.matchData.matchMode === 0) {
        this.createPanel();
        this.createDifficultySelect();
      }
      this.selectPlayer.setUp(0);
    } else {
      this.createP2Select();
      this.createPanel();
      if (this.manager.matchData.matchMode === 0 && l.Inventory.instance.gameMode !== 4) {
        this.selectPlayer.setUp();
        this.selectPlayer2.setUp(2);
      } else if (this.manager.matchData.matchMode === 1) {
        this.selectPlayer.setUp(1);
        this.selectPlayer2.setUp(2);
      } else {
        this.selectPlayer.setUp();
        this.selectPlayer2.setUp();
      }
    }
    this.logo = this.game.add.sprite(400, 35, a.Atlases.Interface, "bg0000");
    this.logo.anchor.set(0.5);
    var n = "RANDOM MATCH";
    if (l.Inventory.instance.gameMode === 4) {
      n = "2 PLAYERS MATCH";
    } else if (l.Inventory.instance.gameMode === 0) {
      n = "TOURNAMENT";
      l.Inventory.instance.tournament.state = 0;
    }
    var c = new d.default(this.game, n, a.Constants.styleTitle2, null, null, a.Atlases.Interface);
    c.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    c.setProp("#330099", 7, "#FF99FF", 15);
    this.logo.addChild(c);
    this.logo.x = 400;
    this.backgroundBase2.addChild(this.logo);
    if (l.Inventory.instance.gameMode === 0) {
      this.playBtn = new d.default(this.game, "NEXT", a.Constants.stylePlayGreen, this.onTournament, this, a.Atlases.Interface);
      this.playBtn.setFrames("arrow20000", "arrow20000", "arrow20000", "arrow20000");
      this.playBtn.btn.btn.x = 110;
      this.playBtn.x = 646;
      this.playBtn.y = 450;
      this.background4.addChild(this.playBtn);
    } else {
      this.playBtn = new d.default(this.game, "PLAY", a.Constants.stylePlayGreen, this.onPlay, this, a.Atlases.Interface);
      this.playBtn.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      this.playBtn.x = 716;
      this.playBtn.y = 450;
      this.background4.addChild(this.playBtn);
    }
    this.playBtn.setProp("#000000", 7, "#FFFFFF", 15);
    this.backBtn = new d.default(this.game, "BACK", a.Constants.styleBackArrow, this.onBack, this, a.Atlases.Interface);
    this.backBtn.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000");
    this.backBtn.btn.btn.x = -110;
    this.backBtn.setProp("#330099", 7, "#FF99FF", 15);
    this.backBtn.x = 150;
    this.backBtn.y = 450;
    this.backgroundBase2.addChild(this.backBtn);
    this.backgroundBase2.addChild(this.playBtn);
    this.resize();
    new r.default(this.game, this, this.show);
  };
  e.prototype.show = function () {
    var t = this.game.add.tween(this.logo);
    t.from({
      y: -60
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.selectPlayer);
    t.from({
      x: -520
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    if (this.selectPlayer2) {
      t = this.game.add.tween(this.selectPlayer2);
      t.from({
        x: 1140
      }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
      t.start();
    }
    if (this.plateDifficulty) {
      t = this.game.add.tween(this.plateDifficulty);
      t.from({
        y: 720
      }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
      t.start();
    }
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
    if (this.matchModePanel) {
      t = this.game.add.tween(this.matchModePanel);
      t.from({
        y: 720
      }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
      t.start();
    }
  };
  e.prototype.hide = function () {
    var t = this.game.add.tween(this.logo);
    t.to({
      y: -60
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.selectPlayer);
    t.to({
      x: -520
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    if (this.selectPlayer2) {
      t = this.game.add.tween(this.selectPlayer2);
      t.to({
        x: 1140
      }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
      t.start();
    }
    if (this.plateDifficulty) {
      t = this.game.add.tween(this.plateDifficulty);
      t.to({
        y: 720
      }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
      t.start();
    }
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
    if (this.matchModePanel) {
      t = this.game.add.tween(this.matchModePanel);
      t.to({
        y: 720
      }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
      t.start();
    }
  };
  e.prototype.render = function () {
    dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1);
    t.prototype.render.call(this);
  };
  e.prototype.createPanel = function () {
    this.matchModePanel = new m.MatchModePanel(this);
    this.matchModePanel.x = 400;
    this.matchModePanel.y = 207;
    this.backgroundBase2.addChild(this.matchModePanel);
    this.processMatchMode();
  };
  e.prototype.createDifficultySelect = function () {
    this.plateDifficulty = this.game.add.sprite(400, 370, a.Atlases.Interface, "bg0000");
    this.plateDifficulty.anchor.set(0.5);
    var t = this.game.make.image(0, 0, a.Atlases.Interface, "0bg130000");
    t.anchor.set(0.5);
    t.scale.set(1, 0.42);
    this.plateDifficulty.addChild(t);
    t = this.game.make.image(0, 0, a.Atlases.Interface, "line0000");
    t.anchor.set(0.5);
    t.scale.set(1);
    this.plateDifficulty.addChild(t);
    var e = new c.default(this.game, 0, -26, "NORMAL", a.Constants.styleDIfficulltyBg);
    e.anchor.set(0.5);
    this.plateDifficulty.addChild(e);
    var i = new c.default(this.game, 0, 26, "HARD", a.Constants.styleDIfficulltyBg2);
    i.anchor.set(0.5);
    this.plateDifficulty.addChild(i);
    e.inputEnabled = true;
    i.inputEnabled = true;
    e.input.useHandCursor = true;
    i.input.useHandCursor = true;
    var s = new d.default(this.game, "NORMAL", a.Constants.styleNormalGreen, null, null, a.Atlases.Interface);
    s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    s.setProp("#000000", 3, "#FFFFFF", 5);
    var n = new d.default(this.game, "HARD", a.Constants.styleHardGreen, null, null, a.Atlases.Interface);
    n.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    n.setProp("#000000", 3, "#FFFFFF", 5);
    this.backgroundBase2.addChild(this.plateDifficulty);
    this.plateDifficulty.addChild(s);
    this.plateDifficulty.addChild(n);
    s.y = -26;
    n.y = 26;
    n.visible = false;
    l.Inventory.instance.tournament.difficulty = 0;
    i.events.onInputDown.add(function () {
      n.visible = true;
      s.visible = false;
      l.Inventory.instance.tournament.difficulty = 1;
    });
    e.events.onInputDown.add(function () {
      s.visible = true;
      n.visible = false;
      l.Inventory.instance.tournament.difficulty = 0;
    });
  };
  e.prototype.createP2Select = function () {
    this.selectPlayer2 = new g.SelectPlayer(1, this._armatureDisplay3.armature, this._armatureDisplay4.armature);
    this.selectPlayer2.x = 638;
    this.selectPlayer2.y = 131;
    this.backgroundBase2.addChild(this.selectPlayer2);
  };
  e.prototype.processMatchMode = function () {
    if (this.manager.matchData.matchMode === 0) {
      var t = this.manager.matchData.players[0][0] === 0 ? 0 : 1;
      var e = this.manager.matchData.players[1][0] === 0 ? 0 : 1;
      this.manager.matchData.players = [[t], [e]];
    }
    if (this.manager.gameMode !== 0) {
      if (this.manager.matchData.matchMode === 2) {
        this.selectPlayer.setUp(1);
        this.selectPlayer2.setUp(2);
      } else {
        this.selectPlayer.setUp();
        this.selectPlayer2.setUp(this.manager.gameMode === 4 ? 0 : 2);
      }
    } else {
      this.selectPlayer.setUp(0);
    }
  };
  e.prototype.toggleMusic = function () {
    if (u.default.getInstance().music) {
      n.default.getInstance().toggleMusic();
    } else if (u.default.getInstance().sfx) {
      n.default.getInstance().toggleSfx();
    } else {
      n.default.getInstance().toggleSfx();
      n.default.getInstance().toggleMusic();
    }
    this.updateSoundButtons();
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.updateSoundButtons = function () {
    var t = u.default.getInstance().music ? 0 : 1;
    t += u.default.getInstance().sfx ? 0 : 1;
    this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t);
  };
  e.prototype.onBack = function () {
    n.default.getInstance().play(a.Sounds.Click);
    if (l.Inventory.instance.gameMode === 0) {
      new h.default(this.game, this, f.default.Name);
    } else {
      new h.default(this.game, this, y.Menu.Name);
    }
  };
  e.prototype.onPlay = function () {
    n.default.getInstance().play(a.Sounds.Click);
    new h.default(this.game, this, p.default.Name);
  };
  e.prototype.onTournament = function () {
    n.default.getInstance().play(a.Sounds.Click);
    this.manager.createNewTournament();
    new h.default(this.game, this, y.TournamentState.Name);
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
    this.background5.scale.set(e * 0.65);
    this.background5.alignIn(this.backgroundBase2, Phaser.RIGHT_CENTER, -20, 0);
    t.prototype.resize.call(this);
  };
  e.prototype.shutdown = function () {
    this.backBtn = null;
    this.playBtn = null;
    this.musicBtn = null;
    this._armatureDisplay = null;
    this._armatureDisplay2 = null;
    this._armatureDisplay3 = null;
    this._armatureDisplay4 = null;
    t.prototype.shutdown.call(this);
  };
  e.Name = "randomstate";
  return e;
}(Phaser.State);
exports.default = _;