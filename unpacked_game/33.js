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
var u = require("./8.js");
var d = require("./18.js");
var p = require("./12.js");
var f = require("./0.js");
var g = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    return i;
  }
  s(e, t);
  e.prototype.init = function () {
    this.game.world.removeAll();
  };
  e.prototype.create = function () {
    t.prototype.create.call(this);
    this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG());
    this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000");
    this.backgroundBase.addChild(this.backgroundBase2);
    this.backgroundBaseMask = this.game.add.graphics(0, 0);
    this.backgroundBaseMask.beginFill(65280, 0);
    this.backgroundBaseMask.drawRect(0, 0, 1398, 480);
    this.backgroundBaseMask.endFill();
    this.backBtn = new u.default(this.game, "BACK", a.Constants.styleBackArrow, this.onBack, this, a.Atlases.Interface);
    this.backBtn.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000");
    this.backBtn.btn.btn.x = -110;
    this.backBtn.setProp("#330099", 7, "#FF99FF", 15);
    this.backBtn.x = 130;
    this.backBtn.y = 450;
    this.backBtn.scale.set(0.8, 1);
    this.backgroundBase2.addChild(this.backBtn);
    this.textHintArr = [];
    for (var e = 0; e < a.Constants.hints.length; e++) {
      var i = new u.default(this.game, a.Constants.hints[e], a.Constants.styleAchievDiscr, null, null, a.Atlases.Achiev);
      i.setFrames("hadr_ach_icon0000", "hadr_ach_icon0000", "hadr_ach_icon0000", "hadr_ach_icon0000");
      i.btn.btn.visible = false;
      i.btn.label.setMaxSize(600, 55);
      i.label.setMaxSize(600, 55);
      i.x = 500;
      i.y = 450;
      this.backgroundBase2.addChild(i);
      i.setText(a.Constants.hints[e]);
      i.setProp(null, 6, null, 12);
      this.textHintArr.push(i);
      i.visible = false;
    }
    this.logo = this.game.add.sprite(400, 35, a.Atlases.Interface, "bg0000");
    this.logo.anchor.set(0.5);
    var s = new u.default(this.game, "ACHIEVEMENTS", a.Constants.stylePreMatchTop, null, null, a.Atlases.Interface);
    s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    s.setProp("#330099", 7, "#FF99FF", 15);
    this.logo.addChild(s);
    var n = this.game.cache.getJSON(a.JSONData.Players);
    var l;
    this.btns = this.game.add.group();
    this.backgroundBase2.addChild(this.btns);
    this.backgroundBase2.addChild(this.logo);
    var d;
    for (var e = 0; e < 19; e++) {
      l = new o.default(this.game, "", a.Constants.stylePopupContentSmall, this.onMouseOver, this, a.Atlases.Achiev);
      if (e >= 15) {
        var p = 0;
        switch (e) {
          case 15:
            p = 2;
            break;
          case 16:
            p = 10;
            break;
          case 17:
            p = 1;
            break;
          case 18:
            p = 14;
        }
        l.setFrames("icon_a" + p + "0000", "icon_a" + p + "0000", "icon_a" + p + "0000", "icon_a" + p + "0000");
        l.id = e + "";
        d = new Phaser.Image(this.game, -45, -45, a.Atlases.Achiev, "hadr_ach_icon0000");
        d.scale.set(0.9);
        l.btn.parent.addChild(d);
      } else {
        l.id = e + "";
        l.setFrames("icon_a" + e + "0000", "icon_a" + e + "0000", "icon_a" + e + "0000", "icon_a" + e + "0000");
      }
      l.position.set(434 + n["a" + e].x, 240 + n["a" + e].y);
      l.btn.events.onInputOver.add(this.onMouseOver, this);
      l.btn.events.onInputDown.add(this.onMouseOver, this);
      l.btn.events.onInputOut.add(this.onMouseOut, this);
      var f = a.Constants.aNamesScreen.indexOf(a.Constants.aNames[parseInt(l.id)]);
      if (!(c.Inventory.instance.achievsMgr.getValuesForRead()[f] >= 1)) {
        l.btn.tint = 3355443;
      }
      this.btns.addChild(l);
    }
    new r.default(this.game, this, this.show);
    this.resize();
  };
  e.prototype.tweenBtn = function (t) {
    var e = this.game.add.tween(t);
    e.from({
      y: -290
    }, l.default.PRELOADER_TIME, f.Easing.Back.Out);
    e.start();
  };
  e.prototype.tweenBtnHide = function (t) {
    var e = this.game.add.tween(t);
    e.to({
      y: -290
    }, l.default.PRELOADER_TIME, f.Easing.Back.Out);
    e.start();
  };
  e.prototype.show = function () {
    this.btns.forEach(this.tweenBtn, this, true);
    var t = this.game.add.tween(this.logo);
    t.from({
      y: -60
    }, l.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.backBtn);
    t.from({
      y: 520
    }, l.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
  };
  e.prototype.hide = function () {
    this.btns.forEach(this.tweenBtnHide, this, true);
    var t = this.game.add.tween(this.logo);
    t.to({
      y: -60
    }, l.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.backBtn);
    t.to({
      y: 520
    }, l.default.PRELOADER_TIME, f.Easing.Linear.None);
    t.start();
  };
  e.prototype.onMouseOver = function (t) {
    var e = parseInt(t.parent.parent.id);
    for (var i = 0; i < this.textHintArr.length; i++) {
      this.textHintArr[i].visible = false;
    }
    this.textHintArr[e].visible = true;
  };
  e.prototype.onMouseOut = function (t) {
    for (var e = 0; e < this.textHintArr.length; e++) {
      this.textHintArr[e].visible = false;
    }
  };
  e.prototype.onBack = function () {
    n.default.getInstance().play(a.Sounds.Click);
    if (h.default.prevState[0] === p.Menu.Name) {
      new h.default(this.game, this, p.Menu.Name);
    } else {
      new h.default(this.game, this, d.default.Name);
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
    t.prototype.resize.call(this);
  };
  e.prototype.shutdown = function () {
    this.backgroundBase2 = null;
    this.logo = null;
    t.prototype.shutdown.call(this);
  };
  e.Name = "achievment";
  return e;
}(Phaser.State);
exports.default = g;