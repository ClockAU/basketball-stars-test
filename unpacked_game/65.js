exports.__esModule = true;
var s = function () {
  function t() {
    this.isScored = false;
    this.updated = [];
    this.restarted = [];
    this.objects = [];
    this.game = null;
    this.timeScale = 1;
  }
  t.prototype.start = function () {
    this.view.start();
    this.physics.start();
  };
  t.prototype.init = function (t) {
    this.game = t;
  };
  t.prototype.add = function (t) {
    this.objects.push(t);
    if (t.update) {
      this.updatedLen = this.updated.push(t);
    }
    if (t.restart) {
      this.restarted.push(t);
    }
    if (t.body) {
      this.physics.add(t);
    }
    if (t.graphic) {
      this.view.add(t);
    }
  };
  t.prototype.slow = function (t) {
    switch (t) {
      case 1:
        this.timeScale = 0.05;
        break;
      case 2:
        this.timeScale = 0.4;
        break;
      case 3:
        this.timeScale = 0;
        break;
      default:
        this.timeScale = 1;
    }
  };
  t.prototype.update = function (t) {
    var e = t * this.timeScale;
    this.physics.update(e);
    for (var i = 0; i < this.updatedLen; i++) {
      this.updated[i].update(e);
    }
  };
  t.prototype.restart = function (t = 0) {
    this.timeScale = 1;
    for (var e = this.restarted.length, i = 0; i < e; i++) {
      this.restarted[i].restart(t);
    }
  };
  t.prototype.release = function () {
    this.timeScale = 1;
    for (var t = this.objects.length, e = 0; e < t; e++) {
      this.objects[e].release();
    }
    this.objects.splice(0, t);
    this.restarted.splice(0, this.restarted.length);
    this.updated.splice(0, this.updatedLen);
    this.updatedLen = 0;
    this.view.release();
    this.physics.release();
    this.view = null;
    this.physics = null;
  };
  return t;
}();
exports.GameCore = s;