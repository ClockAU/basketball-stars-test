exports.__esModule = true;
var s = function () {
  function t() {}
  t.prototype.createEmpty = function () {
    this.values = [];
    for (var t = 0; t < this.count; t++) {
      this.values[t] = 0;
    }
  };
  t.prototype.getValuesForWrite = function () {
    var t = {};
    for (var e = 0; e < this.count; e++) {
      t[this.names[e]] = this.values[e];
    }
    return t;
  };
  t.prototype.setValues = function (t) {
    for (var e in t) {
      var i = this.names.indexOf(e);
      this.values[i] = t[e];
    }
  };
  t.prototype.getValues = function () {
    return this.values;
  };
  return t;
}();
exports.BaseData = s;