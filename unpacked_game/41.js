exports.__esModule = true;
var s = require("./0.js");
var n = function () {
  function t() {}
  t.prototype.init = function (t, e, i) {
    this.values = this.baseData.getValues();
    this.save = t;
    this.saveName = e;
    this.signalSave = new s.Signal();
    this.loadData();
  };
  t.prototype.loadData = function () {
    var t = null;
    if (this.save === null) {
      this.save = {};
    }
    t = this.save[this.saveName];
    if (t === null || t === undefined) {
      this.save[this.saveName] = {};
      this.saveData();
    } else {
      this.baseData.setValues(t);
    }
  };
  t.prototype.saveData = function () {
    this.save[this.saveName] = this.baseData.getValuesForWrite();
    this.signalSave.dispatch();
  };
  t.prototype.updateData = function (t, e = 0) {};
  return t;
}();
exports.BaseDataManager = n;