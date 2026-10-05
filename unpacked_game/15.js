exports.__esModule = true;
var s = require("./0.js");
var n = function () {
  function t() {}
  t.dataLoadedSignal = new s.Signal();
  t.PlayerSignal = new s.Signal();
  t.SensorSignal = new s.Signal();
  t.MatchProcessorSignal = new s.Signal();
  t.MatchEndSignal = new s.Signal();
  t.EventSignal = new s.Signal();
  return t;
}();
exports.Signals = n;