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
var a = require("./7.js");
var o = require("./9.js");
var r = require("./10.js");
var h = require("./4.js");
var l = require("./0.js");
var c = require("./37.js");
var u = require("./2.js");
var d = require("./12.js");
var p = require("./11.js");
var f = require("./5.js");
var g = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i.loadComplete = true;
    i.bike = null;
    i.wait = null;
    i.wait2 = null;
    i.ccc = null;
    i.mainParent = null;
    i.backgroundBase = null;
    return i;
  }
  s(e, t);
  e.prototype.preload = function () {
    var e = this;
    t.prototype.preload.call(this);
    this.game.sound.muteOnPause = true;
    this.game.load.onFileComplete.add(this.fileComplete, this);
    var i = "x" + n.Constants.GAME_SCALE + "/";
    this.game.load.script("BlurX", "https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurX.js");
    this.game.load.script("BlurY", "https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurY.js");
    n.JSONData.list.forEach(function (t) {
      e.game.load.json(t, "assets/data/" + t + ".json");
    });
    n.Images.list.forEach(function (t) {
      e.game.load.image(t, "assets/images/" + i + t + ".png");
    });
    n.Atlases.list.forEach(function (t) {
      e.game.load.atlas(t, "assets/atlases/" + i + t + ".png", "assets/atlases/" + i + t + ".json");
    });
    n.Sounds.list.forEach(function (t) {
      if (e.game.device.iOS) {
        e.game.load.audio(t, ["assets/sound/" + t + ".m4a"]);
      } else {
        e.game.load.audio(t, ["assets/sound/" + t + ".ogg", "assets/sound/" + t + ".mp3"]);
      }
    });
    this.game.scale.onSizeChange.add(function () {
      e.game.state.getCurrentState().resize();
    }, this);
  };
  e.prototype.init = function () {
    this.game.world.removeAll();
    this.backgroundBase = this.game.add.sprite(0, 0, n.Atlases.Preloader, o.default.getBG());
    this.backgroundBaseMask = this.game.add.graphics(0, 0);
    this.backgroundBaseMask.beginFill(65280, 0);
    this.backgroundBaseMask.drawRect(0, 0, 1398, 480);
    this.backgroundBaseMask.endFill();
    var t = this.game.add.group();
    var e = this.game.add.group();
    this.backgroundBase.addChild(t);
    this.backgroundBase.addChild(e);
    var i = {
      font: "16px Impact2",
      fill: "#FFFFFF"
    };
    this.ccc = new r.default(this.game, 100, 300, "MADPUFFERS 2019©", i);
    this.ccc.anchor.set(0.5);
    this.mainParent = this.game.add.group();
    this.mainParent.x = this.game.width / 2;
    this.mainParent.y = this.game.height / 2;
    this.setPauseViewCar(this.mainParent);
    this.wait2 = this.game.add.text(this.game.width / 2, this.game.height * 0.75, "LOADING...", n.Constants.styleLoading);
    this.wait2.anchor.set(0.5);
    this.wait2.stroke = "#FFFFFF";
    this.wait2.strokeThickness = 5;
    this.wait = this.game.add.text(this.game.width / 2, this.game.height * 0.75, "", n.Constants.styleLoading);
    this.wait.anchor.set(0.5);
    this.wait.stroke = "#000000";
    this.wait.strokeThickness = 7;
    this.wait.mask = this.backgroundBaseMask;
    this.wait2.mask = this.backgroundBaseMask;
    this.ccc.mask = this.backgroundBaseMask;
    this.branding2.mask = this.backgroundBaseMask;
    this.inited = true;
    this.resize();
  };
  e.prototype.setPauseViewCar = function (t) {
    if (this.bike !== null) {
      this.bike.destroy();
      this.bike = this.game.add.group(t);
    } else {
      this.bike = this.game.add.group(t);
    }
    var e = null;
    e = this.game.add.image(0, 0, n.Atlases.Preloader, "logo0000");
    e.anchor.set(0.5);
    this.branding2 = new a.default(this.game, "", null, null, null, n.Atlases.Preloader);
    this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000");
    this.world.addChild(this.branding2);
    t.addChild(e);
  };
  e.prototype.create = function () {
    t.prototype.create.call(this);
    this.resize();
  };
  e.prototype.hide = function () {
    var t = this.game.add.tween(this.wait);
    t.to({
      y: 800
    }, h.default.PRELOADER_TIME, l.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.wait2);
    t.to({
      y: 800
    }, h.default.PRELOADER_TIME, l.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.branding2);
    t.to({
      y: 800
    }, h.default.PRELOADER_TIME, l.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.ccc);
    t.to({
      y: 800
    }, h.default.PRELOADER_TIME, l.Easing.Linear.None);
    t.start();
    t = this.game.add.tween(this.mainParent);
    t.to({
      y: -800
    }, h.default.PRELOADER_TIME, l.Easing.Linear.None);
    t.start();
  };
  e.prototype.update = function () {
    t.prototype.update.call(this);
    if (this.loadComplete) {
      this.loadComplete = false;
      e.game = this.game;
      this.startLocalGame();
    }
  };
  e.prototype.startLocalGame = function () {
    p.default.getInstance(this.game, this.onLoadSfx, this);
  };
  e.prototype.onLoadSfx = function () {
    f.default.getInstance(this.game).playMusic(n.Sounds.MenuMusic);
    c.default.getInstance(this.game, this.onSaveGameLoad, this);
  };
  e.prototype.onSaveGameLoad = function () {
    u.Inventory.instance.initManagers();
    new o.default(this.game, this, d.Menu.Name);
  };
  e.prototype.fileComplete = function (t, e, i, s, n) {
    this.wait2.setText("Loading " + t + "%");
  };
  e.prototype.resize = function () {
    if (this.inited) {
      var e = 1;
      e = this.game.width / n.Constants.WIDTH;
      e = e > 1 ? 1 : e;
      e *= 1.33333;
      this.backgroundBase.scale.set(e);
      this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER);
      this.backgroundBaseMask.scale.set(e, e);
      this.backgroundBaseMask.x = this.backgroundBase.x;
      this.backgroundBaseMask.y = this.backgroundBase.y;
      this.bike.scale.set(e);
      this.mainParent.alignIn(this.world.bounds, Phaser.TOP_CENTER);
      this.wait.alignIn(this.backgroundBase, Phaser.BOTTOM_CENTER, 0, -40);
      this.wait2.position.set(this.wait.x, this.wait.y);
      this.branding2.scale.set(e);
      this.branding2.alignIn(this.backgroundBase, Phaser.BOTTOM_RIGHT, -310, -10);
      this.ccc.scale.set(e);
      this.ccc.alignIn(this.backgroundBase, Phaser.BOTTOM_CENTER);
    }
    t.prototype.resize.call(this);
  };
  e.prototype.shutdown = function () {
    this.mainParent = null;
    this.backgroundBase = null;
    this.wait = null;
    this.wait2 = null;
    this.branding2 = null;
    this.bike = null;
    t.prototype.shutdown.call(this);
  };
  e.Name = "preloader";
  e.game = null;
  return e;
}(Phaser.State);
exports.default = g;