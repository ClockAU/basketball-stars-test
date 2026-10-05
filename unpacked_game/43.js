exports.__esModule = true;
var s = require("./2.js");
var n = require("./13.js");
var a = function () {
  function t() {
    this.graphic = null;
    this.objType = -1;
  }
  t.prototype.create = function (t = null) {};
  t.prototype.add = function () {
    if (this.body) {
      this.updateGraphic();
    }
    n.MainGameCore.instance.add(this);
  };
  t.prototype.release = function () {
    if (this.graphic) {
      if (this.graphic.dispose) {
        try {
          this.graphic.dispose();
        } catch (t) {}
      }
      this.graphic = null;
    }
    if (this.body) {
      try {
        s.NapeUtil.disposeBody(this.body);
      } catch (t) {}
      this.body = null;
    }
  };
  t.prototype.updateGraphic = function () {
    if (this.graphic) {
      this.graphic.x = this.body.position.x;
      this.graphic.y = this.body.position.y;
      this.graphic.rotation = this.body.rotation * 180 / Math.PI % 360;
      this.body.userData.graphic = this.graphic;
    }
  };
  t.prototype.start = function () {};
  t.prototype.update = function (t) {};
  t.prototype.getPosition = function () {
    if (this.body) {
      return this.body.position;
    } else {
      return null;
    }
  };
  t.prototype.getX = function () {
    if (this.body) {
      return this.body.position.x;
    } else {
      return -1000;
    }
  };
  t.prototype.getY = function () {
    if (this.body) {
      return this.body.position.y;
    } else {
      return -1000;
    }
  };
  t.prototype.stopVelocity = function () {
    if (this.body) {
      this.body.velocity.setxy(0, 0);
    }
  };
  return t;
}();
exports.GameObject = a;