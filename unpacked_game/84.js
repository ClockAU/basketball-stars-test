exports.__esModule = true;
var s = nape.phys.Material;
var n = function () {
  function t() {}
  t.FlOOR = new s(0.4, 1, 1, 0.9, 3);
  t.BALL = new s(1, 0.6, 0.6, 0.7, 1);
  t.NET = new s(0.1, 1, 1, 1);
  t.GLASS = new s(0.5, 1, 1, 1);
  t.BASKET = new s(0.35, 2, 2, 1);
  t.PLAYER = new s(0, 1, 1, 100, 0);
  return t;
}();
exports.Materials = n;