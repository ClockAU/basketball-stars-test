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
var n = require("./2.js");
var a = require("./19.js");
var o = require("./3.js");
var r = require("./8.js");
var h = require("./1.js");
var l = require("./0.js");
var c = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.msg = null;
    e.graphic = o.default.game.add.group();
    e.msg = new r.default(o.default.game, "GO!!!", h.Constants.styleMSG, null, null, h.Atlases.Gameplay);
    e.msg.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    e.msg.setProp("#000000", 7, "#FFFFFF", 14);
    e.msg.btn.label.setMaxSize(400, 110);
    e.graphic.addChild(e.msg);
    e.graphic.x = 400;
    e.graphic.y = 170;
    e.hide();
    e.objType = a.ObjectsType.INFO;
    e.timer = 0;
    e.curentFrame = 1;
    t.prototype.add.call(e);
    return e;
  }
  s(e, t);
  e.prototype.activate = function () {
    this.graphic.visible = true;
    this.msg.setText("");
    this.timer = 0;
    this.curentFrame = 1;
  };
  e.prototype.tween = function (t) {
    if (t >= 3) {
      this.msg.setText(" GO!!!");
    } else {
      this.msg.setText("" + (3 - t));
    }
    this.curentFrame = t;
    this.graphic.scale.set(1);
    this.graphic.visible = true;
    o.default.game.add.tween(this.graphic.scale).from({
      x: 0.2,
      y: 0.2
    }, 100, l.Easing.Back.Out, true);
  };
  e.prototype.hide = function () {
    this.graphic.visible = false;
  };
  e.prototype.process = function (t = 0) {
    this.timer += t;
    var e = Math.floor(this.timer * 3);
    if (e === 4) {
      this.hide();
      return true;
    } else {
      if (e !== this.curentFrame) {
        this.tween(e);
      }
      return false;
    }
  };
  e.prototype.release = function () {
    t.prototype.release.call(this);
  };
  e.prototype.dispose = function () {};
  return e;
}(n.GameObject);
exports.CountDownObject = c;