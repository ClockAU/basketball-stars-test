exports.__esModule = true;
var s = require("./20.js");
var n = nape.constraint.PivotJoint;
var a = nape.geom.GeomPoly;
var o = nape.geom.GeomPolyList;
var r = nape.geom.Vec2;
var h = nape.phys.Body;
var l = nape.phys.BodyList;
var c = nape.phys.BodyType;
var u = nape.shape.Circle;
var d = nape.shape.Polygon;
var p = function () {
  function t() {}
  t.disposeBody = function (e) {
    t.clearUserData(e);
    e.cbTypes.clear();
    if (e.compound) {
      e.compound = null;
    } else {
      e.space = null;
    }
  };
  t.resetStartPos = function (t) {
    t.position.x = t.userData.sx;
    t.position.y = t.userData.sy;
    t.rotation = t.userData.sr;
  };
  t.clearUserData = function (t) {
    for (var e in t.userData) {
      if (t.userData.hasOwnProperty(e)) {
        t.userData[e] = null;
      }
    }
  };
  t.createRectBody = function (e, i, n, a, o = null, r = null) {
    var h = new d(d.box(a.width, a.height, true), r, i);
    h.sensorEnabled = n;
    var l = t.createBody(e, a.x, a.y, s.default.TO_RAD * a.rotation, o);
    l.shapes.add(h);
    return l;
  };
  t.createRectBodyWH = function (e, i, s, n, a, o = 0, r = 0, h = 0, l = null, c = null) {
    var u = new d(d.box(n, a, true), c, i);
    u.sensorEnabled = s;
    var p = t.createBody(e, o, r, h, l);
    p.shapes.add(u);
    return p;
  };
  t.createRegularBody = function (e, i, s, n, a, o, r = 0, h = 0, l = 0, c = null, u = null) {
    var p = new d(d.regular(n * 0.5, a * 0.5, o, 0, true), u, i);
    p.sensorEnabled = s;
    var f = t.createBody(e, r, h, l, c);
    f.shapes.add(p);
    return f;
  };
  t.createBody = function (t, e = 0, i = 0, s = 0, n = null) {
    var a = new h(t, r.weak(e, i));
    a.rotation = s;
    if (n != null) {
      a.cbTypes.add(n);
    }
    return a;
  };
  t.createCircleBody = function (e, i, s, n, a = 0, o = 0, r = 0, h = null, l = null) {
    var c = new u(n, null, l, i);
    c.sensorEnabled = s;
    var d = t.createBody(e, a, o, r, h);
    if (h != null) {
      d.cbTypes.add(h);
    }
    d.shapes.add(c);
    return d;
  };
  t.bodiesInCircle = function (e, i, s, n = false, a = null) {
    t.bodyList.clear();
    e.bodiesInCircle(i, s, n, a, t.bodyList);
    return t.bodyList;
  };
  t.bodiesUnderPoint = function (e, i, s = null) {
    t.bodyList.clear();
    e.bodiesUnderPoint(i, s, t.bodyList);
    return t.bodyList;
  };
  t.createPolyBody = function (e, i, s, n) {
    var o;
    var l;
    if (e instanceof Array) {
      l = e;
      o = new h(n);
    } else {
      l = e.vertices;
      o = new h(n, r.weak(e.x, e.y));
    }
    for (var c = l.length, u = [], p = 0; p < c; p++) {
      u[p] = r.get(l[p].x, l[p].y);
    }
    var f = new a(u);
    if (f.isConvex()) {
      o.shapes.add(new d(f, i, s));
      f.dispose();
    } else {
      f.convexDecomposition(false, t.geomPolyList);
      f.dispose();
      while (!t.geomPolyList.empty()) {
        f = t.geomPolyList.pop();
        o.shapes.add(new d(f, i, s));
        f.dispose();
      }
    }
    return o;
  };
  t.createPolyShape = function (e, i, s, n, o) {
    var h = i.vertices;
    for (var l = h.length, c = [], u = 0; u < l; u++) {
      c.push(r.get(i.x + h[u].x, i.y + h[u].y));
    }
    var p = new a(c);
    if (p.isConvex()) {
      var f = new d(p, s, n);
      f.cbTypes.add(o);
      e.shapes.add(f);
      p.dispose();
    } else {
      p.convexDecomposition(false, t.geomPolyList);
      p.dispose();
      while (!t.geomPolyList.empty()) {
        p = t.geomPolyList.pop();
        var g = new d(p, s, n);
        g.cbTypes.add(o);
        e.shapes.add(g);
        p.dispose();
      }
    }
  };
  t.createSensor = function (t, e, i) {
    var s = new d(d.rect(e.x, e.y - e.height / 2, e.width, e.height));
    s.sensorEnabled = true;
    s.cbTypes.add(i);
    s.userData.id = e.id;
    t.shapes.add(s);
  };
  t.createPivot = function (t, e, i) {
    return new n(t, e, t.worldPointToLocal(i, true), e.worldPointToLocal(i, true));
  };
  t.disposeJoint = function (t) {
    t.active = false;
    t.space = null;
    t.body1 = null;
    t.body2 = null;
  };
  t.createPatherBody = function (t, e, i, s) {
    e = e.copy();
    e.density = t.params.density;
    var n = new h(t.params.isStatic ? c.STATIC : c.DYNAMIC, r.weak(t.params.x, t.params.y));
    var o = [r.get(), r.get(), r.get(), r.get()];
    var l = r.get();
    var u = r.get();
    var p = t.params.vertices;
    var f;
    var g = p.length;
    var m;
    for (f = 0; f < g - 1; f++) {
      l.setxy(p[f + 1].x - p[f].x, p[f + 1].y - p[f].y);
      if (f === 0) {
        m = l.angle + Math.PI * 0.5;
        o[0].x = p[f].x - s * 0.5 * Math.cos(m);
        o[0].y = p[f].y - s * 0.5 * Math.sin(m);
        o[1].x = p[f].x + s * 0.5 * Math.cos(m);
        o[1].y = p[f].y + s * 0.5 * Math.sin(m);
      } else {
        o[0].x = o[3].x;
        o[0].y = o[3].y;
        o[1].x = o[2].x;
        o[1].y = o[2].y;
      }
      if (f === g - 2) {
        m = l.angle + Math.PI * 0.5;
        o[3].x = p[f + 1].x - s * 0.5 * Math.cos(m);
        o[3].y = p[f + 1].y - s * 0.5 * Math.sin(m);
        o[2].x = p[f + 1].x + s * 0.5 * Math.cos(m);
        o[2].y = p[f + 1].y + s * 0.5 * Math.sin(m);
      } else {
        l.muleq(-1 / l.length);
        u.setxy(p[f + 2].x - p[f + 1].x, p[f + 2].y - p[f + 1].y);
        u.muleq(1 / u.length);
        var y = r.get(l.x + u.x, l.y + u.y);
        m = y.angle;
        o[3].x = p[f + 1].x - s * 0.5 * Math.cos(m);
        o[3].y = p[f + 1].y - s * 0.5 * Math.sin(m);
        o[2].x = p[f + 1].x + s * 0.5 * Math.cos(m);
        o[2].y = p[f + 1].y + s * 0.5 * Math.sin(m);
        y.dispose();
      }
      var v = new a(o);
      var b = undefined;
      if (v.isConvex()) {
        b = new d(o, e, i);
        b.body = n;
      } else {
        var _ = o[3];
        o[3] = o[2];
        o[2] = _;
        b = new d(o, e, i);
        b.body = n;
      }
    }
    l.dispose();
    u.dispose();
    o[0].dispose();
    o[1].dispose();
    o[2].dispose();
    o[3].dispose();
    o = null;
    n.align();
    return n;
  };
  t.geomPolyList = new o();
  t.bodyList = new l();
  return t;
}();
exports.NapeUtil = p;