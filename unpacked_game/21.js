exports.__esModule = true;
var s = function () {
  function t(t, e = 0) {
    this.result = 0;
    this.delta = -1;
    this.fixed = e;
    this.range = t;
  }
  t.prototype.activate = function () {
    this.delta = 0;
    this.dispersion = Math.random() * this.range;
    this.delay = this.fixed + this.dispersion;
  };
  t.prototype.update = function (t) {
    if (this.delta >= 0) {
      this.result = 0;
      this.delta += t;
      if (this.delta >= this.delay) {
        this.result = 1;
        this.delta = -1;
      }
      return this.result;
    } else {
      return -1;
    }
  };
  t.prototype.reset = function () {
    this.delta = -1;
  };
  return t;
}();
exports.FullDelay = s;