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
var n = require("./1.js");
var a = require("./16.js");
var o = require("./9.js");
var r = require("./3.js");
var h = require("./10.js");
var l = function (t) {
  function e() {
    var i = t.call(this) || this;
    i.name = e.Name;
    i.bike = null;
    i.logo = null;
    i.mainParent = null;
    return i;
  }
  s(e, t);
  e.prototype.preload = function () {
    t.prototype.preload.call(this);
    var e = a.default.getInstance().checkDomain(document.URL.split("//")[1].split("/")[0]);
    if (document.URL.indexOf("84.42.47.232") !== -1 || document.URL.indexOf("192.168.10.226") !== -1 || document.URL.indexOf("iriysoft.com") !== -1) {
      e = true;
    }
    if (e) {
      this.preloadSplash();
    } else {
      this.preloadLock();
    }
  };
  e.prototype.init = function () {
    t.prototype.init.call(this);
    this.mainParent = this.game.add.group();
    this.mainParent.x = this.game.width / 2;
    this.mainParent.y = this.game.height / 2;
    this.setPauseViewCar(this.mainParent);
  };
  e.prototype.preloadLock = function () {
    this.game.load.atlas(n.Atlases.Preloader, "assets/atlases/x1/" + n.Atlases.Preloader + ".png", "assets/atlases/x1/" + n.Atlases.Preloader + ".json");
  };
  e.prototype.preloadSplash = function () {
    new o.default(this.game, 0, r.default.Name);
  };
  e.prototype.createLock = function () {
    this.logo = this.game.add.image(0, -30, n.Atlases.Preloader, "branding_l20000");
    this.logo.anchor.set(0.5);
    this.logo.inputEnabled = true;
    this.logo.input.useHandCursor = true;
    this.logo.events.onInputDown.add(this.opensitelockLink, this);
    var t = {
      font: "25px Impact2",
      fill: "#A8DB2B"
    };
    var e = {
      font: "25px Impact2",
      fill: "#FFFFFF"
    };
    var i = new h.default(this.game, 0, -200, "This is version is url-locked", t);
    var s = new h.default(this.game, 0, -160, a.default.getInstance().getUrlLock(), e);
    var o = new h.default(this.game, 0, 100, "Contact to license this game", t);
    var r = new h.default(this.game, 0, 140, "madpuffers@gmail.com", e);
    i.anchor.set(0.5);
    s.anchor.set(0.5);
    o.anchor.set(0.5);
    r.anchor.set(0.5);
    this.mainParent.addChild(this.logo);
    this.mainParent.addChild(i);
    this.mainParent.addChild(s);
    this.mainParent.addChild(o);
    this.mainParent.addChild(r);
  };
  e.prototype.opensitelockLink = function () {
    window.open(a.default.getInstance().getUrlLock(), "_blank");
  };
  e.prototype.createSplash = function () {
    new o.default(this.game, 0, r.default.Name);
  };
  e.prototype.fileComplete = function (t, e, i, s, n) {
    if (t === 100) {
      this.game.load.onFileComplete.removeAll();
    }
  };
  e.prototype.setPauseViewCar = function (t) {
    if (this.bike !== null) {
      this.bike.destroy();
      this.bike = this.game.add.group(t);
    } else {
      this.bike = this.game.add.group(t);
    }
    this.bike.x = 0;
    this.bike.y = 10;
  };
  e.prototype.create = function () {
    t.prototype.create.call(this);
    var e = a.default.getInstance().checkDomain(document.URL.split("//")[1].split("/")[0]);
    if (document.URL.indexOf("84.42.47.232") !== -1 || document.URL.indexOf("192.168.10.38") !== -1 || document.URL.indexOf("iriysoft.com") !== -1) {
      e = true;
    }
    if (e) {
      this.createSplash();
    } else {
      this.createLock();
    }
  };
  e.prototype.resize = function () {
    var e = 1;
    e = this.game.width / n.Constants.WIDTH;
    e = e > 1 ? 1 : e;
    if (this.mainParent) {
      this.mainParent.x = this.game.width / 2;
      this.mainParent.y = this.game.height / 2;
    }
    t.prototype.resize.call(this);
  };
  e.prototype.shutdown = function () {
    t.prototype.shutdown.call(this);
  };
  e.Name = "sitelock";
  return e;
}(Phaser.State);
exports.default = l;