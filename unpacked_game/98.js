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
var n = require("./3.js");
var a = require("./1.js");
var o = require("./20.js");
var r = require("./7.js");
var h = function (t) {
  function e(e, i, s) {
    var o = t.call(this, n.default.game) || this;
    o.bg = null;
    o.frame = 0;
    o.curTime = 0;
    o.fullTime = s;
    o.bg = o.game.make.sprite(0, 1, a.Atlases.Gameplay, "btn_bg20000");
    o.bg.anchor.set(0.5);
    o.bg.scale.set(1.1);
    o.addChild(o.bg);
    var h = "Z";
    if (e === 0) {
      o.x = 45;
    } else if (e === 1) {
      o.x = 185;
      h = "V";
    } else if (e === 2) {
      o.x = 614;
      h = "K";
    }
    o.energyBar = o.game.make.sprite(0, 0, a.Atlases.Gameplay, "icon_ball000" + i);
    o.energyBarForMask = o.game.make.sprite(0, 0, a.Atlases.Gameplay, "icon_ball2000" + i);
    o.hint = new r.default(o.game, h, a.Constants.styleHintSkillKey, null, null, a.Atlases.Gameplay);
    o.hint.setFrames("key_hint0000", "key_hint0000", "key_hint0000", "key_hint0000");
    o.hint.x = -30;
    o.hint.y = 30;
    o.y = 45;
    o.energyBar.anchor.set(0.5);
    o.energyBarForMask.anchor.set(0.5);
    o.addChild(o.energyBar);
    o.addChild(o.energyBarForMask);
    o.addChild(o.hint);
    o.energyBarMask = o.game.add.graphics(0, 0, o);
    o.energyBarForMask.mask = o.energyBarMask;
    return o;
  }
  s(e, t);
  e.prototype.reset = function () {
    this.curTime = 0;
    this.energyBarForMask.visible = true;
    this.energyBarMask.rotation = 0;
    this.update(0);
    this.energyBarForMask.mask = this.energyBarMask;
  };
  e.prototype.update = function (t = 0) {
    this.curTime += t;
    this.energyBarMask.clear();
    if (this.curTime >= this.fullTime) {
      this.energyBarForMask.visible = false;
      return true;
    }
    this.frame = this.curTime * 36 / this.fullTime >> 0;
    this.energyBarMask.beginFill(16711680, 0.5);
    this.energyBarMask.arc(0, 0, 36.5, 0, o.default.TO_RAD * (this.frame * 10), true);
    this.energyBarMask.endFill();
    this.energyBarMask.rotation = o.default.TO_RAD * (-90 - this.frame * 10);
  };
  e.prototype.dispose = function () {
    this.energyBar = null;
    this.energyBarMask = null;
    this.bg = null;
    this.curTime = 0;
    this.hint = null;
    this.energyBarForMask = null;
  };
  return e;
}(Phaser.Group);
exports.EnergyBar = h;