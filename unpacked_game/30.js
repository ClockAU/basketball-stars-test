exports.__esModule = true;
var s = require("./1.js");
var n = require("./7.js");
var a = require("./14.js");
var o = require("./5.js");
var r = require("./11.js");
var h = require("./4.js");
var l = require("./2.js");
var c = function () {
  function t() {
    this.signalRestart = null;
    this.signalPause = null;
    this.signalToggleMusic = null;
    this.game = null;
    this.scl = 1;
    this.container = null;
  }
  t.prototype.release = function () {
    if (!this.game.device.desktop) {
      if (a.default.instance.container) {
        a.default.instance.container.destroy();
      }
    }
    this.game = null;
    this.helpBtn = null;
    this.pauseBtn = null;
    this.musicBtn = null;
    this.signalToggleMusic.removeAll();
    this.signalRestart.removeAll();
    this.signalPause.removeAll();
    this.signalToggleMusic = null;
    this.signalRestart = null;
    this.signalPause = null;
    this.container.destroy();
    this.container = null;
  };
  t.prototype.init = function (t, e) {
    this.container = t;
    this.game = e;
    this.scl = Math.max(this.game.width, this.game.height) / s.Constants.WIDTH;
    this.scl = this.scl > 1 ? 1 : this.scl;
    this.signalRestart = new Phaser.Signal();
    this.signalPause = new Phaser.Signal();
    this.signalToggleMusic = new Phaser.Signal();
    this.helpBtn = new n.default(this.game, "", {}, this.onHelp, this, s.Atlases.Gameplay);
    this.helpBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.helpBtn.sScale = 42 / this.helpBtn.btn.width * 1.33333;
    this.helpBtn.x = h.default.GAME_W - Math.round(162.66626);
    this.helpBtn.y = Math.round(33.33325);
    this.helpBtn.labelState = this.game.add.image(0, 0, s.Atlases.Gameplay, "InGameHelpButton0000");
    this.pauseBtn = new n.default(this.game, "", {}, this.onPause, this, s.Atlases.Gameplay);
    this.pauseBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.pauseBtn.sScale = 42 / this.pauseBtn.btn.width * 1.33333;
    this.pauseBtn.x = h.default.GAME_W - Math.round(99.99974999999999);
    this.pauseBtn.y = this.helpBtn.y;
    this.pauseBtn.labelState = this.game.add.image(0, 0, s.Atlases.Gameplay, "InGamePauseButton0000");
    this.musicBtn = new n.default(this.game, "", {}, this.toggleMusic, this, s.Atlases.Gameplay);
    this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
    this.musicBtn.sScale = 42 / this.musicBtn.btn.width * 1.33333;
    this.musicBtn.x = h.default.GAME_W - Math.round(37.333239999999996);
    this.musicBtn.y = this.helpBtn.y;
    this.musicBtn.labelState = this.game.add.image(0, 0, s.Atlases.Gameplay, "InGameMusicButton0000");
    this.updateSoundButtons();
    if (this.game.device.desktop) {
      this.container.addChild(this.helpBtn);
    } else {
      this.helpBtn.destroy();
    }
    this.container.addChild(this.pauseBtn);
    this.container.addChild(this.musicBtn);
    if (!this.game.device.desktop) {
      a.default.instance.container.parent.addChild(a.default.instance.container);
    }
  };
  t.prototype.toggleMusic = function () {
    if (r.default.getInstance().music) {
      o.default.getInstance().toggleMusic();
    } else if (r.default.getInstance().sfx) {
      o.default.getInstance().toggleSfx();
    } else {
      o.default.getInstance().toggleSfx();
      o.default.getInstance().toggleMusic();
    }
    this.updateSoundButtons();
    o.default.getInstance().play(s.Sounds.Click);
  };
  t.prototype.updateSoundButtons = function () {
    var t = r.default.getInstance().music ? 0 : 1;
    t += r.default.getInstance().sfx ? 0 : 1;
    this.musicBtn.labelState.loadTexture(s.Atlases.Gameplay, "InGameMusicButton000" + t);
  };
  t.prototype.resize = function (t) {
    if (this.game.width / this.game.height < h.default.GAME_W / h.default.GAME_H) {
      this.container.scale.set(t);
      this.container.x = 0;
    } else {
      this.container.scale.set(t);
      this.container.x = this.game.width / 2 - h.default.DISPLAY_W2;
    }
    if (!this.game.device.desktop) {
      a.default.instance.resize(t);
    }
  };
  t.prototype.onPause = function () {
    this.signalPause.dispatch(l.MainGameCore.PAUSE);
  };
  t.prototype.onHelp = function () {
    this.signalPause.dispatch(l.MainGameCore.HELP);
  };
  Object.defineProperty(t, "instance", {
    get: function () {
      t._instance ||= new t();
      return t._instance;
    },
    enumerable: true,
    configurable: true
  });
  return t;
}();
exports.default = c;