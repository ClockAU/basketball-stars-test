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
var o = require("./2.js");
var r = require("./8.js");
var h = require("./5.js");
var l = require("./10.js");
var c = function (t) {
  function e(e) {
    var i = t.call(this, n.default.game) || this;
    i.context = null;
    i.context = e;
    i.bg = i.game.add.sprite(0, 0, a.Atlases.Interface, "0bg130000");
    i.bg.anchor.set(0.5);
    i.addChild(i.bg);
    var s = {
      font: "bold 42px Impact2",
      fill: "#FFFFFF"
    };
    i.ccc = new l.default(i.game, 0, -90, "MODE", s);
    i.ccc.anchor.set(0.5);
    i.addChild(i.ccc);
    i.btn1 = new r.default(i.game, "VS", a.Constants.styleVS, i.onGameModeClick, i, a.Atlases.Interface);
    i.btn2 = new r.default(i.game, "VS", a.Constants.styleVS, i.onGameModeClick, i, a.Atlases.Interface);
    i.btn3 = new r.default(i.game, "VS", a.Constants.styleVS, i.onGameModeClick, i, a.Atlases.Interface);
    i.btnSelect = new r.default(i.game, "VS", a.Constants.styleVS2, null, null, a.Atlases.Interface);
    i.btn1.y = -30;
    i.btn2.y = 30;
    i.btn3.y = 90;
    i.btn1.btn.id = "1";
    i.btn2.btn.id = "2";
    i.btn3.btn.id = "3";
    i.btn1.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.btn2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.btn3.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    i.btnSelect.setFrames("selectModeBg0000", "selectModeBg0000", "selectModeBg0000", "selectModeBg0000");
    i.btn1.setProp("#000000", 3, "#FFFFFF", 5);
    i.btn2.setProp("#000000", 3, "#FFFFFF", 5);
    i.btn3.setProp("#000000", 3, "#FFFFFF", 5);
    i.btnSelect.setProp("#000000", 3, "#FFFFFF", 5);
    i.addChild(i.btn1);
    i.addChild(i.btn2);
    i.addChild(i.btn3);
    i.addChild(i.btnSelect);
    var h = i.game.add.image(-47, 0, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn1.btn.addChild(h);
    h = i.game.add.image(47, 0, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn1.btn.addChild(h);
    h = i.game.add.image(-55, -2, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn2.btn.addChild(h);
    h = i.game.add.image(-35, 2, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn2.btn.addChild(h);
    h = i.game.add.image(55, -2, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn2.btn.addChild(h);
    h = i.game.add.image(35, 2, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn2.btn.addChild(h);
    h = i.game.add.image(55, -2, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn3.btn.addChild(h);
    h = i.game.add.image(35, 2, a.Atlases.Interface, "iconPl0000");
    h.anchor.set(0.5);
    i.btn3.btn.addChild(h);
    if (o.Inventory.instance.gameMode !== 4) {
      h = i.game.add.image(-45, 0, a.Atlases.Interface, "iconPl0000");
      h.anchor.set(0.5);
      i.btn3.btn.addChild(h);
      i.bg.crop(new Phaser.Rectangle(0, 0, 162, 100), false);
      i.bg.anchor.set(0.5, 1);
      i.bg.y -= 30;
      var c = i.game.add.sprite(0, -30, a.Atlases.Interface, "0bg130000");
      c.anchor.set(0.5, 1);
      c.crop(new Phaser.Rectangle(0, 0, 162, 100), false);
      c.angle = 180;
      i.addChildAt(c, 0);
      i.btn3.visible = false;
    } else {
      h = i.game.add.image(-55, -2, a.Atlases.Interface, "iconPl0000");
      h.anchor.set(0.5);
      i.btn3.btn.addChild(h);
      h = i.game.add.image(-35, 2, a.Atlases.Interface, "iconPl0000");
      h.anchor.set(0.5);
      i.btn3.btn.addChild(h);
      i.cpu = new r.default(i.game, "CPU", a.Constants.styleCPU, null, null, a.Atlases.Interface);
      i.cpu.x = 60;
      i.cpu.y = 15;
      i.cpu.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      i.cpu.setProp("#000000", 3, "#FFFFFF", 5);
      i.btn3.addChild(i.cpu);
      i.cpu2 = new r.default(i.game, "CPU", a.Constants.styleCPU2, null, null, a.Atlases.Interface);
      i.cpu2.x = 60;
      i.cpu2.y = 15;
      i.cpu2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      i.cpu2.setProp("#000000", 3, "#FFFFFF", 5);
      i.btn3.addChild(i.cpu2);
      i.cpu2.visible = false;
    }
    i.setButtonsState(o.Inventory.instance.matchData.matchMode);
    i.btn1.btn.dynamicScaleDown = 1;
    i.btn1.btn.dynamicScaleUp = 1;
    i.btn2.btn.dynamicScaleDown = 1;
    i.btn2.btn.dynamicScaleUp = 1;
    i.btn3.btn.dynamicScaleDown = 1;
    i.btn3.btn.dynamicScaleUp = 1;
    i.btn1.btn.btn.scale.set(13, 5);
    i.btn2.btn.btn.scale.set(14, 5);
    i.btn3.btn.btn.scale.set(14, 5);
    return i;
  }
  s(e, t);
  e.prototype.onGameModeClick = function (t) {
    h.default.getInstance().play(a.Sounds.button);
    var e = parseInt(t.parent.parent.id) - 1;
    o.Inventory.instance.matchData.matchMode = e;
    this.setButtonsState(e);
    if (this.context !== null) {
      this.context.processMatchMode();
    }
  };
  e.prototype.updateIcon = function (t, e) {
    for (var i = 2; i < t.btn.children.length; i++) {
      var s = t.btn.children[i];
      this.updateSingleIcon(s, e);
      if (e === 1) {
        this.btnSelect.x = t.x;
        this.btnSelect.y = t.y;
      }
    }
  };
  e.prototype.updateSingleIcon = function (t, e) {
    t.loadTexture(a.Atlases.Interface, "iconPl000" + e);
  };
  e.prototype.setButtonsState = function (t) {
    if (t === 0) {
      this.updateIcon(this.btn1, 1);
      this.updateIcon(this.btn2, 0);
      this.updateIcon(this.btn3, 0);
      if (o.Inventory.instance.gameMode === 4) {
        this.cpu.visible = true;
        this.cpu2.visible = false;
      }
    } else if (t === 1) {
      this.updateIcon(this.btn1, 0);
      this.updateIcon(this.btn2, 1);
      this.updateIcon(this.btn3, 0);
      if (o.Inventory.instance.gameMode === 4) {
        this.cpu.visible = true;
        this.cpu2.visible = false;
      }
    } else if (t === 2) {
      this.updateIcon(this.btn1, 0);
      this.updateIcon(this.btn2, 0);
      this.updateIcon(this.btn3, 1);
      if (o.Inventory.instance.gameMode === 4) {
        this.cpu.visible = false;
        this.cpu2.visible = true;
      }
    }
  };
  e.prototype.hideBG = function () {
    this.bg.visible = false;
    this.ccc.visible = false;
  };
  e.prototype.showCurrentMode = function () {
    this.btn1.y = this.btn2.y = this.btn3.y = this.btnSelect.y = 0;
    if (o.Inventory.instance.matchData.matchMode === 0) {
      this.btn1.visible = true;
      this.btn2.visible = false;
      this.btn3.visible = false;
    } else if (o.Inventory.instance.matchData.matchMode === 1) {
      this.btn1.visible = false;
      this.btn2.visible = true;
      this.btn3.visible = false;
    } else if (o.Inventory.instance.matchData.matchMode === 2) {
      this.btn1.visible = false;
      this.btn2.visible = false;
      this.btn3.visible = true;
    }
  };
  e.prototype.destroy = function () {
    this.btn1 = null;
    this.btn2 = null;
    this.btn3 = null;
    this.context = null;
    t.prototype.destroy.call(this);
  };
  return e;
}(Phaser.Group);
exports.MatchModePanel = c;