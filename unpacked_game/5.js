exports.__esModule = true;
var s = require("./11.js");
var n = function () {
  function t(t) {
    this.music = null;
    this.audioInstances = {};
    this.sound = t.sound;
  }
  t.getInstance = function (e) {
    if (t.instance === null) {
      if (!e) {
        throw new Error("Cant create a new instance without a game");
      }
      t.instance = new t(e);
    }
    return t.instance;
  };
  t.prototype.play = function (t, e = 1, i = false) {
    if (!this.audioInstances.hasOwnProperty(t)) {
      this.audioInstances[t] = this.sound.add(t);
    }
    if (s.default.getInstance().sfx) {
      this.audioInstances[t].play(undefined, undefined, e, i, true);
      return this.audioInstances[t];
    } else {
      return this.audioInstances[t].play(undefined, undefined, 0, i, true);
    }
  };
  t.prototype.stop = function (t) {
    if (this.audioInstances.hasOwnProperty(t)) {
      this.audioInstances[t].stop();
    }
  };
  t.prototype.playMusic = function (t) {
    if (!s.default.getInstance().music) {
      this.music = this.sound.play(t, 0.5, true);
      this.music.stop();
      return;
    }
    if (this.music === null || this.music.name !== t) {
      if (this.music !== null && this.music.name !== t) {
        this.music.stop();
      }
      this.music = this.sound.play(t, 0.5, true);
    }
  };
  t.prototype.fadeMusicVolume = function (t, e) {
    if (this.music) {
      this.music.fadeTo(t, e);
    }
  };
  t.prototype.stopMusic = function () {
    if (this.music !== null && this.music.isPlaying) {
      this.music.stop();
    }
  };
  t.prototype.toggleSfx = function () {
    s.default.getInstance().sfx = !s.default.getInstance().sfx;
  };
  t.prototype.toggleMusic = function () {
    s.default.getInstance().music = !s.default.getInstance().music;
    if (s.default.getInstance().music) {
      if (this.music) {
        this.music.play(undefined, undefined, 1, true);
      }
    } else if (this.music && this.music.isPlaying) {
      this.stopMusic();
    }
  };
  t.instance = null;
  return t;
}();
exports.default = n;