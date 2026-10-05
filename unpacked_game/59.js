function i() {
  throw new Error("setTimeout has not been defined");
}
function s() {
  throw new Error("clearTimeout has not been defined");
}
function n(t) {
  if (u === setTimeout) {
    return setTimeout(t, 0);
  }
  if ((u === i || !u) && setTimeout) {
    u = setTimeout;
    return setTimeout(t, 0);
  }
  try {
    return u(t, 0);
  } catch (e) {
    try {
      return u.call(null, t, 0);
    } catch (e) {
      return u.call(this, t, 0);
    }
  }
}
function a(t) {
  if (d === clearTimeout) {
    return clearTimeout(t);
  }
  if ((d === s || !d) && clearTimeout) {
    d = clearTimeout;
    return clearTimeout(t);
  }
  try {
    return d(t);
  } catch (e) {
    try {
      return d.call(null, t);
    } catch (e) {
      return d.call(this, t);
    }
  }
}
function o() {
  if (f && g) {
    f = false;
    if (g.length) {
      p = g.concat(p);
    } else {
      m = -1;
    }
    if (p.length) {
      r();
    }
  }
}
function r() {
  if (!f) {
    var t = n(o);
    f = true;
    for (var e = p.length; e;) {
      g = p;
      p = [];
      while (++m < e) {
        if (g) {
          g[m].run();
        }
      }
      m = -1;
      e = p.length;
    }
    g = null;
    f = false;
    a(t);
  }
}
function h(t, e) {
  this.fun = t;
  this.array = e;
}
function l() {}
var c = module.exports = {};
var u;
var d;
(function () {
  try {
    u = typeof setTimeout == "function" ? setTimeout : i;
  } catch (t) {
    u = i;
  }
  try {
    d = typeof clearTimeout == "function" ? clearTimeout : s;
  } catch (t) {
    d = s;
  }
})();
var p = [];
var f = false;
var g;
var m = -1;
c.nextTick = function (t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      e[i - 1] = arguments[i];
    }
  }
  p.push(new h(t, e));
  if (p.length === 1 && !f) {
    n(r);
  }
};
h.prototype.run = function () {
  this.fun.apply(null, this.array);
};
c.title = "browser";
c.browser = true;
c.env = {};
c.argv = [];
c.version = "";
c.versions = {};
c.on = l;
c.addListener = l;
c.once = l;
c.off = l;
c.removeListener = l;
c.removeAllListeners = l;
c.emit = l;
c.prependListener = l;
c.prependOnceListener = l;
c.listeners = function (t) {
  return [];
};
c.binding = function (t) {
  throw new Error("process.binding is not supported");
};
c.cwd = function () {
  return "/";
};
c.chdir = function (t) {
  throw new Error("process.chdir is not supported");
};
c.umask = function () {
  return 0;
};