exports.__esModule = true;
var s = require("./15.js");
var n = function () {
  function t() {
    this.callBack = s.Signals.MatchProcessorSignal;
    s.Signals.SensorSignal.add(this.processSensor, this);
  }
  Object.defineProperty(t, "instance", {
    get: function () {
      if (t._instance === null) {
        t._instance = new t();
      }
      return t._instance;
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.clearSensors = function () {
    this.canScore = true;
    this.upperSensor = false;
  };
  t.prototype.shoot = function (t, e, i) {
    this.clearSensors();
    this.shotSide = t;
    this.isHuman = e;
    this.throwType = i;
    this.blockSide = 0;
    this.blockIsHuman = false;
  };
  t.prototype.block = function (t, e) {
    this.clearSensors();
    this.blockSide = t;
    this.blockIsHuman = e;
  };
  t.prototype.processSensor = function (t, e) {
    if (this.canScore) {
      if (t === 0) {
        this.upperSensor = true;
      } else if (this.upperSensor) {
        this.sendScore(e);
      } else {
        this.canScore = false;
      }
    }
  };
  t.prototype.sendScore = function (t) {
    var e;
    if (this.blockSide === -t) {
      e = 2;
      this.isHuman = this.blockIsHuman;
      this.throwType = 2;
    } else {
      e = this.throwType === 0 ? 3 : 2;
    }
    this.callBack.dispatch(t, e, this.isHuman, this.throwType);
  };
  t.prototype.finishMatch = function () {
    s.Signals.SensorSignal.remove(this.processSensor, this);
  };
  t._instance = null;
  return t;
}();
exports.MatchProcessor = n;