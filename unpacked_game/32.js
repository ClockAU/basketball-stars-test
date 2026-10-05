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
var l = require("./4.js");
var c = require("./2.js");
var u = require("./10.js");
var d = require("./16.js");
var p = require("./11.js");
var f = require("./8.js");
var g = require("./31.js");
var m = require("./18.js");
var y = require("./33.js");
var v = require("./0.js");
var b = require("./26.js");
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
    c.PlayersData.setupPlayers();
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
    this.playBtn1 = new f.default(this.game, "1 PLAYER", a.Constants.stylePlay, this.start1Player, this, a.Atlases.Interface);
    this.playBtn1.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.playBtn1.y = -115;
    this.playBtn1.setProp("#330099", 5, "#FF99FF", 10);
    this.background4.addChild(this.playBtn1);
    this.playBtn4 = new f.default(this.game, "CREDITS", a.Constants.stylePlay, this.onCredits, this, a.Atlases.Interface);
    this.playBtn4.y = 140;
    this.playBtn4.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.playBtn4.setProp("#330099", 5, "#FF99FF", 10);
    this.background4.addChild(this.playBtn4);
    this.playBtn2 = new f.default(this.game, "2 PLAYERS", a.Constants.stylePlay, this.start2Player, this, a.Atlases.Interface);
    this.playBtn2.y = -45;
    this.playBtn2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.playBtn2.setProp("#330099", 5, "#FF99FF", 10);
    this.background4.addChild(this.playBtn2);
    this.playBtn3 = new f.default(this.game, "QUICK", a.Constants.stylePlay2, this.startQuickMath, this, a.Atlases.Interface);
    this.playBtn3.y = 70;
    this.playBtn3.label.parent.y = -50;
    this.playBtn3.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.playBtn3.setProp("#330099", 5, "#FF99FF", 10);
    this.background4.addChild(this.playBtn3);
    var i = new f.default(this.game, "MATCH", a.Constants.stylePlay2, null, null, a.Atlases.Interface);
    i.label.parent.y = 50;
    i.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.setProp("#330099", 5, "#FF99FF", 10);
    i.inputEnableChildren = true;
    this.playBtn3.label.addChild(i);
    if (!this.game.device.desktop) {
      this.playBtn2.visible = false;
      this.playBtn1.y += 35;
      this.playBtn4.y += -35;
      this.playBtn3.y += -35;
    }
    this.leaderBoardBtn = new o.default(this.game, "", null, this.onScoreList, this, a.Atlases.Interface);
    this.leaderBoardBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.leaderBoardBtn.sScale = 0.7;
    this.leaderBoardBtn.sLabelScale = 0.7;
    var s = this.game.add.image(0, 0, a.Atlases.Interface, "lead_icon0000");
    s.anchor.set(0.5);
    this.leaderBoardBtn.label.parent.addChild(s);
    this.achievmentBtn = new o.default(this.game, "", null, this.onAchievment, this, a.Atlases.Gameplay);
    this.achievmentBtn.sScale = 42 / this.achievmentBtn.btn.width;
    this.achievmentBtn.x = 730;
    this.achievmentBtn.y = 25;
    this.achievmentBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    var n = this.game.add.image(0, 0, a.Atlases.Interface, "ach_icon0000");
    n.anchor.set(0.5);
    this.achievmentBtn.label.parent.addChild(n);
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
    this.textVersion = new u.default(this.game, 0, 465, " " + a.Constants.VERSION, a.Constants.styleVersion);
    this.backgroundBase2.addChild(this.textVersion);
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
    }, l.default.PRELOADER_TIME, v.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.logo);
    t.from({
      y: -145
    }, l.default.PRELOADER_TIME, v.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.from({
      x: 1600
    }, l.default.PRELOADER_TIME, v.Easing.Back.Out);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.from({
      x: 1600
    }, l.default.PRELOADER_TIME, v.Easing.Back.Out);
    t.start();
  };
  e.prototype.hide = function () {
    var t = this.game.add.tween(this.background4);
    t.to({
      y: 800
    }, l.default.PRELOADER_TIME);
    t.start();
    t = this.game.add.tween(this.logo);
    t.to({
      y: -145
    }, l.default.PRELOADER_TIME);
    t.start();
    t = this.game.add.tween(this.leaderBoardBtn);
    t.to({
      x: 1600
    }, l.default.PRELOADER_TIME, v.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.to({
      x: 1600
    }, l.default.PRELOADER_TIME, v.Easing.Linear.None);
    t.start();
  };
  e.prototype.onMoreGames = function () {
    window.open(d.default.getInstance().getUrl(d.default.Current), "_blank");
  };
  e.prototype.showBanner = function () {
    if (typeof gdsdk != "undefined" && gdsdk.showBanner !== "undefined") {
      var t = gdsdk.showBanner();
    }
  };
  e.prototype.start1Player = function () {
    n.default.getInstance().play(a.Sounds.Click);
    c.Inventory.instance.matchData.resetScore();
    c.Inventory.instance.gameMode = 0;
    c.Inventory.instance.matchData.matchMode = 0;
    this.showBanner();
    new h.default(this.game, this, m.default.Name);
  };
  e.prototype.start2Player = function () {
    n.default.getInstance().play(a.Sounds.Click);
    c.Inventory.instance.matchData.resetScore();
    c.Inventory.instance.gameMode = 4;
    c.Inventory.instance.matchData.matchMode = 0;
    this.showBanner();
    new h.default(this.game, this, b.default.Name);
  };
  e.prototype.startQuickMath = function () {
    n.default.getInstance().play(a.Sounds.Click);
    c.Inventory.instance.gameMode = 2;
    c.Inventory.instance.matchData.matchMode = 0;
    this.showBanner();
    new h.default(this.game, this, g.default.Name);
  };
  e.prototype.onScoreList = function () {
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.onAchievment = function () {
    n.default.getInstance().play(a.Sounds.Click);
    new h.default(this.game, this, y.default.Name);
  };
  e.prototype.toggleMusic = function () {
    if (p.default.getInstance().music) {
      n.default.getInstance().toggleMusic();
    } else if (p.default.getInstance().sfx) {
      n.default.getInstance().toggleSfx();
    } else {
      n.default.getInstance().toggleSfx();
      n.default.getInstance().toggleMusic();
    }
    this.updateSoundButtons();
    n.default.getInstance().play(a.Sounds.Click);
  };
  e.prototype.updateSoundButtons = function () {
    var t = p.default.getInstance().music ? 0 : 1;
    t += p.default.getInstance().sfx ? 0 : 1;
    this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t);
  };
  e.prototype.onCredits = function () {
    this.createPopup();
    var t = 19;
    var e = new f.default(this.game, "CREDITS", a.Constants.styleCredits3, null, null, a.Atlases.Interface);
    e.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    e.setProp("#330099", 5, "#FF99FF", 10);
    e.y = -192;
    this.popup.getChildAt(1).addChild(e);
    var i;
    for (var s = [" ", " ", " ", " ", " ", "CEO: Konstantin Matrunchik", "Coding: Yuriy Borozenets,", "Dmytro Borozenets", "Art: Andrey Zdyshchuk", "Roman Padaliuk", "Game Design: Vasiliy Kachor", "Ported by iriysoft.com"], n = 0; n < s.length; n++) {
      i = new o.default(this.game, s[n], a.Constants.styleCredits2, null, this, a.Atlases.Interface);
      i.y = n * 19 - 48;
      i.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      i.btn.inputEnabled = false;
      this.popup.getChildAt(1).addChild(i);
    }
    this.popup_btn = new f.default(this.game, "BACK", a.Constants.styleBackArrow, this.disposePopup, this, a.Atlases.Interface);
    this.popup_btn.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000");
    this.popup_btn.btn.btn.x = -110;
    this.popup_btn.x = -250;
    this.popup_btn.y = 200;
    this.popup_btn.setProp("#330099", 5, "#FF99FF", 10);
    var r = new o.default(this.game, "", {}, this.onLogo, this, a.Atlases.Interface);
    r.setFrames("logo_mad0000", "logo_mad0000", "logo_mad0000", "logo_mad0000");
    r.position.set(0, -92);
    r.scale.set(0.87);
    this.popup.getChildAt(1).addChild(r);
    var h = new o.default(this.game, "", {}, this.onVK, this, a.Atlases.Interface);
    h.setFrames("vk_icon0000", "vk_icon0000", "vk_icon0000", "vk_icon0000");
    h.position.set(0, 7);
    h.scale.set(0.9);
    this.popup.getChildAt(1).addChild(h);
    var l = new o.default(this.game, "", {}, this.onFB, this, a.Atlases.Interface);
    l.setFrames("fb_icon0000", "fb_icon0000", "fb_icon0000", "fb_icon0000");
    l.position.set(70, 7);
    l.scale.set(0.9);
    this.popup.getChildAt(1).addChild(l);
    var c = new o.default(this.game, "", {}, this.onTW, this, a.Atlases.Interface);
    c.setFrames("tw_icon0000", "tw_icon0000", "tw_icon0000", "tw_icon0000");
    c.position.set(-70, 7);
    c.scale.set(0.9);
    this.popup.getChildAt(1).addChild(c);
    this.popup.getChildAt(1).addChild(this.popup_btn);
    var u = null;
    var d = this.game.add.group();
    this.popup.getChildAt(1).addChildAt(d, 0);
    u = this.game.add.sprite(-175, 66, a.Atlases.Interface, "body00000");
    u.anchor.set(0.5);
    d.addChild(u);
    u = this.game.add.sprite(220, 55, a.Atlases.Interface, "body10000");
    u.anchor.set(0.5);
    d.addChild(u);
    u = this.game.add.sprite(0, 0, a.Atlases.Interface, "0bg100000");
    u.anchor.set(0.5);
    u.scale.set(1);
    d.addChild(u);
    u = this.game.add.sprite(-203, -50, a.Atlases.Interface, "head00000");
    u.anchor.set(0.5);
    u.scale.set(0.95);
    d.addChild(u);
    u = this.game.add.sprite(205, -55, a.Atlases.Interface, "head10000");
    u.anchor.set(0.5);
    u.scale.set(0.95);
    d.addChild(u);
    this.resize();
  };
  e.prototype.onLogo = function () {
    window.open("http://madpuffers.com/", "_blank");
  };
  e.prototype.onVK = function () {
    window.open("https://vk.com/madpuffers", "_blank");
  };
  e.prototype.onFB = function () {
    window.open("https://www.facebook.com/madpuffers", "_blank");
  };
  e.prototype.onTW = function () {
    window.open("https://twitter.com/MadPuffers", "_blank");
  };
  e.prototype.disposePopup = function () {
    this.popup.destroy();
    this.popup = null;
    this.popup_btn.destroy();
    this.popup_btn = null;
  };
  e.prototype.backgroundPopup = function () {
    this.popup = this.game.add.sprite(350, 280, a.Atlases.Interface, "bg0000");
    this.popup.anchor.set(0.5);
    this.popup.scale.set(1.33333);
    var t = this.game.add.sprite(0, 0, a.Atlases.Interface, "black0000");
    t.width = this.game.width + 500;
    t.height = this.game.height + 500;
    t.inputEnabled = true;
    t.anchor.set(0.5);
    this.popup.addChild(t);
  };
  e.prototype.createPopup = function () {
    if (this.popup !== null) {
      this.disposePopup();
    }
    this.backgroundPopup();
    var t = this.game.add.sprite(0, -15, a.Atlases.Interface, "0bg100000");
    t.anchor.set(0.5);
    this.popup.addChild(t);
  };
  e.prototype.resizePopup = function (t) {
    if (this.popup !== null) {
      var e = this.popup.removeChildAt(0);
      e.width = this.game.width + 500;
      e.height = this.game.height + 500;
      this.popup.x = this.world.bounds.centerX;
      this.popup.y = t * 260;
      this.popup.addChildAt(e, 0);
      this.popup.scale.set(t);
    }
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
    this.resizePopup(e);
    t.prototype.resize.call(this);
  };
  e.prototype.shutdown = function () {
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
  e.Name = "menu";
  return e;
}(Phaser.State);
exports.default = _;