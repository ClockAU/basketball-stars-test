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
var u = require("./16.js");
var d = require("./11.js");
var p = require("./8.js");
var f = require("./32.js");
var g = require("./26.js");
var m = require("./12.js");
var y = require("./33.js");
var v = require("./4.js");
var b = require("./0.js");
var _ = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i.popup = null;
    i.popup_btn = null;
    return i;
  }
  s(e, t);
  e.prototype.init = function () {
    this.game.world.removeAll();
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
    this.background4 = this.game.add.sprite(400, 290, a.Atlases.Interface, "bg0000");
    var e = null;
    e = this.game.add.sprite(-185, 66, a.Atlases.Interface, "body00000");
    e.anchor.set(0.5);
    this.background4.addChild(e);
    e = this.game.add.sprite(230, 55, a.Atlases.Interface, "body10000");
    e.anchor.set(0.5);
    this.background4.addChild(e);
    e = this.game.add.sprite(0, 15, a.Atlases.Interface, "0bg100000");
    e.anchor.set(0.5);
    e.scale.set(1.1, 0.9);
    this.background4.addChild(e);
    e = this.game.add.sprite(-213, -50, a.Atlases.Interface, "head00000");
    e.anchor.set(0.5);
    e.scale.set(0.95);
    this.background4.addChild(e);
    e = this.game.add.sprite(215, -55, a.Atlases.Interface, "head10000");
    e.anchor.set(0.5);
    e.scale.set(0.95);
    this.background4.addChild(e);
    this.background4.anchor.set(0.5);
    this.playBtn1 = new p.default(this.game, "TOURNAMENT", a.Constants.stylePlay3, this.startTournament, this, a.Atlases.Interface);
    this.playBtn1.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.playBtn1.y = -110;
    this.playBtn1.setProp("#330099", 5, "#FF99FF", 10);
    this.background4.addChild(this.playBtn1);
    this.playBtn1.scale.set(0.75, 1);
    this.playBtn2 = new p.default(this.game, "RANDOM", a.Constants.stylePlay3, this.startRandom, this, a.Atlases.Interface);
    this.playBtn2.y = 0;
    this.playBtn2.label.parent.y = -50;
    this.playBtn2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.playBtn2.setProp("#330099", 5, "#FF99FF", 10);
    this.background4.addChild(this.playBtn2);
    var i = new p.default(this.game, "MATCH", a.Constants.stylePlay3, null, null, a.Atlases.Interface);
    i.label.parent.y = 50;
    i.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.setProp("#330099", 5, "#FF99FF", 10);
    i.inputEnableChildren = true;
    this.playBtn2.label.addChild(i);
    var s = new p.default(this.game, "TRAINING", a.Constants.stylePlay2, this.startTraining, this, a.Atlases.Interface);
    s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    s.y = 70;
    s.setProp("#330099", 5, "#FF99FF", 10);
    this.background4.addChild(s);
    this.playBtn3 = new p.default(this.game, "BACK", a.Constants.stylePlay4, this.onBack, this, a.Atlases.Interface);
    this.playBtn3.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000");
    this.playBtn3.btn.btn.x = -110;
    this.playBtn3.setProp("#330099", 5, "#FF99FF", 10);
    this.playBtn3.x = 35;
    this.playBtn3.y = 130;
    this.background4.addChild(this.playBtn3);
    this.leaderBoardBtn = new o.default(this.game, "", null, this.onScoreList, this, a.Atlases.Interface);
    this.leaderBoardBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.leaderBoardBtn.sScale = 0.7;
    this.leaderBoardBtn.sLabelScale = 0.7;
    var n = this.game.add.image(0, 0, a.Atlases.Interface, "lead_icon0000");
    n.anchor.set(0.5);
    this.leaderBoardBtn.label.parent.addChild(n);
    this.achievmentBtn = new o.default(this.game, "", null, this.onAchievment, this, a.Atlases.Gameplay);
    this.achievmentBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    var l = this.game.add.image(0, 0, a.Atlases.Interface, "ach_icon0000");
    l.anchor.set(0.5);
    this.achievmentBtn.label.parent.addChild(l);
    this.achievmentBtn.x = 730;
    this.achievmentBtn.y = 25;
    this.logo = this.game.add.sprite(400, 65, a.Atlases.Preloader, "logo0000");
    this.logo.anchor.set(0.5);
    this.backgroundBase2.addChild(this.logo);
    this.musicBtn = new o.default(this.game, "", {}, this.toggleMusic, this, a.Atlases.Gameplay);
    this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.achievmentBtn.sScale = this.musicBtn.sScale = 42 / this.musicBtn.btn.width;
    this.musicBtn.x = 772;
    this.musicBtn.y = 25;
    this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000");
    this.backgroundBase2.addChild(this.musicBtn);
    this.branding2 = new o.default(this.game, "", null, this.onMoreGames, this, a.Atlases.Preloader);
    this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000");
    this.branding2.x = 698;
    this.branding2.y = 444;
    this.updateSoundButtons();
    this.backgroundBase2.addChild(this.achievmentBtn);
    this.backgroundBase2.addChild(this.leaderBoardBtn);
    this.leaderBoardBtn.x = 730;
    this.leaderBoardBtn.y = 150;
    this.backgroundBase2.addChild(this.background4);
    this.backgroundBase2.addChild(this.branding2);
    this.leaderBoardBtn.visible = false;
    this.resize();
    new r.default(this.game, this, this.show);
  };
  e.prototype.show = function () {
    var t = this.game.add.tween(this.background4);
    t.from({
      y: 800
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.logo);
    t.from({
      y: -145
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.from({
      x: 1600
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.from({
      x: 1600
    }, v.default.PRELOADER_TIME, b.Easing.Back.Out);
    t.start();
  };
  e.prototype.hide = function () {
    var t = this.game.add.tween(this.background4);
    t.to({
      y: 800
    }, v.default.PRELOADER_TIME);
    t.start();
    t = this.game.add.tween(this.logo);
    t.to({
      y: -145
    }, v.default.PRELOADER_TIME);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.to({
      x: 1600
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.to({
      x: 1600
    }, v.default.PRELOADER_TIME, b.Easing.Linear.None);
    t.start();
  };
  e.prototype.onMoreGames = function () {
    window.open(u.default.getInstance().getUrl(u.default.Current), "_blank");
  };
  e.prototype.startTournament = function () {
    n.default.getInstance().play(a.Sounds.Click);
    if (l.Inventory.instance.getTournament()) {
      this.createPopup("0bg100000");
      var t = this.popup.getChildAt(0);
      t.alpha = 0.5;
      t.inputEnabled = true;
      t.events.onInputDown.addOnce(this.disposePopup, this);
      var e = new p.default(this.game, "CONTINUE TOURNAMENT", a.Constants.styleTournamentPopup, this.startOLDTournament, this, a.Atlases.Interface);
      e.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      e.setProp("#330099", 5, "#FF99FF", 10);
      e.y = -140;
      this.popup.getChildAt(1).addChild(e);
      e = new p.default(this.game, "NEW TOURNAMENT", a.Constants.styleTournamentPopup, this.startNEWTournament, this, a.Atlases.Interface);
      e.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      e.setProp("#330099", 5, "#FF99FF", 10);
      e.y = -65;
      this.popup.getChildAt(1).addChild(e);
      var i = {
        font: "bold 28px Impact2",
        fill: "#FF99FF"
      };
      var s = new c.default(this.game, 0, -10, "WARNING", i);
      s.anchor.set(0.5);
      this.popup.getChildAt(1).addChild(s);
      s = new c.default(this.game, 0, 20, "IF YOU CHOOSE", i);
      s.anchor.set(0.5);
      this.popup.getChildAt(1).addChild(s);
      s = new c.default(this.game, 0, 50, "NEW TOURNAMENT,", i);
      s.anchor.set(0.5);
      this.popup.getChildAt(1).addChild(s);
      s = new c.default(this.game, 0, 80, "YOU WILL LOST", i);
      s.anchor.set(0.5);
      this.popup.getChildAt(1).addChild(s);
      s = new c.default(this.game, 0, 110, "YOUR PROGRESS", i);
      s.anchor.set(0.5);
      this.popup.getChildAt(1).addChild(s);
      this.resize();
    } else {
      this.startNEWTournament();
    }
  };
  e.prototype.startNEWTournament = function () {
    l.Inventory.instance.matchData.matchMode = 0;
    l.Inventory.instance.breakTournament();
    new h.default(this.game, this, g.default.Name);
  };
  e.prototype.startOLDTournament = function () {
    l.Inventory.instance.matchData.matchMode = 0;
    new h.default(this.game, this, m.TournamentState.Name);
  };
  e.prototype.startRandom = function () {
    n.default.getInstance().play(a.Sounds.Click);
    l.Inventory.instance.matchData.resetScore();
    l.Inventory.instance.gameMode = 1;
    new h.default(this.game, this, g.default.Name);
  };
  e.prototype.startTraining = function () {
    n.default.getInstance().play(a.Sounds.Click);
    l.Inventory.instance.matchData.resetScore();
    l.Inventory.instance.gameMode = 3;
    new h.default(this.game, this, m.Gameplay.Name);
  };
  e.prototype.onScoreList = function () {
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.onAchievment = function () {
    n.default.getInstance().play(a.Sounds.Click);
    new h.default(this.game, this, y.default.Name);
  };
  e.prototype.toggleMusic = function () {
    if (d.default.getInstance().music) {
      n.default.getInstance().toggleMusic();
    } else if (d.default.getInstance().sfx) {
      n.default.getInstance().toggleSfx();
    } else {
      n.default.getInstance().toggleSfx();
      n.default.getInstance().toggleMusic();
    }
    this.updateSoundButtons();
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.updateSoundButtons = function () {
    var t = d.default.getInstance().music ? 0 : 1;
    t += d.default.getInstance().sfx ? 0 : 1;
    this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t);
  };
  e.prototype.onBack = function () {
    n.default.getInstance().play(a.Sounds.Click);
    new h.default(this.game, this, f.default.Name);
  };
  e.prototype.disposePopup = function () {
    this.popup.destroy();
    this.popup = null;
    if (this.popup_btn) {
      this.popup_btn.destroy();
      this.popup_btn = null;
    }
  };
  e.prototype.backgroundPopup = function () {
    this.popup = this.game.add.sprite(350, 280, a.Atlases.Interface, "bg0000");
    this.popup.anchor.set(0.5);
    this.popup.scale.set(1.3);
    var t = this.game.add.sprite(0, 0, a.Atlases.Interface, "black0000");
    t.width = this.game.width + 500;
    t.height = this.game.height + 500;
    t.inputEnabled = true;
    t.anchor.set(0.5);
    this.popup.addChild(t);
  };
  e.prototype.createPopup = function (t = "0bg100000") {
    if (this.popup !== null) {
      this.disposePopup();
    }
    this.backgroundPopup();
    var e = this.game.add.sprite(0, 0, a.Atlases.Interface, "bg0000");
    e.anchor.set(0.5);
    e.inputEnabled = true;
    this.popup.addChild(e);
    var i = this.game.add.sprite(0, -30, a.Atlases.Interface, t);
    i.scale.set(1.8, 1);
    i.anchor.set(0.5);
    e.addChild(i);
  };
  e.prototype.resizePopup = function (t) {
    if (this.popup !== null) {
      var e = this.popup.removeChildAt(0);
      e.width = this.game.width + 500;
      e.height = this.game.height + 500;
      this.popup.x = this.world.bounds.centerX;
      this.popup.y = this.world.bounds.centerY;
      this.popup.addChildAt(e, 0);
      if (this.popup_btn) {
        this.popup_btn.x = this.world.bounds.centerX - t * 270;
        this.popup_btn.y = this.world.bounds.centerY + t * 200;
      }
    }
  };
  e.prototype.resize = function () {
    var e = 1;
    e = this.game.width / a.Constants.WIDTH;
    e = e > 1 ? 1 : e;
    e *= 1.33333;
    this.backgroundBase.scale.set(e);
    this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER);
    this.background.scale.set(e);
    this.background.alignIn(this.backgroundBase2, Phaser.BOTTOM_CENTER);
    this.backgroundBaseMask.scale.set(e, e);
    this.backgroundBaseMask.x = this.backgroundBase.x;
    this.backgroundBaseMask.y = this.backgroundBase.y;
    this.resizePopup(e);
    t.prototype.resize.call(this);
  };
  e.prototype.shutdown = function () {
    this.background = null;
    this.popup = null;
    this.popup_btn = null;
    this.playBtn1 = null;
    this.playBtn2 = null;
    this.playBtn3 = null;
    this.achievmentBtn = null;
    this.leaderBoardBtn = null;
    this.branding2 = null;
    this.musicBtn = null;
    t.prototype.shutdown.call(this);
  };
  e.Name = "menu2";
  return e;
}(Phaser.State);
exports.default = _;