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
var n = require("./1.js");
var a = require("./36.js");
var o = require("./7.js");
var r = require("./5.js");
var h = require("./9.js");
var l = require("./34.js");
var c = require("./30.js");
var u = require("./44.js");
var d = require("./13.js");
var p = require("./32.js");
var f = require("./4.js");
var g = require("./8.js");
var m = require("./2.js");
var y = require("./52.js");
var v = require("./16.js");
var b = require("./18.js");
var _ = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i.popup = null;
    i.backgroudBase = null;
    i.transition = null;
    i._armatureDisplay = null;
    i._armatureDisplay2 = null;
    i._armatureDisplay3 = null;
    i._armatureDisplay4 = null;
    return i;
  }
  s(e, t);
  e.prototype.onBuild = function () {
    d.MainGameCore.instance.start();
    d.MainGameCore.instance.slowSignal.removeAll();
    d.MainGameCore.instance.menuPauseSignal.removeAll();
    d.MainGameCore.instance.menuPauseSignal.add(this.onCallPopup, this);
    d.MainGameCore.instance.slowSignal.add(d.MainGameCore.instance.slow, d.MainGameCore.instance);
  };
  e.prototype.init = function () {
    var i = this;
    t.prototype.init.call(this);
    this.game.world.removeAll();
    e.loadedLevel = false;
    dragonBones.PhaserFactory.init(this.game);
    var s = this.game.cache.getJSON(n.JSONData.DBPers2);
    var o = this.game.cache.getJSON(n.JSONData.DBPers_Texture2);
    var p = this.game.cache.getImage(l.default.DBPers2, true).base;
    dragonBones.PhaserFactory.factory.parseDragonBonesData(s);
    dragonBones.PhaserFactory.factory.parseTextureAtlasData(o, p);
    s = this.game.cache.getJSON(n.JSONData.DBHelp);
    o = this.game.cache.getJSON(n.JSONData.DBHelp_Texture);
    p = this.game.cache.getImage(l.default.DBHelp, true).base;
    dragonBones.PhaserFactory.factory.parseDragonBonesData(s);
    dragonBones.PhaserFactory.factory.parseTextureAtlasData(o, p);
    this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall");
    this._armatureDisplay.animation.play("idle", 0);
    this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall");
    this._armatureDisplay2.animation.play("idle", 0);
    this._armatureDisplay3 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall");
    this._armatureDisplay3.animation.play("idle", 0);
    this._armatureDisplay4 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall");
    this._armatureDisplay4.animation.play("idle", 0);
    var f;
    this._armatureDisplayArr = [];
    for (var g = 0; g < 5; g++) {
      f = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerH" + g);
      f.animation.play("anim", 0);
      f.visible = false;
      this._armatureDisplayArr.push(f);
    }
    this.initData();
    this.game.time.advancedTiming = true;
    this.game.time.desiredFps = 40;
    d.MainGameCore.instance.init(this.game);
    c.default.instance.init(this.game.add.group(), this.game);
    new u.GameBuilder().start(this.onBuild, this, [this._armatureDisplay, this._armatureDisplay3, this._armatureDisplay2, this._armatureDisplay4]);
    var m = 1;
    m = this.game.width / n.Constants.WIDTH;
    m = m > 1 ? 1 : m;
    this.backgroudBase = this.game.add.sprite(0, 0, a.default.Preloader, h.default.getBG());
    this.backgroudBase.scale.set(m * 1.33333);
    this.backgroudBase.x = this.game.width / 2 - this.backgroudBase.width / 2;
    this.transition = this.game.add.tween(this.backgroudBase);
    this.transition.to({
      alpha: 0
    }, 1, Phaser.Easing.Linear.None, false, 500);
    this.transition.onComplete.add(function () {
      e.loadedLevel = true;
      i.backgroudBase.destroy();
      i.backgroudBase = null;
      i.transition = null;
      if (i.game.device.desktop) {
        i.game.input.keyboard.addKey(Phaser.Keyboard.P).onUp.add(i.onP, i);
      }
      c.default.instance.signalPause.add(i.onPause, i);
    });
    this.transition.start();
    r.default.getInstance().playMusic(n.Sounds.GameMusic);
  };
  e.prototype.create = function () {
    t.prototype.create.call(this);
    this.resize();
  };
  e.prototype.onP = function () {
    if (d.MainGameCore.instance.isPaused) {
      this.onResume();
    } else {
      this.onPause();
    }
  };
  e.prototype.onPause = function (t = "") {
    if (!d.MainGameCore.instance.isPaused) {
      d.MainGameCore.instance.menuPauseSignal.dispatch(t.length === 0 ? d.MainGameCore.PAUSE : t);
    }
  };
  e.prototype.onCallPopup = function (t) {
    this.closePopup();
    var e = "GAME PAUSED";
    if (t !== d.MainGameCore.PAUSE) {
      if (t === d.MainGameCore.HELP) {
        this.createHelpPopup();
        return;
      } else {
        this.onPostMatch();
        return;
      }
    }
    this.createPopup();
    var i = new g.default(this.game, e, n.Constants.stylePause, null, this, a.default.Interface);
    i.y = -210;
    i.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.setProp("#330099", 6, "#FF99FF", 13);
    i.btn.label.setMaxSize(600, 90);
    i.label.setMaxSize(600, 90);
    i.setText(e);
    this.popup.getChildAt(1).addChild(i);
    var s = new g.default(this.game, "MENU", n.Constants.stylePauseBtn1, this.confirmExit, this, a.default.Interface);
    s.x = -150;
    s.y = 200;
    s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    s.setProp("#330099", 6, "#FF99FF", 13);
    this.popup.getChildAt(1).addChild(s);
    var r = new g.default(this.game, "RESUME", n.Constants.stylePauseBtn2, this.onResume, this, a.default.Interface);
    r.x = 150;
    r.y = 200;
    r.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    r.setProp("#330099", 6, "#FF99FF", 13);
    this.popup.getChildAt(1).addChild(r);
    var h = new g.default(this.game, m.Inventory.instance.matchData.matchScore[0] + " : " + m.Inventory.instance.matchData.matchScore[1], n.Constants.styleEndMatchScore, null, null, a.default.Interface);
    h.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    h.setProp("#FFFFFF", 7, "#000000", 15);
    h.y = -90;
    this.popup.getChildAt(1).addChild(h);
    var l = m.Inventory.instance.matchData.teams[0] - 1;
    var c = m.Inventory.instance.matchData.teams[1] - 1;
    var u = this.game.add.image(-270, -90, a.default.Interface, "EmblemsBg0000");
    u.anchor.set(0.5);
    u.scale.set(1.18);
    this.popup.getChildAt(1).addChild(u);
    var p = this.game.add.image(270, -90, a.default.Interface, "EmblemsBg0000");
    p.anchor.set(0.5);
    p.scale.set(1.18);
    this.popup.getChildAt(1).addChild(p);
    u = this.game.add.image(-270, -90, a.default.Interface, "emptyBg0000");
    u.scale.set(0.8);
    this.popup.getChildAt(1).addChild(u);
    p = this.game.add.image(270, -90, a.default.Interface, "emptyBg0000");
    p.scale.set(0.8);
    this.popup.getChildAt(1).addChild(p);
    u.loadTexture(a.default.Interface, "Emblems00" + (l < 10 ? "0" : "") + l);
    p.loadTexture(a.default.Interface, "Emblems00" + (c < 10 ? "0" : "") + c);
    u.anchor.set(0.5);
    p.anchor.set(0.5);
    var f = new o.default(this.game, "", null, this.onMoreGames, this, a.default.Preloader);
    f.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000");
    f.y = 80;
    this.popup.getChildAt(1).addChild(f);
    var y = 1;
    y = this.game.width / n.Constants.WIDTH;
    y = y > 1 ? 1 : y;
    this.resizePopup(y);
  };
  e.prototype.buildText = function (t, e, i = 30, s = n.Constants.stylePopupContentSmall) {
    var r;
    for (var h = 0; h < t.length; h++) {
      r = new o.default(this.game, t[h], s, null, null, a.default.Interface);
      r.y = h * i + 8;
      r.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      r.btn.inputEnabled = false;
      if (h === 0) {
        r.label.addColor("#66CCFF", 11);
      }
      if (h === 1) {
        r.label.addColor("#66CCFF", 0);
        r.label.addColor("#ffffff", 5);
      }
      if (h === 2) {
        r.label.addColor("#66CCFF", 10);
      }
      e.label.parent.addChild(r);
    }
  };
  e.prototype.buildText2 = function (t, e, i = 30, s = n.Constants.stylePopupContent) {
    var r;
    for (var h = 0; h < t.length; h++) {
      r = new o.default(this.game, t[h], s, null, null, a.default.Interface);
      r.y = h * i - 30;
      r.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      r.btn.inputEnabled = false;
      e.label.parent.addChild(r);
    }
  };
  e.prototype.onForum = function () {
    m.Inventory.instance.checkForumAchievement();
    window.open("https://forum.y8.com/t/basketball-legends/1741", "_blank");
  };
  e.prototype.onMoreGames = function () {
    window.open(v.default.getInstance().getUrl(v.default.Current), "_blank");
  };
  e.prototype.onScoreList = function () {};
  e.prototype.disposePopup = function () {
    if (this.popup) {
      this.popup.destroy(true);
    }
    this.popup = null;
    d.MainGameCore.instance.countDown.activate();
  };
  e.prototype.backgroundPopup = function () {
    this.popup = this.game.add.sprite(350, 250, a.default.Interface, "bg0000");
    this.popup.anchor.set(0.5);
    this.popup.scale.set(1.33333);
    var t = this.game.add.sprite(0, 0, a.default.Interface, "bg0000");
    t.width = this.game.width;
    t.height = this.game.height;
    t.inputEnabled = true;
    t.anchor.set(0.5);
    this.popup.addChild(t);
    this.world.addChild(c.default.instance.container);
  };
  e.prototype.createPopup = function () {
    if (this.popup !== null) {
      this.disposePopup();
    }
    this.backgroundPopup();
    var t = this.game.add.sprite(0, 0, a.default.Preloader, h.default.BASE_BG[h.default.INDEX_BG] + "0000");
    t.anchor.set(0.5);
    this.popup.addChild(t);
    d.MainGameCore.instance.isPlaying = false;
    d.MainGameCore.instance.isPaused = true;
    c.default.instance.pauseBtn.visible = false;
    if (c.default.instance.helpBtn) {
      c.default.instance.helpBtn.visible = false;
    }
  };
  e.prototype.createHelpPopup = function () {
    if (this.popup !== null) {
      this.disposePopup();
    }
    this.backgroundPopup();
    var t = this.game.add.sprite(0, 0, a.default.Interface, "0bg100000");
    t.anchor.set(0.5);
    t.scale.set(2.2, 1.2);
    this.popup.addChild(t);
    d.MainGameCore.instance.isPlaying = false;
    d.MainGameCore.instance.isPaused = true;
    c.default.instance.pauseBtn.visible = false;
    if (c.default.instance.helpBtn) {
      c.default.instance.helpBtn.visible = false;
    }
    var e = this.game.cache.getJSON(n.JSONData.Players);
    var i = this.parseStaticGraphic(e, 2);
    this.popup.addChild(i);
    i = m.Inventory.instance.gameMode === 4 ? this.parseStaticGraphic(e, 1) : this.parseStaticGraphic(e, 0);
    this.popup.addChild(i);
    var s = new g.default(this.game, "OK", n.Constants.styleOKGreen, this.closePopup, this, a.default.Interface);
    s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    s.y = 215;
    s.setProp("#330099", 5, "#FF99FF", 10);
    this.popup.addChild(s);
    s = new g.default(this.game, "HOW TO PLAY", n.Constants.styleHelpTitle, null, null, a.default.Interface);
    s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    s.y = -210;
    s.setProp("#330099", 5, "#FF99FF", 10);
    this.popup.addChild(s);
    this.resizePopup(1);
  };
  e.prototype.parseStaticGraphic = function (t, e) {
    var i = this.game.make.group(this.popup);
    var s = null;
    var r = -10;
    var h = 0;
    var l = t["control" + e];
    for (var c = 0; c < 40; c++) {
      if (l.hasOwnProperty(c)) {
        h = 0;
        if (l[c].g.indexOf("arm_") === 0) {
          s = this.game.make.image(0, 0, a.default.Interface, "loginSelect0000");
          s.anchor.set(0.5, 0.95);
          s.x = l[c].x;
          s.y = l[c].y + r;
          i.addChild(s);
          var u = parseInt(l[c].g.split("arm_")[1]);
          var d = this._armatureDisplayArr[u];
          d.x = l[c].x + h;
          d.y = l[c].y + r;
          d.scale.set(0.9);
          d.visible = true;
          i.addChild(d);
          d.animation.play("anim", 0);
        } else if (l[c].g.indexOf("txt_") === 0) {
          var p = l[c].g.split("txt_")[1];
          var f = n.Constants.styleHelpLetter;
          var g = " ";
          if (p.length > 3) {
            f = n.Constants.styleHelpTxt0;
          } else {
            p = p.charAt(0);
            if (p === "X") {
              h = 2;
            }
            if (p === "W") {
              h = 1;
            }
          }
          if (l[c].g.indexOf("Attack") > 0 || l[c].g.indexOf("Defense") > 0) {
            f = n.Constants.styleHelpTxt1;
          }
          if (l[c].g.indexOf("action") > 0 || l[c].g.indexOf("super") > 0) {
            f = n.Constants.styleHelpTxt0;
            g = " - ";
          }
          s = new o.default(this.game, g + p, f, null, null, a.default.Gameplay);
          s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
          if (p.length > 3) {
            s.label.stroke = "#0033FF";
            s.label.strokeThickness = 1;
          }
          s.label.anchor.set(0);
          s.x = l[c].x + h;
          s.y = l[c].y + r;
          i.addChild(s);
        } else {
          s = this.game.make.image(l[c].x, l[c].y, a.default.Interface, l[c].g + "0000");
          s.anchor.set(0.5);
          s.x = l[c].x;
          s.y = l[c].y + r;
          s.angle = l[c].r;
          s.scale.set(l[c].scaleX, l[c].scaleY);
          if (l[c].g.indexOf("plate") > 0) {
            i.addChildAt(s, 0);
          } else {
            i.addChild(s);
          }
        }
      }
    }
    return i;
  };
  e.prototype.resizePopup = function (t) {
    if (this.popup !== null) {
      var e = this.popup.removeChildAt(0);
      e.width = this.game.width;
      e.height = this.game.height;
      this.popup.x = this.world.bounds.centerX;
      this.popup.y = t * 240 * 1.33333;
      this.popup.addChildAt(e, 0);
      this.popup.scale.set(t * 1.33333);
    }
  };
  e.prototype.closePopup = function () {
    if (this._armatureDisplayArr[0].visible) {
      for (var t = 0; t < this._armatureDisplayArr.length; t++) {
        var e = this._armatureDisplayArr[t];
        e.parent.removeChild(e);
        e.visible = false;
      }
    }
    d.MainGameCore.instance.isPaused = false;
    c.default.instance.pauseBtn.visible = true;
    if (c.default.instance.helpBtn) {
      c.default.instance.helpBtn.visible = true;
    }
    c.default.instance.pauseBtn.onOut();
    this.disposePopup();
  };
  e.prototype.onResume = function () {
    this.closePopup();
  };
  e.prototype.onPostMatch = function () {
    new h.default(this.game, 0, y.default.Name);
  };
  e.prototype.confirmExit = function () {
    var t = new o.default(this.game, "", null, null, null, a.default.Interface);
    t.setFrames("0bg100000", "0bg100000", "0bg100000", "0bg100000");
    t.btn.scale.set(1.3, 1);
    var e = this.game.add.sprite(0, 0, a.default.Interface, "black0000");
    e.width = this.game.width + 500;
    e.height = this.game.height + 500;
    e.inputEnabled = true;
    e.anchor.set(0.5);
    e.alpha = 0.5;
    t.btn.parent.addChildAt(e, 0);
    var i = new g.default(this.game, "WARNING!!", n.Constants.styleWarningLeave, null, this, a.default.Interface);
    i.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.setProp("#000000", 5, "#FFFFFF", 10);
    i.y = -95;
    t.addChild(i);
    var s = this.game.add.image(0, -55, a.default.Interface, "line0000");
    s.anchor.set(0.5);
    t.label.parent.addChild(s);
    s = this.game.add.image(0, 55, a.default.Interface, "line0000");
    s.anchor.set(0.5);
    t.label.parent.addChild(s);
    this.popup.getChildAt(1).addChild(t);
    var r = ["IF YOU CONTINUE,", "YOU WIL LOST", "YOUR PROGRESS"];
    this.buildText2(r, t, 30);
    var h = new g.default(this.game, "OK", n.Constants.stylePopupPlay, this.onMenu, this, a.default.Interface);
    h.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    h.setProp("#000000", 6, "#FFFFFF", 12);
    h.x = -110;
    h.y = 90;
    t.label.parent.addChild(h);
    h = new g.default(this.game, "CANCEL", n.Constants.stylePopupCancel, function () {
      t.destroy();
    }, this, a.default.Interface);
    h.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    h.setProp("#000000", 6, "#FFFFFF", 12);
    h.x = 60;
    h.y = 90;
    t.label.parent.addChild(h);
  };
  e.prototype.onMenu = function () {
    this.closePopup();
    if (m.Inventory.instance.checkQuickMatch()) {
      new h.default(this.game, 0, p.default.Name);
    } else if (m.Inventory.instance.gameMode === 0) {
      new h.default(this.game, 0, b.default.Name);
    } else {
      new h.default(this.game, 0, p.default.Name);
    }
  };
  e.prototype.update = function () {
    if (!e.isAdsPause && (t.prototype.update.call(this), e.loadedLevel)) {
      if (this.isFirstUpdate) {
        this.isFirstUpdate = false;
        this.timeAcc = 0;
        this.prevTimeMS = Date.now();
        return;
      }
      this.currTimeMS = Date.now();
      this.deltaTime = (this.currTimeMS - this.prevTimeMS) / 1000;
      if (this.deltaTime > e.MAX_FRAME_TIME) {
        this.deltaTime = e.MAX_FRAME_TIME;
      }
      this.prevTimeMS = this.currTimeMS;
      this.timeAcc += this.deltaTime;
      while (this.timeAcc >= e.DESIRED_FRAME_TIME) {
        this.updateGameController(e.DESIRED_FRAME_TIME);
        this.timeAcc -= e.DESIRED_FRAME_TIME;
      }
      if (!d.MainGameCore.instance.isPaused) {
        d.MainGameCore.instance.physics.updateGraphics();
      }
    }
  };
  e.prototype.resize = function () {
    t.prototype.resize.call(this);
    var e = 1;
    e = this.game.width / n.Constants.WIDTH;
    e = e > 1 ? 1 : e;
    d.MainGameCore.instance.view.resize();
    d.MainGameCore.instance.view.scale.set(e * 1.3333333);
    d.MainGameCore.instance.view.alignIn(this.world.bounds, Phaser.TOP_CENTER);
    c.default.instance.resize(e);
    this.resizePopup(e);
  };
  e.prototype.shutdown = function () {
    this.closePopup();
    this._armatureDisplay = null;
    this._armatureDisplay2 = null;
    this._armatureDisplay3 = null;
    this._armatureDisplay4 = null;
    d.MainGameCore.instance.release();
    c.default.instance.release();
    t.prototype.shutdown.call(this);
  };
  e.prototype.render = function () {
    if (d.MainGameCore.instance.timeScale !== 1) {
      if (d.MainGameCore.instance.timeScale === 0) {
        dragonBones.PhaserFactory.factory.dragonBones.advanceTime(f.default.STEP * 0.3);
      } else {
        dragonBones.PhaserFactory.factory.dragonBones.advanceTime(f.default.STEP * d.MainGameCore.instance.timeScale);
      }
    } else {
      dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1);
    }
    t.prototype.render.call(this);
  };
  e.prototype.initData = function () {
    this.isFirstUpdate = true;
  };
  e.prototype.updateGameController = function (t) {
    d.MainGameCore.instance.update(t);
  };
  e.Name = "gameplay";
  e.pause = false;
  e.MAX_FRAME_TIME = 0.1;
  e.DESIRED_FRAME_TIME = 0.025;
  e.isAdsPause = false;
  e.loadedLevel = false;
  return e;
}(Phaser.State);
exports.default = _;