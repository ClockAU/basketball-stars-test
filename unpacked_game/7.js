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
var a = function (t) {
  function e(e, i, s, a, o, r = null) {
    var h = t.call(this, e) || this;
    h._labelState = null;
    h._enable = true;
    h._graphics = null;
    h._texts = null;
    h._dynamicScaleUp = 1.1;
    h._dynamicScaleDown = 0.9;
    h._sScale = 1;
    h._sLabelScale = 1;
    h.inputEnableChildren = true;
    h._graphics = h.game.add.group(h);
    h._texts = h.game.add.group(h);
    h.btn = h.game.add.button(0, 0, r, a, o);
    h.btn.anchor.set(0.5);
    h._graphics.addChild(h.btn);
    h.label = new n.default(h.game, 0, 2, i, s, 70, 40);
    h.label.anchor.set(0.5);
    h._texts.addChild(h.label);
    if (a !== null && o !== null) {
      h.label.inputEnabled = true;
      h.label.events.onInputDown.add(a, o);
      h._graphics.inputEnableChildren = true;
      h._graphics.onChildInputOver.add(h.onOver, h);
      h._graphics.onChildInputDown.add(h.onDownLabel, h);
      h._graphics.onChildInputOut.add(h.onOut, h);
      h._graphics.onChildInputUp.add(h.onOut, h);
      h._texts.inputEnableChildren = true;
      h._texts.onChildInputOver.add(h.onOver, h);
      h._texts.onChildInputDown.add(h.onDownLabel, h);
      h._texts.onChildInputOut.add(h.onOut, h);
    } else {
      h._graphics.inputEnableChildren = false;
      h._texts.inputEnableChildren = false;
      h.btn.inputEnabled = false;
    }
    h.game.add.existing(h);
    return h;
  }
  s(e, t);
  Object.defineProperty(e.prototype, "labelState", {
    get: function () {
      return this._labelState;
    },
    set: function (t) {
      this._labelState = t;
      this._texts.addChild(t);
      this._labelState.anchor.set(0.5);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(e.prototype, "sScale", {
    set: function (t) {
      this._sScale = t;
      this._graphics.scale.set(this._sScale);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(e.prototype, "sLabelScale", {
    set: function (t) {
      this._sLabelScale = t;
      this._texts.scale.set(this._sLabelScale);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(e.prototype, "dynamicScaleDown", {
    set: function (t) {
      this._dynamicScaleDown = t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(e.prototype, "dynamicScaleUp", {
    set: function (t) {
      this._dynamicScaleUp = t;
    },
    enumerable: true,
    configurable: true
  });
  e.prototype.onOver = function () {
    this._graphics.scale.set(this._sScale * this._dynamicScaleUp);
    this._texts.scale.set(this._sLabelScale * this._dynamicScaleUp);
  };
  e.prototype.onDownLabel = function () {
    this._graphics.scale.set(this._sScale * this._dynamicScaleDown);
    this._texts.scale.set(this._sLabelScale * this._dynamicScaleDown);
  };
  e.prototype.onOut = function () {
    this._graphics.scale.set(this._sScale);
    this._texts.scale.set(this._sLabelScale);
  };
  e.prototype.setText = function (t) {
    this.label.setText(t);
  };
  e.prototype.setFrames = function (t, e, i, s) {
    this.btn.setFrames(t, e, i, s);
  };
  e.prototype.destroy = function (e) {
    this.id = null;
    this.label = null;
    this.btn = null;
    this._graphics = null;
    this._texts = null;
    this._labelState = null;
    t.prototype.destroy.call(this, e);
  };
  Object.defineProperty(e.prototype, "enable", {
    get: function () {
      return this._enable;
    },
    set: function (t) {
      if (this._enable !== t) {
        this._enable = t;
        this.btn.inputEnabled = this._enable;
        if (this._enable) {
          this.btn.tint = 16777215;
          this.label.tint = 16777215;
        } else {
          this.btn.tint = 10066329;
          this.label.tint = 10066329;
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  return e;
}(Phaser.Group);
exports.default = a;