var s;
var s;
(function (e) {
  var i;
  module.exports = e();
})(function () {
  var t;
  var e;
  var i;
  return function t(e, i, n) {
    function a(r, h) {
      if (!i[r]) {
        if (!e[r]) {
          var l = typeof s == "function" && s;
          if (!h && l) {
            return s(r, true);
          }
          if (o) {
            return o(r, true);
          }
          throw new Error("Cannot find module '" + r + "'");
        }
        var c = i[r] = {
          exports: {}
        };
        e[r][0].call(c.exports, function (t) {
          var i = e[r][1][t];
          return a(i || t);
        }, c, c.exports, t, e, i, n);
      }
      return i[r].exports;
    }
    var o = typeof s == "function" && s;
    for (var r = 0; r < n.length; r++) {
      a(n[r]);
    }
    return a;
  }({
    1: [function (t, e, i) {
      function s() {}
      var n = t("./Scalar");
      e.exports = s;
      s.lineInt = function (t, e, i) {
        i = i || 0;
        var s = [0, 0];
        var a;
        var o;
        var r;
        var h;
        var l;
        var c;
        var u;
        a = t[1][1] - t[0][1];
        o = t[0][0] - t[1][0];
        r = a * t[0][0] + o * t[0][1];
        h = e[1][1] - e[0][1];
        l = e[0][0] - e[1][0];
        c = h * e[0][0] + l * e[0][1];
        u = a * l - h * o;
        if (!n.eq(u, 0, i)) {
          s[0] = (l * r - o * c) / u;
          s[1] = (a * c - h * r) / u;
        }
        return s;
      };
      s.segmentsIntersect = function (t, e, i, s) {
        var n = e[0] - t[0];
        var a = e[1] - t[1];
        var o = s[0] - i[0];
        var r = s[1] - i[1];
        if (o * a - r * n == 0) {
          return false;
        }
        var h = (n * (i[1] - t[1]) + a * (t[0] - i[0])) / (o * a - r * n);
        var l = (o * (t[1] - i[1]) + r * (i[0] - t[0])) / (r * n - o * a);
        return h >= 0 && h <= 1 && l >= 0 && l <= 1;
      };
    }, {
      "./Scalar": 4
    }],
    2: [function (t, e, i) {
      function s() {}
      e.exports = s;
      s.area = function (t, e, i) {
        return (e[0] - t[0]) * (i[1] - t[1]) - (i[0] - t[0]) * (e[1] - t[1]);
      };
      s.left = function (t, e, i) {
        return s.area(t, e, i) > 0;
      };
      s.leftOn = function (t, e, i) {
        return s.area(t, e, i) >= 0;
      };
      s.right = function (t, e, i) {
        return s.area(t, e, i) < 0;
      };
      s.rightOn = function (t, e, i) {
        return s.area(t, e, i) <= 0;
      };
      var n = [];
      var a = [];
      s.collinear = function (t, e, i, o) {
        if (o) {
          var r = n;
          var h = a;
          r[0] = e[0] - t[0];
          r[1] = e[1] - t[1];
          h[0] = i[0] - e[0];
          h[1] = i[1] - e[1];
          var l = r[0] * h[0] + r[1] * h[1];
          var c = Math.sqrt(r[0] * r[0] + r[1] * r[1]);
          var u = Math.sqrt(h[0] * h[0] + h[1] * h[1]);
          return Math.acos(l / (c * u)) < o;
        }
        return s.area(t, e, i) == 0;
      };
      s.sqdist = function (t, e) {
        var i = e[0] - t[0];
        var s = e[1] - t[1];
        return i * i + s * s;
      };
    }, {}],
    3: [function (t, e, i) {
      function s() {
        this.vertices = [];
      }
      function n(t, e, i, s, n) {
        n = n || 0;
        var a = e[1] - t[1];
        var o = t[0] - e[0];
        var h = a * t[0] + o * t[1];
        var l = s[1] - i[1];
        var c = i[0] - s[0];
        var u = l * i[0] + c * i[1];
        var d = a * c - l * o;
        if (r.eq(d, 0, n)) {
          return [0, 0];
        } else {
          return [(c * h - o * u) / d, (a * u - l * h) / d];
        }
      }
      var a = t("./Line");
      var o = t("./Point");
      var r = t("./Scalar");
      e.exports = s;
      s.prototype.at = function (t) {
        var e = this.vertices;
        var i = e.length;
        return e[t < 0 ? t % i + i : t % i];
      };
      s.prototype.first = function () {
        return this.vertices[0];
      };
      s.prototype.last = function () {
        return this.vertices[this.vertices.length - 1];
      };
      s.prototype.clear = function () {
        this.vertices.length = 0;
      };
      s.prototype.append = function (t, e, i) {
        if (e === undefined) {
          throw new Error("From is not given!");
        }
        if (i === undefined) {
          throw new Error("To is not given!");
        }
        if (i - 1 < e) {
          throw new Error("lol1");
        }
        if (i > t.vertices.length) {
          throw new Error("lol2");
        }
        if (e < 0) {
          throw new Error("lol3");
        }
        for (var s = e; s < i; s++) {
          this.vertices.push(t.vertices[s]);
        }
      };
      s.prototype.makeCCW = function () {
        var t = 0;
        var e = this.vertices;
        for (var i = 1; i < this.vertices.length; ++i) {
          if (e[i][1] < e[t][1] || e[i][1] == e[t][1] && e[i][0] > e[t][0]) {
            t = i;
          }
        }
        if (!o.left(this.at(t - 1), this.at(t), this.at(t + 1))) {
          this.reverse();
        }
      };
      s.prototype.reverse = function () {
        var t = [];
        for (var e = 0, i = this.vertices.length; e !== i; e++) {
          t.push(this.vertices.pop());
        }
        this.vertices = t;
      };
      s.prototype.isReflex = function (t) {
        return o.right(this.at(t - 1), this.at(t), this.at(t + 1));
      };
      var h = [];
      var l = [];
      s.prototype.canSee = function (t, e) {
        var i;
        var s;
        var n = h;
        var r = l;
        if (o.leftOn(this.at(t + 1), this.at(t), this.at(e)) && o.rightOn(this.at(t - 1), this.at(t), this.at(e))) {
          return false;
        }
        s = o.sqdist(this.at(t), this.at(e));
        for (var c = 0; c !== this.vertices.length; ++c) {
          if ((c + 1) % this.vertices.length !== t && c !== t && o.leftOn(this.at(t), this.at(e), this.at(c + 1)) && o.rightOn(this.at(t), this.at(e), this.at(c)) && (n[0] = this.at(t), n[1] = this.at(e), r[0] = this.at(c), r[1] = this.at(c + 1), i = a.lineInt(n, r), o.sqdist(this.at(t), i) < s)) {
            return false;
          }
        }
        return true;
      };
      s.prototype.copy = function (t, e, i) {
        var n = i || new s();
        n.clear();
        if (t < e) {
          for (var a = t; a <= e; a++) {
            n.vertices.push(this.vertices[a]);
          }
        } else {
          for (var a = 0; a <= e; a++) {
            n.vertices.push(this.vertices[a]);
          }
          for (var a = t; a < this.vertices.length; a++) {
            n.vertices.push(this.vertices[a]);
          }
        }
        return n;
      };
      s.prototype.getCutEdges = function () {
        var t = [];
        var e = [];
        var i = [];
        var n = new s();
        var a = Number.MAX_VALUE;
        for (var o = 0; o < this.vertices.length; ++o) {
          if (this.isReflex(o)) {
            for (var r = 0; r < this.vertices.length; ++r) {
              if (this.canSee(o, r)) {
                e = this.copy(o, r, n).getCutEdges();
                i = this.copy(r, o, n).getCutEdges();
                for (var h = 0; h < i.length; h++) {
                  e.push(i[h]);
                }
                if (e.length < a) {
                  t = e;
                  a = e.length;
                  t.push([this.at(o), this.at(r)]);
                }
              }
            }
          }
        }
        return t;
      };
      s.prototype.decomp = function () {
        var t = this.getCutEdges();
        if (t.length > 0) {
          return this.slice(t);
        } else {
          return [this];
        }
      };
      s.prototype.slice = function (t) {
        if (t.length == 0) {
          return [this];
        }
        if (t instanceof Array && t.length && t[0] instanceof Array && t[0].length == 2 && t[0][0] instanceof Array) {
          var e = [this];
          for (var i = 0; i < t.length; i++) {
            var s = t[i];
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              var o = a.slice(s);
              if (o) {
                e.splice(n, 1);
                e.push(o[0], o[1]);
                break;
              }
            }
          }
          return e;
        }
        var s = t;
        var i = this.vertices.indexOf(s[0]);
        var n = this.vertices.indexOf(s[1]);
        return i != -1 && n != -1 && [this.copy(i, n), this.copy(n, i)];
      };
      s.prototype.isSimple = function () {
        for (var t = this.vertices, e = 0; e < t.length - 1; e++) {
          for (var i = 0; i < e - 1; i++) {
            if (a.segmentsIntersect(t[e], t[e + 1], t[i], t[i + 1])) {
              return false;
            }
          }
        }
        for (var e = 1; e < t.length - 2; e++) {
          if (a.segmentsIntersect(t[0], t[t.length - 1], t[e], t[e + 1])) {
            return false;
          }
        }
        return true;
      };
      s.prototype.quickDecomp = function (t, e, i, a, r, h) {
        r = r || 100;
        h = h || 0;
        a = a || 25;
        t = t !== undefined ? t : [];
        e = e || [];
        i = i || [];
        var l = [0, 0];
        var c = [0, 0];
        var u = [0, 0];
        var d = 0;
        var p = 0;
        var f = 0;
        var g = 0;
        var m = 0;
        var y = 0;
        var v = 0;
        var b = new s();
        var _ = new s();
        var x = this;
        var w = this.vertices;
        if (w.length < 3) {
          return t;
        }
        if (++h > r) {
          return t;
        }
        for (var P = 0; P < this.vertices.length; ++P) {
          if (x.isReflex(P)) {
            e.push(x.vertices[P]);
            d = p = Number.MAX_VALUE;
            for (var T = 0; T < this.vertices.length; ++T) {
              if (o.left(x.at(P - 1), x.at(P), x.at(T)) && o.rightOn(x.at(P - 1), x.at(P), x.at(T - 1))) {
                u = n(x.at(P - 1), x.at(P), x.at(T), x.at(T - 1));
                if (o.right(x.at(P + 1), x.at(P), u) && (f = o.sqdist(x.vertices[P], u)) < p) {
                  p = f;
                  c = u;
                  y = T;
                }
              }
              if (o.left(x.at(P + 1), x.at(P), x.at(T + 1)) && o.rightOn(x.at(P + 1), x.at(P), x.at(T))) {
                u = n(x.at(P + 1), x.at(P), x.at(T), x.at(T + 1));
                if (o.left(x.at(P - 1), x.at(P), u) && (f = o.sqdist(x.vertices[P], u)) < d) {
                  d = f;
                  l = u;
                  m = T;
                }
              }
            }
            if (y == (m + 1) % this.vertices.length) {
              u[0] = (c[0] + l[0]) / 2;
              u[1] = (c[1] + l[1]) / 2;
              i.push(u);
              if (P < m) {
                b.append(x, P, m + 1);
                b.vertices.push(u);
                _.vertices.push(u);
                if (y != 0) {
                  _.append(x, y, x.vertices.length);
                }
                _.append(x, 0, P + 1);
              } else {
                if (P != 0) {
                  b.append(x, P, x.vertices.length);
                }
                b.append(x, 0, m + 1);
                b.vertices.push(u);
                _.vertices.push(u);
                _.append(x, y, P + 1);
              }
            } else {
              if (y > m) {
                m += this.vertices.length;
              }
              g = Number.MAX_VALUE;
              if (m < y) {
                return t;
              }
              for (var T = y; T <= m; ++T) {
                if (o.leftOn(x.at(P - 1), x.at(P), x.at(T)) && o.rightOn(x.at(P + 1), x.at(P), x.at(T)) && (f = o.sqdist(x.at(P), x.at(T))) < g) {
                  g = f;
                  v = T % this.vertices.length;
                }
              }
              if (P < v) {
                b.append(x, P, v + 1);
                if (v != 0) {
                  _.append(x, v, w.length);
                }
                _.append(x, 0, P + 1);
              } else {
                if (P != 0) {
                  b.append(x, P, w.length);
                }
                b.append(x, 0, v + 1);
                _.append(x, v, P + 1);
              }
            }
            if (b.vertices.length < _.vertices.length) {
              b.quickDecomp(t, e, i, a, r, h);
              _.quickDecomp(t, e, i, a, r, h);
            } else {
              _.quickDecomp(t, e, i, a, r, h);
              b.quickDecomp(t, e, i, a, r, h);
            }
            return t;
          }
        }
        t.push(this);
        return t;
      };
      s.prototype.removeCollinearPoints = function (t) {
        var e = 0;
        for (var i = this.vertices.length - 1; this.vertices.length > 3 && i >= 0; --i) {
          if (o.collinear(this.at(i - 1), this.at(i), this.at(i + 1), t)) {
            this.vertices.splice(i % this.vertices.length, 1);
            i--;
            e++;
          }
        }
        return e;
      };
    }, {
      "./Line": 1,
      "./Point": 2,
      "./Scalar": 4
    }],
    4: [function (t, e, i) {
      function s() {}
      e.exports = s;
      s.eq = function (t, e, i) {
        i = i || 0;
        return Math.abs(t - e) < i;
      };
    }, {}],
    5: [function (t, e, i) {
      e.exports = {
        Polygon: t("./Polygon"),
        Point: t("./Point")
      };
    }, {
      "./Point": 2,
      "./Polygon": 3
    }],
    6: [function (t, e, i) {
      e.exports = {
        name: "p2",
        version: "0.7.0",
        description: "A JavaScript 2D physics engine.",
        author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
        keywords: ["p2.js", "p2", "physics", "engine", "2d"],
        main: "./src/p2.js",
        engines: {
          node: "*"
        },
        repository: {
          type: "git",
          url: "https://github.com/schteppe/p2.js.git"
        },
        bugs: {
          url: "https://github.com/schteppe/p2.js/issues"
        },
        licenses: [{
          type: "MIT"
        }],
        devDependencies: {
          grunt: "^0.4.5",
          "grunt-contrib-jshint": "^0.11.2",
          "grunt-contrib-nodeunit": "^0.4.1",
          "grunt-contrib-uglify": "~0.4.0",
          "grunt-contrib-watch": "~0.5.0",
          "grunt-browserify": "~2.0.1",
          "grunt-contrib-concat": "^0.4.0"
        },
        dependencies: {
          "poly-decomp": "0.1.0"
        }
      };
    }, {}],
    7: [function (t, e, i) {
      function s(t) {
        this.lowerBound = n.create();
        if (t && t.lowerBound) {
          n.copy(this.lowerBound, t.lowerBound);
        }
        this.upperBound = n.create();
        if (t && t.upperBound) {
          n.copy(this.upperBound, t.upperBound);
        }
      }
      var n = t("../math/vec2");
      var a = t("../utils/Utils");
      e.exports = s;
      var o = n.create();
      s.prototype.setFromPoints = function (t, e, i, s) {
        var a = this.lowerBound;
        var r = this.upperBound;
        if (typeof i != "number") {
          i = 0;
        }
        if (i !== 0) {
          n.rotate(a, t[0], i);
        } else {
          n.copy(a, t[0]);
        }
        n.copy(r, a);
        var h = Math.cos(i);
        var l = Math.sin(i);
        for (var c = 1; c < t.length; c++) {
          var u = t[c];
          if (i !== 0) {
            var d = u[0];
            var p = u[1];
            o[0] = h * d - l * p;
            o[1] = l * d + h * p;
            u = o;
          }
          for (var f = 0; f < 2; f++) {
            if (u[f] > r[f]) {
              r[f] = u[f];
            }
            if (u[f] < a[f]) {
              a[f] = u[f];
            }
          }
        }
        if (e) {
          n.add(this.lowerBound, this.lowerBound, e);
          n.add(this.upperBound, this.upperBound, e);
        }
        if (s) {
          this.lowerBound[0] -= s;
          this.lowerBound[1] -= s;
          this.upperBound[0] += s;
          this.upperBound[1] += s;
        }
      };
      s.prototype.copy = function (t) {
        n.copy(this.lowerBound, t.lowerBound);
        n.copy(this.upperBound, t.upperBound);
      };
      s.prototype.extend = function (t) {
        for (var e = 2; e--;) {
          var i = t.lowerBound[e];
          if (this.lowerBound[e] > i) {
            this.lowerBound[e] = i;
          }
          var s = t.upperBound[e];
          if (this.upperBound[e] < s) {
            this.upperBound[e] = s;
          }
        }
      };
      s.prototype.overlaps = function (t) {
        var e = this.lowerBound;
        var i = this.upperBound;
        var s = t.lowerBound;
        var n = t.upperBound;
        return (s[0] <= i[0] && i[0] <= n[0] || e[0] <= n[0] && n[0] <= i[0]) && (s[1] <= i[1] && i[1] <= n[1] || e[1] <= n[1] && n[1] <= i[1]);
      };
      s.prototype.containsPoint = function (t) {
        var e = this.lowerBound;
        var i = this.upperBound;
        return e[0] <= t[0] && t[0] <= i[0] && e[1] <= t[1] && t[1] <= i[1];
      };
      s.prototype.overlapsRay = function (t) {
        var e = 0;
        var i = 1 / t.direction[0];
        var s = 1 / t.direction[1];
        var n = (this.lowerBound[0] - t.from[0]) * i;
        var a = (this.upperBound[0] - t.from[0]) * i;
        var o = (this.lowerBound[1] - t.from[1]) * s;
        var r = (this.upperBound[1] - t.from[1]) * s;
        var h = Math.max(Math.max(Math.min(n, a), Math.min(o, r)));
        var l = Math.min(Math.min(Math.max(n, a), Math.max(o, r)));
        if (l < 0) {
          return -1;
        } else if (h > l) {
          return -1;
        } else {
          return h;
        }
      };
    }, {
      "../math/vec2": 30,
      "../utils/Utils": 57
    }],
    8: [function (t, e, i) {
      function s(t) {
        this.type = t;
        this.result = [];
        this.world = null;
        this.boundingVolumeType = s.AABB;
      }
      var n = t("../math/vec2");
      var a = t("../objects/Body");
      e.exports = s;
      s.AABB = 1;
      s.BOUNDING_CIRCLE = 2;
      s.prototype.setWorld = function (t) {
        this.world = t;
      };
      s.prototype.getCollisionPairs = function (t) {};
      var o = n.create();
      s.boundingRadiusCheck = function (t, e) {
        n.sub(o, t.position, e.position);
        var i = n.squaredLength(o);
        var s = t.boundingRadius + e.boundingRadius;
        return i <= s * s;
      };
      s.aabbCheck = function (t, e) {
        return t.getAABB().overlaps(e.getAABB());
      };
      s.prototype.boundingVolumeCheck = function (t, e) {
        var i;
        switch (this.boundingVolumeType) {
          case s.BOUNDING_CIRCLE:
            i = s.boundingRadiusCheck(t, e);
            break;
          case s.AABB:
            i = s.aabbCheck(t, e);
            break;
          default:
            throw new Error("Bounding volume type not recognized: " + this.boundingVolumeType);
        }
        return i;
      };
      s.canCollide = function (t, e) {
        var i = a.KINEMATIC;
        var s = a.STATIC;
        return (t.type !== s || e.type !== s) && (t.type !== i || e.type !== s) && (t.type !== s || e.type !== i) && (t.type !== i || e.type !== i) && (t.sleepState !== a.SLEEPING || e.sleepState !== a.SLEEPING) && (t.sleepState !== a.SLEEPING || e.type !== s) && (e.sleepState !== a.SLEEPING || t.type !== s);
      };
      s.NAIVE = 1;
      s.SAP = 2;
    }, {
      "../math/vec2": 30,
      "../objects/Body": 31
    }],
    9: [function (t, e, i) {
      function s() {
        h.call(this, h.NAIVE);
      }
      var n = t("../shapes/Circle");
      var a = t("../shapes/Plane");
      var o = t("../shapes/Shape");
      var r = t("../shapes/Particle");
      var h = t("../collision/Broadphase");
      var l = t("../math/vec2");
      e.exports = s;
      s.prototype = new h();
      s.prototype.constructor = s;
      s.prototype.getCollisionPairs = function (t) {
        var e = t.bodies;
        var i = this.result;
        i.length = 0;
        for (var s = 0, n = e.length; s !== n; s++) {
          var a = e[s];
          for (var o = 0; o < s; o++) {
            var r = e[o];
            if (h.canCollide(a, r) && this.boundingVolumeCheck(a, r)) {
              i.push(a, r);
            }
          }
        }
        return i;
      };
      s.prototype.aabbQuery = function (t, e, i) {
        i = i || [];
        for (var s = t.bodies, n = 0; n < s.length; n++) {
          var a = s[n];
          if (a.aabbNeedsUpdate) {
            a.updateAABB();
          }
          if (a.aabb.overlaps(e)) {
            i.push(a);
          }
        }
        return i;
      };
    }, {
      "../collision/Broadphase": 8,
      "../math/vec2": 30,
      "../shapes/Circle": 39,
      "../shapes/Particle": 43,
      "../shapes/Plane": 44,
      "../shapes/Shape": 45
    }],
    10: [function (t, e, i) {
      function s() {
        this.contactEquations = [];
        this.frictionEquations = [];
        this.enableFriction = true;
        this.enabledEquations = true;
        this.slipForce = 10;
        this.frictionCoefficient = 0.3;
        this.surfaceVelocity = 0;
        this.contactEquationPool = new u({
          size: 32
        });
        this.frictionEquationPool = new d({
          size: 64
        });
        this.restitution = 0;
        this.stiffness = f.DEFAULT_STIFFNESS;
        this.relaxation = f.DEFAULT_RELAXATION;
        this.frictionStiffness = f.DEFAULT_STIFFNESS;
        this.frictionRelaxation = f.DEFAULT_RELAXATION;
        this.enableFrictionReduction = true;
        this.collidingBodiesLastStep = new p();
        this.contactSkinSize = 0.01;
      }
      function n(t, e) {
        o.set(t.vertices[0], -e.length * 0.5, -e.radius);
        o.set(t.vertices[1], e.length * 0.5, -e.radius);
        o.set(t.vertices[2], e.length * 0.5, e.radius);
        o.set(t.vertices[3], -e.length * 0.5, e.radius);
      }
      function a(t, e, i, s) {
        var n = K;
        var a = J;
        var l = Z;
        var c = Q;
        var u = t;
        for (var d = e.vertices, p = null, f = 0; f !== d.length + 1; f++) {
          var g = d[f % d.length];
          var m = d[(f + 1) % d.length];
          o.rotate(n, g, s);
          o.rotate(a, m, s);
          h(n, n, i);
          h(a, a, i);
          r(l, n, u);
          r(c, a, u);
          var y = o.crossLength(l, c);
          if (p === null) {
            p = y;
          }
          if (y * p <= 0) {
            return false;
          }
          p = y;
        }
        return true;
      }
      var o = t("../math/vec2");
      var r = o.sub;
      var h = o.add;
      var l = o.dot;
      var c = t("../utils/Utils");
      var u = t("../utils/ContactEquationPool");
      var d = t("../utils/FrictionEquationPool");
      var p = t("../utils/TupleDictionary");
      var f = t("../equations/Equation");
      var g = t("../equations/ContactEquation");
      var m = t("../equations/FrictionEquation");
      var y = t("../shapes/Circle");
      var v = t("../shapes/Convex");
      var b = t("../shapes/Shape");
      var _ = t("../objects/Body");
      var x = t("../shapes/Box");
      e.exports = s;
      var w = o.fromValues(0, 1);
      var P = o.fromValues(0, 0);
      var T = o.fromValues(0, 0);
      var S = o.fromValues(0, 0);
      var C = o.fromValues(0, 0);
      var A = o.fromValues(0, 0);
      var E = o.fromValues(0, 0);
      var I = o.fromValues(0, 0);
      var B = o.fromValues(0, 0);
      var M = o.fromValues(0, 0);
      var k = o.fromValues(0, 0);
      var O = o.fromValues(0, 0);
      var D = o.fromValues(0, 0);
      var L = o.fromValues(0, 0);
      var R = o.fromValues(0, 0);
      var F = o.fromValues(0, 0);
      var G = o.fromValues(0, 0);
      var N = o.fromValues(0, 0);
      var U = o.fromValues(0, 0);
      var j = [];
      var X = o.create();
      var W = o.create();
      s.prototype.bodiesOverlap = function (t, e) {
        var i = X;
        var s = W;
        for (var n = 0, a = t.shapes.length; n !== a; n++) {
          var o = t.shapes[n];
          t.toWorldFrame(i, o.position);
          for (var r = 0, h = e.shapes.length; r !== h; r++) {
            var l = e.shapes[r];
            e.toWorldFrame(s, l.position);
            if (this[o.type | l.type](t, o, i, o.angle + t.angle, e, l, s, l.angle + e.angle, true)) {
              return true;
            }
          }
        }
        return false;
      };
      s.prototype.collidedLastStep = function (t, e) {
        var i = t.id | 0;
        var s = e.id | 0;
        return !!this.collidingBodiesLastStep.get(i, s);
      };
      s.prototype.reset = function () {
        this.collidingBodiesLastStep.reset();
        var t = this.contactEquations;
        for (var e = t.length; e--;) {
          var i = t[e];
          var s = i.bodyA.id;
          var n = i.bodyB.id;
          this.collidingBodiesLastStep.set(s, n, true);
        }
        for (var a = this.contactEquations, o = this.frictionEquations, r = 0; r < a.length; r++) {
          this.contactEquationPool.release(a[r]);
        }
        for (var r = 0; r < o.length; r++) {
          this.frictionEquationPool.release(o[r]);
        }
        this.contactEquations.length = this.frictionEquations.length = 0;
      };
      s.prototype.createContactEquation = function (t, e, i, s) {
        var n = this.contactEquationPool.get();
        n.bodyA = t;
        n.bodyB = e;
        n.shapeA = i;
        n.shapeB = s;
        n.restitution = this.restitution;
        n.firstImpact = !this.collidedLastStep(t, e);
        n.stiffness = this.stiffness;
        n.relaxation = this.relaxation;
        n.needsUpdate = true;
        n.enabled = this.enabledEquations;
        n.offset = this.contactSkinSize;
        return n;
      };
      s.prototype.createFrictionEquation = function (t, e, i, s) {
        var n = this.frictionEquationPool.get();
        n.bodyA = t;
        n.bodyB = e;
        n.shapeA = i;
        n.shapeB = s;
        n.setSlipForce(this.slipForce);
        n.frictionCoefficient = this.frictionCoefficient;
        n.relativeVelocity = this.surfaceVelocity;
        n.enabled = this.enabledEquations;
        n.needsUpdate = true;
        n.stiffness = this.frictionStiffness;
        n.relaxation = this.frictionRelaxation;
        n.contactEquations.length = 0;
        return n;
      };
      s.prototype.createFrictionFromContact = function (t) {
        var e = this.createFrictionEquation(t.bodyA, t.bodyB, t.shapeA, t.shapeB);
        o.copy(e.contactPointA, t.contactPointA);
        o.copy(e.contactPointB, t.contactPointB);
        o.rotate90cw(e.t, t.normalA);
        e.contactEquations.push(t);
        return e;
      };
      s.prototype.createFrictionFromAverage = function (t) {
        var e = this.contactEquations[this.contactEquations.length - 1];
        var i = this.createFrictionEquation(e.bodyA, e.bodyB, e.shapeA, e.shapeB);
        var s = e.bodyA;
        var n = e.bodyB;
        o.set(i.contactPointA, 0, 0);
        o.set(i.contactPointB, 0, 0);
        o.set(i.t, 0, 0);
        for (var a = 0; a !== t; a++) {
          e = this.contactEquations[this.contactEquations.length - 1 - a];
          if (e.bodyA === s) {
            o.add(i.t, i.t, e.normalA);
            o.add(i.contactPointA, i.contactPointA, e.contactPointA);
            o.add(i.contactPointB, i.contactPointB, e.contactPointB);
          } else {
            o.sub(i.t, i.t, e.normalA);
            o.add(i.contactPointA, i.contactPointA, e.contactPointB);
            o.add(i.contactPointB, i.contactPointB, e.contactPointA);
          }
          i.contactEquations.push(e);
        }
        var r = 1 / t;
        o.scale(i.contactPointA, i.contactPointA, r);
        o.scale(i.contactPointB, i.contactPointB, r);
        o.normalize(i.t, i.t);
        o.rotate90cw(i.t, i.t);
        return i;
      };
      s.prototype[b.LINE | b.CONVEX] = s.prototype.convexLine = function (t, e, i, s, n, a, o, r, h) {
        return !h && 0;
      };
      s.prototype[b.LINE | b.BOX] = s.prototype.lineBox = function (t, e, i, s, n, a, o, r, h) {
        return !h && 0;
      };
      var H = new x({
        width: 1,
        height: 1
      });
      var V = o.create();
      s.prototype[b.CAPSULE | b.CONVEX] = s.prototype[b.CAPSULE | b.BOX] = s.prototype.convexCapsule = function (t, e, i, s, a, r, h, l, c) {
        var u = V;
        o.set(u, r.length / 2, 0);
        o.rotate(u, u, l);
        o.add(u, u, h);
        var d = this.circleConvex(a, r, u, l, t, e, i, s, c, r.radius);
        o.set(u, -r.length / 2, 0);
        o.rotate(u, u, l);
        o.add(u, u, h);
        var p = this.circleConvex(a, r, u, l, t, e, i, s, c, r.radius);
        if (c && (d || p)) {
          return true;
        }
        var f = H;
        n(f, r);
        return this.convexConvex(t, e, i, s, a, f, h, l, c) + d + p;
      };
      s.prototype[b.CAPSULE | b.LINE] = s.prototype.lineCapsule = function (t, e, i, s, n, a, o, r, h) {
        return !h && 0;
      };
      var Y = o.create();
      var q = o.create();
      var z = new x({
        width: 1,
        height: 1
      });
      s.prototype[b.CAPSULE | b.CAPSULE] = s.prototype.capsuleCapsule = function (t, e, i, s, a, r, h, l, c) {
        var u;
        var d = Y;
        var p = q;
        var f = 0;
        for (var g = 0; g < 2; g++) {
          o.set(d, (g === 0 ? -1 : 1) * e.length / 2, 0);
          o.rotate(d, d, s);
          o.add(d, d, i);
          for (var m = 0; m < 2; m++) {
            o.set(p, (m === 0 ? -1 : 1) * r.length / 2, 0);
            o.rotate(p, p, l);
            o.add(p, p, h);
            if (this.enableFrictionReduction) {
              u = this.enableFriction;
              this.enableFriction = false;
            }
            var y = this.circleCircle(t, e, d, s, a, r, p, l, c, e.radius, r.radius);
            if (this.enableFrictionReduction) {
              this.enableFriction = u;
            }
            if (c && y) {
              return true;
            }
            f += y;
          }
        }
        if (this.enableFrictionReduction) {
          u = this.enableFriction;
          this.enableFriction = false;
        }
        var v = z;
        n(v, e);
        var b = this.convexCapsule(t, v, i, s, a, r, h, l, c);
        if (this.enableFrictionReduction) {
          this.enableFriction = u;
        }
        if (c && b) {
          return true;
        }
        f += b;
        if (this.enableFrictionReduction) {
          var u = this.enableFriction;
          this.enableFriction = false;
        }
        n(v, r);
        var _ = this.convexCapsule(a, v, h, l, t, e, i, s, c);
        if (this.enableFrictionReduction) {
          this.enableFriction = u;
        }
        return !!c && !!_ || (f += _, this.enableFrictionReduction && f && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(f)), f);
      };
      s.prototype[b.LINE | b.LINE] = s.prototype.lineLine = function (t, e, i, s, n, a, o, r, h) {
        return !h && 0;
      };
      s.prototype[b.PLANE | b.LINE] = s.prototype.planeLine = function (t, e, i, s, n, a, c, u, d) {
        var p = P;
        var f = T;
        var g = S;
        var m = C;
        var y = A;
        var v = E;
        var b = I;
        var _ = B;
        var x = M;
        var k = j;
        var O = 0;
        o.set(p, -a.length / 2, 0);
        o.set(f, a.length / 2, 0);
        o.rotate(g, p, u);
        o.rotate(m, f, u);
        h(g, g, c);
        h(m, m, c);
        o.copy(p, g);
        o.copy(f, m);
        r(y, f, p);
        o.normalize(v, y);
        o.rotate90cw(x, v);
        o.rotate(_, w, s);
        k[0] = p;
        k[1] = f;
        for (var D = 0; D < k.length; D++) {
          var L = k[D];
          r(b, L, i);
          var R = l(b, _);
          if (R < 0) {
            if (d) {
              return true;
            }
            var F = this.createContactEquation(t, n, e, a);
            O++;
            o.copy(F.normalA, _);
            o.normalize(F.normalA, F.normalA);
            o.scale(b, _, R);
            r(F.contactPointA, L, b);
            r(F.contactPointA, F.contactPointA, t.position);
            r(F.contactPointB, L, c);
            h(F.contactPointB, F.contactPointB, c);
            r(F.contactPointB, F.contactPointB, n.position);
            this.contactEquations.push(F);
            if (!this.enableFrictionReduction) {
              if (this.enableFriction) {
                this.frictionEquations.push(this.createFrictionFromContact(F));
              }
            }
          }
        }
        return !d && (this.enableFrictionReduction || O && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(O)), O);
      };
      s.prototype[b.PARTICLE | b.CAPSULE] = s.prototype.particleCapsule = function (t, e, i, s, n, a, o, r, h) {
        return this.circleLine(t, e, i, s, n, a, o, r, h, a.radius, 0);
      };
      s.prototype[b.CIRCLE | b.LINE] = s.prototype.circleLine = function (t, e, i, s, n, a, c, u, d, p, f) {
        var p = p || 0;
        var f = f !== undefined ? f : e.radius;
        var g = P;
        var m = T;
        var y = S;
        var v = C;
        var b = A;
        var _ = E;
        var x = I;
        var w = B;
        var F = M;
        var G = k;
        var N = O;
        var U = D;
        var X = L;
        var W = R;
        var H = j;
        o.set(w, -a.length / 2, 0);
        o.set(F, a.length / 2, 0);
        o.rotate(G, w, u);
        o.rotate(N, F, u);
        h(G, G, c);
        h(N, N, c);
        o.copy(w, G);
        o.copy(F, N);
        r(_, F, w);
        o.normalize(x, _);
        o.rotate90cw(b, x);
        r(U, i, w);
        var V = l(U, b);
        r(v, w, c);
        r(X, i, c);
        var Y = f + p;
        if (Math.abs(V) < Y) {
          o.scale(g, b, V);
          r(y, i, g);
          o.scale(m, b, l(b, X));
          o.normalize(m, m);
          o.scale(m, m, p);
          h(y, y, m);
          var q = l(x, y);
          var z = l(x, w);
          var K = l(x, F);
          if (q > z && q < K) {
            if (d) {
              return true;
            }
            var J = this.createContactEquation(t, n, e, a);
            o.scale(J.normalA, g, -1);
            o.normalize(J.normalA, J.normalA);
            o.scale(J.contactPointA, J.normalA, f);
            h(J.contactPointA, J.contactPointA, i);
            r(J.contactPointA, J.contactPointA, t.position);
            r(J.contactPointB, y, c);
            h(J.contactPointB, J.contactPointB, c);
            r(J.contactPointB, J.contactPointB, n.position);
            this.contactEquations.push(J);
            if (this.enableFriction) {
              this.frictionEquations.push(this.createFrictionFromContact(J));
            }
            return 1;
          }
        }
        H[0] = w;
        H[1] = F;
        for (var Z = 0; Z < H.length; Z++) {
          var Q = H[Z];
          r(U, Q, i);
          if (o.squaredLength(U) < Math.pow(Y, 2)) {
            if (d) {
              return true;
            }
            var J = this.createContactEquation(t, n, e, a);
            o.copy(J.normalA, U);
            o.normalize(J.normalA, J.normalA);
            o.scale(J.contactPointA, J.normalA, f);
            h(J.contactPointA, J.contactPointA, i);
            r(J.contactPointA, J.contactPointA, t.position);
            r(J.contactPointB, Q, c);
            o.scale(W, J.normalA, -p);
            h(J.contactPointB, J.contactPointB, W);
            h(J.contactPointB, J.contactPointB, c);
            r(J.contactPointB, J.contactPointB, n.position);
            this.contactEquations.push(J);
            if (this.enableFriction) {
              this.frictionEquations.push(this.createFrictionFromContact(J));
            }
            return 1;
          }
        }
        return 0;
      };
      s.prototype[b.CIRCLE | b.CAPSULE] = s.prototype.circleCapsule = function (t, e, i, s, n, a, o, r, h) {
        return this.circleLine(t, e, i, s, n, a, o, r, h, a.radius);
      };
      s.prototype[b.CIRCLE | b.CONVEX] = s.prototype[b.CIRCLE | b.BOX] = s.prototype.circleConvex = function (t, e, i, s, n, l, c, u, d, p) {
        var p = typeof p == "number" ? p : e.radius;
        var f = P;
        var g = T;
        var m = S;
        var y = C;
        var v = A;
        var b = E;
        var _ = I;
        var x = B;
        var w = M;
        var N = k;
        var U = O;
        var j = -1;
        var X = null;
        var W = D;
        var H = L;
        var V = R;
        var Y = F;
        var q = G;
        var z = false;
        var K = Number.MAX_VALUE;
        var J = 0;
        for (var Z = l.vertices, Q = 0; Q !== Z.length + 1; Q++) {
          var $ = Z[Q % Z.length];
          var tt = Z[(Q + 1) % Z.length];
          o.rotate(f, $, u);
          o.rotate(g, tt, u);
          h(f, f, c);
          h(g, g, c);
          r(m, g, f);
          o.normalize(y, m);
          o.rotate90cw(v, y);
          o.scale(V, v, -e.radius);
          h(V, V, i);
          if (a(V, l, c, u)) {
            o.sub(Y, f, V);
            var et = Math.abs(o.dot(Y, v));
            if (et < K) {
              o.copy(q, V);
              K = et;
              o.scale(H, v, et);
              o.add(H, H, V);
              z = true;
            }
          }
        }
        if (z) {
          if (d) {
            return true;
          }
          var it = this.createContactEquation(t, n, e, l);
          o.sub(it.normalA, q, i);
          o.normalize(it.normalA, it.normalA);
          o.scale(it.contactPointA, it.normalA, p);
          h(it.contactPointA, it.contactPointA, i);
          r(it.contactPointA, it.contactPointA, t.position);
          r(it.contactPointB, H, c);
          h(it.contactPointB, it.contactPointB, c);
          r(it.contactPointB, it.contactPointB, n.position);
          this.contactEquations.push(it);
          if (this.enableFriction) {
            this.frictionEquations.push(this.createFrictionFromContact(it));
          }
          return 1;
        }
        if (p > 0) {
          for (var Q = 0; Q < Z.length; Q++) {
            var st = Z[Q];
            o.rotate(U, st, u);
            h(U, U, c);
            r(N, U, i);
            if (o.squaredLength(N) < Math.pow(p, 2)) {
              if (d) {
                return true;
              }
              var it = this.createContactEquation(t, n, e, l);
              o.copy(it.normalA, N);
              o.normalize(it.normalA, it.normalA);
              o.scale(it.contactPointA, it.normalA, p);
              h(it.contactPointA, it.contactPointA, i);
              r(it.contactPointA, it.contactPointA, t.position);
              r(it.contactPointB, U, c);
              h(it.contactPointB, it.contactPointB, c);
              r(it.contactPointB, it.contactPointB, n.position);
              this.contactEquations.push(it);
              if (this.enableFriction) {
                this.frictionEquations.push(this.createFrictionFromContact(it));
              }
              return 1;
            }
          }
        }
        return 0;
      };
      var K = o.create();
      var J = o.create();
      var Z = o.create();
      var Q = o.create();
      s.prototype[b.PARTICLE | b.CONVEX] = s.prototype[b.PARTICLE | b.BOX] = s.prototype.particleConvex = function (t, e, i, s, n, c, u, d, p) {
        var f = P;
        var g = T;
        var m = S;
        var y = C;
        var v = A;
        var b = E;
        var _ = I;
        var x = B;
        var w = M;
        var j = k;
        var X = O;
        var W = -1;
        var H = null;
        var V = D;
        var Y = L;
        var q = R;
        var z = F;
        var K = G;
        var J = N;
        var Z = U;
        var Q = Number.MAX_VALUE;
        var $ = 0;
        var tt = false;
        var et = c.vertices;
        if (!a(i, c, u, d)) {
          return 0;
        }
        if (p) {
          return true;
        }
        var it = null;
        for (var st = 0; st !== et.length + 1; st++) {
          var nt = et[st % et.length];
          var at = et[(st + 1) % et.length];
          o.rotate(f, nt, d);
          o.rotate(g, at, d);
          h(f, f, u);
          h(g, g, u);
          r(m, g, f);
          o.normalize(y, m);
          o.rotate90cw(v, y);
          r(j, i, f);
          var ot = l(j, v);
          r(b, f, u);
          r(_, i, u);
          o.sub(J, f, i);
          var rt = Math.abs(o.dot(J, v));
          if (rt < Q) {
            Q = rt;
            o.scale(Y, v, rt);
            o.add(Y, Y, i);
            o.copy(Z, v);
            tt = true;
          }
        }
        if (tt) {
          var ht = this.createContactEquation(t, n, e, c);
          o.scale(ht.normalA, Z, -1);
          o.normalize(ht.normalA, ht.normalA);
          o.set(ht.contactPointA, 0, 0);
          h(ht.contactPointA, ht.contactPointA, i);
          r(ht.contactPointA, ht.contactPointA, t.position);
          r(ht.contactPointB, Y, u);
          h(ht.contactPointB, ht.contactPointB, u);
          r(ht.contactPointB, ht.contactPointB, n.position);
          this.contactEquations.push(ht);
          if (this.enableFriction) {
            this.frictionEquations.push(this.createFrictionFromContact(ht));
          }
          return 1;
        }
        return 0;
      };
      s.prototype[b.CIRCLE] = s.prototype.circleCircle = function (t, e, i, s, n, a, l, c, u, d, p) {
        var f = P;
        var d = d || e.radius;
        var p = p || a.radius;
        r(f, i, l);
        var g = d + p;
        if (o.squaredLength(f) > Math.pow(g, 2)) {
          return 0;
        }
        if (u) {
          return true;
        }
        var m = this.createContactEquation(t, n, e, a);
        r(m.normalA, l, i);
        o.normalize(m.normalA, m.normalA);
        o.scale(m.contactPointA, m.normalA, d);
        o.scale(m.contactPointB, m.normalA, -p);
        h(m.contactPointA, m.contactPointA, i);
        r(m.contactPointA, m.contactPointA, t.position);
        h(m.contactPointB, m.contactPointB, l);
        r(m.contactPointB, m.contactPointB, n.position);
        this.contactEquations.push(m);
        if (this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromContact(m));
        }
        return 1;
      };
      s.prototype[b.PLANE | b.CONVEX] = s.prototype[b.PLANE | b.BOX] = s.prototype.planeConvex = function (t, e, i, s, n, a, c, u, d) {
        var p = P;
        var f = T;
        var g = S;
        var m = 0;
        o.rotate(f, w, s);
        for (var y = 0; y !== a.vertices.length; y++) {
          var v = a.vertices[y];
          o.rotate(p, v, u);
          h(p, p, c);
          r(g, p, i);
          if (l(g, f) <= 0) {
            if (d) {
              return true;
            }
            m++;
            var b = this.createContactEquation(t, n, e, a);
            r(g, p, i);
            o.copy(b.normalA, f);
            var _ = l(g, b.normalA);
            o.scale(g, b.normalA, _);
            r(b.contactPointB, p, n.position);
            r(b.contactPointA, p, g);
            r(b.contactPointA, b.contactPointA, t.position);
            this.contactEquations.push(b);
            if (!this.enableFrictionReduction) {
              if (this.enableFriction) {
                this.frictionEquations.push(this.createFrictionFromContact(b));
              }
            }
          }
        }
        if (this.enableFrictionReduction && this.enableFriction && m) {
          this.frictionEquations.push(this.createFrictionFromAverage(m));
        }
        return m;
      };
      s.prototype[b.PARTICLE | b.PLANE] = s.prototype.particlePlane = function (t, e, i, s, n, a, h, c, u) {
        var d = P;
        var p = T;
        c = c || 0;
        r(d, i, h);
        o.rotate(p, w, c);
        var f = l(d, p);
        if (f > 0) {
          return 0;
        }
        if (u) {
          return true;
        }
        var g = this.createContactEquation(n, t, a, e);
        o.copy(g.normalA, p);
        o.scale(d, g.normalA, f);
        r(g.contactPointA, i, d);
        r(g.contactPointA, g.contactPointA, n.position);
        r(g.contactPointB, i, t.position);
        this.contactEquations.push(g);
        if (this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromContact(g));
        }
        return 1;
      };
      s.prototype[b.CIRCLE | b.PARTICLE] = s.prototype.circleParticle = function (t, e, i, s, n, a, l, c, u) {
        var d = P;
        r(d, l, i);
        if (o.squaredLength(d) > Math.pow(e.radius, 2)) {
          return 0;
        }
        if (u) {
          return true;
        }
        var p = this.createContactEquation(t, n, e, a);
        o.copy(p.normalA, d);
        o.normalize(p.normalA, p.normalA);
        o.scale(p.contactPointA, p.normalA, e.radius);
        h(p.contactPointA, p.contactPointA, i);
        r(p.contactPointA, p.contactPointA, t.position);
        r(p.contactPointB, l, n.position);
        this.contactEquations.push(p);
        if (this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromContact(p));
        }
        return 1;
      };
      var $ = new y({
        radius: 1
      });
      var tt = o.create();
      var et = o.create();
      var it = o.create();
      s.prototype[b.PLANE | b.CAPSULE] = s.prototype.planeCapsule = function (t, e, i, s, n, a, r, l, c) {
        var u = tt;
        var d = et;
        var p = $;
        var f = it;
        o.set(u, -a.length / 2, 0);
        o.rotate(u, u, l);
        h(u, u, r);
        o.set(d, a.length / 2, 0);
        o.rotate(d, d, l);
        h(d, d, r);
        p.radius = a.radius;
        var g;
        if (this.enableFrictionReduction) {
          g = this.enableFriction;
          this.enableFriction = false;
        }
        var m = this.circlePlane(n, p, u, 0, t, e, i, s, c);
        var y = this.circlePlane(n, p, d, 0, t, e, i, s, c);
        if (this.enableFrictionReduction) {
          this.enableFriction = g;
        }
        if (c) {
          return m || y;
        }
        var v = m + y;
        if (this.enableFrictionReduction && v) {
          this.frictionEquations.push(this.createFrictionFromAverage(v));
        }
        return v;
      };
      s.prototype[b.CIRCLE | b.PLANE] = s.prototype.circlePlane = function (t, e, i, s, n, a, c, u, d) {
        var p = t;
        var f = e;
        var g = i;
        var m = n;
        var y = a;
        var v = c;
        var b = u;
        b = b || 0;
        var _ = P;
        var x = T;
        var C = S;
        r(_, g, v);
        o.rotate(x, w, b);
        var A = l(x, _);
        if (A > f.radius) {
          return 0;
        }
        if (d) {
          return true;
        }
        var E = this.createContactEquation(m, p, a, e);
        o.copy(E.normalA, x);
        o.scale(E.contactPointB, E.normalA, -f.radius);
        h(E.contactPointB, E.contactPointB, g);
        r(E.contactPointB, E.contactPointB, p.position);
        o.scale(C, E.normalA, A);
        r(E.contactPointA, _, C);
        h(E.contactPointA, E.contactPointA, v);
        r(E.contactPointA, E.contactPointA, m.position);
        this.contactEquations.push(E);
        if (this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromContact(E));
        }
        return 1;
      };
      s.prototype[b.CONVEX] = s.prototype[b.CONVEX | b.BOX] = s.prototype[b.BOX] = s.prototype.convexConvex = function (t, e, i, n, a, c, u, d, p, f) {
        var g = P;
        var m = T;
        var y = S;
        var v = C;
        var b = A;
        var _ = E;
        var x = I;
        var w = B;
        var k = M;
        var O = 0;
        var f = typeof f == "number" ? f : 0;
        if (!s.findSeparatingAxis(e, i, n, c, u, d, g)) {
          return 0;
        }
        r(w, u, i);
        if (l(g, w) > 0) {
          o.scale(g, g, -1);
        }
        var D = s.getClosestEdge(e, n, g, true);
        var L = s.getClosestEdge(c, d, g);
        if (D === -1 || L === -1) {
          return 0;
        }
        for (var R = 0; R < 2; R++) {
          var F = D;
          var G = L;
          var N = e;
          var U = c;
          var j = i;
          var X = u;
          var W = n;
          var H = d;
          var V = t;
          var Y = a;
          if (R === 0) {
            var q;
            q = F;
            F = G;
            G = q;
            q = N;
            N = U;
            U = q;
            q = j;
            j = X;
            X = q;
            q = W;
            W = H;
            H = q;
            q = V;
            V = Y;
            Y = q;
          }
          for (var z = G; z < G + 2; z++) {
            var K = U.vertices[(z + U.vertices.length) % U.vertices.length];
            o.rotate(m, K, H);
            h(m, m, X);
            var J = 0;
            for (var Z = F - 1; Z < F + 2; Z++) {
              var Q = N.vertices[(Z + N.vertices.length) % N.vertices.length];
              var $ = N.vertices[(Z + 1 + N.vertices.length) % N.vertices.length];
              o.rotate(y, Q, W);
              o.rotate(v, $, W);
              h(y, y, j);
              h(v, v, j);
              r(b, v, y);
              o.rotate90cw(k, b);
              o.normalize(k, k);
              r(w, m, y);
              var tt = l(k, w);
              if (Z === F && tt <= f || Z !== F && tt <= 0) {
                J++;
              }
            }
            if (J >= 3) {
              if (p) {
                return true;
              }
              var et = this.createContactEquation(V, Y, N, U);
              O++;
              var Q = N.vertices[F % N.vertices.length];
              var $ = N.vertices[(F + 1) % N.vertices.length];
              o.rotate(y, Q, W);
              o.rotate(v, $, W);
              h(y, y, j);
              h(v, v, j);
              r(b, v, y);
              o.rotate90cw(et.normalA, b);
              o.normalize(et.normalA, et.normalA);
              r(w, m, y);
              var tt = l(et.normalA, w);
              o.scale(x, et.normalA, tt);
              r(et.contactPointA, m, j);
              r(et.contactPointA, et.contactPointA, x);
              h(et.contactPointA, et.contactPointA, j);
              r(et.contactPointA, et.contactPointA, V.position);
              r(et.contactPointB, m, X);
              h(et.contactPointB, et.contactPointB, X);
              r(et.contactPointB, et.contactPointB, Y.position);
              this.contactEquations.push(et);
              if (!this.enableFrictionReduction) {
                if (this.enableFriction) {
                  this.frictionEquations.push(this.createFrictionFromContact(et));
                }
              }
            }
          }
        }
        if (this.enableFrictionReduction && this.enableFriction && O) {
          this.frictionEquations.push(this.createFrictionFromAverage(O));
        }
        return O;
      };
      var st = o.fromValues(0, 0);
      s.projectConvexOntoAxis = function (t, e, i, s, n) {
        var a = null;
        var r = null;
        var h;
        var c;
        var u = st;
        o.rotate(u, s, -i);
        for (var d = 0; d < t.vertices.length; d++) {
          h = t.vertices[d];
          c = l(h, u);
          if (a === null || c > a) {
            a = c;
          }
          if (r === null || c < r) {
            r = c;
          }
        }
        if (r > a) {
          var p = r;
          r = a;
          a = p;
        }
        var f = l(e, s);
        o.set(n, r + f, a + f);
      };
      var nt = o.fromValues(0, 0);
      var at = o.fromValues(0, 0);
      var ot = o.fromValues(0, 0);
      var rt = o.fromValues(0, 0);
      var ht = o.fromValues(0, 0);
      var lt = o.fromValues(0, 0);
      s.findSeparatingAxis = function (t, e, i, n, a, h, l) {
        var c = null;
        var u = false;
        var d = false;
        var p = nt;
        var f = at;
        var g = ot;
        var m = rt;
        var y = ht;
        var v = lt;
        if (t instanceof x && n instanceof x) {
          for (var b = 0; b !== 2; b++) {
            var _ = t;
            var w = i;
            if (b === 1) {
              _ = n;
              w = h;
            }
            for (var P = 0; P !== 2; P++) {
              if (P === 0) {
                o.set(m, 0, 1);
              } else if (P === 1) {
                o.set(m, 1, 0);
              }
              if (w !== 0) {
                o.rotate(m, m, w);
              }
              s.projectConvexOntoAxis(t, e, i, m, y);
              s.projectConvexOntoAxis(n, a, h, m, v);
              var T = y;
              var S = v;
              var C = false;
              if (y[0] > v[0]) {
                S = y;
                T = v;
                C = true;
              }
              var A = S[0] - T[1];
              u = A <= 0;
              if (c === null || A > c) {
                o.copy(l, m);
                c = A;
                d = u;
              }
            }
          }
        } else {
          for (var b = 0; b !== 2; b++) {
            var _ = t;
            var w = i;
            if (b === 1) {
              _ = n;
              w = h;
            }
            for (var P = 0; P !== _.vertices.length; P++) {
              o.rotate(f, _.vertices[P], w);
              o.rotate(g, _.vertices[(P + 1) % _.vertices.length], w);
              r(p, g, f);
              o.rotate90cw(m, p);
              o.normalize(m, m);
              s.projectConvexOntoAxis(t, e, i, m, y);
              s.projectConvexOntoAxis(n, a, h, m, v);
              var T = y;
              var S = v;
              var C = false;
              if (y[0] > v[0]) {
                S = y;
                T = v;
                C = true;
              }
              var A = S[0] - T[1];
              u = A <= 0;
              if (c === null || A > c) {
                o.copy(l, m);
                c = A;
                d = u;
              }
            }
          }
        }
        return d;
      };
      var ct = o.fromValues(0, 0);
      var ut = o.fromValues(0, 0);
      var dt = o.fromValues(0, 0);
      s.getClosestEdge = function (t, e, i, s) {
        var n = ct;
        var a = ut;
        var h = dt;
        o.rotate(n, i, -e);
        if (s) {
          o.scale(n, n, -1);
        }
        var c = -1;
        for (var u = t.vertices.length, d = -1, p = 0; p !== u; p++) {
          r(a, t.vertices[(p + 1) % u], t.vertices[p % u]);
          o.rotate90cw(h, a);
          o.normalize(h, h);
          var f = l(h, n);
          if (c === -1 || f > d) {
            c = p % u;
            d = f;
          }
        }
        return c;
      };
      var pt = o.create();
      var ft = o.create();
      var gt = o.create();
      var mt = o.create();
      var yt = o.create();
      var vt = o.create();
      var bt = o.create();
      s.prototype[b.CIRCLE | b.HEIGHTFIELD] = s.prototype.circleHeightfield = function (t, e, i, s, n, a, l, c, u, d) {
        var p = a.heights;
        var d = d || e.radius;
        var f = a.elementWidth;
        var g = ft;
        var m = pt;
        var y = yt;
        var v = bt;
        var b = vt;
        var _ = gt;
        var x = mt;
        var w = Math.floor((i[0] - d - l[0]) / f);
        var P = Math.ceil((i[0] + d - l[0]) / f);
        if (w < 0) {
          w = 0;
        }
        if (P >= p.length) {
          P = p.length - 1;
        }
        var T = p[w];
        var S = p[P];
        for (var C = w; C < P; C++) {
          if (p[C] < S) {
            S = p[C];
          }
          if (p[C] > T) {
            T = p[C];
          }
        }
        if (i[1] - d > T) {
          return !u && 0;
        }
        var A = false;
        for (var C = w; C < P; C++) {
          o.set(_, C * f, p[C]);
          o.set(x, (C + 1) * f, p[C + 1]);
          o.add(_, _, l);
          o.add(x, x, l);
          o.sub(b, x, _);
          o.rotate(b, b, Math.PI / 2);
          o.normalize(b, b);
          o.scale(m, b, -d);
          o.add(m, m, i);
          o.sub(g, m, _);
          var E = o.dot(g, b);
          if (m[0] >= _[0] && m[0] < x[0] && E <= 0) {
            if (u) {
              return true;
            }
            A = true;
            o.scale(g, b, -E);
            o.add(y, m, g);
            o.copy(v, b);
            var I = this.createContactEquation(n, t, a, e);
            o.copy(I.normalA, v);
            o.scale(I.contactPointB, I.normalA, -d);
            h(I.contactPointB, I.contactPointB, i);
            r(I.contactPointB, I.contactPointB, t.position);
            o.copy(I.contactPointA, y);
            o.sub(I.contactPointA, I.contactPointA, n.position);
            this.contactEquations.push(I);
            if (this.enableFriction) {
              this.frictionEquations.push(this.createFrictionFromContact(I));
            }
          }
        }
        A = false;
        if (d > 0) {
          for (var C = w; C <= P; C++) {
            o.set(_, C * f, p[C]);
            o.add(_, _, l);
            o.sub(g, i, _);
            if (o.squaredLength(g) < Math.pow(d, 2)) {
              if (u) {
                return true;
              }
              A = true;
              var I = this.createContactEquation(n, t, a, e);
              o.copy(I.normalA, g);
              o.normalize(I.normalA, I.normalA);
              o.scale(I.contactPointB, I.normalA, -d);
              h(I.contactPointB, I.contactPointB, i);
              r(I.contactPointB, I.contactPointB, t.position);
              r(I.contactPointA, _, l);
              h(I.contactPointA, I.contactPointA, l);
              r(I.contactPointA, I.contactPointA, n.position);
              this.contactEquations.push(I);
              if (this.enableFriction) {
                this.frictionEquations.push(this.createFrictionFromContact(I));
              }
            }
          }
        }
        if (A) {
          return 1;
        } else {
          return 0;
        }
      };
      var _t = o.create();
      var xt = o.create();
      var wt = o.create();
      var Pt = new v({
        vertices: [o.create(), o.create(), o.create(), o.create()]
      });
      s.prototype[b.BOX | b.HEIGHTFIELD] = s.prototype[b.CONVEX | b.HEIGHTFIELD] = s.prototype.convexHeightfield = function (t, e, i, s, n, a, r, h, l) {
        var c = a.heights;
        var u = a.elementWidth;
        var d = _t;
        var p = xt;
        var f = wt;
        var g = Pt;
        var m = Math.floor((t.aabb.lowerBound[0] - r[0]) / u);
        var y = Math.ceil((t.aabb.upperBound[0] - r[0]) / u);
        if (m < 0) {
          m = 0;
        }
        if (y >= c.length) {
          y = c.length - 1;
        }
        var v = c[m];
        var b = c[y];
        for (var _ = m; _ < y; _++) {
          if (c[_] < b) {
            b = c[_];
          }
          if (c[_] > v) {
            v = c[_];
          }
        }
        if (t.aabb.lowerBound[1] > v) {
          return !l && 0;
        }
        var x = false;
        var w = 0;
        for (var _ = m; _ < y; _++) {
          o.set(d, _ * u, c[_]);
          o.set(p, (_ + 1) * u, c[_ + 1]);
          o.add(d, d, r);
          o.add(p, p, r);
          var P = 100;
          o.set(f, (p[0] + d[0]) * 0.5, (p[1] + d[1] - 100) * 0.5);
          o.sub(g.vertices[0], p, f);
          o.sub(g.vertices[1], d, f);
          o.copy(g.vertices[2], g.vertices[1]);
          o.copy(g.vertices[3], g.vertices[0]);
          g.vertices[2][1] -= 100;
          g.vertices[3][1] -= 100;
          w += this.convexConvex(t, e, i, s, n, g, f, 0, l);
        }
        return w;
      };
    }, {
      "../equations/ContactEquation": 21,
      "../equations/Equation": 22,
      "../equations/FrictionEquation": 23,
      "../math/vec2": 30,
      "../objects/Body": 31,
      "../shapes/Box": 37,
      "../shapes/Circle": 39,
      "../shapes/Convex": 40,
      "../shapes/Shape": 45,
      "../utils/ContactEquationPool": 48,
      "../utils/FrictionEquationPool": 49,
      "../utils/TupleDictionary": 56,
      "../utils/Utils": 57
    }],
    11: [function (t, e, i) {
      function s(t) {
        t = t || {};
        this.from = t.from ? a.fromValues(t.from[0], t.from[1]) : a.create();
        this.to = t.to ? a.fromValues(t.to[0], t.to[1]) : a.create();
        this.checkCollisionResponse = t.checkCollisionResponse === undefined || t.checkCollisionResponse;
        this.skipBackfaces = !!t.skipBackfaces;
        this.collisionMask = t.collisionMask !== undefined ? t.collisionMask : -1;
        this.collisionGroup = t.collisionGroup !== undefined ? t.collisionGroup : -1;
        this.mode = t.mode !== undefined ? t.mode : s.ANY;
        this.callback = t.callback || function (t) {};
        this.direction = a.create();
        this.length = 1;
        this.update();
      }
      function n(t, e, i) {
        a.sub(u, i, t);
        var s = a.dot(u, e);
        a.scale(d, e, s);
        a.add(d, d, t);
        return a.squaredDistance(i, d);
      }
      e.exports = s;
      var a = t("../math/vec2");
      var o = t("../collision/RaycastResult");
      var r = t("../shapes/Shape");
      var h = t("../collision/AABB");
      s.prototype.constructor = s;
      s.CLOSEST = 1;
      s.ANY = 2;
      s.ALL = 4;
      s.prototype.update = function () {
        var t = this.direction;
        a.sub(t, this.to, this.from);
        this.length = a.length(t);
        a.normalize(t, t);
      };
      s.prototype.intersectBodies = function (t, e) {
        for (var i = 0, s = e.length; !t.shouldStop(this) && i < s; i++) {
          var n = e[i];
          var a = n.getAABB();
          if (a.overlapsRay(this) >= 0 || a.containsPoint(this.from)) {
            this.intersectBody(t, n);
          }
        }
      };
      var l = a.create();
      s.prototype.intersectBody = function (t, e) {
        var i = this.checkCollisionResponse;
        if (!i || e.collisionResponse) {
          var s = l;
          for (var n = 0, o = e.shapes.length; n < o; n++) {
            var r = e.shapes[n];
            if ((!i || r.collisionResponse) && (this.collisionGroup & r.collisionMask) != 0 && (r.collisionGroup & this.collisionMask) != 0) {
              a.rotate(s, r.position, e.angle);
              a.add(s, s, e.position);
              var h = r.angle + e.angle;
              this.intersectShape(t, r, h, s, e);
              if (t.shouldStop(this)) {
                break;
              }
            }
          }
        }
      };
      s.prototype.intersectShape = function (t, e, i, s, a) {
        if (!(n(this.from, this.direction, s) > e.boundingRadius * e.boundingRadius)) {
          this._currentBody = a;
          this._currentShape = e;
          e.raycast(t, this, s, i);
          this._currentBody = this._currentShape = null;
        }
      };
      s.prototype.getAABB = function (t) {
        var e = this.to;
        var i = this.from;
        a.set(t.lowerBound, Math.min(e[0], i[0]), Math.min(e[1], i[1]));
        a.set(t.upperBound, Math.max(e[0], i[0]), Math.max(e[1], i[1]));
      };
      var c = a.create();
      s.prototype.reportIntersection = function (t, e, i, n) {
        var o = this.from;
        var r = this.to;
        var h = this._currentShape;
        var l = this._currentBody;
        if (!this.skipBackfaces || !(a.dot(i, this.direction) > 0)) {
          switch (this.mode) {
            case s.ALL:
              t.set(i, h, l, e, n);
              this.callback(t);
              break;
            case s.CLOSEST:
              if (e < t.fraction || !t.hasHit()) {
                t.set(i, h, l, e, n);
              }
              break;
            case s.ANY:
              t.set(i, h, l, e, n);
          }
        }
      };
      var u = a.create();
      var d = a.create();
    }, {
      "../collision/AABB": 7,
      "../collision/RaycastResult": 12,
      "../math/vec2": 30,
      "../shapes/Shape": 45
    }],
    12: [function (t, e, i) {
      function s() {
        this.normal = n.create();
        this.shape = null;
        this.body = null;
        this.faceIndex = -1;
        this.fraction = -1;
        this.isStopped = false;
      }
      var n = t("../math/vec2");
      var a = t("../collision/Ray");
      e.exports = s;
      s.prototype.reset = function () {
        n.set(this.normal, 0, 0);
        this.shape = null;
        this.body = null;
        this.faceIndex = -1;
        this.fraction = -1;
        this.isStopped = false;
      };
      s.prototype.getHitDistance = function (t) {
        return n.distance(t.from, t.to) * this.fraction;
      };
      s.prototype.hasHit = function () {
        return this.fraction !== -1;
      };
      s.prototype.getHitPoint = function (t, e) {
        n.lerp(t, e.from, e.to, this.fraction);
      };
      s.prototype.stop = function () {
        this.isStopped = true;
      };
      s.prototype.shouldStop = function (t) {
        return this.isStopped || this.fraction !== -1 && t.mode === a.ANY;
      };
      s.prototype.set = function (t, e, i, s, a) {
        n.copy(this.normal, t);
        this.shape = e;
        this.body = i;
        this.fraction = s;
        this.faceIndex = a;
      };
    }, {
      "../collision/Ray": 11,
      "../math/vec2": 30
    }],
    13: [function (t, e, i) {
      function s() {
        a.call(this, a.SAP);
        this.axisList = [];
        this.axisIndex = 0;
        var t = this;
        this._addBodyHandler = function (e) {
          t.axisList.push(e.body);
        };
        this._removeBodyHandler = function (e) {
          var i = t.axisList.indexOf(e.body);
          if (i !== -1) {
            t.axisList.splice(i, 1);
          }
        };
      }
      var n = t("../utils/Utils");
      var a = t("../collision/Broadphase");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.setWorld = function (t) {
        this.axisList.length = 0;
        n.appendArray(this.axisList, t.bodies);
        t.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler);
        t.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler);
        this.world = t;
      };
      s.sortAxisList = function (t, e) {
        e |= 0;
        for (var i = 1, s = t.length; i < s; i++) {
          for (var n = t[i], a = i - 1; a >= 0 && !(t[a].aabb.lowerBound[e] <= n.aabb.lowerBound[e]); a--) {
            t[a + 1] = t[a];
          }
          t[a + 1] = n;
        }
        return t;
      };
      s.prototype.sortList = function () {
        var t = this.axisList;
        var e = this.axisIndex;
        s.sortAxisList(t, e);
      };
      s.prototype.getCollisionPairs = function (t) {
        var e = this.axisList;
        var i = this.result;
        var s = this.axisIndex;
        i.length = 0;
        for (var n = e.length; n--;) {
          var o = e[n];
          if (o.aabbNeedsUpdate) {
            o.updateAABB();
          }
        }
        this.sortList();
        for (var r = 0, h = e.length | 0; r !== h; r++) {
          var l = e[r];
          for (var c = r + 1; c < h; c++) {
            var u = e[c];
            var d = u.aabb.lowerBound[s] <= l.aabb.upperBound[s];
            if (!d) {
              break;
            }
            if (a.canCollide(l, u) && this.boundingVolumeCheck(l, u)) {
              i.push(l, u);
            }
          }
        }
        return i;
      };
      s.prototype.aabbQuery = function (t, e, i) {
        i = i || [];
        this.sortList();
        var s = this.axisIndex;
        var n = "x";
        if (s === 1) {
          n = "y";
        }
        if (s === 2) {
          n = "z";
        }
        for (var a = this.axisList, o = e.lowerBound[n], r = e.upperBound[n], h = 0; h < a.length; h++) {
          var l = a[h];
          if (l.aabbNeedsUpdate) {
            l.updateAABB();
          }
          if (l.aabb.overlaps(e)) {
            i.push(l);
          }
        }
        return i;
      };
    }, {
      "../collision/Broadphase": 8,
      "../utils/Utils": 57
    }],
    14: [function (t, e, i) {
      function s(t, e, i, s) {
        this.type = i;
        s = n.defaults(s, {
          collideConnected: true,
          wakeUpBodies: true
        });
        this.equations = [];
        this.bodyA = t;
        this.bodyB = e;
        this.collideConnected = s.collideConnected;
        if (s.wakeUpBodies) {
          if (t) {
            t.wakeUp();
          }
          if (e) {
            e.wakeUp();
          }
        }
      }
      e.exports = s;
      var n = t("../utils/Utils");
      s.prototype.update = function () {
        throw new Error("method update() not implmemented in this Constraint subclass!");
      };
      s.DISTANCE = 1;
      s.GEAR = 2;
      s.LOCK = 3;
      s.PRISMATIC = 4;
      s.REVOLUTE = 5;
      s.prototype.setStiffness = function (t) {
        for (var e = this.equations, i = 0; i !== e.length; i++) {
          var s = e[i];
          s.stiffness = t;
          s.needsUpdate = true;
        }
      };
      s.prototype.setRelaxation = function (t) {
        for (var e = this.equations, i = 0; i !== e.length; i++) {
          var s = e[i];
          s.relaxation = t;
          s.needsUpdate = true;
        }
      };
    }, {
      "../utils/Utils": 57
    }],
    15: [function (t, e, i) {
      function s(t, e, i) {
        i = r.defaults(i, {
          localAnchorA: [0, 0],
          localAnchorB: [0, 0]
        });
        n.call(this, t, e, n.DISTANCE, i);
        this.localAnchorA = o.fromValues(i.localAnchorA[0], i.localAnchorA[1]);
        this.localAnchorB = o.fromValues(i.localAnchorB[0], i.localAnchorB[1]);
        var s = this.localAnchorA;
        var h = this.localAnchorB;
        this.distance = 0;
        if (typeof i.distance == "number") {
          this.distance = i.distance;
        } else {
          var l = o.create();
          var c = o.create();
          var u = o.create();
          o.rotate(l, s, t.angle);
          o.rotate(c, h, e.angle);
          o.add(u, e.position, c);
          o.sub(u, u, l);
          o.sub(u, u, t.position);
          this.distance = o.length(u);
        }
        var d;
        d = i.maxForce === undefined ? Number.MAX_VALUE : i.maxForce;
        var p = new a(t, e, -d, d);
        this.equations = [p];
        this.maxForce = d;
        var u = o.create();
        var f = o.create();
        var g = o.create();
        var m = this;
        p.computeGq = function () {
          var t = this.bodyA;
          var e = this.bodyB;
          var i = t.position;
          var n = e.position;
          o.rotate(f, s, t.angle);
          o.rotate(g, h, e.angle);
          o.add(u, n, g);
          o.sub(u, u, f);
          o.sub(u, u, i);
          return o.length(u) - m.distance;
        };
        this.setMaxForce(d);
        this.upperLimitEnabled = false;
        this.upperLimit = 1;
        this.lowerLimitEnabled = false;
        this.lowerLimit = 0;
        this.position = 0;
      }
      var n = t("./Constraint");
      var a = t("../equations/Equation");
      var o = t("../math/vec2");
      var r = t("../utils/Utils");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      var h = o.create();
      var l = o.create();
      var c = o.create();
      s.prototype.update = function () {
        var t = this.equations[0];
        var e = this.bodyA;
        var i = this.bodyB;
        var s = this.distance;
        var n = e.position;
        var a = i.position;
        var r = this.equations[0];
        var u = t.G;
        o.rotate(l, this.localAnchorA, e.angle);
        o.rotate(c, this.localAnchorB, i.angle);
        o.add(h, a, c);
        o.sub(h, h, l);
        o.sub(h, h, n);
        this.position = o.length(h);
        var d = false;
        if (this.upperLimitEnabled && this.position > this.upperLimit) {
          r.maxForce = 0;
          r.minForce = -this.maxForce;
          this.distance = this.upperLimit;
          d = true;
        }
        if (this.lowerLimitEnabled && this.position < this.lowerLimit) {
          r.maxForce = this.maxForce;
          r.minForce = 0;
          this.distance = this.lowerLimit;
          d = true;
        }
        if ((this.lowerLimitEnabled || this.upperLimitEnabled) && !d) {
          r.enabled = false;
          return;
        }
        r.enabled = true;
        o.normalize(h, h);
        var p = o.crossLength(l, h);
        var f = o.crossLength(c, h);
        u[0] = -h[0];
        u[1] = -h[1];
        u[2] = -p;
        u[3] = h[0];
        u[4] = h[1];
        u[5] = f;
      };
      s.prototype.setMaxForce = function (t) {
        var e = this.equations[0];
        e.minForce = -t;
        e.maxForce = t;
      };
      s.prototype.getMaxForce = function () {
        return this.equations[0].maxForce;
      };
    }, {
      "../equations/Equation": 22,
      "../math/vec2": 30,
      "../utils/Utils": 57,
      "./Constraint": 14
    }],
    16: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        n.call(this, t, e, n.GEAR, i);
        this.ratio = i.ratio !== undefined ? i.ratio : 1;
        this.angle = i.angle !== undefined ? i.angle : e.angle - this.ratio * t.angle;
        i.angle = this.angle;
        i.ratio = this.ratio;
        this.equations = [new o(t, e, i)];
        if (i.maxTorque !== undefined) {
          this.setMaxTorque(i.maxTorque);
        }
      }
      var n = t("./Constraint");
      var a = t("../equations/Equation");
      var o = t("../equations/AngleLockEquation");
      var r = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.update = function () {
        var t = this.equations[0];
        if (t.ratio !== this.ratio) {
          t.setRatio(this.ratio);
        }
        t.angle = this.angle;
      };
      s.prototype.setMaxTorque = function (t) {
        this.equations[0].setMaxTorque(t);
      };
      s.prototype.getMaxTorque = function (t) {
        return this.equations[0].maxForce;
      };
    }, {
      "../equations/AngleLockEquation": 20,
      "../equations/Equation": 22,
      "../math/vec2": 30,
      "./Constraint": 14
    }],
    17: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        n.call(this, t, e, n.LOCK, i);
        var s = i.maxForce === undefined ? Number.MAX_VALUE : i.maxForce;
        var r = i.localAngleB || 0;
        var h = new o(t, e, -s, s);
        var l = new o(t, e, -s, s);
        var c = new o(t, e, -s, s);
        var u = a.create();
        var d = a.create();
        var p = this;
        h.computeGq = function () {
          a.rotate(u, p.localOffsetB, t.angle);
          a.sub(d, e.position, t.position);
          a.sub(d, d, u);
          return d[0];
        };
        l.computeGq = function () {
          a.rotate(u, p.localOffsetB, t.angle);
          a.sub(d, e.position, t.position);
          a.sub(d, d, u);
          return d[1];
        };
        var f = a.create();
        var g = a.create();
        c.computeGq = function () {
          a.rotate(f, p.localOffsetB, e.angle - p.localAngleB);
          a.scale(f, f, -1);
          a.sub(d, t.position, e.position);
          a.add(d, d, f);
          a.rotate(g, f, -Math.PI / 2);
          a.normalize(g, g);
          return a.dot(d, g);
        };
        this.localOffsetB = a.create();
        if (i.localOffsetB) {
          a.copy(this.localOffsetB, i.localOffsetB);
        } else {
          a.sub(this.localOffsetB, e.position, t.position);
          a.rotate(this.localOffsetB, this.localOffsetB, -t.angle);
        }
        this.localAngleB = 0;
        if (typeof i.localAngleB == "number") {
          this.localAngleB = i.localAngleB;
        } else {
          this.localAngleB = e.angle - t.angle;
        }
        this.equations.push(h, l, c);
        this.setMaxForce(s);
      }
      var n = t("./Constraint");
      var a = t("../math/vec2");
      var o = t("../equations/Equation");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.setMaxForce = function (t) {
        var e = this.equations;
        for (var i = 0; i < this.equations.length; i++) {
          e[i].maxForce = t;
          e[i].minForce = -t;
        }
      };
      s.prototype.getMaxForce = function () {
        return this.equations[0].maxForce;
      };
      var r = a.create();
      var h = a.create();
      var l = a.create();
      var c = a.fromValues(1, 0);
      var u = a.fromValues(0, 1);
      s.prototype.update = function () {
        var t = this.equations[0];
        var e = this.equations[1];
        var i = this.equations[2];
        var s = this.bodyA;
        var n = this.bodyB;
        a.rotate(r, this.localOffsetB, s.angle);
        a.rotate(h, this.localOffsetB, n.angle - this.localAngleB);
        a.scale(h, h, -1);
        a.rotate(l, h, Math.PI / 2);
        a.normalize(l, l);
        t.G[0] = -1;
        t.G[1] = 0;
        t.G[2] = -a.crossLength(r, c);
        t.G[3] = 1;
        e.G[0] = 0;
        e.G[1] = -1;
        e.G[2] = -a.crossLength(r, u);
        e.G[4] = 1;
        i.G[0] = -l[0];
        i.G[1] = -l[1];
        i.G[3] = l[0];
        i.G[4] = l[1];
        i.G[5] = a.crossLength(h, l);
      };
    }, {
      "../equations/Equation": 22,
      "../math/vec2": 30,
      "./Constraint": 14
    }],
    18: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        n.call(this, t, e, n.PRISMATIC, i);
        var s = r.fromValues(0, 0);
        var l = r.fromValues(1, 0);
        var c = r.fromValues(0, 0);
        if (i.localAnchorA) {
          r.copy(s, i.localAnchorA);
        }
        if (i.localAxisA) {
          r.copy(l, i.localAxisA);
        }
        if (i.localAnchorB) {
          r.copy(c, i.localAnchorB);
        }
        this.localAnchorA = s;
        this.localAnchorB = c;
        this.localAxisA = l;
        var u = this.maxForce = i.maxForce !== undefined ? i.maxForce : Number.MAX_VALUE;
        var d = new o(t, e, -u, u);
        var p = new r.create();
        var f = new r.create();
        var g = new r.create();
        var m = new r.create();
        d.computeGq = function () {
          return r.dot(g, m);
        };
        d.updateJacobian = function () {
          var i = this.G;
          var n = t.position;
          var a = e.position;
          r.rotate(p, s, t.angle);
          r.rotate(f, c, e.angle);
          r.add(g, a, f);
          r.sub(g, g, n);
          r.sub(g, g, p);
          r.rotate(m, l, t.angle + Math.PI / 2);
          i[0] = -m[0];
          i[1] = -m[1];
          i[2] = -r.crossLength(p, m) + r.crossLength(m, g);
          i[3] = m[0];
          i[4] = m[1];
          i[5] = r.crossLength(f, m);
        };
        this.equations.push(d);
        if (!i.disableRotationalLock) {
          var y = new h(t, e, -u, u);
          this.equations.push(y);
        }
        this.position = 0;
        this.velocity = 0;
        this.lowerLimitEnabled = i.lowerLimit !== undefined;
        this.upperLimitEnabled = i.upperLimit !== undefined;
        this.lowerLimit = i.lowerLimit !== undefined ? i.lowerLimit : 0;
        this.upperLimit = i.upperLimit !== undefined ? i.upperLimit : 1;
        this.upperLimitEquation = new a(t, e);
        this.lowerLimitEquation = new a(t, e);
        this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0;
        this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = u;
        this.motorEquation = new o(t, e);
        this.motorEnabled = false;
        this.motorSpeed = 0;
        var v = this;
        var b = this.motorEquation;
        var _ = b.computeGW;
        b.computeGq = function () {
          return 0;
        };
        b.computeGW = function () {
          var t = this.G;
          var e = this.bodyA;
          var i = this.bodyB;
          var s = e.velocity;
          var n = i.velocity;
          var a = e.angularVelocity;
          var o = i.angularVelocity;
          return this.gmult(t, s, a, n, o) + v.motorSpeed;
        };
      }
      var n = t("./Constraint");
      var a = t("../equations/ContactEquation");
      var o = t("../equations/Equation");
      var r = t("../math/vec2");
      var h = t("../equations/RotationalLockEquation");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      var l = r.create();
      var c = r.create();
      var u = r.create();
      var d = r.create();
      var p = r.create();
      var f = r.create();
      s.prototype.update = function () {
        var t = this.equations;
        var e = t[0];
        var i = this.upperLimit;
        var s = this.lowerLimit;
        var n = this.upperLimitEquation;
        var a = this.lowerLimitEquation;
        var o = this.bodyA;
        var h = this.bodyB;
        var g = this.localAxisA;
        var m = this.localAnchorA;
        var y = this.localAnchorB;
        e.updateJacobian();
        r.rotate(l, g, o.angle);
        r.rotate(d, m, o.angle);
        r.add(c, d, o.position);
        r.rotate(p, y, h.angle);
        r.add(u, p, h.position);
        var v = this.position = r.dot(u, l) - r.dot(c, l);
        if (this.motorEnabled) {
          var b = this.motorEquation.G;
          b[0] = l[0];
          b[1] = l[1];
          b[2] = r.crossLength(l, p);
          b[3] = -l[0];
          b[4] = -l[1];
          b[5] = -r.crossLength(l, d);
        }
        if (this.upperLimitEnabled && v > i) {
          r.scale(n.normalA, l, -1);
          r.sub(n.contactPointA, c, o.position);
          r.sub(n.contactPointB, u, h.position);
          r.scale(f, l, i);
          r.add(n.contactPointA, n.contactPointA, f);
          if (t.indexOf(n) === -1) {
            t.push(n);
          }
        } else {
          var _ = t.indexOf(n);
          if (_ !== -1) {
            t.splice(_, 1);
          }
        }
        if (this.lowerLimitEnabled && v < s) {
          r.scale(a.normalA, l, 1);
          r.sub(a.contactPointA, c, o.position);
          r.sub(a.contactPointB, u, h.position);
          r.scale(f, l, s);
          r.sub(a.contactPointB, a.contactPointB, f);
          if (t.indexOf(a) === -1) {
            t.push(a);
          }
        } else {
          var _ = t.indexOf(a);
          if (_ !== -1) {
            t.splice(_, 1);
          }
        }
      };
      s.prototype.enableMotor = function () {
        if (!this.motorEnabled) {
          this.equations.push(this.motorEquation);
          this.motorEnabled = true;
        }
      };
      s.prototype.disableMotor = function () {
        if (this.motorEnabled) {
          var t = this.equations.indexOf(this.motorEquation);
          this.equations.splice(t, 1);
          this.motorEnabled = false;
        }
      };
      s.prototype.setLimits = function (t, e) {
        if (typeof t == "number") {
          this.lowerLimit = t;
          this.lowerLimitEnabled = true;
        } else {
          this.lowerLimit = t;
          this.lowerLimitEnabled = false;
        }
        if (typeof e == "number") {
          this.upperLimit = e;
          this.upperLimitEnabled = true;
        } else {
          this.upperLimit = e;
          this.upperLimitEnabled = false;
        }
      };
    }, {
      "../equations/ContactEquation": 21,
      "../equations/Equation": 22,
      "../equations/RotationalLockEquation": 24,
      "../math/vec2": 30,
      "./Constraint": 14
    }],
    19: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        n.call(this, t, e, n.REVOLUTE, i);
        var s = this.maxForce = i.maxForce !== undefined ? i.maxForce : Number.MAX_VALUE;
        this.pivotA = h.create();
        this.pivotB = h.create();
        if (i.worldPivot) {
          h.sub(this.pivotA, i.worldPivot, t.position);
          h.sub(this.pivotB, i.worldPivot, e.position);
          h.rotate(this.pivotA, this.pivotA, -t.angle);
          h.rotate(this.pivotB, this.pivotB, -e.angle);
        } else {
          h.copy(this.pivotA, i.localPivotA);
          h.copy(this.pivotB, i.localPivotB);
        }
        var f = this.equations = [new a(t, e, -s, s), new a(t, e, -s, s)];
        var g = f[0];
        var m = f[1];
        var y = this;
        g.computeGq = function () {
          h.rotate(l, y.pivotA, t.angle);
          h.rotate(c, y.pivotB, e.angle);
          h.add(p, e.position, c);
          h.sub(p, p, t.position);
          h.sub(p, p, l);
          return h.dot(p, u);
        };
        m.computeGq = function () {
          h.rotate(l, y.pivotA, t.angle);
          h.rotate(c, y.pivotB, e.angle);
          h.add(p, e.position, c);
          h.sub(p, p, t.position);
          h.sub(p, p, l);
          return h.dot(p, d);
        };
        m.minForce = g.minForce = -s;
        m.maxForce = g.maxForce = s;
        this.motorEquation = new o(t, e);
        this.motorEnabled = false;
        this.angle = 0;
        this.lowerLimitEnabled = false;
        this.upperLimitEnabled = false;
        this.lowerLimit = 0;
        this.upperLimit = 0;
        this.upperLimitEquation = new r(t, e);
        this.lowerLimitEquation = new r(t, e);
        this.upperLimitEquation.minForce = 0;
        this.lowerLimitEquation.maxForce = 0;
      }
      var n = t("./Constraint");
      var a = t("../equations/Equation");
      var o = t("../equations/RotationalVelocityEquation");
      var r = t("../equations/RotationalLockEquation");
      var h = t("../math/vec2");
      e.exports = s;
      var l = h.create();
      var c = h.create();
      var u = h.fromValues(1, 0);
      var d = h.fromValues(0, 1);
      var p = h.create();
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.setLimits = function (t, e) {
        if (typeof t == "number") {
          this.lowerLimit = t;
          this.lowerLimitEnabled = true;
        } else {
          this.lowerLimit = t;
          this.lowerLimitEnabled = false;
        }
        if (typeof e == "number") {
          this.upperLimit = e;
          this.upperLimitEnabled = true;
        } else {
          this.upperLimit = e;
          this.upperLimitEnabled = false;
        }
      };
      s.prototype.update = function () {
        var t = this.bodyA;
        var e = this.bodyB;
        var i = this.pivotA;
        var s = this.pivotB;
        var n = this.equations;
        var a = n[0];
        var o = n[1];
        var r = n[0];
        var p = n[1];
        var f = this.upperLimit;
        var g = this.lowerLimit;
        var m = this.upperLimitEquation;
        var y = this.lowerLimitEquation;
        var v = this.angle = e.angle - t.angle;
        if (this.upperLimitEnabled && v > f) {
          m.angle = f;
          if (n.indexOf(m) === -1) {
            n.push(m);
          }
        } else {
          var b = n.indexOf(m);
          if (b !== -1) {
            n.splice(b, 1);
          }
        }
        if (this.lowerLimitEnabled && v < g) {
          y.angle = g;
          if (n.indexOf(y) === -1) {
            n.push(y);
          }
        } else {
          var b = n.indexOf(y);
          if (b !== -1) {
            n.splice(b, 1);
          }
        }
        h.rotate(l, i, t.angle);
        h.rotate(c, s, e.angle);
        r.G[0] = -1;
        r.G[1] = 0;
        r.G[2] = -h.crossLength(l, u);
        r.G[3] = 1;
        r.G[4] = 0;
        r.G[5] = h.crossLength(c, u);
        p.G[0] = 0;
        p.G[1] = -1;
        p.G[2] = -h.crossLength(l, d);
        p.G[3] = 0;
        p.G[4] = 1;
        p.G[5] = h.crossLength(c, d);
      };
      s.prototype.enableMotor = function () {
        if (!this.motorEnabled) {
          this.equations.push(this.motorEquation);
          this.motorEnabled = true;
        }
      };
      s.prototype.disableMotor = function () {
        if (this.motorEnabled) {
          var t = this.equations.indexOf(this.motorEquation);
          this.equations.splice(t, 1);
          this.motorEnabled = false;
        }
      };
      s.prototype.motorIsEnabled = function () {
        return !!this.motorEnabled;
      };
      s.prototype.setMotorSpeed = function (t) {
        if (this.motorEnabled) {
          var e = this.equations.indexOf(this.motorEquation);
          this.equations[e].relativeVelocity = t;
        }
      };
      s.prototype.getMotorSpeed = function () {
        return !!this.motorEnabled && this.motorEquation.relativeVelocity;
      };
    }, {
      "../equations/Equation": 22,
      "../equations/RotationalLockEquation": 24,
      "../equations/RotationalVelocityEquation": 25,
      "../math/vec2": 30,
      "./Constraint": 14
    }],
    20: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        n.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE);
        this.angle = i.angle || 0;
        this.ratio = typeof i.ratio == "number" ? i.ratio : 1;
        this.setRatio(this.ratio);
      }
      var n = t("./Equation");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeGq = function () {
        return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle;
      };
      s.prototype.setRatio = function (t) {
        var e = this.G;
        e[2] = t;
        e[5] = -1;
        this.ratio = t;
      };
      s.prototype.setMaxTorque = function (t) {
        this.maxForce = t;
        this.minForce = -t;
      };
    }, {
      "../math/vec2": 30,
      "./Equation": 22
    }],
    21: [function (t, e, i) {
      function s(t, e) {
        n.call(this, t, e, 0, Number.MAX_VALUE);
        this.contactPointA = a.create();
        this.penetrationVec = a.create();
        this.contactPointB = a.create();
        this.normalA = a.create();
        this.restitution = 0;
        this.firstImpact = false;
        this.shapeA = null;
        this.shapeB = null;
      }
      var n = t("./Equation");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeB = function (t, e, i) {
        var s = this.bodyA;
        var n = this.bodyB;
        var o = this.contactPointA;
        var r = this.contactPointB;
        var h = s.position;
        var l = n.position;
        var c = this.penetrationVec;
        var u = this.normalA;
        var d = this.G;
        var p = a.crossLength(o, u);
        var f = a.crossLength(r, u);
        d[0] = -u[0];
        d[1] = -u[1];
        d[2] = -p;
        d[3] = u[0];
        d[4] = u[1];
        d[5] = f;
        a.add(c, l, r);
        a.sub(c, c, h);
        a.sub(c, c, o);
        var g;
        var m;
        if (this.firstImpact && this.restitution !== 0) {
          m = 0;
          g = 1 / e * (1 + this.restitution) * this.computeGW();
        } else {
          m = a.dot(u, c) + this.offset;
          g = this.computeGW();
        }
        return -m * t - g * e - i * this.computeGiMf();
      };
    }, {
      "../math/vec2": 30,
      "./Equation": 22
    }],
    22: [function (t, e, i) {
      function s(t, e, i, n) {
        this.minForce = i === undefined ? -Number.MAX_VALUE : i;
        this.maxForce = n === undefined ? Number.MAX_VALUE : n;
        this.bodyA = t;
        this.bodyB = e;
        this.stiffness = s.DEFAULT_STIFFNESS;
        this.relaxation = s.DEFAULT_RELAXATION;
        this.G = new a.ARRAY_TYPE(6);
        for (var o = 0; o < 6; o++) {
          this.G[o] = 0;
        }
        this.offset = 0;
        this.a = 0;
        this.b = 0;
        this.epsilon = 0;
        this.timeStep = 1 / 60;
        this.needsUpdate = true;
        this.multiplier = 0;
        this.relativeVelocity = 0;
        this.enabled = true;
      }
      e.exports = s;
      var n = t("../math/vec2");
      var a = t("../utils/Utils");
      var o = t("../objects/Body");
      s.prototype.constructor = s;
      s.DEFAULT_STIFFNESS = 1000000;
      s.DEFAULT_RELAXATION = 4;
      s.prototype.update = function () {
        var t = this.stiffness;
        var e = this.relaxation;
        var i = this.timeStep;
        this.a = 4 / (i * (1 + e * 4));
        this.b = e * 4 / (1 + e * 4);
        this.epsilon = 4 / (i * i * t * (1 + e * 4));
        this.needsUpdate = false;
      };
      s.prototype.gmult = function (t, e, i, s, n) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * i + t[3] * s[0] + t[4] * s[1] + t[5] * n;
      };
      s.prototype.computeB = function (t, e, i) {
        var s = this.computeGW();
        return -this.computeGq() * t - s * e - this.computeGiMf() * i;
      };
      var r = n.create();
      var h = n.create();
      s.prototype.computeGq = function () {
        var t = this.G;
        var e = this.bodyA;
        var i = this.bodyB;
        var s = e.position;
        var n = i.position;
        var a = e.angle;
        var o = i.angle;
        return this.gmult(t, r, a, h, o) + this.offset;
      };
      s.prototype.computeGW = function () {
        var t = this.G;
        var e = this.bodyA;
        var i = this.bodyB;
        var s = e.velocity;
        var n = i.velocity;
        var a = e.angularVelocity;
        var o = i.angularVelocity;
        return this.gmult(t, s, a, n, o) + this.relativeVelocity;
      };
      s.prototype.computeGWlambda = function () {
        var t = this.G;
        var e = this.bodyA;
        var i = this.bodyB;
        var s = e.vlambda;
        var n = i.vlambda;
        var a = e.wlambda;
        var o = i.wlambda;
        return this.gmult(t, s, a, n, o);
      };
      var l = n.create();
      var c = n.create();
      s.prototype.computeGiMf = function () {
        var t = this.bodyA;
        var e = this.bodyB;
        var i = t.force;
        var s = t.angularForce;
        var a = e.force;
        var o = e.angularForce;
        var r = t.invMassSolve;
        var h = e.invMassSolve;
        var u = t.invInertiaSolve;
        var d = e.invInertiaSolve;
        var p = this.G;
        n.scale(l, i, r);
        n.multiply(l, t.massMultiplier, l);
        n.scale(c, a, h);
        n.multiply(c, e.massMultiplier, c);
        return this.gmult(p, l, s * u, c, o * d);
      };
      s.prototype.computeGiMGt = function () {
        var t = this.bodyA;
        var e = this.bodyB;
        var i = t.invMassSolve;
        var s = e.invMassSolve;
        var n = t.invInertiaSolve;
        var a = e.invInertiaSolve;
        var o = this.G;
        return o[0] * o[0] * i * t.massMultiplier[0] + o[1] * o[1] * i * t.massMultiplier[1] + o[2] * o[2] * n + o[3] * o[3] * s * e.massMultiplier[0] + o[4] * o[4] * s * e.massMultiplier[1] + o[5] * o[5] * a;
      };
      var u = n.create();
      var d = n.create();
      var p = n.create();
      var f = n.create();
      var g = n.create();
      var m = n.create();
      s.prototype.addToWlambda = function (t) {
        var e = this.bodyA;
        var i = this.bodyB;
        var s = u;
        var a = d;
        var o = p;
        var r = f;
        var h = g;
        var l = e.invMassSolve;
        var c = i.invMassSolve;
        var y = e.invInertiaSolve;
        var v = i.invInertiaSolve;
        var b = m;
        var _ = this.G;
        a[0] = _[0];
        a[1] = _[1];
        o[0] = _[3];
        o[1] = _[4];
        n.scale(s, a, l * t);
        n.multiply(s, s, e.massMultiplier);
        n.add(e.vlambda, e.vlambda, s);
        e.wlambda += y * _[2] * t;
        n.scale(s, o, c * t);
        n.multiply(s, s, i.massMultiplier);
        n.add(i.vlambda, i.vlambda, s);
        i.wlambda += v * _[5] * t;
      };
      s.prototype.computeInvC = function (t) {
        return 1 / (this.computeGiMGt() + t);
      };
    }, {
      "../math/vec2": 30,
      "../objects/Body": 31,
      "../utils/Utils": 57
    }],
    23: [function (t, e, i) {
      function s(t, e, i) {
        a.call(this, t, e, -i, i);
        this.contactPointA = n.create();
        this.contactPointB = n.create();
        this.t = n.create();
        this.contactEquations = [];
        this.shapeA = null;
        this.shapeB = null;
        this.frictionCoefficient = 0.3;
      }
      var n = t("../math/vec2");
      var a = t("./Equation");
      var o = t("../utils/Utils");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.setSlipForce = function (t) {
        this.maxForce = t;
        this.minForce = -t;
      };
      s.prototype.getSlipForce = function () {
        return this.maxForce;
      };
      s.prototype.computeB = function (t, e, i) {
        var s = this.bodyA;
        var a = this.bodyB;
        var o = this.contactPointA;
        var r = this.contactPointB;
        var h = this.t;
        var l = this.G;
        l[0] = -h[0];
        l[1] = -h[1];
        l[2] = -n.crossLength(o, h);
        l[3] = h[0];
        l[4] = h[1];
        l[5] = n.crossLength(r, h);
        return -this.computeGW() * e - i * this.computeGiMf();
      };
    }, {
      "../math/vec2": 30,
      "../utils/Utils": 57,
      "./Equation": 22
    }],
    24: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        n.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE);
        this.angle = i.angle || 0;
        var s = this.G;
        s[2] = 1;
        s[5] = -1;
      }
      var n = t("./Equation");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      var o = a.create();
      var r = a.create();
      var h = a.fromValues(1, 0);
      var l = a.fromValues(0, 1);
      s.prototype.computeGq = function () {
        a.rotate(o, h, this.bodyA.angle + this.angle);
        a.rotate(r, l, this.bodyB.angle);
        return a.dot(o, r);
      };
    }, {
      "../math/vec2": 30,
      "./Equation": 22
    }],
    25: [function (t, e, i) {
      function s(t, e) {
        n.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE);
        this.relativeVelocity = 1;
        this.ratio = 1;
      }
      var n = t("./Equation");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeB = function (t, e, i) {
        var s = this.G;
        s[2] = -1;
        s[5] = this.ratio;
        var n = this.computeGiMf();
        return -this.computeGW() * e - i * n;
      };
    }, {
      "../math/vec2": 30,
      "./Equation": 22
    }],
    26: [function (t, e, i) {
      function s() {}
      e.exports = s;
      s.prototype = {
        constructor: s,
        on: function (t, e, i) {
          e.context = i || this;
          if (this._listeners === undefined) {
            this._listeners = {};
          }
          var s = this._listeners;
          if (s[t] === undefined) {
            s[t] = [];
          }
          if (s[t].indexOf(e) === -1) {
            s[t].push(e);
          }
          return this;
        },
        has: function (t, e) {
          if (this._listeners === undefined) {
            return false;
          }
          var i = this._listeners;
          if (e) {
            if (i[t] !== undefined && i[t].indexOf(e) !== -1) {
              return true;
            }
          } else if (i[t] !== undefined) {
            return true;
          }
          return false;
        },
        off: function (t, e) {
          if (this._listeners === undefined) {
            return this;
          }
          var i = this._listeners;
          var s = i[t].indexOf(e);
          if (s !== -1) {
            i[t].splice(s, 1);
          }
          return this;
        },
        emit: function (t) {
          if (this._listeners === undefined) {
            return this;
          }
          var e = this._listeners;
          var i = e[t.type];
          if (i !== undefined) {
            t.target = this;
            for (var s = 0, n = i.length; s < n; s++) {
              var a = i[s];
              a.call(a.context, t);
            }
          }
          return this;
        }
      };
    }, {}],
    27: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        if (!(t instanceof n) || !(e instanceof n)) {
          throw new Error("First two arguments must be Material instances.");
        }
        this.id = s.idCounter++;
        this.materialA = t;
        this.materialB = e;
        this.friction = i.friction !== undefined ? Number(i.friction) : 0.3;
        this.restitution = i.restitution !== undefined ? Number(i.restitution) : 0;
        this.stiffness = i.stiffness !== undefined ? Number(i.stiffness) : a.DEFAULT_STIFFNESS;
        this.relaxation = i.relaxation !== undefined ? Number(i.relaxation) : a.DEFAULT_RELAXATION;
        this.frictionStiffness = i.frictionStiffness !== undefined ? Number(i.frictionStiffness) : a.DEFAULT_STIFFNESS;
        this.frictionRelaxation = i.frictionRelaxation !== undefined ? Number(i.frictionRelaxation) : a.DEFAULT_RELAXATION;
        this.surfaceVelocity = i.surfaceVelocity !== undefined ? Number(i.surfaceVelocity) : 0;
        this.contactSkinSize = 0.005;
      }
      var n = t("./Material");
      var a = t("../equations/Equation");
      e.exports = s;
      s.idCounter = 0;
    }, {
      "../equations/Equation": 22,
      "./Material": 28
    }],
    28: [function (t, e, i) {
      function s(t) {
        this.id = t || s.idCounter++;
      }
      e.exports = s;
      s.idCounter = 0;
    }, {}],
    29: [function (t, e, i) {
      var s = {
        GetArea: function (t) {
          if (t.length < 6) {
            return 0;
          }
          for (var e = t.length - 2, i = 0, s = 0; s < e; s += 2) {
            i += (t[s + 2] - t[s]) * (t[s + 1] + t[s + 3]);
          }
          return -(i += (t[0] - t[e]) * (t[e + 1] + t[1])) * 0.5;
        }
      };
      s.Triangulate = function (t) {
        var e = t.length >> 1;
        if (e < 3) {
          return [];
        }
        var i = [];
        var n = [];
        for (var a = 0; a < e; a++) {
          n.push(a);
        }
        var a = 0;
        for (var o = e; o > 3;) {
          var r = n[(a + 0) % o];
          var h = n[(a + 1) % o];
          var l = n[(a + 2) % o];
          var c = t[r * 2];
          var u = t[r * 2 + 1];
          var d = t[h * 2];
          var p = t[h * 2 + 1];
          var f = t[l * 2];
          var g = t[l * 2 + 1];
          var m = false;
          if (s._convex(c, u, d, p, f, g)) {
            m = true;
            for (var y = 0; y < o; y++) {
              var v = n[y];
              if (v != r && v != h && v != l && s._PointInTriangle(t[v * 2], t[v * 2 + 1], c, u, d, p, f, g)) {
                m = false;
                break;
              }
            }
          }
          if (m) {
            i.push(r, h, l);
            n.splice((a + 1) % o, 1);
            o--;
            a = 0;
          } else if (a++ > o * 3) {
            break;
          }
        }
        i.push(n[0], n[1], n[2]);
        return i;
      };
      s._PointInTriangle = function (t, e, i, s, n, a, o, r) {
        var h = o - i;
        var l = r - s;
        var c = n - i;
        var u = a - s;
        var d = t - i;
        var p = e - s;
        var f = h * h + l * l;
        var g = h * c + l * u;
        var m = h * d + l * p;
        var y = c * c + u * u;
        var v = c * d + u * p;
        var b = 1 / (f * y - g * g);
        var _ = (y * m - g * v) * b;
        var x = (f * v - g * m) * b;
        return _ >= 0 && x >= 0 && _ + x < 1;
      };
      s._convex = function (t, e, i, s, n, a) {
        return (e - s) * (n - i) + (i - t) * (a - s) >= 0;
      };
      e.exports = s;
    }, {}],
    30: [function (t, e, i) {
      var s = e.exports = {};
      var n = t("../utils/Utils");
      s.crossLength = function (t, e) {
        return t[0] * e[1] - t[1] * e[0];
      };
      s.crossVZ = function (t, e, i) {
        s.rotate(t, e, -Math.PI / 2);
        s.scale(t, t, i);
        return t;
      };
      s.crossZV = function (t, e, i) {
        s.rotate(t, i, Math.PI / 2);
        s.scale(t, t, e);
        return t;
      };
      s.rotate = function (t, e, i) {
        if (i !== 0) {
          var s = Math.cos(i);
          var n = Math.sin(i);
          var a = e[0];
          var o = e[1];
          t[0] = s * a - n * o;
          t[1] = n * a + s * o;
        } else {
          t[0] = e[0];
          t[1] = e[1];
        }
      };
      s.rotate90cw = function (t, e) {
        var i = e[0];
        var s = e[1];
        t[0] = s;
        t[1] = -i;
      };
      s.toLocalFrame = function (t, e, i, n) {
        s.copy(t, e);
        s.sub(t, t, i);
        s.rotate(t, t, -n);
      };
      s.toGlobalFrame = function (t, e, i, n) {
        s.copy(t, e);
        s.rotate(t, t, n);
        s.add(t, t, i);
      };
      s.vectorToLocalFrame = function (t, e, i) {
        s.rotate(t, e, -i);
      };
      s.vectorToGlobalFrame = function (t, e, i) {
        s.rotate(t, e, i);
      };
      s.centroid = function (t, e, i, n) {
        s.add(t, e, i);
        s.add(t, t, n);
        s.scale(t, t, 1 / 3);
        return t;
      };
      s.create = function () {
        var t = new n.ARRAY_TYPE(2);
        t[0] = 0;
        t[1] = 0;
        return t;
      };
      s.clone = function (t) {
        var e = new n.ARRAY_TYPE(2);
        e[0] = t[0];
        e[1] = t[1];
        return e;
      };
      s.fromValues = function (t, e) {
        var i = new n.ARRAY_TYPE(2);
        i[0] = t;
        i[1] = e;
        return i;
      };
      s.copy = function (t, e) {
        t[0] = e[0];
        t[1] = e[1];
        return t;
      };
      s.set = function (t, e, i) {
        t[0] = e;
        t[1] = i;
        return t;
      };
      s.add = function (t, e, i) {
        t[0] = e[0] + i[0];
        t[1] = e[1] + i[1];
        return t;
      };
      s.subtract = function (t, e, i) {
        t[0] = e[0] - i[0];
        t[1] = e[1] - i[1];
        return t;
      };
      s.sub = s.subtract;
      s.multiply = function (t, e, i) {
        t[0] = e[0] * i[0];
        t[1] = e[1] * i[1];
        return t;
      };
      s.mul = s.multiply;
      s.divide = function (t, e, i) {
        t[0] = e[0] / i[0];
        t[1] = e[1] / i[1];
        return t;
      };
      s.div = s.divide;
      s.scale = function (t, e, i) {
        t[0] = e[0] * i;
        t[1] = e[1] * i;
        return t;
      };
      s.distance = function (t, e) {
        var i = e[0] - t[0];
        var s = e[1] - t[1];
        return Math.sqrt(i * i + s * s);
      };
      s.dist = s.distance;
      s.squaredDistance = function (t, e) {
        var i = e[0] - t[0];
        var s = e[1] - t[1];
        return i * i + s * s;
      };
      s.sqrDist = s.squaredDistance;
      s.length = function (t) {
        var e = t[0];
        var i = t[1];
        return Math.sqrt(e * e + i * i);
      };
      s.len = s.length;
      s.squaredLength = function (t) {
        var e = t[0];
        var i = t[1];
        return e * e + i * i;
      };
      s.sqrLen = s.squaredLength;
      s.negate = function (t, e) {
        t[0] = -e[0];
        t[1] = -e[1];
        return t;
      };
      s.normalize = function (t, e) {
        var i = e[0];
        var s = e[1];
        var n = i * i + s * s;
        if (n > 0) {
          n = 1 / Math.sqrt(n);
          t[0] = e[0] * n;
          t[1] = e[1] * n;
        }
        return t;
      };
      s.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1];
      };
      s.str = function (t) {
        return "vec2(" + t[0] + ", " + t[1] + ")";
      };
      s.lerp = function (t, e, i, s) {
        var n = e[0];
        var a = e[1];
        t[0] = n + s * (i[0] - n);
        t[1] = a + s * (i[1] - a);
        return t;
      };
      s.reflect = function (t, e, i) {
        var s = e[0] * i[0] + e[1] * i[1];
        t[0] = e[0] - i[0] * 2 * s;
        t[1] = e[1] - i[1] * 2 * s;
      };
      s.getLineSegmentsIntersection = function (t, e, i, n, a) {
        var o = s.getLineSegmentsIntersectionFraction(e, i, n, a);
        return !(o < 0) && (t[0] = e[0] + o * (i[0] - e[0]), t[1] = e[1] + o * (i[1] - e[1]), true);
      };
      s.getLineSegmentsIntersectionFraction = function (t, e, i, s) {
        var n = e[0] - t[0];
        var a = e[1] - t[1];
        var o = s[0] - i[0];
        var r = s[1] - i[1];
        var h;
        var l;
        h = (-a * (t[0] - i[0]) + n * (t[1] - i[1])) / (-o * a + n * r);
        l = (o * (t[1] - i[1]) - r * (t[0] - i[0])) / (-o * a + n * r);
        if (h >= 0 && h <= 1 && l >= 0 && l <= 1) {
          return l;
        } else {
          return -1;
        }
      };
    }, {
      "../utils/Utils": 57
    }],
    31: [function (t, e, i) {
      function s(t) {
        t = t || {};
        c.call(this);
        this.id = t.id || ++s._idCounter;
        this.world = null;
        this.shapes = [];
        this.mass = t.mass || 0;
        this.invMass = 0;
        this.inertia = 0;
        this.invInertia = 0;
        this.invMassSolve = 0;
        this.invInertiaSolve = 0;
        this.fixedRotation = !!t.fixedRotation;
        this.fixedX = !!t.fixedX;
        this.fixedY = !!t.fixedY;
        this.massMultiplier = n.create();
        this.position = n.fromValues(0, 0);
        if (t.position) {
          n.copy(this.position, t.position);
        }
        this.interpolatedPosition = n.fromValues(0, 0);
        this.interpolatedAngle = 0;
        this.previousPosition = n.fromValues(0, 0);
        this.previousAngle = 0;
        this.velocity = n.fromValues(0, 0);
        if (t.velocity) {
          n.copy(this.velocity, t.velocity);
        }
        this.vlambda = n.fromValues(0, 0);
        this.wlambda = 0;
        this.angle = t.angle || 0;
        this.angularVelocity = t.angularVelocity || 0;
        this.force = n.create();
        if (t.force) {
          n.copy(this.force, t.force);
        }
        this.angularForce = t.angularForce || 0;
        this.damping = typeof t.damping == "number" ? t.damping : 0.1;
        this.angularDamping = typeof t.angularDamping == "number" ? t.angularDamping : 0.1;
        this.type = s.STATIC;
        if (t.type !== undefined) {
          this.type = t.type;
        } else if (t.mass) {
          this.type = s.DYNAMIC;
        } else {
          this.type = s.STATIC;
        }
        this.boundingRadius = 0;
        this.aabb = new l();
        this.aabbNeedsUpdate = true;
        this.allowSleep = t.allowSleep === undefined || t.allowSleep;
        this.wantsToSleep = false;
        this.sleepState = s.AWAKE;
        this.sleepSpeedLimit = t.sleepSpeedLimit !== undefined ? t.sleepSpeedLimit : 0.2;
        this.sleepTimeLimit = t.sleepTimeLimit !== undefined ? t.sleepTimeLimit : 1;
        this.gravityScale = t.gravityScale !== undefined ? t.gravityScale : 1;
        this.collisionResponse = t.collisionResponse === undefined || t.collisionResponse;
        this.idleTime = 0;
        this.timeLastSleepy = 0;
        this.ccdSpeedThreshold = t.ccdSpeedThreshold !== undefined ? t.ccdSpeedThreshold : -1;
        this.ccdIterations = t.ccdIterations !== undefined ? t.ccdIterations : 10;
        this.concavePath = null;
        this._wakeUpAfterNarrowphase = false;
        this.updateMassProperties();
      }
      var n = t("../math/vec2");
      var a = t("poly-decomp");
      var o = t("../shapes/Convex");
      var r = t("../collision/RaycastResult");
      var h = t("../collision/Ray");
      var l = t("../collision/AABB");
      var c = t("../events/EventEmitter");
      e.exports = s;
      s.prototype = new c();
      s.prototype.constructor = s;
      s._idCounter = 0;
      s.prototype.updateSolveMassProperties = function () {
        if (this.sleepState === s.SLEEPING || this.type === s.KINEMATIC) {
          this.invMassSolve = 0;
          this.invInertiaSolve = 0;
        } else {
          this.invMassSolve = this.invMass;
          this.invInertiaSolve = this.invInertia;
        }
      };
      s.prototype.setDensity = function (t) {
        var e = this.getArea();
        this.mass = e * t;
        this.updateMassProperties();
      };
      s.prototype.getArea = function () {
        var t = 0;
        for (var e = 0; e < this.shapes.length; e++) {
          t += this.shapes[e].area;
        }
        return t;
      };
      s.prototype.getAABB = function () {
        if (this.aabbNeedsUpdate) {
          this.updateAABB();
        }
        return this.aabb;
      };
      var u = new l();
      var d = n.create();
      s.prototype.updateAABB = function () {
        var t = this.shapes;
        for (var e = t.length, i = d, s = this.angle, a = 0; a !== e; a++) {
          var o = t[a];
          var r = o.angle + s;
          n.rotate(i, o.position, s);
          n.add(i, i, this.position);
          o.computeAABB(u, i, r);
          if (a === 0) {
            this.aabb.copy(u);
          } else {
            this.aabb.extend(u);
          }
        }
        this.aabbNeedsUpdate = false;
      };
      s.prototype.updateBoundingRadius = function () {
        var t = this.shapes;
        for (var e = t.length, i = 0, s = 0; s !== e; s++) {
          var a = t[s];
          var o = n.length(a.position);
          var r = a.boundingRadius;
          if (o + r > i) {
            i = o + r;
          }
        }
        this.boundingRadius = i;
      };
      s.prototype.addShape = function (t, e, i) {
        if (t.body) {
          throw new Error("A shape can only be added to one body.");
        }
        t.body = this;
        if (e) {
          n.copy(t.position, e);
        } else {
          n.set(t.position, 0, 0);
        }
        t.angle = i || 0;
        this.shapes.push(t);
        this.updateMassProperties();
        this.updateBoundingRadius();
        this.aabbNeedsUpdate = true;
      };
      s.prototype.removeShape = function (t) {
        var e = this.shapes.indexOf(t);
        return e !== -1 && (this.shapes.splice(e, 1), this.aabbNeedsUpdate = true, t.body = null, true);
      };
      s.prototype.updateMassProperties = function () {
        if (this.type === s.STATIC || this.type === s.KINEMATIC) {
          this.mass = Number.MAX_VALUE;
          this.invMass = 0;
          this.inertia = Number.MAX_VALUE;
          this.invInertia = 0;
        } else {
          var t = this.shapes;
          var e = t.length;
          var i = this.mass / e;
          var a = 0;
          if (this.fixedRotation) {
            this.inertia = Number.MAX_VALUE;
            this.invInertia = 0;
          } else {
            for (var o = 0; o < e; o++) {
              var r = t[o];
              var h = n.squaredLength(r.position);
              a += r.computeMomentOfInertia(i) + i * h;
            }
            this.inertia = a;
            this.invInertia = a > 0 ? 1 / a : 0;
          }
          this.invMass = 1 / this.mass;
          n.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1);
        }
      };
      var p = n.create();
      s.prototype.applyForce = function (t, e) {
        n.add(this.force, this.force, t);
        if (e) {
          var i = n.crossLength(e, t);
          this.angularForce += i;
        }
      };
      var f = n.create();
      var g = n.create();
      var m = n.create();
      s.prototype.applyForceLocal = function (t, e) {
        e = e || m;
        var i = f;
        var s = g;
        this.vectorToWorldFrame(i, t);
        this.vectorToWorldFrame(s, e);
        this.applyForce(i, s);
      };
      var y = n.create();
      s.prototype.applyImpulse = function (t, e) {
        if (this.type === s.DYNAMIC) {
          var i = y;
          n.scale(i, t, this.invMass);
          n.multiply(i, this.massMultiplier, i);
          n.add(this.velocity, i, this.velocity);
          if (e) {
            var a = n.crossLength(e, t);
            a *= this.invInertia;
            this.angularVelocity += a;
          }
        }
      };
      var v = n.create();
      var b = n.create();
      var _ = n.create();
      s.prototype.applyImpulseLocal = function (t, e) {
        e = e || _;
        var i = v;
        var s = b;
        this.vectorToWorldFrame(i, t);
        this.vectorToWorldFrame(s, e);
        this.applyImpulse(i, s);
      };
      s.prototype.toLocalFrame = function (t, e) {
        n.toLocalFrame(t, e, this.position, this.angle);
      };
      s.prototype.toWorldFrame = function (t, e) {
        n.toGlobalFrame(t, e, this.position, this.angle);
      };
      s.prototype.vectorToLocalFrame = function (t, e) {
        n.vectorToLocalFrame(t, e, this.angle);
      };
      s.prototype.vectorToWorldFrame = function (t, e) {
        n.vectorToGlobalFrame(t, e, this.angle);
      };
      s.prototype.fromPolygon = function (t, e) {
        e = e || {};
        for (var i = this.shapes.length; i >= 0; --i) {
          this.removeShape(this.shapes[i]);
        }
        var s = new a.Polygon();
        s.vertices = t;
        s.makeCCW();
        if (typeof e.removeCollinearPoints == "number") {
          s.removeCollinearPoints(e.removeCollinearPoints);
        }
        if (e.skipSimpleCheck === undefined && !s.isSimple()) {
          return false;
        }
        this.concavePath = s.vertices.slice(0);
        for (var i = 0; i < this.concavePath.length; i++) {
          var r = [0, 0];
          n.copy(r, this.concavePath[i]);
          this.concavePath[i] = r;
        }
        var h;
        h = e.optimalDecomp ? s.decomp() : s.quickDecomp();
        var l = n.create();
        for (var i = 0; i !== h.length; i++) {
          for (var c = new o({
              vertices: h[i].vertices
            }), u = 0; u !== c.vertices.length; u++) {
            var r = c.vertices[u];
            n.sub(r, r, c.centerOfMass);
          }
          n.scale(l, c.centerOfMass, 1);
          c.updateTriangles();
          c.updateCenterOfMass();
          c.updateBoundingRadius();
          this.addShape(c, l);
        }
        this.adjustCenterOfMass();
        this.aabbNeedsUpdate = true;
        return true;
      };
      var x = n.fromValues(0, 0);
      var w = n.fromValues(0, 0);
      var P = n.fromValues(0, 0);
      var T = n.fromValues(0, 0);
      s.prototype.adjustCenterOfMass = function () {
        var t = w;
        var e = P;
        var i = T;
        var s = 0;
        n.set(e, 0, 0);
        for (var a = 0; a !== this.shapes.length; a++) {
          var o = this.shapes[a];
          n.scale(t, o.position, o.area);
          n.add(e, e, t);
          s += o.area;
        }
        n.scale(i, e, 1 / s);
        for (var a = 0; a !== this.shapes.length; a++) {
          var o = this.shapes[a];
          n.sub(o.position, o.position, i);
        }
        n.add(this.position, this.position, i);
        for (var a = 0; this.concavePath && a < this.concavePath.length; a++) {
          n.sub(this.concavePath[a], this.concavePath[a], i);
        }
        this.updateMassProperties();
        this.updateBoundingRadius();
      };
      s.prototype.setZeroForce = function () {
        n.set(this.force, 0, 0);
        this.angularForce = 0;
      };
      s.prototype.resetConstraintVelocity = function () {
        var t = this;
        var e = t.vlambda;
        n.set(e, 0, 0);
        t.wlambda = 0;
      };
      s.prototype.addConstraintVelocity = function () {
        var t = this;
        var e = t.velocity;
        n.add(e, e, t.vlambda);
        t.angularVelocity += t.wlambda;
      };
      s.prototype.applyDamping = function (t) {
        if (this.type === s.DYNAMIC) {
          var e = this.velocity;
          n.scale(e, e, Math.pow(1 - this.damping, t));
          this.angularVelocity *= Math.pow(1 - this.angularDamping, t);
        }
      };
      s.prototype.wakeUp = function () {
        var t = this.sleepState;
        this.sleepState = s.AWAKE;
        this.idleTime = 0;
        if (t !== s.AWAKE) {
          this.emit(s.wakeUpEvent);
        }
      };
      s.prototype.sleep = function () {
        this.sleepState = s.SLEEPING;
        this.angularVelocity = 0;
        this.angularForce = 0;
        n.set(this.velocity, 0, 0);
        n.set(this.force, 0, 0);
        this.emit(s.sleepEvent);
      };
      s.prototype.sleepTick = function (t, e, i) {
        if (this.allowSleep && this.type !== s.SLEEPING) {
          this.wantsToSleep = false;
          var a = this.sleepState;
          if (n.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2) >= Math.pow(this.sleepSpeedLimit, 2)) {
            this.idleTime = 0;
            this.sleepState = s.AWAKE;
          } else {
            this.idleTime += i;
            this.sleepState = s.SLEEPY;
          }
          if (this.idleTime > this.sleepTimeLimit) {
            if (e) {
              this.wantsToSleep = true;
            } else {
              this.sleep();
            }
          }
        }
      };
      s.prototype.overlaps = function (t) {
        return this.world.overlapKeeper.bodiesAreOverlapping(this, t);
      };
      var S = n.create();
      var C = n.create();
      s.prototype.integrate = function (t) {
        var e = this.invMass;
        var i = this.force;
        var s = this.position;
        var a = this.velocity;
        n.copy(this.previousPosition, this.position);
        this.previousAngle = this.angle;
        if (!this.fixedRotation) {
          this.angularVelocity += this.angularForce * this.invInertia * t;
        }
        n.scale(S, i, t * e);
        n.multiply(S, this.massMultiplier, S);
        n.add(a, S, a);
        if (!this.integrateToTimeOfImpact(t)) {
          n.scale(C, a, t);
          n.add(s, s, C);
          if (!this.fixedRotation) {
            this.angle += this.angularVelocity * t;
          }
        }
        this.aabbNeedsUpdate = true;
      };
      var A = new r();
      var E = new h({
        mode: h.ALL
      });
      var I = n.create();
      var B = n.create();
      var M = n.create();
      var k = n.create();
      s.prototype.integrateToTimeOfImpact = function (t) {
        if (this.ccdSpeedThreshold < 0 || n.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)) {
          return false;
        }
        n.normalize(I, this.velocity);
        n.scale(B, this.velocity, t);
        n.add(B, B, this.position);
        n.sub(M, B, this.position);
        var e = this.angularVelocity * t;
        var i = n.length(M);
        var s = 1;
        var a;
        var o = this;
        A.reset();
        E.callback = function (t) {
          if (t.body !== o) {
            a = t.body;
            t.getHitPoint(B, E);
            n.sub(M, B, o.position);
            s = n.length(M) / i;
            t.stop();
          }
        };
        n.copy(E.from, this.position);
        n.copy(E.to, B);
        E.update();
        this.world.raycast(A, E);
        if (!a) {
          return false;
        }
        var r = this.angle;
        n.copy(k, this.position);
        for (var h = 0, l = 0, c = 0, u = s; u >= l && h < this.ccdIterations;) {
          h++;
          c = (u - l) / 2;
          n.scale(C, M, s);
          n.add(this.position, k, C);
          this.angle = r + e * s;
          this.updateAABB();
          if (this.aabb.overlaps(a.aabb) && this.world.narrowphase.bodiesOverlap(this, a)) {
            l = c;
          } else {
            u = c;
          }
        }
        s = c;
        n.copy(this.position, k);
        this.angle = r;
        n.scale(C, M, s);
        n.add(this.position, this.position, C);
        if (!this.fixedRotation) {
          this.angle += e * s;
        }
        return true;
      };
      s.prototype.getVelocityAtPoint = function (t, e) {
        n.crossVZ(t, e, this.angularVelocity);
        n.subtract(t, this.velocity, t);
        return t;
      };
      s.sleepyEvent = {
        type: "sleepy"
      };
      s.sleepEvent = {
        type: "sleep"
      };
      s.wakeUpEvent = {
        type: "wakeup"
      };
      s.DYNAMIC = 1;
      s.STATIC = 2;
      s.KINEMATIC = 4;
      s.AWAKE = 0;
      s.SLEEPY = 1;
      s.SLEEPING = 2;
    }, {
      "../collision/AABB": 7,
      "../collision/Ray": 11,
      "../collision/RaycastResult": 12,
      "../events/EventEmitter": 26,
      "../math/vec2": 30,
      "../shapes/Convex": 40,
      "poly-decomp": 5
    }],
    32: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        a.call(this, t, e, i);
        this.localAnchorA = n.fromValues(0, 0);
        this.localAnchorB = n.fromValues(0, 0);
        if (i.localAnchorA) {
          n.copy(this.localAnchorA, i.localAnchorA);
        }
        if (i.localAnchorB) {
          n.copy(this.localAnchorB, i.localAnchorB);
        }
        if (i.worldAnchorA) {
          this.setWorldAnchorA(i.worldAnchorA);
        }
        if (i.worldAnchorB) {
          this.setWorldAnchorB(i.worldAnchorB);
        }
        var s = n.create();
        var o = n.create();
        this.getWorldAnchorA(s);
        this.getWorldAnchorB(o);
        var r = n.distance(s, o);
        this.restLength = typeof i.restLength == "number" ? i.restLength : r;
      }
      var n = t("../math/vec2");
      var a = t("./Spring");
      var o = t("../utils/Utils");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.setWorldAnchorA = function (t) {
        this.bodyA.toLocalFrame(this.localAnchorA, t);
      };
      s.prototype.setWorldAnchorB = function (t) {
        this.bodyB.toLocalFrame(this.localAnchorB, t);
      };
      s.prototype.getWorldAnchorA = function (t) {
        this.bodyA.toWorldFrame(t, this.localAnchorA);
      };
      s.prototype.getWorldAnchorB = function (t) {
        this.bodyB.toWorldFrame(t, this.localAnchorB);
      };
      var r = n.create();
      var h = n.create();
      var l = n.create();
      var c = n.create();
      var u = n.create();
      var d = n.create();
      var p = n.create();
      var f = n.create();
      var g = n.create();
      s.prototype.applyForce = function () {
        var t = this.stiffness;
        var e = this.damping;
        var i = this.restLength;
        var s = this.bodyA;
        var a = this.bodyB;
        var o = r;
        var m = h;
        var y = l;
        var v = c;
        var b = g;
        var _ = u;
        var x = d;
        var w = p;
        var P = f;
        this.getWorldAnchorA(_);
        this.getWorldAnchorB(x);
        n.sub(w, _, s.position);
        n.sub(P, x, a.position);
        n.sub(o, x, _);
        var T = n.len(o);
        n.normalize(m, o);
        n.sub(y, a.velocity, s.velocity);
        n.crossZV(b, a.angularVelocity, P);
        n.add(y, y, b);
        n.crossZV(b, s.angularVelocity, w);
        n.sub(y, y, b);
        n.scale(v, m, -t * (T - i) - e * n.dot(y, m));
        n.sub(s.force, s.force, v);
        n.add(a.force, a.force, v);
        var S = n.crossLength(w, v);
        var C = n.crossLength(P, v);
        s.angularForce -= S;
        a.angularForce += C;
      };
    }, {
      "../math/vec2": 30,
      "../utils/Utils": 57,
      "./Spring": 34
    }],
    33: [function (t, e, i) {
      function s(t, e, i) {
        i = i || {};
        a.call(this, t, e, i);
        this.restAngle = typeof i.restAngle == "number" ? i.restAngle : e.angle - t.angle;
      }
      var n = t("../math/vec2");
      var a = t("./Spring");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.applyForce = function () {
        var t = this.stiffness;
        var e = this.damping;
        var i = this.restAngle;
        var s = this.bodyA;
        var n = this.bodyB;
        var a = n.angle - s.angle;
        var o = n.angularVelocity - s.angularVelocity;
        var r = -t * (a - i) - e * o * 0;
        s.angularForce -= r;
        n.angularForce += r;
      };
    }, {
      "../math/vec2": 30,
      "./Spring": 34
    }],
    34: [function (t, e, i) {
      function s(t, e, i) {
        i = a.defaults(i, {
          stiffness: 100,
          damping: 1
        });
        this.stiffness = i.stiffness;
        this.damping = i.damping;
        this.bodyA = t;
        this.bodyB = e;
      }
      var n = t("../math/vec2");
      var a = t("../utils/Utils");
      e.exports = s;
      s.prototype.applyForce = function () {};
    }, {
      "../math/vec2": 30,
      "../utils/Utils": 57
    }],
    35: [function (t, e, i) {
      function s(t, e) {
        e = e || {};
        this.chassisBody = t;
        this.wheels = [];
        this.groundBody = new l({
          mass: 0
        });
        this.world = null;
        var i = this;
        this.preStepCallback = function () {
          i.update();
        };
      }
      function n(t, e) {
        e = e || {};
        this.vehicle = t;
        this.forwardEquation = new h(t.chassisBody, t.groundBody);
        this.sideEquation = new h(t.chassisBody, t.groundBody);
        this.steerValue = 0;
        this.engineForce = 0;
        this.setSideFriction(e.sideFriction !== undefined ? e.sideFriction : 5);
        this.localForwardVector = a.fromValues(0, 1);
        if (e.localForwardVector) {
          a.copy(this.localForwardVector, e.localForwardVector);
        }
        this.localPosition = a.fromValues(0, 0);
        if (e.localPosition) {
          a.copy(this.localPosition, e.localPosition);
        }
        r.apply(this, t.chassisBody, t.groundBody);
        this.equations.push(this.forwardEquation, this.sideEquation);
        this.setBrakeForce(0);
      }
      var a = t("../math/vec2");
      var o = t("../utils/Utils");
      var r = t("../constraints/Constraint");
      var h = t("../equations/FrictionEquation");
      var l = t("../objects/Body");
      e.exports = s;
      s.prototype.addToWorld = function (t) {
        this.world = t;
        t.addBody(this.groundBody);
        t.on("preStep", this.preStepCallback);
        for (var e = 0; e < this.wheels.length; e++) {
          var i = this.wheels[e];
          t.addConstraint(i);
        }
      };
      s.prototype.removeFromWorld = function () {
        var t = this.world;
        t.removeBody(this.groundBody);
        t.off("preStep", this.preStepCallback);
        for (var e = 0; e < this.wheels.length; e++) {
          var i = this.wheels[e];
          t.removeConstraint(i);
        }
        this.world = null;
      };
      s.prototype.addWheel = function (t) {
        var e = new n(this, t);
        this.wheels.push(e);
        return e;
      };
      s.prototype.update = function () {
        for (var t = 0; t < this.wheels.length; t++) {
          this.wheels[t].update();
        }
      };
      n.prototype = new r();
      n.prototype.setBrakeForce = function (t) {
        this.forwardEquation.setSlipForce(t);
      };
      n.prototype.setSideFriction = function (t) {
        this.sideEquation.setSlipForce(t);
      };
      var c = a.create();
      var u = a.create();
      n.prototype.getSpeed = function () {
        this.vehicle.chassisBody.vectorToWorldFrame(u, this.localForwardVector);
        this.vehicle.chassisBody.getVelocityAtPoint(c, u);
        return a.dot(c, u);
      };
      var d = a.create();
      n.prototype.update = function () {
        this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector);
        a.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2);
        this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t);
        a.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue);
        a.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue);
        this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB, this.localPosition);
        a.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB);
        this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition);
        a.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA);
        a.normalize(d, this.forwardEquation.t);
        a.scale(d, d, this.engineForce);
        this.vehicle.chassisBody.applyForce(d, this.forwardEquation.contactPointA);
      };
    }, {
      "../constraints/Constraint": 14,
      "../equations/FrictionEquation": 23,
      "../math/vec2": 30,
      "../objects/Body": 31,
      "../utils/Utils": 57
    }],
    36: [function (t, e, i) {
      var s = e.exports = {
        AABB: t("./collision/AABB"),
        AngleLockEquation: t("./equations/AngleLockEquation"),
        Body: t("./objects/Body"),
        Broadphase: t("./collision/Broadphase"),
        Capsule: t("./shapes/Capsule"),
        Circle: t("./shapes/Circle"),
        Constraint: t("./constraints/Constraint"),
        ContactEquation: t("./equations/ContactEquation"),
        ContactEquationPool: t("./utils/ContactEquationPool"),
        ContactMaterial: t("./material/ContactMaterial"),
        Convex: t("./shapes/Convex"),
        DistanceConstraint: t("./constraints/DistanceConstraint"),
        Equation: t("./equations/Equation"),
        EventEmitter: t("./events/EventEmitter"),
        FrictionEquation: t("./equations/FrictionEquation"),
        FrictionEquationPool: t("./utils/FrictionEquationPool"),
        GearConstraint: t("./constraints/GearConstraint"),
        GSSolver: t("./solver/GSSolver"),
        Heightfield: t("./shapes/Heightfield"),
        Line: t("./shapes/Line"),
        LockConstraint: t("./constraints/LockConstraint"),
        Material: t("./material/Material"),
        Narrowphase: t("./collision/Narrowphase"),
        NaiveBroadphase: t("./collision/NaiveBroadphase"),
        Particle: t("./shapes/Particle"),
        Plane: t("./shapes/Plane"),
        Pool: t("./utils/Pool"),
        RevoluteConstraint: t("./constraints/RevoluteConstraint"),
        PrismaticConstraint: t("./constraints/PrismaticConstraint"),
        Ray: t("./collision/Ray"),
        RaycastResult: t("./collision/RaycastResult"),
        Box: t("./shapes/Box"),
        RotationalVelocityEquation: t("./equations/RotationalVelocityEquation"),
        SAPBroadphase: t("./collision/SAPBroadphase"),
        Shape: t("./shapes/Shape"),
        Solver: t("./solver/Solver"),
        Spring: t("./objects/Spring"),
        TopDownVehicle: t("./objects/TopDownVehicle"),
        LinearSpring: t("./objects/LinearSpring"),
        RotationalSpring: t("./objects/RotationalSpring"),
        Utils: t("./utils/Utils"),
        World: t("./world/World"),
        vec2: t("./math/vec2"),
        version: t("../package.json").version
      };
      Object.defineProperty(s, "Rectangle", {
        get: function () {
          return this.Box;
        }
      });
    }, {
      "../package.json": 6,
      "./collision/AABB": 7,
      "./collision/Broadphase": 8,
      "./collision/NaiveBroadphase": 9,
      "./collision/Narrowphase": 10,
      "./collision/Ray": 11,
      "./collision/RaycastResult": 12,
      "./collision/SAPBroadphase": 13,
      "./constraints/Constraint": 14,
      "./constraints/DistanceConstraint": 15,
      "./constraints/GearConstraint": 16,
      "./constraints/LockConstraint": 17,
      "./constraints/PrismaticConstraint": 18,
      "./constraints/RevoluteConstraint": 19,
      "./equations/AngleLockEquation": 20,
      "./equations/ContactEquation": 21,
      "./equations/Equation": 22,
      "./equations/FrictionEquation": 23,
      "./equations/RotationalVelocityEquation": 25,
      "./events/EventEmitter": 26,
      "./material/ContactMaterial": 27,
      "./material/Material": 28,
      "./math/vec2": 30,
      "./objects/Body": 31,
      "./objects/LinearSpring": 32,
      "./objects/RotationalSpring": 33,
      "./objects/Spring": 34,
      "./objects/TopDownVehicle": 35,
      "./shapes/Box": 37,
      "./shapes/Capsule": 38,
      "./shapes/Circle": 39,
      "./shapes/Convex": 40,
      "./shapes/Heightfield": 41,
      "./shapes/Line": 42,
      "./shapes/Particle": 43,
      "./shapes/Plane": 44,
      "./shapes/Shape": 45,
      "./solver/GSSolver": 46,
      "./solver/Solver": 47,
      "./utils/ContactEquationPool": 48,
      "./utils/FrictionEquationPool": 49,
      "./utils/Pool": 55,
      "./utils/Utils": 57,
      "./world/World": 61
    }],
    37: [function (t, e, i) {
      function s(t) {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          t = {
            width: arguments[0],
            height: arguments[1]
          };
        }
        t = t || {};
        var e = this.width = t.width || 1;
        var i = this.height = t.height || 1;
        var s = [n.fromValues(-e / 2, -i / 2), n.fromValues(e / 2, -i / 2), n.fromValues(e / 2, i / 2), n.fromValues(-e / 2, i / 2)];
        var r = [n.fromValues(1, 0), n.fromValues(0, 1)];
        t.vertices = s;
        t.axes = r;
        t.type = a.BOX;
        o.call(this, t);
      }
      var n = t("../math/vec2");
      var a = t("./Shape");
      var o = t("./Convex");
      e.exports = s;
      s.prototype = new o();
      s.prototype.constructor = s;
      s.prototype.computeMomentOfInertia = function (t) {
        var e = this.width;
        var i = this.height;
        return t * (i * i + e * e) / 12;
      };
      s.prototype.updateBoundingRadius = function () {
        var t = this.width;
        var e = this.height;
        this.boundingRadius = Math.sqrt(t * t + e * e) / 2;
      };
      var r = n.create();
      var h = n.create();
      var l = n.create();
      var c = n.create();
      s.prototype.computeAABB = function (t, e, i) {
        t.setFromPoints(this.vertices, e, i, 0);
      };
      s.prototype.updateArea = function () {
        this.area = this.width * this.height;
      };
    }, {
      "../math/vec2": 30,
      "./Convex": 40,
      "./Shape": 45
    }],
    38: [function (t, e, i) {
      function s(t) {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          t = {
            length: arguments[0],
            radius: arguments[1]
          };
        }
        t = t || {};
        this.length = t.length || 1;
        this.radius = t.radius || 1;
        t.type = n.CAPSULE;
        n.call(this, t);
      }
      var n = t("./Shape");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeMomentOfInertia = function (t) {
        var e = this.radius;
        var i = this.length + e;
        var s = e * 2;
        return t * (s * s + i * i) / 12;
      };
      s.prototype.updateBoundingRadius = function () {
        this.boundingRadius = this.radius + this.length / 2;
      };
      s.prototype.updateArea = function () {
        this.area = Math.PI * this.radius * this.radius + this.radius * 2 * this.length;
      };
      var o = a.create();
      s.prototype.computeAABB = function (t, e, i) {
        var s = this.radius;
        a.set(o, this.length / 2, 0);
        if (i !== 0) {
          a.rotate(o, o, i);
        }
        a.set(t.upperBound, Math.max(o[0] + s, -o[0] + s), Math.max(o[1] + s, -o[1] + s));
        a.set(t.lowerBound, Math.min(o[0] - s, -o[0] - s), Math.min(o[1] - s, -o[1] - s));
        a.add(t.lowerBound, t.lowerBound, e);
        a.add(t.upperBound, t.upperBound, e);
      };
      var r = a.create();
      var h = a.create();
      var l = a.create();
      var c = a.create();
      var u = a.fromValues(0, 1);
      s.prototype.raycast = function (t, e, i, s) {
        var n = e.from;
        var o = e.to;
        var d = e.direction;
        var p = r;
        var f = h;
        var g = l;
        var m = c;
        var y = this.length / 2;
        for (var v = 0; v < 2; v++) {
          var b = this.radius * (v * 2 - 1);
          a.set(g, -y, b);
          a.set(m, y, b);
          a.toGlobalFrame(g, g, i, s);
          a.toGlobalFrame(m, m, i, s);
          var _ = a.getLineSegmentsIntersectionFraction(n, o, g, m);
          if (_ >= 0 && (a.rotate(f, u, s), a.scale(f, f, v * 2 - 1), e.reportIntersection(t, _, f, -1), t.shouldStop(e))) {
            return;
          }
        }
        var x = Math.pow(this.radius, 2) + Math.pow(y, 2);
        for (var v = 0; v < 2; v++) {
          a.set(g, y * (v * 2 - 1), 0);
          a.toGlobalFrame(g, g, i, s);
          var w = Math.pow(o[0] - n[0], 2) + Math.pow(o[1] - n[1], 2);
          var P = ((o[0] - n[0]) * (n[0] - g[0]) + (o[1] - n[1]) * (n[1] - g[1])) * 2;
          var T = Math.pow(n[0] - g[0], 2) + Math.pow(n[1] - g[1], 2) - Math.pow(this.radius, 2);
          var _ = Math.pow(P, 2) - w * 4 * T;
          if (!(_ < 0)) {
            if (_ === 0) {
              a.lerp(p, n, o, _);
              if (a.squaredDistance(p, i) > x && (a.sub(f, p, g), a.normalize(f, f), e.reportIntersection(t, _, f, -1), t.shouldStop(e))) {
                return;
              }
            } else {
              var S = Math.sqrt(_);
              var C = 1 / (w * 2);
              var A = (-P - S) * C;
              var E = (-P + S) * C;
              if (A >= 0 && A <= 1 && (a.lerp(p, n, o, A), a.squaredDistance(p, i) > x && (a.sub(f, p, g), a.normalize(f, f), e.reportIntersection(t, A, f, -1), t.shouldStop(e)))) {
                return;
              }
              if (E >= 0 && E <= 1 && (a.lerp(p, n, o, E), a.squaredDistance(p, i) > x && (a.sub(f, p, g), a.normalize(f, f), e.reportIntersection(t, E, f, -1), t.shouldStop(e)))) {
                return;
              }
            }
          }
        }
      };
    }, {
      "../math/vec2": 30,
      "./Shape": 45
    }],
    39: [function (t, e, i) {
      function s(t) {
        if (typeof arguments[0] == "number") {
          t = {
            radius: arguments[0]
          };
        }
        t = t || {};
        this.radius = t.radius || 1;
        t.type = n.CIRCLE;
        n.call(this, t);
      }
      var n = t("./Shape");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeMomentOfInertia = function (t) {
        var e = this.radius;
        return t * e * e / 2;
      };
      s.prototype.updateBoundingRadius = function () {
        this.boundingRadius = this.radius;
      };
      s.prototype.updateArea = function () {
        this.area = Math.PI * this.radius * this.radius;
      };
      s.prototype.computeAABB = function (t, e, i) {
        var s = this.radius;
        a.set(t.upperBound, s, s);
        a.set(t.lowerBound, -s, -s);
        if (e) {
          a.add(t.lowerBound, t.lowerBound, e);
          a.add(t.upperBound, t.upperBound, e);
        }
      };
      var o = a.create();
      var r = a.create();
      s.prototype.raycast = function (t, e, i, s) {
        var n = e.from;
        var h = e.to;
        var l = this.radius;
        var c = Math.pow(h[0] - n[0], 2) + Math.pow(h[1] - n[1], 2);
        var u = ((h[0] - n[0]) * (n[0] - i[0]) + (h[1] - n[1]) * (n[1] - i[1])) * 2;
        var d = Math.pow(n[0] - i[0], 2) + Math.pow(n[1] - i[1], 2) - Math.pow(l, 2);
        var p = Math.pow(u, 2) - c * 4 * d;
        var f = o;
        var g = r;
        if (!(p < 0)) {
          if (p === 0) {
            a.lerp(f, n, h, p);
            a.sub(g, f, i);
            a.normalize(g, g);
            e.reportIntersection(t, p, g, -1);
          } else {
            var m = Math.sqrt(p);
            var y = 1 / (c * 2);
            var v = (-u - m) * y;
            var b = (-u + m) * y;
            if (v >= 0 && v <= 1 && (a.lerp(f, n, h, v), a.sub(g, f, i), a.normalize(g, g), e.reportIntersection(t, v, g, -1), t.shouldStop(e))) {
              return;
            }
            if (b >= 0 && b <= 1) {
              a.lerp(f, n, h, b);
              a.sub(g, f, i);
              a.normalize(g, g);
              e.reportIntersection(t, b, g, -1);
            }
          }
        }
      };
    }, {
      "../math/vec2": 30,
      "./Shape": 45
    }],
    40: [function (t, e, i) {
      function s(t) {
        if (Array.isArray(arguments[0])) {
          t = {
            vertices: arguments[0],
            axes: arguments[1]
          };
        }
        t = t || {};
        this.vertices = [];
        for (var e = t.vertices !== undefined ? t.vertices : [], i = 0; i < e.length; i++) {
          var s = a.create();
          a.copy(s, e[i]);
          this.vertices.push(s);
        }
        this.axes = [];
        if (t.axes) {
          for (var i = 0; i < t.axes.length; i++) {
            var o = a.create();
            a.copy(o, t.axes[i]);
            this.axes.push(o);
          }
        } else {
          for (var i = 0; i < this.vertices.length; i++) {
            var r = this.vertices[i];
            var h = this.vertices[(i + 1) % this.vertices.length];
            var l = a.create();
            a.sub(l, h, r);
            a.rotate90cw(l, l);
            a.normalize(l, l);
            this.axes.push(l);
          }
        }
        this.centerOfMass = a.fromValues(0, 0);
        this.triangles = [];
        if (this.vertices.length) {
          this.updateTriangles();
          this.updateCenterOfMass();
        }
        this.boundingRadius = 0;
        t.type = n.CONVEX;
        n.call(this, t);
        this.updateBoundingRadius();
        this.updateArea();
        if (this.area < 0) {
          throw new Error("Convex vertices must be given in conter-clockwise winding.");
        }
      }
      var n = t("./Shape");
      var a = t("../math/vec2");
      var o = t("../math/polyk");
      var r = t("poly-decomp");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      var h = a.create();
      var l = a.create();
      s.prototype.projectOntoLocalAxis = function (t, e) {
        var i = null;
        var s = null;
        var n;
        var o;
        var t = h;
        for (var r = 0; r < this.vertices.length; r++) {
          n = this.vertices[r];
          o = a.dot(n, t);
          if (i === null || o > i) {
            i = o;
          }
          if (s === null || o < s) {
            s = o;
          }
        }
        if (s > i) {
          var l = s;
          s = i;
          i = l;
        }
        a.set(e, s, i);
      };
      s.prototype.projectOntoWorldAxis = function (t, e, i, s) {
        var n = l;
        this.projectOntoLocalAxis(t, s);
        if (i !== 0) {
          a.rotate(n, t, i);
        } else {
          n = t;
        }
        var o = a.dot(e, n);
        a.set(s, s[0] + o, s[1] + o);
      };
      s.prototype.updateTriangles = function () {
        this.triangles.length = 0;
        var t = [];
        for (var e = 0; e < this.vertices.length; e++) {
          var i = this.vertices[e];
          t.push(i[0], i[1]);
        }
        for (var s = o.Triangulate(t), e = 0; e < s.length; e += 3) {
          var n = s[e];
          var a = s[e + 1];
          var r = s[e + 2];
          this.triangles.push([n, a, r]);
        }
      };
      var c = a.create();
      var u = a.create();
      var d = a.create();
      var p = a.create();
      var f = a.create();
      var g = a.create();
      var m = a.create();
      var y = a.create();
      var v = a.create();
      s.prototype.updateCenterOfMass = function () {
        var t = this.triangles;
        var e = this.vertices;
        var i = this.centerOfMass;
        var n = c;
        var o = v;
        var r = d;
        var h = p;
        var l = f;
        var b = g;
        var _ = m;
        var x = y;
        var w = u;
        a.set(i, 0, 0);
        var P = 0;
        for (var T = 0; T !== t.length; T++) {
          var S = t[T];
          var r = e[S[0]];
          var h = e[S[1]];
          var l = e[S[2]];
          a.centroid(n, r, h, l);
          var C = s.triangleArea(r, h, l);
          P += C;
          a.scale(w, n, C);
          a.add(i, i, w);
        }
        a.scale(i, i, 1 / P);
      };
      s.prototype.computeMomentOfInertia = function (t) {
        var e = 0;
        var i = 0;
        for (var s = this.vertices.length, n = s - 1, o = 0; o < s; n = o, o++) {
          var r = this.vertices[n];
          var h = this.vertices[o];
          var l = Math.abs(a.crossLength(r, h));
          e += l * (a.dot(h, h) + a.dot(h, r) + a.dot(r, r));
          i += l;
        }
        return t / 6 * (e / i);
      };
      s.prototype.updateBoundingRadius = function () {
        for (var t = this.vertices, e = 0, i = 0; i !== t.length; i++) {
          var s = a.squaredLength(t[i]);
          if (s > e) {
            e = s;
          }
        }
        this.boundingRadius = Math.sqrt(e);
      };
      s.triangleArea = function (t, e, i) {
        return ((e[0] - t[0]) * (i[1] - t[1]) - (i[0] - t[0]) * (e[1] - t[1])) * 0.5;
      };
      s.prototype.updateArea = function () {
        this.updateTriangles();
        this.area = 0;
        for (var t = this.triangles, e = this.vertices, i = 0; i !== t.length; i++) {
          var n = t[i];
          var a = e[n[0]];
          var o = e[n[1]];
          var r = e[n[2]];
          var h = s.triangleArea(a, o, r);
          this.area += h;
        }
      };
      s.prototype.computeAABB = function (t, e, i) {
        t.setFromPoints(this.vertices, e, i, 0);
      };
      var b = a.create();
      var _ = a.create();
      var x = a.create();
      s.prototype.raycast = function (t, e, i, s) {
        var n = b;
        var o = _;
        var r = x;
        var h = this.vertices;
        a.toLocalFrame(n, e.from, i, s);
        a.toLocalFrame(o, e.to, i, s);
        for (var l = h.length, c = 0; c < l && !t.shouldStop(e); c++) {
          var u = h[c];
          var d = h[(c + 1) % l];
          var p = a.getLineSegmentsIntersectionFraction(n, o, u, d);
          if (p >= 0) {
            a.sub(r, d, u);
            a.rotate(r, r, -Math.PI / 2 + s);
            a.normalize(r, r);
            e.reportIntersection(t, p, r, c);
          }
        }
      };
    }, {
      "../math/polyk": 29,
      "../math/vec2": 30,
      "./Shape": 45,
      "poly-decomp": 5
    }],
    41: [function (t, e, i) {
      function s(t) {
        if (Array.isArray(arguments[0]) && (t = {
          heights: arguments[0]
        }, typeof arguments[1] == "object")) {
          for (var e in arguments[1]) {
            t[e] = arguments[1][e];
          }
        }
        t = t || {};
        this.heights = t.heights ? t.heights.slice(0) : [];
        this.maxValue = t.maxValue || null;
        this.minValue = t.minValue || null;
        this.elementWidth = t.elementWidth || 0.1;
        if (t.maxValue === undefined || t.minValue === undefined) {
          this.updateMaxMinValues();
        }
        t.type = a.HEIGHTFIELD;
        a.call(this, t);
      }
      function n(t, e, i, s, n) {
        var a;
        var o;
        var r;
        var h;
        a = i[0] - e[0];
        o = i[1] - e[1];
        r = n[0] - s[0];
        h = n[1] - s[1];
        var l;
        var c;
        l = (-o * (e[0] - s[0]) + a * (e[1] - s[1])) / (-r * o + a * h);
        c = (r * (e[1] - s[1]) - h * (e[0] - s[0])) / (-r * o + a * h);
        if (l >= 0 && l <= 1 && c >= 0 && c <= 1) {
          var u = e[0] + c * a;
          var d = e[1] + c * o;
          t[0] = u;
          t[1] = d;
          return c;
        }
        return -1;
      }
      var a = t("./Shape");
      var o = t("../math/vec2");
      var r = t("../utils/Utils");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.updateMaxMinValues = function () {
        for (var t = this.heights, e = t[0], i = t[0], s = 0; s !== t.length; s++) {
          var n = t[s];
          if (n > e) {
            e = n;
          }
          if (n < i) {
            i = n;
          }
        }
        this.maxValue = e;
        this.minValue = i;
      };
      s.prototype.computeMomentOfInertia = function (t) {
        return Number.MAX_VALUE;
      };
      s.prototype.updateBoundingRadius = function () {
        this.boundingRadius = Number.MAX_VALUE;
      };
      s.prototype.updateArea = function () {
        for (var t = this.heights, e = 0, i = 0; i < t.length - 1; i++) {
          e += (t[i] + t[i + 1]) / 2 * this.elementWidth;
        }
        this.area = e;
      };
      var h = [o.create(), o.create(), o.create(), o.create()];
      s.prototype.computeAABB = function (t, e, i) {
        o.set(h[0], 0, this.maxValue);
        o.set(h[1], this.elementWidth * this.heights.length, this.maxValue);
        o.set(h[2], this.elementWidth * this.heights.length, this.minValue);
        o.set(h[3], 0, this.minValue);
        t.setFromPoints(h, e, i);
      };
      s.prototype.getLineSegment = function (t, e, i) {
        var s = this.heights;
        var n = this.elementWidth;
        o.set(t, i * n, s[i]);
        o.set(e, (i + 1) * n, s[i + 1]);
      };
      s.prototype.getSegmentIndex = function (t) {
        return Math.floor(t[0] / this.elementWidth);
      };
      s.prototype.getClampedSegmentIndex = function (t) {
        var e = this.getSegmentIndex(t);
        return e = Math.min(this.heights.length, Math.max(e, 0));
      };
      var l = o.create();
      var c = o.create();
      var u = o.create();
      var d = o.create();
      var p = o.create();
      var f = o.create();
      var g = o.fromValues(0, 1);
      s.prototype.raycast = function (t, e, i, s) {
        var n = e.from;
        var a = e.to;
        var r = e.direction;
        var h = l;
        var g = c;
        var m = u;
        var y = d;
        var v = p;
        var b = f;
        o.toLocalFrame(v, n, i, s);
        o.toLocalFrame(b, a, i, s);
        var _ = this.getClampedSegmentIndex(v);
        var x = this.getClampedSegmentIndex(b);
        if (_ > x) {
          var w = _;
          _ = x;
          x = w;
        }
        for (var P = 0; P < this.heights.length - 1; P++) {
          this.getLineSegment(m, y, P);
          var T = o.getLineSegmentsIntersectionFraction(v, b, m, y);
          if (T >= 0 && (o.sub(g, y, m), o.rotate(g, g, s + Math.PI / 2), o.normalize(g, g), e.reportIntersection(t, T, g, -1), t.shouldStop(e))) {
            return;
          }
        }
      };
    }, {
      "../math/vec2": 30,
      "../utils/Utils": 57,
      "./Shape": 45
    }],
    42: [function (t, e, i) {
      function s(t) {
        if (typeof arguments[0] == "number") {
          t = {
            length: arguments[0]
          };
        }
        t = t || {};
        this.length = t.length || 1;
        t.type = n.LINE;
        n.call(this, t);
      }
      var n = t("./Shape");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeMomentOfInertia = function (t) {
        return t * Math.pow(this.length, 2) / 12;
      };
      s.prototype.updateBoundingRadius = function () {
        this.boundingRadius = this.length / 2;
      };
      var o = [a.create(), a.create()];
      s.prototype.computeAABB = function (t, e, i) {
        var s = this.length / 2;
        a.set(o[0], -s, 0);
        a.set(o[1], s, 0);
        t.setFromPoints(o, e, i, 0);
      };
      var r = a.create();
      var h = a.create();
      var l = a.create();
      var c = a.create();
      var u = a.fromValues(0, 1);
      s.prototype.raycast = function (t, e, i, s) {
        var n = e.from;
        var o = e.to;
        var r = l;
        var d = c;
        var p = this.length / 2;
        a.set(r, -p, 0);
        a.set(d, p, 0);
        a.toGlobalFrame(r, r, i, s);
        a.toGlobalFrame(d, d, i, s);
        var f = a.getLineSegmentsIntersectionFraction(r, d, n, o);
        if (f >= 0) {
          var g = h;
          a.rotate(g, u, s);
          e.reportIntersection(t, f, g, -1);
        }
      };
    }, {
      "../math/vec2": 30,
      "./Shape": 45
    }],
    43: [function (t, e, i) {
      function s(t) {
        t = t || {};
        t.type = n.PARTICLE;
        n.call(this, t);
      }
      var n = t("./Shape");
      var a = t("../math/vec2");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeMomentOfInertia = function (t) {
        return 0;
      };
      s.prototype.updateBoundingRadius = function () {
        this.boundingRadius = 0;
      };
      s.prototype.computeAABB = function (t, e, i) {
        a.copy(t.lowerBound, e);
        a.copy(t.upperBound, e);
      };
    }, {
      "../math/vec2": 30,
      "./Shape": 45
    }],
    44: [function (t, e, i) {
      function s(t) {
        t = t || {};
        t.type = n.PLANE;
        n.call(this, t);
      }
      var n = t("./Shape");
      var a = t("../math/vec2");
      var o = t("../utils/Utils");
      e.exports = s;
      s.prototype = new n();
      s.prototype.constructor = s;
      s.prototype.computeMomentOfInertia = function (t) {
        return 0;
      };
      s.prototype.updateBoundingRadius = function () {
        this.boundingRadius = Number.MAX_VALUE;
      };
      s.prototype.computeAABB = function (t, e, i) {
        var s = i % (Math.PI * 2);
        var n = a.set;
        var o = Number.MAX_VALUE;
        var r = t.lowerBound;
        var h = t.upperBound;
        if (s === 0) {
          n(r, -o, -o);
          n(h, o, 0);
        } else if (s === Math.PI / 2) {
          n(r, 0, -o);
          n(h, o, o);
        } else if (s === Math.PI) {
          n(r, -o, 0);
          n(h, o, o);
        } else if (s === Math.PI * 3 / 2) {
          n(r, -o, -o);
          n(h, 0, o);
        } else {
          n(r, -o, -o);
          n(h, o, o);
        }
        a.add(r, r, e);
        a.add(h, h, e);
      };
      s.prototype.updateArea = function () {
        this.area = Number.MAX_VALUE;
      };
      var r = a.create();
      var h = a.create();
      var l = a.create();
      var c = a.create();
      var u = a.create();
      s.prototype.raycast = function (t, e, i, s) {
        var n = e.from;
        var o = e.to;
        var d = e.direction;
        var p = r;
        var f = h;
        var g = l;
        var m = c;
        var y = u;
        a.set(m, 0, 1);
        a.rotate(m, m, s);
        a.sub(y, n, i);
        var v = a.dot(y, m);
        a.sub(y, o, i);
        if (!(v * a.dot(y, m) > 0) && !(a.squaredDistance(n, o) < v * v)) {
          var b = a.dot(m, d);
          a.sub(p, n, i);
          var _ = -a.dot(m, p) / b / e.length;
          e.reportIntersection(t, _, m, -1);
        }
      };
    }, {
      "../math/vec2": 30,
      "../utils/Utils": 57,
      "./Shape": 45
    }],
    45: [function (t, e, i) {
      function s(t) {
        t = t || {};
        this.body = null;
        this.position = n.fromValues(0, 0);
        if (t.position) {
          n.copy(this.position, t.position);
        }
        this.angle = t.angle || 0;
        this.type = t.type || 0;
        this.id = s.idCounter++;
        this.boundingRadius = 0;
        this.collisionGroup = t.collisionGroup !== undefined ? t.collisionGroup : 1;
        this.collisionResponse = t.collisionResponse === undefined || t.collisionResponse;
        this.collisionMask = t.collisionMask !== undefined ? t.collisionMask : 1;
        this.material = t.material || null;
        this.area = 0;
        this.sensor = t.sensor !== undefined && t.sensor;
        if (this.type) {
          this.updateBoundingRadius();
        }
        this.updateArea();
      }
      e.exports = s;
      var n = t("../math/vec2");
      s.idCounter = 0;
      s.CIRCLE = 1;
      s.PARTICLE = 2;
      s.PLANE = 4;
      s.CONVEX = 8;
      s.LINE = 16;
      s.BOX = 32;
      Object.defineProperty(s, "RECTANGLE", {
        get: function () {
          return s.BOX;
        }
      });
      s.CAPSULE = 64;
      s.HEIGHTFIELD = 128;
      s.prototype.computeMomentOfInertia = function (t) {};
      s.prototype.updateBoundingRadius = function () {};
      s.prototype.updateArea = function () {};
      s.prototype.computeAABB = function (t, e, i) {};
      s.prototype.raycast = function (t, e, i, s) {};
    }, {
      "../math/vec2": 30
    }],
    46: [function (t, e, i) {
      function s(t) {
        o.call(this, t, o.GS);
        t = t || {};
        this.iterations = t.iterations || 10;
        this.tolerance = t.tolerance || 1e-7;
        this.arrayStep = 30;
        this.lambda = new r.ARRAY_TYPE(this.arrayStep);
        this.Bs = new r.ARRAY_TYPE(this.arrayStep);
        this.invCs = new r.ARRAY_TYPE(this.arrayStep);
        this.useZeroRHS = false;
        this.frictionIterations = 0;
        this.usedIterations = 0;
      }
      function n(t) {
        for (var e = t.length; e--;) {
          t[e] = 0;
        }
      }
      var a = t("../math/vec2");
      var o = t("./Solver");
      var r = t("../utils/Utils");
      var h = t("../equations/FrictionEquation");
      e.exports = s;
      s.prototype = new o();
      s.prototype.constructor = s;
      s.prototype.solve = function (t, e) {
        this.sortEquations();
        var i = 0;
        var o = this.iterations;
        var l = this.frictionIterations;
        var c = this.equations;
        var u = c.length;
        var d = Math.pow(this.tolerance * u, 2);
        var p = e.bodies;
        var f = e.bodies.length;
        var g = a.add;
        var m = a.set;
        var y = this.useZeroRHS;
        var v = this.lambda;
        this.usedIterations = 0;
        if (u) {
          for (var b = 0; b !== f; b++) {
            var _ = p[b];
            _.updateSolveMassProperties();
          }
        }
        if (v.length < u) {
          v = this.lambda = new r.ARRAY_TYPE(u + this.arrayStep);
          this.Bs = new r.ARRAY_TYPE(u + this.arrayStep);
          this.invCs = new r.ARRAY_TYPE(u + this.arrayStep);
        }
        n(v);
        var x = this.invCs;
        var w = this.Bs;
        var v = this.lambda;
        for (var b = 0; b !== c.length; b++) {
          var P = c[b];
          if (P.timeStep !== t || P.needsUpdate) {
            P.timeStep = t;
            P.update();
          }
          w[b] = P.computeB(P.a, P.b, t);
          x[b] = P.computeInvC(P.epsilon);
        }
        var T;
        var S;
        var P;
        var C;
        var b;
        var A;
        if (u !== 0) {
          for (b = 0; b !== f; b++) {
            var _ = p[b];
            _.resetConstraintVelocity();
          }
          if (l) {
            for (i = 0; i !== l; i++) {
              C = 0;
              A = 0;
              for (; A !== u; A++) {
                P = c[A];
                var E = s.iterateEquation(A, P, P.epsilon, w, x, v, y, t, i);
                C += Math.abs(E);
              }
              this.usedIterations++;
              if (C * C <= d) {
                break;
              }
            }
            s.updateMultipliers(c, v, 1 / t);
            A = 0;
            for (; A !== u; A++) {
              var I = c[A];
              if (I instanceof h) {
                var B = 0;
                for (var M = 0; M !== I.contactEquations.length; M++) {
                  B += I.contactEquations[M].multiplier;
                }
                B *= I.frictionCoefficient / I.contactEquations.length;
                I.maxForce = B;
                I.minForce = -B;
              }
            }
          }
          for (i = 0; i !== o; i++) {
            C = 0;
            A = 0;
            for (; A !== u; A++) {
              P = c[A];
              var E = s.iterateEquation(A, P, P.epsilon, w, x, v, y, t, i);
              C += Math.abs(E);
            }
            this.usedIterations++;
            if (C * C <= d) {
              break;
            }
          }
          for (b = 0; b !== f; b++) {
            p[b].addConstraintVelocity();
          }
          s.updateMultipliers(c, v, 1 / t);
        }
      };
      s.updateMultipliers = function (t, e, i) {
        for (var s = t.length; s--;) {
          t[s].multiplier = e[s] * i;
        }
      };
      s.iterateEquation = function (t, e, i, s, n, a, o, r, h) {
        var l = s[t];
        var c = n[t];
        var u = a[t];
        var d = e.computeGWlambda();
        var p = e.maxForce;
        var f = e.minForce;
        if (o) {
          l = 0;
        }
        var g = c * (l - d - i * u);
        var m = u + g;
        if (m < f * r) {
          g = f * r - u;
        } else if (m > p * r) {
          g = p * r - u;
        }
        a[t] += g;
        e.addToWlambda(g);
        return g;
      };
    }, {
      "../equations/FrictionEquation": 23,
      "../math/vec2": 30,
      "../utils/Utils": 57,
      "./Solver": 47
    }],
    47: [function (t, e, i) {
      function s(t, e) {
        t = t || {};
        a.call(this);
        this.type = e;
        this.equations = [];
        this.equationSortFunction = t.equationSortFunction || false;
      }
      var n = t("../utils/Utils");
      var a = t("../events/EventEmitter");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.solve = function (t, e) {
        throw new Error("Solver.solve should be implemented by subclasses!");
      };
      var o = {
        bodies: []
      };
      s.prototype.solveIsland = function (t, e) {
        this.removeAllEquations();
        if (e.equations.length) {
          this.addEquations(e.equations);
          o.bodies.length = 0;
          e.getBodies(o.bodies);
          if (o.bodies.length) {
            this.solve(t, o);
          }
        }
      };
      s.prototype.sortEquations = function () {
        if (this.equationSortFunction) {
          this.equations.sort(this.equationSortFunction);
        }
      };
      s.prototype.addEquation = function (t) {
        if (t.enabled) {
          this.equations.push(t);
        }
      };
      s.prototype.addEquations = function (t) {
        for (var e = 0, i = t.length; e !== i; e++) {
          var s = t[e];
          if (s.enabled) {
            this.equations.push(s);
          }
        }
      };
      s.prototype.removeEquation = function (t) {
        var e = this.equations.indexOf(t);
        if (e !== -1) {
          this.equations.splice(e, 1);
        }
      };
      s.prototype.removeAllEquations = function () {
        this.equations.length = 0;
      };
      s.GS = 1;
      s.ISLAND = 2;
    }, {
      "../events/EventEmitter": 26,
      "../utils/Utils": 57
    }],
    48: [function (t, e, i) {
      function s() {
        a.apply(this, arguments);
      }
      var n = t("../equations/ContactEquation");
      var a = t("./Pool");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.create = function () {
        return new n();
      };
      s.prototype.destroy = function (t) {
        t.bodyA = t.bodyB = null;
        return this;
      };
    }, {
      "../equations/ContactEquation": 21,
      "./Pool": 55
    }],
    49: [function (t, e, i) {
      function s() {
        a.apply(this, arguments);
      }
      var n = t("../equations/FrictionEquation");
      var a = t("./Pool");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.create = function () {
        return new n();
      };
      s.prototype.destroy = function (t) {
        t.bodyA = t.bodyB = null;
        return this;
      };
    }, {
      "../equations/FrictionEquation": 23,
      "./Pool": 55
    }],
    50: [function (t, e, i) {
      function s() {
        a.apply(this, arguments);
      }
      var n = t("../world/IslandNode");
      var a = t("./Pool");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.create = function () {
        return new n();
      };
      s.prototype.destroy = function (t) {
        t.reset();
        return this;
      };
    }, {
      "../world/IslandNode": 60,
      "./Pool": 55
    }],
    51: [function (t, e, i) {
      function s() {
        a.apply(this, arguments);
      }
      var n = t("../world/Island");
      var a = t("./Pool");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.create = function () {
        return new n();
      };
      s.prototype.destroy = function (t) {
        t.reset();
        return this;
      };
    }, {
      "../world/Island": 58,
      "./Pool": 55
    }],
    52: [function (t, e, i) {
      function s() {
        this.overlappingShapesLastState = new n();
        this.overlappingShapesCurrentState = new n();
        this.recordPool = new o({
          size: 16
        });
        this.tmpDict = new n();
        this.tmpArray1 = [];
      }
      var n = t("./TupleDictionary");
      var a = t("./OverlapKeeperRecord");
      var o = t("./OverlapKeeperRecordPool");
      var r = t("./Utils");
      e.exports = s;
      s.prototype.tick = function () {
        var t = this.overlappingShapesLastState;
        var e = this.overlappingShapesCurrentState;
        for (var i = t.keys.length; i--;) {
          var s = t.keys[i];
          var n = t.getByKey(s);
          var a = e.getByKey(s);
          if (n) {
            this.recordPool.release(n);
          }
        }
        t.reset();
        t.copy(e);
        e.reset();
      };
      s.prototype.setOverlapping = function (t, e, i, s) {
        var n = this.overlappingShapesLastState;
        var a = this.overlappingShapesCurrentState;
        if (!a.get(e.id, s.id)) {
          var o = this.recordPool.get();
          o.set(t, e, i, s);
          a.set(e.id, s.id, o);
        }
      };
      s.prototype.getNewOverlaps = function (t) {
        return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, t);
      };
      s.prototype.getEndOverlaps = function (t) {
        return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, t);
      };
      s.prototype.bodiesAreOverlapping = function (t, e) {
        var i = this.overlappingShapesCurrentState;
        for (var s = i.keys.length; s--;) {
          var n = i.keys[s];
          var a = i.data[n];
          if (a.bodyA === t && a.bodyB === e || a.bodyA === e && a.bodyB === t) {
            return true;
          }
        }
        return false;
      };
      s.prototype.getDiff = function (t, e, i) {
        var i = i || [];
        var s = t;
        var n = e;
        i.length = 0;
        for (var a = n.keys.length; a--;) {
          var o = n.keys[a];
          var r = n.data[o];
          if (!r) {
            throw new Error("Key " + o + " had no data!");
          }
          if (!s.data[o]) {
            i.push(r);
          }
        }
        return i;
      };
      s.prototype.isNewOverlap = function (t, e) {
        var i = t.id | 0;
        var s = e.id | 0;
        var n = this.overlappingShapesLastState;
        var a = this.overlappingShapesCurrentState;
        return !n.get(i, s) && !!a.get(i, s);
      };
      s.prototype.getNewBodyOverlaps = function (t) {
        this.tmpArray1.length = 0;
        var e = this.getNewOverlaps(this.tmpArray1);
        return this.getBodyDiff(e, t);
      };
      s.prototype.getEndBodyOverlaps = function (t) {
        this.tmpArray1.length = 0;
        var e = this.getEndOverlaps(this.tmpArray1);
        return this.getBodyDiff(e, t);
      };
      s.prototype.getBodyDiff = function (t, e) {
        e = e || [];
        var i = this.tmpDict;
        for (var s = t.length; s--;) {
          var n = t[s];
          i.set(n.bodyA.id | 0, n.bodyB.id | 0, n);
        }
        for (s = i.keys.length; s--;) {
          var n = i.getByKey(i.keys[s]);
          if (n) {
            e.push(n.bodyA, n.bodyB);
          }
        }
        i.reset();
        return e;
      };
    }, {
      "./OverlapKeeperRecord": 53,
      "./OverlapKeeperRecordPool": 54,
      "./TupleDictionary": 56,
      "./Utils": 57
    }],
    53: [function (t, e, i) {
      function s(t, e, i, s) {
        this.shapeA = e;
        this.shapeB = s;
        this.bodyA = t;
        this.bodyB = i;
      }
      e.exports = s;
      s.prototype.set = function (t, e, i, n) {
        s.call(this, t, e, i, n);
      };
    }, {}],
    54: [function (t, e, i) {
      function s() {
        a.apply(this, arguments);
      }
      var n = t("./OverlapKeeperRecord");
      var a = t("./Pool");
      e.exports = s;
      s.prototype = new a();
      s.prototype.constructor = s;
      s.prototype.create = function () {
        return new n();
      };
      s.prototype.destroy = function (t) {
        t.bodyA = t.bodyB = t.shapeA = t.shapeB = null;
        return this;
      };
    }, {
      "./OverlapKeeperRecord": 53,
      "./Pool": 55
    }],
    55: [function (t, e, i) {
      function s(t) {
        t = t || {};
        this.objects = [];
        if (t.size !== undefined) {
          this.resize(t.size);
        }
      }
      e.exports = s;
      s.prototype.resize = function (t) {
        for (var e = this.objects; e.length > t;) {
          e.pop();
        }
        while (e.length < t) {
          e.push(this.create());
        }
        return this;
      };
      s.prototype.get = function () {
        var t = this.objects;
        if (t.length) {
          return t.pop();
        } else {
          return this.create();
        }
      };
      s.prototype.release = function (t) {
        this.destroy(t);
        this.objects.push(t);
        return this;
      };
    }, {}],
    56: [function (t, e, i) {
      function s() {
        this.data = {};
        this.keys = [];
      }
      var n = t("./Utils");
      e.exports = s;
      s.prototype.getKey = function (t, e) {
        t |= 0;
        e |= 0;
        if ((t | 0) == (e | 0)) {
          return -1;
        } else {
          return ((t | 0) > (e | 0) ? t << 16 | e & 65535 : e << 16 | t & 65535) | 0;
        }
      };
      s.prototype.getByKey = function (t) {
        t |= 0;
        return this.data[t];
      };
      s.prototype.get = function (t, e) {
        return this.data[this.getKey(t, e)];
      };
      s.prototype.set = function (t, e, i) {
        if (!i) {
          throw new Error("No data!");
        }
        var s = this.getKey(t, e);
        if (!this.data[s]) {
          this.keys.push(s);
        }
        this.data[s] = i;
        return s;
      };
      s.prototype.reset = function () {
        var t = this.data;
        var e = this.keys;
        for (var i = e.length; i--;) {
          delete t[e[i]];
        }
        e.length = 0;
      };
      s.prototype.copy = function (t) {
        this.reset();
        n.appendArray(this.keys, t.keys);
        for (var e = t.keys.length; e--;) {
          var i = t.keys[e];
          this.data[i] = t.data[i];
        }
      };
    }, {
      "./Utils": 57
    }],
    57: [function (t, e, i) {
      function s() {}
      e.exports = s;
      s.appendArray = function (t, e) {
        if (e.length < 150000) {
          t.push.apply(t, e);
        } else {
          for (var i = 0, s = e.length; i !== s; ++i) {
            t.push(e[i]);
          }
        }
      };
      s.splice = function (t, e, i) {
        i = i || 1;
        for (var s = e, n = t.length - i; s < n; s++) {
          t[s] = t[s + i];
        }
        t.length = n;
      };
      if (typeof P2_ARRAY_TYPE != "undefined") {
        s.ARRAY_TYPE = P2_ARRAY_TYPE;
      } else if (typeof Float32Array != "undefined") {
        s.ARRAY_TYPE = Float32Array;
      } else {
        s.ARRAY_TYPE = Array;
      }
      s.extend = function (t, e) {
        for (var i in e) {
          t[i] = e[i];
        }
      };
      s.defaults = function (t, e) {
        t = t || {};
        for (var i in e) {
          if (!(i in t)) {
            t[i] = e[i];
          }
        }
        return t;
      };
    }, {}],
    58: [function (t, e, i) {
      function s() {
        this.equations = [];
        this.bodies = [];
      }
      var n = t("../objects/Body");
      e.exports = s;
      s.prototype.reset = function () {
        this.equations.length = this.bodies.length = 0;
      };
      var a = [];
      s.prototype.getBodies = function (t) {
        var e = t || [];
        var i = this.equations;
        a.length = 0;
        for (var s = 0; s !== i.length; s++) {
          var n = i[s];
          if (a.indexOf(n.bodyA.id) === -1) {
            e.push(n.bodyA);
            a.push(n.bodyA.id);
          }
          if (a.indexOf(n.bodyB.id) === -1) {
            e.push(n.bodyB);
            a.push(n.bodyB.id);
          }
        }
        return e;
      };
      s.prototype.wantsToSleep = function () {
        for (var t = 0; t < this.bodies.length; t++) {
          var e = this.bodies[t];
          if (e.type === n.DYNAMIC && !e.wantsToSleep) {
            return false;
          }
        }
        return true;
      };
      s.prototype.sleep = function () {
        for (var t = 0; t < this.bodies.length; t++) {
          this.bodies[t].sleep();
        }
        return true;
      };
    }, {
      "../objects/Body": 31
    }],
    59: [function (t, e, i) {
      function s(t) {
        this.nodePool = new r({
          size: 16
        });
        this.islandPool = new h({
          size: 8
        });
        this.equations = [];
        this.islands = [];
        this.nodes = [];
        this.queue = [];
      }
      var n = t("../math/vec2");
      var a = t("./Island");
      var o = t("./IslandNode");
      var r = t("./../utils/IslandNodePool");
      var h = t("./../utils/IslandPool");
      var l = t("../objects/Body");
      e.exports = s;
      s.getUnvisitedNode = function (t) {
        for (var e = t.length, i = 0; i !== e; i++) {
          var s = t[i];
          if (!s.visited && s.body.type === l.DYNAMIC) {
            return s;
          }
        }
        return false;
      };
      s.prototype.visit = function (t, e, i) {
        e.push(t.body);
        for (var s = t.equations.length, n = 0; n !== s; n++) {
          var a = t.equations[n];
          if (i.indexOf(a) === -1) {
            i.push(a);
          }
        }
      };
      s.prototype.bfs = function (t, e, i) {
        var n = this.queue;
        n.length = 0;
        n.push(t);
        t.visited = true;
        this.visit(t, e, i);
        while (n.length) {
          for (var a = n.pop(), o; o = s.getUnvisitedNode(a.neighbors);) {
            o.visited = true;
            this.visit(o, e, i);
            if (o.body.type === l.DYNAMIC) {
              n.push(o);
            }
          }
        }
      };
      s.prototype.split = function (t) {
        var e = t.bodies;
        for (var i = this.nodes, n = this.equations; i.length;) {
          this.nodePool.release(i.pop());
        }
        for (var a = 0; a !== e.length; a++) {
          var o = this.nodePool.get();
          o.body = e[a];
          i.push(o);
        }
        for (var r = 0; r !== n.length; r++) {
          var h = n[r];
          var a = e.indexOf(h.bodyA);
          var l = e.indexOf(h.bodyB);
          var c = i[a];
          var u = i[l];
          c.neighbors.push(u);
          u.neighbors.push(c);
          c.equations.push(h);
          u.equations.push(h);
        }
        for (var d = this.islands, a = 0; a < d.length; a++) {
          this.islandPool.release(d[a]);
        }
        d.length = 0;
        for (var p; p = s.getUnvisitedNode(i);) {
          var f = this.islandPool.get();
          this.bfs(p, f.bodies, f.equations);
          d.push(f);
        }
        return d;
      };
    }, {
      "../math/vec2": 30,
      "../objects/Body": 31,
      "./../utils/IslandNodePool": 50,
      "./../utils/IslandPool": 51,
      "./Island": 58,
      "./IslandNode": 60
    }],
    60: [function (t, e, i) {
      function s(t) {
        this.body = t;
        this.neighbors = [];
        this.equations = [];
        this.visited = false;
      }
      e.exports = s;
      s.prototype.reset = function () {
        this.equations.length = 0;
        this.neighbors.length = 0;
        this.visited = false;
        this.body = null;
      };
    }, {}],
    61: [function (t, e, i) {
      function s(t) {
        f.apply(this);
        t = t || {};
        this.springs = [];
        this.bodies = [];
        this.disabledBodyCollisionPairs = [];
        this.solver = t.solver || new n();
        this.narrowphase = new B(this);
        this.islandManager = new O();
        this.gravity = r.fromValues(0, -9.78);
        if (t.gravity) {
          r.copy(this.gravity, t.gravity);
        }
        this.frictionGravity = r.length(this.gravity) || 10;
        this.useWorldGravityAsFrictionGravity = true;
        this.useFrictionGravityOnZeroGravity = true;
        this.broadphase = t.broadphase || new I();
        this.broadphase.setWorld(this);
        this.constraints = [];
        this.defaultMaterial = new v();
        this.defaultContactMaterial = new b(this.defaultMaterial, this.defaultMaterial);
        this.lastTimeStep = 1 / 60;
        this.applySpringForces = true;
        this.applyDamping = true;
        this.applyGravity = true;
        this.solveConstraints = true;
        this.contactMaterials = [];
        this.time = 0;
        this.accumulator = 0;
        this.stepping = false;
        this.bodiesToBeRemoved = [];
        this.islandSplit = t.islandSplit === undefined || !!t.islandSplit;
        this.emitImpactEvent = true;
        this._constraintIdCounter = 0;
        this._bodyIdCounter = 0;
        this.postStepEvent = {
          type: "postStep"
        };
        this.addBodyEvent = {
          type: "addBody",
          body: null
        };
        this.removeBodyEvent = {
          type: "removeBody",
          body: null
        };
        this.addSpringEvent = {
          type: "addSpring",
          spring: null
        };
        this.impactEvent = {
          type: "impact",
          bodyA: null,
          bodyB: null,
          shapeA: null,
          shapeB: null,
          contactEquation: null
        };
        this.postBroadphaseEvent = {
          type: "postBroadphase",
          pairs: null
        };
        this.sleepMode = s.NO_SLEEPING;
        this.beginContactEvent = {
          type: "beginContact",
          shapeA: null,
          shapeB: null,
          bodyA: null,
          bodyB: null,
          contactEquations: []
        };
        this.endContactEvent = {
          type: "endContact",
          shapeA: null,
          shapeB: null,
          bodyA: null,
          bodyB: null
        };
        this.preSolveEvent = {
          type: "preSolve",
          contactEquations: null,
          frictionEquations: null
        };
        this.overlappingShapesLastState = {
          keys: []
        };
        this.overlappingShapesCurrentState = {
          keys: []
        };
        this.overlapKeeper = new k();
      }
      var n = t("../solver/GSSolver");
      var a = t("../solver/Solver");
      var o = t("../collision/Ray");
      var r = t("../math/vec2");
      var h = t("../shapes/Circle");
      var l = t("../shapes/Convex");
      var c = t("../shapes/Line");
      var u = t("../shapes/Plane");
      var d = t("../shapes/Capsule");
      var p = t("../shapes/Particle");
      var f = t("../events/EventEmitter");
      var g = t("../objects/Body");
      var m = t("../shapes/Shape");
      var y = t("../objects/LinearSpring");
      var v = t("../material/Material");
      var b = t("../material/ContactMaterial");
      var _ = t("../constraints/DistanceConstraint");
      var x = t("../constraints/Constraint");
      var w = t("../constraints/LockConstraint");
      var P = t("../constraints/RevoluteConstraint");
      var T = t("../constraints/PrismaticConstraint");
      var S = t("../constraints/GearConstraint");
      var C = t("../../package.json");
      var A = t("../collision/Broadphase");
      var E = t("../collision/AABB");
      var I = t("../collision/SAPBroadphase");
      var B = t("../collision/Narrowphase");
      var M = t("../utils/Utils");
      var k = t("../utils/OverlapKeeper");
      var O = t("./IslandManager");
      var D = t("../objects/RotationalSpring");
      e.exports = s;
      s.prototype = new Object(f.prototype);
      s.prototype.constructor = s;
      s.NO_SLEEPING = 1;
      s.BODY_SLEEPING = 2;
      s.ISLAND_SLEEPING = 4;
      s.prototype.addConstraint = function (t) {
        this.constraints.push(t);
      };
      s.prototype.addContactMaterial = function (t) {
        this.contactMaterials.push(t);
      };
      s.prototype.removeContactMaterial = function (t) {
        var e = this.contactMaterials.indexOf(t);
        if (e !== -1) {
          M.splice(this.contactMaterials, e, 1);
        }
      };
      s.prototype.getContactMaterial = function (t, e) {
        var i = this.contactMaterials;
        for (var s = 0, n = i.length; s !== n; s++) {
          var a = i[s];
          if (a.materialA.id === t.id && a.materialB.id === e.id || a.materialA.id === e.id && a.materialB.id === t.id) {
            return a;
          }
        }
        return false;
      };
      s.prototype.removeConstraint = function (t) {
        var e = this.constraints.indexOf(t);
        if (e !== -1) {
          M.splice(this.constraints, e, 1);
        }
      };
      var L = r.create();
      var R = r.create();
      var F = r.create();
      var G = r.create();
      var N = r.create();
      var U = r.create();
      var j = r.create();
      var X = r.fromValues(0, 0);
      var W = r.fromValues(0, 0);
      var H = r.fromValues(0, 0);
      var V = r.fromValues(0, 0);
      s.prototype.step = function (t, e, i) {
        i = i || 10;
        if ((e = e || 0) === 0) {
          this.internalStep(t);
          this.time += t;
        } else {
          this.accumulator += e;
          for (var s = 0; this.accumulator >= t && s < i;) {
            this.internalStep(t);
            this.time += t;
            this.accumulator -= t;
            s++;
          }
          var n = this.accumulator % t / t;
          for (var a = 0; a !== this.bodies.length; a++) {
            var o = this.bodies[a];
            r.lerp(o.interpolatedPosition, o.previousPosition, o.position, n);
            o.interpolatedAngle = o.previousAngle + n * (o.angle - o.previousAngle);
          }
        }
      };
      var Y = [];
      s.prototype.internalStep = function (t) {
        this.stepping = true;
        var e = this;
        var i = this.springs.length;
        var n = this.springs;
        var a = this.bodies;
        var o = this.gravity;
        var h = this.solver;
        var l = this.bodies.length;
        var c = this.broadphase;
        var u = this.narrowphase;
        var d = this.constraints;
        var p;
        var f;
        var m = N;
        var y = U;
        var v = j;
        var b = r.scale;
        var _ = r.add;
        var x = r.rotate;
        var w = this.islandManager;
        this.overlapKeeper.tick();
        this.lastTimeStep = t;
        if (this.useWorldGravityAsFrictionGravity) {
          var P = r.length(this.gravity);
          if (P !== 0 || !this.useFrictionGravityOnZeroGravity) {
            this.frictionGravity = P;
          }
        }
        if (this.applyGravity) {
          for (var T = 0; T !== l; T++) {
            var S = a[T];
            var C = S.force;
            if (S.type === g.DYNAMIC && S.sleepState !== g.SLEEPING) {
              r.scale(v, o, S.mass * S.gravityScale);
              _(C, C, v);
            }
          }
        }
        if (this.applySpringForces) {
          for (var T = 0; T !== i; T++) {
            var A = n[T];
            A.applyForce();
          }
        }
        if (this.applyDamping) {
          for (var T = 0; T !== l; T++) {
            var S = a[T];
            if (S.type === g.DYNAMIC) {
              S.applyDamping(t);
            }
          }
        }
        var E = c.getCollisionPairs(this);
        var I = this.disabledBodyCollisionPairs;
        for (var T = I.length - 2; T >= 0; T -= 2) {
          for (var B = E.length - 2; B >= 0; B -= 2) {
            if (I[T] === E[B] && I[T + 1] === E[B + 1] || I[T + 1] === E[B] && I[T] === E[B + 1]) {
              E.splice(B, 2);
            }
          }
        }
        var k = d.length;
        for (T = 0; T !== k; T++) {
          var O = d[T];
          if (!O.collideConnected) {
            for (var B = E.length - 2; B >= 0; B -= 2) {
              if (O.bodyA === E[B] && O.bodyB === E[B + 1] || O.bodyB === E[B] && O.bodyA === E[B + 1]) {
                E.splice(B, 2);
              }
            }
          }
        }
        this.postBroadphaseEvent.pairs = E;
        this.emit(this.postBroadphaseEvent);
        this.postBroadphaseEvent.pairs = null;
        u.reset(this);
        for (var T = 0, D = E.length; T !== D; T += 2) {
          var L = E[T];
          var R = E[T + 1];
          for (var F = 0, G = L.shapes.length; F !== G; F++) {
            var X = L.shapes[F];
            var W = X.position;
            var H = X.angle;
            for (var V = 0, q = R.shapes.length; V !== q; V++) {
              var z = R.shapes[V];
              var K = z.position;
              var J = z.angle;
              var Z = this.defaultContactMaterial;
              if (X.material && z.material) {
                var Q = this.getContactMaterial(X.material, z.material);
                if (Q) {
                  Z = Q;
                }
              }
              this.runNarrowphase(u, L, X, W, H, R, z, K, J, Z, this.frictionGravity);
            }
          }
        }
        for (var T = 0; T !== l; T++) {
          var $ = a[T];
          if ($._wakeUpAfterNarrowphase) {
            $.wakeUp();
            $._wakeUpAfterNarrowphase = false;
          }
        }
        if (this.has("endContact")) {
          this.overlapKeeper.getEndOverlaps(Y);
          var tt = this.endContactEvent;
          for (var V = Y.length; V--;) {
            var et = Y[V];
            tt.shapeA = et.shapeA;
            tt.shapeB = et.shapeB;
            tt.bodyA = et.bodyA;
            tt.bodyB = et.bodyB;
            this.emit(tt);
          }
          Y.length = 0;
        }
        var it = this.preSolveEvent;
        it.contactEquations = u.contactEquations;
        it.frictionEquations = u.frictionEquations;
        this.emit(it);
        it.contactEquations = it.frictionEquations = null;
        var k = d.length;
        for (T = 0; T !== k; T++) {
          d[T].update();
        }
        if (u.contactEquations.length || u.frictionEquations.length || k) {
          if (this.islandSplit) {
            w.equations.length = 0;
            M.appendArray(w.equations, u.contactEquations);
            M.appendArray(w.equations, u.frictionEquations);
            T = 0;
            for (; T !== k; T++) {
              M.appendArray(w.equations, d[T].equations);
            }
            w.split(this);
            for (var T = 0; T !== w.islands.length; T++) {
              var st = w.islands[T];
              if (st.equations.length) {
                h.solveIsland(t, st);
              }
            }
          } else {
            h.addEquations(u.contactEquations);
            h.addEquations(u.frictionEquations);
            T = 0;
            for (; T !== k; T++) {
              h.addEquations(d[T].equations);
            }
            if (this.solveConstraints) {
              h.solve(t, this);
            }
            h.removeAllEquations();
          }
        }
        for (var T = 0; T !== l; T++) {
          var $ = a[T];
          $.integrate(t);
        }
        for (var T = 0; T !== l; T++) {
          a[T].setZeroForce();
        }
        if (this.emitImpactEvent && this.has("impact")) {
          var nt = this.impactEvent;
          for (var T = 0; T !== u.contactEquations.length; T++) {
            var at = u.contactEquations[T];
            if (at.firstImpact) {
              nt.bodyA = at.bodyA;
              nt.bodyB = at.bodyB;
              nt.shapeA = at.shapeA;
              nt.shapeB = at.shapeB;
              nt.contactEquation = at;
              this.emit(nt);
            }
          }
        }
        if (this.sleepMode === s.BODY_SLEEPING) {
          for (T = 0; T !== l; T++) {
            a[T].sleepTick(this.time, false, t);
          }
        } else if (this.sleepMode === s.ISLAND_SLEEPING && this.islandSplit) {
          for (T = 0; T !== l; T++) {
            a[T].sleepTick(this.time, true, t);
          }
          for (var T = 0; T < this.islandManager.islands.length; T++) {
            var st = this.islandManager.islands[T];
            if (st.wantsToSleep()) {
              st.sleep();
            }
          }
        }
        this.stepping = false;
        for (var ot = this.bodiesToBeRemoved, T = 0; T !== ot.length; T++) {
          this.removeBody(ot[T]);
        }
        ot.length = 0;
        this.emit(this.postStepEvent);
      };
      s.prototype.runNarrowphase = function (t, e, i, s, n, a, o, h, l, c, u) {
        if ((i.collisionGroup & o.collisionMask) != 0 && (o.collisionGroup & i.collisionMask) != 0) {
          r.rotate(X, s, e.angle);
          r.rotate(W, h, a.angle);
          r.add(X, X, e.position);
          r.add(W, W, a.position);
          var d = n + e.angle;
          var p = l + a.angle;
          t.enableFriction = c.friction > 0;
          t.frictionCoefficient = c.friction;
          var f;
          f = e.type === g.STATIC || e.type === g.KINEMATIC ? a.mass : a.type === g.STATIC || a.type === g.KINEMATIC ? e.mass : e.mass * a.mass / (e.mass + a.mass);
          t.slipForce = c.friction * u * f;
          t.restitution = c.restitution;
          t.surfaceVelocity = c.surfaceVelocity;
          t.frictionStiffness = c.frictionStiffness;
          t.frictionRelaxation = c.frictionRelaxation;
          t.stiffness = c.stiffness;
          t.relaxation = c.relaxation;
          t.contactSkinSize = c.contactSkinSize;
          t.enabledEquations = e.collisionResponse && a.collisionResponse && i.collisionResponse && o.collisionResponse;
          var m = t[i.type | o.type];
          var y = 0;
          if (m) {
            var v = i.sensor || o.sensor;
            var b = t.frictionEquations.length;
            y = i.type < o.type ? m.call(t, e, i, X, d, a, o, W, p, v) : m.call(t, a, o, W, p, e, i, X, d, v);
            var _ = t.frictionEquations.length - b;
            if (y) {
              if (e.allowSleep && e.type === g.DYNAMIC && e.sleepState === g.SLEEPING && a.sleepState === g.AWAKE && a.type !== g.STATIC) {
                if (r.squaredLength(a.velocity) + Math.pow(a.angularVelocity, 2) >= Math.pow(a.sleepSpeedLimit, 2) * 2) {
                  e._wakeUpAfterNarrowphase = true;
                }
              }
              if (a.allowSleep && a.type === g.DYNAMIC && a.sleepState === g.SLEEPING && e.sleepState === g.AWAKE && e.type !== g.STATIC) {
                if (r.squaredLength(e.velocity) + Math.pow(e.angularVelocity, 2) >= Math.pow(e.sleepSpeedLimit, 2) * 2) {
                  a._wakeUpAfterNarrowphase = true;
                }
              }
              this.overlapKeeper.setOverlapping(e, i, a, o);
              if (this.has("beginContact") && this.overlapKeeper.isNewOverlap(i, o)) {
                var x = this.beginContactEvent;
                x.shapeA = i;
                x.shapeB = o;
                x.bodyA = e;
                x.bodyB = a;
                x.contactEquations.length = 0;
                if (typeof y == "number") {
                  for (var w = t.contactEquations.length - y; w < t.contactEquations.length; w++) {
                    x.contactEquations.push(t.contactEquations[w]);
                  }
                }
                this.emit(x);
              }
              if (typeof y == "number" && _ > 1) {
                for (var w = t.frictionEquations.length - _; w < t.frictionEquations.length; w++) {
                  var P = t.frictionEquations[w];
                  P.setSlipForce(P.getSlipForce() / _);
                }
              }
            }
          }
        }
      };
      s.prototype.addSpring = function (t) {
        this.springs.push(t);
        var e = this.addSpringEvent;
        e.spring = t;
        this.emit(e);
        e.spring = null;
      };
      s.prototype.removeSpring = function (t) {
        var e = this.springs.indexOf(t);
        if (e !== -1) {
          M.splice(this.springs, e, 1);
        }
      };
      s.prototype.addBody = function (t) {
        if (this.bodies.indexOf(t) === -1) {
          this.bodies.push(t);
          t.world = this;
          var e = this.addBodyEvent;
          e.body = t;
          this.emit(e);
          e.body = null;
        }
      };
      s.prototype.removeBody = function (t) {
        if (this.stepping) {
          this.bodiesToBeRemoved.push(t);
        } else {
          t.world = null;
          var e = this.bodies.indexOf(t);
          if (e !== -1) {
            M.splice(this.bodies, e, 1);
            this.removeBodyEvent.body = t;
            t.resetConstraintVelocity();
            this.emit(this.removeBodyEvent);
            this.removeBodyEvent.body = null;
          }
        }
      };
      s.prototype.getBodyById = function (t) {
        for (var e = this.bodies, i = 0; i < e.length; i++) {
          var s = e[i];
          if (s.id === t) {
            return s;
          }
        }
        return false;
      };
      s.prototype.disableBodyCollision = function (t, e) {
        this.disabledBodyCollisionPairs.push(t, e);
      };
      s.prototype.enableBodyCollision = function (t, e) {
        for (var i = this.disabledBodyCollisionPairs, s = 0; s < i.length; s += 2) {
          if (i[s] === t && i[s + 1] === e || i[s + 1] === t && i[s] === e) {
            i.splice(s, 2);
            return;
          }
        }
      };
      s.prototype.clear = function () {
        this.time = 0;
        if (this.solver && this.solver.equations.length) {
          this.solver.removeAllEquations();
        }
        var t = this.constraints;
        for (var e = t.length - 1; e >= 0; e--) {
          this.removeConstraint(t[e]);
        }
        var i = this.bodies;
        for (var e = i.length - 1; e >= 0; e--) {
          this.removeBody(i[e]);
        }
        var n = this.springs;
        for (var e = n.length - 1; e >= 0; e--) {
          this.removeSpring(n[e]);
        }
        var a = this.contactMaterials;
        for (var e = a.length - 1; e >= 0; e--) {
          this.removeContactMaterial(a[e]);
        }
        s.apply(this);
      };
      var q = r.create();
      var z = r.fromValues(0, 0);
      var K = r.fromValues(0, 0);
      s.prototype.hitTest = function (t, e, i) {
        i = i || 0;
        var s = new g({
          position: t
        });
        var n = new p();
        var a = t;
        var o = 0;
        var c = q;
        var f = z;
        var m = K;
        s.addShape(n);
        var y = this.narrowphase;
        var v = [];
        for (var b = 0, _ = e.length; b !== _; b++) {
          var x = e[b];
          for (var w = 0, P = x.shapes.length; w !== P; w++) {
            var T = x.shapes[w];
            r.rotate(c, T.position, x.angle);
            r.add(c, c, x.position);
            var S = T.angle + x.angle;
            if (T instanceof h && y.circleParticle(x, T, c, S, s, n, a, 0, true) || T instanceof l && y.particleConvex(s, n, a, 0, x, T, c, S, true) || T instanceof u && y.particlePlane(s, n, a, 0, x, T, c, S, true) || T instanceof d && y.particleCapsule(s, n, a, 0, x, T, c, S, true) || T instanceof p && r.squaredLength(r.sub(m, c, t)) < i * i) {
              v.push(x);
            }
          }
        }
        return v;
      };
      s.prototype.setGlobalStiffness = function (t) {
        for (var e = this.constraints, i = 0; i !== e.length; i++) {
          for (var s = e[i], n = 0; n !== s.equations.length; n++) {
            var a = s.equations[n];
            a.stiffness = t;
            a.needsUpdate = true;
          }
        }
        for (var o = this.contactMaterials, i = 0; i !== o.length; i++) {
          var s = o[i];
          s.stiffness = s.frictionStiffness = t;
        }
        var s = this.defaultContactMaterial;
        s.stiffness = s.frictionStiffness = t;
      };
      s.prototype.setGlobalRelaxation = function (t) {
        for (var e = 0; e !== this.constraints.length; e++) {
          for (var i = this.constraints[e], s = 0; s !== i.equations.length; s++) {
            var n = i.equations[s];
            n.relaxation = t;
            n.needsUpdate = true;
          }
        }
        for (var e = 0; e !== this.contactMaterials.length; e++) {
          var i = this.contactMaterials[e];
          i.relaxation = i.frictionRelaxation = t;
        }
        var i = this.defaultContactMaterial;
        i.relaxation = i.frictionRelaxation = t;
      };
      var J = new E();
      var Z = [];
      s.prototype.raycast = function (t, e) {
        e.getAABB(J);
        this.broadphase.aabbQuery(this, J, Z);
        e.intersectBodies(t, Z);
        Z.length = 0;
        return t.hasHit();
      };
    }, {
      "../../package.json": 6,
      "../collision/AABB": 7,
      "../collision/Broadphase": 8,
      "../collision/Narrowphase": 10,
      "../collision/Ray": 11,
      "../collision/SAPBroadphase": 13,
      "../constraints/Constraint": 14,
      "../constraints/DistanceConstraint": 15,
      "../constraints/GearConstraint": 16,
      "../constraints/LockConstraint": 17,
      "../constraints/PrismaticConstraint": 18,
      "../constraints/RevoluteConstraint": 19,
      "../events/EventEmitter": 26,
      "../material/ContactMaterial": 27,
      "../material/Material": 28,
      "../math/vec2": 30,
      "../objects/Body": 31,
      "../objects/LinearSpring": 32,
      "../objects/RotationalSpring": 33,
      "../shapes/Capsule": 38,
      "../shapes/Circle": 39,
      "../shapes/Convex": 40,
      "../shapes/Line": 42,
      "../shapes/Particle": 43,
      "../shapes/Plane": 44,
      "../shapes/Shape": 45,
      "../solver/GSSolver": 46,
      "../solver/Solver": 47,
      "../utils/OverlapKeeper": 52,
      "../utils/Utils": 57,
      "./IslandManager": 59
    }]
  }, {}, [36])(36);
});