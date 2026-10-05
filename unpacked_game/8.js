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
var n = require("./10.js");
var a = require("./7.js");
var o = function (t) {
  function e(e, i, s, o, r, h = null) {
    var l = t.call(this, e) || this;
    l._colorFront = "#000000";
    l._thickFront = 7;
    l._colorBack = "#FFFFFF";
    l._thickBack = 15;
    l._callback = null;
    l._context = null;
    l.inputEnableChildren = true;
    l.btn = new a.default(e, i, s, o, r, h);
    l.label = new n.default(l.game, 0, 2, i, s);
    l.label.anchor.set(0.5);
    if (o !== null && r !== null) {
      l.label.inputEnabled = true;
      l.btn.label.inputEnabled = true;
      l.btn.label.input.useHandCursor = true;
      l._callback = o;
      l._context = r;
    }
    l.addChild(l.btn);
    l.btn.label.parent.addChildAt(l.label, 0);
    l.game.add.existing(l);
    return l;
  }
  s(e, t);
  e.prototype.drawRectHit = function () {
    var t = 1;
    var e = this.game.make.graphics();
    e.beginFill(16711680, 0);
    e.drawRect(this.width * 1 / -2, this.height * 1 / -2, this.width * 1, this.height * 1);
    e.endFill();
    e.inputEnabled = true;
    this.btn.label.parent.inputEnableChildren = true;
    this.btn.label.parent.onChildInputDown.add(this._callback, this._context);
    this.btn.label.parent.addChild(e);
  };
  e.prototype.setProp = function (t = null, e = null, i = null, s = null) {
    if (t !== null) {
      this._colorFront = t;
    }
    if (i !== null) {
      this._colorBack = i;
    }
    if (s !== null) {
      this._thickBack = s;
    }
    if (e !== null) {
      this._thickFront = e;
    }
    this.btn.label.stroke = this._colorFront;
    this.btn.label.strokeThickness = this._thickFront;
    this.label.stroke = this._colorBack;
    this.label.strokeThickness = this._thickBack;
    if (this._callback !== null && this._context !== null) {
      this.drawRectHit();
    }
  };
  e.prototype.setText = function (t) {
    this.label.setText(t);
    this.btn.setText(t);
  };
  e.prototype.setFrames = function (t, e, i, s) {
    this.btn.setFrames(t, e, i, s);
  };
  e.prototype.destroy = function (e) {
    this.btn = null;
    this.label = null;
    this._callback = null;
    this._context = null;
    t.prototype.destroy.call(this, e);
  };
  Object.defineProperty(e.prototype, "enable", {
    get: function () {
      return this.btn.enable;
    },
    set: function (t) {
      this.btn.enable = t;
    },
    enumerable: true,
    configurable: true
  });
  return e;
}(Phaser.Group);
exports.default = o;