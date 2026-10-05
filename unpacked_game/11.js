exports.__esModule = true;
var s = require("./1.js");
var n = function () {
  function t(t, e, i) {
    var n = this;
    this.musicOn = true;
    this.sfxOn = true;
    this.game = t;
    this.callback = e;
    this.callbackContext = i;
    this.game.storage.getItem(s.Constants.STORAGE_KEY_SFX).then(function (t) {
      if (t === null || t === undefined) {
        n.initFirstSave();
        if (n.callback && n.callbackContext) {
          n.callback.call(n.callbackContext);
        }
      } else {
        n.restore();
      }
    });
  }
  t.prototype.initFirstSave = function () {
    this.sfxOn = true;
    this.musicOn = true;
    this.save();
  };
  t.getInstance = function (e, i, s) {
    if (t.instance) {
      if (s) {
        i.call(s);
      }
    } else {
      t.instance = new t(e, i, s);
    }
    return t.instance;
  };
  Object.defineProperty(t.prototype, "music", {
    get: function () {
      return this.musicOn;
    },
    set: function (t) {
      this.musicOn = t;
      this.save();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "sfx", {
    get: function () {
      return this.sfxOn;
    },
    set: function (t) {
      this.sfxOn = t;
      this.save();
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.save = function () {
    var t = JSON.stringify({
      m: this.musicOn,
      sf: this.sfxOn
    });
    var e = this.hash(t);
    this.game.storage.setItem(s.Constants.STORAGE_KEY_SFX, t);
    this.game.storage.setItem(s.Constants.STORAGE_KEY_SFX + "h", e);
  };
  t.prototype.restore = function () {
    var t = this;
    var e = this.game.storage.getItem(s.Constants.STORAGE_KEY_SFX);
    var i = this.game.storage.getItem(s.Constants.STORAGE_KEY_SFX + "h");
    var n;
    var a;
    Promise.all([e, i]).then(function (e) {
      n = e[0] || "";
      a = e[1] || "0";
      if (n === "") {
        t.initFirstSave();
        if (t.callback && t.callbackContext) {
          t.callback.call(t.callbackContext);
        }
        return;
      }
      if (a !== t.hash(n)) {
        t.initFirstSave();
        if (t.callback && t.callbackContext) {
          t.callback.call(t.callbackContext);
        }
        return;
      }
      if (n && n !== "") {
        try {
          var i = JSON.parse(n);
          t.musicOn = i.m;
          t.sfxOn = i.sf;
        } catch (e) {
          t.initFirstSave();
        }
      } else {
        t.initFirstSave();
      }
      if (t.callback && t.callbackContext) {
        t.callback.call(t.callbackContext);
      }
    });
  };
  t.prototype.hash = function (t) {
    var e = 0;
    var i;
    var s;
    var n;
    if (t.length === 0) {
      return e.toString();
    }
    i = 0;
    n = t.length;
    for (; i < n; i++) {
      s = t.charCodeAt(i);
      e = (e << 5) - e + s;
      e |= 0;
    }
    return e.toString();
  };
  return t;
}();
exports.default = n;