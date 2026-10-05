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
var c = require("./20.js");
var u = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.msg = null;
    e.msg2 = null;
    e.msgGraphics = null;
    e.graphic = o.default.game.add.group();
    e.msgGraphics = o.default.game.add.group();
    e.msg = new r.default(o.default.game, "111111111111", h.Constants.styleMSG, null, null, h.Atlases.Gameplay);
    e.msg.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    e.msg.setProp("#000000", 7, "#FFFFFF", 14);
    e.msg.btn.label.setMaxSize(640, 110);
    e.graphic.addChild(e.msgGraphics);
    e.graphic.addChild(e.msg);
    e.msg2 = new r.default(o.default.game, "111111111111", h.Constants.styleMSG, null, null, h.Atlases.Gameplay);
    e.msg2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    e.msg2.setProp("#000000", 7, "#FFFFFF", 14);
    e.msg2.btn.label.setMaxSize(640, 110);
    e.graphic.addChild(e.msg2);
    e.graphic.x = 400;
    e.graphic.y = 240;
    e.hide();
    e.objType = a.ObjectsType.INFO;
    var i = o.default.game.make.image(0, 0, h.Atlases.Gameplay, "BallClipMsg0000");
    i.anchor.set(0.5);
    var s = o.default.game.make.image(0, 0, h.Atlases.Gameplay, "BallClipMsg0000");
    s.anchor.set(0.5);
    e.msgGraphics.addChild(i);
    e.msgGraphics.addChild(s);
    t.prototype.add.call(e);
    return e;
  }
  s(e, t);
  e.prototype.hide = function () {
    this.graphic.visible = false;
  };
  e.prototype.show = function (t) {
    this.msgGraphics.children[0].visible = false;
    this.msgGraphics.children[1].visible = false;
    o.default.game.tweens.removeFrom(this.graphic.scale);
    this.msg.setText(" " + t + " ");
    this.msg2.setText("");
    this.msg.y = 0;
    this.graphic.scale.set(1);
    this.graphic.visible = true;
    var e = o.default.game.add.tween(this.graphic.scale);
    e.from({
      x: 0.2,
      y: 0.2
    }, 270, l.Easing.Back.Out, false);
    e.onComplete.addOnce(this.continueTween, this);
    e.start();
  };
  e.prototype.show2 = function (t, e = 0) {
    this.msgGraphics.children[0].visible = false;
    this.msgGraphics.children[1].visible = false;
    o.default.game.tweens.removeFrom(this.graphic.scale);
    var i;
    var s;
    var n;
    if (t === 0) {
      i = Math.random() <= 0.5 ? 2 : 3;
      if (i === 2) {
        s = "THREE!!!";
        n = "PO-O-O-INT!!!";
      } else {
        s = "FROM";
        n = "DOWNTOWN";
      }
    } else if (t === 1) {
      switch (i = 4 + Math.random() * 4 >> 0) {
        case 4:
          s = "JAM!!!";
          break;
        case 5:
          s = "DUUUNK!!!";
          break;
        case 6:
          s = "FLUSH!!!";
          break;
        case 7:
          s = "STUFF!!!";
      }
      n = "";
    } else if (t === 2) {
      i = 10;
      s = "FROM";
      n = "BLOCK!!!";
    } else if (t === 3) {
      i = 15;
      s = "BUZZER";
      n = "BEATER!!!";
    } else if (t === 4) {
      switch (i = 11 + Math.random() * 3 >> 0) {
        case 11:
          s = "FROM";
          n = "BLOCK!!!";
          break;
        case 12:
          s = "BLOCK";
          n = "SHOT";
          break;
        case 13:
          s = "REJECTED";
          n = "";
          break;
        case 14:
          s = "DENIED!!!";
          n = "";
      }
    } else if (t === 6) {
      i = 1;
      s = "SCORE!!!";
      n = "";
    } else if (t === 7) {
      i = 8;
      s = "MEGA";
      n = "DU-U-U-NK!!!";
    } else if (t === 8) {
      i = 9;
      s = "ALLEY-";
      n = "O-O-OP!!!";
    } else if (t === 9) {
      i = 14;
      s = "BRICK!!!";
      n = "";
    } else {
      if (t === 11) {
        this.show("OVERTIME");
        return;
      }
      if (t === 10) {
        this.show("TIME!!!");
        return;
      }
    }
    var a = o.default.game.cache.getJSON(h.JSONData.Players);
    var r = a["parts" + i];
    for (var u = 0; u < 4; u++) {
      if (r.hasOwnProperty(u) && r[u].g === "BallClipMsg") {
        if (this.msgGraphics.children[0].visible) {
          this.msgGraphics.children[1].visible = true;
          this.msgGraphics.children[1].x = r[u].x;
          this.msgGraphics.children[1].y = r[u].y;
          this.msgGraphics.children[1].rotation = r[u].r * c.default.TO_RAD;
          this.msgGraphics.children[1].scale.set(r[u].scaleX, r[u].scaleY);
        } else {
          this.msgGraphics.children[0].visible = true;
          this.msgGraphics.children[0].x = r[u].x;
          this.msgGraphics.children[0].y = r[u].y;
          this.msgGraphics.children[0].rotation = r[u].r * c.default.TO_RAD;
          this.msgGraphics.children[0].scale.set(r[u].scaleX, r[u].scaleY);
        }
      }
    }
    this.msg.setText(" " + s + " ");
    this.msg2.setText(" " + n + " ");
    if (n.length > 0) {
      this.msg.y = -40;
      this.msg2.y = 40;
    } else {
      this.msg.y = 0;
    }
    this.graphic.scale.set(1);
    this.graphic.visible = true;
    var d = o.default.game.add.tween(this.graphic.scale);
    d.from({
      x: 0.2,
      y: 0.2
    }, 270, l.Easing.Back.Out, false);
    d.onComplete.addOnce(this.continueTween, this);
    d.start();
  };
  e.prototype.continueTween = function () {
    var t = o.default.game.add.tween(this.graphic.scale);
    t.to({
      x: 0.9,
      y: 0.9
    }, 450, l.Easing.Back.Out, false);
    t.onComplete.addOnce(this.hide, this);
    t.start();
  };
  e.prototype.release = function () {
    t.prototype.release.call(this);
  };
  return e;
}(n.GameObject);
exports.MessageInfo = u;