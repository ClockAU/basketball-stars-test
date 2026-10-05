exports.__esModule = true;
var s = function () {
  function t() {}
  t.calcScores = function (e, i, s, n) {
    var a = e[0] > 50 ? 50 : e[0];
    var o = a - e[1];
    var r = t.winKoef;
    if (o < 0) {
      o = 0;
      r = n ? t.winKoef : t.lostKoef;
    }
    var h = t.stateKoef * i + r + t.pointKoef * a + t.diffKoef * o;
    if (s == 1) {
      h *= t.hardKoef;
    }
    return h;
  };
  t.stateKoef = 1000;
  t.winKoef = 1000;
  t.lostKoef = 500;
  t.pointKoef = 100;
  t.diffKoef = 30;
  t.hardKoef = 1.5;
  return t;
}();
exports.ScoresCalculator = s;