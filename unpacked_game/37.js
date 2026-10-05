exports.__esModule = true;
var s = require("./1.js");
var n = require("./2.js");
var a = function () {
  function t(t, e, i) {
    var n = this;
    this.carSaves = {};
    this.game = t;
    this.callback = e;
    this.callbackContext = i;
    if (this.game) {
      this.game.storage.getItem(s.Constants.STORAGE_KEY).then(function (t) {
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
  }
  t.prototype.initFirstSave = function () {
    n.Inventory.instance.init();
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
  t.prototype.save = function () {
    var t = JSON.stringify({
      invsav: n.Inventory.instance.save
    });
    var e = this.hash(t);
    this.game.storage.setItem(s.Constants.STORAGE_KEY, t);
    this.game.storage.setItem(s.Constants.STORAGE_KEY + "h", e);
  };
  t.prototype.restore = function () {
    var t = this;
    var e = this.game.storage.getItem(s.Constants.STORAGE_KEY);
    var i = this.game.storage.getItem(s.Constants.STORAGE_KEY + "h");
    var a;
    var o;
    Promise.all([e, i]).then(function (e) {
      a = e[0] || "";
      o = e[1] || "0";
      if (a === "") {
        t.initFirstSave();
        if (t.callback && t.callbackContext) {
          t.callback.call(t.callbackContext);
        }
        return;
      }
      if (o !== t.hash(a)) {
        t.initFirstSave();
        if (t.callback && t.callbackContext) {
          t.callback.call(t.callbackContext);
        }
        return;
      }
      if (a && a !== "") {
        try {
          var i = JSON.parse(a);
          n.Inventory.instance.save = i.invsav;
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
exports.default = a;