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
require("./55.js");
require("./6.js");
require("./0.js");
var n = require("./60.js");
var a = require("./12.js");
var o = require("./3.js");
var r = require("./50.js");
var h = require("./18.js");
var l = require("./52.js");
var c = require("./53.js");
var u = require("./33.js");
var d = require("./30.js");
var p;
(function (t) {
  var e = function (t) {
    function e() {
      var e = t.call(this, {
        enableDebug: false,
        width: 1066,
        height: 640,
        renderer: Phaser.WEBGL,
        parent: "content",
        transparent: true,
        antialias: true,
        preserveDrawingBuffer: false,
        physicsConfig: null,
        seed: "",
        state: null,
        forceSetTimeOut: false
      }) || this;
      e.clearBeforeRender = false;
      Phaser.Device.whenReady(function () {
        e.stage.disableVisibilityChange = true;
        var t = e.device.desktop ? "click" : "touchstart";
        document.getElementById("content").addEventListener(t, function (t) {
          e.gameResumed(t);
        });
        document.getElementById("content").addEventListener("SDK_GAME_START", function (t) {
          e.adsResume();
        });
        document.getElementById("content").addEventListener("SDK_GAME_PAUSE", function (t) {
          e.adsPause();
        });
      });
      e.state.add("game", {
        create: e.stateCreator.bind(e),
        preload: e.statePreloader.bind(e)
      }, true);
      return e;
    }
    s(e, t);
    e.prototype.statePreloader = function () {
      var t = this;
      ["https://cdn.jsdelivr.net/npm/@orange-games/phaser-cachebuster@2.0/build/phaser-cachebuster.min.js", "https://cdn.jsdelivr.net/npm/@orange-games/phaser-super-storage@1.0/build/phaser-super-storage.min.js", "assets/box2dweb/dragonBones.min.js"].forEach(function (e) {
        t.load.script(e, e);
      });
    };
    e.prototype.stateCreator = function () {
      var t = this;
      this.plugins.add(PhaserSuperStorage.StoragePlugin);
      this.plugins.add(PhaserCachebuster.CacheBuster);
      this.storage.forcePromises = true;
      this.state.add(a.Boot.Name, a.Boot, false);
      this.state.add(o.default.Name, o.default, false);
      this.state.add(r.default.Name, r.default, false);
      this.state.add(a.RandomState.Name, a.RandomState, false);
      this.state.add(a.TournamentState.Name, a.TournamentState, false);
      this.state.add(l.default.Name, l.default, false);
      this.state.add(c.default.Name, c.default, false);
      this.state.add(h.default.Name, h.default, false);
      this.state.add(a.Menu.Name, a.Menu, false);
      this.state.add(u.default.Name, u.default, false);
      this.state.add(a.Gameplay.Name, a.Gameplay, false);
      function e() {
        t.recursiveUpdateText(t.stage);
      }
      n.load({
        custom: {
          families: ["Aller Display", "CfCrackBold", "Impact", "Impact2", "Impact3"],
          urls: ["assets/css/AllerDisplay.css", "assets/css/CfCrackBold.css", "assets/css/impact.css", "assets/css/impact2.css", "assets/css/impact3.css"]
        },
        active: e,
        inactive: e
      });
      this.state.start(a.Boot.Name);
      this.state.remove("game");
    };
    e.prototype.recursiveUpdateText = function (t) {
      var e = this;
      if (t instanceof Phaser.Text) {
        t.dirty = true;
      }
      if (t.children && t.children.length > 0) {
        t.children.forEach(function (t) {
          e.recursiveUpdateText(t);
        });
      }
    };
    e.prototype.adsResume = function () {
      this.sound.mute = false;
      a.Gameplay.isAdsPause = false;
    };
    e.prototype.adsPause = function () {
      this.sound.mute = true;
      a.Gameplay.isAdsPause = true;
      if (d.default.instance.signalPause) {
        d.default.instance.signalPause.dispatch();
      }
    };
    return e;
  }(Phaser.Game);
  t.Game = e;
})(p ||= {});
new p.Game();