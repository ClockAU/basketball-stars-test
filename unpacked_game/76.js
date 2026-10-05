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
var n = nape.space.Space;
var a = require("./28.js");
var o = require("./23.js");
var r = require("./29.js");
var h = function (t) {
  function e() {
    var i = t.call(this) || this;
    e.space = new n(r.ObjectsData.GRAVITY);
    e.space.worldLinearDrag = 0;
    return i;
  }
  s(e, t);
  e.prototype.update = function (t) {
    e.space.step(t * 0.9);
    this.updateGraphics();
  };
  e.prototype.updateGraphics = function () {
    for (var t = e.space.liveBodies.iterator(), i; t.hasNext();) {
      var s = t.next();
      var n = s.userData;
      if (n.graphic) {
        i = n.graphic;
        i.x = s.position.x;
        i.y = s.position.y;
        i.rotation = s.rotation % (Math.PI * 2);
      }
    }
  };
  e.prototype.add = function (t) {
    if (t.body) {
      t.body.space = e.space;
    }
  };
  e.prototype.release = function () {
    while (!e.space.bodies.empty()) {
      o.NapeUtil.disposeBody(e.space.bodies.at(0));
    }
    t.prototype.release.call(this);
    e.space.clear();
    e.space = null;
  };
  return e;
}(a.GamePhysics);
exports.Physics2 = h;