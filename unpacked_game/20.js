exports.__esModule = true;
var s = function () {
  function t() {}
  t.normalizeAngle = function (t) {
    if (t > Math.PI) {
      t -= Math.PI * 2;
    } else if (t < -Math.PI) {
      t += Math.PI * 2;
    }
    return t;
  };
  t.normalizeAngle2 = function (t) {
    t %= Math.PI * 2;
    if (t > Math.PI) {
      t -= Math.PI * 2;
    } else if (t < -Math.PI) {
      t += Math.PI * 2;
    }
    return t;
  };
  t.normalizeVertices = function (e) {
    var i = {
      className: e.className,
      params: {}
    };
    i.params.vertices = [];
    var s = e.params;
    var n = s.x;
    var a = s.y;
    for (var o in s) {
      if (o !== "vertices") {
        i.params[o] = s[o];
      }
    }
    var r = t.TO_RAD * s.rotation;
    var h = s.vertices;
    var l = i.params.vertices;
    for (var c = h.length, u = 0; u < c; u++) {
      var d = Math.round(h[u].x);
      var p = Math.round(h[u].y);
      l[u] = {};
      if (d === 0 && p === 0) {
        l[u].x = n;
        l[u].y = a;
      } else {
        var f = undefined;
        f = Math.atan2(p, d);
        var g = Math.sqrt(d * d + p * p);
        f += r;
        l[u].x = n + Math.cos(f) * g;
        l[u].y = a + Math.sin(f) * g;
      }
    }
    i.params.x = 0;
    i.params.y = 0;
    i.params.rotation = 0;
    return i;
  };
  t.dist = function (t, e, i, s) {
    return Math.sqrt((t - i) * (t - i) + (e - s) * (e - s));
  };
  t.TO_RAD = Math.PI / 180;
  t.TO_DEG = 180 / Math.PI;
  t.PIdiv2 = Math.PI / 0;
  t.PIdiv4 = Math.PI / 4;
  t.PIdiv4mul3 = Math.PI * 3 / 4;
  return t;
}();
exports.default = s;
var n = function () {
  function t() {}
  t.rand = function (t, e) {
    return t - e * 0.5 + e * Math.random();
  };
  return t;
}();
exports.MyRand = n;