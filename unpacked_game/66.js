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
var n = require("./38.js");
var a = require("./19.js");
var o = require("./14.js");
var r = require("./4.js");
var h = require("./67.js");
var l = require("./39.js");
var c = require("./0.js");
var u = require("./13.js");
var d = require("./68.js");
var p = function (t) {
  function e(e) {
    var i = t.call(this, e) || this;
    i.gameObjects = new c.Group(i.game);
    i.gameObjects.interactive = false;
    i.back = new c.Group(i.game, i.gameObjects, "back_container");
    i.shadows = new c.Group(i.game, i.gameObjects);
    i.players = new c.Group(i.game, i.gameObjects);
    i.effects = new c.Group(i.game, i.gameObjects);
    i.ball = new c.Group(i.game, i.gameObjects);
    i.frontObjects = new c.Group(i.game, i.gameObjects);
    i.gui = new c.Group(i.game);
    i.gamePadLayer = new c.Group(i.game);
    i.matchPreloader = new d.MatchPreloader();
    o.default.instance.init(i.gamePadLayer, i.game);
    return i;
  }
  s(e, t);
  e.prototype.start = function () {
    this.addChild(this.gameObjects);
    this.addChild(this.gui);
    this.addChild(this.gamePadLayer);
    this.addChild(this.matchPreloader);
    this.startMatch();
  };
  e.prototype.add = function (t) {
    if (t.objType === a.ObjectsType.BALL) {
      this.ball.addChild(t.graphic);
    } else if (t.objType === a.ObjectsType.SHADOW) {
      this.shadows.addChild(t.graphic);
    } else if (t.objType === a.ObjectsType.PLAYER) {
      var e = t;
      var i = 1;
      if (!e.isHuman) {
        e.energyBar.parent.removeChild(e.energyBar);
      }
      if (this.game.device.desktop) {
        if (e.isHuman) {
          this.players.addChildAt(e.energyBar, 0);
          i = 0;
        }
      } else if (e.isHuman) {
        e.energyBar.bg.destroy();
        e.energyBar.hint.destroy();
        e.energyBar.x = 0;
        e.energyBar.y = 0;
        o.default.instance.btnZ.label.parent.addChild(e.energyBar);
      }
      if (this.players.length > 0) {
        this.players.addChildAt(t.graphic, this.players.length - i);
      } else {
        this.players.addChild(t.graphic);
      }
    } else if (t.objType === a.ObjectsType.BASKET) {
      this.back.addChild(t.graphic);
      this.frontObjects.addChild(t.frontEar);
    } else if (t.objType === a.ObjectsType.ARENA) {
      t.graphic.x = -299;
      this.matchPreloader.x = -299;
      this.back.addChild(t.graphic);
    } else if (t.objType === a.ObjectsType.EFFECTS) {
      this.effects.addChild(t.graphic);
    } else if (t.objType === a.ObjectsType.INFO) {
      u.MainGameCore.instance.messageInfo = t;
      this.frontObjects.addChild(t.graphic);
    }
  };
  e.prototype.startMatch = function () {
    this.infoPanel = new h.InfoPanelGUI();
    this.gui.addChild(this.infoPanel);
    this.timer = new l.TimerObject();
    this.gui.addChild(this.timer);
  };
  e.prototype.shake = function (t) {
    if (t === 1) {
      this.shakeContainer(this.gameObjects, 10);
    } else if (t === 7 || t === 8) {
      this.shakeContainer(this.gameObjects, 25);
    }
  };
  e.prototype.resize = function () {
    t.prototype.resize.call(this);
    var e = 1;
    e = this.game.width / r.default.GAME_W;
    this.gameObjects.x = this.game.width / 2 - r.default.DISPLAY_W2 * e;
    this.gui.x = this.game.width / 2 - r.default.DISPLAY_W2 * e;
    this.gamePadLayer.x = this.game.width / 2 - r.default.DISPLAY_W2 * e;
  };
  e.prototype.release = function () {
    this.gameObjects = null;
    this.gamePadLayer = null;
    this.back = null;
    this.shadows = null;
    this.players = null;
    this.ball = null;
    this.effects = null;
    this.frontObjects = null;
    this.gui = null;
    this.infoPanel = null;
    this.timer = null;
    t.prototype.release.call(this);
  };
  return e;
}(n.GameView);
exports.MainGameView = p;