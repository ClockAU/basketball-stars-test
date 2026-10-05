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
var n = require("./62.js");
var a = require("./1.js");
var o = require("./3.js");
var r = require("./16.js");
var h = require("./50.js");
var l = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    return i;
  }
  s(e, t);
  e.prototype.init = function () {
    var t = this;
    this.game.canvas.oncontextmenu = function (t) {
      t.preventDefault();
    };
    this.game.input.maxPointers = 3;
    this.game.input.addPointer();
    this.game.input.addPointer();
    this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;
    window.addEventListener("resize", function () {
      return e.mobileResizeCallback(t.game.scale);
    });
    this.game.scale.onSizeChange.add(function () {
      if (a.Constants.LANDSCAPE_LOCKED && !t.game.device.desktop) {
        if (t.game.width > t.game.height) {
          t.handleCorrect();
        } else {
          t.handleIncorrect();
        }
      } else if (a.Constants.PORTRAIT_LOCKED && !t.game.device.desktop) {
        if (t.game.width < t.game.height) {
          t.handleCorrect();
        } else {
          t.handleIncorrect();
        }
      }
      t.game.state.getCurrentState().resize();
    }, this);
    e.mobileResizeCallback(this.game.scale);
    document.addEventListener("pause", function () {
      t.game.sound.mute = true;
    });
    document.addEventListener("resume", function () {
      t.game.sound.mute = false;
    });
    this.stage.disableVisibilityChange = false;
    this.game.onPause.add(function () {
      t.game.sound.mute = true;
    });
    this.game.onResume.add(function () {
      t.game.sound.mute = false;
    });
  };
  e.mobileResizeCallback = function (t) {
    var i = window.innerWidth;
    var s = window.innerHeight;
    if (s === 0) {
      s = 1;
    }
    if (i === 0) {
      i = 1;
    }
    e.setScaling(t.game);
    var n = a.Constants.GAME_SCALE * 1066;
    var o = a.Constants.GAME_SCALE * 640;
    var r = 1;
    r /= i > s ? s / o : s / n;
    a.Constants.WIDTH = 1066;
    a.Constants.HEIGHT = 640;
    a.Constants.CALCULATED_WIDTH = Math.ceil(i * r);
    a.Constants.CALCULATED_HEIGHT = Math.ceil(s * r);
    t.setGameSize(a.Constants.CALCULATED_WIDTH, a.Constants.CALCULATED_HEIGHT);
    t.setUserScale(1 / r, 1 / r);
    if (a.Constants.LANDSCAPE_LOCKED && !t.game.device.desktop) {
      if (t.game.width > t.game.height) {
        document.getElementById("orientation").style.display = "none";
        document.getElementById("content").style.display = "block";
      } else {
        document.getElementById("orientation").style.display = "block";
        document.getElementById("content").style.display = "none";
      }
    }
  };
  e.setScaling = function (t) {
    var e = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;
    e *= t.device.pixelRatio;
    a.Constants.GAME_SCALE = 1;
  };
  e.prototype.preload = function () {
    var t = this;
    this.game.load.cacheBuster = 1558962904517;
    var e = "x" + a.Constants.GAME_SCALE + "/";
    a.Images.preloadList.forEach(function (i) {
      t.game.load.image(i, "assets/images/" + e + i + ".png");
    });
    a.JSONData.preloadList.forEach(function (e) {
      t.game.load.json(e, "assets/data/" + e + ".json");
    });
    a.Atlases.preloadList.forEach(function (i) {
      t.game.load.atlas(i, "assets/atlases/" + e + i + ".png", "assets/atlases/" + e + i + ".json");
    });
    a.Sounds.preloadList.forEach(function (e) {
      if (t.game.device.iOS) {
        t.game.load.audio(e, ["assets/sounds/" + e + ".m4a"]);
      } else {
        t.game.load.audio(e, ["assets/sounds/" + e + ".ogg", "assets/sounds/" + e + ".mp3"]);
      }
    });
  };
  e.prototype.create = function () {
    n.default.hide();
    if (r.default.Current === r.default.YEP10) {
      this.game.state.start(o.default.Name);
    } else {
      this.game.state.start(h.default.Name);
    }
  };
  e.prototype.handleCorrect = function () {
    document.getElementById("orientation").style.display = "none";
    document.getElementById("content").style.display = "block";
  };
  e.prototype.handleIncorrect = function () {
    document.getElementById("orientation").style.display = "block";
    document.getElementById("content").style.display = "none";
  };
  e.Name = "boot";
  return e;
}(Phaser.State);
exports.default = l;