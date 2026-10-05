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
var o = require("./8.js");
var r = require("./7.js");
var h = function (t) {
  function e(e = true) {
    var i = t.call(this, n.default.game) || this;
    i.popup = null;
    i.isRegister = false;
    i.title = null;
    i.signalOk = new Phaser.Signal();
    i.signalRegister = new Phaser.Signal();
    i.signalCancel = new Phaser.Signal();
    i.signalClose = new Phaser.Signal();
    i.linesRegister = ["use                            ", " with                  skills and", " to get                    team"];
    i.linesRegisterYellow = ["           ONLINE SAVE", "SUPER          ", "  Y8.COM"];
    i.linesForum = [" ", " ", "Discuss the game,", "chat with players,", "get useful tips"];
    i.isRegister = e;
    i.createGraphics();
    return i;
  }
  s(e, t);
  e.prototype.createGraphics = function () {
    this.createPopup();
    var t = null;
    var e = null;
    var i = null;
    var s = null;
    var n = null;
    var h = null;
    if (this.isRegister) {
      this.title = new o.default(this.game, "REGISTER  to          ", a.Constants.styleCredits5, null, null, a.Atlases.Interface);
      this.title.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      this.title.setProp("#000000", 5, "#FFFFFF", 11);
      this.title.y = -180;
      this.popup.getChildAt(1).addChild(this.title);
      var l = this.game.add.image(this.title.x + 100, this.title.y, a.Atlases.Preloader, "branding_l20000");
      l.anchor.set(0.5);
      l.scale.set(0.46);
      this.popup.getChildAt(1).addChild(l);
      this.buildText(this.linesRegister, -30);
      this.buildText(this.linesRegisterYellow, -30, a.Constants.stylePopupContentYellow);
      t = new Phaser.Image(this.game, 0, -155, a.Atlases.Interface, "line0000");
      t.anchor.set(0.5);
      this.popup.getChildAt(1).addChild(t);
      t = new Phaser.Image(this.game, 0, -55, a.Atlases.Interface, "line0000");
      t.anchor.set(0.5);
      this.popup.getChildAt(1).addChild(t);
      s = new o.default(this.game, "REGISTER", a.Constants.stylePopupPlay, this.onRegister, this, a.Atlases.Interface);
      s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      s.setProp("#000000", 5, "#FFFFFF", 11);
      s.x = -70;
      s.y = 145;
      s.scale.set(0.65, 1);
      this.popup.getChildAt(1).addChild(s);
      n = new o.default(this.game, "CANCEL", a.Constants.stylePopupCancel, this.onCancel, this, a.Atlases.Interface);
      n.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      n.setProp("#000000", 5, "#FFFFFF", 11);
      n.x = 100;
      n.y = 145;
      n.scale.set(0.65, 1);
      this.popup.getChildAt(1).addChild(n);
    } else {
      this.title = new o.default(this.game, "CHECK OUT!", a.Constants.styleCredits33, null, null, a.Atlases.Interface);
      this.title.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      this.title.setProp("#000000", 6, "#FFFFFF", 13);
      this.title.y = -135;
      this.popup.getChildAt(1).addChild(this.title);
      this.buildText(this.linesForum, 30);
      t = new Phaser.Image(this.game, 0, -100, a.Atlases.Interface, "line0000");
      t.anchor.set(0.5);
      t.scale.set(1.5, 1);
      this.popup.getChildAt(1).addChild(t);
      t = new Phaser.Image(this.game, 0, -40, a.Atlases.Interface, "line0000");
      t.anchor.set(0.5);
      t.scale.set(1.5, 1);
      this.popup.getChildAt(1).addChild(t);
      t = new Phaser.Image(this.game, 0, 70, a.Atlases.Interface, "line0000");
      t.anchor.set(0.5);
      t.scale.set(1.5, 1);
      this.popup.getChildAt(1).addChild(t);
      e = new o.default(this.game, "OK", a.Constants.stylePlayGreen, this.onOk, this, a.Atlases.Interface);
      e.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      e.setProp("#000000", 7, "#FFFFFF", 15);
      e.x = 0;
      e.y = 125;
      this.popup.getChildAt(1).addChild(e);
      i = new r.default(this.game, "forum", a.Constants.stylePopupContent2, this.onOk, this, a.Atlases.Preloader);
      i.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000");
      i.x = 0;
      i.y = -70;
      i.label.x = 75;
      i.btn.x = -65;
      i.btn.scale.set(0.75);
      i.label.stroke = "#FFFFFF";
      i.label.strokeThickness = 4;
      this.popup.getChildAt(1).addChild(i);
      h = new r.default(this.game, "", a.Constants.stylePlayGreen, this.onClose, this, a.Atlases.Interface);
      h.setFrames("close0000", "close0000", "close0000", "close0000");
      h.x = 156;
      h.y = -179;
      this.popup.getChildAt(1).addChild(h);
    }
    this.resize(1);
  };
  e.prototype.onOk = function () {
    this.signalOk.dispatch();
    this.closePopup();
  };
  e.prototype.onRegister = function () {
    this.signalRegister.dispatch();
    this.closePopup();
  };
  e.prototype.onCancel = function () {
    this.signalCancel.dispatch();
    this.closePopup();
  };
  e.prototype.onClose = function () {
    this.signalClose.dispatch();
    this.closePopup();
  };
  e.prototype.closePopup = function () {
    this.popup.destroy();
  };
  e.prototype.buildText = function (t = null, e = 30, i = a.Constants.stylePopupContent) {
    var s;
    if (t === null) {
      t = [" ", " ", " ", " ", " ", "Ported by iriysoft.com"];
    }
    for (var n = 0; n < t.length; n++) {
      s = new r.default(this.game, t[n], i, null, null, a.Atlases.Interface);
      s.y = n * e - 75;
      s.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
      s.btn.inputEnabled = false;
      this.popup.getChildAt(1).addChild(s);
    }
  };
  e.prototype.disposePopup = function () {
    this.popup.destroy();
    this.popup = null;
  };
  e.prototype.backgroundPopup = function () {
    this.popup = this.game.add.sprite(350, 280, a.Atlases.Interface, "bg0000");
    this.popup.anchor.set(0.5);
    this.popup.scale.set(1.33333);
    var t = this.game.add.sprite(0, 0, a.Atlases.Interface, "black0000");
    t.width = this.game.width + 500;
    t.height = this.game.height + 500;
    t.inputEnabled = true;
    t.anchor.set(0.5);
    t.alpha = 0.5;
    this.popup.addChild(t);
  };
  e.prototype.createPopup = function (t = "0bg100000") {
    if (this.popup !== null) {
      this.disposePopup();
    }
    this.backgroundPopup();
    var e = this.game.add.sprite(0, 0, a.Atlases.Interface, "bg0000");
    e.anchor.set(0.5);
    e.inputEnabled = true;
    this.popup.addChild(e);
    var i = this.game.add.sprite(0, 0, a.Atlases.Interface, t);
    i.anchor.set(0.5);
    e.addChild(i);
    if (t !== "0bg100000") {
      i.scale.set(1.5, 1.3);
      i.y = -30;
    }
  };
  e.prototype.resize = function (t) {
    var e = this.popup.removeChildAt(0);
    e.width = this.game.width + 500;
    e.height = this.game.height + 500;
    this.popup.x = this.game.world.bounds.centerX;
    this.popup.y = t * 260;
    this.popup.addChildAt(e, 0);
    this.popup.scale.set(t);
  };
  return e;
}(Phaser.Group);
exports.PopupGUI = h;