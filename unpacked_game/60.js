var s;
(function () {
  function n(t, e, i) {
    return t.call.apply(t.bind, arguments);
  }
  function a(t, e, i) {
    if (!t) {
      throw Error();
    }
    if (arguments.length > 2) {
      var s = Array.prototype.slice.call(arguments, 2);
      return function () {
        var i = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(i, s);
        return t.apply(e, i);
      };
    }
    return function () {
      return t.apply(e, arguments);
    };
  }
  function o(t, e, i) {
    o = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? n : a;
    return o.apply(null, arguments);
  }
  function r(t, e) {
    this.a = t;
    this.o = e || t;
    this.c = this.o.document;
  }
  function h(t, e, i, s) {
    e = t.c.createElement(e);
    if (i) {
      for (var n in i) {
        if (i.hasOwnProperty(n)) {
          if (n == "style") {
            e.style.cssText = i[n];
          } else {
            e.setAttribute(n, i[n]);
          }
        }
      }
    }
    if (s) {
      e.appendChild(t.c.createTextNode(s));
    }
    return e;
  }
  function l(t, e, i) {
    t = t.c.getElementsByTagName(e)[0];
    t ||= document.documentElement;
    t.insertBefore(i, t.lastChild);
  }
  function c(t) {
    if (t.parentNode) {
      t.parentNode.removeChild(t);
    }
  }
  function u(t, e, i) {
    e = e || [];
    i = i || [];
    var s = t.className.split(/\s+/);
    for (var n = 0; n < e.length; n += 1) {
      var a = false;
      for (var o = 0; o < s.length; o += 1) {
        if (e[n] === s[o]) {
          a = true;
          break;
        }
      }
      if (!a) {
        s.push(e[n]);
      }
    }
    e = [];
    n = 0;
    for (; n < s.length; n += 1) {
      a = false;
      o = 0;
      for (; o < i.length; o += 1) {
        if (s[n] === i[o]) {
          a = true;
          break;
        }
      }
      if (!a) {
        e.push(s[n]);
      }
    }
    t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }
  function d(t, e) {
    var i = t.className.split(/\s+/);
    for (var s = 0, n = i.length; s < n; s++) {
      if (i[s] == e) {
        return true;
      }
    }
    return false;
  }
  function p(t) {
    return t.o.location.hostname || t.a.location.hostname;
  }
  function f(t, e, i) {
    function s() {
      if (r && n && a) {
        r(o);
        r = null;
      }
    }
    e = h(t, "link", {
      rel: "stylesheet",
      href: e,
      media: "all"
    });
    var n = false;
    var a = true;
    var o = null;
    var r = i || null;
    if (at) {
      e.onload = function () {
        n = true;
        s();
      };
      e.onerror = function () {
        n = true;
        o = Error("Stylesheet failed to load");
        s();
      };
    } else {
      setTimeout(function () {
        n = true;
        s();
      }, 0);
    }
    l(t, "head", e);
  }
  function g(t, e, i, s) {
    var n = t.c.getElementsByTagName("head")[0];
    if (n) {
      var a = h(t, "script", {
        src: e
      });
      var o = false;
      a.onload = a.onreadystatechange = function () {
        if (!o && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
          o = true;
          if (i) {
            i(null);
          }
          a.onload = a.onreadystatechange = null;
          if (a.parentNode.tagName == "HEAD") {
            n.removeChild(a);
          }
        }
      };
      n.appendChild(a);
      setTimeout(function () {
        if (!o) {
          o = true;
          if (i) {
            i(Error("Script load timeout"));
          }
        }
      }, s || 5000);
      return a;
    }
    return null;
  }
  function m() {
    this.a = 0;
    this.c = null;
  }
  function y(t) {
    t.a++;
    return function () {
      t.a--;
      b(t);
    };
  }
  function v(t, e) {
    t.c = e;
    b(t);
  }
  function b(t) {
    if (t.a == 0 && t.c) {
      t.c();
      t.c = null;
    }
  }
  function _(t) {
    this.a = t || "-";
  }
  function x(t, e) {
    this.c = t;
    this.f = 4;
    this.a = "n";
    var i = (e || "n4").match(/^([nio])([1-9])$/i);
    if (i) {
      this.a = i[1];
      this.f = parseInt(i[2], 10);
    }
  }
  function w(t) {
    return S(t) + " " + t.f + "00 300px " + P(t.c);
  }
  function P(t) {
    var e = [];
    t = t.split(/,\s*/);
    for (var i = 0; i < t.length; i++) {
      var s = t[i].replace(/['"]/g, "");
      if (s.indexOf(" ") != -1 || /^\d/.test(s)) {
        e.push("'" + s + "'");
      } else {
        e.push(s);
      }
    }
    return e.join(",");
  }
  function T(t) {
    return t.a + t.f;
  }
  function S(t) {
    var e = "normal";
    if (t.a === "o") {
      e = "oblique";
    } else if (t.a === "i") {
      e = "italic";
    }
    return e;
  }
  function C(t) {
    var e = 4;
    var i = "n";
    var s = null;
    if (t) {
      if ((s = t.match(/(normal|oblique|italic)/i)) && s[1]) {
        i = s[1].substr(0, 1).toLowerCase();
      }
      if ((s = t.match(/([1-9]00|normal|bold)/i)) && s[1]) {
        if (/bold/i.test(s[1])) {
          e = 7;
        } else if (/[1-9]00/.test(s[1])) {
          e = parseInt(s[1].substr(0, 1), 10);
        }
      }
    }
    return i + e;
  }
  function A(t, e) {
    this.c = t;
    this.f = t.o.document.documentElement;
    this.h = e;
    this.a = new _("-");
    this.j = e.events !== false;
    this.g = e.classes !== false;
  }
  function E(t) {
    if (t.g) {
      u(t.f, [t.a.c("wf", "loading")]);
    }
    B(t, "loading");
  }
  function I(t) {
    if (t.g) {
      var e = d(t.f, t.a.c("wf", "active"));
      var i = [];
      var s = [t.a.c("wf", "loading")];
      if (!e) {
        i.push(t.a.c("wf", "inactive"));
      }
      u(t.f, i, s);
    }
    B(t, "inactive");
  }
  function B(t, e, i) {
    if (t.j && t.h[e]) {
      if (i) {
        t.h[e](i.c, T(i));
      } else {
        t.h[e]();
      }
    }
  }
  function M() {
    this.c = {};
  }
  function k(t, e, i) {
    var s = [];
    var n;
    for (n in e) {
      if (e.hasOwnProperty(n)) {
        var a = t.c[n];
        if (a) {
          s.push(a(e[n], i));
        }
      }
    }
    return s;
  }
  function O(t, e) {
    this.c = t;
    this.f = e;
    this.a = h(this.c, "span", {
      "aria-hidden": "true"
    }, this.f);
  }
  function D(t) {
    l(t.c, "body", t.a);
  }
  function L(t) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + P(t.c) + ";font-style:" + S(t) + ";font-weight:" + t.f + "00;";
  }
  function R(t, e, i, s, n, a) {
    this.g = t;
    this.j = e;
    this.a = s;
    this.c = i;
    this.f = n || 3000;
    this.h = a || undefined;
  }
  function F(t, e, i, s, n, a, o) {
    this.v = t;
    this.B = e;
    this.c = i;
    this.a = s;
    this.s = o || "BESbswy";
    this.f = {};
    this.w = n || 3000;
    this.u = a || null;
    this.m = this.j = this.h = this.g = null;
    this.g = new O(this.c, this.s);
    this.h = new O(this.c, this.s);
    this.j = new O(this.c, this.s);
    this.m = new O(this.c, this.s);
    t = new x(this.a.c + ",serif", T(this.a));
    t = L(t);
    this.g.a.style.cssText = t;
    t = new x(this.a.c + ",sans-serif", T(this.a));
    t = L(t);
    this.h.a.style.cssText = t;
    t = new x("serif", T(this.a));
    t = L(t);
    this.j.a.style.cssText = t;
    t = new x("sans-serif", T(this.a));
    t = L(t);
    this.m.a.style.cssText = t;
    D(this.g);
    D(this.h);
    D(this.j);
    D(this.m);
  }
  function G() {
    if (rt === null) {
      var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      rt = !!t && (parseInt(t[1], 10) < 536 || parseInt(t[1], 10) === 536 && parseInt(t[2], 10) <= 11);
    }
    return rt;
  }
  function N(t, e, i) {
    for (var s in ot) {
      if (ot.hasOwnProperty(s) && e === t.f[ot[s]] && i === t.f[ot[s]]) {
        return true;
      }
    }
    return false;
  }
  function U(t) {
    var e = t.g.a.offsetWidth;
    var i = t.h.a.offsetWidth;
    var s;
    if (!(s = e === t.f.serif && i === t.f["sans-serif"])) {
      s = G() && N(t, e, i);
    }
    if (s) {
      if (nt() - t.A >= t.w) {
        if (G() && N(t, e, i) && (t.u === null || t.u.hasOwnProperty(t.a.c))) {
          X(t, t.v);
        } else {
          X(t, t.B);
        }
      } else {
        j(t);
      }
    } else {
      X(t, t.v);
    }
  }
  function j(t) {
    setTimeout(o(function () {
      U(this);
    }, t), 50);
  }
  function X(t, e) {
    setTimeout(o(function () {
      c(this.g.a);
      c(this.h.a);
      c(this.j.a);
      c(this.m.a);
      e(this.a);
    }, t), 0);
  }
  function W(t, e, i) {
    this.c = t;
    this.a = e;
    this.f = 0;
    this.m = this.j = false;
    this.s = i;
  }
  function H(t) {
    if (--t.f == 0 && t.j) {
      if (t.m) {
        t = t.a;
        if (t.g) {
          u(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]);
        }
        B(t, "active");
      } else {
        I(t.a);
      }
    }
  }
  function V(t) {
    this.j = t;
    this.a = new M();
    this.h = 0;
    this.f = this.g = true;
  }
  function Y(t, e, i, s, n) {
    var a = --t.h == 0;
    if (t.f || t.g) {
      setTimeout(function () {
        var t = n || null;
        var r = s || null || {};
        if (i.length === 0 && a) {
          I(e.a);
        } else {
          e.f += i.length;
          if (a) {
            e.j = a;
          }
          var h;
          var l = [];
          for (h = 0; h < i.length; h++) {
            var c = i[h];
            var d = r[c.c];
            var p = e.a;
            var f = c;
            if (p.g) {
              u(p.f, [p.a.c("wf", f.c, T(f).toString(), "loading")]);
            }
            B(p, "fontloading", f);
            p = null;
            if (ht === null) {
              if (window.FontFace) {
                var f = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                var g = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                ht = f ? parseInt(f[1], 10) > 42 : !g;
              } else {
                ht = false;
              }
            }
            p = ht ? new R(o(e.g, e), o(e.h, e), e.c, c, e.s, d) : new F(o(e.g, e), o(e.h, e), e.c, c, e.s, t, d);
            l.push(p);
          }
          for (h = 0; h < l.length; h++) {
            l[h].start();
          }
        }
      }, 0);
    }
  }
  function q(t, e, i) {
    var s = [];
    var n = i.timeout;
    E(e);
    var s = k(t.a, i, t.c);
    var a = new W(t.c, e, n);
    t.h = s.length;
    e = 0;
    i = s.length;
    for (; e < i; e++) {
      s[e].load(function (e, i, s) {
        Y(t, a, e, i, s);
      });
    }
  }
  function z(t, e) {
    this.c = t;
    this.a = e;
  }
  function K(t, e) {
    this.c = t;
    this.a = e;
  }
  function J(t, e) {
    this.c = t || lt;
    this.a = [];
    this.f = [];
    this.g = e || "";
  }
  function Z(t, e) {
    for (var i = e.length, s = 0; s < i; s++) {
      var n = e[s].split(":");
      if (n.length == 3) {
        t.f.push(n.pop());
      }
      var a = "";
      if (n.length == 2 && n[1] != "") {
        a = ":";
      }
      t.a.push(n.join(a));
    }
  }
  function Q(t) {
    if (t.a.length == 0) {
      throw Error("No fonts to load!");
    }
    if (t.c.indexOf("kit=") != -1) {
      return t.c;
    }
    for (var e = t.a.length, i = [], s = 0; s < e; s++) {
      i.push(t.a[s].replace(/ /g, "+"));
    }
    e = t.c + "?family=" + i.join("%7C");
    if (t.f.length > 0) {
      e += "&subset=" + t.f.join(",");
    }
    if (t.g.length > 0) {
      e += "&text=" + encodeURIComponent(t.g);
    }
    return e;
  }
  function $(t) {
    this.f = t;
    this.a = [];
    this.c = {};
  }
  function tt(t) {
    for (var e = t.f.length, i = 0; i < e; i++) {
      var s = t.f[i].split(":");
      var n = s[0].replace(/\+/g, " ");
      var a = ["n4"];
      if (s.length >= 2) {
        var o;
        var r = s[1];
        o = [];
        if (r) {
          var r = r.split(",");
          for (var h = r.length, l = 0; l < h; l++) {
            var c;
            c = r[l];
            if (c.match(/^[\w-]+$/)) {
              var u = pt.exec(c.toLowerCase());
              if (u == null) {
                c = "";
              } else {
                c = u[2];
                c = c == null || c == "" ? "n" : dt[c];
                if ((u = u[1]) == null || u == "") {
                  u = "4";
                } else {
                  var d = ut[u];
                  var u = d || (isNaN(u) ? "4" : u.substr(0, 1));
                }
                c = [c, u].join("");
              }
            } else {
              c = "";
            }
            if (c) {
              o.push(c);
            }
          }
        }
        if (o.length > 0) {
          a = o;
        }
        if (s.length == 3) {
          s = s[2];
          o = [];
          s = s ? s.split(",") : o;
          if (s.length > 0 && (s = ct[s[0]])) {
            t.c[n] = s;
          }
        }
      }
      if (!t.c[n]) {
        if (s = ct[n]) {
          t.c[n] = s;
        }
      }
      s = 0;
      for (; s < a.length; s += 1) {
        t.a.push(new x(n, a[s]));
      }
    }
  }
  function et(t, e) {
    this.c = t;
    this.a = e;
  }
  function it(t, e) {
    this.c = t;
    this.a = e;
  }
  function st(t, e) {
    this.c = t;
    this.f = e;
    this.a = [];
  }
  var nt = Date.now || function () {
    return +new Date();
  };
  var at = !!window.FontFace;
  _.prototype.c = function (t) {
    var e = [];
    for (var i = 0; i < arguments.length; i++) {
      e.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase());
    }
    return e.join(this.a);
  };
  R.prototype.start = function () {
    var t = this.c.o.document;
    var e = this;
    var i = nt();
    var s = new Promise(function (s, n) {
      function a() {
        if (nt() - i >= e.f) {
          n();
        } else {
          t.fonts.load(w(e.a), e.h).then(function (t) {
            if (t.length >= 1) {
              s();
            } else {
              setTimeout(a, 25);
            }
          }, function () {
            n();
          });
        }
      }
      a();
    });
    var n = null;
    var a = new Promise(function (t, i) {
      n = setTimeout(i, e.f);
    });
    Promise.race([a, s]).then(function () {
      if (n) {
        clearTimeout(n);
        n = null;
      }
      e.g(e.a);
    }, function () {
      e.j(e.a);
    });
  };
  var ot = {
    D: "serif",
    C: "sans-serif"
  };
  var rt = null;
  F.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.m.a.offsetWidth;
    this.A = nt();
    U(this);
  };
  var ht = null;
  W.prototype.g = function (t) {
    var e = this.a;
    if (e.g) {
      u(e.f, [e.a.c("wf", t.c, T(t).toString(), "active")], [e.a.c("wf", t.c, T(t).toString(), "loading"), e.a.c("wf", t.c, T(t).toString(), "inactive")]);
    }
    B(e, "fontactive", t);
    this.m = true;
    H(this);
  };
  W.prototype.h = function (t) {
    var e = this.a;
    if (e.g) {
      var i = d(e.f, e.a.c("wf", t.c, T(t).toString(), "active"));
      var s = [];
      var n = [e.a.c("wf", t.c, T(t).toString(), "loading")];
      if (!i) {
        s.push(e.a.c("wf", t.c, T(t).toString(), "inactive"));
      }
      u(e.f, s, n);
    }
    B(e, "fontinactive", t);
    H(this);
  };
  V.prototype.load = function (t) {
    this.c = new r(this.j, t.context || this.j);
    this.g = t.events !== false;
    this.f = t.classes !== false;
    q(this, new A(this.c, t), t);
  };
  z.prototype.load = function (t) {
    function e() {
      if (a["__mti_fntLst" + s]) {
        var i = a["__mti_fntLst" + s]();
        var n = [];
        var o;
        if (i) {
          for (var r = 0; r < i.length; r++) {
            var h = i[r].fontfamily;
            if (i[r].fontStyle != undefined && i[r].fontWeight != undefined) {
              o = i[r].fontStyle + i[r].fontWeight;
              n.push(new x(h, o));
            } else {
              n.push(new x(h));
            }
          }
        }
        t(n);
      } else {
        setTimeout(function () {
          e();
        }, 50);
      }
    }
    var i = this;
    var s = i.a.projectId;
    var n = i.a.version;
    if (s) {
      var a = i.c.o;
      g(this.c, (i.a.api || "https://fast.fonts.net/jsapi") + "/" + s + ".js" + (n ? "?v=" + n : ""), function (n) {
        if (n) {
          t([]);
        } else {
          a["__MonotypeConfiguration__" + s] = function () {
            return i.a;
          };
          e();
        }
      }).id = "__MonotypeAPIScript__" + s;
    } else {
      t([]);
    }
  };
  K.prototype.load = function (t) {
    var e;
    var i;
    var s = this.a.urls || [];
    var n = this.a.families || [];
    var a = this.a.testStrings || {};
    var o = new m();
    e = 0;
    i = s.length;
    for (; e < i; e++) {
      f(this.c, s[e], y(o));
    }
    var r = [];
    e = 0;
    i = n.length;
    for (; e < i; e++) {
      s = n[e].split(":");
      if (s[1]) {
        for (var h = s[1].split(","), l = 0; l < h.length; l += 1) {
          r.push(new x(s[0], h[l]));
        }
      } else {
        r.push(new x(s[0]));
      }
    }
    v(o, function () {
      t(r, a);
    });
  };
  var lt = "https://fonts.googleapis.com/css";
  var ct = {
    latin: "BESbswy",
    "latin-ext": "çöüğş",
    cyrillic: "йяЖ",
    greek: "αβΣ",
    khmer: "កខគ",
    Hanuman: "កខគ"
  };
  var ut = {
    thin: "1",
    extralight: "2",
    "extra-light": "2",
    ultralight: "2",
    "ultra-light": "2",
    light: "3",
    regular: "4",
    book: "4",
    medium: "5",
    "semi-bold": "6",
    semibold: "6",
    "demi-bold": "6",
    demibold: "6",
    bold: "7",
    "extra-bold": "8",
    extrabold: "8",
    "ultra-bold": "8",
    ultrabold: "8",
    black: "9",
    heavy: "9",
    l: "3",
    r: "4",
    b: "7"
  };
  var dt = {
    i: "i",
    italic: "i",
    n: "n",
    normal: "n"
  };
  var pt = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  var ft = {
    Arimo: true,
    Cousine: true,
    Tinos: true
  };
  et.prototype.load = function (t) {
    var e = new m();
    var i = this.c;
    var s = new J(this.a.api, this.a.text);
    var n = this.a.families;
    Z(s, n);
    var a = new $(n);
    tt(a);
    f(i, Q(s), y(e));
    v(e, function () {
      t(a.a, a.c, ft);
    });
  };
  it.prototype.load = function (t) {
    var e = this.a.id;
    var i = this.c.o;
    if (e) {
      g(this.c, (this.a.api || "https://use.typekit.net") + "/" + e + ".js", function (e) {
        if (e) {
          t([]);
        } else if (i.Typekit && i.Typekit.config && i.Typekit.config.fn) {
          e = i.Typekit.config.fn;
          var s = [];
          for (var n = 0; n < e.length; n += 2) {
            var a = e[n];
            for (var o = e[n + 1], r = 0; r < o.length; r++) {
              s.push(new x(a, o[r]));
            }
          }
          try {
            i.Typekit.load({
              events: false,
              classes: false,
              async: true
            });
          } catch (t) {}
          t(s);
        }
      }, 2000);
    } else {
      t([]);
    }
  };
  st.prototype.load = function (t) {
    var e = this.f.id;
    var i = this.c.o;
    var s = this;
    if (e) {
      i.__webfontfontdeckmodule__ ||= {};
      i.__webfontfontdeckmodule__[e] = function (e, i) {
        for (var n = 0, a = i.fonts.length; n < a; ++n) {
          var o = i.fonts[n];
          s.a.push(new x(o.name, C("font-weight:" + o.weight + ";font-style:" + o.style)));
        }
        t(s.a);
      };
      g(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + p(this.c) + "/" + e + ".js", function (e) {
        if (e) {
          t([]);
        }
      });
    } else {
      t([]);
    }
  };
  var gt = new V(window);
  gt.a.c.custom = function (t, e) {
    return new K(e, t);
  };
  gt.a.c.fontdeck = function (t, e) {
    return new st(e, t);
  };
  gt.a.c.monotype = function (t, e) {
    return new z(e, t);
  };
  gt.a.c.typekit = function (t, e) {
    return new it(e, t);
  };
  gt.a.c.google = function (t, e) {
    return new et(e, t);
  };
  var mt = {
    load: o(gt.load, gt)
  };
  if ((s = function () {
    return mt;
  }.call(exports, require, exports, module)) !== undefined) {
    module.exports = s;
  }
})();