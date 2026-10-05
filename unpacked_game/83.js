exports.__esModule = true;
var s = nape.dynamics.InteractionFilter;
var n = function () {
  function t() {}
  t.BALL = new s(17, 4368);
  t.NET_COLLIDE = new s(17, 4368);
  t.NET_NOT_COLLIDE = new s(17, 4352);
  t.BASKET = new s(16, 4353);
  t.RAY = new s(16, 4352);
  t.ARENA = new s(4369, 4369);
  t.BORDER = new s(4369, 4352);
  t.PLAYER = new s(273, 4096, 4096);
  t.PLAYER_BLOCK = new s(273, 4369);
  return t;
}();
exports.Filters = n;