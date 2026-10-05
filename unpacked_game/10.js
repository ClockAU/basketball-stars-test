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
var n = function (t) {
  function e(e, i, s, n, a, o, r) {
    var h = t.call(this, e, i, s, n, a) || this;
    h.maxWidth = o;
    h.maxHeight = r;
    h.game.add.existing(h);
    return h;
  }
  s(e, t);
  e.prototype.setText = function (e) {
    t.prototype.setText.call(this, e);
    if (this.maxWidth || this.maxHeight) {
      this.makeFontFit();
    }
    return this;
  };
  e.prototype.setMaxSize = function (t, e) {
    this.maxWidth = t;
    this.maxHeight = e;
  };
  e.prototype.makeFontFit = function () {
    var t = 10;
    var e;
    while (this.width > this.maxWidth || this.height > this.maxHeight) {
      if ((e = parseInt(this.fontSize.toString().replace("px", ""), 10) - 1) < 10) {
        e = 10;
        this.fontSize = e;
        break;
      }
      this.fontSize = e;
    }
  };
  return e;
}(Phaser.Text);
exports.default = n;