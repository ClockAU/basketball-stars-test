var i = require("./59.js");
/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*
* @overview
*
* Phaser - http://phaser.io
*
* v2.6.4 "Kore Springs" - Built: Thu Nov 16 2017 13:53:52
*
* By Richard Davey http://www.photonstorm.com @photonstorm
*
* Phaser is a fun, free and fast 2D game framework for making HTML5 games
* for desktop and mobile web browsers, supporting Canvas and WebGL rendering.
*
* Phaser uses Pixi.js for rendering, created by Mat Groves http://matgroves.com @Doormat23
* Phaser uses p2.js for full-body physics, created by Stefan Hedman https://github.com/schteppe/p2.js @schteppe
* Phaser contains a port of N+ Physics, converted by Richard Davey, original by http://www.metanetsoftware.com
*
* Many thanks to Adam Saltsman (@ADAMATOMIC) for releasing Flixel, from which both Phaser and my love of framework development originate.
*
* Follow development at http://phaser.io and on our forum
*
* "If you want your children to be intelligent,  read them fairy tales."
* "If you want them to be more intelligent, read them more fairy tales."
*                                                     -- Albert Einstein
*/
/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
(function () {
  function s(t, e) {
    this._scaleFactor = t;
    this._deltaMode = e;
    this.originalEvent = null;
  }
  var n = this;
  var a = a || {
    VERSION: "2.6.4",
    GAMES: [],
    AUTO: 0,
    CANVAS: 1,
    WEBGL: 2,
    HEADLESS: 3,
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
    SPRITE: 0,
    BUTTON: 1,
    IMAGE: 2,
    GRAPHICS: 3,
    TEXT: 4,
    TILESPRITE: 5,
    BITMAPTEXT: 6,
    GROUP: 7,
    RENDERTEXTURE: 8,
    TILEMAP: 9,
    TILEMAPLAYER: 10,
    EMITTER: 11,
    POLYGON: 12,
    BITMAPDATA: 13,
    CANVAS_FILTER: 14,
    WEBGL_FILTER: 15,
    ELLIPSE: 16,
    SPRITEBATCH: 17,
    RETROFONT: 18,
    POINTER: 19,
    ROPE: 20,
    CIRCLE: 21,
    RECTANGLE: 22,
    LINE: 23,
    MATRIX: 24,
    POINT: 25,
    ROUNDEDRECTANGLE: 26,
    CREATURE: 27,
    VIDEO: 28,
    PENDING_ATLAS: -1,
    HORIZONTAL: 0,
    VERTICAL: 1,
    LANDSCAPE: 0,
    PORTRAIT: 1,
    ANGLE_UP: 270,
    ANGLE_DOWN: 90,
    ANGLE_LEFT: 180,
    ANGLE_RIGHT: 0,
    ANGLE_NORTH_EAST: 315,
    ANGLE_NORTH_WEST: 225,
    ANGLE_SOUTH_EAST: 45,
    ANGLE_SOUTH_WEST: 135,
    TOP_LEFT: 0,
    TOP_CENTER: 1,
    TOP_RIGHT: 2,
    LEFT_TOP: 3,
    LEFT_CENTER: 4,
    LEFT_BOTTOM: 5,
    CENTER: 6,
    RIGHT_TOP: 7,
    RIGHT_CENTER: 8,
    RIGHT_BOTTOM: 9,
    BOTTOM_LEFT: 10,
    BOTTOM_CENTER: 11,
    BOTTOM_RIGHT: 12,
    blendModes: {
      NORMAL: 0,
      ADD: 1,
      MULTIPLY: 2,
      SCREEN: 3,
      OVERLAY: 4,
      DARKEN: 5,
      LIGHTEN: 6,
      COLOR_DODGE: 7,
      COLOR_BURN: 8,
      HARD_LIGHT: 9,
      SOFT_LIGHT: 10,
      DIFFERENCE: 11,
      EXCLUSION: 12,
      HUE: 13,
      SATURATION: 14,
      COLOR: 15,
      LUMINOSITY: 16
    },
    scaleModes: {
      DEFAULT: 0,
      LINEAR: 0,
      NEAREST: 1
    },
    PIXI: PIXI || {}
  };
  Math.trunc ||= function t(e) {
    if (e < 0) {
      return Math.ceil(e);
    } else {
      return Math.floor(e);
    }
  };
  Function.prototype.bind ||= function () {
    var t = Array.prototype.slice;
    return function (e) {
      function i() {
        var a = n.concat(t.call(arguments));
        s.apply(this instanceof i ? this : e, a);
      }
      var s = this;
      var n = t.call(arguments, 1);
      if (typeof s != "function") {
        throw new TypeError();
      }
      i.prototype = function t(e) {
        if (e) {
          t.prototype = e;
        }
        if (!(this instanceof t)) {
          return new t();
        }
      }(s.prototype);
      return i;
    };
  }();
  Array.isArray ||= function (t) {
    return Object.prototype.toString.call(t) === "[object Array]";
  };
  Array.prototype.forEach ||= function (t) {
    "use strict";

    if (this === undefined || this === null) {
      throw new TypeError();
    }
    var e = Object(this);
    var i = e.length >>> 0;
    if (typeof t != "function") {
      throw new TypeError();
    }
    var s = arguments.length >= 2 ? arguments[1] : undefined;
    for (var n = 0; n < i; n++) {
      if (n in e) {
        t.call(s, e[n], n, e);
      }
    }
  };
  if (typeof window.Uint32Array != "function" && typeof window.Uint32Array != "object") {
    function o(t) {
      var e = new Array();
      window[t] = function (t) {
        if (typeof t == "number") {
          Array.call(this, t);
          this.length = t;
          for (var e = 0; e < this.length; e++) {
            this[e] = 0;
          }
        } else {
          Array.call(this, t.length);
          this.length = t.length;
          for (var e = 0; e < this.length; e++) {
            this[e] = t[e];
          }
        }
      };
      window[t].prototype = e;
      window[t].constructor = window[t];
    }
    o("Uint32Array");
    o("Int16Array");
  }
  if (!window.console) {
    window.console = {};
    window.console.log = window.console.assert = function () {};
    window.console.warn = window.console.assert = function () {};
  }
  if (/firefox/i.test(navigator.userAgent)) {
    window.oldGetComputedStyle = window.getComputedStyle;
    window.getComputedStyle = function (t, e) {
      var i = window.oldGetComputedStyle(t, e);
      if (i === null) {
        return {
          getPropertyValue: function () {}
        };
      } else {
        return i;
      }
    };
  }
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Utils = {
    reverseString: function (t) {
      return t.split("").reverse().join("");
    },
    getProperty: function (t, e) {
      var i = e.split(".");
      var s = i.pop();
      for (var n = i.length, a = 1, o = i[0]; a < n && (t = t[o]);) {
        o = i[a];
        a++;
      }
      if (t) {
        return t[s];
      } else {
        return null;
      }
    },
    setProperty: function (t, e, i) {
      var s = e.split(".");
      var n = s.pop();
      for (var a = s.length, o = 1, r = s[0]; o < a && (t = t[r]);) {
        r = s[o];
        o++;
      }
      if (t) {
        t[n] = i;
      }
      return t;
    },
    chanceRoll: function (t = 50) {
      return t > 0 && Math.random() * 100 <= t;
    },
    randomChoice: function (t, e) {
      if (Math.random() < 0.5) {
        return t;
      } else {
        return e;
      }
    },
    parseDimension: function (t, e) {
      var i = 0;
      var s = 0;
      if (typeof t == "string") {
        if (t.substr(-1) === "%") {
          i = parseInt(t, 10) / 100;
          s = e === 0 ? window.innerWidth * i : window.innerHeight * i;
        } else {
          s = parseInt(t, 10);
        }
      } else {
        s = t;
      }
      return s;
    },
    pad: function (t, e, i, s) {
      if (e === undefined) {
        var e = 0;
      }
      if (i === undefined) {
        var i = " ";
      }
      if (s === undefined) {
        var s = 3;
      }
      t = t.toString();
      var n = 0;
      if (e + 1 >= t.length) {
        switch (s) {
          case 1:
            t = new Array(e + 1 - t.length).join(i) + t;
            break;
          case 3:
            var a = Math.ceil((n = e - t.length) / 2);
            var o = n - a;
            t = new Array(o + 1).join(i) + t + new Array(a + 1).join(i);
            break;
          default:
            t += new Array(e + 1 - t.length).join(i);
        }
      }
      return t;
    },
    isPlainObject: function (t) {
      if (typeof t != "object" || t.nodeType || t === t.window) {
        return false;
      }
      try {
        if (t.constructor && !{}.hasOwnProperty.call(t.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (t) {
        return false;
      }
      return true;
    },
    extend: function () {
      var t;
      var e;
      var i;
      var s;
      var n;
      var o;
      var r = arguments[0] || {};
      var h = 1;
      var l = arguments.length;
      var c = false;
      if (typeof r == "boolean") {
        c = r;
        r = arguments[1] || {};
        h = 2;
      }
      if (l === h) {
        r = this;
        --h;
      }
      for (; h < l; h++) {
        if ((t = arguments[h]) != null) {
          for (e in t) {
            i = r[e];
            s = t[e];
            if (r !== s) {
              if (c && s && (a.Utils.isPlainObject(s) || (n = Array.isArray(s)))) {
                if (n) {
                  n = false;
                  o = i && Array.isArray(i) ? i : [];
                } else {
                  o = i && a.Utils.isPlainObject(i) ? i : {};
                }
                r[e] = a.Utils.extend(c, o, s);
              } else if (s !== undefined) {
                r[e] = s;
              }
            }
          }
        }
      }
      return r;
    },
    mixinPrototype: function (t, e, i = false) {
      for (var s = Object.keys(e), n = 0; n < s.length; n++) {
        var a = s[n];
        var o = e[a];
        if (!!i || !(a in t)) {
          if (!o || typeof o.get != "function" && typeof o.set != "function") {
            t[a] = o;
          } else if (typeof o.clone == "function") {
            t[a] = o.clone();
          } else {
            Object.defineProperty(t, a, o);
          }
        }
      }
    },
    mixin: function (t, e) {
      if (!t || typeof t != "object") {
        return e;
      }
      for (var i in t) {
        var s = t[i];
        if (!s.childNodes && !s.cloneNode) {
          var n = typeof t[i];
          if (t[i] && n === "object") {
            if (typeof e[i] === n) {
              e[i] = a.Utils.mixin(t[i], e[i]);
            } else {
              e[i] = a.Utils.mixin(t[i], new s.constructor());
            }
          } else {
            e[i] = t[i];
          }
        }
      }
      return e;
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Circle = function (t, e, i) {
    t = t || 0;
    e = e || 0;
    i = i || 0;
    this.x = t;
    this.y = e;
    this._diameter = i;
    this._radius = 0;
    if (i > 0) {
      this._radius = i * 0.5;
    }
    this.type = a.CIRCLE;
  };
  a.Circle.prototype = {
    circumference: function () {
      return Math.PI * this._radius * 2;
    },
    random: function (t = new a.Point()) {
      var e = Math.PI * 2 * Math.random();
      var i = Math.random() + Math.random();
      var s = i > 1 ? 2 - i : i;
      var n = s * Math.cos(e);
      var o = s * Math.sin(e);
      t.x = this.x + n * this.radius;
      t.y = this.y + o * this.radius;
      return t;
    },
    getBounds: function () {
      return new a.Rectangle(this.x - this.radius, this.y - this.radius, this.diameter, this.diameter);
    },
    setTo: function (t, e, i) {
      this.x = t;
      this.y = e;
      this._diameter = i;
      this._radius = i * 0.5;
      return this;
    },
    copyFrom: function (t) {
      return this.setTo(t.x, t.y, t.diameter);
    },
    copyTo: function (t) {
      t.x = this.x;
      t.y = this.y;
      t.diameter = this._diameter;
      return t;
    },
    distance: function (t, e) {
      var i = a.Math.distance(this.x, this.y, t.x, t.y);
      if (e) {
        return Math.round(i);
      } else {
        return i;
      }
    },
    clone: function (t) {
      if (t === undefined || t === null) {
        t = new a.Circle(this.x, this.y, this.diameter);
      } else {
        t.setTo(this.x, this.y, this.diameter);
      }
      return t;
    },
    contains: function (t, e) {
      return a.Circle.contains(this, t, e);
    },
    circumferencePoint: function (t, e, i) {
      return a.Circle.circumferencePoint(this, t, e, i);
    },
    offset: function (t, e) {
      this.x += t;
      this.y += e;
      return this;
    },
    offsetPoint: function (t) {
      return this.offset(t.x, t.y);
    },
    toString: function () {
      return "[{Phaser.Circle (x=" + this.x + " y=" + this.y + " diameter=" + this.diameter + " radius=" + this.radius + ")}]";
    }
  };
  a.Circle.prototype.constructor = a.Circle;
  Object.defineProperty(a.Circle.prototype, "diameter", {
    get: function () {
      return this._diameter;
    },
    set: function (t) {
      if (t > 0) {
        this._diameter = t;
        this._radius = t * 0.5;
      }
    }
  });
  Object.defineProperty(a.Circle.prototype, "radius", {
    get: function () {
      return this._radius;
    },
    set: function (t) {
      if (t > 0) {
        this._radius = t;
        this._diameter = t * 2;
      }
    }
  });
  Object.defineProperty(a.Circle.prototype, "left", {
    get: function () {
      return this.x - this._radius;
    },
    set: function (t) {
      if (t > this.x) {
        this._radius = 0;
        this._diameter = 0;
      } else {
        this.radius = this.x - t;
      }
    }
  });
  Object.defineProperty(a.Circle.prototype, "right", {
    get: function () {
      return this.x + this._radius;
    },
    set: function (t) {
      if (t < this.x) {
        this._radius = 0;
        this._diameter = 0;
      } else {
        this.radius = t - this.x;
      }
    }
  });
  Object.defineProperty(a.Circle.prototype, "top", {
    get: function () {
      return this.y - this._radius;
    },
    set: function (t) {
      if (t > this.y) {
        this._radius = 0;
        this._diameter = 0;
      } else {
        this.radius = this.y - t;
      }
    }
  });
  Object.defineProperty(a.Circle.prototype, "bottom", {
    get: function () {
      return this.y + this._radius;
    },
    set: function (t) {
      if (t < this.y) {
        this._radius = 0;
        this._diameter = 0;
      } else {
        this.radius = t - this.y;
      }
    }
  });
  Object.defineProperty(a.Circle.prototype, "area", {
    get: function () {
      if (this._radius > 0) {
        return Math.PI * this._radius * this._radius;
      } else {
        return 0;
      }
    }
  });
  Object.defineProperty(a.Circle.prototype, "empty", {
    get: function () {
      return this._diameter === 0;
    },
    set: function (t) {
      if (t === true) {
        this.setTo(0, 0, 0);
      }
    }
  });
  a.Circle.contains = function (t, e, i) {
    if (t.radius > 0 && e >= t.left && e <= t.right && i >= t.top && i <= t.bottom) {
      return (t.x - e) * (t.x - e) + (t.y - i) * (t.y - i) <= t.radius * t.radius;
    }
    return false;
  };
  a.Circle.equals = function (t, e) {
    return t.x === e.x && t.y === e.y && t.diameter === e.diameter;
  };
  a.Circle.intersects = function (t, e) {
    return a.Math.distance(t.x, t.y, e.x, e.y) <= t.radius + e.radius;
  };
  a.Circle.circumferencePoint = function (t, e, i = false, s = new a.Point()) {
    if (i === true) {
      e = a.Math.degToRad(e);
    }
    s.x = t.x + t.radius * Math.cos(e);
    s.y = t.y + t.radius * Math.sin(e);
    return s;
  };
  a.Circle.intersectsRectangle = function (t, e) {
    var i = Math.abs(t.x - e.x - e.halfWidth);
    if (i > e.halfWidth + t.radius) {
      return false;
    }
    var s = Math.abs(t.y - e.y - e.halfHeight);
    if (s > e.halfHeight + t.radius) {
      return false;
    }
    if (i <= e.halfWidth || s <= e.halfHeight) {
      return true;
    }
    var n = i - e.halfWidth;
    var a = s - e.halfHeight;
    return n * n + a * a <= t.radius * t.radius;
  };
  PIXI.Circle = a.Circle;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @author       Chad Engler <chad@pantherdev.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Ellipse = function (t, e, i, s) {
    t = t || 0;
    e = e || 0;
    i = i || 0;
    s = s || 0;
    this.x = t;
    this.y = e;
    this.width = i;
    this.height = s;
    this.type = a.ELLIPSE;
  };
  a.Ellipse.prototype = {
    setTo: function (t, e, i, s) {
      this.x = t;
      this.y = e;
      this.width = i;
      this.height = s;
      return this;
    },
    getBounds: function () {
      return new a.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
    },
    copyFrom: function (t) {
      return this.setTo(t.x, t.y, t.width, t.height);
    },
    copyTo: function (t) {
      t.x = this.x;
      t.y = this.y;
      t.width = this.width;
      t.height = this.height;
      return t;
    },
    clone: function (t) {
      if (t === undefined || t === null) {
        t = new a.Ellipse(this.x, this.y, this.width, this.height);
      } else {
        t.setTo(this.x, this.y, this.width, this.height);
      }
      return t;
    },
    contains: function (t, e) {
      return a.Ellipse.contains(this, t, e);
    },
    random: function (t = new a.Point()) {
      var e = Math.random() * Math.PI * 2;
      var i = Math.random();
      t.x = Math.sqrt(i) * Math.cos(e);
      t.y = Math.sqrt(i) * Math.sin(e);
      t.x = this.x + t.x * this.width / 2;
      t.y = this.y + t.y * this.height / 2;
      return t;
    },
    toString: function () {
      return "[{Phaser.Ellipse (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")}]";
    }
  };
  a.Ellipse.prototype.constructor = a.Ellipse;
  Object.defineProperty(a.Ellipse.prototype, "left", {
    get: function () {
      return this.x;
    },
    set: function (t) {
      this.x = t;
    }
  });
  Object.defineProperty(a.Ellipse.prototype, "right", {
    get: function () {
      return this.x + this.width;
    },
    set: function (t) {
      if (t < this.x) {
        this.width = 0;
      } else {
        this.width = t - this.x;
      }
    }
  });
  Object.defineProperty(a.Ellipse.prototype, "top", {
    get: function () {
      return this.y;
    },
    set: function (t) {
      this.y = t;
    }
  });
  Object.defineProperty(a.Ellipse.prototype, "bottom", {
    get: function () {
      return this.y + this.height;
    },
    set: function (t) {
      if (t < this.y) {
        this.height = 0;
      } else {
        this.height = t - this.y;
      }
    }
  });
  Object.defineProperty(a.Ellipse.prototype, "empty", {
    get: function () {
      return this.width === 0 || this.height === 0;
    },
    set: function (t) {
      if (t === true) {
        this.setTo(0, 0, 0, 0);
      }
    }
  });
  a.Ellipse.contains = function (t, e, i) {
    if (t.width <= 0 || t.height <= 0) {
      return false;
    }
    var s = (e - t.x) / t.width - 0.5;
    var n = (i - t.y) / t.height - 0.5;
    s *= s;
    n *= n;
    return s + n < 0.25;
  };
  PIXI.Ellipse = a.Ellipse;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Line = function (t, e, i, s) {
    t = t || 0;
    e = e || 0;
    i = i || 0;
    s = s || 0;
    this.start = new a.Point(t, e);
    this.end = new a.Point(i, s);
    this.type = a.LINE;
  };
  a.Line.prototype = {
    setTo: function (t, e, i, s) {
      this.start.setTo(t, e);
      this.end.setTo(i, s);
      return this;
    },
    fromSprite: function (t, e, i = false) {
      if (i) {
        return this.setTo(t.center.x, t.center.y, e.center.x, e.center.y);
      } else {
        return this.setTo(t.x, t.y, e.x, e.y);
      }
    },
    fromAngle: function (t, e, i, s) {
      this.start.setTo(t, e);
      this.end.setTo(t + Math.cos(i) * s, e + Math.sin(i) * s);
      return this;
    },
    rotate: function (t, e) {
      var i = (this.start.x + this.end.x) / 2;
      var s = (this.start.y + this.end.y) / 2;
      this.start.rotate(i, s, t, e);
      this.end.rotate(i, s, t, e);
      return this;
    },
    rotateAround: function (t, e, i, s) {
      this.start.rotate(t, e, i, s);
      this.end.rotate(t, e, i, s);
      return this;
    },
    intersects: function (t, e, i) {
      return a.Line.intersectsPoints(this.start, this.end, t.start, t.end, e, i);
    },
    reflect: function (t) {
      return a.Line.reflect(this, t);
    },
    midPoint: function (t = new a.Point()) {
      t.x = (this.start.x + this.end.x) / 2;
      t.y = (this.start.y + this.end.y) / 2;
      return t;
    },
    centerOn: function (t, e) {
      var i = (this.start.x + this.end.x) / 2;
      var s = (this.start.y + this.end.y) / 2;
      var n = t - i;
      var a = e - s;
      this.start.add(n, a);
      this.end.add(n, a);
    },
    pointOnLine: function (t, e) {
      return (t - this.start.x) * (this.end.y - this.start.y) == (this.end.x - this.start.x) * (e - this.start.y);
    },
    pointOnSegment: function (t, e) {
      var i = Math.min(this.start.x, this.end.x);
      var s = Math.max(this.start.x, this.end.x);
      var n = Math.min(this.start.y, this.end.y);
      var a = Math.max(this.start.y, this.end.y);
      return this.pointOnLine(t, e) && t >= i && t <= s && e >= n && e <= a;
    },
    random: function (t = new a.Point()) {
      var e = Math.random();
      t.x = this.start.x + e * (this.end.x - this.start.x);
      t.y = this.start.y + e * (this.end.y - this.start.y);
      return t;
    },
    coordinatesOnLine: function (t = 1, e = []) {
      var i = Math.round(this.start.x);
      var s = Math.round(this.start.y);
      var n = Math.round(this.end.x);
      var a = Math.round(this.end.y);
      var o = Math.abs(n - i);
      var r = Math.abs(a - s);
      var h = i < n ? 1 : -1;
      var l = s < a ? 1 : -1;
      var c = o - r;
      e.push([i, s]);
      var u = 1;
      while (i !== n || s !== a) {
        var d = c << 1;
        if (d > -r) {
          c -= r;
          i += h;
        }
        if (d < o) {
          c += o;
          s += l;
        }
        if (u % t == 0) {
          e.push([i, s]);
        }
        u++;
      }
      return e;
    },
    clone: function (t) {
      if (t === undefined || t === null) {
        t = new a.Line(this.start.x, this.start.y, this.end.x, this.end.y);
      } else {
        t.setTo(this.start.x, this.start.y, this.end.x, this.end.y);
      }
      return t;
    }
  };
  Object.defineProperty(a.Line.prototype, "length", {
    get: function () {
      return Math.sqrt((this.end.x - this.start.x) * (this.end.x - this.start.x) + (this.end.y - this.start.y) * (this.end.y - this.start.y));
    }
  });
  Object.defineProperty(a.Line.prototype, "angle", {
    get: function () {
      return Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x);
    }
  });
  Object.defineProperty(a.Line.prototype, "slope", {
    get: function () {
      return (this.end.y - this.start.y) / (this.end.x - this.start.x);
    }
  });
  Object.defineProperty(a.Line.prototype, "perpSlope", {
    get: function () {
      return -(this.end.x - this.start.x) / (this.end.y - this.start.y);
    }
  });
  Object.defineProperty(a.Line.prototype, "x", {
    get: function () {
      return Math.min(this.start.x, this.end.x);
    }
  });
  Object.defineProperty(a.Line.prototype, "y", {
    get: function () {
      return Math.min(this.start.y, this.end.y);
    }
  });
  Object.defineProperty(a.Line.prototype, "left", {
    get: function () {
      return Math.min(this.start.x, this.end.x);
    }
  });
  Object.defineProperty(a.Line.prototype, "right", {
    get: function () {
      return Math.max(this.start.x, this.end.x);
    }
  });
  Object.defineProperty(a.Line.prototype, "top", {
    get: function () {
      return Math.min(this.start.y, this.end.y);
    }
  });
  Object.defineProperty(a.Line.prototype, "bottom", {
    get: function () {
      return Math.max(this.start.y, this.end.y);
    }
  });
  Object.defineProperty(a.Line.prototype, "width", {
    get: function () {
      return Math.abs(this.start.x - this.end.x);
    }
  });
  Object.defineProperty(a.Line.prototype, "height", {
    get: function () {
      return Math.abs(this.start.y - this.end.y);
    }
  });
  Object.defineProperty(a.Line.prototype, "normalX", {
    get: function () {
      return Math.cos(this.angle - 1.5707963267948966);
    }
  });
  Object.defineProperty(a.Line.prototype, "normalY", {
    get: function () {
      return Math.sin(this.angle - 1.5707963267948966);
    }
  });
  Object.defineProperty(a.Line.prototype, "normalAngle", {
    get: function () {
      return a.Math.wrap(this.angle - 1.5707963267948966, -Math.PI, Math.PI);
    }
  });
  a.Line.intersectsPoints = function (t, e, i, s, n = true, o = new a.Point()) {
    var r = e.y - t.y;
    var h = s.y - i.y;
    var l = t.x - e.x;
    var c = i.x - s.x;
    var u = e.x * t.y - t.x * e.y;
    var d = s.x * i.y - i.x * s.y;
    var p = r * c - h * l;
    if (p === 0) {
      return null;
    }
    o.x = (l * d - c * u) / p;
    o.y = (h * u - r * d) / p;
    if (n) {
      var f = (s.y - i.y) * (e.x - t.x) - (s.x - i.x) * (e.y - t.y);
      var g = ((s.x - i.x) * (t.y - i.y) - (s.y - i.y) * (t.x - i.x)) / f;
      var m = ((e.x - t.x) * (t.y - i.y) - (e.y - t.y) * (t.x - i.x)) / f;
      if (g >= 0 && g <= 1 && m >= 0 && m <= 1) {
        return o;
      } else {
        return null;
      }
    }
    return o;
  };
  a.Line.intersects = function (t, e, i, s) {
    return a.Line.intersectsPoints(t.start, t.end, e.start, e.end, i, s);
  };
  a.Line.intersectsRectangle = function (t, e) {
    if (!a.Rectangle.intersects(t, e)) {
      return false;
    }
    var i = t.start.x;
    var s = t.start.y;
    var n = t.end.x;
    var o = t.end.y;
    var r = e.x;
    var h = e.y;
    var l = e.right;
    var c = e.bottom;
    var u = 0;
    if (i >= r && i <= l && s >= h && s <= c || n >= r && n <= l && o >= h && o <= c) {
      return true;
    }
    if (i < r && n >= r) {
      if ((u = s + (o - s) * (r - i) / (n - i)) > h && u <= c) {
        return true;
      }
    } else if (i > l && n <= l && (u = s + (o - s) * (l - i) / (n - i)) >= h && u <= c) {
      return true;
    }
    if (s < h && o >= h) {
      if ((u = i + (n - i) * (h - s) / (o - s)) >= r && u <= l) {
        return true;
      }
    } else if (s > c && o <= c && (u = i + (n - i) * (c - s) / (o - s)) >= r && u <= l) {
      return true;
    }
    return false;
  };
  a.Line.reflect = function (t, e) {
    return e.normalAngle * 2 - 3.141592653589793 - t.angle;
  };
  /**
  * @author       Mat Groves http://matgroves.com/ @Doormat23
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Matrix = function (t, e, i, s, n, o) {
    if (t === undefined || t === null) {
      t = 1;
    }
    if (e === undefined || e === null) {
      e = 0;
    }
    if (i === undefined || i === null) {
      i = 0;
    }
    if (s === undefined || s === null) {
      s = 1;
    }
    if (n === undefined || n === null) {
      n = 0;
    }
    if (o === undefined || o === null) {
      o = 0;
    }
    this.a = t;
    this.b = e;
    this.c = i;
    this.d = s;
    this.tx = n;
    this.ty = o;
    this.type = a.MATRIX;
  };
  a.Matrix.prototype = {
    fromArray: function (t) {
      return this.setTo(t[0], t[1], t[3], t[4], t[2], t[5]);
    },
    setTo: function (t, e, i, s, n, a) {
      this.a = t;
      this.b = e;
      this.c = i;
      this.d = s;
      this.tx = n;
      this.ty = a;
      return this;
    },
    clone: function (t) {
      if (t === undefined || t === null) {
        t = new a.Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
      } else {
        t.a = this.a;
        t.b = this.b;
        t.c = this.c;
        t.d = this.d;
        t.tx = this.tx;
        t.ty = this.ty;
      }
      return t;
    },
    copyTo: function (t) {
      t.copyFrom(this);
      return t;
    },
    copyFrom: function (t) {
      this.a = t.a;
      this.b = t.b;
      this.c = t.c;
      this.d = t.d;
      this.tx = t.tx;
      this.ty = t.ty;
      return this;
    },
    toArray: function (t, e = new PIXI.Float32Array(9)) {
      if (t) {
        e[0] = this.a;
        e[1] = this.b;
        e[2] = 0;
        e[3] = this.c;
        e[4] = this.d;
        e[5] = 0;
        e[6] = this.tx;
        e[7] = this.ty;
        e[8] = 1;
      } else {
        e[0] = this.a;
        e[1] = this.c;
        e[2] = this.tx;
        e[3] = this.b;
        e[4] = this.d;
        e[5] = this.ty;
        e[6] = 0;
        e[7] = 0;
        e[8] = 1;
      }
      return e;
    },
    apply: function (t, e = new a.Point()) {
      e.x = this.a * t.x + this.c * t.y + this.tx;
      e.y = this.b * t.x + this.d * t.y + this.ty;
      return e;
    },
    applyInverse: function (t, e = new a.Point()) {
      var i = 1 / (this.a * this.d + this.c * -this.b);
      var s = t.x;
      var n = t.y;
      e.x = this.d * i * s + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i;
      e.y = this.a * i * n + -this.b * i * s + (-this.ty * this.a + this.tx * this.b) * i;
      return e;
    },
    translate: function (t, e) {
      this.tx += t;
      this.ty += e;
      return this;
    },
    scale: function (t, e) {
      this.a *= t;
      this.d *= e;
      this.c *= t;
      this.b *= e;
      this.tx *= t;
      this.ty *= e;
      return this;
    },
    rotate: function (t) {
      var e = Math.cos(t);
      var i = Math.sin(t);
      var s = this.a;
      var n = this.c;
      var a = this.tx;
      this.a = s * e - this.b * i;
      this.b = s * i + this.b * e;
      this.c = n * e - this.d * i;
      this.d = n * i + this.d * e;
      this.tx = a * e - this.ty * i;
      this.ty = a * i + this.ty * e;
      return this;
    },
    append: function (t) {
      var e = this.a;
      var i = this.b;
      var s = this.c;
      var n = this.d;
      this.a = t.a * e + t.b * s;
      this.b = t.a * i + t.b * n;
      this.c = t.c * e + t.d * s;
      this.d = t.c * i + t.d * n;
      this.tx = t.tx * e + t.ty * s + this.tx;
      this.ty = t.tx * i + t.ty * n + this.ty;
      return this;
    },
    identity: function () {
      return this.setTo(1, 0, 0, 1, 0, 0);
    }
  };
  a.identityMatrix = new a.Matrix();
  PIXI.Matrix = a.Matrix;
  PIXI.identityMatrix = a.identityMatrix;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Point = function (t, e) {
    t = t || 0;
    e = e || 0;
    this.x = t;
    this.y = e;
    this.type = a.POINT;
  };
  a.Point.prototype = {
    copyFrom: function (t) {
      return this.setTo(t.x, t.y);
    },
    invert: function () {
      return this.setTo(this.y, this.x);
    },
    setTo: function (t, e) {
      this.x = t || 0;
      this.y = e || (e !== 0 ? this.x : 0);
      return this;
    },
    set: function (t, e) {
      this.x = t || 0;
      this.y = e || (e !== 0 ? this.x : 0);
      return this;
    },
    add: function (t, e) {
      this.x += t;
      this.y += e;
      return this;
    },
    subtract: function (t, e) {
      this.x -= t;
      this.y -= e;
      return this;
    },
    multiply: function (t, e) {
      this.x *= t;
      this.y *= e;
      return this;
    },
    divide: function (t, e) {
      this.x /= t;
      this.y /= e;
      return this;
    },
    clampX: function (t, e) {
      this.x = a.Math.clamp(this.x, t, e);
      return this;
    },
    clampY: function (t, e) {
      this.y = a.Math.clamp(this.y, t, e);
      return this;
    },
    clamp: function (t, e) {
      this.x = a.Math.clamp(this.x, t, e);
      this.y = a.Math.clamp(this.y, t, e);
      return this;
    },
    clone: function (t) {
      if (t === undefined || t === null) {
        t = new a.Point(this.x, this.y);
      } else {
        t.setTo(this.x, this.y);
      }
      return t;
    },
    copyTo: function (t) {
      t.x = this.x;
      t.y = this.y;
      return t;
    },
    distance: function (t, e) {
      return a.Point.distance(this, t, e);
    },
    equals: function (t) {
      return t.x === this.x && t.y === this.y;
    },
    angle: function (t, e = false) {
      if (e) {
        return a.Math.radToDeg(Math.atan2(t.y - this.y, t.x - this.x));
      } else {
        return Math.atan2(t.y - this.y, t.x - this.x);
      }
    },
    rotate: function (t, e, i, s, n) {
      return a.Point.rotate(this, t, e, i, s, n);
    },
    getMagnitude: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    getMagnitudeSq: function () {
      return this.x * this.x + this.y * this.y;
    },
    setMagnitude: function (t) {
      return this.normalize().multiply(t, t);
    },
    normalize: function () {
      if (!this.isZero()) {
        var t = this.getMagnitude();
        this.x /= t;
        this.y /= t;
      }
      return this;
    },
    isZero: function () {
      return this.x === 0 && this.y === 0;
    },
    dot: function (t) {
      return this.x * t.x + this.y * t.y;
    },
    cross: function (t) {
      return this.x * t.y - this.y * t.x;
    },
    perp: function () {
      return this.setTo(-this.y, this.x);
    },
    rperp: function () {
      return this.setTo(this.y, -this.x);
    },
    normalRightHand: function () {
      return this.setTo(this.y * -1, this.x);
    },
    floor: function () {
      return this.setTo(Math.floor(this.x), Math.floor(this.y));
    },
    ceil: function () {
      return this.setTo(Math.ceil(this.x), Math.ceil(this.y));
    },
    toString: function () {
      return "[{Point (x=" + this.x + " y=" + this.y + ")}]";
    }
  };
  a.Point.prototype.constructor = a.Point;
  a.Point.add = function (t, e, i = new a.Point()) {
    i.x = t.x + e.x;
    i.y = t.y + e.y;
    return i;
  };
  a.Point.subtract = function (t, e, i = new a.Point()) {
    i.x = t.x - e.x;
    i.y = t.y - e.y;
    return i;
  };
  a.Point.multiply = function (t, e, i = new a.Point()) {
    i.x = t.x * e.x;
    i.y = t.y * e.y;
    return i;
  };
  a.Point.divide = function (t, e, i = new a.Point()) {
    i.x = t.x / e.x;
    i.y = t.y / e.y;
    return i;
  };
  a.Point.equals = function (t, e) {
    return t.x === e.x && t.y === e.y;
  };
  a.Point.angle = function (t, e) {
    return Math.atan2(t.y - e.y, t.x - e.x);
  };
  a.Point.negative = function (t, e = new a.Point()) {
    return e.setTo(-t.x, -t.y);
  };
  a.Point.multiplyAdd = function (t, e, i, s = new a.Point()) {
    return s.setTo(t.x + e.x * i, t.y + e.y * i);
  };
  a.Point.interpolate = function (t, e, i, s = new a.Point()) {
    return s.setTo(t.x + (e.x - t.x) * i, t.y + (e.y - t.y) * i);
  };
  a.Point.perp = function (t, e = new a.Point()) {
    return e.setTo(-t.y, t.x);
  };
  a.Point.rperp = function (t, e = new a.Point()) {
    return e.setTo(t.y, -t.x);
  };
  a.Point.distance = function (t, e, i) {
    var s = a.Math.distance(t.x, t.y, e.x, e.y);
    if (i) {
      return Math.round(s);
    } else {
      return s;
    }
  };
  a.Point.project = function (t, e, i = new a.Point()) {
    var s = t.dot(e) / e.getMagnitudeSq();
    if (s !== 0) {
      i.setTo(s * e.x, s * e.y);
    }
    return i;
  };
  a.Point.projectUnit = function (t, e, i = new a.Point()) {
    var s = t.dot(e);
    if (s !== 0) {
      i.setTo(s * e.x, s * e.y);
    }
    return i;
  };
  a.Point.normalRightHand = function (t, e = new a.Point()) {
    return e.setTo(t.y * -1, t.x);
  };
  a.Point.normalize = function (t, e = new a.Point()) {
    var i = t.getMagnitude();
    if (i !== 0) {
      e.setTo(t.x / i, t.y / i);
    }
    return e;
  };
  a.Point.rotate = function (t, e, i, s, n, o) {
    if (n) {
      s = a.Math.degToRad(s);
    }
    if (o === undefined) {
      t.subtract(e, i);
      var r = Math.sin(s);
      var h = Math.cos(s);
      var l = h * t.x - r * t.y;
      var c = r * t.x + h * t.y;
      t.x = l + e;
      t.y = c + i;
    } else {
      var u = s + Math.atan2(t.y - i, t.x - e);
      t.x = e + o * Math.cos(u);
      t.y = i + o * Math.sin(u);
    }
    return t;
  };
  a.Point.centroid = function (t, e = new a.Point()) {
    if (Object.prototype.toString.call(t) !== "[object Array]") {
      throw new Error("Phaser.Point. Parameter 'points' must be an array");
    }
    var i = t.length;
    if (i < 1) {
      throw new Error("Phaser.Point. Parameter 'points' array must not be empty");
    }
    if (i === 1) {
      e.copyFrom(t[0]);
      return e;
    }
    for (var s = 0; s < i; s++) {
      a.Point.add(e, t[s], e);
    }
    e.divide(i, i);
    return e;
  };
  a.Point.parse = function (t, e, i) {
    e = e || "x";
    i = i || "y";
    var s = new a.Point();
    if (t[e]) {
      s.x = parseInt(t[e], 10);
    }
    if (t[i]) {
      s.y = parseInt(t[i], 10);
    }
    return s;
  };
  PIXI.Point = a.Point;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @author       Adrien Brault <adrien.brault@gmail.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Polygon = function () {
    this.area = 0;
    this._points = [];
    if (arguments.length > 0) {
      this.setTo.apply(this, arguments);
    }
    this.closed = true;
    this.flattened = false;
    this.type = a.POLYGON;
  };
  a.Polygon.prototype = {
    toNumberArray: function (t = []) {
      for (var e = 0; e < this._points.length; e++) {
        if (typeof this._points[e] == "number") {
          t.push(this._points[e]);
          t.push(this._points[e + 1]);
          e++;
        } else {
          t.push(this._points[e].x);
          t.push(this._points[e].y);
        }
      }
      return t;
    },
    flatten: function () {
      this._points = this.toNumberArray();
      this.flattened = true;
      return this;
    },
    clone: function (t) {
      var e = this._points.slice();
      if (t === undefined || t === null) {
        t = new a.Polygon(e);
      } else {
        t.setTo(e);
      }
      return t;
    },
    contains: function (t, e) {
      var i = false;
      if (this.flattened) {
        for (var s = -2, n = this._points.length - 2; (s += 2) < this._points.length; n = s) {
          var a = this._points[s];
          var o = this._points[s + 1];
          var r = this._points[n];
          var h = this._points[n + 1];
          if ((o <= e && e < h || h <= e && e < o) && t < (r - a) * (e - o) / (h - o) + a) {
            i = !i;
          }
        }
      } else {
        for (var s = -1, n = this._points.length - 1; ++s < this._points.length; n = s) {
          var a = this._points[s].x;
          var o = this._points[s].y;
          var r = this._points[n].x;
          var h = this._points[n].y;
          if ((o <= e && e < h || h <= e && e < o) && t < (r - a) * (e - o) / (h - o) + a) {
            i = !i;
          }
        }
      }
      return i;
    },
    setTo: function (t) {
      this.area = 0;
      this._points = [];
      if (arguments.length > 0) {
        if (!Array.isArray(t)) {
          t = Array.prototype.slice.call(arguments);
        }
        var e = Number.MAX_VALUE;
        for (var i = 0, s = t.length; i < s; i++) {
          if (typeof t[i] == "number") {
            var n = new PIXI.Point(t[i], t[i + 1]);
            i++;
          } else if (Array.isArray(t[i])) {
            var n = new PIXI.Point(t[i][0], t[i][1]);
          } else {
            var n = new PIXI.Point(t[i].x, t[i].y);
          }
          this._points.push(n);
          if (n.y < e) {
            e = n.y;
          }
        }
        this.calculateArea(e);
      }
      return this;
    },
    calculateArea: function (t) {
      var e;
      var i;
      var s;
      var n;
      for (var a = 0, o = this._points.length; a < o; a++) {
        e = this._points[a];
        i = a === o - 1 ? this._points[0] : this._points[a + 1];
        s = (e.y - t + (i.y - t)) / 2;
        n = e.x - i.x;
        this.area += s * n;
      }
      return this.area;
    }
  };
  a.Polygon.prototype.constructor = a.Polygon;
  Object.defineProperty(a.Polygon.prototype, "points", {
    get: function () {
      return this._points;
    },
    set: function (t) {
      if (t != null) {
        this.setTo(t);
      } else {
        this.setTo();
      }
    }
  });
  PIXI.Polygon = a.Polygon;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Rectangle = function (t, e, i, s) {
    t = t || 0;
    e = e || 0;
    i = i || 0;
    s = s || 0;
    this.x = t;
    this.y = e;
    this.width = i;
    this.height = s;
    this.type = a.RECTANGLE;
  };
  a.Rectangle.prototype = {
    offset: function (t, e) {
      this.x += t;
      this.y += e;
      return this;
    },
    offsetPoint: function (t) {
      return this.offset(t.x, t.y);
    },
    setTo: function (t, e, i, s) {
      this.x = t;
      this.y = e;
      this.width = i;
      this.height = s;
      return this;
    },
    scale: function (t, e = t) {
      this.width *= t;
      this.height *= e;
      return this;
    },
    centerOn: function (t, e) {
      this.centerX = t;
      this.centerY = e;
      return this;
    },
    floor: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
    },
    floorAll: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
    },
    ceil: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
    },
    ceilAll: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
    },
    copyFrom: function (t) {
      return this.setTo(t.x, t.y, t.width, t.height);
    },
    copyTo: function (t) {
      t.x = this.x;
      t.y = this.y;
      t.width = this.width;
      t.height = this.height;
      return t;
    },
    inflate: function (t, e) {
      return a.Rectangle.inflate(this, t, e);
    },
    size: function (t) {
      return a.Rectangle.size(this, t);
    },
    resize: function (t, e) {
      this.width = t;
      this.height = e;
      return this;
    },
    clone: function (t) {
      return a.Rectangle.clone(this, t);
    },
    contains: function (t, e) {
      return a.Rectangle.contains(this, t, e);
    },
    containsRect: function (t) {
      return a.Rectangle.containsRect(t, this);
    },
    equals: function (t) {
      return a.Rectangle.equals(this, t);
    },
    intersection: function (t, e) {
      return a.Rectangle.intersection(this, t, e);
    },
    intersects: function (t) {
      return a.Rectangle.intersects(this, t);
    },
    intersectsRaw: function (t, e, i, s, n) {
      return a.Rectangle.intersectsRaw(this, t, e, i, s, n);
    },
    union: function (t, e) {
      return a.Rectangle.union(this, t, e);
    },
    random: function (t = new a.Point()) {
      t.x = this.randomX;
      t.y = this.randomY;
      return t;
    },
    getPoint: function (t, e = new a.Point()) {
      switch (t) {
        default:
        case a.TOP_LEFT:
          return e.set(this.x, this.y);
        case a.TOP_CENTER:
          return e.set(this.centerX, this.y);
        case a.TOP_RIGHT:
          return e.set(this.right, this.y);
        case a.LEFT_CENTER:
          return e.set(this.x, this.centerY);
        case a.CENTER:
          return e.set(this.centerX, this.centerY);
        case a.RIGHT_CENTER:
          return e.set(this.right, this.centerY);
        case a.BOTTOM_LEFT:
          return e.set(this.x, this.bottom);
        case a.BOTTOM_CENTER:
          return e.set(this.centerX, this.bottom);
        case a.BOTTOM_RIGHT:
          return e.set(this.right, this.bottom);
      }
    },
    toString: function () {
      return "[{Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + " empty=" + this.empty + ")}]";
    }
  };
  Object.defineProperty(a.Rectangle.prototype, "halfWidth", {
    get: function () {
      return Math.round(this.width / 2);
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "halfHeight", {
    get: function () {
      return Math.round(this.height / 2);
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "bottom", {
    get: function () {
      return this.y + this.height;
    },
    set: function (t) {
      if (t <= this.y) {
        this.height = 0;
      } else {
        this.height = t - this.y;
      }
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "bottomLeft", {
    get: function () {
      return new a.Point(this.x, this.bottom);
    },
    set: function (t) {
      this.x = t.x;
      this.bottom = t.y;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "bottomRight", {
    get: function () {
      return new a.Point(this.right, this.bottom);
    },
    set: function (t) {
      this.right = t.x;
      this.bottom = t.y;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "left", {
    get: function () {
      return this.x;
    },
    set: function (t) {
      if (t >= this.right) {
        this.width = 0;
      } else {
        this.width = this.right - t;
      }
      this.x = t;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "right", {
    get: function () {
      return this.x + this.width;
    },
    set: function (t) {
      if (t <= this.x) {
        this.width = 0;
      } else {
        this.width = t - this.x;
      }
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "volume", {
    get: function () {
      return this.width * this.height;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "perimeter", {
    get: function () {
      return this.width * 2 + this.height * 2;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "centerX", {
    get: function () {
      return this.x + this.halfWidth;
    },
    set: function (t) {
      this.x = t - this.halfWidth;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "centerY", {
    get: function () {
      return this.y + this.halfHeight;
    },
    set: function (t) {
      this.y = t - this.halfHeight;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "randomX", {
    get: function () {
      return this.x + Math.random() * this.width;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "randomY", {
    get: function () {
      return this.y + Math.random() * this.height;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "top", {
    get: function () {
      return this.y;
    },
    set: function (t) {
      if (t >= this.bottom) {
        this.height = 0;
        this.y = t;
      } else {
        this.height = this.bottom - t;
      }
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "topLeft", {
    get: function () {
      return new a.Point(this.x, this.y);
    },
    set: function (t) {
      this.x = t.x;
      this.y = t.y;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "topRight", {
    get: function () {
      return new a.Point(this.x + this.width, this.y);
    },
    set: function (t) {
      this.right = t.x;
      this.y = t.y;
    }
  });
  Object.defineProperty(a.Rectangle.prototype, "empty", {
    get: function () {
      return !this.width || !this.height;
    },
    set: function (t) {
      if (t === true) {
        this.setTo(0, 0, 0, 0);
      }
    }
  });
  a.Rectangle.prototype.constructor = a.Rectangle;
  a.Rectangle.inflate = function (t, e, i) {
    t.x -= e;
    t.width += e * 2;
    t.y -= i;
    t.height += i * 2;
    return t;
  };
  a.Rectangle.inflatePoint = function (t, e) {
    return a.Rectangle.inflate(t, e.x, e.y);
  };
  a.Rectangle.size = function (t, e) {
    if (e === undefined || e === null) {
      e = new a.Point(t.width, t.height);
    } else {
      e.setTo(t.width, t.height);
    }
    return e;
  };
  a.Rectangle.clone = function (t, e) {
    if (e === undefined || e === null) {
      e = new a.Rectangle(t.x, t.y, t.width, t.height);
    } else {
      e.setTo(t.x, t.y, t.width, t.height);
    }
    return e;
  };
  a.Rectangle.contains = function (t, e, i) {
    return !(t.width <= 0) && !(t.height <= 0) && e >= t.x && e < t.right && i >= t.y && i < t.bottom;
  };
  a.Rectangle.containsRaw = function (t, e, i, s, n, a) {
    return n >= t && n < t + i && a >= e && a < e + s;
  };
  a.Rectangle.containsPoint = function (t, e) {
    return a.Rectangle.contains(t, e.x, e.y);
  };
  a.Rectangle.containsRect = function (t, e) {
    return !(t.volume > e.volume) && t.x >= e.x && t.y >= e.y && t.right < e.right && t.bottom < e.bottom;
  };
  a.Rectangle.equals = function (t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  };
  a.Rectangle.sameDimensions = function (t, e) {
    return t.width === e.width && t.height === e.height;
  };
  a.Rectangle.intersection = function (t, e, i = new a.Rectangle()) {
    if (a.Rectangle.intersects(t, e)) {
      i.x = Math.max(t.x, e.x);
      i.y = Math.max(t.y, e.y);
      i.width = Math.min(t.right, e.right) - i.x;
      i.height = Math.min(t.bottom, e.bottom) - i.y;
    }
    return i;
  };
  a.Rectangle.intersects = function (t, e) {
    return !(t.width <= 0) && !(t.height <= 0) && !(e.width <= 0) && !(e.height <= 0) && !(t.right < e.x) && !(t.bottom < e.y) && !(t.x > e.right) && !(t.y > e.bottom);
  };
  a.Rectangle.intersectsRaw = function (t, e, i, s, n, a = 0) {
    return !(e > t.right + a) && !(i < t.left - a) && !(s > t.bottom + a) && !(n < t.top - a);
  };
  a.Rectangle.union = function (t, e, i = new a.Rectangle()) {
    return i.setTo(Math.min(t.x, e.x), Math.min(t.y, e.y), Math.max(t.right, e.right) - Math.min(t.left, e.left), Math.max(t.bottom, e.bottom) - Math.min(t.top, e.top));
  };
  a.Rectangle.aabb = function (t, e = new a.Rectangle()) {
    var i = Number.NEGATIVE_INFINITY;
    var s = Number.POSITIVE_INFINITY;
    var n = Number.NEGATIVE_INFINITY;
    var o = Number.POSITIVE_INFINITY;
    t.forEach(function (t) {
      if (t.x > i) {
        i = t.x;
      }
      if (t.x < s) {
        s = t.x;
      }
      if (t.y > n) {
        n = t.y;
      }
      if (t.y < o) {
        o = t.y;
      }
    });
    e.setTo(s, o, i - s, n - o);
    return e;
  };
  PIXI.Rectangle = a.Rectangle;
  PIXI.EmptyRectangle = new a.Rectangle(0, 0, 0, 0);
  /**
  * @author       Mat Groves http://matgroves.com/
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.RoundedRectangle = function (t = 0, e = 0, i = 0, s = 0, n = 20) {
    this.x = t;
    this.y = e;
    this.width = i;
    this.height = s;
    this.radius = n || 20;
    this.type = a.ROUNDEDRECTANGLE;
  };
  a.RoundedRectangle.prototype = {
    clone: function () {
      return new a.RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
    },
    contains: function (t, e) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }
      var i = this.x;
      if (t >= i && t <= i + this.width) {
        var s = this.y;
        if (e >= s && e <= s + this.height) {
          return true;
        }
      }
      return false;
    }
  };
  a.RoundedRectangle.prototype.constructor = a.RoundedRectangle;
  PIXI.RoundedRectangle = a.RoundedRectangle;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Camera = function (t, e, i, s, n, o) {
    this.game = t;
    this.world = t.world;
    this.id = 0;
    this.view = new a.Rectangle(i, s, n, o);
    this.bounds = new a.Rectangle(i, s, n, o);
    this.deadzone = null;
    this.visible = true;
    this.roundPx = true;
    this.atLimit = {
      x: false,
      y: false
    };
    this.target = null;
    this.displayObject = null;
    this.scale = null;
    this.totalInView = 0;
    this.lerp = new a.Point(1, 1);
    this.onShakeComplete = new a.Signal();
    this.onFlashComplete = new a.Signal();
    this.onFadeComplete = new a.Signal();
    this.fx = null;
    this._targetPosition = new a.Point();
    this._edge = 0;
    this._position = new a.Point();
    this._shake = {
      intensity: 0,
      duration: 0,
      horizontal: false,
      vertical: false,
      shakeBounds: true,
      x: 0,
      y: 0
    };
    this._fxDuration = 0;
    this._fxType = 0;
  };
  a.Camera.FOLLOW_LOCKON = 0;
  a.Camera.FOLLOW_PLATFORMER = 1;
  a.Camera.FOLLOW_TOPDOWN = 2;
  a.Camera.FOLLOW_TOPDOWN_TIGHT = 3;
  a.Camera.SHAKE_BOTH = 4;
  a.Camera.SHAKE_HORIZONTAL = 5;
  a.Camera.SHAKE_VERTICAL = 6;
  a.Camera.ENABLE_FX = true;
  a.Camera.prototype = {
    boot: function () {
      this.displayObject = this.game.world;
      this.scale = this.game.world.scale;
      this.game.camera = this;
      if (a.Graphics && a.Camera.ENABLE_FX) {
        this.fx = new a.Graphics(this.game);
        this.game.stage.addChild(this.fx);
      }
    },
    preUpdate: function () {
      this.totalInView = 0;
    },
    follow: function (t, e = a.Camera.FOLLOW_LOCKON, i = 1, s = 1) {
      this.target = t;
      this.lerp.set(i, s);
      var n;
      switch (e) {
        case a.Camera.FOLLOW_PLATFORMER:
          var o = this.width / 8;
          var r = this.height / 3;
          this.deadzone = new a.Rectangle((this.width - o) / 2, (this.height - r) / 2 - r * 0.25, o, r);
          break;
        case a.Camera.FOLLOW_TOPDOWN:
          n = Math.max(this.width, this.height) / 4;
          this.deadzone = new a.Rectangle((this.width - n) / 2, (this.height - n) / 2, n, n);
          break;
        case a.Camera.FOLLOW_TOPDOWN_TIGHT:
          n = Math.max(this.width, this.height) / 8;
          this.deadzone = new a.Rectangle((this.width - n) / 2, (this.height - n) / 2, n, n);
          break;
        case a.Camera.FOLLOW_LOCKON:
        default:
          this.deadzone = null;
      }
    },
    unfollow: function () {
      this.target = null;
    },
    focusOn: function (t) {
      this.setPosition(Math.round(t.x - this.view.halfWidth), Math.round(t.y - this.view.halfHeight));
    },
    focusOnXY: function (t, e) {
      this.setPosition(Math.round(t - this.view.halfWidth), Math.round(e - this.view.halfHeight));
    },
    shake: function (t = 0.05, e = 500, i = true, s = a.Camera.SHAKE_BOTH, n = true) {
      return (!!i || !(this._shake.duration > 0)) && (this._shake.intensity = t, this._shake.duration = e, this._shake.shakeBounds = n, this._shake.x = 0, this._shake.y = 0, this._shake.horizontal = s === a.Camera.SHAKE_BOTH || s === a.Camera.SHAKE_HORIZONTAL, this._shake.vertical = s === a.Camera.SHAKE_BOTH || s === a.Camera.SHAKE_VERTICAL, true);
    },
    flash: function (t = 16777215, e = 500, i = false) {
      return !!this.fx && (!!i || !(this._fxDuration > 0)) && (this.fx.clear(), this.fx.beginFill(t), this.fx.drawRect(0, 0, this.width, this.height), this.fx.endFill(), this.fx.alpha = 1, this._fxDuration = e, this._fxType = 0, true);
    },
    fade: function (t = 0, e = 500, i = false) {
      return !!this.fx && (!!i || !(this._fxDuration > 0)) && (this.fx.clear(), this.fx.beginFill(t), this.fx.drawRect(0, 0, this.width, this.height), this.fx.endFill(), this.fx.alpha = 0, this._fxDuration = e, this._fxType = 1, true);
    },
    update: function () {
      if (this._fxDuration > 0) {
        this.updateFX();
      }
      if (this._shake.duration > 0) {
        this.updateShake();
      }
      if (this.bounds) {
        this.checkBounds();
      }
      if (this.roundPx) {
        this.view.floor();
        this._shake.x = Math.floor(this._shake.x);
        this._shake.y = Math.floor(this._shake.y);
      }
      this.displayObject.position.x = -this.view.x;
      this.displayObject.position.y = -this.view.y;
    },
    updateFX: function () {
      if (this._fxType === 0) {
        this.fx.alpha -= this.game.time.elapsedMS / this._fxDuration;
        if (this.fx.alpha <= 0) {
          this._fxDuration = 0;
          this.fx.alpha = 0;
          this.onFlashComplete.dispatch();
        }
      } else {
        this.fx.alpha += this.game.time.elapsedMS / this._fxDuration;
        if (this.fx.alpha >= 1) {
          this._fxDuration = 0;
          this.fx.alpha = 1;
          this.onFadeComplete.dispatch();
        }
      }
    },
    updateShake: function () {
      this._shake.duration -= this.game.time.elapsedMS;
      if (this._shake.duration <= 0) {
        this.onShakeComplete.dispatch();
        this._shake.x = 0;
        this._shake.y = 0;
      } else {
        if (this._shake.horizontal) {
          this._shake.x = this.game.rnd.frac() * this._shake.intensity * this.view.width * 2 - this._shake.intensity * this.view.width;
        }
        if (this._shake.vertical) {
          this._shake.y = this.game.rnd.frac() * this._shake.intensity * this.view.height * 2 - this._shake.intensity * this.view.height;
        }
      }
    },
    updateTarget: function () {
      this._targetPosition.x = this.view.x + this.target.worldPosition.x;
      this._targetPosition.y = this.view.y + this.target.worldPosition.y;
      if (this.deadzone) {
        this._edge = this._targetPosition.x - this.view.x;
        if (this._edge < this.deadzone.left) {
          this.view.x = this.game.math.linear(this.view.x, this._targetPosition.x - this.deadzone.left, this.lerp.x);
        } else if (this._edge > this.deadzone.right) {
          this.view.x = this.game.math.linear(this.view.x, this._targetPosition.x - this.deadzone.right, this.lerp.x);
        }
        this._edge = this._targetPosition.y - this.view.y;
        if (this._edge < this.deadzone.top) {
          this.view.y = this.game.math.linear(this.view.y, this._targetPosition.y - this.deadzone.top, this.lerp.y);
        } else if (this._edge > this.deadzone.bottom) {
          this.view.y = this.game.math.linear(this.view.y, this._targetPosition.y - this.deadzone.bottom, this.lerp.y);
        }
      } else {
        this.view.x = this.game.math.linear(this.view.x, this._targetPosition.x - this.view.halfWidth, this.lerp.x);
        this.view.y = this.game.math.linear(this.view.y, this._targetPosition.y - this.view.halfHeight, this.lerp.y);
      }
      if (this.bounds) {
        this.checkBounds();
      }
      if (this.roundPx) {
        this.view.floor();
      }
      this.displayObject.position.x = -this.view.x;
      this.displayObject.position.y = -this.view.y;
    },
    setBoundsToWorld: function () {
      if (this.bounds) {
        this.bounds.copyFrom(this.game.world.bounds);
      }
    },
    checkBounds: function () {
      this.atLimit.x = false;
      this.atLimit.y = false;
      var t = this.view.x + this._shake.x;
      var e = this.view.right + this._shake.x;
      var i = this.view.y + this._shake.y;
      var s = this.view.bottom + this._shake.y;
      if (t <= this.bounds.x * this.scale.x) {
        this.atLimit.x = true;
        this.view.x = this.bounds.x * this.scale.x;
        if (!this._shake.shakeBounds) {
          this._shake.x = 0;
        }
      }
      if (e >= this.bounds.right * this.scale.x) {
        this.atLimit.x = true;
        this.view.x = this.bounds.right * this.scale.x - this.width;
        if (!this._shake.shakeBounds) {
          this._shake.x = 0;
        }
      }
      if (i <= this.bounds.top * this.scale.y) {
        this.atLimit.y = true;
        this.view.y = this.bounds.top * this.scale.y;
        if (!this._shake.shakeBounds) {
          this._shake.y = 0;
        }
      }
      if (s >= this.bounds.bottom * this.scale.y) {
        this.atLimit.y = true;
        this.view.y = this.bounds.bottom * this.scale.y - this.height;
        if (!this._shake.shakeBounds) {
          this._shake.y = 0;
        }
      }
    },
    setPosition: function (t, e) {
      this.view.x = t;
      this.view.y = e;
      if (this.bounds) {
        this.checkBounds();
      }
    },
    setSize: function (t, e) {
      this.view.width = t;
      this.view.height = e;
    },
    reset: function () {
      this.target = null;
      this.view.x = 0;
      this.view.y = 0;
      this._shake.duration = 0;
      this.resetFX();
    },
    resetFX: function () {
      this.fx.clear();
      this.fx.alpha = 0;
      this._fxDuration = 0;
    }
  };
  a.Camera.prototype.constructor = a.Camera;
  Object.defineProperty(a.Camera.prototype, "x", {
    get: function () {
      return this.view.x;
    },
    set: function (t) {
      this.view.x = t;
      if (this.bounds) {
        this.checkBounds();
      }
    }
  });
  Object.defineProperty(a.Camera.prototype, "y", {
    get: function () {
      return this.view.y;
    },
    set: function (t) {
      this.view.y = t;
      if (this.bounds) {
        this.checkBounds();
      }
    }
  });
  Object.defineProperty(a.Camera.prototype, "position", {
    get: function () {
      this._position.set(this.view.x, this.view.y);
      return this._position;
    },
    set: function (t) {
      if (t.x !== undefined) {
        this.view.x = t.x;
      }
      if (t.y !== undefined) {
        this.view.y = t.y;
      }
      if (this.bounds) {
        this.checkBounds();
      }
    }
  });
  Object.defineProperty(a.Camera.prototype, "width", {
    get: function () {
      return this.view.width;
    },
    set: function (t) {
      this.view.width = t;
    }
  });
  Object.defineProperty(a.Camera.prototype, "height", {
    get: function () {
      return this.view.height;
    },
    set: function (t) {
      this.view.height = t;
    }
  });
  Object.defineProperty(a.Camera.prototype, "shakeIntensity", {
    get: function () {
      return this._shake.intensity;
    },
    set: function (t) {
      this._shake.intensity = t;
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.State = function () {
    this.game = null;
    this.key = "";
    this.add = null;
    this.make = null;
    this.camera = null;
    this.cache = null;
    this.input = null;
    this.load = null;
    this.math = null;
    this.sound = null;
    this.scale = null;
    this.stage = null;
    this.state = null;
    this.time = null;
    this.tweens = null;
    this.world = null;
    this.particles = null;
    this.physics = null;
    this.rnd = null;
  };
  a.State.prototype = {
    init: function () {},
    preload: function () {},
    loadUpdate: function () {},
    loadRender: function () {},
    create: function () {},
    update: function () {},
    preRender: function () {},
    render: function () {},
    resize: function () {},
    paused: function () {},
    resumed: function () {},
    pauseUpdate: function () {},
    shutdown: function () {}
  };
  a.State.prototype.constructor = a.State;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.StateManager = function (t, e) {
    this.game = t;
    this.states = {};
    this._pendingState = null;
    if (e !== undefined && e !== null) {
      this._pendingState = e;
    }
    this._clearWorld = false;
    this._clearCache = false;
    this._created = false;
    this._args = [];
    this.current = "";
    this.onStateChange = new a.Signal();
    this.onInitCallback = null;
    this.onPreloadCallback = null;
    this.onCreateCallback = null;
    this.onUpdateCallback = null;
    this.onRenderCallback = null;
    this.onResizeCallback = null;
    this.onPreRenderCallback = null;
    this.onLoadUpdateCallback = null;
    this.onLoadRenderCallback = null;
    this.onPausedCallback = null;
    this.onResumedCallback = null;
    this.onPauseUpdateCallback = null;
    this.onShutDownCallback = null;
  };
  a.StateManager.prototype = {
    boot: function () {
      this.game.onPause.add(this.pause, this);
      this.game.onResume.add(this.resume, this);
      if (this._pendingState !== null && typeof this._pendingState != "string") {
        this.add("default", this._pendingState, true);
      }
    },
    add: function (t, e, i = false) {
      var s;
      if (e instanceof a.State) {
        s = e;
      } else if (typeof e == "object") {
        s = e;
        s.game = this.game;
      } else if (typeof e == "function") {
        s = new e(this.game);
      }
      this.states[t] = s;
      if (i) {
        if (this.game.isBooted) {
          this.start(t);
        } else {
          this._pendingState = t;
        }
      }
      return s;
    },
    remove: function (t) {
      if (this.current === t) {
        this.callbackContext = null;
        this.onInitCallback = null;
        this.onShutDownCallback = null;
        this.onPreloadCallback = null;
        this.onLoadRenderCallback = null;
        this.onLoadUpdateCallback = null;
        this.onCreateCallback = null;
        this.onUpdateCallback = null;
        this.onPreRenderCallback = null;
        this.onRenderCallback = null;
        this.onResizeCallback = null;
        this.onPausedCallback = null;
        this.onResumedCallback = null;
        this.onPauseUpdateCallback = null;
      }
      delete this.states[t];
    },
    start: function (t, e = true, i = false) {
      if (this.checkState(t)) {
        this._pendingState = t;
        this._clearWorld = e;
        this._clearCache = i;
        if (arguments.length > 3) {
          this._args = Array.prototype.splice.call(arguments, 3);
        }
      }
    },
    restart: function (t = true, e = false) {
      this._pendingState = this.current;
      this._clearWorld = t;
      this._clearCache = e;
      if (arguments.length > 2) {
        this._args = Array.prototype.slice.call(arguments, 2);
      }
    },
    dummy: function () {},
    preUpdate: function () {
      if (this._pendingState && this.game.isBooted) {
        var t = this.current;
        this.clearCurrentState();
        this.setCurrentState(this._pendingState);
        this.onStateChange.dispatch(this.current, t);
        if (this.current !== this._pendingState) {
          return;
        }
        this._pendingState = null;
        if (this.onPreloadCallback) {
          this.game.load.reset(true);
          this.onPreloadCallback.call(this.callbackContext, this.game);
          if (this.game.load.totalQueuedFiles() === 0 && this.game.load.totalQueuedPacks() === 0) {
            this.loadComplete();
          } else {
            this.game.load.start();
          }
        } else {
          this.loadComplete();
        }
      }
    },
    clearCurrentState: function () {
      if (this.current) {
        if (this.onShutDownCallback) {
          this.onShutDownCallback.call(this.callbackContext, this.game);
        }
        this.game.tweens.removeAll();
        this.game.camera.reset();
        this.game.input.reset(true);
        this.game.physics.clear();
        this.game.time.removeAll();
        this.game.scale.reset(this._clearWorld);
        if (this.game.debug) {
          this.game.debug.reset();
        }
        if (this._clearWorld) {
          this.game.world.shutdown();
          if (this._clearCache) {
            this.game.cache.destroy();
          }
        }
      }
    },
    checkState: function (t) {
      return !!this.states[t] && (!!this.states[t].preload || !!this.states[t].create || !!this.states[t].update || !!this.states[t].render);
    },
    link: function (t) {
      this.states[t].game = this.game;
      this.states[t].add = this.game.add;
      this.states[t].make = this.game.make;
      this.states[t].camera = this.game.camera;
      this.states[t].cache = this.game.cache;
      this.states[t].input = this.game.input;
      this.states[t].load = this.game.load;
      this.states[t].math = this.game.math;
      this.states[t].sound = this.game.sound;
      this.states[t].scale = this.game.scale;
      this.states[t].state = this;
      this.states[t].stage = this.game.stage;
      this.states[t].time = this.game.time;
      this.states[t].tweens = this.game.tweens;
      this.states[t].world = this.game.world;
      this.states[t].particles = this.game.particles;
      this.states[t].rnd = this.game.rnd;
      this.states[t].physics = this.game.physics;
      this.states[t].key = t;
    },
    unlink: function (t) {
      if (this.states[t]) {
        this.states[t].game = null;
        this.states[t].add = null;
        this.states[t].make = null;
        this.states[t].camera = null;
        this.states[t].cache = null;
        this.states[t].input = null;
        this.states[t].load = null;
        this.states[t].math = null;
        this.states[t].sound = null;
        this.states[t].scale = null;
        this.states[t].state = null;
        this.states[t].stage = null;
        this.states[t].time = null;
        this.states[t].tweens = null;
        this.states[t].world = null;
        this.states[t].particles = null;
        this.states[t].rnd = null;
        this.states[t].physics = null;
      }
    },
    setCurrentState: function (t) {
      this.callbackContext = this.states[t];
      this.link(t);
      this.onInitCallback = this.states[t].init || this.dummy;
      this.onPreloadCallback = this.states[t].preload || null;
      this.onLoadRenderCallback = this.states[t].loadRender || null;
      this.onLoadUpdateCallback = this.states[t].loadUpdate || null;
      this.onCreateCallback = this.states[t].create || null;
      this.onUpdateCallback = this.states[t].update || null;
      this.onPreRenderCallback = this.states[t].preRender || null;
      this.onRenderCallback = this.states[t].render || null;
      this.onResizeCallback = this.states[t].resize || null;
      this.onPausedCallback = this.states[t].paused || null;
      this.onResumedCallback = this.states[t].resumed || null;
      this.onPauseUpdateCallback = this.states[t].pauseUpdate || null;
      this.onShutDownCallback = this.states[t].shutdown || this.dummy;
      if (this.current !== "") {
        this.game.physics.reset();
      }
      this.current = t;
      this._created = false;
      this.onInitCallback.apply(this.callbackContext, this._args);
      if (t === this._pendingState) {
        this._args = [];
      }
      this.game._kickstart = true;
    },
    getCurrentState: function () {
      return this.states[this.current];
    },
    loadComplete: function () {
      if (this._created === false && this.onLoadUpdateCallback) {
        this.onLoadUpdateCallback.call(this.callbackContext, this.game);
      }
      if (this._created === false && this.onCreateCallback) {
        this._created = true;
        this.onCreateCallback.call(this.callbackContext, this.game);
      } else {
        this._created = true;
      }
    },
    pause: function () {
      if (this._created && this.onPausedCallback) {
        this.onPausedCallback.call(this.callbackContext, this.game);
      }
    },
    resume: function () {
      if (this._created && this.onResumedCallback) {
        this.onResumedCallback.call(this.callbackContext, this.game);
      }
    },
    update: function () {
      if (this._created) {
        if (this.onUpdateCallback) {
          this.onUpdateCallback.call(this.callbackContext, this.game);
        }
      } else if (this.onLoadUpdateCallback) {
        this.onLoadUpdateCallback.call(this.callbackContext, this.game);
      }
    },
    pauseUpdate: function () {
      if (this._created) {
        if (this.onPauseUpdateCallback) {
          this.onPauseUpdateCallback.call(this.callbackContext, this.game);
        }
      } else if (this.onLoadUpdateCallback) {
        this.onLoadUpdateCallback.call(this.callbackContext, this.game);
      }
    },
    preRender: function (t) {
      if (this._created && this.onPreRenderCallback) {
        this.onPreRenderCallback.call(this.callbackContext, this.game, t);
      }
    },
    resize: function (t, e) {
      if (this.onResizeCallback) {
        this.onResizeCallback.call(this.callbackContext, t, e);
      }
    },
    render: function () {
      if (this._created) {
        if (this.onRenderCallback) {
          if (this.game.renderType === a.CANVAS) {
            this.game.context.save();
            this.game.context.setTransform(1, 0, 0, 1, 0, 0);
            this.onRenderCallback.call(this.callbackContext, this.game);
            this.game.context.restore();
          } else {
            this.onRenderCallback.call(this.callbackContext, this.game);
          }
        }
      } else if (this.onLoadRenderCallback) {
        this.onLoadRenderCallback.call(this.callbackContext, this.game);
      }
    },
    destroy: function () {
      this._clearWorld = true;
      this._clearCache = true;
      this.clearCurrentState();
      this.callbackContext = null;
      this.onInitCallback = null;
      this.onShutDownCallback = null;
      this.onPreloadCallback = null;
      this.onLoadRenderCallback = null;
      this.onLoadUpdateCallback = null;
      this.onCreateCallback = null;
      this.onUpdateCallback = null;
      this.onRenderCallback = null;
      this.onPausedCallback = null;
      this.onResumedCallback = null;
      this.onPauseUpdateCallback = null;
      this.game = null;
      this.states = {};
      this._pendingState = null;
      this.current = "";
    }
  };
  a.StateManager.prototype.constructor = a.StateManager;
  Object.defineProperty(a.StateManager.prototype, "created", {
    get: function () {
      return this._created;
    }
  });
  /**
  * @author       Miller Medeiros http://millermedeiros.github.com/js-signals/
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Signal = function () {};
  a.Signal.prototype = {
    _bindings: null,
    _prevParams: null,
    memorize: false,
    _shouldPropagate: true,
    active: true,
    _boundDispatch: false,
    validateListener: function (t, e) {
      if (typeof t != "function") {
        throw new Error("Phaser.Signal: listener is a required param of {fn}() and should be a Function.".replace("{fn}", e));
      }
    },
    _registerListener: function (t, e, i, s, n) {
      var o = this._indexOfListener(t, i);
      var r;
      if (o !== -1) {
        r = this._bindings[o];
        if (r.isOnce() !== e) {
          throw new Error("You cannot add" + (e ? "" : "Once") + "() then add" + (e ? "Once" : "") + "() the same listener without removing the relationship first.");
        }
      } else {
        r = new a.SignalBinding(this, t, e, i, s, n);
        this._addBinding(r);
      }
      if (this.memorize && this._prevParams) {
        r.execute(this._prevParams);
      }
      return r;
    },
    _addBinding: function (t) {
      this._bindings ||= [];
      var e = this._bindings.length;
      do {
        e--;
      } while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
      this._bindings.splice(e + 1, 0, t);
    },
    _indexOfListener: function (t, e) {
      if (!this._bindings) {
        return -1;
      }
      if (e === undefined) {
        e = null;
      }
      for (var i = this._bindings.length, s; i--;) {
        s = this._bindings[i];
        if (s._listener === t && s.context === e) {
          return i;
        }
      }
      return -1;
    },
    has: function (t, e) {
      return this._indexOfListener(t, e) !== -1;
    },
    add: function (t, e, i) {
      this.validateListener(t, "add");
      var s = [];
      if (arguments.length > 3) {
        for (var n = 3; n < arguments.length; n++) {
          s.push(arguments[n]);
        }
      }
      return this._registerListener(t, false, e, i, s);
    },
    addOnce: function (t, e, i) {
      this.validateListener(t, "addOnce");
      var s = [];
      if (arguments.length > 3) {
        for (var n = 3; n < arguments.length; n++) {
          s.push(arguments[n]);
        }
      }
      return this._registerListener(t, true, e, i, s);
    },
    remove: function (t, e) {
      this.validateListener(t, "remove");
      var i = this._indexOfListener(t, e);
      if (i !== -1) {
        this._bindings[i]._destroy();
        this._bindings.splice(i, 1);
      }
      return t;
    },
    removeAll: function (t = null) {
      if (this._bindings) {
        for (var e = this._bindings.length; e--;) {
          if (t) {
            if (this._bindings[e].context === t) {
              this._bindings[e]._destroy();
              this._bindings.splice(e, 1);
            }
          } else {
            this._bindings[e]._destroy();
          }
        }
        if (!t) {
          this._bindings.length = 0;
        }
      }
    },
    getNumListeners: function () {
      if (this._bindings) {
        return this._bindings.length;
      } else {
        return 0;
      }
    },
    halt: function () {
      this._shouldPropagate = false;
    },
    dispatch: function () {
      if (this.active && this._bindings) {
        var t = Array.prototype.slice.call(arguments);
        var e = this._bindings.length;
        var i;
        if (this.memorize) {
          this._prevParams = t;
        }
        if (e) {
          i = this._bindings.slice();
          this._shouldPropagate = true;
          do {
            e--;
          } while (i[e] && this._shouldPropagate && i[e].execute(t) !== false);
        }
      }
    },
    forget: function () {
      this._prevParams &&= null;
    },
    dispose: function () {
      this.removeAll();
      this._bindings = null;
      this._prevParams &&= null;
    },
    toString: function () {
      return "[Phaser.Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]";
    }
  };
  Object.defineProperty(a.Signal.prototype, "boundDispatch", {
    get: function () {
      var t = this;
      return this._boundDispatch ||= function () {
        return t.dispatch.apply(t, arguments);
      };
    }
  });
  a.Signal.prototype.constructor = a.Signal;
  /**
  * @author       Miller Medeiros http://millermedeiros.github.com/js-signals/
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.SignalBinding = function (t, e, i, s, n, a) {
    this._listener = e;
    if (i) {
      this._isOnce = true;
    }
    if (s != null) {
      this.context = s;
    }
    this._signal = t;
    if (n) {
      this._priority = n;
    }
    if (a && a.length) {
      this._args = a;
    }
  };
  a.SignalBinding.prototype = {
    context: null,
    _isOnce: false,
    _priority: 0,
    _args: null,
    callCount: 0,
    active: true,
    params: null,
    execute: function (t) {
      var e;
      var i;
      if (this.active && this._listener) {
        i = this.params ? this.params.concat(t) : t;
        if (this._args) {
          i = i.concat(this._args);
        }
        e = this._listener.apply(this.context, i);
        this.callCount++;
        if (this._isOnce) {
          this.detach();
        }
      }
      return e;
    },
    detach: function () {
      if (this.isBound()) {
        return this._signal.remove(this._listener, this.context);
      } else {
        return null;
      }
    },
    isBound: function () {
      return !!this._signal && !!this._listener;
    },
    isOnce: function () {
      return this._isOnce;
    },
    getListener: function () {
      return this._listener;
    },
    getSignal: function () {
      return this._signal;
    },
    _destroy: function () {
      delete this._signal;
      delete this._listener;
      delete this.context;
    },
    toString: function () {
      return "[Phaser.SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]";
    }
  };
  a.SignalBinding.prototype.constructor = a.SignalBinding;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Filter = function (t, e, i) {
    this.game = t;
    this.type = a.WEBGL_FILTER;
    this.passes = [this];
    this.shaders = [];
    this.dirty = true;
    this.padding = 0;
    this.prevPoint = new a.Point();
    var s = new Date();
    this.uniforms = {
      resolution: {
        type: "2f",
        value: {
          x: 256,
          y: 256
        }
      },
      time: {
        type: "1f",
        value: 0
      },
      mouse: {
        type: "2f",
        value: {
          x: 0,
          y: 0
        }
      },
      date: {
        type: "4fv",
        value: [s.getFullYear(), s.getMonth(), s.getDate(), s.getHours() * 60 * 60 + s.getMinutes() * 60 + s.getSeconds()]
      },
      sampleRate: {
        type: "1f",
        value: 44100
      },
      iChannel0: {
        type: "sampler2D",
        value: null,
        textureData: {
          repeat: true
        }
      },
      iChannel1: {
        type: "sampler2D",
        value: null,
        textureData: {
          repeat: true
        }
      },
      iChannel2: {
        type: "sampler2D",
        value: null,
        textureData: {
          repeat: true
        }
      },
      iChannel3: {
        type: "sampler2D",
        value: null,
        textureData: {
          repeat: true
        }
      }
    };
    if (e) {
      for (var n in e) {
        this.uniforms[n] = e[n];
      }
    }
    this.fragmentSrc = i || "";
  };
  a.Filter.prototype = {
    init: function () {},
    setResolution: function (t, e) {
      this.uniforms.resolution.value.x = t;
      this.uniforms.resolution.value.y = e;
    },
    update: function (t) {
      if (t !== undefined) {
        var e = t.x / this.game.width;
        var i = 1 - t.y / this.game.height;
        if (e !== this.prevPoint.x || i !== this.prevPoint.y) {
          this.uniforms.mouse.value.x = e.toFixed(2);
          this.uniforms.mouse.value.y = i.toFixed(2);
          this.prevPoint.set(e, i);
        }
      }
      this.uniforms.time.value = this.game.time.totalElapsedSeconds();
    },
    addToWorld: function (t, e, i, s, n = 0, a = 0) {
      if (i !== undefined && i !== null) {
        this.width = i;
      } else {
        i = this.width;
      }
      if (s !== undefined && s !== null) {
        this.height = s;
      } else {
        s = this.height;
      }
      var o = this.game.add.image(t, e, "__default");
      o.width = i;
      o.height = s;
      o.anchor.set(n, a);
      o.filters = [this];
      return o;
    },
    destroy: function () {
      this.game = null;
    }
  };
  a.Filter.prototype.constructor = a.Filter;
  Object.defineProperty(a.Filter.prototype, "width", {
    get: function () {
      return this.uniforms.resolution.value.x;
    },
    set: function (t) {
      this.uniforms.resolution.value.x = t;
    }
  });
  Object.defineProperty(a.Filter.prototype, "height", {
    get: function () {
      return this.uniforms.resolution.value.y;
    },
    set: function (t) {
      this.uniforms.resolution.value.y = t;
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Plugin = function (t, e = null) {
    this.game = t;
    this.parent = e;
    this.active = false;
    this.visible = false;
    this.hasPreUpdate = false;
    this.hasUpdate = false;
    this.hasPostUpdate = false;
    this.hasRender = false;
    this.hasPostRender = false;
  };
  a.Plugin.prototype = {
    preUpdate: function () {},
    update: function () {},
    render: function () {},
    postRender: function () {},
    destroy: function () {
      this.game = null;
      this.parent = null;
      this.active = false;
      this.visible = false;
    }
  };
  a.Plugin.prototype.constructor = a.Plugin;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.PluginManager = function (t) {
    this.game = t;
    this.plugins = [];
    this._len = 0;
    this._i = 0;
  };
  a.PluginManager.prototype = {
    add: function (t) {
      var e = Array.prototype.slice.call(arguments, 1);
      var i = false;
      if (typeof t == "function") {
        t = new t(this.game, this);
      } else {
        t.game = this.game;
        t.parent = this;
      }
      if (typeof t.preUpdate == "function") {
        t.hasPreUpdate = true;
        i = true;
      }
      if (typeof t.update == "function") {
        t.hasUpdate = true;
        i = true;
      }
      if (typeof t.postUpdate == "function") {
        t.hasPostUpdate = true;
        i = true;
      }
      if (typeof t.render == "function") {
        t.hasRender = true;
        i = true;
      }
      if (typeof t.postRender == "function") {
        t.hasPostRender = true;
        i = true;
      }
      if (i) {
        if (t.hasPreUpdate || t.hasUpdate || t.hasPostUpdate) {
          t.active = true;
        }
        if (t.hasRender || t.hasPostRender) {
          t.visible = true;
        }
        this._len = this.plugins.push(t);
        if (typeof t.init == "function") {
          t.init.apply(t, e);
        }
        return t;
      } else {
        return null;
      }
    },
    remove: function (t, e = true) {
      this._i = this._len;
      while (this._i--) {
        if (this.plugins[this._i] === t) {
          if (e) {
            t.destroy();
          }
          this.plugins.splice(this._i, 1);
          this._len--;
          return;
        }
      }
    },
    removeAll: function () {
      for (this._i = this._len; this._i--;) {
        this.plugins[this._i].destroy();
      }
      this.plugins.length = 0;
      this._len = 0;
    },
    preUpdate: function () {
      for (this._i = this._len; this._i--;) {
        if (this.plugins[this._i].active && this.plugins[this._i].hasPreUpdate) {
          this.plugins[this._i].preUpdate();
        }
      }
    },
    update: function () {
      for (this._i = this._len; this._i--;) {
        if (this.plugins[this._i].active && this.plugins[this._i].hasUpdate) {
          this.plugins[this._i].update();
        }
      }
    },
    postUpdate: function () {
      for (this._i = this._len; this._i--;) {
        if (this.plugins[this._i].active && this.plugins[this._i].hasPostUpdate) {
          this.plugins[this._i].postUpdate();
        }
      }
    },
    render: function () {
      for (this._i = this._len; this._i--;) {
        if (this.plugins[this._i].visible && this.plugins[this._i].hasRender) {
          this.plugins[this._i].render();
        }
      }
    },
    postRender: function () {
      for (this._i = this._len; this._i--;) {
        if (this.plugins[this._i].visible && this.plugins[this._i].hasPostRender) {
          this.plugins[this._i].postRender();
        }
      }
    },
    destroy: function () {
      this.removeAll();
      this.game = null;
    }
  };
  a.PluginManager.prototype.constructor = a.PluginManager;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Stage = function (t) {
    this.game = t;
    PIXI.DisplayObjectContainer.call(this);
    this.name = "_stage_root";
    this.disableVisibilityChange = false;
    this.exists = true;
    this.worldTransform = new PIXI.Matrix();
    this.stage = this;
    this.currentRenderOrderID = 0;
    this._hiddenVar = "hidden";
    this._onChange = null;
    this._bgColor = {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      color: 0,
      rgba: "#000000"
    };
    if (!this.game.transparent) {
      this._bgColor.a = 1;
    }
    if (t.config) {
      this.parseConfig(t.config);
    }
  };
  a.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  a.Stage.prototype.constructor = a.Stage;
  a.Stage.prototype.parseConfig = function (t) {
    if (t.disableVisibilityChange) {
      this.disableVisibilityChange = t.disableVisibilityChange;
    }
    if (t.backgroundColor) {
      this.setBackgroundColor(t.backgroundColor);
    }
  };
  a.Stage.prototype.boot = function () {
    a.DOM.getOffset(this.game.canvas, this.offset);
    a.Canvas.setUserSelect(this.game.canvas, "none");
    a.Canvas.setTouchAction(this.game.canvas, "none");
    this.checkVisibility();
  };
  a.Stage.prototype.preUpdate = function () {
    this.currentRenderOrderID = 0;
    for (var t = 0; t < this.children.length; t++) {
      this.children[t].preUpdate();
    }
  };
  a.Stage.prototype.update = function () {
    for (var t = this.children.length; t--;) {
      this.children[t].update();
    }
  };
  a.Stage.prototype.postUpdate = function () {
    this.game.camera.update();
    if (this.game.camera.target) {
      this.game.camera.target.postUpdate();
      this.updateTransform();
      this.game.camera.updateTarget();
    }
    for (var t = 0; t < this.children.length; t++) {
      this.children[t].postUpdate();
    }
    this.updateTransform();
  };
  a.Stage.prototype.updateTransform = function () {
    this.worldAlpha = 1;
    for (var t = 0; t < this.children.length; t++) {
      this.children[t].updateTransform();
    }
  };
  a.Stage.prototype.checkVisibility = function () {
    if (document.hidden !== undefined) {
      this._hiddenVar = "visibilitychange";
    } else if (document.webkitHidden !== undefined) {
      this._hiddenVar = "webkitvisibilitychange";
    } else if (document.mozHidden !== undefined) {
      this._hiddenVar = "mozvisibilitychange";
    } else if (document.msHidden !== undefined) {
      this._hiddenVar = "msvisibilitychange";
    } else {
      this._hiddenVar = null;
    }
    var t = this;
    this._onChange = function (e) {
      return t.visibilityChange(e);
    };
    if (this._hiddenVar) {
      document.addEventListener(this._hiddenVar, this._onChange, false);
    }
    window.onblur = this._onChange;
    window.onfocus = this._onChange;
    window.onpagehide = this._onChange;
    window.onpageshow = this._onChange;
    if (this.game.device.cocoonJSApp) {
      CocoonJS.App.onSuspended.addEventListener(function () {
        a.Stage.prototype.visibilityChange.call(t, {
          type: "pause"
        });
      });
      CocoonJS.App.onActivated.addEventListener(function () {
        a.Stage.prototype.visibilityChange.call(t, {
          type: "resume"
        });
      });
    }
  };
  a.Stage.prototype.visibilityChange = function (t) {
    if (t.type === "pagehide" || t.type === "blur" || t.type === "pageshow" || t.type === "focus") {
      if (t.type === "pagehide" || t.type === "blur") {
        this.game.focusLoss(t);
      } else if (t.type === "pageshow" || t.type === "focus") {
        this.game.focusGain(t);
      }
      return;
    }
    if (!this.disableVisibilityChange) {
      if (document.hidden || document.mozHidden || document.msHidden || document.webkitHidden || t.type === "pause") {
        this.game.gamePaused(t);
      } else {
        this.game.gameResumed(t);
      }
    }
  };
  a.Stage.prototype.setBackgroundColor = function (t) {
    if (!this.game.transparent) {
      a.Color.valueToColor(t, this._bgColor);
      a.Color.updateColor(this._bgColor);
      this._bgColor.r /= 255;
      this._bgColor.g /= 255;
      this._bgColor.b /= 255;
      this._bgColor.a = 1;
    }
  };
  a.Stage.prototype.destroy = function () {
    if (this._hiddenVar) {
      document.removeEventListener(this._hiddenVar, this._onChange, false);
    }
    window.onpagehide = null;
    window.onpageshow = null;
    window.onblur = null;
    window.onfocus = null;
  };
  Object.defineProperty(a.Stage.prototype, "backgroundColor", {
    get: function () {
      return this._bgColor.color;
    },
    set: function (t) {
      this.setBackgroundColor(t);
    }
  });
  Object.defineProperty(a.Stage.prototype, "smoothed", {
    get: function () {
      return PIXI.scaleModes.DEFAULT === PIXI.scaleModes.LINEAR;
    },
    set: function (t) {
      PIXI.scaleModes.DEFAULT = t ? PIXI.scaleModes.LINEAR : PIXI.scaleModes.NEAREST;
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Group = function (t, e, i, s = false, n = false, o = a.Physics.ARCADE) {
    this.game = t;
    if (e === undefined) {
      e = t.world;
    }
    this.name = i || "group";
    this.z = 0;
    PIXI.DisplayObjectContainer.call(this);
    if (s) {
      this.game.stage.addChild(this);
      this.z = this.game.stage.children.length;
    } else if (e) {
      e.addChild(this);
      this.z = e.children.length;
    }
    this.type = a.GROUP;
    this.physicsType = a.GROUP;
    this.alive = true;
    this.exists = true;
    this.ignoreDestroy = false;
    this.pendingDestroy = false;
    this.classType = a.Sprite;
    this.cursor = null;
    this.inputEnableChildren = false;
    this.onChildInputDown = new a.Signal();
    this.onChildInputUp = new a.Signal();
    this.onChildInputOver = new a.Signal();
    this.onChildInputOut = new a.Signal();
    this.enableBody = n;
    this.enableBodyDebug = false;
    this.physicsBodyType = o;
    this.physicsSortDirection = null;
    this.onDestroy = new a.Signal();
    this.cursorIndex = 0;
    this.fixedToCamera = false;
    this.cameraOffset = new a.Point();
    this.hash = [];
    this._sortProperty = "z";
  };
  a.Group.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  a.Group.prototype.constructor = a.Group;
  a.Group.RETURN_NONE = 0;
  a.Group.RETURN_TOTAL = 1;
  a.Group.RETURN_CHILD = 2;
  a.Group.RETURN_ALL = 3;
  a.Group.SORT_ASCENDING = -1;
  a.Group.SORT_DESCENDING = 1;
  a.Group.prototype.add = function (t, e = false, i) {
    if (t.parent === this) {
      return t;
    } else {
      if (t.body && t.parent && t.parent.hash) {
        t.parent.removeFromHash(t);
      }
      if (i === undefined) {
        t.z = this.children.length;
        this.addChild(t);
      } else {
        this.addChildAt(t, i);
        this.updateZ();
      }
      if (this.enableBody && t.hasOwnProperty("body") && t.body === null) {
        this.game.physics.enable(t, this.physicsBodyType);
      } else if (t.body) {
        this.addToHash(t);
      }
      if (!!this.inputEnableChildren && (!t.input || !!t.inputEnabled)) {
        t.inputEnabled = true;
      }
      if (!e && t.events) {
        t.events.onAddedToGroup$dispatch(t, this);
      }
      if (this.cursor === null) {
        this.cursor = t;
      }
      return t;
    }
  };
  a.Group.prototype.addAt = function (t, e, i) {
    this.add(t, i, e);
  };
  a.Group.prototype.addToHash = function (t) {
    if (t.parent === this) {
      if (this.hash.indexOf(t) === -1) {
        this.hash.push(t);
        return true;
      }
    }
    return false;
  };
  a.Group.prototype.removeFromHash = function (t) {
    if (t) {
      var e = this.hash.indexOf(t);
      if (e !== -1) {
        this.hash.splice(e, 1);
        return true;
      }
    }
    return false;
  };
  a.Group.prototype.addMultiple = function (t, e) {
    if (t instanceof a.Group) {
      t.moveAll(this, e);
    } else if (Array.isArray(t)) {
      for (var i = 0; i < t.length; i++) {
        this.add(t[i], e);
      }
    }
    return t;
  };
  a.Group.prototype.getAt = function (t) {
    if (t < 0 || t >= this.children.length) {
      return -1;
    } else {
      return this.getChildAt(t);
    }
  };
  a.Group.prototype.create = function (t, e, i, s, n = true, a) {
    var o = new this.classType(this.game, t, e, i, s);
    o.exists = n;
    o.visible = n;
    o.alive = n;
    return this.add(o, false, a);
  };
  a.Group.prototype.createMultiple = function (t, e, i = 0, s = false) {
    if (!Array.isArray(e)) {
      e = [e];
    }
    if (!Array.isArray(i)) {
      i = [i];
    }
    var n = this;
    var a = [];
    e.forEach(function (e) {
      i.forEach(function (i) {
        for (var o = 0; o < t; o++) {
          a.push(n.create(0, 0, e, i, s));
        }
      });
    });
    return a;
  };
  a.Group.prototype.updateZ = function () {
    for (var t = this.children.length; t--;) {
      this.children[t].z = t;
    }
  };
  a.Group.prototype.align = function (t, e, i, s, n = a.TOP_LEFT, o = 0) {
    if (this.children.length === 0 || o > this.children.length || t === -1 && e === -1) {
      return false;
    }
    var r = new a.Rectangle(0, 0, i, s);
    var h = t * i;
    var l = e * s;
    for (var c = o; c < this.children.length; c++) {
      var u = this.children[c];
      if (u.alignIn) {
        u.alignIn(r, n);
        if (t === -1) {
          r.y += s;
          if (r.y === l) {
            r.x += i;
            r.y = 0;
          }
        } else if (e === -1) {
          r.x += i;
          if (r.x === h) {
            r.x = 0;
            r.y += s;
          }
        } else {
          r.x += i;
          if (r.x === h && (r.x = 0, r.y += s, r.y === l)) {
            return true;
          }
        }
      }
    }
    return true;
  };
  a.Group.prototype.resetCursor = function (t = 0) {
    if (t > this.children.length - 1) {
      t = 0;
    }
    if (this.cursor) {
      this.cursorIndex = t;
      this.cursor = this.children[this.cursorIndex];
      return this.cursor;
    }
  };
  a.Group.prototype.next = function () {
    if (this.cursor) {
      if (this.cursorIndex >= this.children.length - 1) {
        this.cursorIndex = 0;
      } else {
        this.cursorIndex++;
      }
      this.cursor = this.children[this.cursorIndex];
      return this.cursor;
    }
  };
  a.Group.prototype.previous = function () {
    if (this.cursor) {
      if (this.cursorIndex === 0) {
        this.cursorIndex = this.children.length - 1;
      } else {
        this.cursorIndex--;
      }
      this.cursor = this.children[this.cursorIndex];
      return this.cursor;
    }
  };
  a.Group.prototype.swap = function (t, e) {
    this.swapChildren(t, e);
    this.updateZ();
  };
  a.Group.prototype.bringToTop = function (t) {
    if (t.parent === this && this.getIndex(t) < this.children.length) {
      this.remove(t, false, true);
      this.add(t, true);
    }
    return t;
  };
  a.Group.prototype.sendToBack = function (t) {
    if (t.parent === this && this.getIndex(t) > 0) {
      this.remove(t, false, true);
      this.addAt(t, 0, true);
    }
    return t;
  };
  a.Group.prototype.moveUp = function (t) {
    if (t.parent === this && this.getIndex(t) < this.children.length - 1) {
      var e = this.getIndex(t);
      var i = this.getAt(e + 1);
      if (i) {
        this.swap(t, i);
      }
    }
    return t;
  };
  a.Group.prototype.moveDown = function (t) {
    if (t.parent === this && this.getIndex(t) > 0) {
      var e = this.getIndex(t);
      var i = this.getAt(e - 1);
      if (i) {
        this.swap(t, i);
      }
    }
    return t;
  };
  a.Group.prototype.xy = function (t, e, i) {
    if (t < 0 || t > this.children.length) {
      return -1;
    }
    this.getChildAt(t).x = e;
    this.getChildAt(t).y = i;
  };
  a.Group.prototype.reverse = function () {
    this.children.reverse();
    this.updateZ();
  };
  a.Group.prototype.getIndex = function (t) {
    return this.children.indexOf(t);
  };
  a.Group.prototype.getByName = function (t) {
    for (var e = 0; e < this.children.length; e++) {
      if (this.children[e].name === t) {
        return this.children[e];
      }
    }
    return null;
  };
  a.Group.prototype.replace = function (t, e) {
    var i = this.getIndex(t);
    if (i !== -1) {
      if (e.parent) {
        if (e.parent instanceof a.Group) {
          e.parent.remove(e);
        } else {
          e.parent.removeChild(e);
        }
      }
      this.remove(t);
      this.addAt(e, i);
      return t;
    }
  };
  a.Group.prototype.hasProperty = function (t, e) {
    var i = e.length;
    return i === 1 && e[0] in t || i === 2 && e[0] in t && e[1] in t[e[0]] || i === 3 && e[0] in t && e[1] in t[e[0]] && e[2] in t[e[0]][e[1]] || i === 4 && e[0] in t && e[1] in t[e[0]] && e[2] in t[e[0]][e[1]] && e[3] in t[e[0]][e[1]][e[2]];
  };
  a.Group.prototype.setProperty = function (t, e, i, s, n = false) {
    s = s || 0;
    if (!this.hasProperty(t, e) && (!n || s > 0)) {
      return false;
    }
    var a = e.length;
    if (a === 1) {
      if (s === 0) {
        t[e[0]] = i;
      } else if (s === 1) {
        t[e[0]] += i;
      } else if (s === 2) {
        t[e[0]] -= i;
      } else if (s === 3) {
        t[e[0]] *= i;
      } else if (s === 4) {
        t[e[0]] /= i;
      }
    } else if (a === 2) {
      if (s === 0) {
        t[e[0]][e[1]] = i;
      } else if (s === 1) {
        t[e[0]][e[1]] += i;
      } else if (s === 2) {
        t[e[0]][e[1]] -= i;
      } else if (s === 3) {
        t[e[0]][e[1]] *= i;
      } else if (s === 4) {
        t[e[0]][e[1]] /= i;
      }
    } else if (a === 3) {
      if (s === 0) {
        t[e[0]][e[1]][e[2]] = i;
      } else if (s === 1) {
        t[e[0]][e[1]][e[2]] += i;
      } else if (s === 2) {
        t[e[0]][e[1]][e[2]] -= i;
      } else if (s === 3) {
        t[e[0]][e[1]][e[2]] *= i;
      } else if (s === 4) {
        t[e[0]][e[1]][e[2]] /= i;
      }
    } else if (a === 4) {
      if (s === 0) {
        t[e[0]][e[1]][e[2]][e[3]] = i;
      } else if (s === 1) {
        t[e[0]][e[1]][e[2]][e[3]] += i;
      } else if (s === 2) {
        t[e[0]][e[1]][e[2]][e[3]] -= i;
      } else if (s === 3) {
        t[e[0]][e[1]][e[2]][e[3]] *= i;
      } else if (s === 4) {
        t[e[0]][e[1]][e[2]][e[3]] /= i;
      }
    }
    return true;
  };
  a.Group.prototype.checkProperty = function (t, e, i, s = false) {
    return (!!a.Utils.getProperty(t, e) || !s) && a.Utils.getProperty(t, e) === i;
  };
  a.Group.prototype.set = function (t, e, i, s, n, a, o = false) {
    e = e.split(".");
    if (s === undefined) {
      s = false;
    }
    if (n === undefined) {
      n = false;
    }
    if ((s === false || s && t.alive) && (n === false || n && t.visible)) {
      return this.setProperty(t, e, i, a, o);
    }
  };
  a.Group.prototype.setAll = function (t, e, i = false, s = false, n, a = false) {
    t = t.split(".");
    n = n || 0;
    for (var o = 0; o < this.children.length; o++) {
      if ((!i || i && this.children[o].alive) && (!s || s && this.children[o].visible)) {
        this.setProperty(this.children[o], t, e, n, a);
      }
    }
  };
  a.Group.prototype.setAllChildren = function (t, e, i = false, s = false, n, o = false) {
    n = n || 0;
    for (var r = 0; r < this.children.length; r++) {
      if ((!i || i && this.children[r].alive) && (!s || s && this.children[r].visible)) {
        if (this.children[r] instanceof a.Group) {
          this.children[r].setAllChildren(t, e, i, s, n, o);
        } else {
          this.setProperty(this.children[r], t.split("."), e, n, o);
        }
      }
    }
  };
  a.Group.prototype.checkAll = function (t, e, i = false, s = false, n = false) {
    for (var a = 0; a < this.children.length; a++) {
      if ((!i || i && this.children[a].alive) && (!s || s && this.children[a].visible) && !this.checkProperty(this.children[a], t, e, n)) {
        return false;
      }
    }
    return true;
  };
  a.Group.prototype.addAll = function (t, e, i, s) {
    this.setAll(t, e, i, s, 1);
  };
  a.Group.prototype.subAll = function (t, e, i, s) {
    this.setAll(t, e, i, s, 2);
  };
  a.Group.prototype.multiplyAll = function (t, e, i, s) {
    this.setAll(t, e, i, s, 3);
  };
  a.Group.prototype.divideAll = function (t, e, i, s) {
    this.setAll(t, e, i, s, 4);
  };
  a.Group.prototype.callAllExists = function (t, e) {
    var i;
    if (arguments.length > 2) {
      i = [];
      for (var s = 2; s < arguments.length; s++) {
        i.push(arguments[s]);
      }
    }
    for (var s = 0; s < this.children.length; s++) {
      if (this.children[s].exists === e && this.children[s][t]) {
        this.children[s][t].apply(this.children[s], i);
      }
    }
  };
  a.Group.prototype.callbackFromArray = function (t, e, i) {
    if (i === 1) {
      if (t[e[0]]) {
        return t[e[0]];
      }
    } else if (i === 2) {
      if (t[e[0]][e[1]]) {
        return t[e[0]][e[1]];
      }
    } else if (i === 3) {
      if (t[e[0]][e[1]][e[2]]) {
        return t[e[0]][e[1]][e[2]];
      }
    } else if (i === 4) {
      if (t[e[0]][e[1]][e[2]][e[3]]) {
        return t[e[0]][e[1]][e[2]][e[3]];
      }
    } else if (t[e]) {
      return t[e];
    }
    return false;
  };
  a.Group.prototype.callAll = function (t, e) {
    if (t !== undefined) {
      t = t.split(".");
      var i = t.length;
      if (e === undefined || e === null || e === "") {
        e = null;
      } else if (typeof e == "string") {
        e = e.split(".");
        var s = e.length;
      }
      var n;
      if (arguments.length > 2) {
        n = [];
        for (var a = 2; a < arguments.length; a++) {
          n.push(arguments[a]);
        }
      }
      var o = null;
      var r = null;
      for (var a = 0; a < this.children.length; a++) {
        o = this.callbackFromArray(this.children[a], t, i);
        if (e && o) {
          r = this.callbackFromArray(this.children[a], e, s);
          if (o) {
            o.apply(r, n);
          }
        } else if (o) {
          o.apply(this.children[a], n);
        }
      }
    }
  };
  a.Group.prototype.preUpdate = function () {
    if (this.pendingDestroy) {
      this.destroy();
      return false;
    }
    if (!this.exists || !this.parent.exists) {
      this.renderOrderID = -1;
      return false;
    }
    for (var t = 0; t < this.children.length; t++) {
      this.children[t].preUpdate();
    }
    return true;
  };
  a.Group.prototype.update = function () {
    for (var t = this.children.length; t--;) {
      this.children[t].update();
    }
  };
  a.Group.prototype.postUpdate = function () {
    if (this.fixedToCamera) {
      this.x = this.game.camera.view.x + this.cameraOffset.x;
      this.y = this.game.camera.view.y + this.cameraOffset.y;
    }
    for (var t = 0; t < this.children.length; t++) {
      this.children[t].postUpdate();
    }
  };
  a.Group.prototype.filter = function (t, e) {
    for (var i = -1, s = this.children.length, n = []; ++i < s;) {
      var o = this.children[i];
      if ((!e || e && o.exists) && t(o, i, this.children)) {
        n.push(o);
      }
    }
    return new a.ArraySet(n);
  };
  a.Group.prototype.forEach = function (t, e, i = false) {
    if (arguments.length <= 3) {
      for (var s = 0; s < this.children.length; s++) {
        if (!i || i && this.children[s].exists) {
          t.call(e, this.children[s]);
        }
      }
    } else {
      var n = [null];
      for (var s = 3; s < arguments.length; s++) {
        n.push(arguments[s]);
      }
      for (var s = 0; s < this.children.length; s++) {
        if (!i || i && this.children[s].exists) {
          n[0] = this.children[s];
          t.apply(e, n);
        }
      }
    }
  };
  a.Group.prototype.forEachExists = function (t, e) {
    var i;
    if (arguments.length > 2) {
      i = [null];
      for (var s = 2; s < arguments.length; s++) {
        i.push(arguments[s]);
      }
    }
    this.iterate("exists", true, a.Group.RETURN_TOTAL, t, e, i);
  };
  a.Group.prototype.forEachAlive = function (t, e) {
    var i;
    if (arguments.length > 2) {
      i = [null];
      for (var s = 2; s < arguments.length; s++) {
        i.push(arguments[s]);
      }
    }
    this.iterate("alive", true, a.Group.RETURN_TOTAL, t, e, i);
  };
  a.Group.prototype.forEachDead = function (t, e) {
    var i;
    if (arguments.length > 2) {
      i = [null];
      for (var s = 2; s < arguments.length; s++) {
        i.push(arguments[s]);
      }
    }
    this.iterate("alive", false, a.Group.RETURN_TOTAL, t, e, i);
  };
  a.Group.prototype.sort = function (t, e) {
    if (!(this.children.length < 2)) {
      if (t === undefined) {
        t = "z";
      }
      if (e === undefined) {
        e = a.Group.SORT_ASCENDING;
      }
      this._sortProperty = t;
      if (e === a.Group.SORT_ASCENDING) {
        this.children.sort(this.ascendingSortHandler.bind(this));
      } else {
        this.children.sort(this.descendingSortHandler.bind(this));
      }
      this.updateZ();
    }
  };
  a.Group.prototype.customSort = function (t, e) {
    if (!(this.children.length < 2)) {
      this.children.sort(t.bind(e));
      this.updateZ();
    }
  };
  a.Group.prototype.ascendingSortHandler = function (t, e) {
    if (t[this._sortProperty] < e[this._sortProperty]) {
      return -1;
    } else if (t[this._sortProperty] > e[this._sortProperty]) {
      return 1;
    } else if (t.z < e.z) {
      return -1;
    } else {
      return 1;
    }
  };
  a.Group.prototype.descendingSortHandler = function (t, e) {
    if (t[this._sortProperty] < e[this._sortProperty]) {
      return 1;
    } else if (t[this._sortProperty] > e[this._sortProperty]) {
      return -1;
    } else {
      return 0;
    }
  };
  a.Group.prototype.iterate = function (t, e, i, s, n, o) {
    if (this.children.length === 0) {
      if (i === a.Group.RETURN_TOTAL) {
        return 0;
      }
      if (i === a.Group.RETURN_ALL) {
        return [];
      }
    }
    var r = 0;
    if (i === a.Group.RETURN_ALL) {
      var h = [];
    }
    for (var l = 0; l < this.children.length; l++) {
      if (this.children[l][t] === e) {
        r++;
        if (s) {
          if (o) {
            o[0] = this.children[l];
            s.apply(n, o);
          } else {
            s.call(n, this.children[l]);
          }
        }
        if (i === a.Group.RETURN_CHILD) {
          return this.children[l];
        }
        if (i === a.Group.RETURN_ALL) {
          h.push(this.children[l]);
        }
      }
    }
    if (i === a.Group.RETURN_TOTAL) {
      return r;
    } else if (i === a.Group.RETURN_ALL) {
      return h;
    } else {
      return null;
    }
  };
  a.Group.prototype.getFirstExists = function (t, e = false, i, s, n, o) {
    if (typeof t != "boolean") {
      t = true;
    }
    var r = this.iterate("exists", t, a.Group.RETURN_CHILD);
    if (r === null && e) {
      return this.create(i, s, n, o);
    } else {
      return this.resetChild(r, i, s, n, o);
    }
  };
  a.Group.prototype.getFirstAlive = function (t = false, e, i, s, n) {
    var o = this.iterate("alive", true, a.Group.RETURN_CHILD);
    if (o === null && t) {
      return this.create(e, i, s, n);
    } else {
      return this.resetChild(o, e, i, s, n);
    }
  };
  a.Group.prototype.getFirstDead = function (t = false, e, i, s, n) {
    var o = this.iterate("alive", false, a.Group.RETURN_CHILD);
    if (o === null && t) {
      return this.create(e, i, s, n);
    } else {
      return this.resetChild(o, e, i, s, n);
    }
  };
  a.Group.prototype.resetChild = function (t, e, i, s, n) {
    if (t === null) {
      return null;
    } else {
      if (e === undefined) {
        e = null;
      }
      if (i === undefined) {
        i = null;
      }
      if (e !== null && i !== null) {
        t.reset(e, i);
      }
      if (s !== undefined) {
        t.loadTexture(s, n);
      }
      return t;
    }
  };
  a.Group.prototype.getTop = function () {
    if (this.children.length > 0) {
      return this.children[this.children.length - 1];
    }
  };
  a.Group.prototype.getBottom = function () {
    if (this.children.length > 0) {
      return this.children[0];
    }
  };
  a.Group.prototype.getClosestTo = function (t, e, i) {
    var s = Number.MAX_VALUE;
    var n = 0;
    var o = null;
    for (var r = 0; r < this.children.length; r++) {
      var h = this.children[r];
      if (h.exists && (n = Math.abs(a.Point.distance(t, h))) < s && (!e || e.call(i, h, n))) {
        s = n;
        o = h;
      }
    }
    return o;
  };
  a.Group.prototype.getFurthestFrom = function (t, e, i) {
    var s = 0;
    var n = 0;
    var o = null;
    for (var r = 0; r < this.children.length; r++) {
      var h = this.children[r];
      if (h.exists && (n = Math.abs(a.Point.distance(t, h))) > s && (!e || e.call(i, h, n))) {
        s = n;
        o = h;
      }
    }
    return o;
  };
  a.Group.prototype.countLiving = function () {
    return this.iterate("alive", true, a.Group.RETURN_TOTAL);
  };
  a.Group.prototype.countDead = function () {
    return this.iterate("alive", false, a.Group.RETURN_TOTAL);
  };
  a.Group.prototype.getRandom = function (t = 0, e = this.children.length) {
    if (e === 0) {
      return null;
    } else {
      return a.ArrayUtils.getRandomItem(this.children, t, e);
    }
  };
  a.Group.prototype.getRandomExists = function (t, e) {
    var i = this.getAll("exists", true, t, e);
    return this.game.rnd.pick(i);
  };
  a.Group.prototype.getAll = function (t, e, i = 0, s = this.children.length) {
    var n = [];
    for (var a = i; a < s; a++) {
      var o = this.children[a];
      if (t && o[t] === e) {
        n.push(o);
      }
    }
    return n;
  };
  a.Group.prototype.remove = function (t, e = false, i = false) {
    if (this.children.length === 0 || this.children.indexOf(t) === -1) {
      return false;
    }
    if (!i && !!t.events && !t.destroyPhase) {
      t.events.onRemovedFromGroup$dispatch(t, this);
    }
    var s = this.removeChild(t);
    this.removeFromHash(t);
    this.updateZ();
    if (this.cursor === t) {
      this.next();
    }
    if (e && s) {
      s.destroy(true);
    }
    return true;
  };
  a.Group.prototype.moveAll = function (t, e = false) {
    if (this.children.length > 0 && t instanceof a.Group) {
      do {
        t.add(this.children[0], e);
      } while (this.children.length > 0);
      this.hash = [];
      this.cursor = null;
    }
    return t;
  };
  a.Group.prototype.removeAll = function (t = false, e = false, i = false) {
    if (this.children.length !== 0) {
      do {
        if (!e && this.children[0].events) {
          this.children[0].events.onRemovedFromGroup$dispatch(this.children[0], this);
        }
        var s = this.removeChild(this.children[0]);
        this.removeFromHash(s);
        if (t && s) {
          s.destroy(true, i);
        }
      } while (this.children.length > 0);
      this.hash = [];
      this.cursor = null;
    }
  };
  a.Group.prototype.removeBetween = function (t, e = this.children.length - 1, i = false, s = false) {
    if (this.children.length !== 0) {
      if (t > e || t < 0 || e > this.children.length) {
        return false;
      }
      for (var n = e; n >= t;) {
        if (!s && this.children[n].events) {
          this.children[n].events.onRemovedFromGroup$dispatch(this.children[n], this);
        }
        var a = this.removeChild(this.children[n]);
        this.removeFromHash(a);
        if (i && a) {
          a.destroy(true);
        }
        if (this.cursor === this.children[n]) {
          this.cursor = null;
        }
        n--;
      }
      this.updateZ();
    }
  };
  a.Group.prototype.destroy = function (t, e) {
    if (this.game !== null && !this.ignoreDestroy) {
      if (t === undefined) {
        t = true;
      }
      if (e === undefined) {
        e = false;
      }
      this.onDestroy.dispatch(this, t, e);
      this.removeAll(t);
      this.cursor = null;
      this.filters = null;
      this.pendingDestroy = false;
      if (!e) {
        if (this.parent) {
          this.parent.removeChild(this);
        }
        this.game = null;
        this.exists = false;
      }
    }
  };
  Object.defineProperty(a.Group.prototype, "total", {
    get: function () {
      return this.iterate("exists", true, a.Group.RETURN_TOTAL);
    }
  });
  Object.defineProperty(a.Group.prototype, "length", {
    get: function () {
      return this.children.length;
    }
  });
  Object.defineProperty(a.Group.prototype, "angle", {
    get: function () {
      return a.Math.radToDeg(this.rotation);
    },
    set: function (t) {
      this.rotation = a.Math.degToRad(t);
    }
  });
  Object.defineProperty(a.Group.prototype, "centerX", {
    get: function () {
      return this.getBounds(this.parent).centerX;
    },
    set: function (t) {
      var e = this.getBounds(this.parent);
      var i = this.x - e.x;
      this.x = t + i - e.halfWidth;
    }
  });
  Object.defineProperty(a.Group.prototype, "centerY", {
    get: function () {
      return this.getBounds(this.parent).centerY;
    },
    set: function (t) {
      var e = this.getBounds(this.parent);
      var i = this.y - e.y;
      this.y = t + i - e.halfHeight;
    }
  });
  Object.defineProperty(a.Group.prototype, "left", {
    get: function () {
      return this.getBounds(this.parent).left;
    },
    set: function (t) {
      var e = this.getBounds(this.parent);
      var i = this.x - e.x;
      this.x = t + i;
    }
  });
  Object.defineProperty(a.Group.prototype, "right", {
    get: function () {
      return this.getBounds(this.parent).right;
    },
    set: function (t) {
      var e = this.getBounds(this.parent);
      var i = this.x - e.x;
      this.x = t + i - e.width;
    }
  });
  Object.defineProperty(a.Group.prototype, "top", {
    get: function () {
      return this.getBounds(this.parent).top;
    },
    set: function (t) {
      var e = this.getBounds(this.parent);
      var i = this.y - e.y;
      this.y = t + i;
    }
  });
  Object.defineProperty(a.Group.prototype, "bottom", {
    get: function () {
      return this.getBounds(this.parent).bottom;
    },
    set: function (t) {
      var e = this.getBounds(this.parent);
      var i = this.y - e.y;
      this.y = t + i - e.height;
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.World = function (t) {
    a.Group.call(this, t, null, "__world", false);
    this.bounds = new a.Rectangle(0, 0, t.width, t.height);
    this.camera = null;
    this._definedSize = false;
    this._width = t.width;
    this._height = t.height;
    this.game.state.onStateChange.add(this.stateChange, this);
  };
  a.World.prototype = Object.create(a.Group.prototype);
  a.World.prototype.constructor = a.World;
  a.World.prototype.boot = function () {
    this.camera = new a.Camera(this.game, 0, 0, 0, this.game.width, this.game.height);
    this.game.stage.addChild(this);
    this.camera.boot();
  };
  a.World.prototype.stateChange = function () {
    this.x = 0;
    this.y = 0;
    this.camera.reset();
  };
  a.World.prototype.setBounds = function (t, e, i, s) {
    this._definedSize = true;
    this._width = i;
    this._height = s;
    this.bounds.setTo(t, e, i, s);
    this.x = t;
    this.y = e;
    if (this.camera.bounds) {
      this.camera.bounds.setTo(t, e, Math.max(i, this.game.width), Math.max(s, this.game.height));
    }
    this.game.physics.setBoundsToWorld();
  };
  a.World.prototype.resize = function (t, e) {
    if (this._definedSize) {
      if (t < this._width) {
        t = this._width;
      }
      if (e < this._height) {
        e = this._height;
      }
    }
    this.bounds.width = t;
    this.bounds.height = e;
    this.game.camera.setBoundsToWorld();
    this.game.physics.setBoundsToWorld();
  };
  a.World.prototype.shutdown = function () {
    this.destroy(true, true);
  };
  a.World.prototype.wrap = function (t, e = 0, i = false, s = true, n = true) {
    if (i) {
      t.getBounds();
      if (s) {
        if (t.x + t._currentBounds.width < this.bounds.x) {
          t.x = this.bounds.right;
        } else if (t.x > this.bounds.right) {
          t.x = this.bounds.left;
        }
      }
      if (n) {
        if (t.y + t._currentBounds.height < this.bounds.top) {
          t.y = this.bounds.bottom;
        } else if (t.y > this.bounds.bottom) {
          t.y = this.bounds.top;
        }
      }
    } else {
      if (s && t.x + e < this.bounds.x) {
        t.x = this.bounds.right + e;
      } else if (s && t.x - e > this.bounds.right) {
        t.x = this.bounds.left - e;
      }
      if (n && t.y + e < this.bounds.top) {
        t.y = this.bounds.bottom + e;
      } else if (n && t.y - e > this.bounds.bottom) {
        t.y = this.bounds.top - e;
      }
    }
  };
  Object.defineProperty(a.World.prototype, "width", {
    get: function () {
      return this.bounds.width;
    },
    set: function (t) {
      if (t < this.game.width) {
        t = this.game.width;
      }
      this.bounds.width = t;
      this._width = t;
      this._definedSize = true;
    }
  });
  Object.defineProperty(a.World.prototype, "height", {
    get: function () {
      return this.bounds.height;
    },
    set: function (t) {
      if (t < this.game.height) {
        t = this.game.height;
      }
      this.bounds.height = t;
      this._height = t;
      this._definedSize = true;
    }
  });
  Object.defineProperty(a.World.prototype, "centerX", {
    get: function () {
      return this.bounds.halfWidth + this.bounds.x;
    }
  });
  Object.defineProperty(a.World.prototype, "centerY", {
    get: function () {
      return this.bounds.halfHeight + this.bounds.y;
    }
  });
  Object.defineProperty(a.World.prototype, "randomX", {
    get: function () {
      if (this.bounds.x < 0) {
        return this.game.rnd.between(this.bounds.x, this.bounds.width - Math.abs(this.bounds.x));
      } else {
        return this.game.rnd.between(this.bounds.x, this.bounds.width);
      }
    }
  });
  Object.defineProperty(a.World.prototype, "randomY", {
    get: function () {
      if (this.bounds.y < 0) {
        return this.game.rnd.between(this.bounds.y, this.bounds.height - Math.abs(this.bounds.y));
      } else {
        return this.game.rnd.between(this.bounds.y, this.bounds.height);
      }
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Game = function (t, e, i, s, n, o, r, h) {
    this.id = a.GAMES.push(this) - 1;
    this.config = null;
    this.physicsConfig = h;
    this.parent = "";
    this.width = 800;
    this.height = 600;
    this.resolution = 1;
    this._width = 800;
    this._height = 600;
    this.transparent = false;
    this.antialias = true;
    this.preserveDrawingBuffer = false;
    this.clearBeforeRender = true;
    this.renderer = null;
    this.renderType = a.AUTO;
    this.state = null;
    this.isBooted = false;
    this.isRunning = false;
    this.raf = null;
    this.add = null;
    this.make = null;
    this.cache = null;
    this.input = null;
    this.load = null;
    this.math = null;
    this.net = null;
    this.scale = null;
    this.sound = null;
    this.stage = null;
    this.time = null;
    this.tweens = null;
    this.world = null;
    this.physics = null;
    this.plugins = null;
    this.rnd = null;
    this.device = a.Device;
    this.camera = null;
    this.canvas = null;
    this.context = null;
    this.debug = null;
    this.particles = null;
    this.create = null;
    this.lockRender = false;
    this.stepping = false;
    this.pendingStep = false;
    this.stepCount = 0;
    this.onPause = null;
    this.onResume = null;
    this.onBlur = null;
    this.onFocus = null;
    this._paused = false;
    this._codePaused = false;
    this.currentUpdateID = 0;
    this.updatesThisFrame = 1;
    this._deltaTime = 0;
    this._lastCount = 0;
    this._spiraling = 0;
    this._kickstart = true;
    this.fpsProblemNotifier = new a.Signal();
    this.forceSingleUpdate = true;
    this._nextFpsNotification = 0;
    if (arguments.length === 1 && typeof arguments[0] == "object") {
      this.parseConfig(arguments[0]);
    } else {
      this.config = {
        enableDebug: true
      };
      if (t !== undefined) {
        this._width = t;
      }
      if (e !== undefined) {
        this._height = e;
      }
      if (i !== undefined) {
        this.renderType = i;
      }
      if (s !== undefined) {
        this.parent = s;
      }
      if (o !== undefined) {
        this.transparent = o;
      }
      if (r !== undefined) {
        this.antialias = r;
      }
      this.rnd = new a.RandomDataGenerator([(Date.now() * Math.random()).toString()]);
      this.state = new a.StateManager(this, n);
    }
    this.device.whenReady(this.boot, this);
    return this;
  };
  a.Game.prototype = {
    parseConfig: function (t) {
      this.config = t;
      if (t.enableDebug === undefined) {
        this.config.enableDebug = true;
      }
      if (t.width) {
        this._width = t.width;
      }
      if (t.height) {
        this._height = t.height;
      }
      if (t.renderer) {
        this.renderType = t.renderer;
      }
      if (t.parent) {
        this.parent = t.parent;
      }
      if (t.transparent !== undefined) {
        this.transparent = t.transparent;
      }
      if (t.antialias !== undefined) {
        this.antialias = t.antialias;
      }
      if (t.resolution) {
        this.resolution = t.resolution;
      }
      if (t.preserveDrawingBuffer !== undefined) {
        this.preserveDrawingBuffer = t.preserveDrawingBuffer;
      }
      if (t.physicsConfig) {
        this.physicsConfig = t.physicsConfig;
      }
      var e = [(Date.now() * Math.random()).toString()];
      if (t.seed) {
        e = t.seed;
      }
      this.rnd = new a.RandomDataGenerator(e);
      var i = null;
      if (t.state) {
        i = t.state;
      }
      this.state = new a.StateManager(this, i);
    },
    boot: function () {
      if (!this.isBooted) {
        this.onPause = new a.Signal();
        this.onResume = new a.Signal();
        this.onBlur = new a.Signal();
        this.onFocus = new a.Signal();
        this.isBooted = true;
        PIXI.game = this;
        this.math = a.Math;
        this.scale = new a.ScaleManager(this, this._width, this._height);
        this.stage = new a.Stage(this);
        this.setUpRenderer();
        this.world = new a.World(this);
        this.add = new a.GameObjectFactory(this);
        this.make = new a.GameObjectCreator(this);
        this.cache = new a.Cache(this);
        this.load = new a.Loader(this);
        this.time = new a.Time(this);
        this.tweens = new a.TweenManager(this);
        this.input = new a.Input(this);
        this.sound = new a.SoundManager(this);
        this.physics = new a.Physics(this, this.physicsConfig);
        this.particles = new a.Particles(this);
        this.create = new a.Create(this);
        this.plugins = new a.PluginManager(this);
        this.net = new a.Net(this);
        this.time.boot();
        this.stage.boot();
        this.world.boot();
        this.scale.boot();
        this.input.boot();
        this.sound.boot();
        this.state.boot();
        if (this.config.enableDebug) {
          this.debug = new a.Utils.Debug(this);
          this.debug.boot();
        } else {
          this.debug = {
            preUpdate: function () {},
            update: function () {},
            reset: function () {}
          };
        }
        this.showDebugHeader();
        this.isRunning = true;
        if (this.config && this.config.forceSetTimeOut) {
          this.raf = new a.RequestAnimationFrame(this, this.config.forceSetTimeOut);
        } else {
          this.raf = new a.RequestAnimationFrame(this, false);
        }
        this._kickstart = true;
        if (window.focus && (!window.PhaserGlobal || window.PhaserGlobal && !window.PhaserGlobal.stopFocus)) {
          window.focus();
        }
        this.raf.start();
      }
    },
    showDebugHeader: function () {
      if (!window.PhaserGlobal || !window.PhaserGlobal.hideBanner) {
        var t = a.VERSION;
        var e = "Canvas";
        var i = "HTML Audio";
        var s = 1;
        if (this.renderType === a.WEBGL) {
          e = "WebGL";
          s++;
        } else if (this.renderType === a.HEADLESS) {
          e = "Headless";
        }
        if (this.device.webAudio) {
          i = "WebAudio";
          s++;
        }
        if (this.device.chrome) {
          var n = ["%c %c %c @orange-games/phaser v" + t + " | Pixi.js | " + e + " | " + i + "  %c %c %c http://phaser.io %c♥%c♥%c♥", "background: #F47820", "background: #ED873F", "color: #ffffff; background: #DD6612;", "background: #ED873F", "background: #F47820", "background: #ffffff"];
          for (var o = 0; o < 3; o++) {
            if (o < s) {
              n.push("color: #ff2424; background: #fff");
            } else {
              n.push("color: #959595; background: #fff");
            }
          }
        } else {
          window.console;
        }
      }
    },
    setUpRenderer: function () {
      if (this.config.canvas) {
        this.canvas = this.config.canvas;
      } else {
        this.canvas = a.Canvas.create(this, this.width, this.height, this.config.canvasID, true);
      }
      if (this.config.canvasStyle) {
        this.canvas.style = this.config.canvasStyle;
      } else {
        this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%";
      }
      if (this.renderType === a.HEADLESS || this.renderType === a.CANVAS || this.renderType === a.AUTO && !this.device.webGL) {
        if (!this.device.canvas) {
          throw new Error("Phaser.Game - Cannot create Canvas or WebGL context, aborting.");
        }
        this.renderType = a.CANVAS;
        this.renderer = new PIXI.CanvasRenderer(this);
        this.context = this.renderer.context;
      } else {
        this.renderType = a.WEBGL;
        this.renderer = new PIXI.WebGLRenderer(this);
        this.context = null;
        this.canvas.addEventListener("webglcontextlost", this.contextLost.bind(this), false);
        this.canvas.addEventListener("webglcontextrestored", this.contextRestored.bind(this), false);
      }
      if (this.device.cocoonJS) {
        this.canvas.screencanvas = this.renderType === a.CANVAS;
      }
      if (this.renderType !== a.HEADLESS) {
        this.stage.smoothed = this.antialias;
        a.Canvas.addToDOM(this.canvas, this.parent, false);
        a.Canvas.setTouchAction(this.canvas);
      }
    },
    contextLost: function (t) {
      t.preventDefault();
      this.renderer.contextLost = true;
    },
    contextRestored: function () {
      this.renderer.initContext();
      this.cache.clearGLTextures();
      this.renderer.contextLost = false;
    },
    update: function (t) {
      this.time.update(t);
      if (this._kickstart) {
        this.updateLogic(this.time.desiredFpsMult);
        this.updateRender(this.time.slowMotion * this.time.desiredFps);
        this._kickstart = false;
        return;
      }
      if (this._spiraling > 1 && !this.forceSingleUpdate) {
        if (this.time.time > this._nextFpsNotification) {
          this._nextFpsNotification = this.time.time + 10000;
          this.fpsProblemNotifier.dispatch();
        }
        this._deltaTime = 0;
        this._spiraling = 0;
        this.updateRender(this.time.slowMotion * this.time.desiredFps);
      } else {
        var e = this.time.slowMotion * 1000 / this.time.desiredFps;
        this._deltaTime += Math.max(Math.min(e * 3, this.time.elapsed), 0);
        var i = 0;
        this.updatesThisFrame = Math.floor(this._deltaTime / e);
        if (this.forceSingleUpdate) {
          this.updatesThisFrame = Math.min(1, this.updatesThisFrame);
        }
        while (this._deltaTime >= e && (this._deltaTime -= e, this.currentUpdateID = i, this.updateLogic(this.time.desiredFpsMult), i++, !this.forceSingleUpdate || i !== 1)) {
          this.time.refresh();
        }
        if (i > this._lastCount) {
          this._spiraling++;
        } else if (i < this._lastCount) {
          this._spiraling = 0;
        }
        this._lastCount = i;
        this.updateRender(this._deltaTime / e);
      }
    },
    updateLogic: function (t) {
      if (this._paused || this.pendingStep) {
        this.scale.pauseUpdate();
        this.state.pauseUpdate();
        this.debug.preUpdate();
      } else {
        if (this.stepping) {
          this.pendingStep = true;
        }
        this.scale.preUpdate();
        this.debug.preUpdate();
        this.camera.preUpdate();
        this.physics.preUpdate();
        this.state.preUpdate(t);
        this.plugins.preUpdate(t);
        this.stage.preUpdate();
        this.state.update();
        this.stage.update();
        this.tweens.update();
        this.sound.update();
        this.input.update();
        this.physics.update();
        this.particles.update();
        this.plugins.update();
        this.stage.postUpdate();
        this.plugins.postUpdate();
      }
      this.stage.updateTransform();
    },
    updateRender: function (t) {
      if (!this.lockRender) {
        this.state.preRender(t);
        if (this.renderType !== a.HEADLESS) {
          this.renderer.render(this.stage);
          this.plugins.render(t);
          this.state.render(t);
        }
        this.plugins.postRender(t);
      }
    },
    enableStep: function () {
      this.stepping = true;
      this.pendingStep = false;
      this.stepCount = 0;
    },
    disableStep: function () {
      this.stepping = false;
      this.pendingStep = false;
    },
    step: function () {
      this.pendingStep = false;
      this.stepCount++;
    },
    destroy: function () {
      this.raf.stop();
      this.state.destroy();
      this.sound.destroy();
      this.scale.destroy();
      this.stage.destroy();
      this.input.destroy();
      this.physics.destroy();
      this.plugins.destroy();
      this.state = null;
      this.sound = null;
      this.scale = null;
      this.stage = null;
      this.input = null;
      this.physics = null;
      this.plugins = null;
      this.cache = null;
      this.load = null;
      this.time = null;
      this.world = null;
      this.isBooted = false;
      this.renderer.destroy(false);
      a.Canvas.removeFromDOM(this.canvas);
      PIXI.defaultRenderer = null;
      a.GAMES[this.id] = null;
    },
    gamePaused: function (t) {
      if (!this._paused) {
        this._paused = true;
        this.time.gamePaused();
        if (this.sound.muteOnPause) {
          this.sound.setMute();
        }
        this.onPause.dispatch(t);
        if (this.device.cordova && this.device.iOS) {
          this.lockRender = true;
        }
      }
    },
    gameResumed: function (t) {
      if (this._paused && !this._codePaused) {
        this._paused = false;
        this.time.gameResumed();
        this.input.reset();
        if (this.sound.muteOnPause) {
          this.sound.unsetMute();
        }
        this.onResume.dispatch(t);
        if (this.device.cordova && this.device.iOS) {
          this.lockRender = false;
        }
      }
    },
    focusLoss: function (t) {
      this.onBlur.dispatch(t);
      if (!this.stage.disableVisibilityChange) {
        this.gamePaused(t);
      }
    },
    focusGain: function (t) {
      this.onFocus.dispatch(t);
      if (!this.stage.disableVisibilityChange) {
        this.gameResumed(t);
      }
    }
  };
  a.Game.prototype.constructor = a.Game;
  Object.defineProperty(a.Game.prototype, "paused", {
    get: function () {
      return this._paused;
    },
    set: function (t) {
      if (t === true) {
        if (this._paused === false) {
          this._paused = true;
          this.sound.setMute();
          this.time.gamePaused();
          this.onPause.dispatch(this);
        }
        this._codePaused = true;
      } else {
        if (this._paused) {
          this._paused = false;
          this.input.reset();
          this.sound.unsetMute();
          this.time.gameResumed();
          this.onResume.dispatch(this);
        }
        this._codePaused = false;
      }
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Input = function (t) {
    this.game = t;
    this.hitCanvas = null;
    this.hitContext = null;
    this.moveCallbacks = [];
    this.customCandidateHandler = null;
    this.customCandidateHandlerContext = null;
    this.pollRate = 0;
    this.enabled = true;
    this.multiInputOverride = a.Input.MOUSE_TOUCH_COMBINE;
    this.position = null;
    this.speed = null;
    this.circle = null;
    this.scale = null;
    this.maxPointers = -1;
    this.tapRate = 200;
    this.doubleTapRate = 300;
    this.holdRate = 2000;
    this.justPressedRate = 200;
    this.justReleasedRate = 200;
    this.recordPointerHistory = false;
    this.recordRate = 100;
    this.recordLimit = 100;
    this.pointer1 = null;
    this.pointer2 = null;
    this.pointer3 = null;
    this.pointer4 = null;
    this.pointer5 = null;
    this.pointer6 = null;
    this.pointer7 = null;
    this.pointer8 = null;
    this.pointer9 = null;
    this.pointer10 = null;
    this.pointers = [];
    this.activePointer = null;
    this.mousePointer = null;
    this.mouse = null;
    this.keyboard = null;
    this.touch = null;
    this.mspointer = null;
    this.gamepad = null;
    this.resetLocked = false;
    this.onDown = null;
    this.onUp = null;
    this.onTap = null;
    this.onHold = null;
    this.minPriorityID = 0;
    this.interactiveItems = new a.ArraySet();
    this._localPoint = new a.Point();
    this._pollCounter = 0;
    this._oldPosition = null;
    this._x = 0;
    this._y = 0;
  };
  a.Input.MOUSE_OVERRIDES_TOUCH = 0;
  a.Input.TOUCH_OVERRIDES_MOUSE = 1;
  a.Input.MOUSE_TOUCH_COMBINE = 2;
  a.Input.MAX_POINTERS = 10;
  a.Input.prototype = {
    boot: function () {
      this.mousePointer = new a.Pointer(this.game, 0, a.PointerMode.CURSOR);
      this.addPointer();
      this.addPointer();
      this.mouse = new a.Mouse(this.game);
      this.touch = new a.Touch(this.game);
      this.mspointer = new a.MSPointer(this.game);
      if (a.Keyboard) {
        this.keyboard = new a.Keyboard(this.game);
      }
      if (a.Gamepad) {
        this.gamepad = new a.Gamepad(this.game);
      }
      this.onDown = new a.Signal();
      this.onUp = new a.Signal();
      this.onTap = new a.Signal();
      this.onHold = new a.Signal();
      this.scale = new a.Point(1, 1);
      this.speed = new a.Point();
      this.position = new a.Point();
      this._oldPosition = new a.Point();
      this.circle = new a.Circle(0, 0, 44);
      this.activePointer = this.mousePointer;
      this.hitCanvas = PIXI.CanvasPool.create(this, 1, 1);
      this.hitContext = this.hitCanvas.getContext("2d");
      this.mouse.start();
      this.touch.start();
      this.mspointer.start();
      this.mousePointer.active = true;
      if (this.keyboard) {
        this.keyboard.start();
      }
      var t = this;
      this._onClickTrampoline = function (e) {
        t.onClickTrampoline(e);
      };
      this.game.canvas.addEventListener("click", this._onClickTrampoline, false);
    },
    destroy: function () {
      this.mouse.stop();
      this.touch.stop();
      this.mspointer.stop();
      if (this.keyboard) {
        this.keyboard.stop();
      }
      if (this.gamepad) {
        this.gamepad.stop();
      }
      this.moveCallbacks = [];
      PIXI.CanvasPool.remove(this);
      this.game.canvas.removeEventListener("click", this._onClickTrampoline);
    },
    setInteractiveCandidateHandler: function (t, e) {
      this.customCandidateHandler = t;
      this.customCandidateHandlerContext = e;
    },
    addMoveCallback: function (t, e) {
      this.moveCallbacks.push({
        callback: t,
        context: e
      });
    },
    deleteMoveCallback: function (t, e) {
      for (var i = this.moveCallbacks.length; i--;) {
        if (this.moveCallbacks[i].callback === t && this.moveCallbacks[i].context === e) {
          this.moveCallbacks.splice(i, 1);
          return;
        }
      }
    },
    addPointer: function () {
      if (this.pointers.length >= a.Input.MAX_POINTERS) {
        return null;
      }
      var t = this.pointers.length + 1;
      var e = new a.Pointer(this.game, t, a.PointerMode.TOUCH);
      this.pointers.push(e);
      this["pointer" + t] = e;
      return e;
    },
    update: function () {
      if (this.keyboard) {
        this.keyboard.update();
      }
      if (this.pollRate > 0 && this._pollCounter < this.pollRate) {
        this._pollCounter++;
        return;
      }
      this.speed.x = this.position.x - this._oldPosition.x;
      this.speed.y = this.position.y - this._oldPosition.y;
      this._oldPosition.copyFrom(this.position);
      this.mousePointer.update();
      if (this.gamepad && this.gamepad.active) {
        this.gamepad.update();
      }
      for (var t = 0; t < this.pointers.length; t++) {
        this.pointers[t].update();
      }
      this._pollCounter = 0;
    },
    reset: function (t) {
      if (this.game.isBooted && !this.resetLocked) {
        if (t === undefined) {
          t = false;
        }
        this.mousePointer.reset();
        if (this.keyboard) {
          this.keyboard.reset(t);
        }
        if (this.gamepad) {
          this.gamepad.reset();
        }
        for (var e = 0; e < this.pointers.length; e++) {
          this.pointers[e].reset();
        }
        if (this.game.canvas.style.cursor !== "none") {
          this.game.canvas.style.cursor = "inherit";
        }
        if (t) {
          this.onDown.dispose();
          this.onUp.dispose();
          this.onTap.dispose();
          this.onHold.dispose();
          this.onDown = new a.Signal();
          this.onUp = new a.Signal();
          this.onTap = new a.Signal();
          this.onHold = new a.Signal();
          this.moveCallbacks = [];
        }
        this._pollCounter = 0;
      }
    },
    resetSpeed: function (t, e) {
      this._oldPosition.setTo(t, e);
      this.speed.setTo(0, 0);
    },
    startPointer: function (t) {
      if (this.maxPointers >= 0 && this.countActivePointers(this.maxPointers) >= this.maxPointers) {
        return null;
      }
      if (!this.pointer1.active) {
        return this.pointer1.start(t);
      }
      if (!this.pointer2.active) {
        return this.pointer2.start(t);
      }
      for (var e = 2; e < this.pointers.length; e++) {
        var i = this.pointers[e];
        if (!i.active) {
          return i.start(t);
        }
      }
      return null;
    },
    updatePointer: function (t) {
      if (this.pointer1.active && this.pointer1.identifier === t.identifier) {
        return this.pointer1.move(t);
      }
      if (this.pointer2.active && this.pointer2.identifier === t.identifier) {
        return this.pointer2.move(t);
      }
      for (var e = 2; e < this.pointers.length; e++) {
        var i = this.pointers[e];
        if (i.active && i.identifier === t.identifier) {
          return i.move(t);
        }
      }
      return null;
    },
    stopPointer: function (t) {
      if (this.pointer1.active && this.pointer1.identifier === t.identifier) {
        return this.pointer1.stop(t);
      }
      if (this.pointer2.active && this.pointer2.identifier === t.identifier) {
        return this.pointer2.stop(t);
      }
      for (var e = 2; e < this.pointers.length; e++) {
        var i = this.pointers[e];
        if (i.active && i.identifier === t.identifier) {
          return i.stop(t);
        }
      }
      return null;
    },
    countActivePointers: function (t = this.pointers.length) {
      for (var e = t, i = 0; i < this.pointers.length && e > 0; i++) {
        if (this.pointers[i].active) {
          e--;
        }
      }
      return t - e;
    },
    getPointer: function (t = false) {
      for (var e = 0; e < this.pointers.length; e++) {
        var i = this.pointers[e];
        if (i.active === t) {
          return i;
        }
      }
      return null;
    },
    getPointerFromIdentifier: function (t) {
      for (var e = 0; e < this.pointers.length; e++) {
        var i = this.pointers[e];
        if (i.identifier === t) {
          return i;
        }
      }
      return null;
    },
    getPointerFromId: function (t) {
      for (var e = 0; e < this.pointers.length; e++) {
        var i = this.pointers[e];
        if (i.pointerId === t) {
          return i;
        }
      }
      return null;
    },
    getLocalPosition: function (t, e, i = new a.Point()) {
      var s = t.worldTransform;
      var n = 1 / (s.a * s.d + s.c * -s.b);
      return i.setTo(s.d * n * e.x + -s.c * n * e.y + (s.ty * s.c - s.tx * s.d) * n, s.a * n * e.y + -s.b * n * e.x + (-s.ty * s.a + s.tx * s.b) * n);
    },
    hitTest: function (t, e, i) {
      if (!t.worldVisible) {
        return false;
      }
      this.getLocalPosition(t, e, this._localPoint);
      i.copyFrom(this._localPoint);
      if (t.hitArea && t.hitArea.contains) {
        return t.hitArea.contains(this._localPoint.x, this._localPoint.y);
      }
      if (t instanceof a.TileSprite) {
        var s = t.width;
        var n = t.height;
        var o = -s * t.anchor.x;
        if (this._localPoint.x >= o && this._localPoint.x < o + s) {
          var r = -n * t.anchor.y;
          if (this._localPoint.y >= r && this._localPoint.y < r + n) {
            return true;
          }
        }
      } else if (t instanceof PIXI.Sprite) {
        var s = t.texture.frame.width;
        var n = t.texture.frame.height;
        var o = -s * t.anchor.x;
        if (this._localPoint.x >= o && this._localPoint.x < o + s) {
          var r = -n * t.anchor.y;
          if (this._localPoint.y >= r && this._localPoint.y < r + n) {
            return true;
          }
        }
      } else if (t instanceof a.Graphics) {
        for (var h = 0; h < t.graphicsData.length; h++) {
          var l = t.graphicsData[h];
          if (l.fill && l.shape && l.shape.contains(this._localPoint.x, this._localPoint.y)) {
            return true;
          }
        }
      }
      for (var h = 0; h < t.children.length; h++) {
        if (this.hitTest(t.children[h], e, i)) {
          return true;
        }
      }
      return false;
    },
    onClickTrampoline: function () {
      this.activePointer.processClickTrampolines();
    }
  };
  a.Input.prototype.constructor = a.Input;
  Object.defineProperty(a.Input.prototype, "x", {
    get: function () {
      return this._x;
    },
    set: function (t) {
      this._x = Math.floor(t);
    }
  });
  Object.defineProperty(a.Input.prototype, "y", {
    get: function () {
      return this._y;
    },
    set: function (t) {
      this._y = Math.floor(t);
    }
  });
  Object.defineProperty(a.Input.prototype, "pollLocked", {
    get: function () {
      return this.pollRate > 0 && this._pollCounter < this.pollRate;
    }
  });
  Object.defineProperty(a.Input.prototype, "totalInactivePointers", {
    get: function () {
      return this.pointers.length - this.countActivePointers();
    }
  });
  Object.defineProperty(a.Input.prototype, "totalActivePointers", {
    get: function () {
      return this.countActivePointers();
    }
  });
  Object.defineProperty(a.Input.prototype, "worldX", {
    get: function () {
      return this.game.camera.view.x + this.x;
    }
  });
  Object.defineProperty(a.Input.prototype, "worldY", {
    get: function () {
      return this.game.camera.view.y + this.y;
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Mouse = function (t) {
    this.game = t;
    this.input = t.input;
    this.callbackContext = this.game;
    this.mouseDownCallback = null;
    this.mouseUpCallback = null;
    this.mouseOutCallback = null;
    this.mouseOverCallback = null;
    this.mouseWheelCallback = null;
    this.capture = false;
    this.button = -1;
    this.wheelDelta = 0;
    this.enabled = true;
    this.locked = false;
    this.stopOnGameOut = false;
    this.pointerLock = new a.Signal();
    this.event = null;
    this._onMouseDown = null;
    this._onMouseMove = null;
    this._onMouseUp = null;
    this._onMouseOut = null;
    this._onMouseOver = null;
    this._onMouseWheel = null;
    this._wheelEvent = null;
  };
  a.Mouse.NO_BUTTON = -1;
  a.Mouse.LEFT_BUTTON = 0;
  a.Mouse.MIDDLE_BUTTON = 1;
  a.Mouse.RIGHT_BUTTON = 2;
  a.Mouse.BACK_BUTTON = 3;
  a.Mouse.FORWARD_BUTTON = 4;
  a.Mouse.WHEEL_UP = 1;
  a.Mouse.WHEEL_DOWN = -1;
  a.Mouse.prototype = {
    start: function () {
      if ((!this.game.device.android || this.game.device.chrome !== false) && this._onMouseDown === null) {
        var t = this;
        this._onMouseDown = function (e) {
          return t.onMouseDown(e);
        };
        this._onMouseMove = function (e) {
          return t.onMouseMove(e);
        };
        this._onMouseUp = function (e) {
          return t.onMouseUp(e);
        };
        this._onMouseUpGlobal = function (e) {
          return t.onMouseUpGlobal(e);
        };
        this._onMouseOutGlobal = function (e) {
          return t.onMouseOutGlobal(e);
        };
        this._onMouseOut = function (e) {
          return t.onMouseOut(e);
        };
        this._onMouseOver = function (e) {
          return t.onMouseOver(e);
        };
        this._onMouseWheel = function (e) {
          return t.onMouseWheel(e);
        };
        var e = this.game.canvas;
        e.addEventListener("mousedown", this._onMouseDown, true);
        e.addEventListener("mousemove", this._onMouseMove, true);
        e.addEventListener("mouseup", this._onMouseUp, true);
        if (!this.game.device.cocoonJS) {
          window.addEventListener("mouseup", this._onMouseUpGlobal, true);
          window.addEventListener("mouseout", this._onMouseOutGlobal, true);
          e.addEventListener("mouseover", this._onMouseOver, true);
          e.addEventListener("mouseout", this._onMouseOut, true);
        }
        var i = this.game.device.wheelEvent;
        if (i) {
          e.addEventListener(i, this._onMouseWheel, true);
          if (i === "mousewheel") {
            this._wheelEvent = new s(-0.025, 1);
          } else if (i === "DOMMouseScroll") {
            this._wheelEvent = new s(1, 1);
          }
        }
      }
    },
    onMouseDown: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (this.mouseDownCallback) {
        this.mouseDownCallback.call(this.callbackContext, t);
      }
      if (this.input.enabled && this.enabled) {
        t.identifier = 0;
        this.input.mousePointer.start(t);
      }
    },
    onMouseMove: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (this.mouseMoveCallback) {
        this.mouseMoveCallback.call(this.callbackContext, t);
      }
      if (this.input.enabled && this.enabled) {
        t.identifier = 0;
        this.input.mousePointer.move(t);
      }
    },
    onMouseUp: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (this.mouseUpCallback) {
        this.mouseUpCallback.call(this.callbackContext, t);
      }
      if (this.input.enabled && this.enabled) {
        t.identifier = 0;
        this.input.mousePointer.stop(t);
      }
    },
    onMouseUpGlobal: function (t) {
      if (!this.input.mousePointer.withinGame) {
        if (this.mouseUpCallback) {
          this.mouseUpCallback.call(this.callbackContext, t);
        }
        t.identifier = 0;
        this.input.mousePointer.stop(t);
      }
    },
    onMouseOutGlobal: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      this.input.mousePointer.withinGame = false;
      if (this.input.enabled && this.enabled) {
        this.input.mousePointer.stop(t);
        this.input.mousePointer.leftButton.stop(t);
        this.input.mousePointer.rightButton.stop(t);
      }
    },
    onMouseOut: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      this.input.mousePointer.withinGame = false;
      if (this.mouseOutCallback) {
        this.mouseOutCallback.call(this.callbackContext, t);
      }
      if (this.input.enabled && this.enabled && this.stopOnGameOut) {
        t.identifier = 0;
        this.input.mousePointer.stop(t);
      }
    },
    onMouseOver: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      this.input.mousePointer.withinGame = true;
      if (this.mouseOverCallback) {
        this.mouseOverCallback.call(this.callbackContext, t);
      }
    },
    onMouseWheel: function (t) {
      if (this._wheelEvent) {
        t = this._wheelEvent.bindEvent(t);
      }
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      this.wheelDelta = a.Math.clamp(-t.deltaY, -1, 1);
      if (this.mouseWheelCallback) {
        this.mouseWheelCallback.call(this.callbackContext, t);
      }
    },
    requestPointerLock: function () {
      if (this.game.device.pointerLock) {
        var t = this.game.canvas;
        t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock;
        t.requestPointerLock();
        var e = this;
        this._pointerLockChange = function (t) {
          return e.pointerLockChange(t);
        };
        document.addEventListener("pointerlockchange", this._pointerLockChange, true);
        document.addEventListener("mozpointerlockchange", this._pointerLockChange, true);
        document.addEventListener("webkitpointerlockchange", this._pointerLockChange, true);
      }
    },
    pointerLockChange: function (t) {
      var e = this.game.canvas;
      if (document.pointerLockElement === e || document.mozPointerLockElement === e || document.webkitPointerLockElement === e) {
        this.locked = true;
        this.pointerLock.dispatch(true, t);
      } else {
        this.locked = false;
        this.pointerLock.dispatch(false, t);
      }
    },
    releasePointerLock: function () {
      document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
      document.exitPointerLock();
      document.removeEventListener("pointerlockchange", this._pointerLockChange, true);
      document.removeEventListener("mozpointerlockchange", this._pointerLockChange, true);
      document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, true);
    },
    stop: function () {
      var t = this.game.canvas;
      t.removeEventListener("mousedown", this._onMouseDown, true);
      t.removeEventListener("mousemove", this._onMouseMove, true);
      t.removeEventListener("mouseup", this._onMouseUp, true);
      t.removeEventListener("mouseover", this._onMouseOver, true);
      t.removeEventListener("mouseout", this._onMouseOut, true);
      var e = this.game.device.wheelEvent;
      if (e) {
        t.removeEventListener(e, this._onMouseWheel, true);
      }
      window.removeEventListener("mouseup", this._onMouseUpGlobal, true);
      window.removeEventListener("mouseout", this._onMouseOutGlobal, true);
      document.removeEventListener("pointerlockchange", this._pointerLockChange, true);
      document.removeEventListener("mozpointerlockchange", this._pointerLockChange, true);
      document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, true);
    }
  };
  a.Mouse.prototype.constructor = a.Mouse;
  s.prototype = {};
  s.prototype.constructor = s;
  s.prototype.bindEvent = function (t) {
    if (!s._stubsGenerated && t) {
      function e(t) {
        return function () {
          var e = this.originalEvent[t];
          if (typeof e != "function") {
            return e;
          } else {
            return e.bind(this.originalEvent);
          }
        };
      }
      for (var i in t) {
        if (!(i in s.prototype)) {
          Object.defineProperty(s.prototype, i, {
            get: e(i)
          });
        }
      }
      s._stubsGenerated = true;
    }
    this.originalEvent = t;
    return this;
  };
  Object.defineProperties(s.prototype, {
    type: {
      value: "wheel"
    },
    deltaMode: {
      get: function () {
        return this._deltaMode;
      }
    },
    deltaY: {
      get: function () {
        return this._scaleFactor * (this.originalEvent.wheelDelta || this.originalEvent.detail) || 0;
      }
    },
    deltaX: {
      get: function () {
        return this._scaleFactor * this.originalEvent.wheelDeltaX || 0;
      }
    },
    deltaZ: {
      value: 0
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.MSPointer = function (t) {
    this.game = t;
    this.input = t.input;
    this.callbackContext = this.game;
    this.pointerDownCallback = null;
    this.pointerMoveCallback = null;
    this.pointerUpCallback = null;
    this.capture = true;
    this.button = -1;
    this.event = null;
    this.enabled = true;
    this._onMSPointerDown = null;
    this._onMSPointerMove = null;
    this._onMSPointerUp = null;
    this._onMSPointerUpGlobal = null;
    this._onMSPointerOut = null;
    this._onMSPointerOver = null;
  };
  a.MSPointer.prototype = {
    start: function () {
      if (this._onMSPointerDown === null) {
        var t = this;
        if (this.game.device.mspointer) {
          this._onMSPointerDown = function (e) {
            return t.onPointerDown(e);
          };
          this._onMSPointerMove = function (e) {
            return t.onPointerMove(e);
          };
          this._onMSPointerUp = function (e) {
            return t.onPointerUp(e);
          };
          this._onMSPointerUpGlobal = function (e) {
            return t.onPointerUpGlobal(e);
          };
          this._onMSPointerOut = function (e) {
            return t.onPointerOut(e);
          };
          this._onMSPointerOver = function (e) {
            return t.onPointerOver(e);
          };
          var e = this.game.canvas;
          e.addEventListener("MSPointerDown", this._onMSPointerDown, false);
          e.addEventListener("MSPointerMove", this._onMSPointerMove, false);
          e.addEventListener("MSPointerUp", this._onMSPointerUp, false);
          e.addEventListener("pointerdown", this._onMSPointerDown, false);
          e.addEventListener("pointermove", this._onMSPointerMove, false);
          e.addEventListener("pointerup", this._onMSPointerUp, false);
          e.style["-ms-content-zooming"] = "none";
          e.style["-ms-touch-action"] = "none";
          if (!this.game.device.cocoonJS) {
            window.addEventListener("MSPointerUp", this._onMSPointerUpGlobal, true);
            e.addEventListener("MSPointerOver", this._onMSPointerOver, true);
            e.addEventListener("MSPointerOut", this._onMSPointerOut, true);
            window.addEventListener("pointerup", this._onMSPointerUpGlobal, true);
            e.addEventListener("pointerover", this._onMSPointerOver, true);
            e.addEventListener("pointerout", this._onMSPointerOut, true);
          }
        }
      }
    },
    onPointerDown: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (this.pointerDownCallback) {
        this.pointerDownCallback.call(this.callbackContext, t);
      }
      if (this.input.enabled && this.enabled) {
        t.identifier = t.pointerId;
        if (t.pointerType === "mouse" || t.pointerType === 4) {
          this.input.mousePointer.start(t);
        } else {
          this.input.startPointer(t);
        }
      }
    },
    onPointerMove: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (this.pointerMoveCallback) {
        this.pointerMoveCallback.call(this.callbackContext, t);
      }
      if (this.input.enabled && this.enabled) {
        t.identifier = t.pointerId;
        if (t.pointerType === "mouse" || t.pointerType === 4) {
          this.input.mousePointer.move(t);
        } else {
          this.input.updatePointer(t);
        }
      }
    },
    onPointerUp: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (this.pointerUpCallback) {
        this.pointerUpCallback.call(this.callbackContext, t);
      }
      if (this.input.enabled && this.enabled) {
        t.identifier = t.pointerId;
        if (t.pointerType === "mouse" || t.pointerType === 4) {
          this.input.mousePointer.stop(t);
        } else {
          this.input.stopPointer(t);
        }
      }
    },
    onPointerUpGlobal: function (t) {
      if (t.pointerType !== "mouse" && t.pointerType !== 4 || this.input.mousePointer.withinGame) {
        var e = this.input.getPointerFromIdentifier(t.identifier);
        if (e && e.withinGame) {
          this.onPointerUp(t);
        }
      } else {
        this.onPointerUp(t);
      }
    },
    onPointerOut: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (t.pointerType === "mouse" || t.pointerType === 4) {
        this.input.mousePointer.withinGame = false;
      } else {
        var e = this.input.getPointerFromIdentifier(t.identifier);
        if (e) {
          e.withinGame = false;
        }
      }
      if (this.input.mouse.mouseOutCallback) {
        this.input.mouse.mouseOutCallback.call(this.input.mouse.callbackContext, t);
      }
      if (this.input.enabled && this.enabled && this.input.mouse.stopOnGameOut) {
        t.identifier = 0;
        if (e) {
          e.stop(t);
        } else {
          this.input.mousePointer.stop(t);
        }
      }
    },
    onPointerOver: function (t) {
      this.event = t;
      if (this.capture) {
        t.preventDefault();
      }
      if (t.pointerType === "mouse" || t.pointerType === 4) {
        this.input.mousePointer.withinGame = true;
      } else {
        var e = this.input.getPointerFromIdentifier(t.identifier);
        if (e) {
          e.withinGame = true;
        }
      }
      if (this.input.mouse.mouseOverCallback) {
        this.input.mouse.mouseOverCallback.call(this.input.mouse.callbackContext, t);
      }
    },
    stop: function () {
      var t = this.game.canvas;
      t.removeEventListener("MSPointerDown", this._onMSPointerDown, false);
      t.removeEventListener("MSPointerMove", this._onMSPointerMove, false);
      t.removeEventListener("MSPointerUp", this._onMSPointerUp, false);
      t.removeEventListener("pointerdown", this._onMSPointerDown, false);
      t.removeEventListener("pointermove", this._onMSPointerMove, false);
      t.removeEventListener("pointerup", this._onMSPointerUp, false);
      window.removeEventListener("MSPointerUp", this._onMSPointerUpGlobal, true);
      t.removeEventListener("MSPointerOver", this._onMSPointerOver, true);
      t.removeEventListener("MSPointerOut", this._onMSPointerOut, true);
      window.removeEventListener("pointerup", this._onMSPointerUpGlobal, true);
      t.removeEventListener("pointerover", this._onMSPointerOver, true);
      t.removeEventListener("pointerout", this._onMSPointerOut, true);
    }
  };
  a.MSPointer.prototype.constructor = a.MSPointer;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @author       @karlmacklin <tacklemcclean@gmail.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.DeviceButton = function (t, e) {
    this.parent = t;
    this.game = t.game;
    this.event = null;
    this.isDown = false;
    this.isUp = true;
    this.timeDown = 0;
    this.timeUp = 0;
    this.repeats = 0;
    this.altKey = false;
    this.shiftKey = false;
    this.ctrlKey = false;
    this.value = 0;
    this.buttonCode = e;
    this.onDown = new a.Signal();
    this.onUp = new a.Signal();
    this.onFloat = new a.Signal();
  };
  a.DeviceButton.prototype = {
    start: function (t, e) {
      if (!this.isDown) {
        this.isDown = true;
        this.isUp = false;
        this.timeDown = this.game.time.time;
        this.repeats = 0;
        this.event = t;
        this.value = e;
        if (t) {
          this.altKey = t.altKey;
          this.shiftKey = t.shiftKey;
          this.ctrlKey = t.ctrlKey;
        }
        this.onDown.dispatch(this, e);
      }
    },
    stop: function (t, e) {
      if (!this.isUp) {
        this.isDown = false;
        this.isUp = true;
        this.timeUp = this.game.time.time;
        this.event = t;
        this.value = e;
        if (t) {
          this.altKey = t.altKey;
          this.shiftKey = t.shiftKey;
          this.ctrlKey = t.ctrlKey;
        }
        this.onUp.dispatch(this, e);
      }
    },
    padFloat: function (t) {
      this.value = t;
      this.onFloat.dispatch(this, t);
    },
    justPressed: function (t) {
      t = t || 250;
      return this.isDown && this.timeDown + t > this.game.time.time;
    },
    justReleased: function (t) {
      t = t || 250;
      return this.isUp && this.timeUp + t > this.game.time.time;
    },
    reset: function () {
      this.isDown = false;
      this.isUp = true;
      this.timeDown = this.game.time.time;
      this.repeats = 0;
      this.altKey = false;
      this.shiftKey = false;
      this.ctrlKey = false;
    },
    destroy: function () {
      this.onDown.dispose();
      this.onUp.dispose();
      this.onFloat.dispose();
      this.parent = null;
      this.game = null;
    }
  };
  a.DeviceButton.prototype.constructor = a.DeviceButton;
  Object.defineProperty(a.DeviceButton.prototype, "duration", {
    get: function () {
      if (this.isUp) {
        return -1;
      } else {
        return this.game.time.time - this.timeDown;
      }
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Pointer = function (t, e, i) {
    this.game = t;
    this.id = e;
    this.type = a.POINTER;
    this.exists = true;
    this.identifier = 0;
    this.pointerId = null;
    this.pointerMode = i || a.PointerMode.CURSOR | a.PointerMode.CONTACT;
    this.target = null;
    this.button = null;
    this.leftButton = new a.DeviceButton(this, a.Pointer.LEFT_BUTTON);
    this.middleButton = new a.DeviceButton(this, a.Pointer.MIDDLE_BUTTON);
    this.rightButton = new a.DeviceButton(this, a.Pointer.RIGHT_BUTTON);
    this.backButton = new a.DeviceButton(this, a.Pointer.BACK_BUTTON);
    this.forwardButton = new a.DeviceButton(this, a.Pointer.FORWARD_BUTTON);
    this.eraserButton = new a.DeviceButton(this, a.Pointer.ERASER_BUTTON);
    this._holdSent = false;
    this._history = [];
    this._nextDrop = 0;
    this._stateReset = false;
    this.withinGame = false;
    this.clientX = -1;
    this.clientY = -1;
    this.pageX = -1;
    this.pageY = -1;
    this.screenX = -1;
    this.screenY = -1;
    this.rawMovementX = 0;
    this.rawMovementY = 0;
    this.movementX = 0;
    this.movementY = 0;
    this.x = -1;
    this.y = -1;
    this.isMouse = e === 0;
    this.isDown = false;
    this.isUp = true;
    this.timeDown = 0;
    this.timeUp = 0;
    this.previousTapTime = 0;
    this.totalTouches = 0;
    this.msSinceLastClick = Number.MAX_VALUE;
    this.targetObject = null;
    this.interactiveCandidates = [];
    this.active = false;
    this.dirty = false;
    this.position = new a.Point();
    this.positionDown = new a.Point();
    this.positionUp = new a.Point();
    this.circle = new a.Circle(0, 0, 44);
    this._clickTrampolines = null;
    this._trampolineTargetObject = null;
  };
  a.Pointer.NO_BUTTON = 0;
  a.Pointer.LEFT_BUTTON = 1;
  a.Pointer.RIGHT_BUTTON = 2;
  a.Pointer.MIDDLE_BUTTON = 4;
  a.Pointer.BACK_BUTTON = 8;
  a.Pointer.FORWARD_BUTTON = 16;
  a.Pointer.ERASER_BUTTON = 32;
  a.Pointer.prototype = {
    resetButtons: function () {
      this.isDown = false;
      this.isUp = true;
      if (this.isMouse) {
        this.leftButton.reset();
        this.middleButton.reset();
        this.rightButton.reset();
        this.backButton.reset();
        this.forwardButton.reset();
        this.eraserButton.reset();
      }
    },
    processButtonsDown: function (t, e) {
      if (a.Pointer.LEFT_BUTTON & t) {
        this.leftButton.start(e);
      }
      if (a.Pointer.RIGHT_BUTTON & t) {
        this.rightButton.start(e);
      }
      if (a.Pointer.MIDDLE_BUTTON & t) {
        this.middleButton.start(e);
      }
      if (a.Pointer.BACK_BUTTON & t) {
        this.backButton.start(e);
      }
      if (a.Pointer.FORWARD_BUTTON & t) {
        this.forwardButton.start(e);
      }
      if (a.Pointer.ERASER_BUTTON & t) {
        this.eraserButton.start(e);
      }
    },
    processButtonsUp: function (t, e) {
      if (t === a.Mouse.LEFT_BUTTON) {
        this.leftButton.stop(e);
      }
      if (t === a.Mouse.RIGHT_BUTTON) {
        this.rightButton.stop(e);
      }
      if (t === a.Mouse.MIDDLE_BUTTON) {
        this.middleButton.stop(e);
      }
      if (t === a.Mouse.BACK_BUTTON) {
        this.backButton.stop(e);
      }
      if (t === a.Mouse.FORWARD_BUTTON) {
        this.forwardButton.stop(e);
      }
      if (t === 5) {
        this.eraserButton.stop(e);
      }
    },
    updateButtons: function (t) {
      this.button = t.button;
      var e = t.type.toLowerCase().substr(-4) === "down";
      if (t.buttons !== undefined) {
        if (e) {
          this.processButtonsDown(t.buttons, t);
        } else {
          this.processButtonsUp(t.button, t);
        }
      } else if (e) {
        this.leftButton.start(t);
      } else {
        this.leftButton.stop(t);
        this.rightButton.stop(t);
      }
      if (t.buttons === 1 && t.ctrlKey && this.leftButton.isDown) {
        this.leftButton.stop(t);
        this.rightButton.start(t);
      }
      this.isUp = true;
      this.isDown = false;
      if (this.leftButton.isDown || this.rightButton.isDown || this.middleButton.isDown || this.backButton.isDown || this.forwardButton.isDown || this.eraserButton.isDown) {
        this.isUp = false;
        this.isDown = true;
      }
    },
    start: function (t) {
      var e = this.game.input;
      if (t.pointerId) {
        this.pointerId = t.pointerId;
      }
      this.identifier = t.identifier;
      this.target = t.target;
      if (this.isMouse) {
        this.updateButtons(t);
      } else {
        this.isDown = true;
        this.isUp = false;
      }
      this.active = true;
      this.withinGame = true;
      this.dirty = false;
      this._history = [];
      this._clickTrampolines = null;
      this._trampolineTargetObject = null;
      this.msSinceLastClick = this.game.time.time - this.timeDown;
      this.timeDown = this.game.time.time;
      this._holdSent = false;
      this.move(t, true);
      this.positionDown.setTo(this.x, this.y);
      if (e.multiInputOverride === a.Input.MOUSE_OVERRIDES_TOUCH || e.multiInputOverride === a.Input.MOUSE_TOUCH_COMBINE || e.multiInputOverride === a.Input.TOUCH_OVERRIDES_MOUSE && e.totalActivePointers === 0) {
        e.x = this.x;
        e.y = this.y;
        e.position.setTo(this.x, this.y);
        e.onDown.dispatch(this, t);
        e.resetSpeed(this.x, this.y);
      }
      this._stateReset = false;
      this.totalTouches++;
      if (this.targetObject !== null) {
        this.targetObject._touchedHandler(this);
      }
      return this;
    },
    update: function () {
      var t = this.game.input;
      if (this.active) {
        if (this.dirty) {
          if (t.interactiveItems.total > 0) {
            this.processInteractiveObjects(false);
          }
          this.dirty = false;
        }
        if (this._holdSent === false && this.duration >= t.holdRate) {
          if (t.multiInputOverride === a.Input.MOUSE_OVERRIDES_TOUCH || t.multiInputOverride === a.Input.MOUSE_TOUCH_COMBINE || t.multiInputOverride === a.Input.TOUCH_OVERRIDES_MOUSE && t.totalActivePointers === 0) {
            t.onHold.dispatch(this);
          }
          this._holdSent = true;
        }
        if (t.recordPointerHistory && this.game.time.time >= this._nextDrop) {
          this._nextDrop = this.game.time.time + t.recordRate;
          this._history.push({
            x: this.position.x,
            y: this.position.y
          });
          if (this._history.length > t.recordLimit) {
            this._history.shift();
          }
        }
      }
    },
    move: function (t, e) {
      var i = this.game.input;
      if (!i.pollLocked) {
        if (e === undefined) {
          e = false;
        }
        if (t.button !== undefined) {
          this.button = t.button;
        }
        if (e && this.isMouse) {
          this.updateButtons(t);
        }
        this.clientX = t.clientX;
        this.clientY = t.clientY;
        this.pageX = t.pageX;
        this.pageY = t.pageY;
        this.screenX = t.screenX;
        this.screenY = t.screenY;
        if (this.isMouse && i.mouse.locked && !e) {
          this.rawMovementX = t.movementX || t.mozMovementX || t.webkitMovementX || 0;
          this.rawMovementY = t.movementY || t.mozMovementY || t.webkitMovementY || 0;
          this.movementX += this.rawMovementX;
          this.movementY += this.rawMovementY;
        }
        this.x = (this.pageX - this.game.scale.offset.x) * i.scale.x;
        this.y = (this.pageY - this.game.scale.offset.y) * i.scale.y;
        this.position.setTo(this.x, this.y);
        this.circle.x = this.x;
        this.circle.y = this.y;
        if (i.multiInputOverride === a.Input.MOUSE_OVERRIDES_TOUCH || i.multiInputOverride === a.Input.MOUSE_TOUCH_COMBINE || i.multiInputOverride === a.Input.TOUCH_OVERRIDES_MOUSE && i.totalActivePointers === 0) {
          i.activePointer = this;
          i.x = this.x;
          i.y = this.y;
          i.position.setTo(i.x, i.y);
          i.circle.x = i.x;
          i.circle.y = i.y;
        }
        this.withinGame = this.game.scale.bounds.contains(this.pageX, this.pageY);
        if (this.game.paused) {
          return this;
        }
        for (var s = i.moveCallbacks.length; s--;) {
          i.moveCallbacks[s].callback.call(i.moveCallbacks[s].context, this, this.x, this.y, e);
        }
        if (this.targetObject !== null && this.targetObject.isDragged === true) {
          if (this.targetObject.update(this) === false) {
            this.targetObject = null;
          }
        } else if (i.interactiveItems.total > 0) {
          this.processInteractiveObjects(e);
        }
        return this;
      }
    },
    processInteractiveObjects: function (t) {
      var e = 0;
      var i = -1;
      var s = null;
      var n = this.game.input.interactiveItems.first;
      for (this.interactiveCandidates = []; n;) {
        n.checked = false;
        if (n.validForInput(i, e, false)) {
          n.checked = true;
          if (t && n.checkPointerDown(this, true) || !t && n.checkPointerOver(this, true)) {
            e = n.sprite.renderOrderID;
            i = n.priorityID;
            s = n;
            this.interactiveCandidates.push(n);
          }
        }
        n = this.game.input.interactiveItems.next;
      }
      for (n = this.game.input.interactiveItems.first; n;) {
        if (!n.checked && n.validForInput(i, e, true) && (t && n.checkPointerDown(this, false) || !t && n.checkPointerOver(this, false))) {
          e = n.sprite.renderOrderID;
          i = n.priorityID;
          s = n;
          this.interactiveCandidates.push(n);
        }
        n = this.game.input.interactiveItems.next;
      }
      if (this.game.input.customCandidateHandler) {
        s = this.game.input.customCandidateHandler.call(this.game.input.customCandidateHandlerContext, this, this.interactiveCandidates, s);
      }
      this.swapTarget(s, false);
      return this.targetObject !== null;
    },
    swapTarget: function (t, e = false) {
      if (t === null) {
        if (this.targetObject) {
          this.targetObject._pointerOutHandler(this, e);
          this.targetObject = null;
        }
      } else if (this.targetObject === null) {
        this.targetObject = t;
        t._pointerOverHandler(this, e);
      } else if (this.targetObject === t) {
        if (t.update(this) === false) {
          this.targetObject = null;
        }
      } else {
        this.targetObject._pointerOutHandler(this, e);
        this.targetObject = t;
        this.targetObject._pointerOverHandler(this, e);
      }
    },
    leave: function (t) {
      this.withinGame = false;
      this.move(t, false);
    },
    stop: function (t) {
      var e = this.game.input;
      if (this._stateReset && this.withinGame) {
        t.preventDefault();
        return;
      } else {
        this.timeUp = this.game.time.time;
        if (e.multiInputOverride === a.Input.MOUSE_OVERRIDES_TOUCH || e.multiInputOverride === a.Input.MOUSE_TOUCH_COMBINE || e.multiInputOverride === a.Input.TOUCH_OVERRIDES_MOUSE && e.totalActivePointers === 0) {
          e.onUp.dispatch(this, t);
          if (this.duration >= 0 && this.duration <= e.tapRate) {
            if (this.timeUp - this.previousTapTime < e.doubleTapRate) {
              e.onTap.dispatch(this, true);
            } else {
              e.onTap.dispatch(this, false);
            }
            this.previousTapTime = this.timeUp;
          }
        }
        if (this.isMouse) {
          this.updateButtons(t);
        } else {
          this.isDown = false;
          this.isUp = true;
        }
        if (this.id > 0) {
          this.active = false;
        }
        this.withinGame = this.game.scale.bounds.contains(t.pageX, t.pageY);
        this.pointerId = null;
        this.identifier = null;
        this.positionUp.setTo(this.x, this.y);
        if (this.isMouse === false) {
          e.currentPointers--;
        }
        e.interactiveItems.callAll("_releasedHandler", this);
        if (this._clickTrampolines) {
          this._trampolineTargetObject = this.targetObject;
        }
        this.targetObject = null;
        return this;
      }
    },
    justPressed: function (t) {
      t = t || this.game.input.justPressedRate;
      return this.isDown === true && this.timeDown + t > this.game.time.time;
    },
    justReleased: function (t) {
      t = t || this.game.input.justReleasedRate;
      return this.isUp && this.timeUp + t > this.game.time.time;
    },
    addClickTrampoline: function (t, e, i, s) {
      if (this.isDown) {
        for (var n = this._clickTrampolines = this._clickTrampolines || [], a = 0; a < n.length; a++) {
          if (n[a].name === t) {
            n.splice(a, 1);
            break;
          }
        }
        n.push({
          name: t,
          targetObject: this.targetObject,
          callback: e,
          callbackContext: i,
          callbackArgs: s
        });
      }
    },
    processClickTrampolines: function () {
      var t = this._clickTrampolines;
      if (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.targetObject === this._trampolineTargetObject) {
            i.callback.apply(i.callbackContext, i.callbackArgs);
          }
        }
        this._clickTrampolines = null;
        this._trampolineTargetObject = null;
      }
    },
    reset: function () {
      if (this.isMouse === false) {
        this.active = false;
      }
      this.pointerId = null;
      this.identifier = null;
      this.dirty = false;
      this.totalTouches = 0;
      this._holdSent = false;
      this._history.length = 0;
      this._stateReset = true;
      this.resetButtons();
      if (this.targetObject) {
        this.targetObject._releasedHandler(this);
      }
      this.targetObject = null;
    },
    resetMovement: function () {
      this.movementX = 0;
      this.movementY = 0;
    }
  };
  a.Pointer.prototype.constructor = a.Pointer;
  Object.defineProperty(a.Pointer.prototype, "duration", {
    get: function () {
      if (this.isUp) {
        return -1;
      } else {
        return this.game.time.time - this.timeDown;
      }
    }
  });
  Object.defineProperty(a.Pointer.prototype, "worldX", {
    get: function () {
      return this.game.world.camera.x + this.x;
    }
  });
  Object.defineProperty(a.Pointer.prototype, "worldY", {
    get: function () {
      return this.game.world.camera.y + this.y;
    }
  });
  a.PointerMode = {
    CURSOR: 1,
    CONTACT: 2
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Touch = function (t) {
    this.game = t;
    this.enabled = true;
    this.touchLockCallbacks = [];
    this.callbackContext = this.game;
    this.touchStartCallback = null;
    this.touchMoveCallback = null;
    this.touchEndCallback = null;
    this.touchEnterCallback = null;
    this.touchLeaveCallback = null;
    this.touchCancelCallback = null;
    this.preventDefault = true;
    this.event = null;
    this._onTouchStart = null;
    this._onTouchMove = null;
    this._onTouchEnd = null;
    this._onTouchEnter = null;
    this._onTouchLeave = null;
    this._onTouchCancel = null;
    this._onTouchMove = null;
  };
  a.Touch.prototype = {
    start: function () {
      if (this._onTouchStart === null) {
        var t = this;
        if (this.game.device.touch) {
          this._onTouchStart = function (e) {
            return t.onTouchStart(e);
          };
          this._onTouchMove = function (e) {
            return t.onTouchMove(e);
          };
          this._onTouchEnd = function (e) {
            return t.onTouchEnd(e);
          };
          this._onTouchEnter = function (e) {
            return t.onTouchEnter(e);
          };
          this._onTouchLeave = function (e) {
            return t.onTouchLeave(e);
          };
          this._onTouchCancel = function (e) {
            return t.onTouchCancel(e);
          };
          this.game.canvas.addEventListener("touchstart", this._onTouchStart, false);
          this.game.canvas.addEventListener("touchmove", this._onTouchMove, false);
          this.game.canvas.addEventListener("touchend", this._onTouchEnd, false);
          this.game.canvas.addEventListener("touchcancel", this._onTouchCancel, false);
          if (!this.game.device.cocoonJS) {
            this.game.canvas.addEventListener("touchenter", this._onTouchEnter, false);
            this.game.canvas.addEventListener("touchleave", this._onTouchLeave, false);
          }
        }
      }
    },
    consumeDocumentTouches: function () {
      this._documentTouchMove = function (t) {
        t.preventDefault();
      };
      document.addEventListener("touchmove", this._documentTouchMove, false);
    },
    addTouchLockCallback: function (t, e, i = false) {
      this.touchLockCallbacks.push({
        callback: t,
        context: e,
        onEnd: i
      });
    },
    removeTouchLockCallback: function (t, e) {
      for (var i = this.touchLockCallbacks.length; i--;) {
        if (this.touchLockCallbacks[i].callback === t && this.touchLockCallbacks[i].context === e) {
          this.touchLockCallbacks.splice(i, 1);
          return true;
        }
      }
      return false;
    },
    onTouchStart: function (t) {
      for (var e = this.touchLockCallbacks.length; e--;) {
        var i = this.touchLockCallbacks[e];
        if (!i.onEnd && i.callback.call(i.context, this, t)) {
          this.touchLockCallbacks.splice(e, 1);
        }
      }
      this.event = t;
      if (this.game.input.enabled && this.enabled) {
        if (this.touchStartCallback) {
          this.touchStartCallback.call(this.callbackContext, t);
        }
        if (this.preventDefault) {
          t.preventDefault();
        }
        for (var e = 0; e < t.changedTouches.length; e++) {
          this.game.input.startPointer(t.changedTouches[e]);
        }
      }
    },
    onTouchCancel: function (t) {
      this.event = t;
      if (this.touchCancelCallback) {
        this.touchCancelCallback.call(this.callbackContext, t);
      }
      if (this.game.input.enabled && this.enabled) {
        if (this.preventDefault) {
          t.preventDefault();
        }
        for (var e = 0; e < t.changedTouches.length; e++) {
          this.game.input.stopPointer(t.changedTouches[e]);
        }
      }
    },
    onTouchEnter: function (t) {
      this.event = t;
      if (this.touchEnterCallback) {
        this.touchEnterCallback.call(this.callbackContext, t);
      }
      if (this.game.input.enabled && this.enabled && this.preventDefault) {
        t.preventDefault();
      }
    },
    onTouchLeave: function (t) {
      this.event = t;
      if (this.touchLeaveCallback) {
        this.touchLeaveCallback.call(this.callbackContext, t);
      }
      if (this.preventDefault) {
        t.preventDefault();
      }
    },
    onTouchMove: function (t) {
      this.event = t;
      if (this.touchMoveCallback) {
        this.touchMoveCallback.call(this.callbackContext, t);
      }
      if (this.preventDefault) {
        t.preventDefault();
      }
      for (var e = 0; e < t.changedTouches.length; e++) {
        this.game.input.updatePointer(t.changedTouches[e]);
      }
    },
    onTouchEnd: function (t) {
      for (var e = this.touchLockCallbacks.length; e--;) {
        var i = this.touchLockCallbacks[e];
        if (i.onEnd && i.callback.call(i.context, this, t)) {
          this.touchLockCallbacks.splice(e, 1);
        }
      }
      this.event = t;
      if (this.touchEndCallback) {
        this.touchEndCallback.call(this.callbackContext, t);
      }
      if (this.preventDefault) {
        t.preventDefault();
      }
      for (var e = 0; e < t.changedTouches.length; e++) {
        this.game.input.stopPointer(t.changedTouches[e]);
      }
    },
    stop: function () {
      if (this.game.device.touch) {
        this.game.canvas.removeEventListener("touchstart", this._onTouchStart);
        this.game.canvas.removeEventListener("touchmove", this._onTouchMove);
        this.game.canvas.removeEventListener("touchend", this._onTouchEnd);
        this.game.canvas.removeEventListener("touchenter", this._onTouchEnter);
        this.game.canvas.removeEventListener("touchleave", this._onTouchLeave);
        this.game.canvas.removeEventListener("touchcancel", this._onTouchCancel);
      }
    }
  };
  a.Touch.prototype.constructor = a.Touch;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.InputHandler = function (t) {
    this.sprite = t;
    this.game = t.game;
    this.enabled = false;
    this.checked = false;
    this.priorityID = 0;
    this.useHandCursor = false;
    this._setHandCursor = false;
    this.isDragged = false;
    this.allowHorizontalDrag = true;
    this.allowVerticalDrag = true;
    this.bringToTop = false;
    this.snapOffset = null;
    this.snapOnDrag = false;
    this.snapOnRelease = false;
    this.snapX = 0;
    this.snapY = 0;
    this.snapOffsetX = 0;
    this.snapOffsetY = 0;
    this.pixelPerfectOver = false;
    this.pixelPerfectClick = false;
    this.pixelPerfectAlpha = 255;
    this.draggable = false;
    this.boundsRect = null;
    this.boundsSprite = null;
    this.scaleLayer = false;
    this.dragOffset = new a.Point();
    this.dragFromCenter = false;
    this.dragStopBlocksInputUp = false;
    this.dragStartPoint = new a.Point();
    this.dragDistanceThreshold = 0;
    this.dragTimeThreshold = 0;
    this.downPoint = new a.Point();
    this.snapPoint = new a.Point();
    this._dragPoint = new a.Point();
    this._dragPhase = false;
    this._pendingDrag = false;
    this._dragTimePass = false;
    this._dragDistancePass = false;
    this._wasEnabled = false;
    this._tempPoint = new a.Point();
    this._pointerData = [];
    this._pointerData.push({
      id: 0,
      x: 0,
      y: 0,
      camX: 0,
      camY: 0,
      isDown: false,
      isUp: false,
      isOver: false,
      isOut: false,
      timeOver: 0,
      timeOut: 0,
      timeDown: 0,
      timeUp: 0,
      downDuration: 0,
      isDragged: false
    });
  };
  a.InputHandler.prototype = {
    start: function (t, e) {
      t = t || 0;
      if (e === undefined) {
        e = false;
      }
      if (this.enabled === false) {
        this.game.input.interactiveItems.add(this);
        this.useHandCursor = e;
        this.priorityID = t;
        for (var i = 0; i < 10; i++) {
          this._pointerData[i] = {
            id: i,
            x: 0,
            y: 0,
            isDown: false,
            isUp: false,
            isOver: false,
            isOut: false,
            timeOver: 0,
            timeOut: 0,
            timeDown: 0,
            timeUp: 0,
            downDuration: 0,
            isDragged: false
          };
        }
        this.snapOffset = new a.Point();
        this.enabled = true;
        this._wasEnabled = true;
      }
      this.sprite.events.onAddedToGroup.add(this.addedToGroup, this);
      this.sprite.events.onRemovedFromGroup.add(this.removedFromGroup, this);
      return this.sprite;
    },
    addedToGroup: function () {
      if (!this._dragPhase) {
        if (this._wasEnabled && !this.enabled) {
          this.start();
        }
      }
    },
    removedFromGroup: function () {
      if (!this._dragPhase) {
        if (this.enabled) {
          this._wasEnabled = true;
          this.stop();
        } else {
          this._wasEnabled = false;
        }
      }
    },
    reset: function () {
      this.enabled = false;
      for (var t = 0; t < 10; t++) {
        this._pointerData[t] = {
          id: t,
          x: 0,
          y: 0,
          isDown: false,
          isUp: false,
          isOver: false,
          isOut: false,
          timeOver: 0,
          timeOut: 0,
          timeDown: 0,
          timeUp: 0,
          downDuration: 0,
          isDragged: false
        };
      }
    },
    stop: function () {
      if (this.enabled !== false) {
        this.enabled = false;
        this.game.input.interactiveItems.remove(this);
      }
    },
    destroy: function () {
      if (this.sprite) {
        if (this._setHandCursor) {
          this.game.canvas.style.cursor = "default";
          this._setHandCursor = false;
        }
        this.enabled = false;
        this.game.input.interactiveItems.remove(this);
        this._pointerData.length = 0;
        this.boundsRect = null;
        this.boundsSprite = null;
        this.sprite = null;
      }
    },
    validForInput: function (t, e, i = true) {
      return !!this.enabled && this.sprite.scale.x !== 0 && this.sprite.scale.y !== 0 && !(this.priorityID < this.game.input.minPriorityID) && (!this.sprite.parent || !this.sprite.parent.ignoreChildInput) && (!!i || !this.pixelPerfectClick && !this.pixelPerfectOver) && (this.priorityID > t || this.priorityID === t && this.sprite.renderOrderID > e);
    },
    isPixelPerfect: function () {
      return this.pixelPerfectClick || this.pixelPerfectOver;
    },
    pointerX: function (t) {
      t = t || 0;
      return this._pointerData[t].x;
    },
    pointerY: function (t) {
      t = t || 0;
      return this._pointerData[t].y;
    },
    pointerDown: function (t) {
      t = t || 0;
      return this._pointerData[t].isDown;
    },
    pointerUp: function (t) {
      t = t || 0;
      return this._pointerData[t].isUp;
    },
    pointerTimeDown: function (t) {
      t = t || 0;
      return this._pointerData[t].timeDown;
    },
    pointerTimeUp: function (t) {
      t = t || 0;
      return this._pointerData[t].timeUp;
    },
    pointerOver: function (t) {
      if (!this.enabled) {
        return false;
      }
      if (t === undefined) {
        for (var e = 0; e < 10; e++) {
          if (this._pointerData[e].isOver) {
            return true;
          }
        }
        return false;
      }
      return this._pointerData[t].isOver;
    },
    pointerOut: function (t) {
      if (!this.enabled) {
        return false;
      }
      if (t !== undefined) {
        return this._pointerData[t].isOut;
      }
      for (var e = 0; e < 10; e++) {
        if (this._pointerData[e].isOut) {
          return true;
        }
      }
    },
    pointerTimeOver: function (t) {
      t = t || 0;
      return this._pointerData[t].timeOver;
    },
    pointerTimeOut: function (t) {
      t = t || 0;
      return this._pointerData[t].timeOut;
    },
    pointerDragged: function (t) {
      t = t || 0;
      return this._pointerData[t].isDragged;
    },
    checkPointerDown: function (t, e) {
      return !!t.isDown && !!this.enabled && !!this.sprite && !!this.sprite.parent && !!this.sprite.visible && !!this.sprite.parent.visible && this.sprite.worldScale.x !== 0 && this.sprite.worldScale.y !== 0 && !!this.game.input.hitTest(this.sprite, t, this._tempPoint) && (e === undefined && (e = false), !!e || !this.pixelPerfectClick || this.checkPixel(this._tempPoint.x, this._tempPoint.y));
    },
    checkPointerOver: function (t, e) {
      return !!this.enabled && !!this.sprite && !!this.sprite.parent && !!this.sprite.visible && !!this.sprite.parent.visible && this.sprite.worldScale.x !== 0 && this.sprite.worldScale.y !== 0 && !!this.game.input.hitTest(this.sprite, t, this._tempPoint) && (e === undefined && (e = false), !!e || !this.pixelPerfectOver || this.checkPixel(this._tempPoint.x, this._tempPoint.y));
    },
    checkPixel: function (t, e, i) {
      if (this.sprite.texture.baseTexture.source) {
        if (t === null && e === null) {
          this.game.input.getLocalPosition(this.sprite, i, this._tempPoint);
          var t = this._tempPoint.x;
          var e = this._tempPoint.y;
        }
        if (this.sprite.anchor.x !== 0) {
          t -= -this.sprite.texture.frame.width * this.sprite.anchor.x;
        }
        if (this.sprite.anchor.y !== 0) {
          e -= -this.sprite.texture.frame.height * this.sprite.anchor.y;
        }
        t += this.sprite.texture.frame.x;
        e += this.sprite.texture.frame.y;
        if (this.sprite.texture.trim && (t -= this.sprite.texture.trim.x, e -= this.sprite.texture.trim.y, t < this.sprite.texture.crop.x || t > this.sprite.texture.crop.right || e < this.sprite.texture.crop.y || e > this.sprite.texture.crop.bottom)) {
          this._dx = t;
          this._dy = e;
          return false;
        }
        this._dx = t;
        this._dy = e;
        this.game.input.hitContext.clearRect(0, 0, 1, 1);
        this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source, t, e, 1, 1, 0, 0, 1, 1);
        if (this.game.input.hitContext.getImageData(0, 0, 1, 1).data[3] >= this.pixelPerfectAlpha) {
          return true;
        }
      }
      return false;
    },
    update: function (t) {
      if (this.sprite !== null && this.sprite.parent !== undefined) {
        if (this.enabled && this.sprite.visible && this.sprite.parent.visible) {
          if (this._pendingDrag) {
            this._dragDistancePass ||= a.Math.distance(t.x, t.y, this.downPoint.x, this.downPoint.y) >= this.dragDistanceThreshold;
            if (this._dragDistancePass && this._dragTimePass) {
              this.startDrag(t);
            }
            return true;
          } else if (this.draggable && this._draggedPointerID === t.id) {
            return this.updateDrag(t, false);
          } else if (this._pointerData[t.id].isOver) {
            if (this.checkPointerOver(t)) {
              this._pointerData[t.id].x = t.x - this.sprite.x;
              this._pointerData[t.id].y = t.y - this.sprite.y;
              return true;
            } else {
              this._pointerOutHandler(t);
              return false;
            }
          } else {
            return undefined;
          }
        } else {
          this._pointerOutHandler(t);
          return false;
        }
      }
    },
    _pointerOverHandler: function (t, e) {
      if (this.sprite !== null) {
        var i = this._pointerData[t.id];
        if (i.isOver === false || t.dirty) {
          var s = i.isOver === false;
          i.isOver = true;
          i.isOut = false;
          i.timeOver = this.game.time.time;
          i.x = t.x - this.sprite.x;
          i.y = t.y - this.sprite.y;
          if (this.useHandCursor && i.isDragged === false) {
            this.game.canvas.style.cursor = "pointer";
            this._setHandCursor = true;
          }
          if (!e && s && this.sprite && this.sprite.events) {
            this.sprite.events.onInputOver$dispatch(this.sprite, t);
          }
          if (this.sprite.parent && this.sprite.parent.type === a.GROUP) {
            this.sprite.parent.onChildInputOver.dispatch(this.sprite, t);
          }
        }
      }
    },
    _pointerOutHandler: function (t, e) {
      if (this.sprite !== null) {
        var i = this._pointerData[t.id];
        i.isOver = false;
        i.isOut = true;
        i.timeOut = this.game.time.time;
        if (this.useHandCursor && i.isDragged === false) {
          this.game.canvas.style.cursor = "default";
          this._setHandCursor = false;
        }
        if (!e && this.sprite && this.sprite.events) {
          this.sprite.events.onInputOut$dispatch(this.sprite, t);
          if (this.sprite && this.sprite.parent && this.sprite.parent.type === a.GROUP) {
            this.sprite.parent.onChildInputOut.dispatch(this.sprite, t);
          }
        }
      }
    },
    _touchedHandler: function (t) {
      if (this.sprite !== null) {
        var e = this._pointerData[t.id];
        if (!e.isDown && e.isOver) {
          if (this.pixelPerfectClick && !this.checkPixel(null, null, t)) {
            return;
          }
          e.isDown = true;
          e.isUp = false;
          e.timeDown = this.game.time.time;
          this.downPoint.set(t.x, t.y);
          t.dirty = true;
          if (this.sprite && this.sprite.events && (this.sprite.events.onInputDown$dispatch(this.sprite, t), this.sprite && this.sprite.parent && this.sprite.parent.type === a.GROUP && this.sprite.parent.onChildInputDown.dispatch(this.sprite, t), this.sprite === null)) {
            return;
          }
          if (this.draggable && this.isDragged === false) {
            if (this.dragTimeThreshold === 0 && this.dragDistanceThreshold === 0) {
              this.startDrag(t);
            } else {
              this._pendingDrag = true;
              this._dragDistancePass = this.dragDistanceThreshold === 0;
              if (this.dragTimeThreshold > 0) {
                this._dragTimePass = false;
                this.game.time.events.add(this.dragTimeThreshold, this.dragTimeElapsed, this, t);
              } else {
                this._dragTimePass = true;
              }
            }
          }
          if (this.bringToTop) {
            this.sprite.bringToTop();
          }
        }
      }
    },
    dragTimeElapsed: function (t) {
      this._dragTimePass = true;
      if (this._pendingDrag && this.sprite && this._dragDistancePass) {
        this.startDrag(t);
      }
    },
    _releasedHandler: function (t) {
      if (this.sprite !== null) {
        var e = this._pointerData[t.id];
        if (e.isDown && t.isUp) {
          e.isDown = false;
          e.isUp = true;
          e.timeUp = this.game.time.time;
          e.downDuration = e.timeUp - e.timeDown;
          var i = this.checkPointerOver(t);
          if (this.sprite && this.sprite.events) {
            if (!this.dragStopBlocksInputUp || !!this.dragStopBlocksInputUp && (!this.draggable || !this.isDragged || this._draggedPointerID !== t.id)) {
              this.sprite.events.onInputUp$dispatch(this.sprite, t, i);
            }
            if (this.sprite && this.sprite.parent && this.sprite.parent.type === a.GROUP) {
              this.sprite.parent.onChildInputUp.dispatch(this.sprite, t, i);
            }
            i &&= this.checkPointerOver(t);
          }
          e.isOver = i;
          if (!i && this.useHandCursor) {
            this.game.canvas.style.cursor = "default";
            this._setHandCursor = false;
          }
          t.dirty = true;
          this._pendingDrag = false;
          if (this.draggable && this.isDragged && this._draggedPointerID === t.id) {
            this.stopDrag(t);
          }
        }
      }
    },
    updateDrag: function (t, e = false) {
      if (t.isUp) {
        this.stopDrag(t);
        return false;
      }
      var i = this.globalToLocalX(t.x) + this._dragPoint.x + this.dragOffset.x;
      var s = this.globalToLocalY(t.y) + this._dragPoint.y + this.dragOffset.y;
      if (this.sprite.fixedToCamera) {
        if (this.allowHorizontalDrag) {
          this.sprite.cameraOffset.x = i;
        }
        if (this.allowVerticalDrag) {
          this.sprite.cameraOffset.y = s;
        }
        if (this.boundsRect) {
          this.checkBoundsRect();
        }
        if (this.boundsSprite) {
          this.checkBoundsSprite();
        }
        if (this.snapOnDrag) {
          this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX;
          this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY;
          this.snapPoint.set(this.sprite.cameraOffset.x, this.sprite.cameraOffset.y);
        }
      } else {
        var n = this.game.camera.x - this._pointerData[t.id].camX;
        var a = this.game.camera.y - this._pointerData[t.id].camY;
        if (this.allowHorizontalDrag) {
          this.sprite.x = i + n;
        }
        if (this.allowVerticalDrag) {
          this.sprite.y = s + a;
        }
        if (this.boundsRect) {
          this.checkBoundsRect();
        }
        if (this.boundsSprite) {
          this.checkBoundsSprite();
        }
        if (this.snapOnDrag) {
          this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX;
          this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY;
          this.snapPoint.set(this.sprite.x, this.sprite.y);
        }
      }
      this.sprite.events.onDragUpdate.dispatch(this.sprite, t, i, s, this.snapPoint, e);
      return true;
    },
    justOver: function (t, e) {
      t = t || 0;
      e = e || 500;
      return this._pointerData[t].isOver && this.overDuration(t) < e;
    },
    justOut: function (t, e) {
      t = t || 0;
      e = e || 500;
      return this._pointerData[t].isOut && this.game.time.time - this._pointerData[t].timeOut < e;
    },
    justPressed: function (t, e) {
      t = t || 0;
      e = e || 500;
      return this._pointerData[t].isDown && this.downDuration(t) < e;
    },
    justReleased: function (t, e) {
      t = t || 0;
      e = e || 500;
      return this._pointerData[t].isUp && this.game.time.time - this._pointerData[t].timeUp < e;
    },
    overDuration: function (t) {
      t = t || 0;
      if (this._pointerData[t].isOver) {
        return this.game.time.time - this._pointerData[t].timeOver;
      } else {
        return -1;
      }
    },
    downDuration: function (t) {
      t = t || 0;
      if (this._pointerData[t].isDown) {
        return this.game.time.time - this._pointerData[t].timeDown;
      } else {
        return -1;
      }
    },
    enableDrag: function (t = false, e = false, i = false, s = 255, n = null, o = null) {
      this._dragPoint = new a.Point();
      this.draggable = true;
      this.bringToTop = e;
      this.dragOffset = new a.Point();
      this.dragFromCenter = t;
      this.pixelPerfectClick = i;
      this.pixelPerfectAlpha = s;
      if (n) {
        this.boundsRect = n;
      }
      if (o) {
        this.boundsSprite = o;
      }
    },
    disableDrag: function () {
      if (this._pointerData) {
        for (var t = 0; t < 10; t++) {
          this._pointerData[t].isDragged = false;
        }
      }
      this.draggable = false;
      this.isDragged = false;
      this._draggedPointerID = -1;
      this._pendingDrag = false;
    },
    startDrag: function (t) {
      var e = this.sprite.x;
      var i = this.sprite.y;
      this.isDragged = true;
      this._draggedPointerID = t.id;
      this._pointerData[t.id].camX = this.game.camera.x;
      this._pointerData[t.id].camY = this.game.camera.y;
      this._pointerData[t.id].isDragged = true;
      if (this.sprite.fixedToCamera) {
        if (this.dragFromCenter) {
          var s = this.sprite.getBounds();
          this.sprite.cameraOffset.x = this.globalToLocalX(t.x) + (this.sprite.cameraOffset.x - s.centerX);
          this.sprite.cameraOffset.y = this.globalToLocalY(t.y) + (this.sprite.cameraOffset.y - s.centerY);
        }
        this._dragPoint.setTo(this.sprite.cameraOffset.x - t.x, this.sprite.cameraOffset.y - t.y);
      } else {
        if (this.dragFromCenter) {
          var s = this.sprite.getBounds();
          this.sprite.x = this.globalToLocalX(t.x) + (this.sprite.x - s.centerX);
          this.sprite.y = this.globalToLocalY(t.y) + (this.sprite.y - s.centerY);
        }
        this._dragPoint.setTo(this.sprite.x - this.globalToLocalX(t.x), this.sprite.y - this.globalToLocalY(t.y));
      }
      this.updateDrag(t, true);
      if (this.bringToTop) {
        this._dragPhase = true;
        this.sprite.bringToTop();
      }
      this.dragStartPoint.set(e, i);
      this.sprite.events.onDragStart$dispatch(this.sprite, t, e, i);
      this._pendingDrag = false;
    },
    globalToLocalX: function (t) {
      if (this.scaleLayer) {
        t -= this.game.scale.grid.boundsFluid.x;
        t *= this.game.scale.grid.scaleFluidInversed.x;
      }
      return t;
    },
    globalToLocalY: function (t) {
      if (this.scaleLayer) {
        t -= this.game.scale.grid.boundsFluid.y;
        t *= this.game.scale.grid.scaleFluidInversed.y;
      }
      return t;
    },
    stopDrag: function (t) {
      this.isDragged = false;
      this._draggedPointerID = -1;
      this._pointerData[t.id].isDragged = false;
      this._dragPhase = false;
      this._pendingDrag = false;
      if (this.snapOnRelease) {
        if (this.sprite.fixedToCamera) {
          this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX;
          this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY;
        } else {
          this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX;
          this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY;
        }
      }
      this.sprite.events.onDragStop$dispatch(this.sprite, t);
      if (this.checkPointerOver(t) === false) {
        this._pointerOutHandler(t);
      }
    },
    setDragLock: function (t = true, e = true) {
      this.allowHorizontalDrag = t;
      this.allowVerticalDrag = e;
    },
    enableSnap: function (t, e, i = true, s = false, n = 0, a = 0) {
      this.snapX = t;
      this.snapY = e;
      this.snapOffsetX = n;
      this.snapOffsetY = a;
      this.snapOnDrag = i;
      this.snapOnRelease = s;
    },
    disableSnap: function () {
      this.snapOnDrag = false;
      this.snapOnRelease = false;
    },
    checkBoundsRect: function () {
      if (this.sprite.fixedToCamera) {
        if (this.sprite.cameraOffset.x < this.boundsRect.left) {
          this.sprite.cameraOffset.x = this.boundsRect.left;
        } else if (this.sprite.cameraOffset.x + this.sprite.width > this.boundsRect.right) {
          this.sprite.cameraOffset.x = this.boundsRect.right - this.sprite.width;
        }
        if (this.sprite.cameraOffset.y < this.boundsRect.top) {
          this.sprite.cameraOffset.y = this.boundsRect.top;
        } else if (this.sprite.cameraOffset.y + this.sprite.height > this.boundsRect.bottom) {
          this.sprite.cameraOffset.y = this.boundsRect.bottom - this.sprite.height;
        }
      } else {
        if (this.sprite.left < this.boundsRect.left) {
          this.sprite.x = this.boundsRect.x + this.sprite.offsetX;
        } else if (this.sprite.right > this.boundsRect.right) {
          this.sprite.x = this.boundsRect.right - (this.sprite.width - this.sprite.offsetX);
        }
        if (this.sprite.top < this.boundsRect.top) {
          this.sprite.y = this.boundsRect.top + this.sprite.offsetY;
        } else if (this.sprite.bottom > this.boundsRect.bottom) {
          this.sprite.y = this.boundsRect.bottom - (this.sprite.height - this.sprite.offsetY);
        }
      }
    },
    checkBoundsSprite: function () {
      if (this.sprite.fixedToCamera && this.boundsSprite.fixedToCamera) {
        if (this.sprite.cameraOffset.x < this.boundsSprite.cameraOffset.x) {
          this.sprite.cameraOffset.x = this.boundsSprite.cameraOffset.x;
        } else if (this.sprite.cameraOffset.x + this.sprite.width > this.boundsSprite.cameraOffset.x + this.boundsSprite.width) {
          this.sprite.cameraOffset.x = this.boundsSprite.cameraOffset.x + this.boundsSprite.width - this.sprite.width;
        }
        if (this.sprite.cameraOffset.y < this.boundsSprite.cameraOffset.y) {
          this.sprite.cameraOffset.y = this.boundsSprite.cameraOffset.y;
        } else if (this.sprite.cameraOffset.y + this.sprite.height > this.boundsSprite.cameraOffset.y + this.boundsSprite.height) {
          this.sprite.cameraOffset.y = this.boundsSprite.cameraOffset.y + this.boundsSprite.height - this.sprite.height;
        }
      } else {
        if (this.sprite.left < this.boundsSprite.left) {
          this.sprite.x = this.boundsSprite.left + this.sprite.offsetX;
        } else if (this.sprite.right > this.boundsSprite.right) {
          this.sprite.x = this.boundsSprite.right - (this.sprite.width - this.sprite.offsetX);
        }
        if (this.sprite.top < this.boundsSprite.top) {
          this.sprite.y = this.boundsSprite.top + this.sprite.offsetY;
        } else if (this.sprite.bottom > this.boundsSprite.bottom) {
          this.sprite.y = this.boundsSprite.bottom - (this.sprite.height - this.sprite.offsetY);
        }
      }
    }
  };
  a.InputHandler.prototype.constructor = a.InputHandler;
  /**
  * @author       @karlmacklin <tacklemcclean@gmail.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Gamepad = function (t) {
    this.game = t;
    this._gamepadIndexMap = {};
    this._rawPads = [];
    this._active = false;
    this.enabled = true;
    this._gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads || navigator.userAgent.indexOf("Firefox/") !== -1 || !!navigator.getGamepads;
    this._prevRawGamepadTypes = [];
    this._prevTimestamps = [];
    this.callbackContext = this;
    this.onConnectCallback = null;
    this.onDisconnectCallback = null;
    this.onDownCallback = null;
    this.onUpCallback = null;
    this.onAxisCallback = null;
    this.onFloatCallback = null;
    this._ongamepadconnected = null;
    this._gamepaddisconnected = null;
    this._gamepads = [new a.SinglePad(t, this), new a.SinglePad(t, this), new a.SinglePad(t, this), new a.SinglePad(t, this)];
  };
  a.Gamepad.prototype = {
    addCallbacks: function (t, e) {
      if (e !== undefined) {
        this.onConnectCallback = typeof e.onConnect == "function" ? e.onConnect : this.onConnectCallback;
        this.onDisconnectCallback = typeof e.onDisconnect == "function" ? e.onDisconnect : this.onDisconnectCallback;
        this.onDownCallback = typeof e.onDown == "function" ? e.onDown : this.onDownCallback;
        this.onUpCallback = typeof e.onUp == "function" ? e.onUp : this.onUpCallback;
        this.onAxisCallback = typeof e.onAxis == "function" ? e.onAxis : this.onAxisCallback;
        this.onFloatCallback = typeof e.onFloat == "function" ? e.onFloat : this.onFloatCallback;
        this.callbackContext = t;
      }
    },
    start: function () {
      if (!this._active) {
        this._active = true;
        var t = this;
        this._onGamepadConnected = function (e) {
          return t.onGamepadConnected(e);
        };
        this._onGamepadDisconnected = function (e) {
          return t.onGamepadDisconnected(e);
        };
        window.addEventListener("gamepadconnected", this._onGamepadConnected, false);
        window.addEventListener("gamepaddisconnected", this._onGamepadDisconnected, false);
      }
    },
    onGamepadConnected: function (t) {
      var e = t.gamepad;
      this._rawPads.push(e);
      this._gamepads[e.index].connect(e);
    },
    onGamepadDisconnected: function (t) {
      var e = t.gamepad;
      for (var i in this._rawPads) {
        if (this._rawPads[i].index === e.index) {
          this._rawPads.splice(i, 1);
        }
      }
      this._gamepads[e.index].disconnect();
    },
    update: function () {
      this._pollGamepads();
      this.pad1.pollStatus();
      this.pad2.pollStatus();
      this.pad3.pollStatus();
      this.pad4.pollStatus();
    },
    _pollGamepads: function () {
      if (this._active) {
        if (navigator.getGamepads) {
          var t = navigator.getGamepads();
        } else if (navigator.webkitGetGamepads) {
          var t = navigator.webkitGetGamepads();
        } else if (navigator.webkitGamepads) {
          var t = navigator.webkitGamepads();
        }
        if (t) {
          this._rawPads = [];
          for (var e = false, i = 0; i < t.length && (typeof t[i] !== this._prevRawGamepadTypes[i] && (e = true, this._prevRawGamepadTypes[i] = typeof t[i]), t[i] && this._rawPads.push(t[i]), i !== 3); i++);
          for (var s = 0; s < this._gamepads.length; s++) {
            this._gamepads[s]._rawPad = this._rawPads[s];
          }
          if (e) {
            var n = {
              rawIndices: {},
              padIndices: {}
            };
            var a;
            for (var o = 0; o < this._gamepads.length; o++) {
              a = this._gamepads[o];
              if (a.connected) {
                for (var r = 0; r < this._rawPads.length; r++) {
                  if (this._rawPads[r].index === a.index) {
                    n.rawIndices[a.index] = true;
                    n.padIndices[o] = true;
                  }
                }
              }
            }
            for (var h = 0; h < this._gamepads.length; h++) {
              a = this._gamepads[h];
              if (!n.padIndices[h]) {
                if (this._rawPads.length < 1) {
                  a.disconnect();
                }
                for (var l = 0; l < this._rawPads.length && !n.padIndices[h]; l++) {
                  var c = this._rawPads[l];
                  if (c) {
                    if (n.rawIndices[c.index]) {
                      a.disconnect();
                      continue;
                    }
                    a.connect(c);
                    n.rawIndices[c.index] = true;
                    n.padIndices[h] = true;
                  } else {
                    a.disconnect();
                  }
                }
              }
            }
          }
        }
      }
    },
    setDeadZones: function (t) {
      for (var e = 0; e < this._gamepads.length; e++) {
        this._gamepads[e].deadZone = t;
      }
    },
    stop: function () {
      this._active = false;
      window.removeEventListener("gamepadconnected", this._onGamepadConnected);
      window.removeEventListener("gamepaddisconnected", this._onGamepadDisconnected);
    },
    reset: function () {
      this.update();
      for (var t = 0; t < this._gamepads.length; t++) {
        this._gamepads[t].reset();
      }
    },
    justPressed: function (t, e) {
      for (var i = 0; i < this._gamepads.length; i++) {
        if (this._gamepads[i].justPressed(t, e) === true) {
          return true;
        }
      }
      return false;
    },
    justReleased: function (t, e) {
      for (var i = 0; i < this._gamepads.length; i++) {
        if (this._gamepads[i].justReleased(t, e) === true) {
          return true;
        }
      }
      return false;
    },
    isDown: function (t) {
      for (var e = 0; e < this._gamepads.length; e++) {
        if (this._gamepads[e].isDown(t) === true) {
          return true;
        }
      }
      return false;
    },
    destroy: function () {
      this.stop();
      for (var t = 0; t < this._gamepads.length; t++) {
        this._gamepads[t].destroy();
      }
    }
  };
  a.Gamepad.prototype.constructor = a.Gamepad;
  Object.defineProperty(a.Gamepad.prototype, "active", {
    get: function () {
      return this._active;
    }
  });
  Object.defineProperty(a.Gamepad.prototype, "supported", {
    get: function () {
      return this._gamepadSupportAvailable;
    }
  });
  Object.defineProperty(a.Gamepad.prototype, "padsConnected", {
    get: function () {
      return this._rawPads.length;
    }
  });
  Object.defineProperty(a.Gamepad.prototype, "pad1", {
    get: function () {
      return this._gamepads[0];
    }
  });
  Object.defineProperty(a.Gamepad.prototype, "pad2", {
    get: function () {
      return this._gamepads[1];
    }
  });
  Object.defineProperty(a.Gamepad.prototype, "pad3", {
    get: function () {
      return this._gamepads[2];
    }
  });
  Object.defineProperty(a.Gamepad.prototype, "pad4", {
    get: function () {
      return this._gamepads[3];
    }
  });
  a.Gamepad.BUTTON_0 = 0;
  a.Gamepad.BUTTON_1 = 1;
  a.Gamepad.BUTTON_2 = 2;
  a.Gamepad.BUTTON_3 = 3;
  a.Gamepad.BUTTON_4 = 4;
  a.Gamepad.BUTTON_5 = 5;
  a.Gamepad.BUTTON_6 = 6;
  a.Gamepad.BUTTON_7 = 7;
  a.Gamepad.BUTTON_8 = 8;
  a.Gamepad.BUTTON_9 = 9;
  a.Gamepad.BUTTON_10 = 10;
  a.Gamepad.BUTTON_11 = 11;
  a.Gamepad.BUTTON_12 = 12;
  a.Gamepad.BUTTON_13 = 13;
  a.Gamepad.BUTTON_14 = 14;
  a.Gamepad.BUTTON_15 = 15;
  a.Gamepad.AXIS_0 = 0;
  a.Gamepad.AXIS_1 = 1;
  a.Gamepad.AXIS_2 = 2;
  a.Gamepad.AXIS_3 = 3;
  a.Gamepad.AXIS_4 = 4;
  a.Gamepad.AXIS_5 = 5;
  a.Gamepad.AXIS_6 = 6;
  a.Gamepad.AXIS_7 = 7;
  a.Gamepad.AXIS_8 = 8;
  a.Gamepad.AXIS_9 = 9;
  a.Gamepad.XBOX360_A = 0;
  a.Gamepad.XBOX360_B = 1;
  a.Gamepad.XBOX360_X = 2;
  a.Gamepad.XBOX360_Y = 3;
  a.Gamepad.XBOX360_LEFT_BUMPER = 4;
  a.Gamepad.XBOX360_RIGHT_BUMPER = 5;
  a.Gamepad.XBOX360_LEFT_TRIGGER = 6;
  a.Gamepad.XBOX360_RIGHT_TRIGGER = 7;
  a.Gamepad.XBOX360_BACK = 8;
  a.Gamepad.XBOX360_START = 9;
  a.Gamepad.XBOX360_STICK_LEFT_BUTTON = 10;
  a.Gamepad.XBOX360_STICK_RIGHT_BUTTON = 11;
  a.Gamepad.XBOX360_DPAD_LEFT = 14;
  a.Gamepad.XBOX360_DPAD_RIGHT = 15;
  a.Gamepad.XBOX360_DPAD_UP = 12;
  a.Gamepad.XBOX360_DPAD_DOWN = 13;
  a.Gamepad.XBOX360_STICK_LEFT_X = 0;
  a.Gamepad.XBOX360_STICK_LEFT_Y = 1;
  a.Gamepad.XBOX360_STICK_RIGHT_X = 2;
  a.Gamepad.XBOX360_STICK_RIGHT_Y = 3;
  a.Gamepad.PS3XC_X = 0;
  a.Gamepad.PS3XC_CIRCLE = 1;
  a.Gamepad.PS3XC_SQUARE = 2;
  a.Gamepad.PS3XC_TRIANGLE = 3;
  a.Gamepad.PS3XC_L1 = 4;
  a.Gamepad.PS3XC_R1 = 5;
  a.Gamepad.PS3XC_L2 = 6;
  a.Gamepad.PS3XC_R2 = 7;
  a.Gamepad.PS3XC_SELECT = 8;
  a.Gamepad.PS3XC_START = 9;
  a.Gamepad.PS3XC_STICK_LEFT_BUTTON = 10;
  a.Gamepad.PS3XC_STICK_RIGHT_BUTTON = 11;
  a.Gamepad.PS3XC_DPAD_UP = 12;
  a.Gamepad.PS3XC_DPAD_DOWN = 13;
  a.Gamepad.PS3XC_DPAD_LEFT = 14;
  a.Gamepad.PS3XC_DPAD_RIGHT = 15;
  a.Gamepad.PS3XC_STICK_LEFT_X = 0;
  a.Gamepad.PS3XC_STICK_LEFT_Y = 1;
  a.Gamepad.PS3XC_STICK_RIGHT_X = 2;
  a.Gamepad.PS3XC_STICK_RIGHT_Y = 3;
  /**
  * @author       @karlmacklin <tacklemcclean@gmail.com>
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.SinglePad = function (t, e) {
    this.game = t;
    this.index = null;
    this.connected = false;
    this.callbackContext = this;
    this.onConnectCallback = null;
    this.onDisconnectCallback = null;
    this.onDownCallback = null;
    this.onUpCallback = null;
    this.onAxisCallback = null;
    this.onFloatCallback = null;
    this.deadZone = 0.26;
    this._padParent = e;
    this._rawPad = null;
    this._prevTimestamp = null;
    this._buttons = [];
    this._buttonsLen = 0;
    this._axes = [];
    this._axesLen = 0;
  };
  a.SinglePad.prototype = {
    addCallbacks: function (t, e) {
      if (e !== undefined) {
        this.onConnectCallback = typeof e.onConnect == "function" ? e.onConnect : this.onConnectCallback;
        this.onDisconnectCallback = typeof e.onDisconnect == "function" ? e.onDisconnect : this.onDisconnectCallback;
        this.onDownCallback = typeof e.onDown == "function" ? e.onDown : this.onDownCallback;
        this.onUpCallback = typeof e.onUp == "function" ? e.onUp : this.onUpCallback;
        this.onAxisCallback = typeof e.onAxis == "function" ? e.onAxis : this.onAxisCallback;
        this.onFloatCallback = typeof e.onFloat == "function" ? e.onFloat : this.onFloatCallback;
        this.callbackContext = t;
      }
    },
    getButton: function (t) {
      if (this._buttons[t]) {
        return this._buttons[t];
      } else {
        return null;
      }
    },
    pollStatus: function () {
      if (this.connected && this.game.input.enabled && this.game.input.gamepad.enabled && (!this._rawPad.timestamp || this._rawPad.timestamp !== this._prevTimestamp)) {
        for (var t = 0; t < this._buttonsLen; t++) {
          var e = isNaN(this._rawPad.buttons[t]) ? this._rawPad.buttons[t].value : this._rawPad.buttons[t];
          if (e !== this._buttons[t].value) {
            if (e === 1) {
              this.processButtonDown(t, e);
            } else if (e === 0) {
              this.processButtonUp(t, e);
            } else {
              this.processButtonFloat(t, e);
            }
          }
        }
        for (var i = 0; i < this._axesLen; i++) {
          var s = this._rawPad.axes[i];
          if (s > 0 && s > this.deadZone || s < 0 && s < -this.deadZone) {
            this.processAxisChange(i, s);
          } else {
            this.processAxisChange(i, 0);
          }
        }
        this._prevTimestamp = this._rawPad.timestamp;
      }
    },
    connect: function (t) {
      var e = !this.connected;
      this.connected = true;
      this.index = t.index;
      this._rawPad = t;
      this._buttons = [];
      this._buttonsLen = t.buttons.length;
      this._axes = [];
      this._axesLen = t.axes.length;
      for (var i = 0; i < this._axesLen; i++) {
        this._axes[i] = t.axes[i];
      }
      for (var s in t.buttons) {
        s = parseInt(s, 10);
        this._buttons[s] = new a.DeviceButton(this, s);
      }
      if (e && this._padParent.onConnectCallback) {
        this._padParent.onConnectCallback.call(this._padParent.callbackContext, this.index);
      }
      if (e && this.onConnectCallback) {
        this.onConnectCallback.call(this.callbackContext);
      }
    },
    disconnect: function () {
      var t = this.connected;
      var e = this.index;
      this.connected = false;
      this.index = null;
      this._rawPad = undefined;
      for (var i = 0; i < this._buttonsLen; i++) {
        this._buttons[i].destroy();
      }
      this._buttons = [];
      this._buttonsLen = 0;
      this._axes = [];
      this._axesLen = 0;
      if (t && this._padParent.onDisconnectCallback) {
        this._padParent.onDisconnectCallback.call(this._padParent.callbackContext, e);
      }
      if (t && this.onDisconnectCallback) {
        this.onDisconnectCallback.call(this.callbackContext);
      }
    },
    destroy: function () {
      this._rawPad = undefined;
      for (var t = 0; t < this._buttonsLen; t++) {
        this._buttons[t].destroy();
      }
      this._buttons = [];
      this._buttonsLen = 0;
      this._axes = [];
      this._axesLen = 0;
      this.onConnectCallback = null;
      this.onDisconnectCallback = null;
      this.onDownCallback = null;
      this.onUpCallback = null;
      this.onAxisCallback = null;
      this.onFloatCallback = null;
    },
    processAxisChange: function (t, e) {
      if (this._axes[t] !== e) {
        this._axes[t] = e;
        if (this._padParent.onAxisCallback) {
          this._padParent.onAxisCallback.call(this._padParent.callbackContext, this, t, e);
        }
        if (this.onAxisCallback) {
          this.onAxisCallback.call(this.callbackContext, this, t, e);
        }
      }
    },
    processButtonDown: function (t, e) {
      if (this._buttons[t]) {
        this._buttons[t].start(null, e);
      }
      if (this._padParent.onDownCallback) {
        this._padParent.onDownCallback.call(this._padParent.callbackContext, t, e, this.index);
      }
      if (this.onDownCallback) {
        this.onDownCallback.call(this.callbackContext, t, e);
      }
    },
    processButtonUp: function (t, e) {
      if (this._padParent.onUpCallback) {
        this._padParent.onUpCallback.call(this._padParent.callbackContext, t, e, this.index);
      }
      if (this.onUpCallback) {
        this.onUpCallback.call(this.callbackContext, t, e);
      }
      if (this._buttons[t]) {
        this._buttons[t].stop(null, e);
      }
    },
    processButtonFloat: function (t, e) {
      if (this._padParent.onFloatCallback) {
        this._padParent.onFloatCallback.call(this._padParent.callbackContext, t, e, this.index);
      }
      if (this.onFloatCallback) {
        this.onFloatCallback.call(this.callbackContext, t, e);
      }
      if (this._buttons[t]) {
        this._buttons[t].padFloat(e);
      }
    },
    axis: function (t) {
      return !!this._axes[t] && this._axes[t];
    },
    isDown: function (t) {
      return !!this._buttons[t] && this._buttons[t].isDown;
    },
    isUp: function (t) {
      return !!this._buttons[t] && this._buttons[t].isUp;
    },
    justReleased: function (t, e) {
      if (this._buttons[t]) {
        return this._buttons[t].justReleased(e);
      }
    },
    justPressed: function (t, e) {
      if (this._buttons[t]) {
        return this._buttons[t].justPressed(e);
      }
    },
    buttonValue: function (t) {
      if (this._buttons[t]) {
        return this._buttons[t].value;
      } else {
        return null;
      }
    },
    reset: function () {
      for (var t = 0; t < this._axes.length; t++) {
        this._axes[t] = 0;
      }
    }
  };
  a.SinglePad.prototype.constructor = a.SinglePad;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Key = function (t, e) {
    this.game = t;
    this._enabled = true;
    this.event = null;
    this.isDown = false;
    this.isUp = true;
    this.altKey = false;
    this.ctrlKey = false;
    this.shiftKey = false;
    this.timeDown = 0;
    this.duration = 0;
    this.timeUp = -2500;
    this.repeats = 0;
    this.keyCode = e;
    this.onDown = new a.Signal();
    this.onHoldCallback = null;
    this.onHoldContext = null;
    this.onUp = new a.Signal();
    this._justDown = false;
    this._justUp = false;
  };
  a.Key.prototype = {
    update: function () {
      if (this._enabled && this.isDown) {
        this.duration = this.game.time.time - this.timeDown;
        this.repeats++;
        if (this.onHoldCallback) {
          this.onHoldCallback.call(this.onHoldContext, this);
        }
      }
    },
    processKeyDown: function (t) {
      if (this._enabled) {
        this.event = t;
        if (!this.isDown) {
          this.altKey = t.altKey;
          this.ctrlKey = t.ctrlKey;
          this.shiftKey = t.shiftKey;
          this.isDown = true;
          this.isUp = false;
          this.timeDown = this.game.time.time;
          this.duration = 0;
          this.repeats = 0;
          this._justDown = true;
          this.onDown.dispatch(this);
        }
      }
    },
    processKeyUp: function (t) {
      if (this._enabled) {
        this.event = t;
        if (!this.isUp) {
          this.isDown = false;
          this.isUp = true;
          this.timeUp = this.game.time.time;
          this.duration = this.game.time.time - this.timeDown;
          this._justUp = true;
          this.onUp.dispatch(this);
        }
      }
    },
    reset: function (t = true) {
      this.isDown = false;
      this.isUp = true;
      this.timeUp = this.game.time.time;
      this.duration = 0;
      this._enabled = true;
      this._justDown = false;
      this._justUp = false;
      if (t) {
        this.onDown.removeAll();
        this.onUp.removeAll();
        this.onHoldCallback = null;
        this.onHoldContext = null;
      }
    },
    downDuration: function (t = 50) {
      return this.isDown && this.duration < t;
    },
    upDuration: function (t = 50) {
      return !this.isDown && this.game.time.time - this.timeUp < t;
    }
  };
  Object.defineProperty(a.Key.prototype, "justDown", {
    get: function () {
      var t = this._justDown;
      this._justDown = false;
      return t;
    }
  });
  Object.defineProperty(a.Key.prototype, "justUp", {
    get: function () {
      var t = this._justUp;
      this._justUp = false;
      return t;
    }
  });
  Object.defineProperty(a.Key.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    set: function (t) {
      if ((t = !!t) !== this._enabled) {
        if (!t) {
          this.reset(false);
        }
        this._enabled = t;
      }
    }
  });
  a.Key.prototype.constructor = a.Key;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Keyboard = function (t) {
    this.game = t;
    this.enabled = true;
    this.event = null;
    this.pressEvent = null;
    this.callbackContext = this;
    this.onDownCallback = null;
    this.onPressCallback = null;
    this.onUpCallback = null;
    this._keys = [];
    this._capture = [];
    this._onKeyDown = null;
    this._onKeyPress = null;
    this._onKeyUp = null;
    this._i = 0;
    this._k = 0;
  };
  a.Keyboard.prototype = {
    addCallbacks: function (t, e, i, s) {
      this.callbackContext = t;
      if (e !== undefined && e !== null) {
        this.onDownCallback = e;
      }
      if (i !== undefined && i !== null) {
        this.onUpCallback = i;
      }
      if (s !== undefined && s !== null) {
        this.onPressCallback = s;
      }
    },
    addKey: function (t) {
      if (!this._keys[t]) {
        this._keys[t] = new a.Key(this.game, t);
        this.addKeyCapture(t);
      }
      return this._keys[t];
    },
    addKeys: function (t) {
      var e = {};
      for (var i in t) {
        e[i] = this.addKey(t[i]);
      }
      return e;
    },
    removeKey: function (t) {
      if (this._keys[t]) {
        this._keys[t] = null;
        this.removeKeyCapture(t);
      }
    },
    createCursorKeys: function () {
      return this.addKeys({
        up: a.KeyCode.UP,
        down: a.KeyCode.DOWN,
        left: a.KeyCode.LEFT,
        right: a.KeyCode.RIGHT
      });
    },
    start: function () {
      if (!this.game.device.cocoonJS && this._onKeyDown === null) {
        var t = this;
        this._onKeyDown = function (e) {
          return t.processKeyDown(e);
        };
        this._onKeyUp = function (e) {
          return t.processKeyUp(e);
        };
        this._onKeyPress = function (e) {
          return t.processKeyPress(e);
        };
        window.addEventListener("keydown", this._onKeyDown, false);
        window.addEventListener("keyup", this._onKeyUp, false);
        window.addEventListener("keypress", this._onKeyPress, false);
      }
    },
    stop: function () {
      window.removeEventListener("keydown", this._onKeyDown);
      window.removeEventListener("keyup", this._onKeyUp);
      window.removeEventListener("keypress", this._onKeyPress);
      this._onKeyDown = null;
      this._onKeyUp = null;
      this._onKeyPress = null;
    },
    destroy: function () {
      this.stop();
      this.clearCaptures();
      this._keys.length = 0;
      this._i = 0;
    },
    addKeyCapture: function (t) {
      if (typeof t == "object") {
        for (var e in t) {
          this._capture[t[e]] = true;
        }
      } else {
        this._capture[t] = true;
      }
    },
    removeKeyCapture: function (t) {
      delete this._capture[t];
    },
    clearCaptures: function () {
      this._capture = {};
    },
    update: function () {
      for (this._i = this._keys.length; this._i--;) {
        if (this._keys[this._i]) {
          this._keys[this._i].update();
        }
      }
    },
    processKeyDown: function (t) {
      this.event = t;
      if (this.game.input.enabled && this.enabled) {
        var e = t.keyCode;
        if (this._capture[e]) {
          t.preventDefault();
        }
        this._keys[e] ||= new a.Key(this.game, e);
        this._keys[e].processKeyDown(t);
        this._k = e;
        if (this.onDownCallback) {
          this.onDownCallback.call(this.callbackContext, t);
        }
      }
    },
    processKeyPress: function (t) {
      this.pressEvent = t;
      if (this.game.input.enabled && this.enabled && this.onPressCallback) {
        this.onPressCallback.call(this.callbackContext, String.fromCharCode(t.charCode), t);
      }
    },
    processKeyUp: function (t) {
      this.event = t;
      if (this.game.input.enabled && this.enabled) {
        var e = t.keyCode;
        if (this._capture[e]) {
          t.preventDefault();
        }
        this._keys[e] ||= new a.Key(this.game, e);
        this._keys[e].processKeyUp(t);
        if (this.onUpCallback) {
          this.onUpCallback.call(this.callbackContext, t);
        }
      }
    },
    reset: function (t = true) {
      this.event = null;
      for (var e = this._keys.length; e--;) {
        if (this._keys[e]) {
          this._keys[e].reset(t);
        }
      }
    },
    downDuration: function (t, e) {
      if (this._keys[t]) {
        return this._keys[t].downDuration(e);
      } else {
        return null;
      }
    },
    upDuration: function (t, e) {
      if (this._keys[t]) {
        return this._keys[t].upDuration(e);
      } else {
        return null;
      }
    },
    isDown: function (t) {
      if (this._keys[t]) {
        return this._keys[t].isDown;
      } else {
        return null;
      }
    }
  };
  Object.defineProperty(a.Keyboard.prototype, "lastChar", {
    get: function () {
      if (this.event.charCode === 32) {
        return "";
      } else {
        return String.fromCharCode(this.pressEvent.charCode);
      }
    }
  });
  Object.defineProperty(a.Keyboard.prototype, "lastKey", {
    get: function () {
      return this._keys[this._k];
    }
  });
  a.Keyboard.prototype.constructor = a.Keyboard;
  a.KeyCode = {
    A: "A".charCodeAt(0),
    B: "B".charCodeAt(0),
    C: "C".charCodeAt(0),
    D: "D".charCodeAt(0),
    E: "E".charCodeAt(0),
    F: "F".charCodeAt(0),
    G: "G".charCodeAt(0),
    H: "H".charCodeAt(0),
    I: "I".charCodeAt(0),
    J: "J".charCodeAt(0),
    K: "K".charCodeAt(0),
    L: "L".charCodeAt(0),
    M: "M".charCodeAt(0),
    N: "N".charCodeAt(0),
    O: "O".charCodeAt(0),
    P: "P".charCodeAt(0),
    Q: "Q".charCodeAt(0),
    R: "R".charCodeAt(0),
    S: "S".charCodeAt(0),
    T: "T".charCodeAt(0),
    U: "U".charCodeAt(0),
    V: "V".charCodeAt(0),
    W: "W".charCodeAt(0),
    X: "X".charCodeAt(0),
    Y: "Y".charCodeAt(0),
    Z: "Z".charCodeAt(0),
    ZERO: "0".charCodeAt(0),
    ONE: "1".charCodeAt(0),
    TWO: "2".charCodeAt(0),
    THREE: "3".charCodeAt(0),
    FOUR: "4".charCodeAt(0),
    FIVE: "5".charCodeAt(0),
    SIX: "6".charCodeAt(0),
    SEVEN: "7".charCodeAt(0),
    EIGHT: "8".charCodeAt(0),
    NINE: "9".charCodeAt(0),
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_ADD: 107,
    NUMPAD_ENTER: 108,
    NUMPAD_SUBTRACT: 109,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    COLON: 186,
    EQUALS: 187,
    COMMA: 188,
    UNDERSCORE: 189,
    PERIOD: 190,
    QUESTION_MARK: 191,
    TILDE: 192,
    OPEN_BRACKET: 219,
    BACKWARD_SLASH: 220,
    CLOSED_BRACKET: 221,
    QUOTES: 222,
    BACKSPACE: 8,
    TAB: 9,
    CLEAR: 12,
    ENTER: 13,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PLUS: 43,
    MINUS: 44,
    INSERT: 45,
    DELETE: 46,
    HELP: 47,
    NUM_LOCK: 144
  };
  for (var r in a.KeyCode) {
    if (a.KeyCode.hasOwnProperty(r) && !r.match(/[a-z]/)) {
      a.Keyboard[r] = a.KeyCode[r];
    }
  } /**
    * @author       Richard Davey <rich@photonstorm.com>
    * @copyright    2016 Photon Storm Ltd.
    * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
    */
  a.Component = function () {};
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Angle = function () {};
  a.Component.Angle.prototype = {
    angle: {
      get: function () {
        return a.Math.wrapAngle(a.Math.radToDeg(this.rotation));
      },
      set: function (t) {
        this.rotation = a.Math.degToRad(a.Math.wrapAngle(t));
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Animation = function () {};
  a.Component.Animation.prototype = {
    play: function (t, e, i, s) {
      if (this.animations) {
        return this.animations.play(t, e, i, s);
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.AutoCull = function () {};
  a.Component.AutoCull.prototype = {
    autoCull: false,
    inCamera: {
      get: function () {
        if (!this.autoCull && !this.checkWorldBounds) {
          this._bounds.copyFrom(this.getBounds());
          this._bounds.x += this.game.camera.view.x;
          this._bounds.y += this.game.camera.view.y;
        }
        return this.game.world.camera.view.intersects(this._bounds);
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Bounds = function () {};
  a.Component.Bounds.prototype = {
    offsetX: {
      get: function () {
        return this.anchor.x * this.width;
      }
    },
    offsetY: {
      get: function () {
        return this.anchor.y * this.height;
      }
    },
    centerX: {
      get: function () {
        return this.x - this.offsetX + this.width * 0.5;
      },
      set: function (t) {
        this.x = t + this.offsetX - this.width * 0.5;
      }
    },
    centerY: {
      get: function () {
        return this.y - this.offsetY + this.height * 0.5;
      },
      set: function (t) {
        this.y = t + this.offsetY - this.height * 0.5;
      }
    },
    left: {
      get: function () {
        return this.x - this.offsetX;
      },
      set: function (t) {
        this.x = t + this.offsetX;
      }
    },
    right: {
      get: function () {
        return this.x + this.width - this.offsetX;
      },
      set: function (t) {
        this.x = t - this.width + this.offsetX;
      }
    },
    top: {
      get: function () {
        return this.y - this.offsetY;
      },
      set: function (t) {
        this.y = t + this.offsetY;
      }
    },
    bottom: {
      get: function () {
        return this.y + this.height - this.offsetY;
      },
      set: function (t) {
        this.y = t - this.height + this.offsetY;
      }
    },
    alignIn: function (t, e, i = 0, s = 0) {
      switch (e) {
        default:
        case a.TOP_LEFT:
          this.left = t.left - i;
          this.top = t.top - s;
          break;
        case a.TOP_CENTER:
          this.centerX = t.centerX + i;
          this.top = t.top - s;
          break;
        case a.TOP_RIGHT:
          this.right = t.right + i;
          this.top = t.top - s;
          break;
        case a.LEFT_CENTER:
          this.left = t.left - i;
          this.centerY = t.centerY + s;
          break;
        case a.CENTER:
          this.centerX = t.centerX + i;
          this.centerY = t.centerY + s;
          break;
        case a.RIGHT_CENTER:
          this.right = t.right + i;
          this.centerY = t.centerY + s;
          break;
        case a.BOTTOM_LEFT:
          this.left = t.left - i;
          this.bottom = t.bottom + s;
          break;
        case a.BOTTOM_CENTER:
          this.centerX = t.centerX + i;
          this.bottom = t.bottom + s;
          break;
        case a.BOTTOM_RIGHT:
          this.right = t.right + i;
          this.bottom = t.bottom + s;
      }
      return this;
    },
    alignTo: function (t, e, i = 0, s = 0) {
      switch (e) {
        default:
        case a.TOP_LEFT:
          this.left = t.left - i;
          this.bottom = t.top - s;
          break;
        case a.TOP_CENTER:
          this.centerX = t.centerX + i;
          this.bottom = t.top - s;
          break;
        case a.TOP_RIGHT:
          this.right = t.right + i;
          this.bottom = t.top - s;
          break;
        case a.LEFT_TOP:
          this.right = t.left - i;
          this.top = t.top - s;
          break;
        case a.LEFT_CENTER:
          this.right = t.left - i;
          this.centerY = t.centerY + s;
          break;
        case a.LEFT_BOTTOM:
          this.right = t.left - i;
          this.bottom = t.bottom + s;
          break;
        case a.RIGHT_TOP:
          this.left = t.right + i;
          this.top = t.top - s;
          break;
        case a.RIGHT_CENTER:
          this.left = t.right + i;
          this.centerY = t.centerY + s;
          break;
        case a.RIGHT_BOTTOM:
          this.left = t.right + i;
          this.bottom = t.bottom + s;
          break;
        case a.BOTTOM_LEFT:
          this.left = t.left - i;
          this.top = t.bottom + s;
          break;
        case a.BOTTOM_CENTER:
          this.centerX = t.centerX + i;
          this.top = t.bottom + s;
          break;
        case a.BOTTOM_RIGHT:
          this.right = t.right + i;
          this.top = t.bottom + s;
      }
      return this;
    }
  };
  a.Group.prototype.alignIn = a.Component.Bounds.prototype.alignIn;
  a.Group.prototype.alignTo = a.Component.Bounds.prototype.alignTo;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.BringToTop = function () {};
  a.Component.BringToTop.prototype.bringToTop = function () {
    if (this.parent) {
      this.parent.bringToTop(this);
    }
    return this;
  };
  a.Component.BringToTop.prototype.sendToBack = function () {
    if (this.parent) {
      this.parent.sendToBack(this);
    }
    return this;
  };
  a.Component.BringToTop.prototype.moveUp = function () {
    if (this.parent) {
      this.parent.moveUp(this);
    }
    return this;
  };
  a.Component.BringToTop.prototype.moveDown = function () {
    if (this.parent) {
      this.parent.moveDown(this);
    }
    return this;
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Core = function () {};
  a.Component.Core.install = function (t) {
    a.Utils.mixinPrototype(this, a.Component.Core.prototype);
    this.components = {};
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      var s = false;
      if (i === "Destroy") {
        s = true;
      }
      a.Utils.mixinPrototype(this, a.Component[i].prototype, s);
      this.components[i] = true;
    }
  };
  a.Component.Core.init = function (t, e, i, s, n) {
    this.game = t;
    this.key = s;
    this.data = {};
    this.position.set(e, i);
    this.world = new a.Point(e, i);
    this.previousPosition = new a.Point(e, i);
    this.events = new a.Events(this);
    this._bounds = new a.Rectangle();
    if (this.components.PhysicsBody) {
      this.body = this.body;
    }
    if (this.components.Animation) {
      this.animations = new a.AnimationManager(this);
    }
    if (this.components.LoadTexture && s !== null) {
      this.loadTexture(s, n);
    }
    if (this.components.FixedToCamera) {
      this.cameraOffset = new a.Point(e, i);
    }
  };
  a.Component.Core.preUpdate = function () {
    if (this.pendingDestroy) {
      this.destroy();
      return;
    }
    this.previousPosition.set(this.world.x, this.world.y);
    this.previousRotation = this.rotation;
    if (!this.exists || !this.parent.exists) {
      this.renderOrderID = -1;
      return false;
    }
    this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty);
    if (this.visible) {
      this.renderOrderID = this.game.stage.currentRenderOrderID++;
    }
    if (this.animations) {
      this.animations.update();
    }
    if (this.body) {
      this.body.preUpdate();
    }
    for (var t = 0; t < this.children.length; t++) {
      this.children[t].preUpdate();
    }
    return true;
  };
  a.Component.Core.prototype = {
    game: null,
    name: "",
    data: {},
    components: {},
    z: 0,
    events: undefined,
    animations: undefined,
    key: "",
    world: null,
    debug: false,
    previousPosition: null,
    previousRotation: 0,
    renderOrderID: 0,
    fresh: true,
    pendingDestroy: false,
    _bounds: null,
    _exists: true,
    exists: {
      get: function () {
        return this._exists;
      },
      set: function (t) {
        if (t) {
          this._exists = true;
          if (this.body && this.body.type === a.Physics.P2JS) {
            this.body.addToWorld();
          }
          this.visible = true;
        } else {
          this._exists = false;
          if (this.body && this.body.type === a.Physics.P2JS) {
            this.body.removeFromWorld();
          }
          this.visible = false;
        }
      }
    },
    update: function () {},
    postUpdate: function () {
      if (this.customRender) {
        this.key.render();
      }
      if (this.components.PhysicsBody) {
        a.Component.PhysicsBody.postUpdate.call(this);
      }
      if (this.components.FixedToCamera) {
        a.Component.FixedToCamera.postUpdate.call(this);
      }
      for (var t = 0; t < this.children.length; t++) {
        this.children[t].postUpdate();
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Crop = function () {};
  a.Component.Crop.prototype = {
    cropRect: null,
    _crop: null,
    crop: function (t, e = false) {
      if (t) {
        if (e && this.cropRect !== null) {
          this.cropRect.setTo(t.x, t.y, t.width, t.height);
        } else if (e && this.cropRect === null) {
          this.cropRect = new a.Rectangle(t.x, t.y, t.width, t.height);
        } else {
          this.cropRect = t;
        }
        this.updateCrop();
      } else {
        this._crop = null;
        this.cropRect = null;
        this.resetFrame();
      }
    },
    updateCrop: function () {
      if (this.cropRect) {
        var t = this.texture.crop.x;
        var e = this.texture.crop.y;
        var i = this.texture.crop.width;
        var s = this.texture.crop.height;
        this._crop = a.Rectangle.clone(this.cropRect, this._crop);
        this._crop.x += this._frame.x;
        this._crop.y += this._frame.y;
        var n = Math.max(this._frame.x, this._crop.x);
        var o = Math.max(this._frame.y, this._crop.y);
        var r = Math.min(this._frame.right, this._crop.right) - n;
        var h = Math.min(this._frame.bottom, this._crop.bottom) - o;
        this.texture.crop.x = n;
        this.texture.crop.y = o;
        this.texture.crop.width = r;
        this.texture.crop.height = h;
        this.texture.frame.width = Math.min(r, this.cropRect.width);
        this.texture.frame.height = Math.min(h, this.cropRect.height);
        this.texture.width = this.texture.frame.width;
        this.texture.height = this.texture.frame.height;
        this.texture._updateUvs();
        if (this.tint !== 16777215 && (t !== n || e !== o || i !== r || s !== h)) {
          this.texture.requiresReTint = true;
        }
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Delta = function () {};
  a.Component.Delta.prototype = {
    deltaX: {
      get: function () {
        return this.world.x - this.previousPosition.x;
      }
    },
    deltaY: {
      get: function () {
        return this.world.y - this.previousPosition.y;
      }
    },
    deltaZ: {
      get: function () {
        return this.rotation - this.previousRotation;
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Destroy = function () {};
  a.Component.Destroy.prototype = {
    destroyPhase: false,
    destroy: function (t, e) {
      if (this.game !== null && !this.destroyPhase) {
        if (t === undefined) {
          t = true;
        }
        if (e === undefined) {
          e = false;
        }
        this.destroyPhase = true;
        if (this.events) {
          this.events.onDestroy$dispatch(this);
        }
        if (this.parent) {
          if (this.parent instanceof a.Group) {
            this.parent.remove(this);
          } else {
            this.parent.removeChild(this);
          }
        }
        if (this.input) {
          this.input.destroy();
        }
        if (this.animations) {
          this.animations.destroy();
        }
        if (this.body) {
          this.body.destroy();
        }
        if (this.events) {
          this.events.destroy();
        }
        this.game.tweens.removeFrom(this);
        var i = this.children.length;
        if (t) {
          while (i--) {
            this.children[i].destroy(t);
          }
        } else {
          while (i--) {
            this.removeChild(this.children[i]);
          }
        }
        if (this._crop) {
          this._crop = null;
          this.cropRect = null;
        }
        this._frame &&= null;
        if (a.Video && this.key instanceof a.Video) {
          this.key.onChangeSource.remove(this.resizeFrame, this);
        }
        if (a.BitmapText && this._glyphs) {
          this._glyphs = [];
        }
        this.alive = false;
        this.exists = false;
        this.visible = false;
        this.filters = null;
        this.mask = null;
        this.game = null;
        this.data = {};
        this.renderable = false;
        if (this.transformCallback) {
          this.transformCallback = null;
          this.transformCallbackContext = null;
        }
        this.hitArea = null;
        this.parent = null;
        this.stage = null;
        this.worldTransform = null;
        this.filterArea = null;
        this._bounds = null;
        this._currentBounds = null;
        this._mask = null;
        this._destroyCachedSprite();
        if (e) {
          this.texture.destroy(true);
        }
        this.destroyPhase = false;
        this.pendingDestroy = false;
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Events = function (t) {
    this.parent = t;
  };
  a.Events.prototype = {
    destroy: function () {
      this._parent = null;
      if (this._onDestroy) {
        this._onDestroy.dispose();
      }
      if (this._onAddedToGroup) {
        this._onAddedToGroup.dispose();
      }
      if (this._onRemovedFromGroup) {
        this._onRemovedFromGroup.dispose();
      }
      if (this._onRemovedFromWorld) {
        this._onRemovedFromWorld.dispose();
      }
      if (this._onKilled) {
        this._onKilled.dispose();
      }
      if (this._onRevived) {
        this._onRevived.dispose();
      }
      if (this._onEnterBounds) {
        this._onEnterBounds.dispose();
      }
      if (this._onOutOfBounds) {
        this._onOutOfBounds.dispose();
      }
      if (this._onInputOver) {
        this._onInputOver.dispose();
      }
      if (this._onInputOut) {
        this._onInputOut.dispose();
      }
      if (this._onInputDown) {
        this._onInputDown.dispose();
      }
      if (this._onInputUp) {
        this._onInputUp.dispose();
      }
      if (this._onDragStart) {
        this._onDragStart.dispose();
      }
      if (this._onDragUpdate) {
        this._onDragUpdate.dispose();
      }
      if (this._onDragStop) {
        this._onDragStop.dispose();
      }
      if (this._onAnimationStart) {
        this._onAnimationStart.dispose();
      }
      if (this._onAnimationComplete) {
        this._onAnimationComplete.dispose();
      }
      if (this._onAnimationLoop) {
        this._onAnimationLoop.dispose();
      }
    },
    onAddedToGroup: null,
    onRemovedFromGroup: null,
    onRemovedFromWorld: null,
    onDestroy: null,
    onKilled: null,
    onRevived: null,
    onOutOfBounds: null,
    onEnterBounds: null,
    onInputOver: null,
    onInputOut: null,
    onInputDown: null,
    onInputUp: null,
    onDragStart: null,
    onDragUpdate: null,
    onDragStop: null,
    onAnimationStart: null,
    onAnimationComplete: null,
    onAnimationLoop: null
  };
  a.Events.prototype.constructor = a.Events;
  for (var h in a.Events.prototype) {
    if (a.Events.prototype.hasOwnProperty(h) && h.indexOf("on") === 0 && a.Events.prototype[h] === null) {
      (function (t, e) {
        "use strict";

        Object.defineProperty(a.Events.prototype, t, {
          get: function () {
            return this[e] ||= new a.Signal();
          }
        });
        a.Events.prototype[t + "$dispatch"] = function () {
          if (this[e]) {
            return this[e].dispatch.apply(this[e], arguments);
          } else {
            return null;
          }
        };
      })(h, "_" + h);
    }
  } /**
    * @author       Richard Davey <rich@photonstorm.com>
    * @copyright    2016 Photon Storm Ltd.
    * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
    */
  a.Component.FixedToCamera = function () {};
  a.Component.FixedToCamera.postUpdate = function () {
    if (this.fixedToCamera) {
      this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x;
      this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y;
    }
  };
  a.Component.FixedToCamera.prototype = {
    _fixedToCamera: false,
    fixedToCamera: {
      get: function () {
        return this._fixedToCamera;
      },
      set: function (t) {
        if (t) {
          this._fixedToCamera = true;
          this.cameraOffset.set(this.x, this.y);
        } else {
          this._fixedToCamera = false;
        }
      }
    },
    cameraOffset: new a.Point()
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Health = function () {};
  a.Component.Health.prototype = {
    health: 1,
    maxHealth: 100,
    damage: function (t) {
      if (this.alive) {
        this.health -= t;
        if (this.health <= 0) {
          this.kill();
        }
      }
      return this;
    },
    setHealth: function (t) {
      this.health = t;
      if (this.health > this.maxHealth) {
        this.health = this.maxHealth;
      }
      return this;
    },
    heal: function (t) {
      if (this.alive) {
        this.health += t;
        if (this.health > this.maxHealth) {
          this.health = this.maxHealth;
        }
      }
      return this;
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.InCamera = function () {};
  a.Component.InCamera.prototype = {
    inCamera: {
      get: function () {
        return this.game.world.camera.view.intersects(this._bounds);
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.InputEnabled = function () {};
  a.Component.InputEnabled.prototype = {
    input: null,
    inputEnabled: {
      get: function () {
        return this.input && this.input.enabled;
      },
      set: function (t) {
        if (t) {
          if (this.input === null) {
            this.input = new a.InputHandler(this);
            this.input.start();
          } else if (this.input && !this.input.enabled) {
            this.input.start();
          }
        } else if (this.input && this.input.enabled) {
          this.input.stop();
        }
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.InWorld = function () {};
  a.Component.InWorld.preUpdate = function () {
    if (this.autoCull || this.checkWorldBounds) {
      this._bounds.copyFrom(this.getBounds());
      this._bounds.x += this.game.camera.view.x;
      this._bounds.y += this.game.camera.view.y;
      if (this.autoCull) {
        if (this.game.world.camera.view.intersects(this._bounds)) {
          this.renderable = true;
          this.game.world.camera.totalInView++;
        } else {
          this.renderable = false;
          if (this.outOfCameraBoundsKill) {
            this.kill();
            return false;
          }
        }
      }
      if (this.checkWorldBounds) {
        if (this._outOfBoundsFired && this.game.world.bounds.intersects(this._bounds)) {
          this._outOfBoundsFired = false;
          this.events.onEnterBounds$dispatch(this);
        } else if (!this._outOfBoundsFired && !this.game.world.bounds.intersects(this._bounds) && (this._outOfBoundsFired = true, this.events.onOutOfBounds$dispatch(this), this.outOfBoundsKill)) {
          this.kill();
          return false;
        }
      }
    }
    return true;
  };
  a.Component.InWorld.prototype = {
    checkWorldBounds: false,
    outOfBoundsKill: false,
    outOfCameraBoundsKill: false,
    _outOfBoundsFired: false,
    inWorld: {
      get: function () {
        return this.game.world.bounds.intersects(this.getBounds());
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.LifeSpan = function () {};
  a.Component.LifeSpan.preUpdate = function () {
    return !(this.lifespan > 0) || !(this.lifespan -= this.game.time.physicsElapsedMS, this.lifespan <= 0) || (this.kill(), false);
  };
  a.Component.LifeSpan.prototype = {
    alive: true,
    lifespan: 0,
    revive: function (t = 100) {
      this.alive = true;
      this.exists = true;
      this.visible = true;
      if (typeof this.setHealth == "function") {
        this.setHealth(t);
      }
      if (this.events) {
        this.events.onRevived$dispatch(this);
      }
      return this;
    },
    kill: function () {
      this.alive = false;
      this.exists = false;
      this.visible = false;
      if (this.events) {
        this.events.onKilled$dispatch(this);
      }
      return this;
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.LoadTexture = function () {};
  a.Component.LoadTexture.prototype = {
    customRender: false,
    _frame: null,
    loadTexture: function (t, e, i) {
      if (t === a.PENDING_ATLAS) {
        t = e;
        e = 0;
      } else {
        e = e || 0;
      }
      if ((i || i === undefined) && this.animations) {
        this.animations.stop();
      }
      this.key = t;
      this.customRender = false;
      var s = this.game.cache;
      var n = true;
      var o = !this.texture.baseTexture.scaleMode;
      if (a.RenderTexture && t instanceof a.RenderTexture) {
        this.key = t.key;
        this.setTexture(t);
      } else if (a.BitmapData && t instanceof a.BitmapData) {
        this.customRender = true;
        this.setTexture(t.texture);
        n = s.hasFrameData(t.key, a.Cache.BITMAPDATA) ? !this.animations.loadFrameData(s.getFrameData(t.key, a.Cache.BITMAPDATA), e) : !this.animations.loadFrameData(t.frameData, 0);
      } else if (a.Video && t instanceof a.Video) {
        this.customRender = true;
        var r = t.texture.valid;
        this.setTexture(t.texture);
        this.setFrame(t.texture.frame.clone());
        t.onChangeSource.add(this.resizeFrame, this);
        this.texture.valid = r;
      } else if (a.Tilemap && t instanceof a.TilemapLayer) {
        this.setTexture(PIXI.Texture.fromCanvas(t.canvas));
      } else if (t instanceof PIXI.Texture) {
        this.setTexture(t);
      } else {
        var h = s.getImage(t, true);
        this.key = h.key;
        this.setTexture(new PIXI.Texture(h.base));
        this.texture.baseTexture.skipRender = t === "__default";
        n = !this.animations.loadFrameData(h.frameData, e);
      }
      if (n) {
        this._frame = a.Rectangle.clone(this.texture.frame);
      }
      if (!o) {
        this.texture.baseTexture.scaleMode = 1;
      }
    },
    setFrame: function (t) {
      this._frame = t;
      this.texture.frame.x = t.x;
      this.texture.frame.y = t.y;
      this.texture.frame.width = t.width;
      this.texture.frame.height = t.height;
      this.texture.crop.x = t.x;
      this.texture.crop.y = t.y;
      this.texture.crop.width = t.width;
      this.texture.crop.height = t.height;
      if (t.trimmed) {
        if (this.texture.trim) {
          this.texture.trim.x = t.spriteSourceSizeX;
          this.texture.trim.y = t.spriteSourceSizeY;
          this.texture.trim.width = t.sourceSizeW;
          this.texture.trim.height = t.sourceSizeH;
        } else {
          this.texture.trim = {
            x: t.spriteSourceSizeX,
            y: t.spriteSourceSizeY,
            width: t.sourceSizeW,
            height: t.sourceSizeH
          };
        }
        this.texture.width = t.sourceSizeW;
        this.texture.height = t.sourceSizeH;
        this.texture.frame.width = t.sourceSizeW;
        this.texture.frame.height = t.sourceSizeH;
      } else if (!t.trimmed && this.texture.trim) {
        this.texture.trim = null;
      }
      if (this.cropRect) {
        this.updateCrop();
      }
      this.texture.requiresReTint = true;
      this.texture._updateUvs();
      if (this.tilingTexture) {
        this.refreshTexture = true;
      }
    },
    resizeFrame: function (t, e, i) {
      this.texture.frame.resize(e, i);
      this.texture.setFrame(this.texture.frame);
    },
    resetFrame: function () {
      if (this._frame) {
        this.setFrame(this._frame);
      }
    },
    frame: {
      get: function () {
        return this.animations.frame;
      },
      set: function (t) {
        this.animations.frame = t;
      }
    },
    frameName: {
      get: function () {
        return this.animations.frameName;
      },
      set: function (t) {
        this.animations.frameName = t;
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Overlap = function () {};
  a.Component.Overlap.prototype = {
    overlap: function (t) {
      return a.Rectangle.intersects(this.getBounds(), t.getBounds());
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.PhysicsBody = function () {};
  a.Component.PhysicsBody.preUpdate = function () {
    if (this.fresh && this.exists) {
      this.world.setTo(this.parent.position.x + this.position.x, this.parent.position.y + this.position.y);
      this.worldTransform.tx = this.world.x;
      this.worldTransform.ty = this.world.y;
      this.previousPosition.set(this.world.x, this.world.y);
      this.previousRotation = this.rotation;
      if (this.body) {
        this.body.preUpdate();
      }
      this.fresh = false;
      return false;
    } else {
      this.previousPosition.set(this.world.x, this.world.y);
      this.previousRotation = this.rotation;
      return !!this._exists && !!this.parent.exists || (this.renderOrderID = -1, false);
    }
  };
  a.Component.PhysicsBody.postUpdate = function () {
    if (this.exists && this.body) {
      this.body.postUpdate();
    }
  };
  a.Component.PhysicsBody.prototype = {
    body: null,
    x: {
      get: function () {
        return this.position.x;
      },
      set: function (t) {
        this.position.x = t;
        if (this.body && !this.body.dirty) {
          this.body._reset = true;
        }
      }
    },
    y: {
      get: function () {
        return this.position.y;
      },
      set: function (t) {
        this.position.y = t;
        if (this.body && !this.body.dirty) {
          this.body._reset = true;
        }
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Reset = function () {};
  a.Component.Reset.prototype.reset = function (t, e, i = 1) {
    this.world.set(t, e);
    this.position.set(t, e);
    this.fresh = true;
    this.exists = true;
    this.visible = true;
    this.renderable = true;
    if (this.components.InWorld) {
      this._outOfBoundsFired = false;
    }
    if (this.components.LifeSpan) {
      this.alive = true;
      this.health = i;
    }
    if (this.components.PhysicsBody && this.body) {
      this.body.reset(t, e, false, false);
    }
    return this;
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.ScaleMinMax = function () {};
  a.Component.ScaleMinMax.prototype = {
    transformCallback: null,
    transformCallbackContext: this,
    scaleMin: null,
    scaleMax: null,
    checkTransform: function (t) {
      if (this.scaleMin) {
        if (t.a < this.scaleMin.x) {
          t.a = this.scaleMin.x;
        }
        if (t.d < this.scaleMin.y) {
          t.d = this.scaleMin.y;
        }
      }
      if (this.scaleMax) {
        if (t.a > this.scaleMax.x) {
          t.a = this.scaleMax.x;
        }
        if (t.d > this.scaleMax.y) {
          t.d = this.scaleMax.y;
        }
      }
    },
    setScaleMinMax: function (t, e = i = s = t, i, s) {
      if (t === null) {
        this.scaleMin = null;
      } else if (this.scaleMin) {
        this.scaleMin.set(t, e);
      } else {
        this.scaleMin = new a.Point(t, e);
      }
      if (i === null) {
        this.scaleMax = null;
      } else if (this.scaleMax) {
        this.scaleMax.set(i, s);
      } else {
        this.scaleMax = new a.Point(i, s);
      }
      if (this.scaleMin === null) {
        this.transformCallback = null;
      } else {
        this.transformCallback = this.checkTransform;
        this.transformCallbackContext = this;
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Component.Smoothed = function () {};
  a.Component.Smoothed.prototype = {
    smoothed: {
      get: function () {
        return !this.texture.baseTexture.scaleMode;
      },
      set: function (t) {
        if (t) {
          if (this.texture) {
            this.texture.baseTexture.scaleMode = 0;
          }
        } else if (this.texture) {
          this.texture.baseTexture.scaleMode = 1;
        }
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.GameObjectFactory = function (t) {
    this.game = t;
    this.world = this.game.world;
  };
  a.GameObjectFactory.prototype = {
    existing: function (t) {
      return this.world.add(t);
    },
    weapon: function (t, e, i, s) {
      var n = this.game.plugins.add(a.Weapon);
      n.createBullets(t, e, i, s);
      return n;
    },
    image: function (t, e, i, s, n = this.world) {
      return n.add(new a.Image(this.game, t, e, i, s));
    },
    sprite: function (t, e, i, s, n = this.world) {
      return n.create(t, e, i, s);
    },
    creature: function (t, e, i, s, n = this.world) {
      var o = new a.Creature(this.game, t, e, i, s);
      n.add(o);
      return o;
    },
    tween: function (t) {
      return this.game.tweens.create(t);
    },
    group: function (t, e, i, s, n) {
      return new a.Group(this.game, t, e, i, s, n);
    },
    physicsGroup: function (t, e, i, s) {
      return new a.Group(this.game, e, i, s, true, t);
    },
    spriteBatch: function (t = null, e = "group", i = false) {
      return new a.SpriteBatch(this.game, t, e, i);
    },
    audio: function (t, e, i, s) {
      return this.game.sound.add(t, e, i, s);
    },
    sound: function (t, e, i, s) {
      return this.game.sound.add(t, e, i, s);
    },
    audioSprite: function (t) {
      return this.game.sound.addSprite(t);
    },
    tileSprite: function (t, e, i, s, n, o, r = this.world) {
      return r.add(new a.TileSprite(this.game, t, e, i, s, n, o));
    },
    rope: function (t, e, i, s, n, o = this.world) {
      return o.add(new a.Rope(this.game, t, e, i, s, n));
    },
    text: function (t, e, i, s, n = this.world) {
      return n.add(new a.Text(this.game, t, e, i, s));
    },
    button: function (t, e, i, s, n, o, r, h, l, c = this.world) {
      return c.add(new a.Button(this.game, t, e, i, s, n, o, r, h, l));
    },
    graphics: function (t, e, i = this.world) {
      return i.add(new a.Graphics(this.game, t, e));
    },
    emitter: function (t, e, i) {
      return this.game.particles.add(new a.Particles.Arcade.Emitter(this.game, t, e, i));
    },
    retroFont: function (t, e, i, s, n, o, r, h, l) {
      return new a.RetroFont(this.game, t, e, i, s, n, o, r, h, l);
    },
    bitmapText: function (t, e, i, s, n, o = this.world) {
      return o.add(new a.BitmapText(this.game, t, e, i, s, n));
    },
    tilemap: function (t, e, i, s, n) {
      return new a.Tilemap(this.game, t, e, i, s, n);
    },
    renderTexture: function (t, e, i, s) {
      if (i === undefined || i === "") {
        i = this.game.rnd.uuid();
      }
      if (s === undefined) {
        s = false;
      }
      var n = new a.RenderTexture(this.game, t, e, i);
      if (s) {
        this.game.cache.addRenderTexture(i, n);
      }
      return n;
    },
    video: function (t, e) {
      return new a.Video(this.game, t, e);
    },
    bitmapData: function (t, e, i, s = false) {
      if (i === undefined || i === "") {
        i = this.game.rnd.uuid();
      }
      var n = new a.BitmapData(this.game, i, t, e);
      if (s) {
        this.game.cache.addBitmapData(i, n);
      }
      return n;
    },
    filter: function (t) {
      var e = Array.prototype.slice.call(arguments, 1);
      var t = new a.Filter[t](this.game);
      t.init.apply(t, e);
      return t;
    },
    plugin: function (t) {
      return this.game.plugins.add(t);
    }
  };
  a.GameObjectFactory.prototype.constructor = a.GameObjectFactory;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.GameObjectCreator = function (t) {
    this.game = t;
    this.world = this.game.world;
  };
  a.GameObjectCreator.prototype = {
    image: function (t, e, i, s) {
      return new a.Image(this.game, t, e, i, s);
    },
    sprite: function (t, e, i, s) {
      return new a.Sprite(this.game, t, e, i, s);
    },
    tween: function (t) {
      return new a.Tween(t, this.game, this.game.tweens);
    },
    group: function (t, e, i, s, n) {
      return new a.Group(this.game, t, e, i, s, n);
    },
    spriteBatch: function (t, e = "group", i = false) {
      return new a.SpriteBatch(this.game, t, e, i);
    },
    audio: function (t, e, i, s) {
      return this.game.sound.add(t, e, i, s);
    },
    audioSprite: function (t) {
      return this.game.sound.addSprite(t);
    },
    sound: function (t, e, i, s) {
      return this.game.sound.add(t, e, i, s);
    },
    tileSprite: function (t, e, i, s, n, o) {
      return new a.TileSprite(this.game, t, e, i, s, n, o);
    },
    rope: function (t, e, i, s, n) {
      return new a.Rope(this.game, t, e, i, s, n);
    },
    text: function (t, e, i, s) {
      return new a.Text(this.game, t, e, i, s);
    },
    button: function (t, e, i, s, n, o, r, h, l) {
      return new a.Button(this.game, t, e, i, s, n, o, r, h, l);
    },
    graphics: function (t, e) {
      return new a.Graphics(this.game, t, e);
    },
    emitter: function (t, e, i) {
      return new a.Particles.Arcade.Emitter(this.game, t, e, i);
    },
    retroFont: function (t, e, i, s, n, o, r, h, l) {
      return new a.RetroFont(this.game, t, e, i, s, n, o, r, h, l);
    },
    bitmapText: function (t, e, i, s, n, o) {
      return new a.BitmapText(this.game, t, e, i, s, n, o);
    },
    tilemap: function (t, e, i, s, n) {
      return new a.Tilemap(this.game, t, e, i, s, n);
    },
    renderTexture: function (t, e, i, s) {
      if (i === undefined || i === "") {
        i = this.game.rnd.uuid();
      }
      if (s === undefined) {
        s = false;
      }
      var n = new a.RenderTexture(this.game, t, e, i);
      if (s) {
        this.game.cache.addRenderTexture(i, n);
      }
      return n;
    },
    bitmapData: function (t, e, i, s = false) {
      if (i === undefined || i === "") {
        i = this.game.rnd.uuid();
      }
      var n = new a.BitmapData(this.game, i, t, e);
      if (s) {
        this.game.cache.addBitmapData(i, n);
      }
      return n;
    },
    filter: function (t) {
      var e = Array.prototype.slice.call(arguments, 1);
      var t = new a.Filter[t](this.game);
      t.init.apply(t, e);
      return t;
    }
  };
  a.GameObjectCreator.prototype.constructor = a.GameObjectCreator;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Sprite = function (t, e, i, s, n) {
    e = e || 0;
    i = i || 0;
    s = s || null;
    n = n || null;
    this.type = a.SPRITE;
    this.physicsType = a.SPRITE;
    PIXI.Sprite.call(this, a.Cache.DEFAULT);
    a.Component.Core.init.call(this, t, e, i, s, n);
  };
  a.Sprite.prototype = Object.create(PIXI.Sprite.prototype);
  a.Sprite.prototype.constructor = a.Sprite;
  a.Component.Core.install.call(a.Sprite.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Delta", "Destroy", "FixedToCamera", "Health", "InCamera", "InputEnabled", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "ScaleMinMax", "Smoothed"]);
  a.Sprite.prototype.preUpdatePhysics = a.Component.PhysicsBody.preUpdate;
  a.Sprite.prototype.preUpdateLifeSpan = a.Component.LifeSpan.preUpdate;
  a.Sprite.prototype.preUpdateInWorld = a.Component.InWorld.preUpdate;
  a.Sprite.prototype.preUpdateCore = a.Component.Core.preUpdate;
  a.Sprite.prototype.preUpdate = function () {
    return !!this.preUpdatePhysics() && !!this.preUpdateLifeSpan() && !!this.preUpdateInWorld() && this.preUpdateCore();
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Image = function (t, e, i, s, n) {
    e = e || 0;
    i = i || 0;
    s = s || null;
    n = n || null;
    this.type = a.IMAGE;
    PIXI.Sprite.call(this, a.Cache.DEFAULT);
    a.Component.Core.init.call(this, t, e, i, s, n);
  };
  a.Image.prototype = Object.create(PIXI.Sprite.prototype);
  a.Image.prototype.constructor = a.Image;
  a.Component.Core.install.call(a.Image.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Destroy", "FixedToCamera", "InputEnabled", "LifeSpan", "LoadTexture", "Overlap", "Reset", "ScaleMinMax", "Smoothed"]);
  a.Image.prototype.preUpdateInWorld = a.Component.InWorld.preUpdate;
  a.Image.prototype.preUpdateCore = a.Component.Core.preUpdate;
  a.Image.prototype.preUpdate = function () {
    return !!this.preUpdateInWorld() && this.preUpdateCore();
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Button = function (t, e, i, s, n, o, r, h, l, c) {
    e = e || 0;
    i = i || 0;
    s = s || null;
    n = n || null;
    o = o || this;
    a.Image.call(this, t, e, i, s, h);
    this.type = a.BUTTON;
    this.physicsType = a.SPRITE;
    this._onOverFrame = null;
    this._onOutFrame = null;
    this._onDownFrame = null;
    this._onUpFrame = null;
    this.onOverSound = null;
    this.onOutSound = null;
    this.onDownSound = null;
    this.onUpSound = null;
    this.onOverSoundMarker = "";
    this.onOutSoundMarker = "";
    this.onDownSoundMarker = "";
    this.onUpSoundMarker = "";
    this.onInputOver = new a.Signal();
    this.onInputOut = new a.Signal();
    this.onInputDown = new a.Signal();
    this.onInputUp = new a.Signal();
    this.onOverMouseOnly = true;
    this.justReleasedPreventsOver = a.PointerMode.TOUCH;
    this.freezeFrames = false;
    this.forceOut = false;
    this.inputEnabled = true;
    this.input.start(0, true);
    this.input.useHandCursor = true;
    this.setFrames(r, h, l, c);
    if (n !== null) {
      this.onInputUp.add(n, o);
    }
    this.events.onInputOver.add(this.onInputOverHandler, this);
    this.events.onInputOut.add(this.onInputOutHandler, this);
    this.events.onInputDown.add(this.onInputDownHandler, this);
    this.events.onInputUp.add(this.onInputUpHandler, this);
    this.events.onRemovedFromWorld.add(this.removedFromWorld, this);
  };
  a.Button.prototype = Object.create(a.Image.prototype);
  a.Button.prototype.constructor = a.Button;
  var l = "Over";
  var c = "Out";
  var u = "Down";
  var d = "Up";
  a.Button.prototype.clearFrames = function () {
    this.setFrames(null, null, null, null);
  };
  a.Button.prototype.removedFromWorld = function () {
    this.inputEnabled = false;
  };
  a.Button.prototype.setStateFrame = function (t, e, i) {
    var s = "_on" + t + "Frame";
    if (e !== null) {
      this[s] = e;
      if (i) {
        this.changeStateFrame(t);
      }
    } else {
      this[s] = null;
    }
  };
  a.Button.prototype.changeStateFrame = function (t) {
    if (this.freezeFrames) {
      return false;
    }
    var e = "_on" + t + "Frame";
    var i = this[e];
    if (typeof i == "string") {
      this.frameName = i;
      return true;
    } else {
      return typeof i == "number" && (this.frame = i, true);
    }
  };
  a.Button.prototype.setFrames = function (t, e, i, s) {
    this.setStateFrame("Over", t, this.input.pointerOver());
    this.setStateFrame("Out", e, !this.input.pointerOver());
    this.setStateFrame("Down", i, this.input.pointerDown());
    this.setStateFrame("Up", s, this.input.pointerUp());
  };
  a.Button.prototype.setStateSound = function (t, e, i) {
    var s = "on" + t + "Sound";
    var n = "on" + t + "SoundMarker";
    if (e instanceof a.Sound || e instanceof a.AudioSprite) {
      this[s] = e;
      this[n] = typeof i == "string" ? i : "";
    } else {
      this[s] = null;
      this[n] = "";
    }
  };
  a.Button.prototype.playStateSound = function (t) {
    var e = "on" + t + "Sound";
    var i = this[e];
    if (i) {
      var s = "on" + t + "SoundMarker";
      var n = this[s];
      i.play(n);
      return true;
    }
    return false;
  };
  a.Button.prototype.setSounds = function (t, e, i, s, n, a, o, r) {
    this.setStateSound("Over", t, e);
    this.setStateSound("Out", n, a);
    this.setStateSound("Down", i, s);
    this.setStateSound("Up", o, r);
  };
  a.Button.prototype.setOverSound = function (t, e) {
    this.setStateSound("Over", t, e);
  };
  a.Button.prototype.setOutSound = function (t, e) {
    this.setStateSound("Out", t, e);
  };
  a.Button.prototype.setDownSound = function (t, e) {
    this.setStateSound("Down", t, e);
  };
  a.Button.prototype.setUpSound = function (t, e) {
    this.setStateSound("Up", t, e);
  };
  a.Button.prototype.onInputOverHandler = function (t, e) {
    if (!e.justReleased() || (this.justReleasedPreventsOver & e.pointerMode) !== e.pointerMode) {
      this.changeStateFrame("Over");
      if (!this.onOverMouseOnly || !!e.isMouse) {
        this.playStateSound("Over");
        if (this.onInputOver) {
          this.onInputOver.dispatch(this, e);
        }
      }
    }
  };
  a.Button.prototype.onInputOutHandler = function (t, e) {
    this.changeStateFrame("Out");
    this.playStateSound("Out");
    if (this.onInputOut) {
      this.onInputOut.dispatch(this, e);
    }
  };
  a.Button.prototype.onInputDownHandler = function (t, e) {
    this.changeStateFrame("Down");
    this.playStateSound("Down");
    if (this.onInputDown) {
      this.onInputDown.dispatch(this, e);
    }
  };
  a.Button.prototype.onInputUpHandler = function (t, e, i) {
    this.playStateSound("Up");
    if (this.onInputUp) {
      this.onInputUp.dispatch(this, e, i);
    }
    if (!this.freezeFrames) {
      if (this.forceOut === true || (this.forceOut & e.pointerMode) === e.pointerMode) {
        this.changeStateFrame("Out");
      } else {
        var s = this.changeStateFrame("Up");
        if (!s) {
          if (i) {
            this.changeStateFrame("Over");
          } else {
            this.changeStateFrame("Out");
          }
        }
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.SpriteBatch = function (t, e, i, s) {
    if (e === undefined || e === null) {
      e = t.world;
    }
    PIXI.SpriteBatch.call(this);
    a.Group.call(this, t, e, i, s);
    this.type = a.SPRITEBATCH;
  };
  a.SpriteBatch.prototype = a.Utils.extend(true, a.SpriteBatch.prototype, PIXI.SpriteBatch.prototype, a.Group.prototype);
  a.SpriteBatch.prototype.constructor = a.SpriteBatch;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.BitmapData = function (t, e, i, s, n) {
    if (i === undefined || i === 0) {
      i = 256;
    }
    if (s === undefined || s === 0) {
      s = 256;
    }
    if (n === undefined) {
      n = false;
    }
    this.game = t;
    this.key = e;
    this.width = i;
    this.height = s;
    this.canvas = a.Canvas.create(this, i, s, null, n);
    this.context = this.canvas.getContext("2d", {
      alpha: true
    });
    this.ctx = this.context;
    this.smoothProperty = t.renderType === a.CANVAS ? t.renderer.renderSession.smoothProperty : a.Canvas.getSmoothingPrefix(this.context);
    this.imageData = this.context.getImageData(0, 0, i, s);
    this.data = null;
    if (this.imageData) {
      this.data = this.imageData.data;
    }
    this.pixels = null;
    if (this.data) {
      if (this.imageData.data.buffer) {
        this.buffer = this.imageData.data.buffer;
        this.pixels = new Uint32Array(this.buffer);
      } else if (window.ArrayBuffer) {
        this.buffer = new ArrayBuffer(this.imageData.data.length);
        this.pixels = new Uint32Array(this.buffer);
      } else {
        this.pixels = this.imageData.data;
      }
    }
    this.baseTexture = new PIXI.BaseTexture(this.canvas);
    this.texture = new PIXI.Texture(this.baseTexture);
    this.frameData = new a.FrameData();
    this.textureFrame = this.frameData.addFrame(new a.Frame(0, 0, 0, i, s, "bitmapData"));
    this.texture.frame = this.textureFrame;
    this.type = a.BITMAPDATA;
    this.disableTextureUpload = false;
    this.dirty = false;
    this.cls = this.clear;
    this._image = null;
    this._pos = new a.Point();
    this._size = new a.Point();
    this._scale = new a.Point();
    this._rotate = 0;
    this._alpha = {
      prev: 1,
      current: 1
    };
    this._anchor = new a.Point();
    this._tempR = 0;
    this._tempG = 0;
    this._tempB = 0;
    this._circle = new a.Circle();
    this._swapCanvas = undefined;
  };
  a.BitmapData.prototype = {
    move: function (t, e, i) {
      if (t !== 0) {
        this.moveH(t, i);
      }
      if (e !== 0) {
        this.moveV(e, i);
      }
      return this;
    },
    moveH: function (t, e = true) {
      if (this._swapCanvas === undefined) {
        this._swapCanvas = PIXI.CanvasPool.create(this, this.width, this.height);
      }
      var i = this._swapCanvas;
      var s = i.getContext("2d");
      var n = this.height;
      var a = this.canvas;
      s.clearRect(0, 0, this.width, this.height);
      if (t < 0) {
        t = Math.abs(t);
        var o = this.width - t;
        if (e) {
          s.drawImage(a, 0, 0, t, n, o, 0, t, n);
        }
        s.drawImage(a, t, 0, o, n, 0, 0, o, n);
      } else {
        var o = this.width - t;
        if (e) {
          s.drawImage(a, o, 0, t, n, 0, 0, t, n);
        }
        s.drawImage(a, 0, 0, o, n, t, 0, o, n);
      }
      this.clear();
      return this.copy(this._swapCanvas);
    },
    moveV: function (t, e = true) {
      if (this._swapCanvas === undefined) {
        this._swapCanvas = PIXI.CanvasPool.create(this, this.width, this.height);
      }
      var i = this._swapCanvas;
      var s = i.getContext("2d");
      var n = this.width;
      var a = this.canvas;
      s.clearRect(0, 0, this.width, this.height);
      if (t < 0) {
        t = Math.abs(t);
        var o = this.height - t;
        if (e) {
          s.drawImage(a, 0, 0, n, t, 0, o, n, t);
        }
        s.drawImage(a, 0, t, n, o, 0, 0, n, o);
      } else {
        var o = this.height - t;
        if (e) {
          s.drawImage(a, 0, o, n, t, 0, 0, n, t);
        }
        s.drawImage(a, 0, 0, n, o, 0, t, n, o);
      }
      this.clear();
      return this.copy(this._swapCanvas);
    },
    add: function (t) {
      if (Array.isArray(t)) {
        for (var e = 0; e < t.length; e++) {
          if (t[e].loadTexture) {
            t[e].loadTexture(this);
          }
        }
      } else {
        t.loadTexture(this);
      }
      return this;
    },
    load: function (t) {
      if (typeof t == "string") {
        t = this.game.cache.getImage(t);
      }
      if (t) {
        this.resize(t.width, t.height);
        this.cls();
        this.draw(t);
        this.update();
        return this;
      }
    },
    clear: function (t = 0, e = 0, i = this.width, s = this.height) {
      this.context.clearRect(t, e, i, s);
      this.dirty = true;
      return this;
    },
    fill: function (t, e, i, s = 1) {
      this.context.fillStyle = "rgba(" + t + "," + e + "," + i + "," + s + ")";
      this.context.fillRect(0, 0, this.width, this.height);
      this.dirty = true;
      return this;
    },
    generateTexture: function (t) {
      var e = new Image();
      e.src = this.canvas.toDataURL("image/png");
      var i = this.game.cache.addImage(t, "", e);
      return new PIXI.Texture(i.base);
    },
    resize: function (t, e) {
      if (t !== this.width || e !== this.height) {
        this.width = t;
        this.height = e;
        this.canvas.width = t;
        this.canvas.height = e;
        if (this._swapCanvas !== undefined) {
          this._swapCanvas.width = t;
          this._swapCanvas.height = e;
        }
        this.baseTexture.width = t;
        this.baseTexture.height = e;
        this.textureFrame.width = t;
        this.textureFrame.height = e;
        this.texture.width = t;
        this.texture.height = e;
        this.texture.crop.width = t;
        this.texture.crop.height = e;
        this.update();
        this.dirty = true;
      }
      return this;
    },
    update: function (t = 0, e = 0, i = Math.max(1, this.width), s = Math.max(1, this.height)) {
      this.imageData = this.context.getImageData(t, e, i, s);
      this.data = this.imageData.data;
      if (this.imageData.data.buffer) {
        this.buffer = this.imageData.data.buffer;
        this.pixels = new Uint32Array(this.buffer);
      } else if (window.ArrayBuffer) {
        this.buffer = new ArrayBuffer(this.imageData.data.length);
        this.pixels = new Uint32Array(this.buffer);
      } else {
        this.pixels = this.imageData.data;
      }
      return this;
    },
    processPixelRGB: function (t, e, i = 0, s = 0, n = this.width, o = this.height) {
      var r = i + n;
      for (var h = s + o, l = a.Color.createColor(), c = {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        }, u = false, d = s; d < h; d++) {
        for (var p = i; p < r; p++) {
          a.Color.unpackPixel(this.getPixel32(p, d), l);
          if ((c = t.call(e, l, p, d)) !== false && c !== null && c !== undefined) {
            this.setPixel32(p, d, c.r, c.g, c.b, c.a, false);
            u = true;
          }
        }
      }
      if (u) {
        this.context.putImageData(this.imageData, 0, 0);
        this.dirty = true;
      }
      return this;
    },
    processPixel: function (t, e, i = 0, s = 0, n = this.width, a = this.height) {
      var o = i + n;
      for (var r = s + a, h = 0, l = 0, c = false, u = s; u < r; u++) {
        for (var d = i; d < o; d++) {
          h = this.getPixel32(d, u);
          if ((l = t.call(e, h, d, u)) !== h) {
            this.pixels[u * this.width + d] = l;
            c = true;
          }
        }
      }
      if (c) {
        this.context.putImageData(this.imageData, 0, 0);
        this.dirty = true;
      }
      return this;
    },
    replaceRGB: function (t, e, i, s, n, o, r, h, l) {
      var c = 0;
      var u = 0;
      var d = this.width;
      var p = this.height;
      var f = a.Color.packPixel(t, e, i, s);
      if (l !== undefined && l instanceof a.Rectangle) {
        c = l.x;
        u = l.y;
        d = l.width;
        p = l.height;
      }
      for (var g = 0; g < p; g++) {
        for (var m = 0; m < d; m++) {
          if (this.getPixel32(c + m, u + g) === f) {
            this.setPixel32(c + m, u + g, n, o, r, h, false);
          }
        }
      }
      this.context.putImageData(this.imageData, 0, 0);
      this.dirty = true;
      return this;
    },
    setHSL: function (t, e, i, s) {
      var n = t || t === 0;
      var o = e || e === 0;
      var r = i || i === 0;
      if (n || o || r) {
        if (s === undefined) {
          s = new a.Rectangle(0, 0, this.width, this.height);
        }
        var h = a.Color.createColor();
        for (var l = s.y; l < s.bottom; l++) {
          for (var c = s.x; c < s.right; c++) {
            a.Color.unpackPixel(this.getPixel32(c, l), h, true);
            if (n) {
              h.h = t;
            }
            if (o) {
              h.s = e;
            }
            if (r) {
              h.l = i;
            }
            a.Color.HSLtoRGB(h.h, h.s, h.l, h);
            this.setPixel32(c, l, h.r, h.g, h.b, h.a, false);
          }
        }
        this.context.putImageData(this.imageData, 0, 0);
        this.dirty = true;
        return this;
      }
    },
    shiftHSL: function (t, e, i, s) {
      if (t === undefined || t === null) {
        t = false;
      }
      if (e === undefined || e === null) {
        e = false;
      }
      if (i === undefined || i === null) {
        i = false;
      }
      if (t || e || i) {
        if (s === undefined) {
          s = new a.Rectangle(0, 0, this.width, this.height);
        }
        var n = a.Color.createColor();
        for (var o = s.y; o < s.bottom; o++) {
          for (var r = s.x; r < s.right; r++) {
            a.Color.unpackPixel(this.getPixel32(r, o), n, true);
            if (t) {
              n.h = this.game.math.wrap(n.h + t, 0, 1);
            }
            if (e) {
              n.s = this.game.math.clamp(n.s + e, 0, 1);
            }
            if (i) {
              n.l = this.game.math.clamp(n.l + i, 0, 1);
            }
            a.Color.HSLtoRGB(n.h, n.s, n.l, n);
            this.setPixel32(r, o, n.r, n.g, n.b, n.a, false);
          }
        }
        this.context.putImageData(this.imageData, 0, 0);
        this.dirty = true;
        return this;
      }
    },
    setPixel32: function (t, e, i, s, n, o, r = true) {
      if (t >= 0 && t <= this.width && e >= 0 && e <= this.height) {
        if (a.Device.LITTLE_ENDIAN) {
          this.pixels[e * this.width + t] = o << 24 | n << 16 | s << 8 | i;
        } else {
          this.pixels[e * this.width + t] = i << 24 | s << 16 | n << 8 | o;
        }
        if (r) {
          this.context.putImageData(this.imageData, 0, 0);
          this.dirty = true;
        }
      }
      return this;
    },
    setPixel: function (t, e, i, s, n, a) {
      return this.setPixel32(t, e, i, s, n, 255, a);
    },
    getPixel: function (t, e, i) {
      i ||= a.Color.createColor();
      var s = ~~(t + e * this.width);
      s *= 4;
      i.r = this.data[s];
      i.g = this.data[++s];
      i.b = this.data[++s];
      i.a = this.data[++s];
      return i;
    },
    getPixel32: function (t, e) {
      if (t >= 0 && t <= this.width && e >= 0 && e <= this.height) {
        return this.pixels[e * this.width + t];
      }
    },
    getPixelRGB: function (t, e, i, s, n) {
      return a.Color.unpackPixel(this.getPixel32(t, e), i, s, n);
    },
    getPixels: function (t) {
      return this.context.getImageData(t.x, t.y, t.width, t.height);
    },
    getFirstPixel: function (t = 0) {
      var e = a.Color.createColor();
      var i = 0;
      var s = 0;
      var n = 1;
      var o = false;
      if (t === 1) {
        n = -1;
        s = this.height;
      } else if (t === 3) {
        n = -1;
        i = this.width;
      }
      do {
        a.Color.unpackPixel(this.getPixel32(i, s), e);
        if (t === 0 || t === 1) {
          if (++i === this.width) {
            i = 0;
            if ((s += n) >= this.height || s <= 0) {
              o = true;
            }
          }
        } else if (t === 2 || t === 3) {
          if (++s === this.height) {
            s = 0;
            if ((i += n) >= this.width || i <= 0) {
              o = true;
            }
          }
        }
      } while (e.a === 0 && !o);
      e.x = i;
      e.y = s;
      return e;
    },
    getBounds: function (t = new a.Rectangle()) {
      t.x = this.getFirstPixel(2).x;
      if (t.x === this.width) {
        return t.setTo(0, 0, 0, 0);
      } else {
        t.y = this.getFirstPixel(0).y;
        t.width = this.getFirstPixel(3).x - t.x + 1;
        t.height = this.getFirstPixel(1).y - t.y + 1;
        return t;
      }
    },
    addToWorld: function (t, e, i, s, n, a) {
      n = n || 1;
      a = a || 1;
      var o = this.game.add.image(t, e, this);
      o.anchor.set(i, s);
      o.scale.set(n, a);
      return o;
    },
    copy: function (t, e, i, s, n, o, r, h, l, c, u, d, p, f, g, m, y) {
      if (t === undefined || t === null) {
        t = this;
      }
      if (t instanceof a.RenderTexture || t instanceof PIXI.RenderTexture) {
        t = t.getCanvas();
      }
      this._image = t;
      if (t instanceof a.Sprite || t instanceof a.Image || t instanceof a.Text || t instanceof PIXI.Sprite) {
        this._pos.set(t.texture.crop.x, t.texture.crop.y);
        this._size.set(t.texture.crop.width, t.texture.crop.height);
        this._scale.set(t.scale.x, t.scale.y);
        this._anchor.set(t.anchor.x, t.anchor.y);
        this._rotate = t.rotation;
        this._alpha.current = t.alpha;
        if (t.texture instanceof a.RenderTexture || t.texture instanceof PIXI.RenderTexture) {
          this._image = t.texture.getCanvas();
        } else {
          this._image = t.texture.baseTexture.source;
        }
        if (o === undefined || o === null) {
          o = t.x;
        }
        if (r === undefined || r === null) {
          r = t.y;
        }
        if (t.texture.trim) {
          o += t.texture.trim.x - t.anchor.x * t.texture.trim.width;
          r += t.texture.trim.y - t.anchor.y * t.texture.trim.height;
        }
        if (t.tint !== 16777215) {
          if (t.cachedTint !== t.tint) {
            t.cachedTint = t.tint;
            t.tintedTexture = PIXI.CanvasTinter.getTintedTexture(t, t.tint);
          }
          this._image = t.tintedTexture;
          this._pos.set(0);
        }
      } else {
        this._pos.set(0);
        this._scale.set(1);
        this._anchor.set(0);
        this._rotate = 0;
        this._alpha.current = 1;
        if (t instanceof a.BitmapData) {
          this._image = t.canvas;
        } else if (typeof t == "string") {
          if ((t = this.game.cache.getImage(t)) === null) {
            return;
          }
          this._image = t;
        }
        this._size.set(this._image.width, this._image.height);
      }
      if (e === undefined || e === null) {
        e = 0;
      }
      if (i === undefined || i === null) {
        i = 0;
      }
      if (s) {
        this._size.x = s;
      }
      if (n) {
        this._size.y = n;
      }
      if (o === undefined || o === null) {
        o = e;
      }
      if (r === undefined || r === null) {
        r = i;
      }
      if (h === undefined || h === null) {
        h = this._size.x;
      }
      if (l === undefined || l === null) {
        l = this._size.y;
      }
      if (typeof c == "number") {
        this._rotate = c;
      }
      if (typeof u == "number") {
        this._anchor.x = u;
      }
      if (typeof d == "number") {
        this._anchor.y = d;
      }
      if (typeof p == "number") {
        this._scale.x = p;
      }
      if (typeof f == "number") {
        this._scale.y = f;
      }
      if (typeof g == "number") {
        this._alpha.current = g;
      }
      if (m === undefined) {
        m = null;
      }
      if (y === undefined) {
        y = false;
      }
      if (!(this._alpha.current <= 0) && this._scale.x !== 0 && this._scale.y !== 0 && this._size.x !== 0 && this._size.y !== 0) {
        var v = this.context;
        this._alpha.prev = v.globalAlpha;
        v.save();
        v.globalAlpha = this._alpha.current;
        if (m) {
          this.op = m;
        }
        if (y) {
          o |= 0;
          r |= 0;
        }
        v.translate(o, r);
        v.scale(this._scale.x, this._scale.y);
        v.rotate(this._rotate);
        v.drawImage(this._image, this._pos.x + e, this._pos.y + i, this._size.x, this._size.y, -h * this._anchor.x, -l * this._anchor.y, h, l);
        v.restore();
        v.globalAlpha = this._alpha.prev;
        this.dirty = true;
        return this;
      }
    },
    copyTransform: function (t, e = null, i = false) {
      if (!t.hasOwnProperty("worldTransform") || !t.worldVisible || t.worldAlpha === 0) {
        return this;
      }
      var s = t.worldTransform;
      this._pos.set(t.texture.crop.x, t.texture.crop.y);
      this._size.set(t.texture.crop.width, t.texture.crop.height);
      if (s.a === 0 || s.d === 0 || this._size.x === 0 || this._size.y === 0) {
        return this;
      }
      if (t.texture instanceof a.RenderTexture || t.texture instanceof PIXI.RenderTexture) {
        this._image = t.texture.getCanvas();
      } else {
        this._image = t.texture.baseTexture.source;
      }
      var n = s.tx;
      var o = s.ty;
      if (t.texture.trim) {
        n += t.texture.trim.x - t.anchor.x * t.texture.trim.width;
        o += t.texture.trim.y - t.anchor.y * t.texture.trim.height;
      }
      if (t.tint !== 16777215) {
        if (t.cachedTint !== t.tint) {
          t.cachedTint = t.tint;
          t.tintedTexture = PIXI.CanvasTinter.getTintedTexture(t, t.tint);
        }
        this._image = t.tintedTexture;
        this._pos.set(0);
      }
      if (i) {
        n |= 0;
        o |= 0;
      }
      var r = this.context;
      this._alpha.prev = r.globalAlpha;
      r.save();
      r.globalAlpha = this._alpha.current;
      if (e) {
        this.op = e;
      }
      r[this.smoothProperty] = t.texture.baseTexture.scaleMode === PIXI.scaleModes.LINEAR;
      r.setTransform(s.a, s.b, s.c, s.d, n, o);
      r.drawImage(this._image, this._pos.x, this._pos.y, this._size.x, this._size.y, -this._size.x * t.anchor.x, -this._size.y * t.anchor.y, this._size.x, this._size.y);
      r.restore();
      r.globalAlpha = this._alpha.prev;
      this.dirty = true;
      return this;
    },
    copyRect: function (t, e, i, s, n, a, o) {
      return this.copy(t, e.x, e.y, e.width, e.height, i, s, e.width, e.height, 0, 0, 0, 1, 1, n, a, o);
    },
    draw: function (t, e, i, s, n, a, o) {
      return this.copy(t, null, null, null, null, e, i, s, n, null, null, null, null, null, null, a, o);
    },
    drawGroup: function (t, e, i) {
      if (t.total > 0) {
        t.forEachExists(this.drawGroupProxy, this, e, i);
      }
      return this;
    },
    drawGroupProxy: function (t, e, i) {
      if (t.hasOwnProperty("texture")) {
        this.copyTransform(t, e, i);
      }
      if (t.type === a.GROUP && t.exists) {
        this.drawGroup(t, e, i);
      } else if (t.hasOwnProperty("children") && t.children.length > 0) {
        for (var s = 0; s < t.children.length; s++) {
          if (t.children[s].exists) {
            this.copyTransform(t.children[s], e, i);
          }
        }
      }
    },
    drawFull: function (t, e, i) {
      if (t.worldVisible === false || t.worldAlpha === 0 || t.hasOwnProperty("exists") && t.exists === false) {
        return this;
      }
      if (t.type !== a.GROUP && t.type !== a.EMITTER && t.type !== a.BITMAPTEXT) {
        if (t.type === a.GRAPHICS) {
          var s = t.getBounds();
          this.ctx.save();
          this.ctx.translate(s.x, s.y);
          PIXI.CanvasGraphics.renderGraphics(t, this.ctx);
          this.ctx.restore();
        } else {
          this.copy(t, null, null, null, null, t.worldPosition.x, t.worldPosition.y, null, null, t.worldRotation, null, null, t.worldScale.x, t.worldScale.y, t.worldAlpha, e, i);
        }
      }
      if (t.children) {
        for (var n = 0; n < t.children.length; n++) {
          this.drawFull(t.children[n], e, i);
        }
      }
      return this;
    },
    shadow: function (t, e, i, s) {
      var n = this.context;
      if (t === undefined || t === null) {
        n.shadowColor = "rgba(0,0,0,0)";
      } else {
        n.shadowColor = t;
        n.shadowBlur = e || 5;
        n.shadowOffsetX = i || 10;
        n.shadowOffsetY = s || 10;
      }
      return this;
    },
    alphaMask: function (t, e, i, s) {
      if (s === undefined || s === null) {
        this.draw(e).blendSourceAtop();
      } else {
        this.draw(e, s.x, s.y, s.width, s.height).blendSourceAtop();
      }
      if (i === undefined || i === null) {
        this.draw(t).blendReset();
      } else {
        this.draw(t, i.x, i.y, i.width, i.height).blendReset();
      }
      return this;
    },
    extract: function (t, e, i, s, n = 255, a = false, o = e, r = i, h = s) {
      if (a) {
        t.resize(this.width, this.height);
      }
      this.processPixelRGB(function (a, l, c) {
        if (a.r === e && a.g === i && a.b === s) {
          t.setPixel32(l, c, o, r, h, n, false);
        }
        return false;
      }, this);
      t.context.putImageData(t.imageData, 0, 0);
      t.dirty = true;
      return t;
    },
    rect: function (t, e, i, s, n) {
      if (n !== undefined) {
        this.context.fillStyle = n;
      }
      this.context.fillRect(t, e, i, s);
      return this;
    },
    text: function (t, e = 0, i = 0, s = "14px Courier", n = "rgb(255,255,255)", a = true) {
      var o = this.context;
      var r = o.font;
      o.font = s;
      if (a) {
        o.fillStyle = "rgb(0,0,0)";
        o.fillText(t, e + 1, i + 1);
      }
      o.fillStyle = n;
      o.fillText(t, e, i);
      o.font = r;
      return this;
    },
    circle: function (t, e, i, s) {
      var n = this.context;
      if (s !== undefined) {
        n.fillStyle = s;
      }
      n.beginPath();
      n.arc(t, e, i, 0, Math.PI * 2, false);
      n.closePath();
      n.fill();
      return this;
    },
    line: function (t, e, i, s, n = "#fff", a = 1) {
      var o = this.context;
      o.beginPath();
      o.moveTo(t, e);
      o.lineTo(i, s);
      o.lineWidth = a;
      o.strokeStyle = n;
      o.stroke();
      o.closePath();
      return this;
    },
    textureLine: function (t, e, i = "repeat-x") {
      if (typeof e != "string" || (e = this.game.cache.getImage(e))) {
        var s = t.length;
        if (i === "no-repeat" && s > e.width) {
          s = e.width;
        }
        var n = this.context;
        n.fillStyle = n.createPattern(e, i);
        this._circle = new a.Circle(t.start.x, t.start.y, e.height);
        this._circle.circumferencePoint(t.angle - 1.5707963267948966, false, this._pos);
        n.save();
        n.translate(this._pos.x, this._pos.y);
        n.rotate(t.angle);
        n.fillRect(0, 0, s, e.height);
        n.restore();
        this.dirty = true;
        return this;
      }
    },
    render: function () {
      if (!this.disableTextureUpload && this.dirty) {
        this.baseTexture.dirty();
        this.dirty = false;
      }
      return this;
    },
    destroy: function () {
      this.frameData.destroy();
      this.texture.destroy(true);
      PIXI.CanvasPool.remove(this);
    },
    blendReset: function () {
      this.op = "source-over";
      return this;
    },
    blendSourceOver: function () {
      this.op = "source-over";
      return this;
    },
    blendSourceIn: function () {
      this.op = "source-in";
      return this;
    },
    blendSourceOut: function () {
      this.op = "source-out";
      return this;
    },
    blendSourceAtop: function () {
      this.op = "source-atop";
      return this;
    },
    blendDestinationOver: function () {
      this.op = "destination-over";
      return this;
    },
    blendDestinationIn: function () {
      this.op = "destination-in";
      return this;
    },
    blendDestinationOut: function () {
      this.op = "destination-out";
      return this;
    },
    blendDestinationAtop: function () {
      this.op = "destination-atop";
      return this;
    },
    blendXor: function () {
      this.op = "xor";
      return this;
    },
    blendAdd: function () {
      this.op = "lighter";
      return this;
    },
    blendMultiply: function () {
      this.op = "multiply";
      return this;
    },
    blendScreen: function () {
      this.op = "screen";
      return this;
    },
    blendOverlay: function () {
      this.op = "overlay";
      return this;
    },
    blendDarken: function () {
      this.op = "darken";
      return this;
    },
    blendLighten: function () {
      this.op = "lighten";
      return this;
    },
    blendColorDodge: function () {
      this.op = "color-dodge";
      return this;
    },
    blendColorBurn: function () {
      this.op = "color-burn";
      return this;
    },
    blendHardLight: function () {
      this.op = "hard-light";
      return this;
    },
    blendSoftLight: function () {
      this.op = "soft-light";
      return this;
    },
    blendDifference: function () {
      this.op = "difference";
      return this;
    },
    blendExclusion: function () {
      this.op = "exclusion";
      return this;
    },
    blendHue: function () {
      this.op = "hue";
      return this;
    },
    blendSaturation: function () {
      this.op = "saturation";
      return this;
    },
    blendColor: function () {
      this.op = "color";
      return this;
    },
    blendLuminosity: function () {
      this.op = "luminosity";
      return this;
    }
  };
  Object.defineProperty(a.BitmapData.prototype, "smoothed", {
    get: function () {
      a.Canvas.getSmoothingEnabled(this.context);
    },
    set: function (t) {
      a.Canvas.setSmoothingEnabled(this.context, t);
    }
  });
  Object.defineProperty(a.BitmapData.prototype, "op", {
    get: function () {
      return this.context.globalCompositeOperation;
    },
    set: function (t) {
      this.context.globalCompositeOperation = t;
    }
  });
  a.BitmapData.getTransform = function (t, e, i, s, n, a) {
    if (typeof t != "number") {
      t = 0;
    }
    if (typeof e != "number") {
      e = 0;
    }
    if (typeof i != "number") {
      i = 1;
    }
    if (typeof s != "number") {
      s = 1;
    }
    if (typeof n != "number") {
      n = 0;
    }
    if (typeof a != "number") {
      a = 0;
    }
    return {
      sx: i,
      sy: s,
      scaleX: i,
      scaleY: s,
      skewX: n,
      skewY: a,
      translateX: t,
      translateY: e,
      tx: t,
      ty: e
    };
  };
  a.BitmapData.prototype.constructor = a.BitmapData;
  PIXI.Graphics = function () {
    PIXI.DisplayObjectContainer.call(this);
    this.renderable = true;
    this.fillAlpha = 1;
    this.lineWidth = 0;
    this.lineColor = 0;
    this.graphicsData = [];
    this.tint = 16777215;
    this.blendMode = PIXI.blendModes.NORMAL;
    this.currentPath = null;
    this._webGL = [];
    this.isMask = false;
    this.boundsPadding = 0;
    this._localBounds = new PIXI.Rectangle(0, 0, 1, 1);
    this.dirty = true;
    this._boundsDirty = false;
    this.webGLDirty = false;
    this.cachedSpriteDirty = false;
  };
  PIXI.Graphics.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  PIXI.Graphics.prototype.constructor = PIXI.Graphics;
  PIXI.Graphics.prototype.lineStyle = function (t, e, i) {
    this.lineWidth = t || 0;
    this.lineColor = e || 0;
    this.lineAlpha = i === undefined ? 1 : i;
    if (this.currentPath) {
      if (this.currentPath.shape.points.length) {
        this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2)));
      } else {
        this.currentPath.lineWidth = this.lineWidth;
        this.currentPath.lineColor = this.lineColor;
        this.currentPath.lineAlpha = this.lineAlpha;
      }
    }
    return this;
  };
  PIXI.Graphics.prototype.moveTo = function (t, e) {
    this.drawShape(new PIXI.Polygon([t, e]));
    return this;
  };
  PIXI.Graphics.prototype.lineTo = function (t, e) {
    if (!this.currentPath) {
      this.moveTo(0, 0);
    }
    this.currentPath.shape.points.push(t, e);
    this.dirty = true;
    this._boundsDirty = true;
    return this;
  };
  PIXI.Graphics.prototype.quadraticCurveTo = function (t, e, i, s) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length === 0) {
        this.currentPath.shape.points = [0, 0];
      }
    } else {
      this.moveTo(0, 0);
    }
    var n;
    var a;
    var o = 20;
    var r = this.currentPath.shape.points;
    if (r.length === 0) {
      this.moveTo(0, 0);
    }
    var h = r[r.length - 2];
    var l = r[r.length - 1];
    var c = 0;
    for (var u = 1; u <= o; ++u) {
      c = u / o;
      n = h + (t - h) * c;
      a = l + (e - l) * c;
      r.push(n + (t + (i - t) * c - n) * c, a + (e + (s - e) * c - a) * c);
    }
    this.dirty = true;
    this._boundsDirty = true;
    return this;
  };
  PIXI.Graphics.prototype.bezierCurveTo = function (t, e, i, s, n, a) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length === 0) {
        this.currentPath.shape.points = [0, 0];
      }
    } else {
      this.moveTo(0, 0);
    }
    for (var o = 20, r, h, l, c, u, d = this.currentPath.shape.points, p = d[d.length - 2], f = d[d.length - 1], g = 0, m = 1; m <= o; ++m) {
      g = m / o;
      r = 1 - g;
      h = r * r;
      l = h * r;
      c = g * g;
      u = c * g;
      d.push(l * p + h * 3 * g * t + r * 3 * c * i + u * n, l * f + h * 3 * g * e + r * 3 * c * s + u * a);
    }
    this.dirty = true;
    this._boundsDirty = true;
    return this;
  };
  PIXI.Graphics.prototype.arcTo = function (t, e, i, s, n) {
    if (this.currentPath) {
      if (this.currentPath.shape.points.length === 0) {
        this.currentPath.shape.points.push(t, e);
      }
    } else {
      this.moveTo(t, e);
    }
    var a = this.currentPath.shape.points;
    var o = a[a.length - 2];
    var r = a[a.length - 1];
    var h = r - e;
    var l = o - t;
    var c = s - e;
    var u = i - t;
    var d = Math.abs(h * u - l * c);
    if (d < 1e-8 || n === 0) {
      if (a[a.length - 2] !== t || a[a.length - 1] !== e) {
        a.push(t, e);
      }
    } else {
      var p = h * h + l * l;
      var f = c * c + u * u;
      var g = h * c + l * u;
      var m = n * Math.sqrt(p) / d;
      var y = n * Math.sqrt(f) / d;
      var v = m * g / p;
      var b = y * g / f;
      var _ = m * u + y * l;
      var x = m * c + y * h;
      var w = l * (y + v);
      var P = h * (y + v);
      var T = u * (m + b);
      var S = c * (m + b);
      var C = Math.atan2(P - x, w - _);
      var A = Math.atan2(S - x, T - _);
      this.arc(_ + t, x + e, n, C, A, l * c > u * h);
    }
    this.dirty = true;
    this._boundsDirty = true;
    return this;
  };
  PIXI.Graphics.prototype.arc = function (t, e, i, s, n, a, o) {
    if (s === n) {
      return this;
    }
    if (a === undefined) {
      a = false;
    }
    if (o === undefined) {
      o = 40;
    }
    if (!a && n <= s) {
      n += Math.PI * 2;
    } else if (a && s <= n) {
      s += Math.PI * 2;
    }
    var r = a ? (s - n) * -1 : n - s;
    var h = Math.ceil(Math.abs(r) / (Math.PI * 2)) * o;
    if (r === 0) {
      return this;
    }
    var l = t + Math.cos(s) * i;
    var c = e + Math.sin(s) * i;
    if (a && this.filling) {
      this.moveTo(t, e);
    } else {
      this.moveTo(l, c);
    }
    var u = this.currentPath.shape.points;
    var d = r / (h * 2);
    var p = d * 2;
    var f = Math.cos(d);
    var g = Math.sin(d);
    for (var m = h - 1, y = m % 1 / m, v = 0; v <= m; v++) {
      var b = v + y * v;
      var _ = d + s + p * b;
      var x = Math.cos(_);
      var w = -Math.sin(_);
      u.push((f * x + g * w) * i + t, (f * -w + g * x) * i + e);
    }
    this.dirty = true;
    this._boundsDirty = true;
    return this;
  };
  PIXI.Graphics.prototype.beginFill = function (t, e) {
    this.filling = true;
    this.fillColor = t || 0;
    this.fillAlpha = e === undefined ? 1 : e;
    if (this.currentPath && this.currentPath.shape.points.length <= 2) {
      this.currentPath.fill = this.filling;
      this.currentPath.fillColor = this.fillColor;
      this.currentPath.fillAlpha = this.fillAlpha;
    }
    return this;
  };
  PIXI.Graphics.prototype.endFill = function () {
    this.filling = false;
    this.fillColor = null;
    this.fillAlpha = 1;
    return this;
  };
  PIXI.Graphics.prototype.drawRect = function (t, e, i, s) {
    this.drawShape(new PIXI.Rectangle(t, e, i, s));
    return this;
  };
  PIXI.Graphics.prototype.drawRoundedRect = function (t, e, i, s, n) {
    this.drawShape(new PIXI.RoundedRectangle(t, e, i, s, n));
    return this;
  };
  PIXI.Graphics.prototype.drawCircle = function (t, e, i) {
    this.drawShape(new PIXI.Circle(t, e, i));
    return this;
  };
  PIXI.Graphics.prototype.drawEllipse = function (t, e, i, s) {
    this.drawShape(new PIXI.Ellipse(t, e, i, s));
    return this;
  };
  PIXI.Graphics.prototype.drawPolygon = function (t) {
    if (t instanceof a.Polygon || t instanceof PIXI.Polygon) {
      t = t.points;
    }
    var e = t;
    if (!Array.isArray(e)) {
      e = new Array(arguments.length);
      for (var i = 0; i < e.length; ++i) {
        e[i] = arguments[i];
      }
    }
    this.drawShape(new a.Polygon(e));
    return this;
  };
  PIXI.Graphics.prototype.clear = function () {
    this.lineWidth = 0;
    this.filling = false;
    this.dirty = true;
    this._boundsDirty = true;
    this.clearDirty = true;
    this.graphicsData = [];
    this.updateLocalBounds();
    return this;
  };
  PIXI.Graphics.prototype.generateTexture = function (t = 1, e = PIXI.scaleModes.DEFAULT, i = 0) {
    var s = this.getBounds();
    s.width += i;
    s.height += i;
    var n = new PIXI.CanvasBuffer(s.width * t, s.height * t);
    var a = PIXI.Texture.fromCanvas(n.canvas, e);
    a.baseTexture.resolution = t;
    n.context.scale(t, t);
    n.context.translate(-s.x, -s.y);
    PIXI.CanvasGraphics.renderGraphics(this, n.context);
    return a;
  };
  PIXI.Graphics.prototype._renderWebGL = function (t) {
    if (this.visible !== false && this.alpha !== 0 && this.isMask !== true) {
      if (this._cacheAsBitmap) {
        if (this.dirty || this.cachedSpriteDirty) {
          this._generateCachedSprite();
          this.updateCachedSpriteTexture();
          this.cachedSpriteDirty = false;
          this.dirty = false;
        }
        this._cachedSprite.worldAlpha = this.worldAlpha;
        PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, t);
        return;
      }
      t.spriteBatch.stop();
      t.blendModeManager.setBlendMode(this.blendMode);
      if (this._mask) {
        t.maskManager.pushMask(this._mask, t);
      }
      if (this._filters) {
        t.filterManager.pushFilter(this._filterBlock);
      }
      if (this.blendMode !== t.spriteBatch.currentBlendMode) {
        t.spriteBatch.currentBlendMode = this.blendMode;
        var e = PIXI.blendModesWebGL[t.spriteBatch.currentBlendMode];
        t.spriteBatch.gl.blendFunc(e[0], e[1]);
      }
      if (this.webGLDirty) {
        this.dirty = true;
        this.webGLDirty = false;
      }
      PIXI.WebGLGraphics.renderGraphics(this, t);
      if (this.children.length) {
        t.spriteBatch.start();
        for (var i = 0; i < this.children.length; i++) {
          this.children[i]._renderWebGL(t);
        }
        t.spriteBatch.stop();
      }
      if (this._filters) {
        t.filterManager.popFilter();
      }
      if (this._mask) {
        t.maskManager.popMask(this.mask, t);
      }
      t.drawCount++;
      t.spriteBatch.start();
    }
  };
  PIXI.Graphics.prototype._renderCanvas = function (t) {
    if (this.visible !== false && this.alpha !== 0 && this.isMask !== true) {
      if (this._prevTint !== this.tint) {
        this.dirty = true;
        this._prevTint = this.tint;
      }
      if (this._cacheAsBitmap) {
        if (this.dirty || this.cachedSpriteDirty) {
          this._generateCachedSprite();
          this.updateCachedSpriteTexture();
          this.cachedSpriteDirty = false;
          this.dirty = false;
        }
        this._cachedSprite.alpha = this.alpha;
        PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite, t);
        return;
      }
      var e = t.context;
      var i = this.worldTransform;
      if (this.blendMode !== t.currentBlendMode) {
        t.currentBlendMode = this.blendMode;
        e.globalCompositeOperation = PIXI.blendModesCanvas[t.currentBlendMode];
      }
      if (this._mask) {
        t.maskManager.pushMask(this._mask, t);
      }
      var s = t.resolution;
      var n = i.tx * t.resolution + t.shakeX;
      var a = i.ty * t.resolution + t.shakeY;
      e.setTransform(i.a * s, i.b * s, i.c * s, i.d * s, n, a);
      PIXI.CanvasGraphics.renderGraphics(this, e);
      for (var o = 0; o < this.children.length; o++) {
        this.children[o]._renderCanvas(t);
      }
      if (this._mask) {
        t.maskManager.popMask(t);
      }
    }
  };
  PIXI.Graphics.prototype.getBounds = function (t) {
    if (!this._currentBounds) {
      if (!this.renderable) {
        return PIXI.EmptyRectangle;
      }
      if (this.dirty) {
        this.updateLocalBounds();
        this.webGLDirty = true;
        this.cachedSpriteDirty = true;
        this.dirty = false;
      }
      var e = this._localBounds;
      var i = e.x;
      var s = e.width + e.x;
      var n = e.y;
      var a = e.height + e.y;
      var o = t || this.worldTransform;
      var r = o.a;
      var h = o.b;
      var l = o.c;
      var c = o.d;
      var u = o.tx;
      var d = o.ty;
      var p = r * s + l * a + u;
      var f = c * a + h * s + d;
      var g = r * i + l * a + u;
      var m = c * a + h * i + d;
      var y = r * i + l * n + u;
      var v = c * n + h * i + d;
      var b = r * s + l * n + u;
      var _ = c * n + h * s + d;
      var x = p;
      var w = f;
      var P = p;
      var T = f;
      P = g < P ? g : P;
      P = y < P ? y : P;
      P = b < P ? b : P;
      T = m < T ? m : T;
      T = v < T ? v : T;
      T = _ < T ? _ : T;
      x = g > x ? g : x;
      x = y > x ? y : x;
      x = b > x ? b : x;
      w = m > w ? m : w;
      w = v > w ? v : w;
      w = _ > w ? _ : w;
      this._bounds.x = P;
      this._bounds.width = x - P;
      this._bounds.y = T;
      this._bounds.height = w - T;
      this._currentBounds = this._bounds;
    }
    return this._currentBounds;
  };
  PIXI.Graphics.prototype.getLocalBounds = function () {
    var t = this.worldTransform;
    this.worldTransform = PIXI.identityMatrix;
    for (var e = 0; e < this.children.length; e++) {
      this.children[e].updateTransform();
    }
    var i = this.getBounds();
    this.worldTransform = t;
    e = 0;
    for (; e < this.children.length; e++) {
      this.children[e].updateTransform();
    }
    return i;
  };
  PIXI.Graphics.prototype.containsPoint = function (t) {
    this.worldTransform.applyInverse(t, tempPoint);
    for (var e = this.graphicsData, i = 0; i < e.length; i++) {
      var s = e[i];
      if (s.fill && s.shape && s.shape.contains(tempPoint.x, tempPoint.y)) {
        return true;
      }
    }
    return false;
  };
  PIXI.Graphics.prototype.updateLocalBounds = function () {
    var t = Infinity;
    var e = -Infinity;
    var i = Infinity;
    var s = -Infinity;
    if (this.graphicsData.length) {
      var n;
      var o;
      var r;
      var h;
      var l;
      var c;
      for (var u = 0; u < this.graphicsData.length; u++) {
        var d = this.graphicsData[u];
        var p = d.type;
        var f = d.lineWidth;
        n = d.shape;
        if (p === PIXI.Graphics.RECT || p === PIXI.Graphics.RREC) {
          r = n.x - f / 2;
          h = n.y - f / 2;
          l = n.width + f;
          c = n.height + f;
          t = r < t ? r : t;
          e = r + l > e ? r + l : e;
          i = h < i ? h : i;
          s = h + c > s ? h + c : s;
        } else if (p === PIXI.Graphics.CIRC) {
          r = n.x;
          h = n.y;
          l = n.radius + f / 2;
          c = n.radius + f / 2;
          t = r - l < t ? r - l : t;
          e = r + l > e ? r + l : e;
          i = h - c < i ? h - c : i;
          s = h + c > s ? h + c : s;
        } else if (p === PIXI.Graphics.ELIP) {
          r = n.x;
          h = n.y;
          l = n.width + f / 2;
          c = n.height + f / 2;
          t = r - l < t ? r - l : t;
          e = r + l > e ? r + l : e;
          i = h - c < i ? h - c : i;
          s = h + c > s ? h + c : s;
        } else {
          o = n.points;
          for (var g = 0; g < o.length; g++) {
            if (o[g] instanceof a.Point) {
              r = o[g].x;
              h = o[g].y;
            } else {
              r = o[g];
              h = o[g + 1];
              if (g < o.length - 1) {
                g++;
              }
            }
            t = r - f < t ? r - f : t;
            e = r + f > e ? r + f : e;
            i = h - f < i ? h - f : i;
            s = h + f > s ? h + f : s;
          }
        }
      }
    } else {
      t = 0;
      e = 0;
      i = 0;
      s = 0;
    }
    var m = this.boundsPadding;
    this._localBounds.x = t - m;
    this._localBounds.width = e - t + m * 2;
    this._localBounds.y = i - m;
    this._localBounds.height = s - i + m * 2;
  };
  PIXI.Graphics.prototype._generateCachedSprite = function () {
    var t = this.getLocalBounds();
    if (this._cachedSprite) {
      this._cachedSprite.buffer.resize(t.width, t.height);
    } else {
      var e = new PIXI.CanvasBuffer(t.width, t.height);
      var i = PIXI.Texture.fromCanvas(e.canvas);
      this._cachedSprite = new PIXI.Sprite(i);
      this._cachedSprite.buffer = e;
      this._cachedSprite.worldTransform = this.worldTransform;
    }
    this._cachedSprite.anchor.x = -t.x / t.width;
    this._cachedSprite.anchor.y = -t.y / t.height;
    this._cachedSprite.buffer.context.translate(-t.x, -t.y);
    this.worldAlpha = 1;
    PIXI.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context);
    this._cachedSprite.alpha = this.alpha;
  };
  PIXI.Graphics.prototype.updateCachedSpriteTexture = function () {
    var t = this._cachedSprite;
    var e = t.texture;
    var i = t.buffer.canvas;
    e.baseTexture.width = i.width;
    e.baseTexture.height = i.height;
    e.crop.width = e.frame.width = i.width;
    e.crop.height = e.frame.height = i.height;
    t._width = i.width;
    t._height = i.height;
    e.baseTexture.dirty();
  };
  PIXI.Graphics.prototype.destroyCachedSprite = function () {
    this._cachedSprite.texture.destroy(true);
    this._cachedSprite = null;
  };
  PIXI.Graphics.prototype.drawShape = function (t) {
    if (this.currentPath && this.currentPath.shape.points.length <= 2) {
      this.graphicsData.pop();
    }
    this.currentPath = null;
    if (t instanceof a.Polygon) {
      t = t.clone();
      t.flatten();
    }
    var e = new PIXI.GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
    this.graphicsData.push(e);
    if (e.type === PIXI.Graphics.POLY) {
      e.shape.closed = this.filling;
      this.currentPath = e;
    }
    this.dirty = true;
    this._boundsDirty = true;
    return e;
  };
  Object.defineProperty(PIXI.Graphics.prototype, "cacheAsBitmap", {
    get: function () {
      return this._cacheAsBitmap;
    },
    set: function (t) {
      this._cacheAsBitmap = t;
      if (this._cacheAsBitmap) {
        this._generateCachedSprite();
      } else {
        this.destroyCachedSprite();
      }
      this.dirty = true;
      this.webGLDirty = true;
    }
  });
  PIXI.GraphicsData = function (t, e, i, s, n, a, o) {
    this.lineWidth = t;
    this.lineColor = e;
    this.lineAlpha = i;
    this._lineTint = e;
    this.fillColor = s;
    this.fillAlpha = n;
    this._fillTint = s;
    this.fill = a;
    this.shape = o;
    this.type = o.type;
  };
  PIXI.GraphicsData.prototype.constructor = PIXI.GraphicsData;
  PIXI.GraphicsData.prototype.clone = function () {
    return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape);
  };
  PIXI.EarCut = {};
  PIXI.EarCut.Triangulate = function (t, e, i) {
    i = i || 2;
    var s = e && e.length;
    var n = s ? e[0] * i : t.length;
    var a = PIXI.EarCut.linkedList(t, 0, n, i, true);
    var o = [];
    if (!a) {
      return o;
    }
    var r;
    var h;
    var l;
    var c;
    var u;
    var d;
    var p;
    if (s) {
      a = PIXI.EarCut.eliminateHoles(t, e, a, i);
    }
    if (t.length > i * 80) {
      r = l = t[0];
      h = c = t[1];
      for (var f = i; f < n; f += i) {
        u = t[f];
        d = t[f + 1];
        if (u < r) {
          r = u;
        }
        if (d < h) {
          h = d;
        }
        if (u > l) {
          l = u;
        }
        if (d > c) {
          c = d;
        }
      }
      p = Math.max(l - r, c - h);
    }
    PIXI.EarCut.earcutLinked(a, o, i, r, h, p);
    return o;
  };
  PIXI.EarCut.linkedList = function (t, e, i, s, n) {
    var a = 0;
    var o;
    var r;
    var h;
    o = e;
    r = i - s;
    for (; o < i; o += s) {
      a += (t[r] - t[o]) * (t[o + 1] + t[r + 1]);
      r = o;
    }
    if (n === a > 0) {
      for (o = e; o < i; o += s) {
        h = PIXI.EarCut.insertNode(o, t[o], t[o + 1], h);
      }
    } else {
      for (o = i - s; o >= e; o -= s) {
        h = PIXI.EarCut.insertNode(o, t[o], t[o + 1], h);
      }
    }
    return h;
  };
  PIXI.EarCut.filterPoints = function (t, e) {
    if (!t) {
      return t;
    }
    e ||= t;
    var i = t;
    var s;
    do {
      s = false;
      if (i.steiner || !PIXI.EarCut.equals(i, i.next) && PIXI.EarCut.area(i.prev, i, i.next) !== 0) {
        i = i.next;
      } else {
        PIXI.EarCut.removeNode(i);
        if ((i = e = i.prev) === i.next) {
          return null;
        }
        s = true;
      }
    } while (s || i !== e);
    return e;
  };
  PIXI.EarCut.earcutLinked = function (t, e, i, s, n, a, o) {
    if (t) {
      if (!o && a) {
        PIXI.EarCut.indexCurve(t, s, n, a);
      }
      var r = t;
      var h;
      var l;
      while (t.prev !== t.next) {
        h = t.prev;
        l = t.next;
        if (a ? PIXI.EarCut.isEarHashed(t, s, n, a) : PIXI.EarCut.isEar(t)) {
          e.push(h.i / i);
          e.push(t.i / i);
          e.push(l.i / i);
          PIXI.EarCut.removeNode(t);
          t = l.next;
          r = l.next;
        } else if ((t = l) === r) {
          if (o) {
            if (o === 1) {
              t = PIXI.EarCut.cureLocalIntersections(t, e, i);
              PIXI.EarCut.earcutLinked(t, e, i, s, n, a, 2);
            } else if (o === 2) {
              PIXI.EarCut.splitEarcut(t, e, i, s, n, a);
            }
          } else {
            PIXI.EarCut.earcutLinked(PIXI.EarCut.filterPoints(t), e, i, s, n, a, 1);
          }
          break;
        }
      }
    }
  };
  PIXI.EarCut.isEar = function (t) {
    var e = t.prev;
    var i = t;
    var s = t.next;
    if (PIXI.EarCut.area(e, i, s) >= 0) {
      return false;
    }
    for (var n = t.next.next; n !== t.prev;) {
      if (PIXI.EarCut.pointInTriangle(e.x, e.y, i.x, i.y, s.x, s.y, n.x, n.y) && PIXI.EarCut.area(n.prev, n, n.next) >= 0) {
        return false;
      }
      n = n.next;
    }
    return true;
  };
  PIXI.EarCut.isEarHashed = function (t, e, i, s) {
    var n = t.prev;
    var a = t;
    var o = t.next;
    if (PIXI.EarCut.area(n, a, o) >= 0) {
      return false;
    }
    var r = n.x < a.x ? n.x < o.x ? n.x : o.x : a.x < o.x ? a.x : o.x;
    var h = n.y < a.y ? n.y < o.y ? n.y : o.y : a.y < o.y ? a.y : o.y;
    var l = n.x > a.x ? n.x > o.x ? n.x : o.x : a.x > o.x ? a.x : o.x;
    var c = n.y > a.y ? n.y > o.y ? n.y : o.y : a.y > o.y ? a.y : o.y;
    var u = PIXI.EarCut.zOrder(r, h, e, i, s);
    for (var d = PIXI.EarCut.zOrder(l, c, e, i, s), p = t.nextZ; p && p.z <= d;) {
      if (p !== t.prev && p !== t.next && PIXI.EarCut.pointInTriangle(n.x, n.y, a.x, a.y, o.x, o.y, p.x, p.y) && PIXI.EarCut.area(p.prev, p, p.next) >= 0) {
        return false;
      }
      p = p.nextZ;
    }
    for (p = t.prevZ; p && p.z >= u;) {
      if (p !== t.prev && p !== t.next && PIXI.EarCut.pointInTriangle(n.x, n.y, a.x, a.y, o.x, o.y, p.x, p.y) && PIXI.EarCut.area(p.prev, p, p.next) >= 0) {
        return false;
      }
      p = p.prevZ;
    }
    return true;
  };
  PIXI.EarCut.cureLocalIntersections = function (t, e, i) {
    var s = t;
    do {
      var n = s.prev;
      var a = s.next.next;
      if (PIXI.EarCut.intersects(n, s, s.next, a) && PIXI.EarCut.locallyInside(n, a) && PIXI.EarCut.locallyInside(a, n)) {
        e.push(n.i / i);
        e.push(s.i / i);
        e.push(a.i / i);
        PIXI.EarCut.removeNode(s);
        PIXI.EarCut.removeNode(s.next);
        s = t = a;
      }
      s = s.next;
    } while (s !== t);
    return s;
  };
  PIXI.EarCut.splitEarcut = function (t, e, i, s, n, a) {
    var o = t;
    do {
      for (var r = o.next.next; r !== o.prev;) {
        if (o.i !== r.i && PIXI.EarCut.isValidDiagonal(o, r)) {
          var h = PIXI.EarCut.splitPolygon(o, r);
          o = PIXI.EarCut.filterPoints(o, o.next);
          h = PIXI.EarCut.filterPoints(h, h.next);
          PIXI.EarCut.earcutLinked(o, e, i, s, n, a);
          PIXI.EarCut.earcutLinked(h, e, i, s, n, a);
          return;
        }
        r = r.next;
      }
      o = o.next;
    } while (o !== t);
  };
  PIXI.EarCut.eliminateHoles = function (t, e, i, s) {
    var n = [];
    var a;
    var o;
    var r;
    var h;
    var l;
    a = 0;
    o = e.length;
    for (; a < o; a++) {
      r = e[a] * s;
      h = a < o - 1 ? e[a + 1] * s : t.length;
      l = PIXI.EarCut.linkedList(t, r, h, s, false);
      if (l === l.next) {
        l.steiner = true;
      }
      n.push(PIXI.EarCut.getLeftmost(l));
    }
    n.sort(compareX);
    a = 0;
    for (; a < n.length; a++) {
      PIXI.EarCut.eliminateHole(n[a], i);
      i = PIXI.EarCut.filterPoints(i, i.next);
    }
    return i;
  };
  PIXI.EarCut.compareX = function (t, e) {
    return t.x - e.x;
  };
  PIXI.EarCut.eliminateHole = function (t, e) {
    if (e = PIXI.EarCut.findHoleBridge(t, e)) {
      var i = PIXI.EarCut.splitPolygon(e, t);
      PIXI.EarCut.filterPoints(i, i.next);
    }
  };
  PIXI.EarCut.findHoleBridge = function (t, e) {
    var i = e;
    var s = t.x;
    var n = t.y;
    var a = -Infinity;
    var o;
    do {
      if (n <= i.y && n >= i.next.y) {
        var r = i.x + (n - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
        if (r <= s && r > a) {
          a = r;
          o = i.x < i.next.x ? i : i.next;
        }
      }
      i = i.next;
    } while (i !== e);
    if (!o) {
      return null;
    }
    if (t.x === o.x) {
      return o.prev;
    }
    var h = o;
    var l = Infinity;
    var c;
    for (i = o.next; i !== h;) {
      if (s >= i.x && i.x >= o.x && PIXI.EarCut.pointInTriangle(n < o.y ? s : a, n, o.x, o.y, n < o.y ? a : s, n, i.x, i.y) && ((c = Math.abs(n - i.y) / (s - i.x)) < l || c === l && i.x > o.x) && PIXI.EarCut.locallyInside(i, t)) {
        o = i;
        l = c;
      }
      i = i.next;
    }
    return o;
  };
  PIXI.EarCut.indexCurve = function (t, e, i, s) {
    var n = t;
    do {
      if (n.z === null) {
        n.z = PIXI.EarCut.zOrder(n.x, n.y, e, i, s);
      }
      n.prevZ = n.prev;
      n.nextZ = n.next;
      n = n.next;
    } while (n !== t);
    n.prevZ.nextZ = null;
    n.prevZ = null;
    PIXI.EarCut.sortLinked(n);
  };
  PIXI.EarCut.sortLinked = function (t) {
    var e;
    var i;
    var s;
    var n;
    var a;
    var o;
    var r;
    var h;
    var l = 1;
    do {
      i = t;
      t = null;
      a = null;
      o = 0;
      while (i) {
        o++;
        s = i;
        r = 0;
        e = 0;
        for (; e < l && (r++, s = s.nextZ); e++);
        for (h = l; r > 0 || h > 0 && s;) {
          if (r === 0) {
            n = s;
            s = s.nextZ;
            h--;
          } else if (h !== 0 && s) {
            if (i.z <= s.z) {
              n = i;
              i = i.nextZ;
              r--;
            } else {
              n = s;
              s = s.nextZ;
              h--;
            }
          } else {
            n = i;
            i = i.nextZ;
            r--;
          }
          if (a) {
            a.nextZ = n;
          } else {
            t = n;
          }
          n.prevZ = a;
          a = n;
        }
        i = s;
      }
      a.nextZ = null;
      l *= 2;
    } while (o > 1);
    return t;
  };
  PIXI.EarCut.zOrder = function (t, e, i, s, n) {
    t = (t - i) * 32767 / n;
    e = (e - s) * 32767 / n;
    t = (t | t << 8) & 16711935;
    t = (t | t << 4) & 252645135;
    t = (t | t << 2) & 858993459;
    t = (t | t << 1) & 1431655765;
    e = (e | e << 8) & 16711935;
    e = (e | e << 4) & 252645135;
    e = (e | e << 2) & 858993459;
    e = (e | e << 1) & 1431655765;
    return t | e << 1;
  };
  PIXI.EarCut.getLeftmost = function (t) {
    var e = t;
    var i = t;
    do {
      if (e.x < i.x) {
        i = e;
      }
      e = e.next;
    } while (e !== t);
    return i;
  };
  PIXI.EarCut.pointInTriangle = function (t, e, i, s, n, a, o, r) {
    return (n - o) * (e - r) - (t - o) * (a - r) >= 0 && (t - o) * (s - r) - (i - o) * (e - r) >= 0 && (i - o) * (a - r) - (n - o) * (s - r) >= 0;
  };
  PIXI.EarCut.isValidDiagonal = function (t, e) {
    return PIXI.EarCut.equals(t, e) || t.next.i !== e.i && t.prev.i !== e.i && !PIXI.EarCut.intersectsPolygon(t, e) && PIXI.EarCut.locallyInside(t, e) && PIXI.EarCut.locallyInside(e, t) && PIXI.EarCut.middleInside(t, e);
  };
  PIXI.EarCut.area = function (t, e, i) {
    return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
  };
  PIXI.EarCut.equals = function (t, e) {
    return t.x === e.x && t.y === e.y;
  };
  PIXI.EarCut.intersects = function (t, e, i, s) {
    return PIXI.EarCut.area(t, e, i) > 0 != PIXI.EarCut.area(t, e, s) > 0 && PIXI.EarCut.area(i, s, t) > 0 != PIXI.EarCut.area(i, s, e) > 0;
  };
  PIXI.EarCut.intersectsPolygon = function (t, e) {
    var i = t;
    do {
      if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && PIXI.EarCut.intersects(i, i.next, t, e)) {
        return true;
      }
      i = i.next;
    } while (i !== t);
    return false;
  };
  PIXI.EarCut.locallyInside = function (t, e) {
    if (PIXI.EarCut.area(t.prev, t, t.next) < 0) {
      return PIXI.EarCut.area(t, e, t.next) >= 0 && PIXI.EarCut.area(t, t.prev, e) >= 0;
    } else {
      return PIXI.EarCut.area(t, e, t.prev) < 0 || PIXI.EarCut.area(t, t.next, e) < 0;
    }
  };
  PIXI.EarCut.middleInside = function (t, e) {
    var i = t;
    var s = false;
    var n = (t.x + e.x) / 2;
    var a = (t.y + e.y) / 2;
    do {
      if (i.y > a != i.next.y > a && n < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x) {
        s = !s;
      }
      i = i.next;
    } while (i !== t);
    return s;
  };
  PIXI.EarCut.splitPolygon = function (t, e) {
    var i = new PIXI.EarCut.Node(t.i, t.x, t.y);
    var s = new PIXI.EarCut.Node(e.i, e.x, e.y);
    var n = t.next;
    var a = e.prev;
    t.next = e;
    e.prev = t;
    i.next = n;
    n.prev = i;
    s.next = i;
    i.prev = s;
    a.next = s;
    s.prev = a;
    return s;
  };
  PIXI.EarCut.insertNode = function (t, e, i, s) {
    var n = new PIXI.EarCut.Node(t, e, i);
    if (s) {
      n.next = s.next;
      n.prev = s;
      s.next.prev = n;
      s.next = n;
    } else {
      n.prev = n;
      n.next = n;
    }
    return n;
  };
  PIXI.EarCut.removeNode = function (t) {
    t.next.prev = t.prev;
    t.prev.next = t.next;
    if (t.prevZ) {
      t.prevZ.nextZ = t.nextZ;
    }
    if (t.nextZ) {
      t.nextZ.prevZ = t.prevZ;
    }
  };
  PIXI.EarCut.Node = function (t, e, i) {
    this.i = t;
    this.x = e;
    this.y = i;
    this.prev = null;
    this.next = null;
    this.z = null;
    this.prevZ = null;
    this.nextZ = null;
    this.steiner = false;
  };
  PIXI.WebGLGraphics = function () {};
  PIXI.WebGLGraphics.stencilBufferLimit = 6;
  PIXI.WebGLGraphics.renderGraphics = function (t, e) {
    var i = e.gl;
    var s = e.projection;
    var n = e.offset;
    var a = e.shaderManager.primitiveShader;
    var o;
    if (t.dirty) {
      PIXI.WebGLGraphics.updateGraphics(t, i);
    }
    for (var r = t._webGL[i.id], h = 0; h < r.data.length; h++) {
      if (r.data[h].mode === 1) {
        o = r.data[h];
        e.stencilManager.pushStencil(t, o, e);
        i.drawElements(i.TRIANGLE_FAN, 4, i.UNSIGNED_SHORT, (o.indices.length - 4) * 2);
        e.stencilManager.popStencil(t, o, e);
      } else {
        o = r.data[h];
        e.shaderManager.setShader(a);
        a = e.shaderManager.primitiveShader;
        i.uniformMatrix3fv(a.translationMatrix, false, t.worldTransform.toArray(true));
        i.uniform1f(a.flipY, 1);
        i.uniform2f(a.projectionVector, s.x, -s.y);
        i.uniform2f(a.offsetVector, -n.x, -n.y);
        i.uniform3fv(a.tintColor, PIXI.hex2rgb(t.tint));
        i.uniform1f(a.alpha, t.worldAlpha);
        i.bindBuffer(i.ARRAY_BUFFER, o.buffer);
        i.vertexAttribPointer(a.aVertexPosition, 2, i.FLOAT, false, 24, 0);
        i.vertexAttribPointer(a.colorAttribute, 4, i.FLOAT, false, 24, 8);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, o.indexBuffer);
        i.drawElements(i.TRIANGLE_STRIP, o.indices.length, i.UNSIGNED_SHORT, 0);
      }
    }
  };
  PIXI.WebGLGraphics.updateGraphics = function (t, e) {
    var i = t._webGL[e.id];
    i ||= t._webGL[e.id] = {
      lastIndex: 0,
      data: [],
      gl: e
    };
    t.dirty = false;
    var s;
    if (t.clearDirty) {
      t.clearDirty = false;
      s = 0;
      for (; s < i.data.length; s++) {
        var n = i.data[s];
        n.reset();
        PIXI.WebGLGraphics.graphicsDataPool.push(n);
      }
      i.data = [];
      i.lastIndex = 0;
    }
    var a;
    for (s = i.lastIndex; s < t.graphicsData.length; s++) {
      var o = t.graphicsData[s];
      if (o.type === PIXI.Graphics.POLY) {
        o.points = o.shape.points.slice();
        if (o.shape.closed) {
          if (o.points[0] !== o.points[o.points.length - 2] || o.points[1] !== o.points[o.points.length - 1]) {
            o.points.push(o.points[0], o.points[1]);
          }
        }
        if (o.fill && o.points.length >= PIXI.WebGLGraphics.stencilBufferLimit) {
          if (o.points.length < PIXI.WebGLGraphics.stencilBufferLimit * 2) {
            a = PIXI.WebGLGraphics.switchMode(i, 0);
            var r = PIXI.WebGLGraphics.buildPoly(o, a);
            if (!r) {
              a = PIXI.WebGLGraphics.switchMode(i, 1);
              PIXI.WebGLGraphics.buildComplexPoly(o, a);
            }
          } else {
            a = PIXI.WebGLGraphics.switchMode(i, 1);
            PIXI.WebGLGraphics.buildComplexPoly(o, a);
          }
        }
        if (o.lineWidth > 0) {
          a = PIXI.WebGLGraphics.switchMode(i, 0);
          PIXI.WebGLGraphics.buildLine(o, a);
        }
      } else {
        a = PIXI.WebGLGraphics.switchMode(i, 0);
        if (o.type === PIXI.Graphics.RECT) {
          PIXI.WebGLGraphics.buildRectangle(o, a);
        } else if (o.type === PIXI.Graphics.CIRC || o.type === PIXI.Graphics.ELIP) {
          PIXI.WebGLGraphics.buildCircle(o, a);
        } else if (o.type === PIXI.Graphics.RREC) {
          PIXI.WebGLGraphics.buildRoundedRectangle(o, a);
        }
      }
      i.lastIndex++;
    }
    for (s = 0; s < i.data.length; s++) {
      a = i.data[s];
      if (a.dirty) {
        a.upload();
      }
    }
  };
  PIXI.WebGLGraphics.switchMode = function (t, e) {
    var i;
    if (t.data.length) {
      i = t.data[t.data.length - 1];
      if (i.mode !== e || e === 1) {
        i = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(t.gl);
        i.mode = e;
        t.data.push(i);
      }
    } else {
      i = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(t.gl);
      i.mode = e;
      t.data.push(i);
    }
    i.dirty = true;
    return i;
  };
  PIXI.WebGLGraphics.buildRectangle = function (t, e) {
    var i = t.shape;
    var s = i.x;
    var n = i.y;
    var a = i.width;
    var o = i.height;
    if (t.fill) {
      var r = PIXI.hex2rgb(t.fillColor);
      var h = t.fillAlpha;
      var l = r[0] * h;
      var c = r[1] * h;
      var u = r[2] * h;
      var d = e.points;
      var p = e.indices;
      var f = d.length / 6;
      d.push(s, n);
      d.push(l, c, u, h);
      d.push(s + a, n);
      d.push(l, c, u, h);
      d.push(s, n + o);
      d.push(l, c, u, h);
      d.push(s + a, n + o);
      d.push(l, c, u, h);
      p.push(f, f, f + 1, f + 2, f + 3, f + 3);
    }
    if (t.lineWidth) {
      var g = t.points;
      t.points = [s, n, s + a, n, s + a, n + o, s, n + o, s, n];
      PIXI.WebGLGraphics.buildLine(t, e);
      t.points = g;
    }
  };
  PIXI.WebGLGraphics.buildRoundedRectangle = function (t, e) {
    var i = t.shape;
    var s = i.x;
    var n = i.y;
    var a = i.width;
    var o = i.height;
    var r = i.radius;
    var h = [];
    h.push(s, n + r);
    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s, n + o - r, s, n + o, s + r, n + o));
    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s + a - r, n + o, s + a, n + o, s + a, n + o - r));
    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s + a, n + r, s + a, n, s + a - r, n));
    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s + r, n, s, n, s, n + r));
    if (t.fill) {
      var l = PIXI.hex2rgb(t.fillColor);
      var c = t.fillAlpha;
      var u = l[0] * c;
      var d = l[1] * c;
      var p = l[2] * c;
      var f = e.points;
      var g = e.indices;
      var m = f.length / 6;
      var y = PIXI.EarCut.Triangulate(h, null, 2);
      var v = 0;
      for (v = 0; v < y.length; v += 3) {
        g.push(y[v] + m);
        g.push(y[v] + m);
        g.push(y[v + 1] + m);
        g.push(y[v + 2] + m);
        g.push(y[v + 2] + m);
      }
      for (v = 0; v < h.length; v++) {
        f.push(h[v], h[++v], u, d, p, c);
      }
    }
    if (t.lineWidth) {
      var b = t.points;
      t.points = h;
      PIXI.WebGLGraphics.buildLine(t, e);
      t.points = b;
    }
  };
  PIXI.WebGLGraphics.quadraticBezierCurve = function (t, e, i, s, n, a) {
    function o(t, e, i) {
      return t + (e - t) * i;
    }
    var r;
    var h;
    var l;
    var c;
    var u;
    var d;
    for (var p = 20, f = [], g = 0, m = 0; m <= p; m++) {
      g = m / p;
      r = o(t, i, g);
      h = o(e, s, g);
      l = o(i, n, g);
      c = o(s, a, g);
      u = o(r, l, g);
      d = o(h, c, g);
      f.push(u, d);
    }
    return f;
  };
  PIXI.WebGLGraphics.buildCircle = function (t, e) {
    var i = t.shape;
    var s = i.x;
    var n = i.y;
    var a;
    var o;
    if (t.type === PIXI.Graphics.CIRC) {
      a = i.radius;
      o = i.radius;
    } else {
      a = i.width;
      o = i.height;
    }
    var r = 40;
    var h = Math.PI * 2 / 40;
    var l = 0;
    if (t.fill) {
      var c = PIXI.hex2rgb(t.fillColor);
      var u = t.fillAlpha;
      var d = c[0] * u;
      var p = c[1] * u;
      var f = c[2] * u;
      var g = e.points;
      var m = e.indices;
      var y = g.length / 6;
      m.push(y);
      l = 0;
      for (; l < 41; l++) {
        g.push(s, n, d, p, f, u);
        g.push(s + Math.sin(h * l) * a, n + Math.cos(h * l) * o, d, p, f, u);
        m.push(y++, y++);
      }
      m.push(y - 1);
    }
    if (t.lineWidth) {
      var v = t.points;
      t.points = [];
      l = 0;
      for (; l < 41; l++) {
        t.points.push(s + Math.sin(h * l) * a, n + Math.cos(h * l) * o);
      }
      PIXI.WebGLGraphics.buildLine(t, e);
      t.points = v;
    }
  };
  PIXI.WebGLGraphics.buildLine = function (t, e) {
    var i = 0;
    var s = t.points;
    if (s.length !== 0) {
      if (t.lineWidth % 2) {
        for (i = 0; i < s.length; i++) {
          s[i] += 0.5;
        }
      }
      var n = new PIXI.Point(s[0], s[1]);
      var a = new PIXI.Point(s[s.length - 2], s[s.length - 1]);
      if (n.x === a.x && n.y === a.y) {
        s = s.slice();
        s.pop();
        s.pop();
        a = new PIXI.Point(s[s.length - 2], s[s.length - 1]);
        var o = a.x + (n.x - a.x) * 0.5;
        var r = a.y + (n.y - a.y) * 0.5;
        s.unshift(o, r);
        s.push(o, r);
      }
      var h = e.points;
      var l = e.indices;
      var c = s.length / 2;
      var u = s.length;
      var d = h.length / 6;
      var p = t.lineWidth / 2;
      var f = PIXI.hex2rgb(t.lineColor);
      var g = t.lineAlpha;
      var m = f[0] * g;
      var y = f[1] * g;
      var v = f[2] * g;
      var b;
      var _;
      var x;
      var w;
      var P;
      var T;
      var S;
      var C;
      var A;
      var E;
      var I;
      var B;
      var M;
      var k;
      var O;
      var D;
      var L;
      var R;
      var F;
      var G;
      var N;
      var U;
      var j;
      x = s[0];
      w = s[1];
      P = s[2];
      T = s[3];
      A = -(w - T);
      E = x - P;
      j = Math.sqrt(A * A + E * E);
      A /= j;
      E /= j;
      A *= p;
      E *= p;
      h.push(x - A, w - E, m, y, v, g);
      h.push(x + A, w + E, m, y, v, g);
      i = 1;
      for (; i < c - 1; i++) {
        x = s[(i - 1) * 2];
        w = s[(i - 1) * 2 + 1];
        P = s[i * 2];
        T = s[i * 2 + 1];
        S = s[(i + 1) * 2];
        C = s[(i + 1) * 2 + 1];
        A = -(w - T);
        E = x - P;
        j = Math.sqrt(A * A + E * E);
        A /= j;
        E /= j;
        A *= p;
        E *= p;
        I = -(T - C);
        B = P - S;
        j = Math.sqrt(I * I + B * B);
        I /= j;
        B /= j;
        I *= p;
        B *= p;
        O = -E + w - (-E + T);
        D = -A + P - (-A + x);
        L = (-A + x) * (-E + T) - (-A + P) * (-E + w);
        R = -B + C - (-B + T);
        F = -I + P - (-I + S);
        G = (-I + S) * (-B + T) - (-I + P) * (-B + C);
        N = O * F - R * D;
        if (Math.abs(N) < 0.1) {
          N += 10.1;
          h.push(P - A, T - E, m, y, v, g);
          h.push(P + A, T + E, m, y, v, g);
        } else {
          b = (D * G - F * L) / N;
          _ = (R * L - O * G) / N;
          U = (b - P) * (b - P) + (_ - T) + (_ - T);
          if (U > 19600) {
            M = A - I;
            k = E - B;
            j = Math.sqrt(M * M + k * k);
            M /= j;
            k /= j;
            M *= p;
            k *= p;
            h.push(P - M, T - k);
            h.push(m, y, v, g);
            h.push(P + M, T + k);
            h.push(m, y, v, g);
            h.push(P - M, T - k);
            h.push(m, y, v, g);
            u++;
          } else {
            h.push(b, _);
            h.push(m, y, v, g);
            h.push(P - (b - P), T - (_ - T));
            h.push(m, y, v, g);
          }
        }
      }
      x = s[(c - 2) * 2];
      w = s[(c - 2) * 2 + 1];
      P = s[(c - 1) * 2];
      T = s[(c - 1) * 2 + 1];
      A = -(w - T);
      E = x - P;
      j = Math.sqrt(A * A + E * E);
      A /= j;
      E /= j;
      A *= p;
      E *= p;
      h.push(P - A, T - E);
      h.push(m, y, v, g);
      h.push(P + A, T + E);
      h.push(m, y, v, g);
      l.push(d);
      i = 0;
      for (; i < u; i++) {
        l.push(d++);
      }
      l.push(d - 1);
    }
  };
  PIXI.WebGLGraphics.buildComplexPoly = function (t, e) {
    var i = t.points.slice();
    if (!(i.length < 6)) {
      var s = e.indices;
      e.points = i;
      e.alpha = t.fillAlpha;
      e.color = PIXI.hex2rgb(t.fillColor);
      var n = Infinity;
      var a = -Infinity;
      var o = Infinity;
      var r = -Infinity;
      var h;
      var l;
      for (var c = 0; c < i.length; c += 2) {
        h = i[c];
        l = i[c + 1];
        n = h < n ? h : n;
        a = h > a ? h : a;
        o = l < o ? l : o;
        r = l > r ? l : r;
      }
      i.push(n, o, a, o, a, r, n, r);
      var u = i.length / 2;
      for (c = 0; c < u; c++) {
        s.push(c);
      }
    }
  };
  PIXI.WebGLGraphics.buildPoly = function (t, e) {
    var i = t.points;
    if (!(i.length < 6)) {
      var s = e.points;
      var n = e.indices;
      var a = i.length / 2;
      var o = PIXI.hex2rgb(t.fillColor);
      var r = t.fillAlpha;
      var h = o[0] * r;
      var l = o[1] * r;
      var c = o[2] * r;
      var u = PIXI.EarCut.Triangulate(i, null, 2);
      if (!u) {
        return false;
      }
      var d = s.length / 6;
      var p = 0;
      for (p = 0; p < u.length; p += 3) {
        n.push(u[p] + d);
        n.push(u[p] + d);
        n.push(u[p + 1] + d);
        n.push(u[p + 2] + d);
        n.push(u[p + 2] + d);
      }
      for (p = 0; p < a; p++) {
        s.push(i[p * 2], i[p * 2 + 1], h, l, c, r);
      }
      return true;
    }
  };
  PIXI.WebGLGraphics.graphicsDataPool = [];
  PIXI.WebGLGraphicsData = function (t) {
    this.gl = t;
    this.color = [0, 0, 0];
    this.points = [];
    this.indices = [];
    this.buffer = t.createBuffer();
    this.indexBuffer = t.createBuffer();
    this.mode = 1;
    this.alpha = 1;
    this.dirty = true;
  };
  PIXI.WebGLGraphicsData.prototype.reset = function () {
    this.points = [];
    this.indices = [];
  };
  PIXI.WebGLGraphicsData.prototype.upload = function () {
    var t = this.gl;
    this.glPoints = new PIXI.Float32Array(this.points);
    t.bindBuffer(t.ARRAY_BUFFER, this.buffer);
    t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW);
    this.glIndicies = new PIXI.Uint16Array(this.indices);
    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndicies, t.STATIC_DRAW);
    this.dirty = false;
  };
  PIXI.CanvasGraphics = function () {};
  PIXI.CanvasGraphics.renderGraphics = function (t, e) {
    var i = t.worldAlpha;
    if (t.dirty) {
      this.updateGraphicsTint(t);
      t.dirty = false;
    }
    for (var s = 0; s < t.graphicsData.length; s++) {
      var n = t.graphicsData[s];
      var a = n.shape;
      var o = n._fillTint;
      var r = n._lineTint;
      e.lineWidth = n.lineWidth;
      if (n.type === PIXI.Graphics.POLY) {
        e.beginPath();
        var h = a.points;
        e.moveTo(h[0], h[1]);
        for (var l = 1; l < h.length / 2; l++) {
          e.lineTo(h[l * 2], h[l * 2 + 1]);
        }
        if (a.closed) {
          e.lineTo(h[0], h[1]);
        }
        if (h[0] === h[h.length - 2] && h[1] === h[h.length - 1]) {
          e.closePath();
        }
        if (n.fill) {
          e.globalAlpha = n.fillAlpha * i;
          e.fillStyle = "#" + ("00000" + (o | 0).toString(16)).substr(-6);
          e.fill();
        }
        if (n.lineWidth) {
          e.globalAlpha = n.lineAlpha * i;
          e.strokeStyle = "#" + ("00000" + (r | 0).toString(16)).substr(-6);
          e.stroke();
        }
      } else if (n.type === PIXI.Graphics.RECT) {
        if (n.fillColor || n.fillColor === 0) {
          e.globalAlpha = n.fillAlpha * i;
          e.fillStyle = "#" + ("00000" + (o | 0).toString(16)).substr(-6);
          e.fillRect(a.x, a.y, a.width, a.height);
        }
        if (n.lineWidth) {
          e.globalAlpha = n.lineAlpha * i;
          e.strokeStyle = "#" + ("00000" + (r | 0).toString(16)).substr(-6);
          e.strokeRect(a.x, a.y, a.width, a.height);
        }
      } else if (n.type === PIXI.Graphics.CIRC) {
        e.beginPath();
        e.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        e.closePath();
        if (n.fill) {
          e.globalAlpha = n.fillAlpha * i;
          e.fillStyle = "#" + ("00000" + (o | 0).toString(16)).substr(-6);
          e.fill();
        }
        if (n.lineWidth) {
          e.globalAlpha = n.lineAlpha * i;
          e.strokeStyle = "#" + ("00000" + (r | 0).toString(16)).substr(-6);
          e.stroke();
        }
      } else if (n.type === PIXI.Graphics.ELIP) {
        var c = a.width * 2;
        var u = a.height * 2;
        var d = a.x - c / 2;
        var p = a.y - u / 2;
        e.beginPath();
        var f = 0.5522848;
        var g = c / 2 * f;
        var m = u / 2 * f;
        var y = d + c;
        var v = p + u;
        var b = d + c / 2;
        var _ = p + u / 2;
        e.moveTo(d, _);
        e.bezierCurveTo(d, _ - m, b - g, p, b, p);
        e.bezierCurveTo(b + g, p, y, _ - m, y, _);
        e.bezierCurveTo(y, _ + m, b + g, v, b, v);
        e.bezierCurveTo(b - g, v, d, _ + m, d, _);
        e.closePath();
        if (n.fill) {
          e.globalAlpha = n.fillAlpha * i;
          e.fillStyle = "#" + ("00000" + (o | 0).toString(16)).substr(-6);
          e.fill();
        }
        if (n.lineWidth) {
          e.globalAlpha = n.lineAlpha * i;
          e.strokeStyle = "#" + ("00000" + (r | 0).toString(16)).substr(-6);
          e.stroke();
        }
      } else if (n.type === PIXI.Graphics.RREC) {
        var x = a.x;
        var w = a.y;
        var P = a.width;
        var T = a.height;
        var S = a.radius;
        var C = Math.min(P, T) / 2 | 0;
        S = S > C ? C : S;
        e.beginPath();
        e.moveTo(x, w + S);
        e.lineTo(x, w + T - S);
        e.quadraticCurveTo(x, w + T, x + S, w + T);
        e.lineTo(x + P - S, w + T);
        e.quadraticCurveTo(x + P, w + T, x + P, w + T - S);
        e.lineTo(x + P, w + S);
        e.quadraticCurveTo(x + P, w, x + P - S, w);
        e.lineTo(x + S, w);
        e.quadraticCurveTo(x, w, x, w + S);
        e.closePath();
        if (n.fillColor || n.fillColor === 0) {
          e.globalAlpha = n.fillAlpha * i;
          e.fillStyle = "#" + ("00000" + (o | 0).toString(16)).substr(-6);
          e.fill();
        }
        if (n.lineWidth) {
          e.globalAlpha = n.lineAlpha * i;
          e.strokeStyle = "#" + ("00000" + (r | 0).toString(16)).substr(-6);
          e.stroke();
        }
      }
    }
  };
  PIXI.CanvasGraphics.renderGraphicsMask = function (t, e) {
    var i = t.graphicsData.length;
    if (i !== 0) {
      e.beginPath();
      for (var s = 0; s < i; s++) {
        var n = t.graphicsData[s];
        var a = n.shape;
        if (n.type === PIXI.Graphics.POLY) {
          var o = a.points;
          e.moveTo(o[0], o[1]);
          for (var r = 1; r < o.length / 2; r++) {
            e.lineTo(o[r * 2], o[r * 2 + 1]);
          }
          if (o[0] === o[o.length - 2] && o[1] === o[o.length - 1]) {
            e.closePath();
          }
        } else if (n.type === PIXI.Graphics.RECT) {
          e.rect(a.x, a.y, a.width, a.height);
          e.closePath();
        } else if (n.type === PIXI.Graphics.CIRC) {
          e.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
          e.closePath();
        } else if (n.type === PIXI.Graphics.ELIP) {
          var h = a.width * 2;
          var l = a.height * 2;
          var c = a.x - h / 2;
          var u = a.y - l / 2;
          var d = 0.5522848;
          var p = h / 2 * d;
          var f = l / 2 * d;
          var g = c + h;
          var m = u + l;
          var y = c + h / 2;
          var v = u + l / 2;
          e.moveTo(c, v);
          e.bezierCurveTo(c, v - f, y - p, u, y, u);
          e.bezierCurveTo(y + p, u, g, v - f, g, v);
          e.bezierCurveTo(g, v + f, y + p, m, y, m);
          e.bezierCurveTo(y - p, m, c, v + f, c, v);
          e.closePath();
        } else if (n.type === PIXI.Graphics.RREC) {
          var b = a.x;
          var _ = a.y;
          var x = a.width;
          var w = a.height;
          var P = a.radius;
          var T = Math.min(x, w) / 2 | 0;
          P = P > T ? T : P;
          e.moveTo(b, _ + P);
          e.lineTo(b, _ + w - P);
          e.quadraticCurveTo(b, _ + w, b + P, _ + w);
          e.lineTo(b + x - P, _ + w);
          e.quadraticCurveTo(b + x, _ + w, b + x, _ + w - P);
          e.lineTo(b + x, _ + P);
          e.quadraticCurveTo(b + x, _, b + x - P, _);
          e.lineTo(b + P, _);
          e.quadraticCurveTo(b, _, b, _ + P);
          e.closePath();
        }
      }
    }
  };
  PIXI.CanvasGraphics.updateGraphicsTint = function (t) {
    if (t.tint !== 16777215) {
      var e = (t.tint >> 16 & 255) / 255;
      var i = (t.tint >> 8 & 255) / 255;
      var s = (t.tint & 255) / 255;
      for (var n = 0; n < t.graphicsData.length; n++) {
        var a = t.graphicsData[n];
        var o = a.fillColor | 0;
        var r = a.lineColor | 0;
        a._fillTint = ((o >> 16 & 255) / 255 * e * 255 << 16) + ((o >> 8 & 255) / 255 * i * 255 << 8) + (o & 255) / 255 * s * 255;
        a._lineTint = ((r >> 16 & 255) / 255 * e * 255 << 16) + ((r >> 8 & 255) / 255 * i * 255 << 8) + (r & 255) / 255 * s * 255;
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Graphics = function (t, e = 0, i = 0) {
    this.type = a.GRAPHICS;
    this.physicsType = a.SPRITE;
    this.anchor = new a.Point();
    PIXI.Graphics.call(this);
    a.Component.Core.init.call(this, t, e, i, "", null);
  };
  a.Graphics.prototype = Object.create(PIXI.Graphics.prototype);
  a.Graphics.prototype.constructor = a.Graphics;
  a.Component.Core.install.call(a.Graphics.prototype, ["Angle", "AutoCull", "Bounds", "Destroy", "FixedToCamera", "InputEnabled", "InWorld", "LifeSpan", "PhysicsBody", "Reset"]);
  a.Graphics.prototype.preUpdatePhysics = a.Component.PhysicsBody.preUpdate;
  a.Graphics.prototype.preUpdateLifeSpan = a.Component.LifeSpan.preUpdate;
  a.Graphics.prototype.preUpdateInWorld = a.Component.InWorld.preUpdate;
  a.Graphics.prototype.preUpdateCore = a.Component.Core.preUpdate;
  a.Graphics.prototype.preUpdate = function () {
    return !!this.preUpdatePhysics() && !!this.preUpdateLifeSpan() && !!this.preUpdateInWorld() && this.preUpdateCore();
  };
  a.Graphics.prototype.postUpdate = function () {
    a.Component.PhysicsBody.postUpdate.call(this);
    a.Component.FixedToCamera.postUpdate.call(this);
    if (this._boundsDirty) {
      this.updateLocalBounds();
      this._boundsDirty = false;
    }
    for (var t = 0; t < this.children.length; t++) {
      this.children[t].postUpdate();
    }
  };
  a.Graphics.prototype.destroy = function (t) {
    this.clear();
    a.Component.Destroy.prototype.destroy.call(this, t);
  };
  a.Graphics.prototype.drawTriangle = function (t, e = false) {
    var i = new a.Polygon(t);
    if (e) {
      var s = new a.Point(this.game.camera.x - t[0].x, this.game.camera.y - t[0].y);
      var n = new a.Point(t[1].x - t[0].x, t[1].y - t[0].y);
      var o = new a.Point(t[1].x - t[2].x, t[1].y - t[2].y);
      var r = o.cross(n);
      if (s.dot(r) > 0) {
        this.drawPolygon(i);
      }
    } else {
      this.drawPolygon(i);
    }
  };
  a.Graphics.prototype.drawTriangles = function (t, e, i = false) {
    var s = new a.Point();
    var n = new a.Point();
    var o = new a.Point();
    var r = [];
    var h;
    if (e) {
      if (t[0] instanceof a.Point) {
        for (h = 0; h < e.length / 3; h++) {
          r.push(t[e[h * 3]]);
          r.push(t[e[h * 3 + 1]]);
          r.push(t[e[h * 3 + 2]]);
          if (r.length === 3) {
            this.drawTriangle(r, i);
            r = [];
          }
        }
      } else {
        for (h = 0; h < e.length; h++) {
          s.x = t[e[h] * 2];
          s.y = t[e[h] * 2 + 1];
          r.push(s.copyTo({}));
          if (r.length === 3) {
            this.drawTriangle(r, i);
            r = [];
          }
        }
      }
    } else if (t[0] instanceof a.Point) {
      for (h = 0; h < t.length / 3; h++) {
        this.drawTriangle([t[h * 3], t[h * 3 + 1], t[h * 3 + 2]], i);
      }
    } else {
      for (h = 0; h < t.length / 6; h++) {
        s.x = t[h * 6 + 0];
        s.y = t[h * 6 + 1];
        n.x = t[h * 6 + 2];
        n.y = t[h * 6 + 3];
        o.x = t[h * 6 + 4];
        o.y = t[h * 6 + 5];
        this.drawTriangle([s, n, o], i);
      }
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.RenderTexture = function (t, e, i, s = "", n = a.scaleModes.DEFAULT, o = 1) {
    this.game = t;
    this.key = s;
    this.type = a.RENDERTEXTURE;
    this._tempMatrix = new PIXI.Matrix();
    PIXI.RenderTexture.call(this, e, i, this.game.renderer, n, o);
    this.render = a.RenderTexture.prototype.render;
  };
  a.RenderTexture.prototype = Object.create(PIXI.RenderTexture.prototype);
  a.RenderTexture.prototype.constructor = a.RenderTexture;
  a.RenderTexture.prototype.renderXY = function (t, e, i, s) {
    t.updateTransform();
    this._tempMatrix.copyFrom(t.worldTransform);
    this._tempMatrix.tx = e;
    this._tempMatrix.ty = i;
    if (this.renderer.type === PIXI.WEBGL_RENDERER) {
      this.renderWebGL(t, this._tempMatrix, s);
    } else {
      this.renderCanvas(t, this._tempMatrix, s);
    }
  };
  a.RenderTexture.prototype.renderRawXY = function (t, e, i, s) {
    this._tempMatrix.identity().translate(e, i);
    if (this.renderer.type === PIXI.WEBGL_RENDERER) {
      this.renderWebGL(t, this._tempMatrix, s);
    } else {
      this.renderCanvas(t, this._tempMatrix, s);
    }
  };
  a.RenderTexture.prototype.render = function (t, e, i) {
    if (e === undefined || e === null) {
      this._tempMatrix.copyFrom(t.worldTransform);
    } else {
      this._tempMatrix.copyFrom(e);
    }
    if (this.renderer.type === PIXI.WEBGL_RENDERER) {
      this.renderWebGL(t, this._tempMatrix, i);
    } else {
      this.renderCanvas(t, this._tempMatrix, i);
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Text = function (t, e, i, s, n) {
    e = e || 0;
    i = i || 0;
    s = s === undefined || s === null ? "" : s.toString();
    n = a.Utils.extend({}, n);
    this.type = a.TEXT;
    this.physicsType = a.SPRITE;
    this.padding = new a.Point();
    this.textBounds = null;
    this.canvas = PIXI.CanvasPool.create(this);
    this.context = this.canvas.getContext("2d");
    this.colors = [];
    this.strokeColors = [];
    this.fontStyles = [];
    this.fontWeights = [];
    this.autoRound = false;
    this.useAdvancedWrap = false;
    this._res = t.renderer.resolution;
    this._text = s;
    this._fontComponents = null;
    this._lineSpacing = 0;
    this._charCount = 0;
    this._width = 0;
    this._height = 0;
    a.Sprite.call(this, t, e, i, PIXI.Texture.fromCanvas(this.canvas));
    this.setStyle(n);
    if (s !== "") {
      this.updateText();
    }
  };
  a.Text.prototype = Object.create(a.Sprite.prototype);
  a.Text.prototype.constructor = a.Text;
  a.Text.prototype.preUpdate = function () {
    return !!this.preUpdatePhysics() && !!this.preUpdateLifeSpan() && !!this.preUpdateInWorld() && this.preUpdateCore();
  };
  a.Text.prototype.update = function () {};
  a.Text.prototype.destroy = function (t) {
    this.texture.destroy(true);
    a.Component.Destroy.prototype.destroy.call(this, t);
  };
  a.Text.prototype.setShadow = function (t = 0, e = 0, i = "rgba(0, 0, 0, 1)", s = 0, n = true, a = true) {
    this.style.shadowOffsetX = t;
    this.style.shadowOffsetY = e;
    this.style.shadowColor = i;
    this.style.shadowBlur = s;
    this.style.shadowStroke = n;
    this.style.shadowFill = a;
    this.dirty = true;
    return this;
  };
  a.Text.prototype.setStyle = function (t, e = false) {
    t = t || {};
    t.font = t.font || "bold 20pt Arial";
    t.backgroundColor = t.backgroundColor || null;
    t.fill = t.fill || "black";
    t.align = t.align || "left";
    t.boundsAlignH = t.boundsAlignH || "left";
    t.boundsAlignV = t.boundsAlignV || "top";
    t.stroke = t.stroke || "black";
    t.strokeThickness = t.strokeThickness || 0;
    t.wordWrap = t.wordWrap || false;
    t.wordWrapWidth = t.wordWrapWidth || 100;
    t.maxLines = t.maxLines || 0;
    t.shadowOffsetX = t.shadowOffsetX || 0;
    t.shadowOffsetY = t.shadowOffsetY || 0;
    t.shadowColor = t.shadowColor || "rgba(0,0,0,0)";
    t.shadowBlur = t.shadowBlur || 0;
    t.tabs = t.tabs || 0;
    var i = this.fontToComponents(t.font);
    if (t.fontStyle) {
      i.fontStyle = t.fontStyle;
    }
    if (t.fontVariant) {
      i.fontVariant = t.fontVariant;
    }
    if (t.fontWeight) {
      i.fontWeight = t.fontWeight;
    }
    if (t.fontSize) {
      if (typeof t.fontSize == "number") {
        t.fontSize = t.fontSize + "px";
      }
      i.fontSize = t.fontSize;
    }
    this._fontComponents = i;
    t.font = this.componentsToFont(this._fontComponents);
    this.style = t;
    this.dirty = true;
    if (e) {
      this.updateText();
    }
    return this;
  };
  a.Text.prototype.updateText = function () {
    this.texture.baseTexture.resolution = this._res;
    this.context.font = this.style.font;
    var t = this.text;
    if (this.style.wordWrap) {
      t = this.runWordWrap(this.text);
    }
    var e = t.split(/(?:\r\n|\r|\n)/);
    var i = this.style.tabs;
    var s = [];
    var n = 0;
    var a = this.determineFontProperties(this.style.font);
    var o = e.length;
    if (this.style.maxLines > 0 && this.style.maxLines < e.length) {
      o = this.style.maxLines;
    }
    this._charCount = 0;
    for (var r = 0; r < o; r++) {
      if (i === 0) {
        var h = this.style.strokeThickness + this.padding.x;
        if (this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0) {
          h += this.measureLine(e[r]);
        } else {
          h += this.context.measureText(e[r]).width;
        }
        if (this.style.wordWrap) {
          h -= this.context.measureText(" ").width;
        }
      } else {
        var l = e[r].split(/(?:\t)/);
        var h = this.padding.x + this.style.strokeThickness;
        if (Array.isArray(i)) {
          var c = 0;
          for (var u = 0; u < l.length; u++) {
            var d = 0;
            d = this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0 ? this.measureLine(l[u]) : Math.ceil(this.context.measureText(l[u]).width);
            if (u > 0) {
              c += i[u - 1];
            }
            h = c + d;
          }
        } else {
          for (var u = 0; u < l.length; u++) {
            if (this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0) {
              h += this.measureLine(l[u]);
            } else {
              h += Math.ceil(this.context.measureText(l[u]).width);
            }
            var p = this.game.math.snapToCeil(h, i) - h;
            h += p;
          }
        }
      }
      s[r] = Math.ceil(h);
      n = Math.max(n, s[r]);
    }
    this.canvas.width = n * this._res;
    var f = a.fontSize + this.style.strokeThickness + this.padding.y;
    var g = f * o;
    var m = this._lineSpacing;
    if (m < 0 && Math.abs(m) > f) {
      m = -f;
    }
    if (m !== 0) {
      g += m > 0 ? m * e.length : m * (e.length - 1);
    }
    this.canvas.height = g * this._res;
    this.context.scale(this._res, this._res);
    if (navigator.isCocoonJS) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    if (this.style.backgroundColor) {
      this.context.fillStyle = this.style.backgroundColor;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.context.fillStyle = this.style.fill;
    this.context.font = this.style.font;
    this.context.strokeStyle = this.style.stroke;
    this.context.textBaseline = "alphabetic";
    this.context.lineWidth = this.style.strokeThickness;
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    var y;
    var v;
    this._charCount = 0;
    r = 0;
    for (; r < o; r++) {
      y = this.style.strokeThickness / 2;
      v = this.style.strokeThickness / 2 + r * f + a.ascent;
      if (r > 0) {
        v += m * r;
      }
      if (this.style.align === "right") {
        y += n - s[r];
      } else if (this.style.align === "center") {
        y += (n - s[r]) / 2;
      }
      if (this.autoRound) {
        y = Math.round(y);
        v = Math.round(v);
      }
      if (this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0) {
        this.updateLine(e[r], y, v);
      } else {
        if (this.style.stroke && this.style.strokeThickness) {
          this.updateShadow(this.style.shadowStroke);
          if (i === 0) {
            this.context.strokeText(e[r], y, v);
          } else {
            this.renderTabLine(e[r], y, v, false);
          }
        }
        if (this.style.fill) {
          this.updateShadow(this.style.shadowFill);
          if (i === 0) {
            this.context.fillText(e[r], y, v);
          } else {
            this.renderTabLine(e[r], y, v, true);
          }
        }
      }
    }
    this.updateTexture();
    this.dirty = false;
  };
  a.Text.prototype.renderTabLine = function (t, e, i, s) {
    var n = t.split(/(?:\t)/);
    var a = this.style.tabs;
    var o = 0;
    if (Array.isArray(a)) {
      var r = 0;
      for (var h = 0; h < n.length; h++) {
        if (h > 0) {
          r += a[h - 1];
        }
        o = e + r;
        if (s) {
          this.context.fillText(n[h], o, i);
        } else {
          this.context.strokeText(n[h], o, i);
        }
      }
    } else {
      for (var h = 0; h < n.length; h++) {
        var l = Math.ceil(this.context.measureText(n[h]).width);
        o = this.game.math.snapToCeil(e, a);
        if (s) {
          this.context.fillText(n[h], o, i);
        } else {
          this.context.strokeText(n[h], o, i);
        }
        e = o + l;
      }
    }
  };
  a.Text.prototype.updateShadow = function (t) {
    if (t) {
      this.context.shadowOffsetX = this.style.shadowOffsetX;
      this.context.shadowOffsetY = this.style.shadowOffsetY;
      this.context.shadowColor = this.style.shadowColor;
      this.context.shadowBlur = this.style.shadowBlur;
    } else {
      this.context.shadowOffsetX = 0;
      this.context.shadowOffsetY = 0;
      this.context.shadowColor = 0;
      this.context.shadowBlur = 0;
    }
  };
  a.Text.prototype.measureLine = function (t) {
    var e = 0;
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      if (this.fontWeights.length > 0 || this.fontStyles.length > 0) {
        var n = this.fontToComponents(this.context.font);
        if (this.fontStyles[this._charCount]) {
          n.fontStyle = this.fontStyles[this._charCount];
        }
        if (this.fontWeights[this._charCount]) {
          n.fontWeight = this.fontWeights[this._charCount];
        }
        this.context.font = this.componentsToFont(n);
      }
      if (this.style.stroke && this.style.strokeThickness) {
        if (this.strokeColors[this._charCount]) {
          this.context.strokeStyle = this.strokeColors[this._charCount];
        }
        this.updateShadow(this.style.shadowStroke);
      }
      if (this.style.fill) {
        if (this.colors[this._charCount]) {
          this.context.fillStyle = this.colors[this._charCount];
        }
        this.updateShadow(this.style.shadowFill);
      }
      e += this.context.measureText(s).width;
      this._charCount++;
    }
    return Math.ceil(e);
  };
  a.Text.prototype.updateLine = function (t, e, i) {
    for (var s = 0; s < t.length; s++) {
      var n = t[s];
      if (this.fontWeights.length > 0 || this.fontStyles.length > 0) {
        var a = this.fontToComponents(this.context.font);
        if (this.fontStyles[this._charCount]) {
          a.fontStyle = this.fontStyles[this._charCount];
        }
        if (this.fontWeights[this._charCount]) {
          a.fontWeight = this.fontWeights[this._charCount];
        }
        this.context.font = this.componentsToFont(a);
      }
      if (this.style.stroke && this.style.strokeThickness) {
        if (this.strokeColors[this._charCount]) {
          this.context.strokeStyle = this.strokeColors[this._charCount];
        }
        this.updateShadow(this.style.shadowStroke);
        this.context.strokeText(n, e, i);
      }
      if (this.style.fill) {
        if (this.colors[this._charCount]) {
          this.context.fillStyle = this.colors[this._charCount];
        }
        this.updateShadow(this.style.shadowFill);
        this.context.fillText(n, e, i);
      }
      e += this.context.measureText(n).width;
      this._charCount++;
    }
  };
  a.Text.prototype.clearColors = function () {
    this.colors = [];
    this.strokeColors = [];
    this.dirty = true;
    return this;
  };
  a.Text.prototype.clearFontValues = function () {
    this.fontStyles = [];
    this.fontWeights = [];
    this.dirty = true;
    return this;
  };
  a.Text.prototype.addColor = function (t, e) {
    this.colors[e] = t;
    this.dirty = true;
    return this;
  };
  a.Text.prototype.addStrokeColor = function (t, e) {
    this.strokeColors[e] = t;
    this.dirty = true;
    return this;
  };
  a.Text.prototype.addFontStyle = function (t, e) {
    this.fontStyles[e] = t;
    this.dirty = true;
    return this;
  };
  a.Text.prototype.addFontWeight = function (t, e) {
    this.fontWeights[e] = t;
    this.dirty = true;
    return this;
  };
  a.Text.prototype.precalculateWordWrap = function (t) {
    this.texture.baseTexture.resolution = this._res;
    this.context.font = this.style.font;
    return this.runWordWrap(t).split(/(?:\r\n|\r|\n)/);
  };
  a.Text.prototype.runWordWrap = function (t) {
    if (this.useAdvancedWrap) {
      return this.advancedWordWrap(t);
    } else {
      return this.basicWordWrap(t);
    }
  };
  a.Text.prototype.advancedWordWrap = function (t) {
    var e = this.context;
    var i = this.style.wordWrapWidth;
    var s = "";
    var n = t.replace(/ +/gi, " ").split(/\r?\n/gi);
    for (var a = n.length, o = 0; o < a; o++) {
      var r = n[o];
      var h = "";
      r = r.replace(/^ *|\s*$/gi, "");
      if (e.measureText(r).width < i) {
        s += r + "\n";
      } else {
        var l = i;
        for (var c = r.split(" "), u = 0; u < c.length; u++) {
          var d = c[u];
          var p = d + " ";
          var f = e.measureText(p).width;
          if (f > l) {
            if (u === 0) {
              for (var g = p; g.length && (g = g.slice(0, -1), !((f = e.measureText(g).width) <= l)););
              if (!g.length) {
                throw new Error("This text's wordWrapWidth setting is less than a single character!");
              }
              var m = d.substr(g.length);
              c[u] = m;
              h += g;
            }
            var y = c[u].length ? u : u + 1;
            var v = c.slice(y).join(" ").replace(/[ \n]*$/gi, "");
            n[o + 1] = v + " " + (n[o + 1] || "");
            a = n.length;
            break;
          }
          h += p;
          l -= f;
        }
        s += h.replace(/[ \n]*$/gi, "") + "\n";
      }
    }
    return s = s.replace(/[\s|\n]*$/gi, "");
  };
  a.Text.prototype.basicWordWrap = function (t) {
    var e = "";
    for (var i = t.split("\n"), s = 0; s < i.length; s++) {
      var n = this.style.wordWrapWidth;
      for (var a = i[s].split(" "), o = 0; o < a.length; o++) {
        var r = this.context.measureText(a[o]).width;
        var h = r + this.context.measureText(" ").width;
        if (h > n) {
          if (o > 0) {
            e += "\n";
          }
          e += a[o] + " ";
          n = this.style.wordWrapWidth - r;
        } else {
          n -= h;
          e += a[o] + " ";
        }
      }
      if (s < i.length - 1) {
        e += "\n";
      }
    }
    return e;
  };
  a.Text.prototype.updateFont = function (t) {
    var e = this.componentsToFont(t);
    if (this.style.font !== e) {
      this.style.font = e;
      this.dirty = true;
      if (this.parent) {
        this.updateTransform();
      }
    }
  };
  a.Text.prototype.fontToComponents = function (t) {
    var e = t.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);
    if (e) {
      var i = e[5].trim();
      if (!/^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(i) && !/['",]/.exec(i)) {
        i = "'" + i + "'";
      }
      return {
        font: t,
        fontStyle: e[1] || "normal",
        fontVariant: e[2] || "normal",
        fontWeight: e[3] || "normal",
        fontSize: e[4] || "medium",
        fontFamily: i
      };
    }
    return {
      font: t
    };
  };
  a.Text.prototype.componentsToFont = function (t) {
    var e = [];
    var i;
    i = t.fontStyle;
    if (i && i !== "normal") {
      e.push(i);
    }
    i = t.fontVariant;
    if (i && i !== "normal") {
      e.push(i);
    }
    i = t.fontWeight;
    if (i && i !== "normal") {
      e.push(i);
    }
    i = t.fontSize;
    if (i && i !== "medium") {
      e.push(i);
    }
    i = t.fontFamily;
    if (i) {
      e.push(i);
    }
    if (!e.length) {
      e.push(t.font);
    }
    return e.join(" ");
  };
  a.Text.prototype.setText = function (t, e = false) {
    this.text = t.toString() || "";
    if (e) {
      this.updateText();
    } else {
      this.dirty = true;
    }
    return this;
  };
  a.Text.prototype.parseList = function (t) {
    if (!Array.isArray(t)) {
      return this;
    }
    var e = "";
    for (var i = 0; i < t.length; i++) {
      if (Array.isArray(t[i])) {
        e += t[i].join("\t");
        if (i < t.length - 1) {
          e += "\n";
        }
      } else {
        e += t[i];
        if (i < t.length - 1) {
          e += "\t";
        }
      }
    }
    this.text = e;
    this.dirty = true;
    return this;
  };
  a.Text.prototype.setTextBounds = function (t, e, i, s) {
    if (t === undefined) {
      this.textBounds = null;
    } else {
      if (this.textBounds) {
        this.textBounds.setTo(t, e, i, s);
      } else {
        this.textBounds = new a.Rectangle(t, e, i, s);
      }
      if (this.style.wordWrapWidth > i) {
        this.style.wordWrapWidth = i;
      }
    }
    this.updateTexture();
    return this;
  };
  a.Text.prototype.updateTexture = function () {
    var t = this.texture.baseTexture;
    var e = this.texture.crop;
    var i = this.texture.frame;
    var s = this.canvas.width;
    var n = this.canvas.height;
    t.width = s;
    t.height = n;
    e.width = s;
    e.height = n;
    i.width = s;
    i.height = n;
    this.texture.width = s;
    this.texture.height = n;
    this._width = s;
    this._height = n;
    if (this.textBounds) {
      var a = this.textBounds.x;
      var o = this.textBounds.y;
      if (this.style.boundsAlignH === "right") {
        a += this.textBounds.width - this.canvas.width / this.resolution;
      } else if (this.style.boundsAlignH === "center") {
        a += this.textBounds.halfWidth - this.canvas.width / this.resolution / 2;
      }
      if (this.style.boundsAlignV === "bottom") {
        o += this.textBounds.height - this.canvas.height / this.resolution;
      } else if (this.style.boundsAlignV === "middle") {
        o += this.textBounds.halfHeight - this.canvas.height / this.resolution / 2;
      }
      this.pivot.x = -a;
      this.pivot.y = -o;
    }
    this.renderable = s !== 0 && n !== 0;
    this.texture.requiresReTint = true;
    this.texture.baseTexture.dirty();
  };
  a.Text.prototype._renderWebGL = function (t) {
    if (this.dirty) {
      this.updateText();
      this.dirty = false;
    }
    PIXI.Sprite.prototype._renderWebGL.call(this, t);
  };
  a.Text.prototype._renderCanvas = function (t) {
    if (this.dirty) {
      this.updateText();
      this.dirty = false;
    }
    PIXI.Sprite.prototype._renderCanvas.call(this, t);
  };
  a.Text.prototype.determineFontProperties = function (t) {
    var e = a.Text.fontPropertiesCache[t];
    if (!e) {
      e = {};
      var i = a.Text.fontPropertiesCanvas;
      var s = a.Text.fontPropertiesContext;
      s.font = t;
      var n = Math.ceil(s.measureText("|MÉq").width);
      var o = Math.ceil(s.measureText("|MÉq").width);
      var r = o * 2;
      o = o * 1.4 | 0;
      i.width = n;
      i.height = r;
      s.fillStyle = "#f00";
      s.fillRect(0, 0, n, r);
      s.font = t;
      s.textBaseline = "alphabetic";
      s.fillStyle = "#000";
      s.fillText("|MÉq", 0, o);
      if (!s.getImageData(0, 0, n, r)) {
        e.ascent = o;
        e.descent = o + 6;
        e.fontSize = e.ascent + e.descent;
        a.Text.fontPropertiesCache[t] = e;
        return e;
      }
      var h = s.getImageData(0, 0, n, r).data;
      var l = h.length;
      var c = n * 4;
      var u;
      var d;
      var p = 0;
      var f = false;
      for (u = 0; u < o; u++) {
        for (d = 0; d < c; d += 4) {
          if (h[p + d] !== 255) {
            f = true;
            break;
          }
        }
        if (f) {
          break;
        }
        p += c;
      }
      e.ascent = o - u;
      p = l - c;
      f = false;
      u = r;
      for (; u > o; u--) {
        for (d = 0; d < c; d += 4) {
          if (h[p + d] !== 255) {
            f = true;
            break;
          }
        }
        if (f) {
          break;
        }
        p -= c;
      }
      e.descent = u - o;
      e.descent += 6;
      e.fontSize = e.ascent + e.descent;
      a.Text.fontPropertiesCache[t] = e;
    }
    return e;
  };
  a.Text.prototype.getBounds = function (t) {
    if (this.dirty) {
      this.updateText();
      this.dirty = false;
    }
    return PIXI.Sprite.prototype.getBounds.call(this, t);
  };
  Object.defineProperty(a.Text.prototype, "text", {
    get: function () {
      return this._text;
    },
    set: function (t) {
      if (t !== this._text) {
        this._text = t.toString() || "";
        this.dirty = true;
        if (this.parent) {
          this.updateTransform();
        }
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "cssFont", {
    get: function () {
      return this.componentsToFont(this._fontComponents);
    },
    set: function (t) {
      t = t || "bold 20pt Arial";
      this._fontComponents = this.fontToComponents(t);
      this.updateFont(this._fontComponents);
    }
  });
  Object.defineProperty(a.Text.prototype, "font", {
    get: function () {
      return this._fontComponents.fontFamily;
    },
    set: function (t) {
      t = t || "Arial";
      t = t.trim();
      if (!/^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(t) && !/['",]/.exec(t)) {
        t = "'" + t + "'";
      }
      this._fontComponents.fontFamily = t;
      this.updateFont(this._fontComponents);
    }
  });
  Object.defineProperty(a.Text.prototype, "fontSize", {
    get: function () {
      var t = this._fontComponents.fontSize;
      if (t && /(?:^0$|px$)/.exec(t)) {
        return parseInt(t, 10);
      } else {
        return t;
      }
    },
    set: function (t) {
      t = t || "0";
      if (typeof t == "number") {
        t += "px";
      }
      this._fontComponents.fontSize = t;
      this.updateFont(this._fontComponents);
    }
  });
  Object.defineProperty(a.Text.prototype, "fontWeight", {
    get: function () {
      return this._fontComponents.fontWeight || "normal";
    },
    set: function (t) {
      t = t || "normal";
      this._fontComponents.fontWeight = t;
      this.updateFont(this._fontComponents);
    }
  });
  Object.defineProperty(a.Text.prototype, "fontStyle", {
    get: function () {
      return this._fontComponents.fontStyle || "normal";
    },
    set: function (t) {
      t = t || "normal";
      this._fontComponents.fontStyle = t;
      this.updateFont(this._fontComponents);
    }
  });
  Object.defineProperty(a.Text.prototype, "fontVariant", {
    get: function () {
      return this._fontComponents.fontVariant || "normal";
    },
    set: function (t) {
      t = t || "normal";
      this._fontComponents.fontVariant = t;
      this.updateFont(this._fontComponents);
    }
  });
  Object.defineProperty(a.Text.prototype, "fill", {
    get: function () {
      return this.style.fill;
    },
    set: function (t) {
      if (t !== this.style.fill) {
        this.style.fill = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "align", {
    get: function () {
      return this.style.align;
    },
    set: function (t) {
      if (t !== this.style.align) {
        this.style.align = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "resolution", {
    get: function () {
      return this._res;
    },
    set: function (t) {
      if (t !== this._res) {
        this._res = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "tabs", {
    get: function () {
      return this.style.tabs;
    },
    set: function (t) {
      if (t !== this.style.tabs) {
        this.style.tabs = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "boundsAlignH", {
    get: function () {
      return this.style.boundsAlignH;
    },
    set: function (t) {
      if (t !== this.style.boundsAlignH) {
        this.style.boundsAlignH = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "boundsAlignV", {
    get: function () {
      return this.style.boundsAlignV;
    },
    set: function (t) {
      if (t !== this.style.boundsAlignV) {
        this.style.boundsAlignV = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "stroke", {
    get: function () {
      return this.style.stroke;
    },
    set: function (t) {
      if (t !== this.style.stroke) {
        this.style.stroke = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "strokeThickness", {
    get: function () {
      return this.style.strokeThickness;
    },
    set: function (t) {
      if (t !== this.style.strokeThickness) {
        this.style.strokeThickness = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "wordWrap", {
    get: function () {
      return this.style.wordWrap;
    },
    set: function (t) {
      if (t !== this.style.wordWrap) {
        this.style.wordWrap = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "wordWrapWidth", {
    get: function () {
      return this.style.wordWrapWidth;
    },
    set: function (t) {
      if (t !== this.style.wordWrapWidth) {
        this.style.wordWrapWidth = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "lineSpacing", {
    get: function () {
      return this._lineSpacing;
    },
    set: function (t) {
      if (t !== this._lineSpacing) {
        this._lineSpacing = parseFloat(t);
        this.dirty = true;
        if (this.parent) {
          this.updateTransform();
        }
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "shadowOffsetX", {
    get: function () {
      return this.style.shadowOffsetX;
    },
    set: function (t) {
      if (t !== this.style.shadowOffsetX) {
        this.style.shadowOffsetX = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "shadowOffsetY", {
    get: function () {
      return this.style.shadowOffsetY;
    },
    set: function (t) {
      if (t !== this.style.shadowOffsetY) {
        this.style.shadowOffsetY = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "shadowColor", {
    get: function () {
      return this.style.shadowColor;
    },
    set: function (t) {
      if (t !== this.style.shadowColor) {
        this.style.shadowColor = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "shadowBlur", {
    get: function () {
      return this.style.shadowBlur;
    },
    set: function (t) {
      if (t !== this.style.shadowBlur) {
        this.style.shadowBlur = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "shadowStroke", {
    get: function () {
      return this.style.shadowStroke;
    },
    set: function (t) {
      if (t !== this.style.shadowStroke) {
        this.style.shadowStroke = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "shadowFill", {
    get: function () {
      return this.style.shadowFill;
    },
    set: function (t) {
      if (t !== this.style.shadowFill) {
        this.style.shadowFill = t;
        this.dirty = true;
      }
    }
  });
  Object.defineProperty(a.Text.prototype, "width", {
    get: function () {
      if (this.dirty) {
        this.updateText();
        this.dirty = false;
      }
      return this.scale.x * this.texture.frame.width;
    },
    set: function (t) {
      this.scale.x = t / this.texture.frame.width;
      this._width = t;
    }
  });
  Object.defineProperty(a.Text.prototype, "height", {
    get: function () {
      if (this.dirty) {
        this.updateText();
        this.dirty = false;
      }
      return this.scale.y * this.texture.frame.height;
    },
    set: function (t) {
      this.scale.y = t / this.texture.frame.height;
      this._height = t;
    }
  });
  a.Text.fontPropertiesCache = {};
  a.Text.fontPropertiesCanvas = document.createElement("canvas");
  a.Text.fontPropertiesContext = a.Text.fontPropertiesCanvas.getContext("2d");
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.BitmapText = function (t, e, i, s, n, o, r) {
    e = e || 0;
    i = i || 0;
    s = s || "";
    n = n || "";
    o = o || 32;
    r = r || "left";
    PIXI.DisplayObjectContainer.call(this);
    this.type = a.BITMAPTEXT;
    this.physicsType = a.SPRITE;
    this.textWidth = 0;
    this.textHeight = 0;
    this.anchor = new a.Point();
    this._prevAnchor = new a.Point();
    this._glyphs = [];
    this._maxWidth = 0;
    this._text = n.toString() || "";
    this._data = t.cache.getBitmapFont(s);
    this._font = s;
    this._fontSize = o;
    this._align = r;
    this._tint = 16777215;
    this.updateText();
    this.dirty = false;
    a.Component.Core.init.call(this, t, e, i, "", null);
  };
  a.BitmapText.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  a.BitmapText.prototype.constructor = a.BitmapText;
  a.Component.Core.install.call(a.BitmapText.prototype, ["Angle", "AutoCull", "Bounds", "Destroy", "FixedToCamera", "InputEnabled", "InWorld", "LifeSpan", "PhysicsBody", "Reset"]);
  a.BitmapText.prototype.preUpdatePhysics = a.Component.PhysicsBody.preUpdate;
  a.BitmapText.prototype.preUpdateLifeSpan = a.Component.LifeSpan.preUpdate;
  a.BitmapText.prototype.preUpdateInWorld = a.Component.InWorld.preUpdate;
  a.BitmapText.prototype.preUpdateCore = a.Component.Core.preUpdate;
  a.BitmapText.prototype.preUpdate = function () {
    return !!this.preUpdatePhysics() && !!this.preUpdateLifeSpan() && !!this.preUpdateInWorld() && this.preUpdateCore();
  };
  a.BitmapText.prototype.postUpdate = function () {
    a.Component.PhysicsBody.postUpdate.call(this);
    a.Component.FixedToCamera.postUpdate.call(this);
    if (this.body && this.body.type === a.Physics.ARCADE) {
      if (this.textWidth !== this.body.sourceWidth || this.textHeight !== this.body.sourceHeight) {
        this.body.setSize(this.textWidth, this.textHeight);
      }
    }
  };
  a.BitmapText.prototype.setText = function (t) {
    this.text = t;
  };
  a.BitmapText.prototype.scanLine = function (t, e, i) {
    var s = 0;
    var n = 0;
    var a = -1;
    var o = 0;
    var r = null;
    var h = this._maxWidth > 0 ? this._maxWidth : null;
    var l = [];
    for (var c = 0; c < i.length; c++) {
      var u = c === i.length - 1;
      if (/(?:\r\n|\r|\n)/.test(i.charAt(c))) {
        return {
          width: n,
          text: i.substr(0, c),
          end: u,
          chars: l
        };
      }
      var d = i.charCodeAt(c);
      var p = t.chars[d];
      var f = 0;
      if (p === undefined) {
        d = 32;
        p = t.chars[d];
      }
      var g = r && p.kerning[r] ? p.kerning[r] : 0;
      if (/(\s)/.test(i.charAt(c))) {
        a = c;
        o = n;
      }
      f = (g + p.texture.width + p.xOffset) * e;
      if (h && n + f >= h && a > -1) {
        return {
          width: o || n,
          text: i.substr(0, c - (c - a)),
          end: u,
          chars: l
        };
      }
      n += (p.xAdvance + g) * e;
      l.push(s + (p.xOffset + g) * e);
      s += (p.xAdvance + g) * e;
      r = d;
    }
    return {
      width: n,
      text: i,
      end: u,
      chars: l
    };
  };
  a.BitmapText.prototype.cleanText = function (t, e = "") {
    var i = this._data.font;
    if (!i) {
      return "";
    }
    var s = /\r\n|\n\r|\n|\r/g;
    for (var n = t.replace(s, "\n").split("\n"), a = 0; a < n.length; a++) {
      var o = "";
      for (var r = n[a], h = 0; h < r.length; h++) {
        o = i.chars[r.charCodeAt(h)] ? o.concat(r[h]) : o.concat(e);
      }
      n[a] = o;
    }
    return n.join("\n");
  };
  a.BitmapText.prototype.updateText = function () {
    var t = this._data.font;
    if (t) {
      var e = this.text;
      var i = this._fontSize / t.size;
      var s = [];
      var n = 0;
      this.textWidth = 0;
      do {
        var a = this.scanLine(t, i, e);
        a.y = n;
        s.push(a);
        if (a.width > this.textWidth) {
          this.textWidth = a.width;
        }
        n += t.lineHeight * i;
        e = e.substr(a.text.length + 1);
      } while (a.end === false);
      this.textHeight = n;
      var o = 0;
      var r = 0;
      var h = this.textWidth * this.anchor.x;
      var l = this.textHeight * this.anchor.y;
      for (var c = 0; c < s.length; c++) {
        var a = s[c];
        if (this._align === "right") {
          r = this.textWidth - a.width;
        } else if (this._align === "center") {
          r = (this.textWidth - a.width) / 2;
        }
        for (var u = 0; u < a.text.length; u++) {
          var d = a.text.charCodeAt(u);
          var p = t.chars[d];
          if (p === undefined) {
            d = 32;
            p = t.chars[d];
          }
          var f = this._glyphs[o];
          if (f) {
            f.texture = p.texture;
          } else {
            f = new PIXI.Sprite(p.texture);
            f.name = a.text[u];
            this._glyphs.push(f);
          }
          f.position.x = a.chars[u] + r - h;
          f.position.y = a.y + p.yOffset * i - l;
          f.scale.set(i);
          f.tint = this.tint;
          f.texture.requiresReTint = true;
          if (!f.parent) {
            this.addChild(f);
          }
          o++;
        }
      }
      for (c = o; c < this._glyphs.length; c++) {
        this.removeChild(this._glyphs[c]);
      }
    }
  };
  a.BitmapText.prototype.purgeGlyphs = function () {
    var t = this._glyphs.length;
    var e = [];
    for (var i = 0; i < this._glyphs.length; i++) {
      if (this._glyphs[i].parent !== this) {
        this._glyphs[i].destroy();
      } else {
        e.push(this._glyphs[i]);
      }
    }
    this._glyphs = [];
    this._glyphs = e;
    this.updateText();
    return t - e.length;
  };
  a.BitmapText.prototype.updateTransform = function () {
    if (!!this.dirty || !this.anchor.equals(this._prevAnchor)) {
      this.updateText();
      this.dirty = false;
      this._prevAnchor.copyFrom(this.anchor);
    }
    PIXI.DisplayObjectContainer.prototype.updateTransform.call(this);
  };
  Object.defineProperty(a.BitmapText.prototype, "align", {
    get: function () {
      return this._align;
    },
    set: function (t) {
      if (t !== this._align && (t === "left" || t === "center" || t === "right")) {
        this._align = t;
        this.updateText();
      }
    }
  });
  Object.defineProperty(a.BitmapText.prototype, "tint", {
    get: function () {
      return this._tint;
    },
    set: function (t) {
      if (t !== this._tint) {
        this._tint = t;
        this.updateText();
      }
    }
  });
  Object.defineProperty(a.BitmapText.prototype, "font", {
    get: function () {
      return this._font;
    },
    set: function (t) {
      if (t !== this._font) {
        this._font = t.trim();
        this._data = this.game.cache.getBitmapFont(this._font);
        this.updateText();
      }
    }
  });
  Object.defineProperty(a.BitmapText.prototype, "fontSize", {
    get: function () {
      return this._fontSize;
    },
    set: function (t) {
      if ((t = parseInt(t, 10)) !== this._fontSize && t > 0) {
        this._fontSize = t;
        this.updateText();
      }
    }
  });
  Object.defineProperty(a.BitmapText.prototype, "text", {
    get: function () {
      return this._text;
    },
    set: function (t) {
      if (t !== this._text) {
        this._text = t.toString() || "";
        this.updateText();
      }
    }
  });
  Object.defineProperty(a.BitmapText.prototype, "maxWidth", {
    get: function () {
      return this._maxWidth;
    },
    set: function (t) {
      if (t !== this._maxWidth) {
        this._maxWidth = t;
        this.updateText();
      }
    }
  });
  Object.defineProperty(a.BitmapText.prototype, "smoothed", {
    get: function () {
      return !this._data.base.scaleMode;
    },
    set: function (t) {
      this._data.base.scaleMode = t ? 0 : 1;
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.RetroFont = function (t, e, i, s, n, o, r, h, l, c) {
    if (!t.cache.checkImageKey(e)) {
      return false;
    }
    if (o === undefined || o === null) {
      o = t.cache.getImage(e).width / i;
    }
    this.characterWidth = i;
    this.characterHeight = s;
    this.characterSpacingX = r || 0;
    this.characterSpacingY = h || 0;
    this.characterPerRow = o;
    this.offsetX = l || 0;
    this.offsetY = c || 0;
    this.align = "left";
    this.multiLine = false;
    this.autoUpperCase = true;
    this.customSpacingX = 0;
    this.customSpacingY = 0;
    this.fixedWidth = 0;
    this.fontSet = t.cache.getImage(e);
    this._text = "";
    this.grabData = [];
    this.frameData = new a.FrameData();
    var u = this.offsetX;
    var d = this.offsetY;
    var p = 0;
    for (var f = 0; f < n.length; f++) {
      var g = this.frameData.addFrame(new a.Frame(f, u, d, this.characterWidth, this.characterHeight));
      this.grabData[n.charCodeAt(f)] = g.index;
      p++;
      if (p === this.characterPerRow) {
        p = 0;
        u = this.offsetX;
        d += this.characterHeight + this.characterSpacingY;
      } else {
        u += this.characterWidth + this.characterSpacingX;
      }
    }
    t.cache.updateFrameData(e, this.frameData);
    this.stamp = new a.Image(t, 0, 0, e, 0);
    a.RenderTexture.call(this, t, 100, 100, "", a.scaleModes.NEAREST);
    this.type = a.RETROFONT;
  };
  a.RetroFont.prototype = Object.create(a.RenderTexture.prototype);
  a.RetroFont.prototype.constructor = a.RetroFont;
  a.RetroFont.ALIGN_LEFT = "left";
  a.RetroFont.ALIGN_RIGHT = "right";
  a.RetroFont.ALIGN_CENTER = "center";
  a.RetroFont.TEXT_SET1 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  a.RetroFont.TEXT_SET2 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  a.RetroFont.TEXT_SET3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
  a.RetroFont.TEXT_SET4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789";
  a.RetroFont.TEXT_SET5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789";
  a.RetroFont.TEXT_SET6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ";
  a.RetroFont.TEXT_SET7 = "AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39";
  a.RetroFont.TEXT_SET8 = "0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  a.RetroFont.TEXT_SET9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!";
  a.RetroFont.TEXT_SET10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  a.RetroFont.TEXT_SET11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789";
  a.RetroFont.prototype.setFixedWidth = function (t, e = "left") {
    this.fixedWidth = t;
    this.align = e;
  };
  a.RetroFont.prototype.setText = function (t, e, i, s, n, a) {
    this.multiLine = e || false;
    this.customSpacingX = i || 0;
    this.customSpacingY = s || 0;
    this.align = n || "left";
    this.autoUpperCase = !a;
    if (t.length > 0) {
      this.text = t;
    }
  };
  a.RetroFont.prototype.buildRetroFontText = function () {
    var t = 0;
    var e = 0;
    this.clear();
    if (this.multiLine) {
      var i = this._text.split("\n");
      if (this.fixedWidth > 0) {
        this.resize(this.fixedWidth, i.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, true);
      } else {
        this.resize(this.getLongestLine() * (this.characterWidth + this.customSpacingX), i.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, true);
      }
      for (var s = 0; s < i.length; s++) {
        t = 0;
        if (this.align === a.RetroFont.ALIGN_RIGHT) {
          t = this.width - i[s].length * (this.characterWidth + this.customSpacingX);
        } else if (this.align === a.RetroFont.ALIGN_CENTER) {
          t = this.width / 2 - i[s].length * (this.characterWidth + this.customSpacingX) / 2;
          t += this.customSpacingX / 2;
        }
        if (t < 0) {
          t = 0;
        }
        this.pasteLine(i[s], t, e, this.customSpacingX);
        e += this.characterHeight + this.customSpacingY;
      }
    } else {
      if (this.fixedWidth > 0) {
        this.resize(this.fixedWidth, this.characterHeight, true);
      } else {
        this.resize(this._text.length * (this.characterWidth + this.customSpacingX), this.characterHeight, true);
      }
      t = 0;
      if (this.align === a.RetroFont.ALIGN_RIGHT) {
        t = this.width - this._text.length * (this.characterWidth + this.customSpacingX);
      } else if (this.align === a.RetroFont.ALIGN_CENTER) {
        t = this.width / 2 - this._text.length * (this.characterWidth + this.customSpacingX) / 2;
        t += this.customSpacingX / 2;
      }
      if (t < 0) {
        t = 0;
      }
      this.pasteLine(this._text, t, 0, this.customSpacingX);
    }
    this.requiresReTint = true;
  };
  a.RetroFont.prototype.pasteLine = function (t, e, i, s) {
    for (var n = 0; n < t.length; n++) {
      if (t.charAt(n) === " ") {
        e += this.characterWidth + s;
      } else if (this.grabData[t.charCodeAt(n)] >= 0 && (this.stamp.frame = this.grabData[t.charCodeAt(n)], this.renderXY(this.stamp, e, i, false), (e += this.characterWidth + s) > this.width)) {
        break;
      }
    }
  };
  a.RetroFont.prototype.getLongestLine = function () {
    var t = 0;
    if (this._text.length > 0) {
      for (var e = this._text.split("\n"), i = 0; i < e.length; i++) {
        if (e[i].length > t) {
          t = e[i].length;
        }
      }
    }
    return t;
  };
  a.RetroFont.prototype.removeUnsupportedCharacters = function (t) {
    var e = "";
    for (var i = 0; i < this._text.length; i++) {
      var s = this._text[i];
      var n = s.charCodeAt(0);
      if (this.grabData[n] >= 0 || !t && s === "\n") {
        e = e.concat(s);
      }
    }
    return e;
  };
  a.RetroFont.prototype.updateOffset = function (t, e) {
    if (this.offsetX !== t || this.offsetY !== e) {
      var i = t - this.offsetX;
      var s = e - this.offsetY;
      var n = this.game.cache.getFrameData(this.stamp.key).getFrames();
      for (var a = n.length; a--;) {
        n[a].x += i;
        n[a].y += s;
      }
      this.buildRetroFontText();
    }
  };
  Object.defineProperty(a.RetroFont.prototype, "text", {
    get: function () {
      return this._text;
    },
    set: function (t) {
      var e;
      if ((e = this.autoUpperCase ? t.toUpperCase() : t) !== this._text) {
        this._text = e;
        this.removeUnsupportedCharacters(this.multiLine);
        this.buildRetroFontText();
      }
    }
  });
  Object.defineProperty(a.RetroFont.prototype, "smoothed", {
    get: function () {
      return this.stamp.smoothed;
    },
    set: function (t) {
      this.stamp.smoothed = t;
      this.buildRetroFontText();
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd, Richard Davey
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Rope = function (t, e, i, s, n, o) {
    this.points = [];
    this.points = o;
    this._hasUpdateAnimation = false;
    this._updateAnimationCallback = null;
    e = e || 0;
    i = i || 0;
    s = s || null;
    n = n || null;
    this.type = a.ROPE;
    PIXI.Rope.call(this, a.Cache.DEFAULT, this.points);
    a.Component.Core.init.call(this, t, e, i, s, n);
  };
  a.Rope.prototype = Object.create(PIXI.Rope.prototype);
  a.Rope.prototype.constructor = a.Rope;
  a.Component.Core.install.call(a.Rope.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Delta", "Destroy", "FixedToCamera", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "ScaleMinMax", "Smoothed"]);
  a.Rope.prototype.preUpdatePhysics = a.Component.PhysicsBody.preUpdate;
  a.Rope.prototype.preUpdateLifeSpan = a.Component.LifeSpan.preUpdate;
  a.Rope.prototype.preUpdateInWorld = a.Component.InWorld.preUpdate;
  a.Rope.prototype.preUpdateCore = a.Component.Core.preUpdate;
  a.Rope.prototype.preUpdate = function () {
    return !!this.preUpdatePhysics() && !!this.preUpdateLifeSpan() && !!this.preUpdateInWorld() && this.preUpdateCore();
  };
  a.Rope.prototype.update = function () {
    if (this._hasUpdateAnimation) {
      this.updateAnimation.call(this);
    }
  };
  a.Rope.prototype.reset = function (t, e) {
    a.Component.Reset.prototype.reset.call(this, t, e);
    return this;
  };
  Object.defineProperty(a.Rope.prototype, "updateAnimation", {
    get: function () {
      return this._updateAnimation;
    },
    set: function (t) {
      if (t && typeof t == "function") {
        this._hasUpdateAnimation = true;
        this._updateAnimation = t;
      } else {
        this._hasUpdateAnimation = false;
        this._updateAnimation = null;
      }
    }
  });
  Object.defineProperty(a.Rope.prototype, "segments", {
    get: function () {
      var t = [];
      var e;
      var i;
      var s;
      var n;
      var o;
      var r;
      var h;
      var l;
      for (var c = 0; c < this.points.length; c++) {
        e = c * 4;
        i = this.vertices[e] * this.scale.x;
        s = this.vertices[e + 1] * this.scale.y;
        n = this.vertices[e + 4] * this.scale.x;
        o = this.vertices[e + 3] * this.scale.y;
        r = a.Math.difference(i, n);
        h = a.Math.difference(s, o);
        i += this.world.x;
        s += this.world.y;
        l = new a.Rectangle(i, s, r, h);
        t.push(l);
      }
      return t;
    }
  });
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.TileSprite = function (t, e, i, s, n, o, r) {
    e = e || 0;
    i = i || 0;
    s = s || 256;
    n = n || 256;
    o = o || null;
    r = r || null;
    this.type = a.TILESPRITE;
    this.physicsType = a.SPRITE;
    this._scroll = new a.Point();
    var h = t.cache.getImage("__default", true);
    PIXI.TilingSprite.call(this, new PIXI.Texture(h.base), s, n);
    a.Component.Core.init.call(this, t, e, i, o, r);
  };
  a.TileSprite.prototype = Object.create(PIXI.TilingSprite.prototype);
  a.TileSprite.prototype.constructor = a.TileSprite;
  a.Component.Core.install.call(a.TileSprite.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Destroy", "FixedToCamera", "Health", "InCamera", "InputEnabled", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "Smoothed"]);
  a.TileSprite.prototype.preUpdatePhysics = a.Component.PhysicsBody.preUpdate;
  a.TileSprite.prototype.preUpdateLifeSpan = a.Component.LifeSpan.preUpdate;
  a.TileSprite.prototype.preUpdateInWorld = a.Component.InWorld.preUpdate;
  a.TileSprite.prototype.preUpdateCore = a.Component.Core.preUpdate;
  a.TileSprite.prototype.preUpdate = function () {
    if (this._scroll.x !== 0) {
      this.tilePosition.x += this._scroll.x * this.game.time.physicsElapsed;
    }
    if (this._scroll.y !== 0) {
      this.tilePosition.y += this._scroll.y * this.game.time.physicsElapsed;
    }
    return !!this.preUpdatePhysics() && !!this.preUpdateLifeSpan() && !!this.preUpdateInWorld() && this.preUpdateCore();
  };
  a.TileSprite.prototype.autoScroll = function (t, e) {
    this._scroll.set(t, e);
  };
  a.TileSprite.prototype.stopScroll = function () {
    this._scroll.set(0, 0);
  };
  a.TileSprite.prototype.destroy = function (t) {
    a.Component.Destroy.prototype.destroy.call(this, t);
    PIXI.TilingSprite.prototype.destroy.call(this);
  };
  a.TileSprite.prototype.reset = function (t, e) {
    a.Component.Reset.prototype.reset.call(this, t, e);
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
    return this;
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Device = function () {
    this.deviceReadyAt = 0;
    this.initialized = false;
    this.desktop = false;
    this.iOS = false;
    this.iOSVersion = 0;
    this.cocoonJS = false;
    this.cocoonJSApp = false;
    this.cordova = false;
    this.node = false;
    this.nodeWebkit = false;
    this.electron = false;
    this.ejecta = false;
    this.crosswalk = false;
    this.android = false;
    this.chromeOS = false;
    this.linux = false;
    this.macOS = false;
    this.windows = false;
    this.windowsPhone = false;
    this.canvas = false;
    this.canvasBitBltShift = null;
    this.webGL = false;
    this.file = false;
    this.fileSystem = false;
    this.localStorage = false;
    this.worker = false;
    this.css3D = false;
    this.pointerLock = false;
    this.typedArray = false;
    this.vibration = false;
    this.getUserMedia = true;
    this.quirksMode = false;
    this.touch = false;
    this.mspointer = false;
    this.wheelEvent = null;
    this.arora = false;
    this.chrome = false;
    this.chromeVersion = 0;
    this.epiphany = false;
    this.firefox = false;
    this.firefoxVersion = 0;
    this.ie = false;
    this.ieVersion = 0;
    this.trident = false;
    this.tridentVersion = 0;
    this.edge = false;
    this.mobileSafari = false;
    this.midori = false;
    this.opera = false;
    this.safari = false;
    this.safariVersion = 0;
    this.webApp = false;
    this.silk = false;
    this.audioData = false;
    this.webAudio = false;
    this.ogg = false;
    this.opus = false;
    this.mp3 = false;
    this.wav = false;
    this.m4a = false;
    this.webm = false;
    this.dolby = false;
    this.oggVideo = false;
    this.h264Video = false;
    this.mp4Video = false;
    this.webmVideo = false;
    this.vp9Video = false;
    this.hlsVideo = false;
    this.iPhone = false;
    this.iPhone4 = false;
    this.iPad = false;
    this.pixelRatio = 0;
    this.littleEndian = false;
    this.LITTLE_ENDIAN = false;
    this.support32bit = false;
    this.fullscreen = false;
    this.requestFullscreen = "";
    this.cancelFullscreen = "";
    this.fullscreenKeyboard = false;
  };
  a.Device = new a.Device();
  a.Device.onInitialized = new a.Signal();
  a.Device.whenReady = function (t, e, i) {
    var s = this._readyCheck;
    if (this.deviceReadyAt || !s) {
      t.call(e, this);
    } else if (s._monitor || i) {
      s._queue = s._queue || [];
      s._queue.push([t, e]);
    } else {
      s._monitor = s.bind(this);
      s._queue = s._queue || [];
      s._queue.push([t, e]);
      var n = window.cordova !== undefined;
      var a = navigator.isCocoonJS;
      if (document.readyState === "complete" || document.readyState === "interactive") {
        window.setTimeout(s._monitor, 0);
      } else if (n && !a) {
        document.addEventListener("deviceready", s._monitor, false);
      } else {
        document.addEventListener("DOMContentLoaded", s._monitor, false);
        window.addEventListener("load", s._monitor, false);
      }
    }
  };
  a.Device._readyCheck = function () {
    var t = this._readyCheck;
    if (document.body) {
      if (!this.deviceReadyAt) {
        this.deviceReadyAt = Date.now();
        document.removeEventListener("deviceready", t._monitor);
        document.removeEventListener("DOMContentLoaded", t._monitor);
        window.removeEventListener("load", t._monitor);
        this._initialize();
        this.initialized = true;
        this.onInitialized.dispatch(this);
        for (var e; e = t._queue.shift();) {
          var i = e[0];
          var s = e[1];
          i.call(s, this);
        }
        this._readyCheck = null;
        this._initialize = null;
        this.onInitialized = null;
      }
    } else {
      window.setTimeout(t._monitor, 20);
    }
  };
  a.Device._initialize = function () {
    function t() {
      var t = navigator.userAgent;
      if (/Playstation Vita/.test(t)) {
        d.vita = true;
      } else if (/Kindle/.test(t) || /\bKF[A-Z][A-Z]+/.test(t) || /Silk.*Mobile Safari/.test(t)) {
        d.kindle = true;
      } else if (/Android/.test(t)) {
        d.android = true;
      } else if (/CrOS/.test(t)) {
        d.chromeOS = true;
      } else if (/iP[ao]d|iPhone/i.test(t)) {
        d.iOS = true;
        navigator.appVersion.match(/OS (\d+)/);
        d.iOSVersion = parseInt(RegExp.$1, 10);
      } else if (/Linux/.test(t)) {
        d.linux = true;
      } else if (/Mac OS/.test(t)) {
        d.macOS = true;
      } else if (/Windows/.test(t)) {
        d.windows = true;
      }
      if (/Windows Phone/i.test(t) || /IEMobile/i.test(t)) {
        d.android = false;
        d.iOS = false;
        d.macOS = false;
        d.windows = true;
        d.windowsPhone = true;
      }
      var e = /Silk/.test(t);
      if (d.windows || d.macOS || d.linux && !e || d.chromeOS) {
        d.desktop = true;
      }
      if (d.windowsPhone || /Windows NT/i.test(t) && /Touch/i.test(t)) {
        d.desktop = false;
      }
    }
    function e() {
      d.canvas = !!window.CanvasRenderingContext2D || d.cocoonJS;
      try {
        d.localStorage = !!localStorage.getItem;
      } catch (t) {
        d.localStorage = false;
      }
      d.file = !!window.File && !!window.FileReader && !!window.FileList && !!window.Blob;
      d.fileSystem = !!window.requestFileSystem;
      var t = {
        stencil: true
      };
      d.webGL = function () {
        try {
          var e = document.createElement("canvas");
          e.screencanvas = false;
          return !!window.WebGLRenderingContext && (e.getContext("webgl", t) || e.getContext("experimental-webgl", t));
        } catch (t) {
          return false;
        }
      }();
      d.webGL = !!d.webGL;
      d.worker = !!window.Worker;
      d.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
      d.quirksMode = document.compatMode !== "CSS1Compat";
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
      d.getUserMedia = d.getUserMedia && !!navigator.getUserMedia && !!window.URL;
      if (d.firefox && d.firefoxVersion < 21) {
        d.getUserMedia = false;
      }
      if (!d.iOS && (d.ie || d.firefox || d.chrome)) {
        d.canvasBitBltShift = true;
      }
      if (d.safari || d.mobileSafari) {
        d.canvasBitBltShift = false;
      }
    }
    function s() {
      if ("ontouchstart" in document.documentElement || window.navigator.maxTouchPoints && window.navigator.maxTouchPoints >= 1) {
        d.touch = true;
      }
      if (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) {
        d.mspointer = true;
      }
      if (!d.cocoonJS) {
        if ("onwheel" in window || d.ie && "WheelEvent" in window) {
          d.wheelEvent = "wheel";
        } else if ("onmousewheel" in window) {
          d.wheelEvent = "mousewheel";
        } else if (d.firefox && "MouseScrollEvent" in window) {
          d.wheelEvent = "DOMMouseScroll";
        }
      }
    }
    function n() {
      for (var t = ["requestFullscreen", "requestFullScreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "msRequestFullscreen", "msRequestFullScreen", "mozRequestFullScreen", "mozRequestFullscreen"], e = document.createElement("div"), i = 0; i < t.length; i++) {
        if (e[t[i]]) {
          d.fullscreen = true;
          d.requestFullscreen = t[i];
          break;
        }
      }
      var s = ["cancelFullScreen", "exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "msCancelFullScreen", "msExitFullscreen", "mozCancelFullScreen", "mozExitFullscreen"];
      if (d.fullscreen) {
        for (var i = 0; i < s.length; i++) {
          if (document[s[i]]) {
            d.cancelFullscreen = s[i];
            break;
          }
        }
      }
      if (window.Element && Element.ALLOW_KEYBOARD_INPUT) {
        d.fullscreenKeyboard = true;
      }
    }
    function a() {
      var t = navigator.userAgent;
      if (/Arora/.test(t)) {
        d.arora = true;
      } else if (/Edge\/\d+/.test(t)) {
        d.edge = true;
      } else if (/Chrome\/(\d+)/.test(t) && !d.windowsPhone) {
        d.chrome = true;
        d.chromeVersion = parseInt(RegExp.$1, 10);
      } else if (/Epiphany/.test(t)) {
        d.epiphany = true;
      } else if (/Firefox\D+(\d+)/.test(t)) {
        d.firefox = true;
        d.firefoxVersion = parseInt(RegExp.$1, 10);
      } else if (/AppleWebKit/.test(t) && d.iOS) {
        d.mobileSafari = true;
      } else if (/MSIE (\d+\.\d+);/.test(t)) {
        d.ie = true;
        d.ieVersion = parseInt(RegExp.$1, 10);
      } else if (/Midori/.test(t)) {
        d.midori = true;
      } else if (/Opera/.test(t)) {
        d.opera = true;
      } else if (/Safari\/(\d+)/.test(t) && !d.windowsPhone) {
        d.safari = true;
        if (/Version\/(\d+)\./.test(t)) {
          d.safariVersion = parseInt(RegExp.$1, 10);
        }
      } else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(t)) {
        d.ie = true;
        d.trident = true;
        d.tridentVersion = parseInt(RegExp.$1, 10);
        d.ieVersion = parseInt(RegExp.$3, 10);
      }
      if (/Silk/.test(t)) {
        d.silk = true;
      }
      if (navigator.standalone) {
        d.webApp = true;
      }
      if (window.cordova !== undefined) {
        d.cordova = true;
      }
      if (i !== undefined) {
        d.node = true;
      }
      if (d.node && typeof i.versions == "object") {
        d.nodeWebkit = !!i.versions["node-webkit"];
        d.electron = !!i.versions.electron;
      }
      if (navigator.isCocoonJS) {
        d.cocoonJS = true;
      }
      if (d.cocoonJS) {
        try {
          d.cocoonJSApp = typeof CocoonJS != "undefined";
        } catch (t) {
          d.cocoonJSApp = false;
        }
      }
      if (window.ejecta !== undefined) {
        d.ejecta = true;
      }
      if (/Crosswalk/.test(t)) {
        d.crosswalk = true;
      }
    }
    function o() {
      var t = document.createElement("video");
      var e = false;
      try {
        if (e = !!t.canPlayType) {
          if (t.canPlayType("video/ogg; codecs=\"theora\"").replace(/^no$/, "")) {
            d.oggVideo = true;
          }
          if (t.canPlayType("video/mp4; codecs=\"avc1.42E01E\"").replace(/^no$/, "")) {
            d.h264Video = true;
            d.mp4Video = true;
          }
          if (t.canPlayType("video/webm; codecs=\"vp8, vorbis\"").replace(/^no$/, "")) {
            d.webmVideo = true;
          }
          if (t.canPlayType("video/webm; codecs=\"vp9\"").replace(/^no$/, "")) {
            d.vp9Video = true;
          }
          if (t.canPlayType("application/x-mpegURL; codecs=\"avc1.42E01E\"").replace(/^no$/, "")) {
            d.hlsVideo = true;
          }
        }
      } catch (t) {}
    }
    function r() {
      d.audioData = !!window.Audio;
      d.webAudio = !!window.AudioContext || !!window.webkitAudioContext;
      var t = document.createElement("audio");
      var e = false;
      try {
        if ((e = !!t.canPlayType) && (t.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, "") && (d.ogg = true), (t.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, "") || t.canPlayType("audio/opus;").replace(/^no$/, "")) && (d.opus = true), t.canPlayType("audio/mpeg;").replace(/^no$/, "") && (d.mp3 = true), t.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, "") && (d.wav = true), (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;").replace(/^no$/, "")) && (d.m4a = true), t.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, "") && (d.webm = true), t.canPlayType("audio/mp4;codecs=\"ec-3\"") !== "")) {
          if (d.edge) {
            d.dolby = true;
          } else if (d.safari && d.safariVersion >= 9 && /Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)) {
            var i = parseInt(RegExp.$1, 10);
            var s = parseInt(RegExp.$2, 10);
            if (i === 10 && s >= 11 || i > 10) {
              d.dolby = true;
            }
          }
        }
      } catch (t) {}
    }
    function h() {
      var t = new ArrayBuffer(4);
      var e = new Uint8Array(t);
      var i = new Uint32Array(t);
      e[0] = 161;
      e[1] = 178;
      e[2] = 195;
      e[3] = 212;
      return i[0] === 3569595041 || i[0] !== 2712847316 && null;
    }
    function l() {
      if (Uint8ClampedArray === undefined) {
        return false;
      }
      var t = PIXI.CanvasPool.create(this, 1, 1);
      var e = t.getContext("2d");
      if (!e) {
        return false;
      }
      var i = e.createImageData(1, 1);
      PIXI.CanvasPool.remove(this);
      return i.data instanceof Uint8ClampedArray;
    }
    function c() {
      d.pixelRatio = window.devicePixelRatio || 1;
      d.iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") !== -1;
      d.iPhone4 = d.pixelRatio === 2 && d.iPhone;
      d.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") !== -1;
      if (typeof Int8Array != "undefined") {
        d.typedArray = true;
      } else {
        d.typedArray = false;
      }
      if (typeof ArrayBuffer != "undefined" && typeof Uint8Array != "undefined" && typeof Uint32Array != "undefined") {
        d.littleEndian = h();
        d.LITTLE_ENDIAN = d.littleEndian;
      }
      d.support32bit = typeof ArrayBuffer != "undefined" && typeof Uint8ClampedArray != "undefined" && typeof Int32Array != "undefined" && d.littleEndian !== null && l();
      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
      if (navigator.vibrate) {
        d.vibration = true;
      }
    }
    function u() {
      var t = document.createElement("p");
      var e;
      var i = {
        webkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        msTransform: "-ms-transform",
        MozTransform: "-moz-transform",
        transform: "transform"
      };
      document.body.insertBefore(t, null);
      for (var s in i) {
        if (t.style[s] !== undefined) {
          t.style[s] = "translate3d(1px,1px,1px)";
          e = window.getComputedStyle(t).getPropertyValue(i[s]);
        }
      }
      document.body.removeChild(t);
      d.css3D = e !== undefined && e.length > 0 && e !== "none";
    }
    var d = this;
    t();
    a();
    r();
    o();
    u();
    c();
    e();
    n();
    s();
  };
  a.Device.canPlayAudio = function (t) {
    return t === "mp3" && !!this.mp3 || t === "ogg" && (!!this.ogg || !!this.opus) || t === "m4a" && !!this.m4a || t === "opus" && !!this.opus || t === "wav" && !!this.wav || t === "webm" && !!this.webm || t === "mp4" && !!this.dolby;
  };
  a.Device.canPlayVideo = function (t) {
    return t === "webm" && (!!this.webmVideo || !!this.vp9Video) || t === "mp4" && (!!this.mp4Video || !!this.h264Video) || (t === "ogg" || t === "ogv") && !!this.oggVideo || t === "mpeg" && !!this.hlsVideo;
  };
  a.Device.isConsoleOpen = function () {
    return !!window.console && !!window.console.firebug || !!window.console && !(console.clear, !console.profiles) && console.profiles.length > 0;
  };
  a.Device.isAndroidStockBrowser = function () {
    var t = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return t && t[1] < 537;
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Canvas = {
    create: function (t, e, i, s, n) {
      e = e || 256;
      i = i || 256;
      var a = n ? document.createElement("canvas") : PIXI.CanvasPool.create(t, e, i);
      if (typeof s == "string" && s !== "") {
        a.id = s;
      }
      a.width = e;
      a.height = i;
      a.style.display = "block";
      return a;
    },
    setBackgroundColor: function (t, e) {
      e = e || "rgb(0,0,0)";
      t.style.backgroundColor = e;
      return t;
    },
    setTouchAction: function (t, e) {
      e = e || "none";
      t.style.msTouchAction = e;
      t.style["ms-touch-action"] = e;
      t.style["touch-action"] = e;
      return t;
    },
    setUserSelect: function (t, e) {
      e = e || "none";
      t.style["-webkit-touch-callout"] = e;
      t.style["-webkit-user-select"] = e;
      t.style["-khtml-user-select"] = e;
      t.style["-moz-user-select"] = e;
      t.style["-ms-user-select"] = e;
      t.style["user-select"] = e;
      t.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)";
      return t;
    },
    addToDOM: function (t, e, i) {
      var s;
      if (i === undefined) {
        i = true;
      }
      if (e) {
        if (typeof e == "string") {
          s = document.getElementById(e);
        } else if (typeof e == "object" && e.nodeType === 1) {
          s = e;
        }
      }
      s ||= document.body;
      if (i && s.style) {
        s.style.overflow = "hidden";
      }
      s.appendChild(t);
      return t;
    },
    removeFromDOM: function (t) {
      if (t.parentNode) {
        t.parentNode.removeChild(t);
      }
    },
    setTransform: function (t, e, i, s, n, a, o) {
      t.setTransform(s, a, o, n, e, i);
      return t;
    },
    setSmoothingEnabled: function (t, e) {
      var i = a.Canvas.getSmoothingPrefix(t);
      if (i) {
        t[i] = e;
      }
      return t;
    },
    getSmoothingPrefix: function (t) {
      var e = ["i", "webkitI", "msI", "mozI", "oI"];
      for (var i in e) {
        var s = e[i] + "mageSmoothingEnabled";
        if (s in t) {
          return s;
        }
      }
      return null;
    },
    getSmoothingEnabled: function (t) {
      var e = a.Canvas.getSmoothingPrefix(t);
      if (e) {
        return t[e];
      }
    },
    setImageRenderingCrisp: function (t) {
      for (var e = ["optimizeSpeed", "crisp-edges", "-moz-crisp-edges", "-webkit-optimize-contrast", "optimize-contrast", "pixelated"], i = 0; i < e.length; i++) {
        t.style["image-rendering"] = e[i];
      }
      t.style.msInterpolationMode = "nearest-neighbor";
      return t;
    },
    setImageRenderingBicubic: function (t) {
      t.style["image-rendering"] = "auto";
      t.style.msInterpolationMode = "bicubic";
      return t;
    }
  };
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.RequestAnimationFrame = function (t, e = false) {
    this.game = t;
    this.isRunning = false;
    this.forceSetTimeOut = e;
    for (var i = ["ms", "moz", "webkit", "o"], s = 0; s < i.length && !window.requestAnimationFrame; s++) {
      window.requestAnimationFrame = window[i[s] + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[i[s] + "CancelAnimationFrame"];
    }
    this._isSetTimeOut = false;
    this._onLoop = null;
    this._timeOutID = null;
  };
  a.RequestAnimationFrame.prototype = {
    start: function () {
      this.isRunning = true;
      var t = this;
      if (!window.requestAnimationFrame || this.forceSetTimeOut) {
        this._isSetTimeOut = true;
        this._onLoop = function () {
          return t.updateSetTimeout();
        };
        this._timeOutID = window.setTimeout(this._onLoop, 0);
      } else {
        this._isSetTimeOut = false;
        this._onLoop = function (e) {
          return t.updateRAF(e);
        };
        this._timeOutID = window.requestAnimationFrame(this._onLoop);
      }
    },
    updateRAF: function (t) {
      if (this.isRunning) {
        this.game.update(Math.floor(t));
        this._timeOutID = window.requestAnimationFrame(this._onLoop);
      }
    },
    updateSetTimeout: function () {
      if (this.isRunning) {
        this.game.update(Date.now());
        this._timeOutID = window.setTimeout(this._onLoop, this.game.time.timeToCall);
      }
    },
    stop: function () {
      if (this._isSetTimeOut) {
        clearTimeout(this._timeOutID);
      } else {
        window.cancelAnimationFrame(this._timeOutID);
      }
      this.isRunning = false;
    },
    isSetTimeOut: function () {
      return this._isSetTimeOut;
    },
    isRAF: function () {
      return this._isSetTimeOut === false;
    }
  };
  a.RequestAnimationFrame.prototype.constructor = a.RequestAnimationFrame;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Math = {
    PI2: Math.PI * 2,
    between: function (t, e) {
      return Math.floor(Math.random() * (e - t + 1) + t);
    },
    fuzzyEqual: function (t, e, i = 0.0001) {
      return Math.abs(t - e) < i;
    },
    fuzzyLessThan: function (t, e, i = 0.0001) {
      return t < e + i;
    },
    fuzzyGreaterThan: function (t, e, i = 0.0001) {
      return t > e - i;
    },
    fuzzyCeil: function (t, e = 0.0001) {
      return Math.ceil(t - e);
    },
    fuzzyFloor: function (t, e = 0.0001) {
      return Math.floor(t + e);
    },
    average: function () {
      var t = 0;
      for (var e = arguments.length, i = 0; i < e; i++) {
        t += +arguments[i];
      }
      return t / e;
    },
    shear: function (t) {
      return t % 1;
    },
    snapTo: function (t, e, i = 0) {
      if (e === 0) {
        return t;
      } else {
        t -= i;
        t = e * Math.round(t / e);
        return i + t;
      }
    },
    snapToFloor: function (t, e, i = 0) {
      if (e === 0) {
        return t;
      } else {
        t -= i;
        t = e * Math.floor(t / e);
        return i + t;
      }
    },
    snapToCeil: function (t, e, i = 0) {
      if (e === 0) {
        return t;
      } else {
        t -= i;
        t = e * Math.ceil(t / e);
        return i + t;
      }
    },
    roundTo: function (t, e = 0, i = 10) {
      var s = Math.pow(i, -e);
      return Math.round(t * s) / s;
    },
    floorTo: function (t, e = 0, i = 10) {
      var s = Math.pow(i, -e);
      return Math.floor(t * s) / s;
    },
    ceilTo: function (t, e = 0, i = 10) {
      var s = Math.pow(i, -e);
      return Math.ceil(t * s) / s;
    },
    rotateToAngle: function (t, e, i = 0.05) {
      if (t === e) {
        return t;
      } else {
        if (Math.abs(e - t) <= i || Math.abs(e - t) >= a.Math.PI2 - i) {
          t = e;
        } else {
          if (Math.abs(e - t) > Math.PI) {
            if (e < t) {
              e += a.Math.PI2;
            } else {
              e -= a.Math.PI2;
            }
          }
          if (e > t) {
            t += i;
          } else if (e < t) {
            t -= i;
          }
        }
        return t;
      }
    },
    getShortestAngle: function (t, e) {
      var i = e - t;
      if (i === 0) {
        return 0;
      } else {
        return i - Math.floor((i - -180) / 360) * 360;
      }
    },
    angleBetween: function (t, e, i, s) {
      return Math.atan2(s - e, i - t);
    },
    angleBetweenY: function (t, e, i, s) {
      return Math.atan2(i - t, s - e);
    },
    angleBetweenPoints: function (t, e) {
      return Math.atan2(e.y - t.y, e.x - t.x);
    },
    angleBetweenPointsY: function (t, e) {
      return Math.atan2(e.x - t.x, e.y - t.y);
    },
    reverseAngle: function (t) {
      return this.normalizeAngle(t + Math.PI, true);
    },
    normalizeAngle: function (t) {
      t %= Math.PI * 2;
      if (t >= 0) {
        return t;
      } else {
        return t + Math.PI * 2;
      }
    },
    maxAdd: function (t, e, i) {
      return Math.min(t + e, i);
    },
    minSub: function (t, e, i) {
      return Math.max(t - e, i);
    },
    wrap: function (t, e, i) {
      var s = i - e;
      if (s <= 0) {
        return 0;
      }
      var n = (t - e) % s;
      if (n < 0) {
        n += s;
      }
      return n + e;
    },
    wrapValue: function (t, e, i) {
      var s;
      t = Math.abs(t);
      e = Math.abs(e);
      i = Math.abs(i);
      return s = (t + e) % i;
    },
    isOdd: function (t) {
      return !!(t & 1);
    },
    isEven: function (t) {
      return !(t & 1);
    },
    min: function () {
      if (arguments.length === 1 && typeof arguments[0] == "object") {
        var t = arguments[0];
      } else {
        var t = arguments;
      }
      for (var e = 1, i = 0, s = t.length; e < s; e++) {
        if (t[e] < t[i]) {
          i = e;
        }
      }
      return t[i];
    },
    max: function () {
      if (arguments.length === 1 && typeof arguments[0] == "object") {
        var t = arguments[0];
      } else {
        var t = arguments;
      }
      for (var e = 1, i = 0, s = t.length; e < s; e++) {
        if (t[e] > t[i]) {
          i = e;
        }
      }
      return t[i];
    },
    minProperty: function (t) {
      if (arguments.length === 2 && typeof arguments[1] == "object") {
        var e = arguments[1];
      } else {
        var e = arguments.slice(1);
      }
      for (var i = 1, s = 0, n = e.length; i < n; i++) {
        if (e[i][t] < e[s][t]) {
          s = i;
        }
      }
      return e[s][t];
    },
    maxProperty: function (t) {
      if (arguments.length === 2 && typeof arguments[1] == "object") {
        var e = arguments[1];
      } else {
        var e = arguments.slice(1);
      }
      for (var i = 1, s = 0, n = e.length; i < n; i++) {
        if (e[i][t] > e[s][t]) {
          s = i;
        }
      }
      return e[s][t];
    },
    wrapAngle: function (t, e) {
      if (e) {
        return this.wrap(t, -Math.PI, Math.PI);
      } else {
        return this.wrap(t, -180, 180);
      }
    },
    linearInterpolation: function (t, e) {
      var i = t.length - 1;
      var s = i * e;
      var n = Math.floor(s);
      if (e < 0) {
        return this.linear(t[0], t[1], s);
      } else if (e > 1) {
        return this.linear(t[i], t[i - 1], i - s);
      } else {
        return this.linear(t[n], t[n + 1 > i ? i : n + 1], s - n);
      }
    },
    bezierInterpolation: function (t, e) {
      var i = 0;
      for (var s = t.length - 1, n = 0; n <= s; n++) {
        i += Math.pow(1 - e, s - n) * Math.pow(e, n) * t[n] * this.bernstein(s, n);
      }
      return i;
    },
    catmullRomInterpolation: function (t, e) {
      var i = t.length - 1;
      var s = i * e;
      var n = Math.floor(s);
      if (t[0] === t[i]) {
        if (e < 0) {
          n = Math.floor(s = i * (1 + e));
        }
        return this.catmullRom(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], s - n);
      } else if (e < 0) {
        return t[0] - (this.catmullRom(t[0], t[0], t[1], t[1], -s) - t[0]);
      } else if (e > 1) {
        return t[i] - (this.catmullRom(t[i], t[i], t[i - 1], t[i - 1], s - i) - t[i]);
      } else {
        return this.catmullRom(t[n ? n - 1 : 0], t[n], t[i < n + 1 ? i : n + 1], t[i < n + 2 ? i : n + 2], s - n);
      }
    },
    linear: function (t, e, i) {
      return (e - t) * i + t;
    },
    bernstein: function (t, e) {
      return this.factorial(t) / this.factorial(e) / this.factorial(t - e);
    },
    factorial: function (t) {
      if (t === 0) {
        return 1;
      }
      var e = t;
      while (--t) {
        e *= t;
      }
      return e;
    },
    catmullRom: function (t, e, i, s, n) {
      var a = (i - t) * 0.5;
      var o = (s - e) * 0.5;
      var r = n * n;
      return (e * 2 - i * 2 + a + o) * (n * r) + (e * -3 + i * 3 - a * 2 - o) * r + a * n + e;
    },
    difference: function (t, e) {
      return Math.abs(t - e);
    },
    roundAwayFromZero: function (t) {
      if (t > 0) {
        return Math.ceil(t);
      } else {
        return Math.floor(t);
      }
    },
    sinCosGenerator: function (t, e = 1, i = 1, s = 1) {
      var n = e;
      var a = i;
      var o = s * Math.PI / t;
      var r = [];
      var h = [];
      for (var l = 0; l < t; l++) {
        a -= n * o;
        n += a * o;
        r[l] = a;
        h[l] = n;
      }
      return {
        sin: h,
        cos: r,
        length: t
      };
    },
    distance: function (t, e, i, s) {
      var n = t - i;
      var a = e - s;
      return Math.sqrt(n * n + a * a);
    },
    distanceSq: function (t, e, i, s) {
      var n = t - i;
      var a = e - s;
      return n * n + a * a;
    },
    distancePow: function (t, e, i, s, n = 2) {
      return Math.sqrt(Math.pow(i - t, n) + Math.pow(s - e, n));
    },
    clamp: function (t, e, i) {
      if (t < e) {
        return e;
      } else if (i < t) {
        return i;
      } else {
        return t;
      }
    },
    clampBottom: function (t, e) {
      if (t < e) {
        return e;
      } else {
        return t;
      }
    },
    within: function (t, e, i) {
      return Math.abs(t - e) <= i;
    },
    mapLinear: function (t, e, i, s, n) {
      return s + (t - e) * (n - s) / (i - e);
    },
    smoothstep: function (t, e, i) {
      return (t = Math.max(0, Math.min(1, (t - e) / (i - e)))) * t * (3 - t * 2);
    },
    smootherstep: function (t, e, i) {
      return (t = Math.max(0, Math.min(1, (t - e) / (i - e)))) * t * t * (t * (t * 6 - 15) + 10);
    },
    sign: function (t) {
      if (t < 0) {
        return -1;
      } else if (t > 0) {
        return 1;
      } else {
        return 0;
      }
    },
    percent: function (t, e, i = 0) {
      if (t > e || i > e) {
        return 1;
      } else if (t < i || i > t) {
        return 0;
      } else {
        return (t - i) / e;
      }
    }
  };
  var p = Math.PI / 180;
  var f = 180 / Math.PI;
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
   * @author       Timo Hausmann
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2016 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
   * @author       Jeremy Dowell <jeremy@codevinsky.com>
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2016 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Georgios Kaleadis https://github.com/georgiee
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       George https://github.com/georgiee
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  a.Math.degToRad = function t(e) {
    return e * p;
  };
  a.Math.radToDeg = function t(e) {
    return e * f;
  };
  a.RandomDataGenerator = function (t = []) {
    this.c = 1;
    this.s0 = 0;
    this.s1 = 0;
    this.s2 = 0;
    if (typeof t == "string") {
      this.state(t);
    } else {
      this.sow(t);
    }
  };
  a.RandomDataGenerator.prototype = {
    rnd: function () {
      var t = this.s0 * 2091639 + this.c * 2.3283064365386963e-10;
      this.c = t | 0;
      this.s0 = this.s1;
      this.s1 = this.s2;
      this.s2 = t - this.c;
      return this.s2;
    },
    sow: function (t) {
      this.s0 = this.hash(" ");
      this.s1 = this.hash(this.s0);
      this.s2 = this.hash(this.s1);
      this.c = 1;
      if (t) {
        for (var e = 0; e < t.length && t[e] != null; e++) {
          var i = t[e];
          this.s0 -= this.hash(i);
          this.s0 += ~~(this.s0 < 0);
          this.s1 -= this.hash(i);
          this.s1 += ~~(this.s1 < 0);
          this.s2 -= this.hash(i);
          this.s2 += ~~(this.s2 < 0);
        }
      }
    },
    hash: function (t) {
      var e;
      var i;
      var s;
      s = 4022871197;
      t = t.toString();
      i = 0;
      for (; i < t.length; i++) {
        s += t.charCodeAt(i);
        e = s * 0.02519603282416938;
        s = e >>> 0;
        e -= s;
        e *= s;
        s = e >>> 0;
        e -= s;
        s += e * 4294967296;
      }
      return (s >>> 0) * 2.3283064365386963e-10;
    },
    integer: function () {
      return this.rnd.apply(this) * 4294967296;
    },
    frac: function () {
      return this.rnd.apply(this) + (this.rnd.apply(this) * 2097152 | 0) * 1.1102230246251565e-16;
    },
    real: function () {
      return this.integer() + this.frac();
    },
    integerInRange: function (t, e) {
      return Math.floor(this.realInRange(0, e - t + 1) + t);
    },
    between: function (t, e) {
      return this.integerInRange(t, e);
    },
    realInRange: function (t, e) {
      return this.frac() * (e - t) + t;
    },
    normal: function () {
      return 1 - this.frac() * 2;
    },
    uuid: function () {
      var t = "";
      var e = "";
      for (e = t = ""; t++ < 36; e += ~t % 5 | t * 3 & 4 ? (t ^ 15 ? this.frac() * (t ^ 20 ? 16 : 4) ^ 8 : 4).toString(16) : "-");
      return e;
    },
    pick: function (t) {
      return t[this.integerInRange(0, t.length - 1)];
    },
    sign: function () {
      return this.pick([-1, 1]);
    },
    weightedPick: function (t) {
      return t[~~(Math.pow(this.frac(), 2) * (t.length - 1) + 0.5)];
    },
    timestamp: function (t, e) {
      return this.realInRange(t || 946684800000, e || 1577862000000);
    },
    angle: function () {
      return this.integerInRange(-180, 180);
    },
    state: function (t) {
      if (typeof t == "string" && t.match(/^!rnd/)) {
        t = t.split(",");
        this.c = parseFloat(t[1]);
        this.s0 = parseFloat(t[2]);
        this.s1 = parseFloat(t[3]);
        this.s2 = parseFloat(t[4]);
      }
      return ["!rnd", this.c, this.s0, this.s1, this.s2].join(",");
    }
  };
  a.RandomDataGenerator.prototype.constructor = a.RandomDataGenerator;
  a.QuadTree = function (t, e, i, s, n, a, o) {
    this.maxObjects = 10;
    this.maxLevels = 4;
    this.level = 0;
    this.bounds = {};
    this.objects = [];
    this.nodes = [];
    this._empty = [];
    this.reset(t, e, i, s, n, a, o);
  };
  a.QuadTree.prototype = {
    reset: function (t, e, i, s, n, a, o) {
      this.maxObjects = n || 10;
      this.maxLevels = a || 4;
      this.level = o || 0;
      this.bounds = {
        x: Math.round(t),
        y: Math.round(e),
        width: i,
        height: s,
        subWidth: Math.floor(i / 2),
        subHeight: Math.floor(s / 2),
        right: Math.round(t) + Math.floor(i / 2),
        bottom: Math.round(e) + Math.floor(s / 2)
      };
      this.objects.length = 0;
      this.nodes.length = 0;
    },
    populate: function (t) {
      t.forEach(this.populateHandler, this, true);
    },
    populateHandler: function (t) {
      if (t.body && t.exists) {
        this.insert(t.body);
      }
    },
    split: function () {
      this.nodes[0] = new a.QuadTree(this.bounds.right, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1);
      this.nodes[1] = new a.QuadTree(this.bounds.x, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1);
      this.nodes[2] = new a.QuadTree(this.bounds.x, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1);
      this.nodes[3] = new a.QuadTree(this.bounds.right, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1);
    },
    insert: function (t) {
      var e = 0;
      var i;
      if (this.nodes[0] != null && (i = this.getIndex(t)) !== -1) {
        this.nodes[i].insert(t);
        return;
      }
      this.objects.push(t);
      if (this.objects.length > this.maxObjects && this.level < this.maxLevels) {
        for (this.nodes[0] == null && this.split(); e < this.objects.length;) {
          i = this.getIndex(this.objects[e]);
          if (i !== -1) {
            this.nodes[i].insert(this.objects.splice(e, 1)[0]);
          } else {
            e++;
          }
        }
      }
    },
    getIndex: function (t) {
      var e = -1;
      if (t.x < this.bounds.right && t.right < this.bounds.right) {
        if (t.y < this.bounds.bottom && t.bottom < this.bounds.bottom) {
          e = 1;
        } else if (t.y > this.bounds.bottom) {
          e = 2;
        }
      } else if (t.x > this.bounds.right) {
        if (t.y < this.bounds.bottom && t.bottom < this.bounds.bottom) {
          e = 0;
        } else if (t.y > this.bounds.bottom) {
          e = 3;
        }
      }
      return e;
    },
    retrieve: function (t) {
      if (t instanceof a.Rectangle) {
        var e = this.objects;
        var i = this.getIndex(t);
      } else {
        if (!t.body) {
          return this._empty;
        }
        var e = this.objects;
        var i = this.getIndex(t.body);
      }
      if (this.nodes[0]) {
        if (i !== -1) {
          e = e.concat(this.nodes[i].retrieve(t));
        } else {
          e = e.concat(this.nodes[0].retrieve(t));
          e = e.concat(this.nodes[1].retrieve(t));
          e = e.concat(this.nodes[2].retrieve(t));
          e = e.concat(this.nodes[3].retrieve(t));
        }
      }
      return e;
    },
    clear: function () {
      this.objects.length = 0;
      for (var t = this.nodes.length; t--;) {
        this.nodes[t].clear();
        this.nodes.splice(t, 1);
      }
      this.nodes.length = 0;
    }
  };
  a.QuadTree.prototype.constructor = a.QuadTree;
  a.Net = function (t) {
    this.game = t;
  };
  a.Net.prototype = {
    getHostName: function () {
      if (window.location && window.location.hostname) {
        return window.location.hostname;
      } else {
        return null;
      }
    },
    checkDomainName: function (t) {
      return window.location.hostname.indexOf(t) !== -1;
    },
    updateQueryString: function (t, e, i = false, s) {
      if (s === undefined || s === "") {
        s = window.location.href;
      }
      var n = "";
      var a = new RegExp("([?|&])" + t + "=.*?(&|#|$)(.*)", "gi");
      if (a.test(s)) {
        n = e !== undefined && e !== null ? s.replace(a, "$1" + t + "=" + e + "$2$3") : s.replace(a, "$1$3").replace(/(&|\?)$/, "");
      } else if (e !== undefined && e !== null) {
        var o = s.indexOf("?") !== -1 ? "&" : "?";
        var r = s.split("#");
        s = r[0] + o + t + "=" + e;
        if (r[1]) {
          s += "#" + r[1];
        }
        n = s;
      } else {
        n = s;
      }
      if (!i) {
        return n;
      }
      window.location.href = n;
    },
    getQueryString: function (t = "") {
      var e = {};
      var i = location.search.substring(1).split("&");
      for (var s in i) {
        var n = i[s].split("=");
        if (n.length > 1) {
          if (t && t === this.decodeURI(n[0])) {
            return this.decodeURI(n[1]);
          }
          e[this.decodeURI(n[0])] = this.decodeURI(n[1]);
        }
      }
      return e;
    },
    decodeURI: function (t) {
      return decodeURIComponent(t.replace(/\+/g, " "));
    }
  };
  a.Net.prototype.constructor = a.Net;
  a.TweenManager = function (t) {
    this.game = t;
    this.frameBased = false;
    this._tweens = [];
    this._add = [];
    this.easeMap = {
      Power0: a.Easing.Power0,
      Power1: a.Easing.Power1,
      Power2: a.Easing.Power2,
      Power3: a.Easing.Power3,
      Power4: a.Easing.Power4,
      Linear: a.Easing.Linear.None,
      Quad: a.Easing.Quadratic.Out,
      Cubic: a.Easing.Cubic.Out,
      Quart: a.Easing.Quartic.Out,
      Quint: a.Easing.Quintic.Out,
      Sine: a.Easing.Sinusoidal.Out,
      Expo: a.Easing.Exponential.Out,
      Circ: a.Easing.Circular.Out,
      Elastic: a.Easing.Elastic.Out,
      Back: a.Easing.Back.Out,
      Bounce: a.Easing.Bounce.Out,
      "Quad.easeIn": a.Easing.Quadratic.In,
      "Cubic.easeIn": a.Easing.Cubic.In,
      "Quart.easeIn": a.Easing.Quartic.In,
      "Quint.easeIn": a.Easing.Quintic.In,
      "Sine.easeIn": a.Easing.Sinusoidal.In,
      "Expo.easeIn": a.Easing.Exponential.In,
      "Circ.easeIn": a.Easing.Circular.In,
      "Elastic.easeIn": a.Easing.Elastic.In,
      "Back.easeIn": a.Easing.Back.In,
      "Bounce.easeIn": a.Easing.Bounce.In,
      "Quad.easeOut": a.Easing.Quadratic.Out,
      "Cubic.easeOut": a.Easing.Cubic.Out,
      "Quart.easeOut": a.Easing.Quartic.Out,
      "Quint.easeOut": a.Easing.Quintic.Out,
      "Sine.easeOut": a.Easing.Sinusoidal.Out,
      "Expo.easeOut": a.Easing.Exponential.Out,
      "Circ.easeOut": a.Easing.Circular.Out,
      "Elastic.easeOut": a.Easing.Elastic.Out,
      "Back.easeOut": a.Easing.Back.Out,
      "Bounce.easeOut": a.Easing.Bounce.Out,
      "Quad.easeInOut": a.Easing.Quadratic.InOut,
      "Cubic.easeInOut": a.Easing.Cubic.InOut,
      "Quart.easeInOut": a.Easing.Quartic.InOut,
      "Quint.easeInOut": a.Easing.Quintic.InOut,
      "Sine.easeInOut": a.Easing.Sinusoidal.InOut,
      "Expo.easeInOut": a.Easing.Exponential.InOut,
      "Circ.easeInOut": a.Easing.Circular.InOut,
      "Elastic.easeInOut": a.Easing.Elastic.InOut,
      "Back.easeInOut": a.Easing.Back.InOut,
      "Bounce.easeInOut": a.Easing.Bounce.InOut
    };
    this.game.onPause.add(this._pauseAll, this);
    this.game.onResume.add(this._resumeAll, this);
  };
  a.TweenManager.prototype = {
    getAll: function () {
      return this._tweens;
    },
    removeAll: function () {
      for (var t = 0; t < this._tweens.length; t++) {
        this._tweens[t].pendingDelete = true;
      }
      this._add = [];
    },
    removeFrom: function (t, e = true) {
      var i;
      var s;
      if (Array.isArray(t)) {
        i = 0;
        s = t.length;
        for (; i < s; i++) {
          this.removeFrom(t[i]);
        }
      } else if (t.type === a.GROUP && e) {
        for (var i = 0, s = t.children.length; i < s; i++) {
          this.removeFrom(t.children[i]);
        }
      } else {
        i = 0;
        s = this._tweens.length;
        for (; i < s; i++) {
          if (t === this._tweens[i].target) {
            this.remove(this._tweens[i]);
          }
        }
        i = 0;
        s = this._add.length;
        for (; i < s; i++) {
          if (t === this._add[i].target) {
            this.remove(this._add[i]);
          }
        }
      }
    },
    add: function (t) {
      t._manager = this;
      this._add.push(t);
    },
    create: function (t) {
      return new a.Tween(t, this.game, this);
    },
    remove: function (t) {
      var e = this._tweens.indexOf(t);
      if (e !== -1) {
        this._tweens[e].pendingDelete = true;
      } else if ((e = this._add.indexOf(t)) !== -1) {
        this._add[e].pendingDelete = true;
      }
    },
    update: function () {
      var t = this._add.length;
      var e = this._tweens.length;
      if (e === 0 && t === 0) {
        return false;
      }
      for (var i = 0; i < e;) {
        if (this._tweens[i].update(this.game.time.time)) {
          i++;
        } else {
          this._tweens.splice(i, 1);
          e--;
        }
      }
      if (t > 0) {
        this._tweens = this._tweens.concat(this._add);
        this._add.length = 0;
      }
      return true;
    },
    isTweening: function (t) {
      return this._tweens.some(function (e) {
        return e.target === t;
      });
    },
    _pauseAll: function () {
      for (var t = this._tweens.length - 1; t >= 0; t--) {
        this._tweens[t]._pause();
      }
    },
    _resumeAll: function () {
      for (var t = this._tweens.length - 1; t >= 0; t--) {
        this._tweens[t]._resume();
      }
    },
    pauseAll: function () {
      for (var t = this._tweens.length - 1; t >= 0; t--) {
        this._tweens[t].pause();
      }
    },
    resumeAll: function () {
      for (var t = this._tweens.length - 1; t >= 0; t--) {
        this._tweens[t].resume(true);
      }
    }
  };
  a.TweenManager.prototype.constructor = a.TweenManager;
  a.Tween = function (t, e, i) {
    this.game = e;
    this.target = t;
    this.manager = i;
    this.timeline = [];
    this.reverse = false;
    this.timeScale = 1;
    this.repeatCounter = 0;
    this.pendingDelete = false;
    this.onStart = new a.Signal();
    this.onLoop = new a.Signal();
    this.onRepeat = new a.Signal();
    this.onChildComplete = new a.Signal();
    this.onComplete = new a.Signal();
    this.isRunning = false;
    this.current = 0;
    this.properties = {};
    this.chainedTween = null;
    this.isPaused = false;
    this.frameBased = i.frameBased;
    this._onUpdateCallback = null;
    this._onUpdateCallbackContext = null;
    this._pausedTime = 0;
    this._codePaused = false;
    this._hasStarted = false;
  };
  a.Tween.prototype = {
    to: function (t, e, i, s, n, o, r) {
      if (e === undefined || e <= 0) {
        e = 1000;
      }
      if (i === undefined || i === null) {
        i = a.Easing.Default;
      }
      if (s === undefined) {
        s = false;
      }
      if (n === undefined) {
        n = 0;
      }
      if (o === undefined) {
        o = 0;
      }
      if (r === undefined) {
        r = false;
      }
      if (typeof i == "string" && this.manager.easeMap[i]) {
        i = this.manager.easeMap[i];
      }
      if (this.isRunning) {
        return this;
      } else {
        this.timeline.push(new a.TweenData(this).to(t, e, i, n, o, r));
        if (s) {
          this.start();
        }
        return this;
      }
    },
    from: function (t, e = 1000, i, s, n, o, r) {
      if (i === undefined || i === null) {
        i = a.Easing.Default;
      }
      if (s === undefined) {
        s = false;
      }
      if (n === undefined) {
        n = 0;
      }
      if (o === undefined) {
        o = 0;
      }
      if (r === undefined) {
        r = false;
      }
      if (typeof i == "string" && this.manager.easeMap[i]) {
        i = this.manager.easeMap[i];
      }
      if (this.isRunning) {
        return this;
      } else {
        this.timeline.push(new a.TweenData(this).from(t, e, i, n, o, r));
        if (s) {
          this.start();
        }
        return this;
      }
    },
    start: function (t = 0) {
      if (this.game === null || this.target === null || this.timeline.length === 0 || this.isRunning) {
        return this;
      }
      for (var e = 0; e < this.timeline.length; e++) {
        for (var i in this.timeline[e].vEnd) {
          this.properties[i] = this.target[i] || 0;
          if (!Array.isArray(this.properties[i])) {
            this.properties[i] *= 1;
          }
        }
      }
      for (var e = 0; e < this.timeline.length; e++) {
        this.timeline[e].loadValues();
      }
      this.manager.add(this);
      this.isRunning = true;
      if (t < 0 || t > this.timeline.length - 1) {
        t = 0;
      }
      this.current = t;
      this.timeline[this.current].start();
      return this;
    },
    stop: function (t = false) {
      this.isRunning = false;
      this._onUpdateCallback = null;
      this._onUpdateCallbackContext = null;
      if (t) {
        this.onComplete.dispatch(this.target, this);
        this._hasStarted = false;
        if (this.chainedTween) {
          this.chainedTween.start();
        }
      }
      this.manager.remove(this);
      return this;
    },
    updateTweenData: function (t, e, i) {
      if (this.timeline.length === 0) {
        return this;
      }
      if (i === undefined) {
        i = 0;
      }
      if (i === -1) {
        for (var s = 0; s < this.timeline.length; s++) {
          this.timeline[s][t] = e;
        }
      } else {
        this.timeline[i][t] = e;
      }
      return this;
    },
    delay: function (t, e) {
      return this.updateTweenData("delay", t, e);
    },
    repeat: function (t, e = 0, i) {
      this.updateTweenData("repeatCounter", t, i);
      return this.updateTweenData("repeatDelay", e, i);
    },
    repeatDelay: function (t, e) {
      return this.updateTweenData("repeatDelay", t, e);
    },
    yoyo: function (t, e = 0, i) {
      this.updateTweenData("yoyo", t, i);
      return this.updateTweenData("yoyoDelay", e, i);
    },
    yoyoDelay: function (t, e) {
      return this.updateTweenData("yoyoDelay", t, e);
    },
    easing: function (t, e) {
      if (typeof t == "string" && this.manager.easeMap[t]) {
        t = this.manager.easeMap[t];
      }
      return this.updateTweenData("easingFunction", t, e);
    },
    interpolation: function (t, e = a.Math, i) {
      this.updateTweenData("interpolationFunction", t, i);
      return this.updateTweenData("interpolationContext", e, i);
    },
    repeatAll: function (t = 0) {
      this.repeatCounter = t;
      return this;
    },
    chain: function () {
      for (var t = arguments.length; t--;) {
        if (t > 0) {
          arguments[t - 1].chainedTween = arguments[t];
        } else {
          this.chainedTween = arguments[t];
        }
      }
      return this;
    },
    loop: function (t = true) {
      this.repeatCounter = t ? -1 : 0;
      return this;
    },
    onUpdateCallback: function (t, e) {
      this._onUpdateCallback = t;
      this._onUpdateCallbackContext = e;
      return this;
    },
    pause: function () {
      this.isPaused = true;
      this._codePaused = true;
      this._pausedTime = this.game.time.time;
    },
    _pause: function () {
      if (!this._codePaused) {
        this.isPaused = true;
        this._pausedTime = this.game.time.time;
      }
    },
    resume: function () {
      if (this.isPaused) {
        this.isPaused = false;
        this._codePaused = false;
        for (var t = 0; t < this.timeline.length; t++) {
          if (!this.timeline[t].isRunning) {
            this.timeline[t].startTime += this.game.time.time - this._pausedTime;
          }
        }
      }
    },
    _resume: function () {
      if (!this._codePaused) {
        this.resume();
      }
    },
    update: function (t) {
      if (this.pendingDelete || !this.target) {
        return false;
      }
      if (this.isPaused) {
        return true;
      }
      var e = this.timeline[this.current].update(t);
      if (e === a.TweenData.PENDING) {
        return true;
      }
      if (e === a.TweenData.RUNNING) {
        if (!this._hasStarted) {
          this.onStart.dispatch(this.target, this);
          this._hasStarted = true;
        }
        if (this._onUpdateCallback !== null) {
          this._onUpdateCallback.call(this._onUpdateCallbackContext, this, this.timeline[this.current].value, this.timeline[this.current]);
        }
        return this.isRunning;
      }
      if (e === a.TweenData.LOOPED) {
        if (this.timeline[this.current].repeatCounter === -1) {
          this.onLoop.dispatch(this.target, this);
        } else {
          this.onRepeat.dispatch(this.target, this);
        }
        return true;
      }
      if (e === a.TweenData.COMPLETE) {
        var i = false;
        if (this.reverse) {
          if (--this.current < 0) {
            this.current = this.timeline.length - 1;
            i = true;
          }
        } else if (++this.current === this.timeline.length) {
          this.current = 0;
          i = true;
        }
        if (i) {
          if (this.repeatCounter === -1) {
            this.timeline[this.current].start();
            this.onLoop.dispatch(this.target, this);
            return true;
          } else if (this.repeatCounter > 0) {
            this.repeatCounter--;
            this.timeline[this.current].start();
            this.onRepeat.dispatch(this.target, this);
            return true;
          } else {
            this.isRunning = false;
            this.onComplete.dispatch(this.target, this);
            this._hasStarted = false;
            if (this.chainedTween) {
              this.chainedTween.start();
            }
            return false;
          }
        } else {
          this.onChildComplete.dispatch(this.target, this);
          this.timeline[this.current].start();
          return true;
        }
      }
    },
    generateData: function (t, e) {
      if (this.game === null || this.target === null) {
        return null;
      }
      if (t === undefined) {
        t = 60;
      }
      if (e === undefined) {
        e = [];
      }
      for (var i = 0; i < this.timeline.length; i++) {
        for (var s in this.timeline[i].vEnd) {
          this.properties[s] = this.target[s] || 0;
          if (!Array.isArray(this.properties[s])) {
            this.properties[s] *= 1;
          }
        }
      }
      for (var i = 0; i < this.timeline.length; i++) {
        this.timeline[i].loadValues();
      }
      for (var i = 0; i < this.timeline.length; i++) {
        e = e.concat(this.timeline[i].generateData(t));
      }
      return e;
    }
  };
  Object.defineProperty(a.Tween.prototype, "totalDuration", {
    get: function () {
      var t = 0;
      for (var e = 0; e < this.timeline.length; e++) {
        t += this.timeline[e].duration;
      }
      return t;
    }
  });
  a.Tween.prototype.constructor = a.Tween;
  a.TweenData = function (t) {
    this.parent = t;
    this.game = t.game;
    this.vStart = {};
    this.vStartCache = {};
    this.vEnd = {};
    this.vEndCache = {};
    this.duration = 1000;
    this.percent = 0;
    this.value = 0;
    this.repeatCounter = 0;
    this.repeatDelay = 0;
    this.repeatTotal = 0;
    this.interpolate = false;
    this.yoyo = false;
    this.yoyoDelay = 0;
    this.inReverse = false;
    this.delay = 0;
    this.dt = 0;
    this.startTime = null;
    this.easingFunction = a.Easing.Default;
    this.interpolationFunction = a.Math.linearInterpolation;
    this.interpolationContext = a.Math;
    this.isRunning = false;
    this.isFrom = false;
  };
  a.TweenData.PENDING = 0;
  a.TweenData.RUNNING = 1;
  a.TweenData.LOOPED = 2;
  a.TweenData.COMPLETE = 3;
  a.TweenData.prototype = {
    to: function (t, e, i, s, n, a) {
      this.vEnd = t;
      this.duration = e;
      this.easingFunction = i;
      this.delay = s;
      this.repeatTotal = n;
      this.yoyo = a;
      this.isFrom = false;
      return this;
    },
    from: function (t, e, i, s, n, a) {
      this.vEnd = t;
      this.duration = e;
      this.easingFunction = i;
      this.delay = s;
      this.repeatTotal = n;
      this.yoyo = a;
      this.isFrom = true;
      return this;
    },
    start: function () {
      this.startTime = this.game.time.time + this.delay;
      if (this.parent.reverse) {
        this.dt = this.duration;
      } else {
        this.dt = 0;
      }
      if (this.delay > 0) {
        this.isRunning = false;
      } else {
        this.isRunning = true;
      }
      if (this.isFrom) {
        for (var t in this.vStartCache) {
          this.vStart[t] = this.vEndCache[t];
          this.vEnd[t] = this.vStartCache[t];
          this.parent.target[t] = this.vStart[t];
        }
      }
      this.value = 0;
      this.yoyoCounter = 0;
      this.repeatCounter = this.repeatTotal;
      return this;
    },
    loadValues: function () {
      for (var t in this.parent.properties) {
        this.vStart[t] = this.parent.properties[t];
        if (Array.isArray(this.vEnd[t])) {
          if (this.vEnd[t].length === 0) {
            continue;
          }
          if (this.percent === 0) {
            this.vEnd[t] = [this.vStart[t]].concat(this.vEnd[t]);
          }
        }
        if (this.vEnd[t] !== undefined) {
          if (typeof this.vEnd[t] == "string") {
            this.vEnd[t] = this.vStart[t] + parseFloat(this.vEnd[t], 10);
          }
          this.parent.properties[t] = this.vEnd[t];
        } else {
          this.vEnd[t] = this.vStart[t];
        }
        this.vStartCache[t] = this.vStart[t];
        this.vEndCache[t] = this.vEnd[t];
      }
      return this;
    },
    update: function (t) {
      if (this.isRunning) {
        if (t < this.startTime) {
          return a.TweenData.RUNNING;
        }
      } else {
        if (!(t >= this.startTime)) {
          return a.TweenData.PENDING;
        }
        this.isRunning = true;
      }
      var e = this.parent.frameBased ? this.game.time.physicsElapsedMS : this.game.time.elapsedMS;
      if (this.parent.reverse) {
        this.dt -= e * this.parent.timeScale;
        this.dt = Math.max(this.dt, 0);
      } else {
        this.dt += e * this.parent.timeScale;
        this.dt = Math.min(this.dt, this.duration);
      }
      this.percent = this.dt / this.duration;
      this.value = this.easingFunction(this.percent);
      for (var i in this.vEnd) {
        var s = this.vStart[i];
        var n = this.vEnd[i];
        if (Array.isArray(n)) {
          this.parent.target[i] = this.interpolationFunction.call(this.interpolationContext, n, this.value);
        } else {
          this.parent.target[i] = s + (n - s) * this.value;
        }
      }
      if (!this.parent.reverse && this.percent === 1 || this.parent.reverse && this.percent === 0) {
        return this.repeat();
      } else {
        return a.TweenData.RUNNING;
      }
    },
    generateData: function (t) {
      if (this.parent.reverse) {
        this.dt = this.duration;
      } else {
        this.dt = 0;
      }
      var e = [];
      var i = false;
      var s = 1 / t * 1000;
      do {
        if (this.parent.reverse) {
          this.dt -= s;
          this.dt = Math.max(this.dt, 0);
        } else {
          this.dt += s;
          this.dt = Math.min(this.dt, this.duration);
        }
        this.percent = this.dt / this.duration;
        this.value = this.easingFunction(this.percent);
        var n = {};
        for (var a in this.vEnd) {
          var o = this.vStart[a];
          var r = this.vEnd[a];
          if (Array.isArray(r)) {
            n[a] = this.interpolationFunction(r, this.value);
          } else {
            n[a] = o + (r - o) * this.value;
          }
        }
        e.push(n);
        if (!this.parent.reverse && this.percent === 1 || this.parent.reverse && this.percent === 0) {
          i = true;
        }
      } while (!i);
      if (this.yoyo) {
        var h = e.slice();
        h.reverse();
        e = e.concat(h);
      }
      return e;
    },
    repeat: function () {
      if (this.yoyo) {
        if (this.inReverse && this.repeatCounter === 0) {
          for (var t in this.vStartCache) {
            this.vStart[t] = this.vStartCache[t];
            this.vEnd[t] = this.vEndCache[t];
          }
          this.inReverse = false;
          return a.TweenData.COMPLETE;
        }
        this.inReverse = !this.inReverse;
      } else if (this.repeatCounter === 0) {
        return a.TweenData.COMPLETE;
      }
      if (this.inReverse) {
        for (var t in this.vStartCache) {
          this.vStart[t] = this.vEndCache[t];
          this.vEnd[t] = this.vStartCache[t];
        }
      } else {
        for (var t in this.vStartCache) {
          this.vStart[t] = this.vStartCache[t];
          this.vEnd[t] = this.vEndCache[t];
        }
        if (this.repeatCounter > 0) {
          this.repeatCounter--;
        }
      }
      this.startTime = this.game.time.time;
      if (this.yoyo && this.inReverse) {
        this.startTime += this.yoyoDelay;
      } else if (!this.inReverse) {
        this.startTime += this.repeatDelay;
      }
      if (this.parent.reverse) {
        this.dt = this.duration;
      } else {
        this.dt = 0;
      }
      return a.TweenData.LOOPED;
    }
  };
  a.TweenData.prototype.constructor = a.TweenData;
  a.Easing = {
    Linear: {
      None: function (t) {
        return t;
      }
    },
    Quadratic: {
      In: function (t) {
        return t * t;
      },
      Out: function (t) {
        return t * (2 - t);
      },
      InOut: function (t) {
        if ((t *= 2) < 1) {
          return t * 0.5 * t;
        } else {
          return (--t * (t - 2) - 1) * -0.5;
        }
      }
    },
    Cubic: {
      In: function (t) {
        return t * t * t;
      },
      Out: function (t) {
        return --t * t * t + 1;
      },
      InOut: function (t) {
        if ((t *= 2) < 1) {
          return t * 0.5 * t * t;
        } else {
          return ((t -= 2) * t * t + 2) * 0.5;
        }
      }
    },
    Quartic: {
      In: function (t) {
        return t * t * t * t;
      },
      Out: function (t) {
        return 1 - --t * t * t * t;
      },
      InOut: function (t) {
        if ((t *= 2) < 1) {
          return t * 0.5 * t * t * t;
        } else {
          return ((t -= 2) * t * t * t - 2) * -0.5;
        }
      }
    },
    Quintic: {
      In: function (t) {
        return t * t * t * t * t;
      },
      Out: function (t) {
        return --t * t * t * t * t + 1;
      },
      InOut: function (t) {
        if ((t *= 2) < 1) {
          return t * 0.5 * t * t * t * t;
        } else {
          return ((t -= 2) * t * t * t * t + 2) * 0.5;
        }
      }
    },
    Sinusoidal: {
      In: function (t) {
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          return 1 - Math.cos(t * Math.PI / 2);
        }
      },
      Out: function (t) {
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          return Math.sin(t * Math.PI / 2);
        }
      },
      InOut: function (t) {
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          return (1 - Math.cos(Math.PI * t)) * 0.5;
        }
      }
    },
    Exponential: {
      In: function (t) {
        if (t === 0) {
          return 0;
        } else {
          return Math.pow(1024, t - 1);
        }
      },
      Out: function (t) {
        if (t === 1) {
          return 1;
        } else {
          return 1 - Math.pow(2, t * -10);
        }
      },
      InOut: function (t) {
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else if ((t *= 2) < 1) {
          return Math.pow(1024, t - 1) * 0.5;
        } else {
          return (2 - Math.pow(2, (t - 1) * -10)) * 0.5;
        }
      }
    },
    Circular: {
      In: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Out: function (t) {
        return Math.sqrt(1 - --t * t);
      },
      InOut: function (t) {
        if ((t *= 2) < 1) {
          return (Math.sqrt(1 - t * t) - 1) * -0.5;
        } else {
          return (Math.sqrt(1 - (t -= 2) * t) + 1) * 0.5;
        }
      }
    },
    Elastic: {
      In: function (t) {
        var e;
        var i = 0.1;
        var s = 0.4;
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          if (!i || i < 1) {
            i = 1;
            e = 0.1;
          } else {
            e = s * Math.asin(1 / i) / (Math.PI * 2);
          }
          return -i * Math.pow(2, (t -= 1) * 10) * Math.sin((t - e) * (Math.PI * 2) / s);
        }
      },
      Out: function (t) {
        var e;
        var i = 0.1;
        var s = 0.4;
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          if (!i || i < 1) {
            i = 1;
            e = 0.1;
          } else {
            e = s * Math.asin(1 / i) / (Math.PI * 2);
          }
          return i * Math.pow(2, t * -10) * Math.sin((t - e) * (Math.PI * 2) / s) + 1;
        }
      },
      InOut: function (t) {
        var e;
        var i = 0.1;
        var s = 0.4;
        if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          if (!i || i < 1) {
            i = 1;
            e = 0.1;
          } else {
            e = s * Math.asin(1 / i) / (Math.PI * 2);
          }
          if ((t *= 2) < 1) {
            return i * Math.pow(2, (t -= 1) * 10) * Math.sin((t - e) * (Math.PI * 2) / s) * -0.5;
          } else {
            return i * Math.pow(2, (t -= 1) * -10) * Math.sin((t - e) * (Math.PI * 2) / s) * 0.5 + 1;
          }
        }
      }
    },
    Back: {
      In: function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      Out: function (t) {
        var e = 1.70158;
        return --t * t * ((e + 1) * t + e) + 1;
      },
      InOut: function (t) {
        var e = 2.5949095;
        if ((t *= 2) < 1) {
          return t * t * ((e + 1) * t - e) * 0.5;
        } else {
          return ((t -= 2) * t * ((e + 1) * t + e) + 2) * 0.5;
        }
      }
    },
    Bounce: {
      In: function (t) {
        return 1 - a.Easing.Bounce.Out(1 - t);
      },
      Out: function (t) {
        if (t < 1 / 2.75) {
          return t * 7.5625 * t;
        } else if (t < 2 / 2.75) {
          return (t -= 1.5 / 2.75) * 7.5625 * t + 0.75;
        } else if (t < 2.5 / 2.75) {
          return (t -= 2.25 / 2.75) * 7.5625 * t + 0.9375;
        } else {
          return (t -= 2.625 / 2.75) * 7.5625 * t + 0.984375;
        }
      },
      InOut: function (t) {
        if (t < 0.5) {
          return a.Easing.Bounce.In(t * 2) * 0.5;
        } else {
          return a.Easing.Bounce.Out(t * 2 - 1) * 0.5 + 0.5;
        }
      }
    }
  };
  a.Easing.Default = a.Easing.Linear.None;
  a.Easing.Power0 = a.Easing.Linear.None;
  a.Easing.Power1 = a.Easing.Quadratic.Out;
  a.Easing.Power2 = a.Easing.Cubic.Out;
  a.Easing.Power3 = a.Easing.Quartic.Out;
  a.Easing.Power4 = a.Easing.Quintic.Out;
  a.Time = function (t) {
    this.game = t;
    this.time = 0;
    this.prevTime = 0;
    this.now = 0;
    this.elapsed = 0;
    this.elapsedMS = 0;
    this.physicsElapsed = 1 / 60;
    this.physicsElapsedMS = 1 / 60 * 1000;
    this.desiredFpsMult = 1 / 60;
    this._desiredFps = 60;
    this.suggestedFps = this.desiredFps;
    this.slowMotion = 1;
    this.advancedTiming = false;
    this.frames = 0;
    this.fps = 0;
    this.fpsMin = 1000;
    this.fpsMax = 0;
    this.msMin = 1000;
    this.msMax = 0;
    this.pauseDuration = 0;
    this.timeToCall = 0;
    this.timeExpected = 0;
    this.events = new a.Timer(this.game, false);
    this._frameCount = 0;
    this._elapsedAccumulator = 0;
    this._started = 0;
    this._timeLastSecond = 0;
    this._pauseStarted = 0;
    this._justResumed = false;
    this._timers = [];
  };
  a.Time.prototype = {
    boot: function () {
      this._started = Date.now();
      this.time = Date.now();
      this.events.start();
      this.timeExpected = this.time;
    },
    add: function (t) {
      this._timers.push(t);
      return t;
    },
    create: function (t = true) {
      var e = new a.Timer(this.game, t);
      this._timers.push(e);
      return e;
    },
    removeAll: function () {
      for (var t = 0; t < this._timers.length; t++) {
        this._timers[t].destroy();
      }
      this._timers = [];
      this.events.removeAll();
    },
    refresh: function () {
      var t = this.time;
      this.time = Date.now();
      this.elapsedMS = this.time - t;
    },
    update: function (t) {
      var e = this.time;
      this.time = Date.now();
      this.elapsedMS = this.time - e;
      this.prevTime = this.now;
      this.now = t;
      this.elapsed = this.now - this.prevTime;
      if (this.game.raf._isSetTimeOut) {
        this.timeToCall = Math.floor(Math.max(0, 1000 / this._desiredFps - (this.timeExpected - t)));
        this.timeExpected = t + this.timeToCall;
      }
      if (this.advancedTiming) {
        this.updateAdvancedTiming();
      }
      if (!this.game.paused) {
        this.events.update(this.time);
        if (this._timers.length) {
          this.updateTimers();
        }
      }
    },
    updateTimers: function () {
      for (var t = 0, e = this._timers.length; t < e;) {
        if (this._timers[t].update(this.time)) {
          t++;
        } else {
          this._timers.splice(t, 1);
          e--;
        }
      }
    },
    updateAdvancedTiming: function () {
      this._frameCount++;
      this._elapsedAccumulator += this.elapsed;
      if (this._frameCount >= this._desiredFps * 2) {
        this.suggestedFps = Math.floor(200 / (this._elapsedAccumulator / this._frameCount)) * 5;
        this._frameCount = 0;
        this._elapsedAccumulator = 0;
      }
      this.msMin = Math.min(this.msMin, this.elapsed);
      this.msMax = Math.max(this.msMax, this.elapsed);
      this.frames++;
      if (this.now > this._timeLastSecond + 1000) {
        this.fps = Math.round(this.frames * 1000 / (this.now - this._timeLastSecond));
        this.fpsMin = Math.min(this.fpsMin, this.fps);
        this.fpsMax = Math.max(this.fpsMax, this.fps);
        this._timeLastSecond = this.now;
        this.frames = 0;
      }
    },
    gamePaused: function () {
      this._pauseStarted = Date.now();
      this.events.pause();
      for (var t = this._timers.length; t--;) {
        this._timers[t]._pause();
      }
    },
    gameResumed: function () {
      this.time = Date.now();
      this.pauseDuration = this.time - this._pauseStarted;
      this.events.resume();
      for (var t = this._timers.length; t--;) {
        this._timers[t]._resume();
      }
    },
    totalElapsedSeconds: function () {
      return (this.time - this._started) * 0.001;
    },
    elapsedSince: function (t) {
      return this.time - t;
    },
    elapsedSecondsSince: function (t) {
      return (this.time - t) * 0.001;
    },
    reset: function () {
      this._started = this.time;
      this.removeAll();
    }
  };
  Object.defineProperty(a.Time.prototype, "desiredFps", {
    get: function () {
      return this._desiredFps;
    },
    set: function (t) {
      this._desiredFps = t;
      this.physicsElapsed = 1 / t;
      this.physicsElapsedMS = this.physicsElapsed * 1000;
      this.desiredFpsMult = 1 / t;
    }
  });
  a.Time.prototype.constructor = a.Time;
  a.Timer = function (t, e = true) {
    this.game = t;
    this.running = false;
    this.autoDestroy = e;
    this.expired = false;
    this.elapsed = 0;
    this.events = [];
    this.onComplete = new a.Signal();
    this.nextTick = 0;
    this.timeCap = 1000;
    this.paused = false;
    this._codePaused = false;
    this._started = 0;
    this._pauseStarted = 0;
    this._pauseTotal = 0;
    this._now = Date.now();
    this._len = 0;
    this._marked = 0;
    this._i = 0;
    this._diff = 0;
    this._newTick = 0;
  };
  a.Timer.MINUTE = 60000;
  a.Timer.SECOND = 1000;
  a.Timer.HALF = 500;
  a.Timer.QUARTER = 250;
  a.Timer.prototype = {
    create: function (t, e, i, s, n, o) {
      t = Math.round(t);
      var r = t;
      if (this._now === 0) {
        r += this.game.time.time;
      } else {
        r += this._now;
      }
      var h = new a.TimerEvent(this, t, r, i, e, s, n, o);
      this.events.push(h);
      this.order();
      this.expired = false;
      return h;
    },
    add: function (t, e, i) {
      return this.create(t, false, 0, e, i, Array.prototype.slice.call(arguments, 3));
    },
    repeat: function (t, e, i, s) {
      return this.create(t, false, e, i, s, Array.prototype.slice.call(arguments, 4));
    },
    loop: function (t, e, i) {
      return this.create(t, true, 0, e, i, Array.prototype.slice.call(arguments, 3));
    },
    start: function (t) {
      if (!this.running) {
        this._started = this.game.time.time + (t || 0);
        this.running = true;
        for (var e = 0; e < this.events.length; e++) {
          this.events[e].tick = this.events[e].delay + this._started;
        }
      }
    },
    stop: function (t) {
      this.running = false;
      if (t === undefined) {
        t = true;
      }
      if (t) {
        this.events.length = 0;
      }
    },
    remove: function (t) {
      for (var e = 0; e < this.events.length; e++) {
        if (this.events[e] === t) {
          this.events[e].pendingDelete = true;
          return true;
        }
      }
      return false;
    },
    order: function () {
      if (this.events.length > 0) {
        this.events.sort(this.sortHandler);
        this.nextTick = this.events[0].tick;
      }
    },
    sortHandler: function (t, e) {
      if (t.tick < e.tick) {
        return -1;
      } else if (t.tick > e.tick) {
        return 1;
      } else {
        return 0;
      }
    },
    clearPendingEvents: function () {
      for (this._i = this.events.length; this._i--;) {
        if (this.events[this._i].pendingDelete) {
          this.events.splice(this._i, 1);
        }
      }
      this._len = this.events.length;
      this._i = 0;
    },
    update: function (t) {
      if (this.paused) {
        return true;
      }
      this.elapsed = t - this._now;
      this._now = t;
      if (this.elapsed > this.timeCap) {
        this.adjustEvents(t - this.elapsed);
      }
      this._marked = 0;
      this.clearPendingEvents();
      if (this.running && this._now >= this.nextTick && this._len > 0) {
        while (this._i < this._len && this.running && this._now >= this.events[this._i].tick && !this.events[this._i].pendingDelete) {
          this._newTick = this._now + this.events[this._i].delay - (this._now - this.events[this._i].tick);
          if (this._newTick < 0) {
            this._newTick = this._now + this.events[this._i].delay;
          }
          if (this.events[this._i].loop === true) {
            this.events[this._i].tick = this._newTick;
            this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args);
          } else if (this.events[this._i].repeatCount > 0) {
            this.events[this._i].repeatCount--;
            this.events[this._i].tick = this._newTick;
            this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args);
          } else {
            this._marked++;
            this.events[this._i].pendingDelete = true;
            this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args);
          }
          this._i++;
        }
        if (this.events.length > this._marked) {
          this.order();
        } else {
          this.expired = true;
          this.onComplete.dispatch(this);
        }
      }
      return !this.expired || !this.autoDestroy;
    },
    pause: function () {
      if (this.running) {
        this._codePaused = true;
        if (!this.paused) {
          this._pauseStarted = this.game.time.time;
          this.paused = true;
        }
      }
    },
    _pause: function () {
      if (!this.paused && this.running) {
        this._pauseStarted = this.game.time.time;
        this.paused = true;
      }
    },
    adjustEvents: function (t) {
      for (var e = 0; e < this.events.length; e++) {
        if (!this.events[e].pendingDelete) {
          var i = this.events[e].tick - t;
          if (i < 0) {
            i = 0;
          }
          this.events[e].tick = this._now + i;
        }
      }
      var s = this.nextTick - t;
      this.nextTick = s < 0 ? this._now : this._now + s;
    },
    resume: function () {
      if (this.paused) {
        var t = this.game.time.time;
        this._pauseTotal += t - this._now;
        this._now = t;
        this.adjustEvents(this._pauseStarted);
        this.paused = false;
        this._codePaused = false;
      }
    },
    _resume: function () {
      if (!this._codePaused) {
        this.resume();
      }
    },
    removeAll: function () {
      this.onComplete.removeAll();
      this.events.length = 0;
      this._len = 0;
      this._i = 0;
    },
    destroy: function () {
      this.onComplete.removeAll();
      this.running = false;
      this.events = [];
      this._len = 0;
      this._i = 0;
    }
  };
  Object.defineProperty(a.Timer.prototype, "next", {
    get: function () {
      return this.nextTick;
    }
  });
  Object.defineProperty(a.Timer.prototype, "duration", {
    get: function () {
      if (this.running && this.nextTick > this._now) {
        return this.nextTick - this._now;
      } else {
        return 0;
      }
    }
  });
  Object.defineProperty(a.Timer.prototype, "length", {
    get: function () {
      return this.events.length;
    }
  });
  Object.defineProperty(a.Timer.prototype, "ms", {
    get: function () {
      if (this.running) {
        return this._now - this._started - this._pauseTotal;
      } else {
        return 0;
      }
    }
  });
  Object.defineProperty(a.Timer.prototype, "seconds", {
    get: function () {
      if (this.running) {
        return this.ms * 0.001;
      } else {
        return 0;
      }
    }
  });
  a.Timer.prototype.constructor = a.Timer;
  a.TimerEvent = function (t, e, i, s, n, a, o, r) {
    this.timer = t;
    this.delay = e;
    this.tick = i;
    this.repeatCount = s - 1;
    this.loop = n;
    this.callback = a;
    this.callbackContext = o;
    this.args = r;
    this.pendingDelete = false;
  };
  a.TimerEvent.prototype.constructor = a.TimerEvent;
  a.AnimationManager = function (t) {
    this.sprite = t;
    this.game = t.game;
    this.currentFrame = null;
    this.currentAnim = null;
    this.updateIfVisible = true;
    this.isLoaded = false;
    this._frameData = null;
    this._anims = {};
    this._outputFrames = [];
  };
  a.AnimationManager.prototype = {
    loadFrameData: function (t, e) {
      if (t === undefined) {
        return false;
      }
      if (this.isLoaded) {
        for (var i in this._anims) {
          this._anims[i].updateFrameData(t);
        }
      }
      this._frameData = t;
      if (e === undefined || e === null) {
        this.frame = 0;
      } else if (typeof e == "string") {
        this.frameName = e;
      } else {
        this.frame = e;
      }
      this.isLoaded = true;
      return true;
    },
    copyFrameData: function (t, e) {
      this._frameData = t.clone();
      if (this.isLoaded) {
        for (var i in this._anims) {
          this._anims[i].updateFrameData(this._frameData);
        }
      }
      if (e === undefined || e === null) {
        this.frame = 0;
      } else if (typeof e == "string") {
        this.frameName = e;
      } else {
        this.frame = e;
      }
      this.isLoaded = true;
      return true;
    },
    add: function (t, e, i, s, n) {
      e = e || [];
      i = i || 60;
      if (s === undefined) {
        s = false;
      }
      if (n === undefined) {
        n = !!e && typeof e[0] == "number";
      }
      this._outputFrames = [];
      this._frameData.getFrameIndexes(e, n, this._outputFrames);
      this._anims[t] = new a.Animation(this.game, this.sprite, t, this._frameData, this._outputFrames, i, s);
      this.currentAnim = this._anims[t];
      if (this.sprite.tilingTexture) {
        this.sprite.refreshTexture = true;
      }
      return this._anims[t];
    },
    validateFrames: function (t, e = true) {
      for (var i = 0; i < t.length; i++) {
        if (e === true) {
          if (t[i] > this._frameData.total) {
            return false;
          }
        } else if (this._frameData.checkFrameName(t[i]) === false) {
          return false;
        }
      }
      return true;
    },
    play: function (t, e, i, s) {
      if (this._anims[t]) {
        if (this.currentAnim === this._anims[t]) {
          if (this.currentAnim.isPlaying === false) {
            this.currentAnim.paused = false;
            return this.currentAnim.play(e, i, s);
          } else {
            return this.currentAnim;
          }
        } else {
          if (this.currentAnim && this.currentAnim.isPlaying) {
            this.currentAnim.stop();
          }
          this.currentAnim = this._anims[t];
          this.currentAnim.paused = false;
          this.currentFrame = this.currentAnim.currentFrame;
          return this.currentAnim.play(e, i, s);
        }
      }
    },
    stop: function (t, e = false) {
      if (!!this.currentAnim && (typeof t != "string" || t === this.currentAnim.name)) {
        this.currentAnim.stop(e);
      }
    },
    update: function () {
      return (!this.updateIfVisible || !!this.sprite.visible) && !!this.currentAnim && !!this.currentAnim.update() && (this.currentFrame = this.currentAnim.currentFrame, true);
    },
    next: function (t) {
      if (this.currentAnim) {
        this.currentAnim.next(t);
        this.currentFrame = this.currentAnim.currentFrame;
      }
    },
    previous: function (t) {
      if (this.currentAnim) {
        this.currentAnim.previous(t);
        this.currentFrame = this.currentAnim.currentFrame;
      }
    },
    getAnimation: function (t) {
      if (typeof t == "string" && this._anims[t]) {
        return this._anims[t];
      } else {
        return null;
      }
    },
    refreshFrame: function () {},
    destroy: function () {
      var t = null;
      for (var t in this._anims) {
        if (this._anims.hasOwnProperty(t)) {
          this._anims[t].destroy();
        }
      }
      this._anims = {};
      this._outputFrames = [];
      this._frameData = null;
      this.currentAnim = null;
      this.currentFrame = null;
      this.sprite = null;
      this.game = null;
    }
  };
  a.AnimationManager.prototype.constructor = a.AnimationManager;
  Object.defineProperty(a.AnimationManager.prototype, "frameData", {
    get: function () {
      return this._frameData;
    }
  });
  Object.defineProperty(a.AnimationManager.prototype, "frameTotal", {
    get: function () {
      return this._frameData.total;
    }
  });
  Object.defineProperty(a.AnimationManager.prototype, "paused", {
    get: function () {
      return this.currentAnim.isPaused;
    },
    set: function (t) {
      this.currentAnim.paused = t;
    }
  });
  Object.defineProperty(a.AnimationManager.prototype, "name", {
    get: function () {
      if (this.currentAnim) {
        return this.currentAnim.name;
      }
    }
  });
  Object.defineProperty(a.AnimationManager.prototype, "frame", {
    get: function () {
      if (this.currentFrame) {
        return this.currentFrame.index;
      }
    },
    set: function (t) {
      if (typeof t == "number" && this._frameData && this._frameData.getFrame(t) !== null) {
        this.currentFrame = this._frameData.getFrame(t);
        if (this.currentFrame) {
          this.sprite.setFrame(this.currentFrame);
        }
      }
    }
  });
  Object.defineProperty(a.AnimationManager.prototype, "frameName", {
    get: function () {
      if (this.currentFrame) {
        return this.currentFrame.name;
      }
    },
    set: function (t) {
      if (typeof t == "string" && this._frameData && this._frameData.getFrameByName(t) !== null) {
        this.currentFrame = this._frameData.getFrameByName(t);
        if (this.currentFrame) {
          this._frameIndex = this.currentFrame.index;
          this.sprite.setFrame(this.currentFrame);
        }
      }
    }
  });
  a.Animation = function (t, e, i, s, n, o, r = false) {
    this.game = t;
    this._parent = e;
    this._frameData = s;
    this.name = i;
    this._frames = [];
    this._frames = this._frames.concat(n);
    this.delay = 1000 / o;
    this.loop = r;
    this.loopCount = 0;
    this.killOnComplete = false;
    this.isFinished = false;
    this.isPlaying = false;
    this.isPaused = false;
    this._pauseStartTime = 0;
    this._frameIndex = 0;
    this._frameDiff = 0;
    this._frameSkip = 1;
    this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]);
    this.onStart = new a.Signal();
    this.onUpdate = null;
    this.onComplete = new a.Signal();
    this.onLoop = new a.Signal();
    this.isReversed = false;
    this.game.onPause.add(this.onPause, this);
    this.game.onResume.add(this.onResume, this);
  };
  a.Animation.prototype = {
    play: function (t, e, i) {
      if (typeof t == "number") {
        this.delay = 1000 / t;
      }
      if (typeof e == "boolean") {
        this.loop = e;
      }
      if (i !== undefined) {
        this.killOnComplete = i;
      }
      this.isPlaying = true;
      this.isFinished = false;
      this.paused = false;
      this.loopCount = 0;
      this._timeLastFrame = this.game.time.time;
      this._timeNextFrame = this.game.time.time + this.delay;
      this._frameIndex = this.isReversed ? this._frames.length - 1 : 0;
      this.updateCurrentFrame(false, true);
      this._parent.events.onAnimationStart$dispatch(this._parent, this);
      this.onStart.dispatch(this._parent, this);
      this._parent.animations.currentAnim = this;
      this._parent.animations.currentFrame = this.currentFrame;
      return this;
    },
    restart: function () {
      this.isPlaying = true;
      this.isFinished = false;
      this.paused = false;
      this.loopCount = 0;
      this._timeLastFrame = this.game.time.time;
      this._timeNextFrame = this.game.time.time + this.delay;
      this._frameIndex = 0;
      this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]);
      this._parent.setFrame(this.currentFrame);
      this._parent.animations.currentAnim = this;
      this._parent.animations.currentFrame = this.currentFrame;
      this.onStart.dispatch(this._parent, this);
    },
    reverse: function () {
      this.reversed = !this.reversed;
      return this;
    },
    reverseOnce: function () {
      this.onComplete.addOnce(this.reverse, this);
      return this.reverse();
    },
    setFrame: function (t, e) {
      var i;
      if (e === undefined) {
        e = false;
      }
      if (typeof t == "string") {
        for (var s = 0; s < this._frames.length; s++) {
          if (this._frameData.getFrame(this._frames[s]).name === t) {
            i = s;
          }
        }
      } else if (typeof t == "number") {
        if (e) {
          i = t;
        } else {
          for (var s = 0; s < this._frames.length; s++) {
            if (this._frames[s] === t) {
              i = s;
            }
          }
        }
      }
      if (i) {
        this._frameIndex = i - 1;
        this._timeNextFrame = this.game.time.time;
        this.update();
      }
    },
    stop: function (t = false, e = false) {
      this.isPlaying = false;
      this.isFinished = true;
      this.paused = false;
      if (t) {
        this.currentFrame = this._frameData.getFrame(this._frames[0]);
        this._parent.setFrame(this.currentFrame);
      }
      if (e) {
        this._parent.events.onAnimationComplete$dispatch(this._parent, this);
        this.onComplete.dispatch(this._parent, this);
      }
    },
    onPause: function () {
      if (this.isPlaying) {
        this._frameDiff = this._timeNextFrame - this.game.time.time;
      }
    },
    onResume: function () {
      if (this.isPlaying) {
        this._timeNextFrame = this.game.time.time + this._frameDiff;
      }
    },
    update: function () {
      return !this.isPaused && !!this.isPlaying && !!(this.game.time.time >= this._timeNextFrame) && (this._frameSkip = 1, this._frameDiff = this.game.time.time - this._timeNextFrame, this._timeLastFrame = this.game.time.time, this._frameDiff > this.delay && (this._frameSkip = Math.floor(this._frameDiff / this.delay), this._frameDiff -= this._frameSkip * this.delay), this._timeNextFrame = this.game.time.time + (this.delay - this._frameDiff), this.isReversed ? this._frameIndex -= this._frameSkip : this._frameIndex += this._frameSkip, !this.isReversed && this._frameIndex >= this._frames.length || this.isReversed && this._frameIndex <= -1 ? this.loop ? (this._frameIndex = Math.abs(this._frameIndex) % this._frames.length, this.isReversed && (this._frameIndex = this._frames.length - 1 - this._frameIndex), this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && this._parent.setFrame(this.currentFrame), this.loopCount++, this._parent.events.onAnimationLoop$dispatch(this._parent, this), this.onLoop.dispatch(this._parent, this), !this.onUpdate || (this.onUpdate.dispatch(this, this.currentFrame), !!this._frameData)) : (this.complete(), false) : this.updateCurrentFrame(true));
    },
    updateCurrentFrame: function (t, e = false) {
      if (!this._frameData) {
        return false;
      }
      var i = this.currentFrame.index;
      this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]);
      if (this.currentFrame && (e || !e && i !== this.currentFrame.index)) {
        this._parent.setFrame(this.currentFrame);
      }
      return !this.onUpdate || !t || (this.onUpdate.dispatch(this, this.currentFrame), !!this._frameData);
    },
    next: function (t = 1) {
      var e = this._frameIndex + t;
      if (e >= this._frames.length) {
        if (this.loop) {
          e %= this._frames.length;
        } else {
          e = this._frames.length - 1;
        }
      }
      if (e !== this._frameIndex) {
        this._frameIndex = e;
        this.updateCurrentFrame(true);
      }
    },
    previous: function (t = 1) {
      var e = this._frameIndex - t;
      if (e < 0) {
        if (this.loop) {
          e = this._frames.length + e;
        } else {
          e++;
        }
      }
      if (e !== this._frameIndex) {
        this._frameIndex = e;
        this.updateCurrentFrame(true);
      }
    },
    updateFrameData: function (t) {
      this._frameData = t;
      this.currentFrame = this._frameData ? this._frameData.getFrame(this._frames[this._frameIndex % this._frames.length]) : null;
    },
    destroy: function () {
      if (this._frameData) {
        this.game.onPause.remove(this.onPause, this);
        this.game.onResume.remove(this.onResume, this);
        this.game = null;
        this._parent = null;
        this._frames = null;
        this._frameData = null;
        this.currentFrame = null;
        this.isPlaying = false;
        this.onStart.dispose();
        this.onLoop.dispose();
        this.onComplete.dispose();
        if (this.onUpdate) {
          this.onUpdate.dispose();
        }
      }
    },
    complete: function () {
      this._frameIndex = this._frames.length - 1;
      this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]);
      this.isPlaying = false;
      this.isFinished = true;
      this.paused = false;
      this._parent.events.onAnimationComplete$dispatch(this._parent, this);
      this.onComplete.dispatch(this._parent, this);
      if (this.killOnComplete) {
        this._parent.kill();
      }
    }
  };
  a.Animation.prototype.constructor = a.Animation;
  Object.defineProperty(a.Animation.prototype, "paused", {
    get: function () {
      return this.isPaused;
    },
    set: function (t) {
      this.isPaused = t;
      if (t) {
        this._pauseStartTime = this.game.time.time;
      } else if (this.isPlaying) {
        this._timeNextFrame = this.game.time.time + this.delay;
      }
    }
  });
  Object.defineProperty(a.Animation.prototype, "reversed", {
    get: function () {
      return this.isReversed;
    },
    set: function (t) {
      this.isReversed = t;
    }
  });
  Object.defineProperty(a.Animation.prototype, "frameTotal", {
    get: function () {
      return this._frames.length;
    }
  });
  Object.defineProperty(a.Animation.prototype, "frame", {
    get: function () {
      if (this.currentFrame !== null) {
        return this.currentFrame.index;
      } else {
        return this._frameIndex;
      }
    },
    set: function (t) {
      this.currentFrame = this._frameData.getFrame(this._frames[t]);
      if (this.currentFrame !== null) {
        this._frameIndex = t;
        this._parent.setFrame(this.currentFrame);
        if (this.onUpdate) {
          this.onUpdate.dispatch(this, this.currentFrame);
        }
      }
    }
  });
  Object.defineProperty(a.Animation.prototype, "speed", {
    get: function () {
      return 1000 / this.delay;
    },
    set: function (t) {
      if (t > 0) {
        this.delay = 1000 / t;
      }
    }
  });
  Object.defineProperty(a.Animation.prototype, "enableUpdate", {
    get: function () {
      return this.onUpdate !== null;
    },
    set: function (t) {
      if (t && this.onUpdate === null) {
        this.onUpdate = new a.Signal();
      } else if (!t && this.onUpdate !== null) {
        this.onUpdate.dispose();
        this.onUpdate = null;
      }
    }
  });
  a.Animation.generateFrameNames = function (t, e, i, s = "", n) {
    var o = [];
    var r = "";
    if (e < i) {
      for (var h = e; h <= i; h++) {
        r = typeof n == "number" ? a.Utils.pad(h.toString(), n, "0", 1) : h.toString();
        r = t + r + s;
        o.push(r);
      }
    } else {
      for (var h = e; h >= i; h--) {
        r = typeof n == "number" ? a.Utils.pad(h.toString(), n, "0", 1) : h.toString();
        r = t + r + s;
        o.push(r);
      }
    }
    return o;
  };
  a.Frame = function (t, e, i, s, n, o) {
    this.index = t;
    this.x = e;
    this.y = i;
    this.width = s;
    this.height = n;
    this.name = o;
    this.centerX = Math.floor(s / 2);
    this.centerY = Math.floor(n / 2);
    this.distance = a.Math.distance(0, 0, s, n);
    this.rotated = false;
    this.rotationDirection = "cw";
    this.trimmed = false;
    this.sourceSizeW = s;
    this.sourceSizeH = n;
    this.spriteSourceSizeX = 0;
    this.spriteSourceSizeY = 0;
    this.spriteSourceSizeW = 0;
    this.spriteSourceSizeH = 0;
    this.right = this.x + this.width;
    this.bottom = this.y + this.height;
  };
  a.Frame.prototype = {
    resize: function (t, e) {
      this.width = t;
      this.height = e;
      this.centerX = Math.floor(t / 2);
      this.centerY = Math.floor(e / 2);
      this.distance = a.Math.distance(0, 0, t, e);
      this.sourceSizeW = t;
      this.sourceSizeH = e;
      this.right = this.x + t;
      this.bottom = this.y + e;
    },
    setTrim: function (t, e, i, s, n, a, o) {
      this.trimmed = t;
      if (t) {
        this.sourceSizeW = e;
        this.sourceSizeH = i;
        this.centerX = Math.floor(e / 2);
        this.centerY = Math.floor(i / 2);
        this.spriteSourceSizeX = s;
        this.spriteSourceSizeY = n;
        this.spriteSourceSizeW = a;
        this.spriteSourceSizeH = o;
      }
    },
    clone: function () {
      var t = new a.Frame(this.index, this.x, this.y, this.width, this.height, this.name);
      for (var e in this) {
        if (this.hasOwnProperty(e)) {
          t[e] = this[e];
        }
      }
      return t;
    },
    getRect: function (t = new a.Rectangle(this.x, this.y, this.width, this.height)) {
      return t;
    }
  };
  a.Frame.prototype.constructor = a.Frame;
  a.FrameData = function () {
    this._frames = [];
    this._frameNames = [];
  };
  a.FrameData.prototype = {
    addFrame: function (t) {
      t.index = this._frames.length;
      this._frames.push(t);
      if (t.name !== "") {
        this._frameNames[t.name] = t.index;
      }
      return t;
    },
    getFrame: function (t) {
      if (t >= this._frames.length) {
        t = 0;
      }
      return this._frames[t];
    },
    getFrameByName: function (t) {
      if (typeof this._frameNames[t] == "number") {
        return this._frames[this._frameNames[t]];
      } else {
        return null;
      }
    },
    checkFrameName: function (t) {
      return this._frameNames[t] != null;
    },
    clone: function () {
      var t = new a.FrameData();
      for (var e = 0; e < this._frames.length; e++) {
        t._frames.push(this._frames[e].clone());
      }
      for (var i in this._frameNames) {
        if (this._frameNames.hasOwnProperty(i)) {
          t._frameNames.push(this._frameNames[i]);
        }
      }
      return t;
    },
    getFrameRange: function (t, e, i = []) {
      for (var s = t; s <= e; s++) {
        i.push(this._frames[s]);
      }
      return i;
    },
    getFrames: function (t, e = true, i = []) {
      if (t === undefined || t.length === 0) {
        for (var s = 0; s < this._frames.length; s++) {
          i.push(this._frames[s]);
        }
      } else {
        for (var s = 0; s < t.length; s++) {
          if (e) {
            i.push(this.getFrame(t[s]));
          } else {
            i.push(this.getFrameByName(t[s]));
          }
        }
      }
      return i;
    },
    getFrameIndexes: function (t, e = true, i = []) {
      if (t === undefined || t.length === 0) {
        for (var s = 0; s < this._frames.length; s++) {
          i.push(this._frames[s].index);
        }
      } else {
        for (var s = 0; s < t.length; s++) {
          if (e && this._frames[t[s]]) {
            i.push(this._frames[t[s]].index);
          } else if (this.getFrameByName(t[s])) {
            i.push(this.getFrameByName(t[s]).index);
          }
        }
      }
      return i;
    },
    destroy: function () {
      this._frames = null;
      this._frameNames = null;
    }
  };
  a.FrameData.prototype.constructor = a.FrameData;
  Object.defineProperty(a.FrameData.prototype, "total", {
    get: function () {
      return this._frames.length;
    }
  });
  a.AnimationParser = {
    spriteSheet: function (t, e, i, s, n, o, r) {
      var h = e;
      if (typeof e == "string") {
        h = t.cache.getImage(e);
      }
      if (h === null) {
        return null;
      }
      var l = h.width;
      var c = h.height;
      if (i <= 0) {
        i = Math.floor(-l / Math.min(-1, i));
      }
      if (s <= 0) {
        s = Math.floor(-c / Math.min(-1, s));
      }
      var u = Math.floor((l - o) / (i + r));
      var d = Math.floor((c - o) / (s + r));
      var p = u * d;
      if (n !== -1) {
        p = n;
      }
      if (l === 0 || c === 0 || l < i || c < s || p === 0) {
        return null;
      }
      var f = new a.FrameData();
      var g = o;
      var m = o;
      for (var y = 0; y < p; y++) {
        f.addFrame(new a.Frame(y, g, m, i, s, ""));
        if ((g += i + r) + i > l) {
          g = o;
          m += s + r;
        }
      }
      return f;
    },
    JSONData: function (t, e) {
      if (e.frames) {
        var i = new a.FrameData();
        for (var s = e.frames, n, o = 0; o < s.length; o++) {
          n = i.addFrame(new a.Frame(o, s[o].frame.x, s[o].frame.y, s[o].frame.w, s[o].frame.h, s[o].filename));
          if (s[o].trimmed) {
            n.setTrim(s[o].trimmed, s[o].sourceSize.w, s[o].sourceSize.h, s[o].spriteSourceSize.x, s[o].spriteSourceSize.y, s[o].spriteSourceSize.w, s[o].spriteSourceSize.h);
          }
        }
        return i;
      }
    },
    JSONDataPyxel: function (t, e) {
      ["layers", "tilewidth", "tileheight", "tileswide", "tileshigh"].forEach(function (t) {
        e[t];
      });
      if (e.layers.length === 1) {
        var i = new a.FrameData();
        var s = e.tileheight;
        var n = e.tilewidth;
        for (var o = e.layers[0].tiles, r, h = 0; h < o.length; h++) {
          r = i.addFrame(new a.Frame(h, o[h].x, o[h].y, n, s, "frame_" + h));
          r.setTrim(false);
        }
        return i;
      }
    },
    JSONDataHash: function (t, e) {
      if (e.frames) {
        var i = new a.FrameData();
        var s = e.frames;
        var n;
        var o = 0;
        for (var r in s) {
          n = i.addFrame(new a.Frame(o, s[r].frame.x, s[r].frame.y, s[r].frame.w, s[r].frame.h, r));
          if (s[r].trimmed) {
            n.setTrim(s[r].trimmed, s[r].sourceSize.w, s[r].sourceSize.h, s[r].spriteSourceSize.x, s[r].spriteSourceSize.y, s[r].spriteSourceSize.w, s[r].spriteSourceSize.h);
          }
          o++;
        }
        return i;
      }
    },
    XMLData: function (t, e) {
      if (e.getElementsByTagName("TextureAtlas")) {
        var i = new a.FrameData();
        for (var s = e.getElementsByTagName("SubTexture"), n, o, r, h, l, c, u, d, p, f, g, m = 0; m < s.length; m++) {
          r = s[m].attributes;
          o = r.name.value;
          h = parseInt(r.x.value, 10);
          l = parseInt(r.y.value, 10);
          c = parseInt(r.width.value, 10);
          u = parseInt(r.height.value, 10);
          d = null;
          p = null;
          if (r.frameX) {
            d = Math.abs(parseInt(r.frameX.value, 10));
            p = Math.abs(parseInt(r.frameY.value, 10));
            f = parseInt(r.frameWidth.value, 10);
            g = parseInt(r.frameHeight.value, 10);
          }
          n = i.addFrame(new a.Frame(m, h, l, c, u, o));
          if (d !== null || p !== null) {
            n.setTrim(true, c, u, d, p, f, g);
          }
        }
        return i;
      }
    }
  };
  a.Cache = function (t) {
    this.game = t;
    this.autoResolveURL = false;
    this._cache = {
      canvas: {},
      image: {},
      texture: {},
      sound: {},
      video: {},
      text: {},
      json: {},
      xml: {},
      physics: {},
      tilemap: {},
      binary: {},
      bitmapData: {},
      bitmapFont: {},
      shader: {},
      renderTexture: {}
    };
    this._urlMap = {};
    this._urlResolver = new Image();
    this._urlTemp = null;
    this.onSoundUnlock = new a.Signal();
    this._cacheMap = [];
    this._cacheMap[a.Cache.CANVAS] = this._cache.canvas;
    this._cacheMap[a.Cache.IMAGE] = this._cache.image;
    this._cacheMap[a.Cache.TEXTURE] = this._cache.texture;
    this._cacheMap[a.Cache.SOUND] = this._cache.sound;
    this._cacheMap[a.Cache.TEXT] = this._cache.text;
    this._cacheMap[a.Cache.PHYSICS] = this._cache.physics;
    this._cacheMap[a.Cache.TILEMAP] = this._cache.tilemap;
    this._cacheMap[a.Cache.BINARY] = this._cache.binary;
    this._cacheMap[a.Cache.BITMAPDATA] = this._cache.bitmapData;
    this._cacheMap[a.Cache.BITMAPFONT] = this._cache.bitmapFont;
    this._cacheMap[a.Cache.JSON] = this._cache.json;
    this._cacheMap[a.Cache.XML] = this._cache.xml;
    this._cacheMap[a.Cache.VIDEO] = this._cache.video;
    this._cacheMap[a.Cache.SHADER] = this._cache.shader;
    this._cacheMap[a.Cache.RENDER_TEXTURE] = this._cache.renderTexture;
    this.addDefaultImage();
    this.addMissingImage();
  };
  a.Cache.CANVAS = 1;
  a.Cache.IMAGE = 2;
  a.Cache.TEXTURE = 3;
  a.Cache.SOUND = 4;
  a.Cache.TEXT = 5;
  a.Cache.PHYSICS = 6;
  a.Cache.TILEMAP = 7;
  a.Cache.BINARY = 8;
  a.Cache.BITMAPDATA = 9;
  a.Cache.BITMAPFONT = 10;
  a.Cache.JSON = 11;
  a.Cache.XML = 12;
  a.Cache.VIDEO = 13;
  a.Cache.SHADER = 14;
  a.Cache.RENDER_TEXTURE = 15;
  a.Cache.DEFAULT = null;
  a.Cache.MISSING = null;
  a.Cache.prototype = {
    addCanvas: function (t, e, i = e.getContext("2d")) {
      this._cache.canvas[t] = {
        canvas: e,
        context: i
      };
    },
    addImage: function (t, e, i) {
      if (this.checkImageKey(t)) {
        this.removeImage(t);
      }
      var s = {
        key: t,
        url: e,
        data: i,
        base: new PIXI.BaseTexture(i),
        frame: new a.Frame(0, 0, 0, i.width, i.height, t),
        frameData: new a.FrameData()
      };
      s.frameData.addFrame(new a.Frame(0, 0, 0, i.width, i.height, e));
      this._cache.image[t] = s;
      this._resolveURL(e, s);
      if (t === "__default") {
        a.Cache.DEFAULT = new PIXI.Texture(s.base);
      } else if (t === "__missing") {
        a.Cache.MISSING = new PIXI.Texture(s.base);
      }
      return s;
    },
    addDefaultImage: function () {
      var t = new Image();
      t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==";
      var e = this.addImage("__default", null, t);
      e.base.skipRender = true;
      a.Cache.DEFAULT = new PIXI.Texture(e.base);
    },
    addMissingImage: function () {
      var t = new Image();
      t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==";
      var e = this.addImage("__missing", null, t);
      a.Cache.MISSING = new PIXI.Texture(e.base);
    },
    addSound: function (t, e, i, s, n) {
      if (s === undefined) {
        s = true;
        n = false;
      }
      if (n === undefined) {
        s = false;
        n = true;
      }
      var a = false;
      if (n) {
        a = true;
      }
      this._cache.sound[t] = {
        url: e,
        data: i,
        isDecoding: false,
        decoded: a,
        webAudio: s,
        audioTag: n,
        locked: this.game.sound.touchLocked
      };
      this._resolveURL(e, this._cache.sound[t]);
    },
    addText: function (t, e, i) {
      this._cache.text[t] = {
        url: e,
        data: i
      };
      this._resolveURL(e, this._cache.text[t]);
    },
    addPhysicsData: function (t, e, i, s) {
      this._cache.physics[t] = {
        url: e,
        data: i,
        format: s
      };
      this._resolveURL(e, this._cache.physics[t]);
    },
    addTilemap: function (t, e, i, s) {
      this._cache.tilemap[t] = {
        url: e,
        data: i,
        format: s
      };
      this._resolveURL(e, this._cache.tilemap[t]);
    },
    addBinary: function (t, e) {
      this._cache.binary[t] = e;
    },
    addBitmapData: function (t, e, i) {
      e.key = t;
      if (i === undefined) {
        i = new a.FrameData();
        i.addFrame(e.textureFrame);
      }
      this._cache.bitmapData[t] = {
        data: e,
        frameData: i
      };
      return e;
    },
    addBitmapFont: function (t, e, i, s, n, o, r) {
      var h = {
        url: e,
        data: i,
        font: null,
        base: new PIXI.BaseTexture(i)
      };
      if (o === undefined) {
        o = 0;
      }
      if (r === undefined) {
        r = 0;
      }
      h.font = n === "json" ? a.LoaderParser.jsonBitmapFont(s, h.base, o, r) : a.LoaderParser.xmlBitmapFont(s, h.base, o, r);
      this._cache.bitmapFont[t] = h;
      this._resolveURL(e, h);
    },
    addJSON: function (t, e, i) {
      this._cache.json[t] = {
        url: e,
        data: i
      };
      this._resolveURL(e, this._cache.json[t]);
    },
    addXML: function (t, e, i) {
      this._cache.xml[t] = {
        url: e,
        data: i
      };
      this._resolveURL(e, this._cache.xml[t]);
    },
    addVideo: function (t, e, i, s) {
      this._cache.video[t] = {
        url: e,
        data: i,
        isBlob: s,
        locked: true
      };
      this._resolveURL(e, this._cache.video[t]);
    },
    addShader: function (t, e, i) {
      this._cache.shader[t] = {
        url: e,
        data: i
      };
      this._resolveURL(e, this._cache.shader[t]);
    },
    addRenderTexture: function (t, e) {
      this._cache.renderTexture[t] = {
        texture: e,
        frame: new a.Frame(0, 0, 0, e.width, e.height, "", "")
      };
    },
    addSpriteSheet: function (t, e, i, s, n, o = -1, r = 0, h = 0) {
      var l = {
        key: t,
        url: e,
        data: i,
        frameWidth: s,
        frameHeight: n,
        margin: r,
        spacing: h,
        base: new PIXI.BaseTexture(i),
        frameData: a.AnimationParser.spriteSheet(this.game, i, s, n, o, r, h)
      };
      this._cache.image[t] = l;
      this._resolveURL(e, l);
    },
    addTextureAtlas: function (t, e, i, s, n) {
      var o = {
        key: t,
        url: e,
        data: i,
        base: new PIXI.BaseTexture(i)
      };
      if (n === a.Loader.TEXTURE_ATLAS_XML_STARLING) {
        o.frameData = a.AnimationParser.XMLData(this.game, s, t);
      } else if (n === a.Loader.TEXTURE_ATLAS_JSON_PYXEL) {
        o.frameData = a.AnimationParser.JSONDataPyxel(this.game, s, t);
      } else if (Array.isArray(s.frames)) {
        o.frameData = a.AnimationParser.JSONData(this.game, s, t);
      } else {
        o.frameData = a.AnimationParser.JSONDataHash(this.game, s, t);
      }
      this._cache.image[t] = o;
      this._resolveURL(e, o);
    },
    reloadSound: function (t) {
      var e = this;
      var i = this.getSound(t);
      if (i) {
        i.data.src = i.url;
        i.data.addEventListener("canplaythrough", function () {
          return e.reloadSoundComplete(t);
        }, false);
        i.data.load();
      }
    },
    reloadSoundComplete: function (t) {
      var e = this.getSound(t);
      if (e) {
        e.locked = false;
        this.onSoundUnlock.dispatch(t);
      }
    },
    updateSound: function (t, e, i) {
      var s = this.getSound(t);
      if (s) {
        s[e] = i;
      }
    },
    decodedSound: function (t, e) {
      var i = this.getSound(t);
      i.data = e;
      i.decoded = true;
      i.isDecoding = false;
    },
    isSoundDecoded: function (t) {
      var e = this.getItem(t, a.Cache.SOUND, "isSoundDecoded");
      if (e) {
        return e.decoded;
      }
    },
    isSoundReady: function (t) {
      var e = this.getItem(t, a.Cache.SOUND, "isSoundDecoded");
      if (e) {
        return e.decoded && !this.game.sound.touchLocked;
      }
    },
    checkKey: function (t, e) {
      return !!this._cacheMap[t][e];
    },
    checkURL: function (t) {
      return !!this._urlMap[this._resolveURL(t)];
    },
    checkCanvasKey: function (t) {
      return this.checkKey(a.Cache.CANVAS, t);
    },
    checkImageKey: function (t) {
      return this.checkKey(a.Cache.IMAGE, t);
    },
    checkTextureKey: function (t) {
      return this.checkKey(a.Cache.TEXTURE, t);
    },
    checkSoundKey: function (t) {
      return this.checkKey(a.Cache.SOUND, t);
    },
    checkTextKey: function (t) {
      return this.checkKey(a.Cache.TEXT, t);
    },
    checkPhysicsKey: function (t) {
      return this.checkKey(a.Cache.PHYSICS, t);
    },
    checkTilemapKey: function (t) {
      return this.checkKey(a.Cache.TILEMAP, t);
    },
    checkBinaryKey: function (t) {
      return this.checkKey(a.Cache.BINARY, t);
    },
    checkBitmapDataKey: function (t) {
      return this.checkKey(a.Cache.BITMAPDATA, t);
    },
    checkBitmapFontKey: function (t) {
      return this.checkKey(a.Cache.BITMAPFONT, t);
    },
    checkJSONKey: function (t) {
      return this.checkKey(a.Cache.JSON, t);
    },
    checkXMLKey: function (t) {
      return this.checkKey(a.Cache.XML, t);
    },
    checkVideoKey: function (t) {
      return this.checkKey(a.Cache.VIDEO, t);
    },
    checkShaderKey: function (t) {
      return this.checkKey(a.Cache.SHADER, t);
    },
    checkRenderTextureKey: function (t) {
      return this.checkKey(a.Cache.RENDER_TEXTURE, t);
    },
    getItem: function (t, e, i, s) {
      if (this.checkKey(e, t)) {
        if (s === undefined) {
          return this._cacheMap[e][t];
        } else {
          return this._cacheMap[e][t][s];
        }
      } else {
        return null;
      }
    },
    getCanvas: function (t) {
      return this.getItem(t, a.Cache.CANVAS, "getCanvas", "canvas");
    },
    getImage: function (t, e) {
      if (t === undefined || t === null) {
        t = "__default";
      }
      if (e === undefined) {
        e = false;
      }
      var i = this.getItem(t, a.Cache.IMAGE, "getImage");
      if (i === null) {
        i = this.getItem("__missing", a.Cache.IMAGE, "getImage");
      }
      if (e) {
        return i;
      } else {
        return i.data;
      }
    },
    getTextureFrame: function (t) {
      return this.getItem(t, a.Cache.TEXTURE, "getTextureFrame", "frame");
    },
    getSound: function (t) {
      return this.getItem(t, a.Cache.SOUND, "getSound");
    },
    getSoundData: function (t) {
      return this.getItem(t, a.Cache.SOUND, "getSoundData", "data");
    },
    getText: function (t) {
      return this.getItem(t, a.Cache.TEXT, "getText", "data");
    },
    getPhysicsData: function (t, e, i) {
      var s = this.getItem(t, a.Cache.PHYSICS, "getPhysicsData", "data");
      if (s === null || e === undefined || e === null) {
        return s;
      }
      if (s[e]) {
        var n = s[e];
        if (!n || !i) {
          return n;
        }
        for (var o in n) {
          o = n[o];
          if (o.fixtureKey === i) {
            return o;
          }
        }
      }
      return null;
    },
    getTilemapData: function (t) {
      return this.getItem(t, a.Cache.TILEMAP, "getTilemapData");
    },
    getBinary: function (t) {
      return this.getItem(t, a.Cache.BINARY, "getBinary");
    },
    getBitmapData: function (t) {
      return this.getItem(t, a.Cache.BITMAPDATA, "getBitmapData", "data");
    },
    getBitmapFont: function (t) {
      return this.getItem(t, a.Cache.BITMAPFONT, "getBitmapFont");
    },
    getJSON: function (t, e) {
      var i = this.getItem(t, a.Cache.JSON, "getJSON", "data");
      if (i) {
        if (e) {
          return a.Utils.extend(true, Array.isArray(i) ? [] : {}, i);
        } else {
          return i;
        }
      } else {
        return null;
      }
    },
    getXML: function (t) {
      return this.getItem(t, a.Cache.XML, "getXML", "data");
    },
    getVideo: function (t) {
      return this.getItem(t, a.Cache.VIDEO, "getVideo");
    },
    getShader: function (t) {
      return this.getItem(t, a.Cache.SHADER, "getShader", "data");
    },
    getRenderTexture: function (t) {
      return this.getItem(t, a.Cache.RENDER_TEXTURE, "getRenderTexture");
    },
    getBaseTexture: function (t, e = a.Cache.IMAGE) {
      return this.getItem(t, e, "getBaseTexture", "base");
    },
    getFrame: function (t, e = a.Cache.IMAGE) {
      return this.getItem(t, e, "getFrame", "frame");
    },
    getFrameCount: function (t, e) {
      var i = this.getFrameData(t, e);
      if (i) {
        return i.total;
      } else {
        return 0;
      }
    },
    getFrameData: function (t, e = a.Cache.IMAGE) {
      return this.getItem(t, e, "getFrameData", "frameData");
    },
    hasFrameData: function (t, e = a.Cache.IMAGE) {
      return this.getItem(t, e, "", "frameData") !== null;
    },
    updateFrameData: function (t, e, i = a.Cache.IMAGE) {
      if (this._cacheMap[i][t]) {
        this._cacheMap[i][t].frameData = e;
      }
    },
    getFrameByIndex: function (t, e, i) {
      var s = this.getFrameData(t, i);
      if (s) {
        return s.getFrame(e);
      } else {
        return null;
      }
    },
    getFrameByName: function (t, e, i) {
      var s = this.getFrameData(t, i);
      if (s) {
        return s.getFrameByName(e);
      } else {
        return null;
      }
    },
    getURL: function (t) {
      var t = this._resolveURL(t);
      if (t) {
        return this._urlMap[t];
      } else {
        return null;
      }
    },
    getKeys: function (t = a.Cache.IMAGE) {
      var e = [];
      if (this._cacheMap[t]) {
        for (var i in this._cacheMap[t]) {
          if (i !== "__default" && i !== "__missing") {
            e.push(i);
          }
        }
      }
      return e;
    },
    removeCanvas: function (t) {
      delete this._cache.canvas[t];
    },
    removeImage: function (t, e = true) {
      var i = this.getImage(t, true);
      if (e && i.base) {
        i.base.destroy();
      }
      delete this._cache.image[t];
    },
    removeSound: function (t) {
      delete this._cache.sound[t];
    },
    removeText: function (t) {
      delete this._cache.text[t];
    },
    removePhysics: function (t) {
      delete this._cache.physics[t];
    },
    removeTilemap: function (t) {
      delete this._cache.tilemap[t];
    },
    removeBinary: function (t) {
      delete this._cache.binary[t];
    },
    removeBitmapData: function (t) {
      delete this._cache.bitmapData[t];
    },
    removeBitmapFont: function (t) {
      delete this._cache.bitmapFont[t];
    },
    removeJSON: function (t) {
      delete this._cache.json[t];
    },
    removeXML: function (t) {
      delete this._cache.xml[t];
    },
    removeVideo: function (t) {
      delete this._cache.video[t];
    },
    removeShader: function (t) {
      delete this._cache.shader[t];
    },
    removeRenderTexture: function (t) {
      delete this._cache.renderTexture[t];
    },
    removeSpriteSheet: function (t) {
      delete this._cache.spriteSheet[t];
    },
    removeTextureAtlas: function (t) {
      delete this._cache.atlas[t];
    },
    clearGLTextures: function () {
      for (var t in this._cache.image) {
        this._cache.image[t].base._glTextures = [];
      }
    },
    _resolveURL: function (t, e) {
      if (this.autoResolveURL) {
        this._urlResolver.src = this.game.load.baseURL + t;
        this._urlTemp = this._urlResolver.src;
        this._urlResolver.src = "";
        if (e) {
          this._urlMap[this._urlTemp] = e;
        }
        return this._urlTemp;
      } else {
        return null;
      }
    },
    destroy: function () {
      for (var t = 0; t < this._cacheMap.length; t++) {
        var e = this._cacheMap[t];
        for (var i in e) {
          if (i !== "__default" && i !== "__missing") {
            if (e[i].destroy) {
              e[i].destroy();
            }
            delete e[i];
          }
        }
      }
      this._urlMap = null;
      this._urlResolver = null;
      this._urlTemp = null;
    }
  };
  a.Cache.prototype.constructor = a.Cache;
  a.Loader = function (t) {
    this.game = t;
    this.cache = t.cache;
    this.resetLocked = false;
    this.isLoading = false;
    this.hasLoaded = false;
    this.preloadSprite = null;
    this.crossOrigin = false;
    this.baseURL = "";
    this.path = "";
    this.headers = {
      requestedWith: false,
      json: "application/json",
      xml: "application/xml"
    };
    this.onLoadStart = new a.Signal();
    this.onLoadComplete = new a.Signal();
    this.onPackComplete = new a.Signal();
    this.onFileStart = new a.Signal();
    this.onFileComplete = new a.Signal();
    this.onFileError = new a.Signal();
    this.useXDomainRequest = false;
    this._warnedAboutXDomainRequest = false;
    this.enableParallel = true;
    this.maxParallelDownloads = 4;
    this._withSyncPointDepth = 0;
    this._fileList = [];
    this._flightQueue = [];
    this._processingHead = 0;
    this._fileLoadStarted = false;
    this._totalPackCount = 0;
    this._totalFileCount = 0;
    this._loadedPackCount = 0;
    this._loadedFileCount = 0;
  };
  a.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0;
  a.Loader.TEXTURE_ATLAS_JSON_HASH = 1;
  a.Loader.TEXTURE_ATLAS_XML_STARLING = 2;
  a.Loader.PHYSICS_LIME_CORONA_JSON = 3;
  a.Loader.PHYSICS_PHASER_JSON = 4;
  a.Loader.TEXTURE_ATLAS_JSON_PYXEL = 5;
  a.Loader.prototype = {
    setPreloadSprite: function (t, e) {
      e = e || 0;
      this.preloadSprite = {
        sprite: t,
        direction: e,
        width: t.width,
        height: t.height,
        rect: null
      };
      this.preloadSprite.rect = e === 0 ? new a.Rectangle(0, 0, 1, t.height) : new a.Rectangle(0, 0, t.width, 1);
      t.crop(this.preloadSprite.rect);
      t.visible = true;
    },
    resize: function () {
      if (this.preloadSprite && this.preloadSprite.height !== this.preloadSprite.sprite.height) {
        this.preloadSprite.rect.height = this.preloadSprite.sprite.height;
      }
    },
    checkKeyExists: function (t, e) {
      return this.getAssetIndex(t, e) > -1;
    },
    getAssetIndex: function (t, e) {
      var i = -1;
      for (var s = 0; s < this._fileList.length; s++) {
        var n = this._fileList[s];
        if (n.type === t && n.key === e && (i = s, !n.loaded && !n.loading)) {
          break;
        }
      }
      return i;
    },
    getAsset: function (t, e) {
      var i = this.getAssetIndex(t, e);
      return i > -1 && {
        index: i,
        file: this._fileList[i]
      };
    },
    reset: function (t, e = false) {
      if (!this.resetLocked) {
        if (t) {
          this.preloadSprite = null;
        }
        this.isLoading = false;
        this._processingHead = 0;
        this._fileList.length = 0;
        this._flightQueue.length = 0;
        this._fileLoadStarted = false;
        this._totalFileCount = 0;
        this._totalPackCount = 0;
        this._loadedPackCount = 0;
        this._loadedFileCount = 0;
        if (e) {
          this.onLoadStart.removeAll();
          this.onLoadComplete.removeAll();
          this.onPackComplete.removeAll();
          this.onFileStart.removeAll();
          this.onFileComplete.removeAll();
          this.onFileError.removeAll();
        }
      }
    },
    addToFileList: function (t, e, i, s, n = false, a) {
      if (e === undefined || e === "") {
        return this;
      }
      if (i === undefined || i === null) {
        if (!a) {
          return this;
        }
        i = e + a;
      }
      var o = {
        type: t,
        key: e,
        path: this.path,
        url: i,
        syncPoint: this._withSyncPointDepth > 0,
        data: null,
        loading: false,
        loaded: false,
        error: false
      };
      if (s) {
        for (var r in s) {
          o[r] = s[r];
        }
      }
      var h = this.getAssetIndex(t, e);
      if (n && h > -1) {
        var l = this._fileList[h];
        if (l.loading || l.loaded) {
          this._fileList.push(o);
          this._totalFileCount++;
        } else {
          this._fileList[h] = o;
        }
      } else if (h === -1) {
        this._fileList.push(o);
        this._totalFileCount++;
      }
      return this;
    },
    replaceInFileList: function (t, e, i, s) {
      return this.addToFileList(t, e, i, s, true);
    },
    pack: function (t, e = null, i = null, s = null) {
      if (!e && !i) {
        return this;
      }
      var n = {
        type: "packfile",
        key: t,
        url: e,
        path: this.path,
        syncPoint: true,
        data: null,
        loading: false,
        loaded: false,
        error: false,
        callbackContext: s
      };
      if (i) {
        if (typeof i == "string") {
          i = JSON.parse(i);
        }
        n.data = i || {};
        n.loaded = true;
      }
      for (var a = 0; a < this._fileList.length + 1; a++) {
        var o = this._fileList[a];
        if (!o || !o.loaded && !o.loading && o.type !== "packfile") {
          this._fileList.splice(a, 0, n);
          this._totalPackCount++;
          break;
        }
      }
      return this;
    },
    image: function (t, e, i) {
      return this.addToFileList("image", t, e, undefined, i, ".png");
    },
    images: function (t, e) {
      if (Array.isArray(e)) {
        for (var i = 0; i < t.length; i++) {
          this.image(t[i], e[i]);
        }
      } else {
        for (var i = 0; i < t.length; i++) {
          this.image(t[i]);
        }
      }
      return this;
    },
    text: function (t, e, i) {
      return this.addToFileList("text", t, e, undefined, i, ".txt");
    },
    json: function (t, e, i) {
      return this.addToFileList("json", t, e, undefined, i, ".json");
    },
    shader: function (t, e, i) {
      return this.addToFileList("shader", t, e, undefined, i, ".frag");
    },
    xml: function (t, e, i) {
      return this.addToFileList("xml", t, e, undefined, i, ".xml");
    },
    script: function (t, e, i = false, s) {
      if (i !== false && s === undefined) {
        s = this;
      }
      return this.addToFileList("script", t, e, {
        syncPoint: true,
        callback: i,
        callbackContext: s
      }, false, ".js");
    },
    binary: function (t, e, i = false, s) {
      if (i !== false && s === undefined) {
        s = i;
      }
      return this.addToFileList("binary", t, e, {
        callback: i,
        callbackContext: s
      }, false, ".bin");
    },
    spritesheet: function (t, e, i, s, n = -1, a = 0, o = 0) {
      return this.addToFileList("spritesheet", t, e, {
        frameWidth: i,
        frameHeight: s,
        frameMax: n,
        margin: a,
        spacing: o
      }, false, ".png");
    },
    audio: function (t, e, i) {
      if (this.game.sound.noAudio) {
        return this;
      } else {
        if (i === undefined) {
          i = true;
        }
        if (typeof e == "string") {
          e = [e];
        }
        return this.addToFileList("audio", t, e, {
          buffer: null,
          autoDecode: i
        });
      }
    },
    audioSprite: function (t, e, i, s, n) {
      if (this.game.sound.noAudio) {
        return this;
      } else {
        if (i === undefined) {
          i = null;
        }
        if (s === undefined) {
          s = null;
        }
        if (n === undefined) {
          n = true;
        }
        this.audio(t, e, n);
        if (i) {
          this.json(t + "-audioatlas", i);
        } else if (s) {
          if (typeof s == "string") {
            s = JSON.parse(s);
          }
          this.cache.addJSON(t + "-audioatlas", "", s);
        }
        return this;
      }
    },
    audiosprite: function (t, e, i, s, n) {
      return this.audioSprite(t, e, i, s, n);
    },
    video: function (t, e, i = this.game.device.firefox ? "loadeddata" : "canplaythrough", s = false) {
      if (typeof e == "string") {
        e = [e];
      }
      return this.addToFileList("video", t, e, {
        buffer: null,
        asBlob: s,
        loadEvent: i
      });
    },
    tilemap: function (t, e = null, i = null, s = a.Tilemap.CSV) {
      if (!e && !i) {
        e = s === a.Tilemap.CSV ? t + ".csv" : t + ".json";
      }
      if (i) {
        switch (s) {
          case a.Tilemap.CSV:
            break;
          case a.Tilemap.TILED_JSON:
            if (typeof i == "string") {
              i = JSON.parse(i);
            }
        }
        this.cache.addTilemap(t, null, i, s);
      } else {
        this.addToFileList("tilemap", t, e, {
          format: s
        });
      }
      return this;
    },
    physics: function (t, e = null, i = null, s = a.Physics.LIME_CORONA_JSON) {
      if (!e && !i) {
        e = t + ".json";
      }
      if (i) {
        if (typeof i == "string") {
          i = JSON.parse(i);
        }
        this.cache.addPhysicsData(t, null, i, s);
      } else {
        this.addToFileList("physics", t, e, {
          format: s
        });
      }
      return this;
    },
    bitmapFont: function (t, e, i, s, n, a) {
      if (e === undefined || e === null) {
        e = t + ".png";
      }
      if (i === undefined) {
        i = null;
      }
      if (s === undefined) {
        s = null;
      }
      if (i === null && s === null) {
        i = t + ".xml";
      }
      if (n === undefined) {
        n = 0;
      }
      if (a === undefined) {
        a = 0;
      }
      if (i) {
        this.addToFileList("bitmapfont", t, e, {
          atlasURL: i,
          xSpacing: n,
          ySpacing: a
        });
      } else if (typeof s == "string") {
        var o;
        var r;
        try {
          o = JSON.parse(s);
        } catch (t) {
          r = this.parseXml(s);
        }
        if (!r && !o) {
          throw new Error("Phaser.Loader. Invalid Bitmap Font atlas given");
        }
        this.addToFileList("bitmapfont", t, e, {
          atlasURL: null,
          atlasData: o || r,
          atlasType: o ? "json" : "xml",
          xSpacing: n,
          ySpacing: a
        });
      }
      return this;
    },
    atlasJSONArray: function (t, e, i, s) {
      return this.atlas(t, e, i, s, a.Loader.TEXTURE_ATLAS_JSON_ARRAY);
    },
    atlasJSONHash: function (t, e, i, s) {
      return this.atlas(t, e, i, s, a.Loader.TEXTURE_ATLAS_JSON_HASH);
    },
    atlasXML: function (t, e, i = null, s = null) {
      if (!i && !s) {
        i = t + ".xml";
      }
      return this.atlas(t, e, i, s, a.Loader.TEXTURE_ATLAS_XML_STARLING);
    },
    atlas: function (t, e, i, s, n) {
      if (e === undefined || e === null) {
        e = t + ".png";
      }
      if (i === undefined) {
        i = null;
      }
      if (s === undefined) {
        s = null;
      }
      if (n === undefined) {
        n = a.Loader.TEXTURE_ATLAS_JSON_ARRAY;
      }
      if (!i && !s) {
        i = n === a.Loader.TEXTURE_ATLAS_XML_STARLING ? t + ".xml" : t + ".json";
      }
      if (i) {
        this.addToFileList("textureatlas", t, e, {
          atlasURL: i,
          format: n
        });
      } else {
        switch (n) {
          case a.Loader.TEXTURE_ATLAS_JSON_ARRAY:
            if (typeof s == "string") {
              s = JSON.parse(s);
            }
            break;
          case a.Loader.TEXTURE_ATLAS_XML_STARLING:
            if (typeof s == "string") {
              var o = this.parseXml(s);
              if (!o) {
                throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");
              }
              s = o;
            }
        }
        this.addToFileList("textureatlas", t, e, {
          atlasURL: null,
          atlasData: s,
          format: n
        });
      }
      return this;
    },
    withSyncPoint: function (t, e) {
      this._withSyncPointDepth++;
      try {
        t.call(e || this, this);
      } finally {
        this._withSyncPointDepth--;
      }
      return this;
    },
    addSyncPoint: function (t, e) {
      var i = this.getAsset(t, e);
      if (i) {
        i.file.syncPoint = true;
      }
      return this;
    },
    removeFile: function (t, e) {
      var i = this.getAsset(t, e);
      if (i) {
        if (!i.loaded && !i.loading) {
          this._fileList.splice(i.index, 1);
        }
      }
    },
    removeAll: function () {
      this._fileList.length = 0;
      this._flightQueue.length = 0;
    },
    start: function () {
      if (!this.isLoading) {
        this.hasLoaded = false;
        this.isLoading = true;
        this.updateProgress();
        this.processLoadQueue();
      }
    },
    processLoadQueue: function () {
      if (!this.isLoading) {
        this.finishedLoading(true);
        return;
      }
      for (var t = 0; t < this._flightQueue.length; t++) {
        var e = this._flightQueue[t];
        if (e.loaded || e.error) {
          this._flightQueue.splice(t, 1);
          t--;
          e.loading = false;
          e.requestUrl = null;
          e.requestObject = null;
          if (e.error) {
            this.onFileError.dispatch(e.key, e);
          }
          if (e.type !== "packfile") {
            this._loadedFileCount++;
            this.onFileComplete.dispatch(this.progress, e.key, !e.error, this._loadedFileCount, this._totalFileCount);
          } else if (e.type === "packfile" && e.error) {
            this._loadedPackCount++;
            this.onPackComplete.dispatch(e.key, !e.error, this._loadedPackCount, this._totalPackCount);
          }
        }
      }
      var i = false;
      var s = this.enableParallel ? a.Math.clamp(this.maxParallelDownloads, 1, 12) : 1;
      for (var t = this._processingHead; t < this._fileList.length; t++) {
        var e = this._fileList[t];
        if (e.type === "packfile" && !e.error && e.loaded && t === this._processingHead) {
          this.processPack(e);
          this._loadedPackCount++;
          this.onPackComplete.dispatch(e.key, !e.error, this._loadedPackCount, this._totalPackCount);
        }
        if (e.loaded || e.error) {
          if (t === this._processingHead) {
            this._processingHead = t + 1;
          }
        } else if (!e.loading && this._flightQueue.length < s) {
          if (e.type !== "packfile" || e.data) {
            if (!i) {
              if (!this._fileLoadStarted) {
                this._fileLoadStarted = true;
                this.onLoadStart.dispatch();
              }
              this._flightQueue.push(e);
              e.loading = true;
              this.onFileStart.dispatch(this.progress, e.key, e.url);
              this.loadFile(e);
            }
          } else {
            this._flightQueue.push(e);
            e.loading = true;
            this.loadFile(e);
          }
        }
        if (!e.loaded && e.syncPoint) {
          i = true;
        }
        if (this._flightQueue.length >= s || i && this._loadedPackCount === this._totalPackCount) {
          break;
        }
      }
      this.updateProgress();
      if (this._processingHead >= this._fileList.length) {
        this.finishedLoading();
      } else if (!this._flightQueue.length) {
        var n = this;
        setTimeout(function () {
          n.finishedLoading(true);
        }, 2000);
      }
    },
    finishedLoading: function (t) {
      if (!this.hasLoaded) {
        this.hasLoaded = true;
        this.isLoading = false;
        if (!t && !this._fileLoadStarted) {
          this._fileLoadStarted = true;
          this.onLoadStart.dispatch();
        }
        this.onLoadComplete.dispatch();
        this.game.state.loadComplete();
        this.reset();
      }
    },
    asyncComplete: function (t, e = "") {
      t.loaded = true;
      t.error = !!e;
      if (e) {
        t.errorMessage = e;
      }
      this.processLoadQueue();
    },
    processPack: function (t) {
      var e = t.data[t.key];
      if (e) {
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          switch (s.type) {
            case "image":
              this.image(s.key, s.url, s.overwrite);
              break;
            case "text":
              this.text(s.key, s.url, s.overwrite);
              break;
            case "json":
              this.json(s.key, s.url, s.overwrite);
              break;
            case "xml":
              this.xml(s.key, s.url, s.overwrite);
              break;
            case "script":
              this.script(s.key, s.url, s.callback, t.callbackContext || this);
              break;
            case "binary":
              this.binary(s.key, s.url, s.callback, t.callbackContext || this);
              break;
            case "spritesheet":
              this.spritesheet(s.key, s.url, s.frameWidth, s.frameHeight, s.frameMax, s.margin, s.spacing);
              break;
            case "video":
              this.video(s.key, s.urls);
              break;
            case "audio":
              this.audio(s.key, s.urls, s.autoDecode);
              break;
            case "audiosprite":
              this.audiosprite(s.key, s.urls, s.jsonURL, s.jsonData, s.autoDecode);
              break;
            case "tilemap":
              this.tilemap(s.key, s.url, s.data, a.Tilemap[s.format]);
              break;
            case "physics":
              this.physics(s.key, s.url, s.data, a.Loader[s.format]);
              break;
            case "bitmapFont":
              this.bitmapFont(s.key, s.textureURL, s.atlasURL, s.atlasData, s.xSpacing, s.ySpacing);
              break;
            case "atlasJSONArray":
              this.atlasJSONArray(s.key, s.textureURL, s.atlasURL, s.atlasData);
              break;
            case "atlasJSONHash":
              this.atlasJSONHash(s.key, s.textureURL, s.atlasURL, s.atlasData);
              break;
            case "atlasXML":
              this.atlasXML(s.key, s.textureURL, s.atlasURL, s.atlasData);
              break;
            case "atlas":
              this.atlas(s.key, s.textureURL, s.atlasURL, s.atlasData, a.Loader[s.format]);
              break;
            case "shader":
              this.shader(s.key, s.url, s.overwrite);
          }
        }
      }
    },
    transformUrl: function (t, e) {
      return !!t && (t.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/) ? t : this.baseURL + e.path + t);
    },
    loadFile: function (t) {
      switch (t.type) {
        case "packfile":
          this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.fileComplete);
          break;
        case "image":
        case "spritesheet":
        case "textureatlas":
        case "bitmapfont":
          this.loadImageTag(t);
          break;
        case "audio":
          t.url = this.getAudioURL(t.url);
          if (t.url) {
            if (this.game.sound.usingWebAudio) {
              this.xhrLoad(t, this.transformUrl(t.url, t), "arraybuffer", this.fileComplete);
            } else if (this.game.sound.usingAudioTag) {
              this.loadAudioTag(t);
            }
          } else {
            this.fileError(t, null, "No supported audio URL specified or device does not have audio playback support");
          }
          break;
        case "video":
          t.url = this.getVideoURL(t.url);
          if (t.url) {
            if (t.asBlob) {
              this.xhrLoad(t, this.transformUrl(t.url, t), "blob", this.fileComplete);
            } else {
              this.loadVideoTag(t);
            }
          } else {
            this.fileError(t, null, "No supported video URL specified or device does not have video playback support");
          }
          break;
        case "json":
          this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.jsonLoadComplete);
          break;
        case "xml":
          this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.xmlLoadComplete);
          break;
        case "tilemap":
          if (t.format === a.Tilemap.TILED_JSON) {
            this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.jsonLoadComplete);
          } else if (t.format === a.Tilemap.CSV) {
            this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.csvLoadComplete);
          } else {
            this.asyncComplete(t, "invalid Tilemap format: " + t.format);
          }
          break;
        case "text":
        case "script":
        case "shader":
        case "physics":
          this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.fileComplete);
          break;
        case "binary":
          this.xhrLoad(t, this.transformUrl(t.url, t), "arraybuffer", this.fileComplete);
      }
    },
    loadImageTag: function (t) {
      var e = this;
      t.data = new Image();
      t.data.name = t.key;
      if (this.crossOrigin) {
        t.data.crossOrigin = this.crossOrigin;
      }
      t.data.onload = function () {
        if (t.data.onload) {
          t.data.onload = null;
          t.data.onerror = null;
          e.fileComplete(t);
        }
      };
      t.data.onerror = function () {
        if (t.data.onload) {
          t.data.onload = null;
          t.data.onerror = null;
          e.fileError(t);
        }
      };
      t.data.src = this.transformUrl(t.url, t);
      if (t.data.complete && t.data.width && t.data.height) {
        t.data.onload = null;
        t.data.onerror = null;
        this.fileComplete(t);
      }
    },
    loadVideoTag: function (t) {
      var e = this;
      t.data = document.createElement("video");
      t.data.name = t.key;
      t.data.controls = false;
      t.data.autoplay = false;
      function i() {
        t.data.removeEventListener(t.loadEvent, i, false);
        t.data.onerror = null;
        t.data.canplay = true;
        a.GAMES[e.game.id].load.fileComplete(t);
      }
      t.data.onerror = function () {
        t.data.removeEventListener(t.loadEvent, i, false);
        t.data.onerror = null;
        t.data.canplay = false;
        e.fileError(t);
      };
      t.data.addEventListener(t.loadEvent, i, false);
      t.data.src = this.transformUrl(t.url, t);
      t.data.load();
    },
    loadAudioTag: function (t) {
      var e = this;
      if (this.game.sound.touchLocked) {
        t.data = new Audio();
        t.data.name = t.key;
        t.data.preload = "auto";
        t.data.src = this.transformUrl(t.url, t);
        this.fileComplete(t);
      } else {
        t.data = new Audio();
        t.data.name = t.key;
        function i() {
          t.data.removeEventListener("canplaythrough", i, false);
          t.data.onerror = null;
          e.fileComplete(t);
        }
        t.data.onerror = function () {
          t.data.removeEventListener("canplaythrough", i, false);
          t.data.onerror = null;
          e.fileError(t);
        };
        t.data.preload = "auto";
        t.data.src = this.transformUrl(t.url, t);
        t.data.addEventListener("canplaythrough", i, false);
        t.data.load();
      }
    },
    xhrLoad: function (t, e, i, s, n) {
      if (this.useXDomainRequest && window.XDomainRequest) {
        this.xhrLoadWithXDR(t, e, i, s, n);
        return;
      }
      var a = new XMLHttpRequest();
      a.open("GET", e, true);
      a.responseType = i;
      if (this.headers.requestedWith !== false) {
        a.setRequestHeader("X-Requested-With", this.headers.requestedWith);
      }
      if (this.headers[t.type]) {
        a.setRequestHeader("Accept", this.headers[t.type]);
      }
      n = n || this.fileError;
      var o = this;
      a.onload = function () {
        try {
          if (a.readyState === 4 && a.status >= 400 && a.status <= 599) {
            return n.call(o, t, a);
          } else {
            return s.call(o, t, a);
          }
        } catch (e) {
          if (o.hasLoaded) {
            window.console;
          } else {
            o.asyncComplete(t, e.message || "Exception");
          }
        }
      };
      a.onerror = function () {
        try {
          return n.call(o, t, a);
        } catch (e) {
          if (o.hasLoaded) {
            window.console;
          } else {
            o.asyncComplete(t, e.message || "Exception");
          }
        }
      };
      t.requestObject = a;
      t.requestUrl = e;
      a.send();
    },
    xhrLoadWithXDR: function (t, e, i, s, n) {
      if (!this._warnedAboutXDomainRequest && (!this.game.device.ie || !!(this.game.device.ieVersion >= 10))) {
        this._warnedAboutXDomainRequest = true;
      }
      var a = new window.XDomainRequest();
      a.open("GET", e, true);
      a.responseType = i;
      a.timeout = 3000;
      n = n || this.fileError;
      var o = this;
      a.onerror = function () {
        try {
          return n.call(o, t, a);
        } catch (e) {
          o.asyncComplete(t, e.message || "Exception");
        }
      };
      a.ontimeout = function () {
        try {
          return n.call(o, t, a);
        } catch (e) {
          o.asyncComplete(t, e.message || "Exception");
        }
      };
      a.onprogress = function () {};
      a.onload = function () {
        try {
          if (a.readyState === 4 && a.status >= 400 && a.status <= 599) {
            return n.call(o, t, a);
          } else {
            return s.call(o, t, a);
          }
        } catch (e) {
          o.asyncComplete(t, e.message || "Exception");
        }
      };
      t.requestObject = a;
      t.requestUrl = e;
      setTimeout(function () {
        a.send();
      }, 0);
    },
    getVideoURL: function (t) {
      for (var e = 0; e < t.length; e++) {
        var i = t[e];
        var s;
        if (i.uri) {
          s = i.type;
          i = i.uri;
          if (this.game.device.canPlayVideo(s)) {
            return i;
          }
        } else {
          if (i.indexOf("blob:") === 0 || i.indexOf("data:") === 0) {
            return i;
          }
          if (i.indexOf("?") >= 0) {
            i = i.substr(0, i.indexOf("?"));
          }
          s = i.substr((Math.max(0, i.lastIndexOf(".")) || Infinity) + 1).toLowerCase();
          if (this.game.device.canPlayVideo(s)) {
            return t[e];
          }
        }
      }
      return null;
    },
    getAudioURL: function (t) {
      if (this.game.sound.noAudio) {
        return null;
      }
      for (var e = 0; e < t.length; e++) {
        var i = t[e];
        var s;
        if (i.uri) {
          s = i.type;
          i = i.uri;
          if (this.game.device.canPlayAudio(s)) {
            return i;
          }
        } else {
          if (i.indexOf("blob:") === 0 || i.indexOf("data:") === 0) {
            return i;
          }
          if (i.indexOf("?") >= 0) {
            i = i.substr(0, i.indexOf("?"));
          }
          s = i.substr((Math.max(0, i.lastIndexOf(".")) || Infinity) + 1).toLowerCase();
          if (this.game.device.canPlayAudio(s)) {
            return t[e];
          }
        }
      }
      return null;
    },
    fileError: function (t, e, i) {
      var s = t.requestUrl || this.transformUrl(t.url, t);
      var n = "error loading asset from URL " + s;
      if (!i && e) {
        i = e.status;
      }
      if (i) {
        n = n + " (" + i + ")";
      }
      this.asyncComplete(t, n);
    },
    fileComplete: function (t, e) {
      var i = true;
      switch (t.type) {
        case "packfile":
          var s = JSON.parse(e.responseText);
          t.data = s || {};
          break;
        case "image":
          this.cache.addImage(t.key, t.url, t.data);
          break;
        case "spritesheet":
          this.cache.addSpriteSheet(t.key, t.url, t.data, t.frameWidth, t.frameHeight, t.frameMax, t.margin, t.spacing);
          break;
        case "textureatlas":
          if (t.atlasURL == null) {
            this.cache.addTextureAtlas(t.key, t.url, t.data, t.atlasData, t.format);
          } else {
            i = false;
            if (t.format === a.Loader.TEXTURE_ATLAS_JSON_ARRAY || t.format === a.Loader.TEXTURE_ATLAS_JSON_HASH || t.format === a.Loader.TEXTURE_ATLAS_JSON_PYXEL) {
              this.xhrLoad(t, this.transformUrl(t.atlasURL, t), "text", this.jsonLoadComplete);
            } else {
              if (t.format !== a.Loader.TEXTURE_ATLAS_XML_STARLING) {
                throw new Error("Phaser.Loader. Invalid Texture Atlas format: " + t.format);
              }
              this.xhrLoad(t, this.transformUrl(t.atlasURL, t), "text", this.xmlLoadComplete);
            }
          }
          break;
        case "bitmapfont":
          if (t.atlasURL) {
            i = false;
            this.xhrLoad(t, this.transformUrl(t.atlasURL, t), "text", function (t, e) {
              var i;
              try {
                i = JSON.parse(e.responseText);
              } catch (t) {}
              if (i) {
                t.atlasType = "json";
                this.jsonLoadComplete(t, e);
              } else {
                t.atlasType = "xml";
                this.xmlLoadComplete(t, e);
              }
            });
          } else {
            this.cache.addBitmapFont(t.key, t.url, t.data, t.atlasData, t.atlasType, t.xSpacing, t.ySpacing);
          }
          break;
        case "video":
          if (t.asBlob) {
            try {
              t.data = e.response;
            } catch (e) {
              throw new Error("Phaser.Loader. Unable to parse video file as Blob: " + t.key);
            }
          }
          this.cache.addVideo(t.key, t.url, t.data, t.asBlob);
          break;
        case "audio":
          if (this.game.sound.usingWebAudio) {
            t.data = e.response;
            this.cache.addSound(t.key, t.url, t.data, true, false);
            if (t.autoDecode) {
              this.game.sound.decode(t.key);
            }
          } else {
            this.cache.addSound(t.key, t.url, t.data, false, true);
          }
          break;
        case "text":
          t.data = e.responseText;
          this.cache.addText(t.key, t.url, t.data);
          break;
        case "shader":
          t.data = e.responseText;
          this.cache.addShader(t.key, t.url, t.data);
          break;
        case "physics":
          var s = JSON.parse(e.responseText);
          this.cache.addPhysicsData(t.key, t.url, s, t.format);
          break;
        case "script":
          t.data = document.createElement("script");
          t.data.language = "javascript";
          t.data.type = "text/javascript";
          t.data.defer = false;
          t.data.text = e.responseText;
          document.head.appendChild(t.data);
          if (t.callback) {
            t.data = t.callback.call(t.callbackContext, t.key, e.responseText);
          }
          break;
        case "binary":
          if (t.callback) {
            t.data = t.callback.call(t.callbackContext, t.key, e.response);
          } else {
            t.data = e.response;
          }
          this.cache.addBinary(t.key, t.data);
      }
      if (i) {
        this.asyncComplete(t);
      }
    },
    jsonLoadComplete: function (t, e) {
      var i = JSON.parse(e.responseText);
      if (t.type === "tilemap") {
        this.cache.addTilemap(t.key, t.url, i, t.format);
      } else if (t.type === "bitmapfont") {
        this.cache.addBitmapFont(t.key, t.url, t.data, i, t.atlasType, t.xSpacing, t.ySpacing);
      } else if (t.type === "json") {
        this.cache.addJSON(t.key, t.url, i);
      } else {
        this.cache.addTextureAtlas(t.key, t.url, t.data, i, t.format);
      }
      this.asyncComplete(t);
    },
    csvLoadComplete: function (t, e) {
      var i = e.responseText;
      this.cache.addTilemap(t.key, t.url, i, t.format);
      this.asyncComplete(t);
    },
    xmlLoadComplete: function (t, e) {
      var i = e.responseText;
      var s = this.parseXml(i);
      if (!s) {
        var n = e.responseType || e.contentType;
        this.asyncComplete(t, "invalid XML");
        return;
      }
      if (t.type === "bitmapfont") {
        this.cache.addBitmapFont(t.key, t.url, t.data, s, t.atlasType, t.xSpacing, t.ySpacing);
      } else if (t.type === "textureatlas") {
        this.cache.addTextureAtlas(t.key, t.url, t.data, s, t.format);
      } else if (t.type === "xml") {
        this.cache.addXML(t.key, t.url, s);
      }
      this.asyncComplete(t);
    },
    parseXml: function (t) {
      var e;
      try {
        if (window.DOMParser) {
          var i = new DOMParser();
          e = i.parseFromString(t, "text/xml");
        } else {
          e = new ActiveXObject("Microsoft.XMLDOM");
          e.async = "false";
          e.loadXML(t);
        }
      } catch (t) {
        e = null;
      }
      if (e && e.documentElement && !e.getElementsByTagName("parsererror").length) {
        return e;
      } else {
        return null;
      }
    },
    updateProgress: function () {
      if (this.preloadSprite) {
        if (this.preloadSprite.direction === 0) {
          this.preloadSprite.rect.width = Math.floor(this.preloadSprite.width / 100 * this.progress);
        } else {
          this.preloadSprite.rect.height = Math.floor(this.preloadSprite.height / 100 * this.progress);
        }
        if (this.preloadSprite.sprite) {
          this.preloadSprite.sprite.updateCrop();
        } else {
          this.preloadSprite = null;
        }
      }
    },
    totalLoadedFiles: function () {
      return this._loadedFileCount;
    },
    totalQueuedFiles: function () {
      return this._totalFileCount - this._loadedFileCount;
    },
    totalLoadedPacks: function () {
      return this._totalPackCount;
    },
    totalQueuedPacks: function () {
      return this._totalPackCount - this._loadedPackCount;
    }
  };
  Object.defineProperty(a.Loader.prototype, "progressFloat", {
    get: function () {
      var t = this._loadedFileCount / this._totalFileCount * 100;
      return a.Math.clamp(t || 0, 0, 100);
    }
  });
  Object.defineProperty(a.Loader.prototype, "progress", {
    get: function () {
      return Math.round(this.progressFloat);
    }
  });
  a.Loader.prototype.constructor = a.Loader;
  a.LoaderParser = {
    bitmapFont: function (t, e, i, s) {
      return this.xmlBitmapFont(t, e, i, s);
    },
    xmlBitmapFont: function (t, e, i, s) {
      var n = {};
      var a = t.getElementsByTagName("info")[0];
      var o = t.getElementsByTagName("common")[0];
      n.font = a.getAttribute("face");
      n.size = parseInt(a.getAttribute("size"), 10);
      n.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) + s;
      n.chars = {};
      for (var r = t.getElementsByTagName("char"), h = 0; h < r.length; h++) {
        var l = parseInt(r[h].getAttribute("id"), 10);
        n.chars[l] = {
          x: parseInt(r[h].getAttribute("x"), 10),
          y: parseInt(r[h].getAttribute("y"), 10),
          width: parseInt(r[h].getAttribute("width"), 10),
          height: parseInt(r[h].getAttribute("height"), 10),
          xOffset: parseInt(r[h].getAttribute("xoffset"), 10),
          yOffset: parseInt(r[h].getAttribute("yoffset"), 10),
          xAdvance: parseInt(r[h].getAttribute("xadvance"), 10) + i,
          kerning: {}
        };
      }
      var c = t.getElementsByTagName("kerning");
      for (h = 0; h < c.length; h++) {
        var u = parseInt(c[h].getAttribute("first"), 10);
        var d = parseInt(c[h].getAttribute("second"), 10);
        var p = parseInt(c[h].getAttribute("amount"), 10);
        n.chars[d].kerning[u] = p;
      }
      return this.finalizeBitmapFont(e, n);
    },
    jsonBitmapFont: function (t, e, i, s) {
      var n = {
        font: t.font.info._face,
        size: parseInt(t.font.info._size, 10),
        lineHeight: parseInt(t.font.common._lineHeight, 10) + s,
        chars: {}
      };
      t.font.chars.char.forEach(function t(e) {
        var s = parseInt(e._id, 10);
        n.chars[s] = {
          x: parseInt(e._x, 10),
          y: parseInt(e._y, 10),
          width: parseInt(e._width, 10),
          height: parseInt(e._height, 10),
          xOffset: parseInt(e._xoffset, 10),
          yOffset: parseInt(e._yoffset, 10),
          xAdvance: parseInt(e._xadvance, 10) + i,
          kerning: {}
        };
      });
      if (t.font.kernings && t.font.kernings.kerning) {
        t.font.kernings.kerning.forEach(function t(e) {
          n.chars[e._second].kerning[e._first] = parseInt(e._amount, 10);
        });
      }
      return this.finalizeBitmapFont(e, n);
    },
    finalizeBitmapFont: function (t, e) {
      Object.keys(e.chars).forEach(function i(s) {
        var n = e.chars[s];
        n.texture = new PIXI.Texture(t, new a.Rectangle(n.x, n.y, n.width, n.height));
      });
      return e;
    }
  };
  a.AudioSprite = function (t, e) {
    this.game = t;
    this.key = e;
    this.config = this.game.cache.getJSON(e + "-audioatlas");
    this.autoplayKey = null;
    this.autoplay = false;
    this.sounds = {};
    for (var i in this.config.spritemap) {
      var s = this.config.spritemap[i];
      var n = this.game.add.sound(this.key);
      n.addMarker(i, s.start, s.end - s.start, null, s.loop);
      this.sounds[i] = n;
    }
    if (this.config.autoplay) {
      this.autoplayKey = this.config.autoplay;
      this.play(this.autoplayKey);
      this.autoplay = this.sounds[this.autoplayKey];
    }
  };
  a.AudioSprite.prototype = {
    play: function (t, e = 1) {
      return this.sounds[t].play(t, null, e);
    },
    stop: function (t) {
      if (t) {
        this.sounds[t].stop();
      } else {
        for (var e in this.sounds) {
          this.sounds[e].stop();
        }
      }
    },
    get: function (t) {
      return this.sounds[t];
    }
  };
  a.AudioSprite.prototype.constructor = a.AudioSprite;
  a.Sound = function (t, e, i = 1, s = false, n = t.sound.connectToMaster) {
    this.game = t;
    this.name = e;
    this.key = e;
    this.loop = s;
    this.markers = {};
    this.context = null;
    this.autoplay = false;
    this.totalDuration = 0;
    this.startTime = 0;
    this.currentTime = 0;
    this.duration = 0;
    this.durationMS = 0;
    this.position = 0;
    this.stopTime = 0;
    this.paused = false;
    this.pausedPosition = 0;
    this.pausedTime = 0;
    this.isPlaying = false;
    this.currentMarker = "";
    this.fadeTween = null;
    this.pendingPlayback = false;
    this.override = false;
    this.allowMultiple = false;
    this.usingWebAudio = this.game.sound.usingWebAudio;
    this.usingAudioTag = this.game.sound.usingAudioTag;
    this.externalNode = null;
    this.masterGainNode = null;
    this.gainNode = null;
    this._sound = null;
    if (this.usingWebAudio) {
      this.context = this.game.sound.context;
      this.masterGainNode = this.game.sound.masterGain;
      if (this.context.createGain === undefined) {
        this.gainNode = this.context.createGainNode();
      } else {
        this.gainNode = this.context.createGain();
      }
      this.gainNode.gain.value = i * this.game.sound.volume;
      if (n) {
        this.gainNode.connect(this.masterGainNode);
      }
    } else if (this.usingAudioTag) {
      if (this.game.cache.getSound(e) && this.game.cache.isSoundReady(e)) {
        this._sound = this.game.cache.getSoundData(e);
        this.totalDuration = 0;
        if (this._sound.duration) {
          this.totalDuration = this._sound.duration;
        }
      } else {
        this.game.cache.onSoundUnlock.add(this.soundHasUnlocked, this);
      }
    }
    this.onDecoded = new a.Signal();
    this.onPlay = new a.Signal();
    this.onPause = new a.Signal();
    this.onResume = new a.Signal();
    this.onLoop = new a.Signal();
    this.onStop = new a.Signal();
    this.onMute = new a.Signal();
    this.onMarkerComplete = new a.Signal();
    this.onFadeComplete = new a.Signal();
    this._volume = i;
    this._buffer = null;
    this._muted = false;
    this._tempMarker = 0;
    this._tempPosition = 0;
    this._tempVolume = 0;
    this._tempPause = 0;
    this._muteVolume = 0;
    this._tempLoop = 0;
    this._paused = false;
    this._onDecodedEventDispatched = false;
  };
  a.Sound.prototype = {
    soundHasUnlocked: function (t) {
      if (t === this.key) {
        this._sound = this.game.cache.getSoundData(this.key);
        this.totalDuration = this._sound.duration;
      }
    },
    addMarker: function (t, e, i, s, n) {
      if (i === undefined || i === null) {
        i = 1;
      }
      if (s === undefined || s === null) {
        s = 1;
      }
      if (n === undefined) {
        n = false;
      }
      this.markers[t] = {
        name: t,
        start: e,
        stop: e + i,
        volume: s,
        duration: i,
        durationMS: i * 1000,
        loop: n
      };
    },
    removeMarker: function (t) {
      delete this.markers[t];
    },
    onEndedHandler: function () {
      this._sound.onended = null;
      this.isPlaying = false;
      this.currentTime = this.durationMS;
      this.stop();
    },
    update: function () {
      if (!this.game.cache.checkSoundKey(this.key)) {
        this.destroy();
        return;
      }
      if (this.isDecoded && !this._onDecodedEventDispatched) {
        this.onDecoded.dispatch(this);
        this._onDecodedEventDispatched = true;
      }
      if (this.pendingPlayback && this.game.cache.isSoundReady(this.key)) {
        this.pendingPlayback = false;
        this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop);
      }
      if (this.isPlaying) {
        this.currentTime = this.game.time.time - this.startTime;
        if (this.currentTime >= this.durationMS) {
          if (this.usingWebAudio) {
            if (this.loop) {
              this.onLoop.dispatch(this);
              this.isPlaying = false;
              if (this.currentMarker === "") {
                this.currentTime = 0;
                this.startTime = this.game.time.time;
                this.isPlaying = true;
              } else {
                this.onMarkerComplete.dispatch(this.currentMarker, this);
                this.play(this.currentMarker, 0, this.volume, true, true);
              }
            } else if (this.currentMarker !== "") {
              this.stop();
            }
          } else if (this.loop) {
            this.onLoop.dispatch(this);
            if (this.currentMarker === "") {
              this.currentTime = 0;
              this.startTime = this.game.time.time;
            }
            this.isPlaying = false;
            this.play(this.currentMarker, 0, this.volume, true, true);
          } else {
            this.stop();
          }
        }
      }
    },
    loopFull: function (t) {
      return this.play(null, 0, t, true);
    },
    play: function (t, e, i, s, n) {
      if (t === undefined || t === false || t === null) {
        t = "";
      }
      if (n === undefined) {
        n = true;
      }
      if (this.isPlaying && !this.allowMultiple && !n && !this.override) {
        return this;
      }
      if (this._sound && this.isPlaying && !this.allowMultiple && (this.override || n)) {
        if (this.usingWebAudio) {
          if (this._sound.stop === undefined) {
            this._sound.noteOff(0);
          } else {
            try {
              this._sound.stop(0);
            } catch (t) {}
          }
          if (this.externalNode) {
            this._sound.disconnect(this.externalNode);
          } else if (this.gainNode) {
            this._sound.disconnect(this.gainNode);
          }
        } else if (this.usingAudioTag) {
          this._sound.pause();
          this._sound.currentTime = 0;
        }
        this.isPlaying = false;
      }
      if (t === "" && Object.keys(this.markers).length > 0) {
        return this;
      }
      if (t !== "") {
        if (!this.markers[t]) {
          return this;
        }
        this.currentMarker = t;
        this.position = this.markers[t].start;
        this.volume = this.markers[t].volume;
        this.loop = this.markers[t].loop;
        this.duration = this.markers[t].duration;
        this.durationMS = this.markers[t].durationMS;
        if (i !== undefined) {
          this.volume = i;
        }
        if (s !== undefined) {
          this.loop = s;
        }
        this._tempMarker = t;
        this._tempPosition = this.position;
        this._tempVolume = this.volume;
        this._tempLoop = this.loop;
      } else {
        e = e || 0;
        if (i === undefined) {
          i = this._volume;
        }
        if (s === undefined) {
          s = this.loop;
        }
        this.position = Math.max(0, e);
        this.volume = i;
        this.loop = s;
        this.duration = 0;
        this.durationMS = 0;
        this._tempMarker = t;
        this._tempPosition = e;
        this._tempVolume = i;
        this._tempLoop = s;
      }
      if (this.usingWebAudio) {
        if (this.game.cache.isSoundDecoded(this.key)) {
          this._sound = this.context.createBufferSource();
          if (this.externalNode) {
            this._sound.connect(this.externalNode);
          } else {
            this._sound.connect(this.gainNode);
          }
          this._buffer = this.game.cache.getSoundData(this.key);
          this._sound.buffer = this._buffer;
          if (this.loop && t === "") {
            this._sound.loop = true;
          }
          if (!this.loop && t === "") {
            this._sound.onended = this.onEndedHandler.bind(this);
          }
          this.totalDuration = this._sound.buffer.duration;
          if (this.duration === 0) {
            this.duration = this.totalDuration;
            this.durationMS = Math.ceil(this.totalDuration * 1000);
          }
          if (this._sound.start === undefined) {
            this._sound.noteGrainOn(0, this.position, this.duration);
          } else if (this.loop && t === "") {
            this._sound.start(0, 0);
          } else {
            this._sound.start(0, this.position, this.duration);
          }
          this.isPlaying = true;
          this.startTime = this.game.time.time;
          this.currentTime = 0;
          this.stopTime = this.startTime + this.durationMS;
          this.onPlay.dispatch(this);
        } else {
          this.pendingPlayback = true;
          if (this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).isDecoding === false) {
            this.game.sound.decode(this.key, this);
          }
        }
      } else if (this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).locked) {
        this.game.cache.reloadSound(this.key);
        this.pendingPlayback = true;
      } else if (this._sound && (this.game.device.cocoonJS || this._sound.readyState === 4)) {
        this._sound.play();
        this.totalDuration = this._sound.duration;
        if (this.duration === 0) {
          this.duration = this.totalDuration;
          this.durationMS = this.totalDuration * 1000;
        }
        this._sound.currentTime = this.position;
        this._sound.muted = this._muted;
        if (this._muted || this.game.sound.mute) {
          this._sound.volume = 0;
        } else {
          this._sound.volume = this._volume;
        }
        this.isPlaying = true;
        this.startTime = this.game.time.time;
        this.currentTime = 0;
        this.stopTime = this.startTime + this.durationMS;
        this.onPlay.dispatch(this);
      } else {
        this.pendingPlayback = true;
      }
      return this;
    },
    restart: function (t, e, i, s) {
      t = t || "";
      e = e || 0;
      i = i || 1;
      if (s === undefined) {
        s = false;
      }
      this.play(t, e, i, s, true);
    },
    pause: function () {
      if (this.isPlaying && this._sound) {
        this.paused = true;
        this.pausedPosition = this.currentTime;
        this.pausedTime = this.game.time.time;
        this._tempPause = this._sound.currentTime;
        this.onPause.dispatch(this);
        this.stop();
      }
    },
    resume: function () {
      if (this.paused && this._sound) {
        if (this.usingWebAudio) {
          var t = Math.max(0, this.position + this.pausedPosition / 1000);
          this._sound = this.context.createBufferSource();
          this._sound.buffer = this._buffer;
          if (this.externalNode) {
            this._sound.connect(this.externalNode);
          } else {
            this._sound.connect(this.gainNode);
          }
          if (this.loop) {
            this._sound.loop = true;
          }
          if (!this.loop && this.currentMarker === "") {
            this._sound.onended = this.onEndedHandler.bind(this);
          }
          var e = this.duration - this.pausedPosition / 1000;
          if (this._sound.start === undefined) {
            this._sound.noteGrainOn(0, t, e);
          } else if (this.loop && this.game.device.chrome) {
            if (this.game.device.chromeVersion === 42) {
              this._sound.start(0);
            } else {
              this._sound.start(0, t);
            }
          } else {
            this._sound.start(0, t, e);
          }
        } else {
          this._sound.currentTime = this._tempPause;
          this._sound.play();
        }
        this.isPlaying = true;
        this.paused = false;
        this.startTime += this.game.time.time - this.pausedTime;
        this.onResume.dispatch(this);
      }
    },
    stop: function () {
      if (this.isPlaying && this._sound) {
        if (this.usingWebAudio) {
          if (this._sound.stop === undefined) {
            this._sound.noteOff(0);
          } else {
            try {
              this._sound.stop(0);
            } catch (t) {}
          }
          if (this.externalNode) {
            this._sound.disconnect(this.externalNode);
          } else if (this.gainNode) {
            this._sound.disconnect(this.gainNode);
          }
        } else if (this.usingAudioTag) {
          this._sound.pause();
          this._sound.currentTime = 0;
        }
      }
      this.pendingPlayback = false;
      this.isPlaying = false;
      if (!this.paused) {
        var t = this.currentMarker;
        if (this.currentMarker !== "") {
          this.onMarkerComplete.dispatch(this.currentMarker, this);
        }
        this.currentMarker = "";
        if (this.fadeTween !== null) {
          this.fadeTween.stop();
        }
        this.onStop.dispatch(this, t);
      }
    },
    fadeIn: function (t, e = false, i = this.currentMarker) {
      if (!this.paused) {
        this.play(i, 0, 0, e);
        this.fadeTo(t, 1);
      }
    },
    fadeOut: function (t) {
      this.fadeTo(t, 0);
    },
    fadeTo: function (t, e) {
      if (this.isPlaying && !this.paused && e !== this.volume) {
        if (t === undefined) {
          t = 1000;
        }
        if (e !== undefined) {
          this.fadeTween = this.game.add.tween(this).to({
            volume: e
          }, t, a.Easing.Linear.None, true);
          this.fadeTween.onComplete.add(this.fadeComplete, this);
        }
      }
    },
    fadeComplete: function () {
      this.onFadeComplete.dispatch(this, this.volume);
      if (this.volume === 0) {
        this.stop();
      }
    },
    updateGlobalVolume: function (t) {
      if (this.usingAudioTag && this._sound) {
        this._sound.volume = t * this._volume;
      }
    },
    destroy: function (t = true) {
      this.stop();
      if (t) {
        this.game.sound.remove(this);
      } else {
        this.markers = {};
        this.context = null;
        this._buffer = null;
        this.externalNode = null;
        this.onDecoded.dispose();
        this.onPlay.dispose();
        this.onPause.dispose();
        this.onResume.dispose();
        this.onLoop.dispose();
        this.onStop.dispose();
        this.onMute.dispose();
        this.onMarkerComplete.dispose();
      }
    }
  };
  a.Sound.prototype.constructor = a.Sound;
  Object.defineProperty(a.Sound.prototype, "isDecoding", {
    get: function () {
      return this.game.cache.getSound(this.key).isDecoding;
    }
  });
  Object.defineProperty(a.Sound.prototype, "isDecoded", {
    get: function () {
      return this.game.cache.isSoundDecoded(this.key);
    }
  });
  Object.defineProperty(a.Sound.prototype, "mute", {
    get: function () {
      return this._muted || this.game.sound.mute;
    },
    set: function (t) {
      if ((t = t || false) !== this._muted) {
        if (t) {
          this._muted = true;
          this._muteVolume = this._tempVolume;
          if (this.usingWebAudio) {
            this.gainNode.gain.value = 0;
          } else if (this.usingAudioTag && this._sound) {
            this._sound.volume = 0;
          }
        } else {
          this._muted = false;
          if (this.usingWebAudio) {
            this.gainNode.gain.value = this._muteVolume;
          } else if (this.usingAudioTag && this._sound) {
            this._sound.volume = this._muteVolume;
          }
        }
        this.onMute.dispatch(this);
      }
    }
  });
  Object.defineProperty(a.Sound.prototype, "volume", {
    get: function () {
      return this._volume;
    },
    set: function (t) {
      if (this.game.device.firefox && this.usingAudioTag) {
        t = this.game.math.clamp(t, 0, 1);
      }
      if (this._muted) {
        this._muteVolume = t;
        return;
      }
      this._tempVolume = t;
      this._volume = t;
      if (this.usingWebAudio) {
        this.gainNode.gain.value = t;
      } else if (this.usingAudioTag && this._sound) {
        this._sound.volume = t;
      }
    }
  });
  a.SoundManager = function (t) {
    this.game = t;
    this.onSoundDecode = new a.Signal();
    this.onVolumeChange = new a.Signal();
    this.onMute = new a.Signal();
    this.onUnMute = new a.Signal();
    this.context = null;
    this.usingWebAudio = false;
    this.usingAudioTag = false;
    this.noAudio = false;
    this.connectToMaster = true;
    this.touchLocked = false;
    this.channels = 32;
    this.muteOnPause = true;
    this._codeMuted = false;
    this._muted = false;
    this._unlockSource = null;
    this._volume = 1;
    this._sounds = [];
    this._watchList = new a.ArraySet();
    this._watching = false;
    this._watchCallback = null;
    this._watchContext = null;
  };
  a.SoundManager.prototype = {
    boot: function () {
      if (this.game.device.iOS && this.game.device.webAudio === false) {
        this.channels = 1;
      }
      if (window.PhaserGlobal) {
        if (window.PhaserGlobal.disableAudio === true) {
          this.noAudio = true;
          this.touchLocked = false;
          return;
        }
        if (window.PhaserGlobal.disableWebAudio === true) {
          this.usingAudioTag = true;
          this.touchLocked = false;
          return;
        }
      }
      if (window.PhaserGlobal && window.PhaserGlobal.audioContext) {
        this.context = window.PhaserGlobal.audioContext;
      } else if (window.AudioContext) {
        try {
          this.context = new window.AudioContext();
        } catch (t) {
          this.context = null;
          this.usingWebAudio = false;
          this.touchLocked = false;
        }
      } else if (window.webkitAudioContext) {
        try {
          this.context = new window.webkitAudioContext();
        } catch (t) {
          this.context = null;
          this.usingWebAudio = false;
          this.touchLocked = false;
        }
      }
      if (this.context === null) {
        if (window.Audio === undefined) {
          this.noAudio = true;
          return;
        }
        this.usingAudioTag = true;
      } else {
        this.usingWebAudio = true;
        if (this.context.createGain === undefined) {
          this.masterGain = this.context.createGainNode();
        } else {
          this.masterGain = this.context.createGain();
        }
        this.masterGain.gain.value = 1;
        this.masterGain.connect(this.context.destination);
      }
      if (!this.noAudio) {
        if (!this.game.device.cocoonJS && (this.game.device.android || this.game.device.iOS || window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock)) {
          this.setTouchLock();
        }
      }
    },
    setTouchLock: function () {
      if (!this.noAudio && (!window.PhaserGlobal || window.PhaserGlobal.disableAudio !== true)) {
        if (this.game.device.iOSVersion > 8 || this.game.device.chromeVersion >= 55) {
          this.game.input.touch.addTouchLockCallback(this.unlock, this, true);
        } else {
          this.game.input.touch.addTouchLockCallback(this.unlock, this);
        }
        this.touchLocked = true;
      }
    },
    unlock: function () {
      if (this.noAudio || !this.touchLocked || this._unlockSource !== null) {
        return true;
      }
      if (this.usingAudioTag) {
        this.touchLocked = false;
        this._unlockSource = null;
      } else if (this.usingWebAudio) {
        var t = this.context.createBuffer(1, 1, 22050);
        this._unlockSource = this.context.createBufferSource();
        this._unlockSource.buffer = t;
        this._unlockSource.connect(this.context.destination);
        if (this._unlockSource.start === undefined) {
          this._unlockSource.noteOn(0);
        } else {
          this._unlockSource.start(0);
        }
        if (this._unlockSource.context.state === "suspended") {
          this._unlockSource.context.resume();
        }
      }
      return true;
    },
    stopAll: function () {
      if (!this.noAudio) {
        for (var t = 0; t < this._sounds.length; t++) {
          if (this._sounds[t]) {
            this._sounds[t].stop();
          }
        }
      }
    },
    pauseAll: function () {
      if (!this.noAudio) {
        for (var t = 0; t < this._sounds.length; t++) {
          if (this._sounds[t]) {
            this._sounds[t].pause();
          }
        }
      }
    },
    resumeAll: function () {
      if (!this.noAudio) {
        for (var t = 0; t < this._sounds.length; t++) {
          if (this._sounds[t]) {
            this._sounds[t].resume();
          }
        }
      }
    },
    decode: function (t, e) {
      e = e || null;
      var i = this.game.cache.getSoundData(t);
      if (i && this.game.cache.isSoundDecoded(t) === false) {
        this.game.cache.updateSound(t, "isDecoding", true);
        var s = this;
        try {
          this.context.decodeAudioData(i, function (i) {
            if (i) {
              s.game.cache.decodedSound(t, i);
              s.onSoundDecode.dispatch(t, e);
            }
          });
        } catch (t) {}
      }
    },
    setDecodedCallback: function (t, e, i) {
      if (typeof t == "string") {
        t = [t];
      }
      this._watchList.reset();
      for (var s = 0; s < t.length; s++) {
        if (t[s] instanceof a.Sound) {
          if (!this.game.cache.isSoundDecoded(t[s].key)) {
            this._watchList.add(t[s].key);
          }
        } else if (!this.game.cache.isSoundDecoded(t[s])) {
          this._watchList.add(t[s]);
        }
      }
      if (this._watchList.total === 0) {
        this._watching = false;
        e.call(i);
      } else {
        this._watching = true;
        this._watchCallback = e;
        this._watchContext = i;
      }
    },
    update: function () {
      if (!this.noAudio) {
        if (!!this.touchLocked && this._unlockSource !== null && (this._unlockSource.playbackState === this._unlockSource.PLAYING_STATE || this._unlockSource.playbackState === this._unlockSource.FINISHED_STATE)) {
          this.touchLocked = false;
          this._unlockSource = null;
        }
        for (var t = 0; t < this._sounds.length; t++) {
          this._sounds[t].update();
        }
        if (this._watching) {
          for (var e = this._watchList.first; e;) {
            if (this.game.cache.isSoundDecoded(e)) {
              this._watchList.remove(e);
            }
            e = this._watchList.next;
          }
          if (this._watchList.total === 0) {
            this._watching = false;
            this._watchCallback.call(this._watchContext);
          }
        }
      }
    },
    add: function (t, e = 1, i = false, s = this.connectToMaster) {
      var n = new a.Sound(this.game, t, e, i, s);
      this._sounds.push(n);
      return n;
    },
    addSprite: function (t) {
      return new a.AudioSprite(this.game, t);
    },
    remove: function (t) {
      for (var e = this._sounds.length; e--;) {
        if (this._sounds[e] === t) {
          this._sounds[e].destroy(false);
          this._sounds.splice(e, 1);
          return true;
        }
      }
      return false;
    },
    removeByKey: function (t) {
      for (var e = this._sounds.length, i = 0; e--;) {
        if (this._sounds[e].key === t) {
          this._sounds[e].destroy(false);
          this._sounds.splice(e, 1);
          i++;
        }
      }
      return i;
    },
    play: function (t, e, i) {
      if (!this.noAudio) {
        var s = this.add(t, e, i);
        s.play();
        return s;
      }
    },
    setMute: function () {
      if (!this._muted) {
        this._muted = true;
        if (this.usingWebAudio) {
          this._muteVolume = this.masterGain.gain.value;
          this.masterGain.gain.value = 0;
        }
        for (var t = 0; t < this._sounds.length; t++) {
          if (this._sounds[t].usingAudioTag) {
            this._sounds[t].mute = true;
          }
        }
        this.onMute.dispatch();
      }
    },
    unsetMute: function () {
      if (this._muted && !this._codeMuted) {
        this._muted = false;
        if (this.usingWebAudio) {
          this.masterGain.gain.value = this._muteVolume;
        }
        for (var t = 0; t < this._sounds.length; t++) {
          if (this._sounds[t].usingAudioTag) {
            this._sounds[t].mute = false;
          }
        }
        this.onUnMute.dispatch();
      }
    },
    destroy: function () {
      this.stopAll();
      for (var t = 0; t < this._sounds.length; t++) {
        if (this._sounds[t]) {
          this._sounds[t].destroy();
        }
      }
      this._sounds = [];
      this.onSoundDecode.dispose();
      if (this.context) {
        if (window.PhaserGlobal) {
          window.PhaserGlobal.audioContext = this.context;
        } else if (this.context.close) {
          this.context.close();
        }
      }
    }
  };
  a.SoundManager.prototype.constructor = a.SoundManager;
  Object.defineProperty(a.SoundManager.prototype, "mute", {
    get: function () {
      return this._muted;
    },
    set: function (t) {
      if (t = t || false) {
        if (this._muted) {
          return;
        }
        this._codeMuted = true;
        this.setMute();
      } else {
        if (!this._muted) {
          return;
        }
        this._codeMuted = false;
        this.unsetMute();
      }
    }
  });
  Object.defineProperty(a.SoundManager.prototype, "volume", {
    get: function () {
      return this._volume;
    },
    set: function (t) {
      if (t < 0) {
        t = 0;
      } else if (t > 1) {
        t = 1;
      }
      if (this._volume !== t) {
        this._volume = t;
        if (this.usingWebAudio) {
          this.masterGain.gain.value = t;
        } else {
          for (var e = 0; e < this._sounds.length; e++) {
            if (this._sounds[e].usingAudioTag) {
              this._sounds[e].updateGlobalVolume(t);
            }
          }
        }
        this.onVolumeChange.dispatch(t);
      }
    }
  });
  a.ScaleManager = function (t, e, i) {
    this.game = t;
    this.dom = a.DOM;
    this.grid = null;
    this.width = 0;
    this.height = 0;
    this.minWidth = null;
    this.maxWidth = null;
    this.minHeight = null;
    this.maxHeight = null;
    this.offset = new a.Point();
    this.forceLandscape = false;
    this.forcePortrait = false;
    this.incorrectOrientation = false;
    this._pageAlignHorizontally = false;
    this._pageAlignVertically = false;
    this.onOrientationChange = new a.Signal();
    this.enterIncorrectOrientation = new a.Signal();
    this.leaveIncorrectOrientation = new a.Signal();
    this.hasPhaserSetFullScreen = false;
    this.fullScreenTarget = null;
    this._createdFullScreenTarget = null;
    this.onFullScreenInit = new a.Signal();
    this.onFullScreenChange = new a.Signal();
    this.onFullScreenError = new a.Signal();
    this.screenOrientation = this.dom.getScreenOrientation();
    this.scaleFactor = new a.Point(1, 1);
    this.scaleFactorInversed = new a.Point(1, 1);
    this.margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
    this.bounds = new a.Rectangle();
    this.aspectRatio = 0;
    this.sourceAspectRatio = 0;
    this.event = null;
    this.windowConstraints = {
      right: "layout",
      bottom: ""
    };
    this.compatibility = {
      supportsFullScreen: false,
      orientationFallback: null,
      noMargins: false,
      scrollTo: null,
      forceMinimumDocumentHeight: false,
      canExpandParent: true,
      clickTrampoline: ""
    };
    this._scaleMode = a.ScaleManager.NO_SCALE;
    this._fullScreenScaleMode = a.ScaleManager.NO_SCALE;
    this.parentIsWindow = false;
    this.parentNode = null;
    this.parentScaleFactor = new a.Point(1, 1);
    this.trackParentInterval = 2000;
    this.onSizeChange = new a.Signal();
    this.onResize = null;
    this.onResizeContext = null;
    this._pendingScaleMode = null;
    this._fullScreenRestore = null;
    this._gameSize = new a.Rectangle();
    this._userScaleFactor = new a.Point(1, 1);
    this._userScaleTrim = new a.Point(0, 0);
    this._lastUpdate = 0;
    this._updateThrottle = 0;
    this._updateThrottleReset = 100;
    this._parentBounds = new a.Rectangle();
    this._tempBounds = new a.Rectangle();
    this._lastReportedCanvasSize = new a.Rectangle();
    this._lastReportedGameSize = new a.Rectangle();
    this._booted = false;
    if (t.config) {
      this.parseConfig(t.config);
    }
    this.setupScale(e, i);
  };
  a.ScaleManager.EXACT_FIT = 0;
  a.ScaleManager.NO_SCALE = 1;
  a.ScaleManager.SHOW_ALL = 2;
  a.ScaleManager.RESIZE = 3;
  a.ScaleManager.USER_SCALE = 4;
  a.ScaleManager.prototype = {
    boot: function () {
      var t = this.compatibility;
      t.supportsFullScreen = this.game.device.fullscreen && !this.game.device.cocoonJS;
      if (!this.game.device.iPad && !this.game.device.webApp && !this.game.device.desktop) {
        if (this.game.device.android && !this.game.device.chrome) {
          t.scrollTo = new a.Point(0, 1);
        } else {
          t.scrollTo = new a.Point(0, 0);
        }
      }
      if (this.game.device.desktop) {
        t.orientationFallback = "screen";
        t.clickTrampoline = "when-not-mouse";
      } else {
        t.orientationFallback = "";
        t.clickTrampoline = "";
      }
      var e = this;
      this._orientationChange = function (t) {
        return e.orientationChange(t);
      };
      this._windowResize = function (t) {
        return e.windowResize(t);
      };
      window.addEventListener("orientationchange", this._orientationChange, false);
      window.addEventListener("resize", this._windowResize, false);
      if (this.compatibility.supportsFullScreen) {
        this._fullScreenChange = function (t) {
          return e.fullScreenChange(t);
        };
        this._fullScreenError = function (t) {
          return e.fullScreenError(t);
        };
        document.addEventListener("webkitfullscreenchange", this._fullScreenChange, false);
        document.addEventListener("mozfullscreenchange", this._fullScreenChange, false);
        document.addEventListener("MSFullscreenChange", this._fullScreenChange, false);
        document.addEventListener("fullscreenchange", this._fullScreenChange, false);
        document.addEventListener("webkitfullscreenerror", this._fullScreenError, false);
        document.addEventListener("mozfullscreenerror", this._fullScreenError, false);
        document.addEventListener("MSFullscreenError", this._fullScreenError, false);
        document.addEventListener("fullscreenerror", this._fullScreenError, false);
      }
      this.game.onResume.add(this._gameResumed, this);
      this.dom.getOffset(this.game.canvas, this.offset);
      this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height);
      this.setGameSize(this.game.width, this.game.height);
      this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback);
      if (a.FlexGrid) {
        this.grid = new a.FlexGrid(this, this.width, this.height);
      }
      this._booted = true;
      if (this._pendingScaleMode !== null) {
        this.scaleMode = this._pendingScaleMode;
        this._pendingScaleMode = null;
      }
    },
    parseConfig: function (t) {
      if (t.scaleMode !== undefined) {
        if (this._booted) {
          this.scaleMode = t.scaleMode;
        } else {
          this._pendingScaleMode = t.scaleMode;
        }
      }
      if (t.fullScreenScaleMode !== undefined) {
        this.fullScreenScaleMode = t.fullScreenScaleMode;
      }
      if (t.fullScreenTarget) {
        this.fullScreenTarget = t.fullScreenTarget;
      }
    },
    setupScale: function (t, e) {
      var i;
      var s = new a.Rectangle();
      if (this.game.parent !== "") {
        if (typeof this.game.parent == "string") {
          i = document.getElementById(this.game.parent);
        } else if (this.game.parent && this.game.parent.nodeType === 1) {
          i = this.game.parent;
        }
      }
      if (i) {
        this.parentNode = i;
        this.parentIsWindow = false;
        this.getParentBounds(this._parentBounds);
        s.width = this._parentBounds.width;
        s.height = this._parentBounds.height;
        this.offset.set(this._parentBounds.x, this._parentBounds.y);
      } else {
        this.parentNode = null;
        this.parentIsWindow = true;
        s.width = this.dom.visualBounds.width;
        s.height = this.dom.visualBounds.height;
        this.offset.set(0, 0);
      }
      var n = 0;
      var o = 0;
      if (typeof t == "number") {
        n = t;
      } else {
        this.parentScaleFactor.x = parseInt(t, 10) / 100;
        n = s.width * this.parentScaleFactor.x;
      }
      if (typeof e == "number") {
        o = e;
      } else {
        this.parentScaleFactor.y = parseInt(e, 10) / 100;
        o = s.height * this.parentScaleFactor.y;
      }
      n = Math.floor(n);
      o = Math.floor(o);
      this._gameSize.setTo(0, 0, n, o);
      this.updateDimensions(n, o, false);
    },
    _gameResumed: function () {
      this.queueUpdate(true);
    },
    setGameSize: function (t, e) {
      this._gameSize.setTo(0, 0, t, e);
      if (this.currentScaleMode !== a.ScaleManager.RESIZE) {
        this.updateDimensions(t, e, true);
      }
      this.queueUpdate(true);
    },
    setUserScale: function (t, e, i, s) {
      this._userScaleFactor.setTo(t, e);
      this._userScaleTrim.setTo(i | 0, s | 0);
      this.queueUpdate(true);
    },
    setResizeCallback: function (t, e) {
      this.onResize = t;
      this.onResizeContext = e;
    },
    signalSizeChange: function () {
      if (!a.Rectangle.sameDimensions(this, this._lastReportedCanvasSize) || !a.Rectangle.sameDimensions(this.game, this._lastReportedGameSize)) {
        var t = this.width;
        var e = this.height;
        this._lastReportedCanvasSize.setTo(0, 0, t, e);
        this._lastReportedGameSize.setTo(0, 0, this.game.width, this.game.height);
        if (this.grid) {
          this.grid.onResize(t, e);
        }
        this.onSizeChange.dispatch(this, t, e);
        if (this.currentScaleMode === a.ScaleManager.RESIZE) {
          this.game.state.resize(t, e);
          this.game.load.resize(t, e);
        }
      }
    },
    setMinMax: function (t, e, i, s) {
      this.minWidth = t;
      this.minHeight = e;
      if (i !== undefined) {
        this.maxWidth = i;
      }
      if (s !== undefined) {
        this.maxHeight = s;
      }
    },
    preUpdate: function () {
      if (!(this.game.time.time < this._lastUpdate + this._updateThrottle)) {
        var t = this._updateThrottle;
        this._updateThrottleReset = t >= 400 ? 0 : 100;
        this.dom.getOffset(this.game.canvas, this.offset);
        var e = this._parentBounds.width;
        var i = this._parentBounds.height;
        var s = this.getParentBounds(this._parentBounds);
        var n = s.width !== e || s.height !== i;
        var o = this.updateOrientationState();
        if (n || o) {
          if (this.onResize) {
            this.onResize.call(this.onResizeContext, this, s);
          }
          this.updateLayout();
          this.signalSizeChange();
        }
        var r = this._updateThrottle * 2;
        if (this._updateThrottle < t) {
          r = Math.min(t, this._updateThrottleReset);
        }
        this._updateThrottle = a.Math.clamp(r, 25, this.trackParentInterval);
        this._lastUpdate = this.game.time.time;
      }
    },
    pauseUpdate: function () {
      this.preUpdate();
      this._updateThrottle = this.trackParentInterval;
    },
    updateDimensions: function (t, e, i) {
      this.width = t * this.parentScaleFactor.x;
      this.height = e * this.parentScaleFactor.y;
      this.game.width = this.width;
      this.game.height = this.height;
      this.sourceAspectRatio = this.width / this.height;
      this.updateScalingAndBounds();
      if (i) {
        this.game.renderer.resize(this.width, this.height);
        this.game.camera.setSize(this.width, this.height);
        this.game.world.resize(this.width, this.height);
      }
    },
    updateScalingAndBounds: function () {
      this.scaleFactor.x = this.game.width / this.width;
      this.scaleFactor.y = this.game.height / this.height;
      this.scaleFactorInversed.x = this.width / this.game.width;
      this.scaleFactorInversed.y = this.height / this.game.height;
      this.aspectRatio = this.width / this.height;
      if (this.game.canvas) {
        this.dom.getOffset(this.game.canvas, this.offset);
      }
      this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height);
      if (this.game.input && this.game.input.scale) {
        this.game.input.scale.setTo(this.scaleFactor.x, this.scaleFactor.y);
      }
    },
    forceOrientation: function (t, e = false) {
      this.forceLandscape = t;
      this.forcePortrait = e;
      this.queueUpdate(true);
    },
    classifyOrientation: function (t) {
      if (t === "portrait-primary" || t === "portrait-secondary") {
        return "portrait";
      } else if (t === "landscape-primary" || t === "landscape-secondary") {
        return "landscape";
      } else {
        return null;
      }
    },
    updateOrientationState: function () {
      var t = this.screenOrientation;
      var e = this.incorrectOrientation;
      this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback);
      this.incorrectOrientation = this.forceLandscape && !this.isLandscape || this.forcePortrait && !this.isPortrait;
      var i = t !== this.screenOrientation;
      var s = e !== this.incorrectOrientation;
      if (s) {
        if (this.incorrectOrientation) {
          this.enterIncorrectOrientation.dispatch();
        } else {
          this.leaveIncorrectOrientation.dispatch();
        }
      }
      if (i || s) {
        this.onOrientationChange.dispatch(this, t, e);
      }
      return i || s;
    },
    orientationChange: function (t) {
      this.event = t;
      this.queueUpdate(true);
    },
    windowResize: function (t) {
      this.event = t;
      this.queueUpdate(true);
    },
    scrollTop: function () {
      var t = this.compatibility.scrollTo;
      if (t) {
        window.scrollTo(t.x, t.y);
      }
    },
    refresh: function () {
      this.scrollTop();
      this.queueUpdate(true);
    },
    updateLayout: function () {
      var t = this.currentScaleMode;
      if (t === a.ScaleManager.RESIZE) {
        this.reflowGame();
        return;
      }
      this.scrollTop();
      if (this.compatibility.forceMinimumDocumentHeight) {
        document.documentElement.style.minHeight = window.innerHeight + "px";
      }
      if (this.incorrectOrientation) {
        this.setMaximum();
      } else if (t === a.ScaleManager.EXACT_FIT) {
        this.setExactFit();
      } else if (t === a.ScaleManager.SHOW_ALL) {
        if (!this.isFullScreen && this.boundingParent && this.compatibility.canExpandParent) {
          this.setShowAll(true);
          this.resetCanvas();
          this.setShowAll();
        } else {
          this.setShowAll();
        }
      } else if (t === a.ScaleManager.NO_SCALE) {
        this.width = this.game.width;
        this.height = this.game.height;
      } else if (t === a.ScaleManager.USER_SCALE) {
        this.width = this.game.width * this._userScaleFactor.x - this._userScaleTrim.x;
        this.height = this.game.height * this._userScaleFactor.y - this._userScaleTrim.y;
      }
      if (!this.compatibility.canExpandParent && (t === a.ScaleManager.SHOW_ALL || t === a.ScaleManager.USER_SCALE)) {
        var e = this.getParentBounds(this._tempBounds);
        this.width = Math.min(this.width, e.width);
        this.height = Math.min(this.height, e.height);
      }
      this.width = this.width | 0;
      this.height = this.height | 0;
      this.reflowCanvas();
    },
    getParentBounds: function (t) {
      var e = t || new a.Rectangle();
      var i = this.boundingParent;
      var s = this.dom.visualBounds;
      var n = this.dom.layoutBounds;
      if (i) {
        var o = i.getBoundingClientRect();
        var r = i.offsetParent ? i.offsetParent.getBoundingClientRect() : i.getBoundingClientRect();
        e.setTo(o.left - r.left, o.top - r.top, o.width, o.height);
        var h = this.windowConstraints;
        if (h.right) {
          var l = h.right === "layout" ? n : s;
          e.right = Math.min(e.right, l.width);
        }
        if (h.bottom) {
          var l = h.bottom === "layout" ? n : s;
          e.bottom = Math.min(e.bottom, l.height);
        }
      } else {
        e.setTo(0, 0, s.width, s.height);
      }
      e.setTo(Math.round(e.x), Math.round(e.y), Math.round(e.width), Math.round(e.height));
      return e;
    },
    alignCanvas: function (t, e) {
      var i = this.getParentBounds(this._tempBounds);
      var s = this.game.canvas;
      var n = this.margin;
      if (t) {
        n.left = n.right = 0;
        var a = s.getBoundingClientRect();
        if (this.width < i.width && !this.incorrectOrientation) {
          var o = a.left - i.x;
          var r = i.width / 2 - this.width / 2;
          r = Math.max(r, 0);
          var h = r - o;
          n.left = Math.round(h);
        }
        s.style.marginLeft = n.left + "px";
        if (n.left !== 0) {
          n.right = -(i.width - a.width - n.left);
          s.style.marginRight = n.right + "px";
        }
      }
      if (e) {
        n.top = n.bottom = 0;
        var a = s.getBoundingClientRect();
        if (this.height < i.height && !this.incorrectOrientation) {
          var o = a.top - i.y;
          var r = i.height / 2 - this.height / 2;
          r = Math.max(r, 0);
          var h = r - o;
          n.top = Math.round(h);
        }
        s.style.marginTop = n.top + "px";
        if (n.top !== 0) {
          n.bottom = -(i.height - a.height - n.top);
          s.style.marginBottom = n.bottom + "px";
        }
      }
      n.x = n.left;
      n.y = n.top;
    },
    reflowGame: function () {
      this.resetCanvas("", "");
      var t = this.getParentBounds(this._tempBounds);
      this.updateDimensions(t.width, t.height, true);
    },
    reflowCanvas: function () {
      if (!this.incorrectOrientation) {
        this.width = a.Math.clamp(this.width, this.minWidth || 0, this.maxWidth || this.width);
        this.height = a.Math.clamp(this.height, this.minHeight || 0, this.maxHeight || this.height);
      }
      this.resetCanvas();
      if (!this.compatibility.noMargins) {
        if (this.isFullScreen && this._createdFullScreenTarget) {
          this.alignCanvas(true, true);
        } else {
          this.alignCanvas(this.pageAlignHorizontally, this.pageAlignVertically);
        }
      }
      this.updateScalingAndBounds();
    },
    resetCanvas: function (t = this.width + "px", e = this.height + "px") {
      var i = this.game.canvas;
      if (!this.compatibility.noMargins) {
        i.style.marginLeft = "";
        i.style.marginTop = "";
        i.style.marginRight = "";
        i.style.marginBottom = "";
      }
      i.style.width = t;
      i.style.height = e;
    },
    queueUpdate: function (t) {
      if (t) {
        this._parentBounds.width = 0;
        this._parentBounds.height = 0;
      }
      this._updateThrottle = this._updateThrottleReset;
    },
    reset: function (t) {
      if (t && this.grid) {
        this.grid.reset();
      }
    },
    setMaximum: function () {
      this.width = this.dom.visualBounds.width;
      this.height = this.dom.visualBounds.height;
    },
    setShowAll: function (t) {
      var e = this.getParentBounds(this._tempBounds);
      var i = e.width;
      var s = e.height;
      var n;
      n = t ? Math.max(s / this.game.height, i / this.game.width) : Math.min(s / this.game.height, i / this.game.width);
      this.width = Math.round(this.game.width * n);
      this.height = Math.round(this.game.height * n);
    },
    setExactFit: function () {
      var t = this.getParentBounds(this._tempBounds);
      this.width = t.width;
      this.height = t.height;
      if (!this.isFullScreen) {
        if (this.maxWidth) {
          this.width = Math.min(this.width, this.maxWidth);
        }
        if (this.maxHeight) {
          this.height = Math.min(this.height, this.maxHeight);
        }
      }
    },
    createFullScreenTarget: function () {
      var t = document.createElement("div");
      t.style.margin = "0";
      t.style.padding = "0";
      t.style.background = "#000";
      return t;
    },
    startFullScreen: function (t, e) {
      if (this.isFullScreen) {
        return false;
      }
      if (!this.compatibility.supportsFullScreen) {
        var i = this;
        setTimeout(function () {
          i.fullScreenError();
        }, 10);
        return;
      }
      if (this.compatibility.clickTrampoline === "when-not-mouse") {
        var s = this.game.input;
        if (s.activePointer && s.activePointer !== s.mousePointer && (e || e !== false)) {
          s.activePointer.addClickTrampoline("startFullScreen", this.startFullScreen, this, [t, false]);
          return;
        }
      }
      if (t !== undefined && this.game.renderType === a.CANVAS) {
        this.game.stage.smoothed = t;
      }
      var n = this.fullScreenTarget;
      if (!n) {
        this.cleanupCreatedTarget();
        this._createdFullScreenTarget = this.createFullScreenTarget();
        n = this._createdFullScreenTarget;
      }
      var o = {
        targetElement: n
      };
      this.hasPhaserSetFullScreen = true;
      this.onFullScreenInit.dispatch(this, o);
      if (this._createdFullScreenTarget) {
        var r = this.game.canvas;
        r.parentNode.insertBefore(n, r);
        n.appendChild(r);
      }
      if (this.game.device.fullscreenKeyboard) {
        n[this.game.device.requestFullscreen](Element.ALLOW_KEYBOARD_INPUT);
      } else {
        n[this.game.device.requestFullscreen]();
      }
      return true;
    },
    stopFullScreen: function () {
      return !!this.isFullScreen && !!this.compatibility.supportsFullScreen && (this.hasPhaserSetFullScreen = false, document[this.game.device.cancelFullscreen](), true);
    },
    cleanupCreatedTarget: function () {
      var t = this._createdFullScreenTarget;
      if (t && t.parentNode) {
        var e = t.parentNode;
        e.insertBefore(this.game.canvas, t);
        e.removeChild(t);
      }
      this._createdFullScreenTarget = null;
    },
    prepScreenMode: function (t) {
      var e = !!this._createdFullScreenTarget;
      var i = this._createdFullScreenTarget || this.fullScreenTarget;
      if (t) {
        if ((e || this.fullScreenScaleMode === a.ScaleManager.EXACT_FIT) && i !== this.game.canvas) {
          this._fullScreenRestore = {
            targetWidth: i.style.width,
            targetHeight: i.style.height
          };
          i.style.width = "100%";
          i.style.height = "100%";
        }
      } else {
        if (this._fullScreenRestore) {
          i.style.width = this._fullScreenRestore.targetWidth;
          i.style.height = this._fullScreenRestore.targetHeight;
          this._fullScreenRestore = null;
        }
        this.updateDimensions(this._gameSize.width, this._gameSize.height, true);
        this.resetCanvas();
      }
    },
    fullScreenChange: function (t) {
      this.event = t;
      if (this.isFullScreen) {
        this.prepScreenMode(true);
        this.updateLayout();
        this.queueUpdate(true);
      } else {
        this.prepScreenMode(false);
        this.cleanupCreatedTarget();
        this.updateLayout();
        this.queueUpdate(true);
      }
      this.onFullScreenChange.dispatch(this, this.width, this.height);
    },
    fullScreenError: function (t) {
      this.event = t;
      this.cleanupCreatedTarget();
      this.onFullScreenError.dispatch(this);
    },
    scaleSprite: function (t, e = this.width, i = this.height, s = false) {
      if (!t || !t.scale) {
        return t;
      }
      t.scale.x = 1;
      t.scale.y = 1;
      if (t.width <= 0 || t.height <= 0 || e <= 0 || i <= 0) {
        return t;
      }
      var n = e;
      var a = t.height * e / t.width;
      var o = t.width * i / t.height;
      var r = i;
      var h = o > e;
      h = h ? s : !s;
      if (h) {
        t.width = Math.floor(n);
        t.height = Math.floor(a);
      } else {
        t.width = Math.floor(o);
        t.height = Math.floor(r);
      }
      return t;
    },
    destroy: function () {
      this.game.onResume.remove(this._gameResumed, this);
      window.removeEventListener("orientationchange", this._orientationChange, false);
      window.removeEventListener("resize", this._windowResize, false);
      if (this.compatibility.supportsFullScreen) {
        document.removeEventListener("webkitfullscreenchange", this._fullScreenChange, false);
        document.removeEventListener("mozfullscreenchange", this._fullScreenChange, false);
        document.removeEventListener("MSFullscreenChange", this._fullScreenChange, false);
        document.removeEventListener("fullscreenchange", this._fullScreenChange, false);
        document.removeEventListener("webkitfullscreenerror", this._fullScreenError, false);
        document.removeEventListener("mozfullscreenerror", this._fullScreenError, false);
        document.removeEventListener("MSFullscreenError", this._fullScreenError, false);
        document.removeEventListener("fullscreenerror", this._fullScreenError, false);
      }
    }
  };
  a.ScaleManager.prototype.constructor = a.ScaleManager;
  Object.defineProperty(a.ScaleManager.prototype, "boundingParent", {
    get: function () {
      if (this.parentIsWindow || this.isFullScreen && this.hasPhaserSetFullScreen && !this._createdFullScreenTarget) {
        return null;
      } else {
        return this.game.canvas && this.game.canvas.parentNode || null;
      }
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "scaleMode", {
    get: function () {
      return this._scaleMode;
    },
    set: function (t) {
      if (t !== this._scaleMode) {
        if (!this.isFullScreen) {
          this.updateDimensions(this._gameSize.width, this._gameSize.height, true);
          this.queueUpdate(true);
        }
        this._scaleMode = t;
      }
      return this._scaleMode;
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "fullScreenScaleMode", {
    get: function () {
      return this._fullScreenScaleMode;
    },
    set: function (t) {
      if (t !== this._fullScreenScaleMode) {
        if (this.isFullScreen) {
          this.prepScreenMode(false);
          this._fullScreenScaleMode = t;
          this.prepScreenMode(true);
          this.queueUpdate(true);
        } else {
          this._fullScreenScaleMode = t;
        }
      }
      return this._fullScreenScaleMode;
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "currentScaleMode", {
    get: function () {
      if (this.isFullScreen) {
        return this._fullScreenScaleMode;
      } else {
        return this._scaleMode;
      }
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "pageAlignHorizontally", {
    get: function () {
      return this._pageAlignHorizontally;
    },
    set: function (t) {
      if (t !== this._pageAlignHorizontally) {
        this._pageAlignHorizontally = t;
        this.queueUpdate(true);
      }
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "pageAlignVertically", {
    get: function () {
      return this._pageAlignVertically;
    },
    set: function (t) {
      if (t !== this._pageAlignVertically) {
        this._pageAlignVertically = t;
        this.queueUpdate(true);
      }
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "isFullScreen", {
    get: function () {
      return !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "isPortrait", {
    get: function () {
      return this.classifyOrientation(this.screenOrientation) === "portrait";
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "isLandscape", {
    get: function () {
      return this.classifyOrientation(this.screenOrientation) === "landscape";
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "isGamePortrait", {
    get: function () {
      return this.height > this.width;
    }
  });
  Object.defineProperty(a.ScaleManager.prototype, "isGameLandscape", {
    get: function () {
      return this.width > this.height;
    }
  });
  a.Utils.Debug = function (t) {
    this.game = t;
    this.sprite = null;
    this.bmd = null;
    this.canvas = null;
    this.context = null;
    this.font = "14px Courier";
    this.columnWidth = 100;
    this.lineHeight = 16;
    this.renderShadow = true;
    this.currentX = 0;
    this.currentY = 0;
    this.currentAlpha = 1;
    this.dirty = false;
  };
  a.Utils.Debug.prototype = {
    boot: function () {
      if (this.game.renderType === a.CANVAS) {
        this.context = this.game.context;
      } else {
        this.bmd = new a.BitmapData(this.game, "__DEBUG", this.game.width, this.game.height, true);
        this.sprite = this.game.make.image(0, 0, this.bmd);
        this.game.stage.addChild(this.sprite);
        this.game.scale.onSizeChange.add(this.resize, this);
        this.canvas = PIXI.CanvasPool.create(this, this.game.width, this.game.height);
        this.context = this.canvas.getContext("2d");
      }
    },
    resize: function (t, e, i) {
      this.bmd.resize(e, i);
      this.canvas.width = e;
      this.canvas.height = i;
    },
    preUpdate: function () {
      if (this.dirty && this.sprite) {
        this.bmd.clear();
        this.bmd.draw(this.canvas, 0, 0);
        this.context.clearRect(0, 0, this.game.width, this.game.height);
        this.dirty = false;
      }
    },
    reset: function () {
      if (this.context) {
        this.context.clearRect(0, 0, this.game.width, this.game.height);
      }
      if (this.sprite) {
        this.bmd.clear();
      }
    },
    start: function (t, e, i, s) {
      if (typeof t != "number") {
        t = 0;
      }
      if (typeof e != "number") {
        e = 0;
      }
      i = i || "rgb(255,255,255)";
      if (s === undefined) {
        s = 0;
      }
      this.currentX = t;
      this.currentY = e;
      this.currentColor = i;
      this.columnWidth = s;
      this.dirty = true;
      this.context.save();
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.strokeStyle = i;
      this.context.fillStyle = i;
      this.context.font = this.font;
      this.context.globalAlpha = this.currentAlpha;
    },
    stop: function () {
      this.context.restore();
    },
    line: function () {
      var t = this.currentX;
      for (var e = 0; e < arguments.length; e++) {
        if (this.renderShadow) {
          this.context.fillStyle = "rgb(0,0,0)";
          this.context.fillText(arguments[e], t + 1, this.currentY + 1);
          this.context.fillStyle = this.currentColor;
        }
        this.context.fillText(arguments[e], t, this.currentY);
        t += this.columnWidth;
      }
      this.currentY += this.lineHeight;
    },
    soundInfo: function (t, e, i, s) {
      this.start(e, i, s);
      this.line("Sound: " + t.key + " Locked: " + t.game.sound.touchLocked);
      this.line("Is Ready?: " + this.game.cache.isSoundReady(t.key) + " Pending Playback: " + t.pendingPlayback);
      this.line("Decoded: " + t.isDecoded + " Decoding: " + t.isDecoding);
      this.line("Total Duration: " + t.totalDuration + " Playing: " + t.isPlaying);
      this.line("Time: " + t.currentTime);
      this.line("Volume: " + t.volume + " Muted: " + t.mute);
      this.line("WebAudio: " + t.usingWebAudio + " Audio: " + t.usingAudioTag);
      if (t.currentMarker !== "") {
        this.line("Marker: " + t.currentMarker + " Duration: " + t.duration + " (ms: " + t.durationMS + ")");
        this.line("Start: " + t.markers[t.currentMarker].start + " Stop: " + t.markers[t.currentMarker].stop);
        this.line("Position: " + t.position);
      }
      this.stop();
    },
    cameraInfo: function (t, e, i, s) {
      this.start(e, i, s);
      this.line("Camera (" + t.width + " x " + t.height + ")");
      this.line("X: " + t.x + " Y: " + t.y);
      if (t.bounds) {
        this.line("Bounds x: " + t.bounds.x + " Y: " + t.bounds.y + " w: " + t.bounds.width + " h: " + t.bounds.height);
      }
      this.line("View x: " + t.view.x + " Y: " + t.view.y + " w: " + t.view.width + " h: " + t.view.height);
      this.line("Total in view: " + t.totalInView);
      this.stop();
    },
    timer: function (t, e, i, s) {
      this.start(e, i, s);
      this.line("Timer (running: " + t.running + " expired: " + t.expired + ")");
      this.line("Next Tick: " + t.next + " Duration: " + t.duration);
      this.line("Paused: " + t.paused + " Length: " + t.length);
      this.stop();
    },
    pointer: function (t, e, i, s, n) {
      if (t != null) {
        if (e === undefined) {
          e = false;
        }
        i = i || "rgba(0,255,0,0.5)";
        s = s || "rgba(255,0,0,0.5)";
        if (e !== true || t.isUp !== true) {
          this.start(t.x, t.y - 100, n);
          this.context.beginPath();
          this.context.arc(t.x, t.y, t.circle.radius, 0, Math.PI * 2);
          if (t.active) {
            this.context.fillStyle = i;
          } else {
            this.context.fillStyle = s;
          }
          this.context.fill();
          this.context.closePath();
          this.context.beginPath();
          this.context.moveTo(t.positionDown.x, t.positionDown.y);
          this.context.lineTo(t.position.x, t.position.y);
          this.context.lineWidth = 2;
          this.context.stroke();
          this.context.closePath();
          this.line("ID: " + t.id + " Active: " + t.active);
          this.line("World X: " + t.worldX + " World Y: " + t.worldY);
          this.line("Screen X: " + t.x + " Screen Y: " + t.y + " In: " + t.withinGame);
          this.line("Duration: " + t.duration + " ms");
          this.line("is Down: " + t.isDown + " is Up: " + t.isUp);
          this.stop();
        }
      }
    },
    spriteInputInfo: function (t, e, i, s) {
      this.start(e, i, s);
      this.line("Sprite Input: (" + t.width + " x " + t.height + ")");
      this.line("x: " + t.input.pointerX().toFixed(1) + " y: " + t.input.pointerY().toFixed(1));
      this.line("over: " + t.input.pointerOver() + " duration: " + t.input.overDuration().toFixed(0));
      this.line("down: " + t.input.pointerDown() + " duration: " + t.input.downDuration().toFixed(0));
      this.line("just over: " + t.input.justOver() + " just out: " + t.input.justOut());
      this.stop();
    },
    key: function (t, e, i, s) {
      this.start(e, i, s, 150);
      this.line("Key:", t.keyCode, "isDown:", t.isDown);
      this.line("justDown:", t.justDown, "justUp:", t.justUp);
      this.line("Time Down:", t.timeDown.toFixed(0), "duration:", t.duration.toFixed(0));
      this.stop();
    },
    inputInfo: function (t, e, i) {
      this.start(t, e, i);
      this.line("Input");
      this.line("X: " + this.game.input.x + " Y: " + this.game.input.y);
      this.line("World X: " + this.game.input.worldX + " World Y: " + this.game.input.worldY);
      this.line("Scale X: " + this.game.input.scale.x.toFixed(1) + " Scale Y: " + this.game.input.scale.x.toFixed(1));
      this.line("Screen X: " + this.game.input.activePointer.screenX + " Screen Y: " + this.game.input.activePointer.screenY);
      this.stop();
    },
    spriteBounds: function (t, e, i) {
      var s = t.getBounds();
      s.x += this.game.camera.x;
      s.y += this.game.camera.y;
      this.rectangle(s, e, i);
    },
    ropeSegments: function (t, e, i) {
      var s = this;
      t.segments.forEach(function (t) {
        s.rectangle(t, e, i);
      }, this);
    },
    spriteInfo: function (t, e, i, s) {
      this.start(e, i, s);
      this.line("Sprite:  (" + t.width + " x " + t.height + ") anchor: " + t.anchor.x + " x " + t.anchor.y);
      this.line("x: " + t.x.toFixed(1) + " y: " + t.y.toFixed(1));
      this.line("angle: " + t.angle.toFixed(1) + " rotation: " + t.rotation.toFixed(1));
      this.line("visible: " + t.visible + " in camera: " + t.inCamera);
      this.line("bounds x: " + t._bounds.x.toFixed(1) + " y: " + t._bounds.y.toFixed(1) + " w: " + t._bounds.width.toFixed(1) + " h: " + t._bounds.height.toFixed(1));
      this.stop();
    },
    spriteCoords: function (t, e, i, s) {
      this.start(e, i, s, 100);
      if (t.name) {
        this.line(t.name);
      }
      this.line("x:", t.x.toFixed(2), "y:", t.y.toFixed(2));
      this.line("pos x:", t.position.x.toFixed(2), "pos y:", t.position.y.toFixed(2));
      this.line("world x:", t.world.x.toFixed(2), "world y:", t.world.y.toFixed(2));
      this.stop();
    },
    lineInfo: function (t, e, i, s) {
      this.start(e, i, s, 80);
      this.line("start.x:", t.start.x.toFixed(2), "start.y:", t.start.y.toFixed(2));
      this.line("end.x:", t.end.x.toFixed(2), "end.y:", t.end.y.toFixed(2));
      this.line("length:", t.length.toFixed(2), "angle:", t.angle);
      this.stop();
    },
    pixel: function (t, e, i, s) {
      s = s || 2;
      this.start();
      this.context.fillStyle = i;
      this.context.fillRect(t, e, s, s);
      this.stop();
    },
    geom: function (t, e, i = true, s = 0) {
      e = e || "rgba(0,255,0,0.4)";
      this.start();
      this.context.fillStyle = e;
      this.context.strokeStyle = e;
      if (t instanceof a.Rectangle || s === 1) {
        if (i) {
          this.context.fillRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height);
        } else {
          this.context.strokeRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height);
        }
      } else if (t instanceof a.Circle || s === 2) {
        this.context.beginPath();
        this.context.arc(t.x - this.game.camera.x, t.y - this.game.camera.y, t.radius, 0, Math.PI * 2, false);
        this.context.closePath();
        if (i) {
          this.context.fill();
        } else {
          this.context.stroke();
        }
      } else if (t instanceof a.Point || s === 3) {
        this.context.fillRect(t.x - this.game.camera.x, t.y - this.game.camera.y, 4, 4);
      } else if (t instanceof a.Line || s === 4) {
        this.context.lineWidth = 1;
        this.context.beginPath();
        this.context.moveTo(t.start.x + 0.5 - this.game.camera.x, t.start.y + 0.5 - this.game.camera.y);
        this.context.lineTo(t.end.x + 0.5 - this.game.camera.x, t.end.y + 0.5 - this.game.camera.y);
        this.context.closePath();
        this.context.stroke();
      }
      this.stop();
    },
    rectangle: function (t, e, i = true) {
      e = e || "rgba(0, 255, 0, 0.4)";
      this.start();
      if (i) {
        this.context.fillStyle = e;
        this.context.fillRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height);
      } else {
        this.context.strokeStyle = e;
        this.context.strokeRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height);
      }
      this.stop();
    },
    text: function (t, e, i, s, n) {
      s = s || "rgb(255,255,255)";
      n = n || "16px Courier";
      this.start();
      this.context.font = n;
      if (this.renderShadow) {
        this.context.fillStyle = "rgb(0,0,0)";
        this.context.fillText(t, e + 1, i + 1);
      }
      this.context.fillStyle = s;
      this.context.fillText(t, e, i);
      this.stop();
    },
    quadTree: function (t, e) {
      e = e || "rgba(255,0,0,0.3)";
      this.start();
      var i = t.bounds;
      if (t.nodes.length === 0) {
        this.context.strokeStyle = e;
        this.context.strokeRect(i.x, i.y, i.width, i.height);
        this.text("size: " + t.objects.length, i.x + 4, i.y + 16, "rgb(0,200,0)", "12px Courier");
        this.context.strokeStyle = "rgb(0,255,0)";
        for (var s = 0; s < t.objects.length; s++) {
          this.context.strokeRect(t.objects[s].x, t.objects[s].y, t.objects[s].width, t.objects[s].height);
        }
      } else {
        for (var s = 0; s < t.nodes.length; s++) {
          this.quadTree(t.nodes[s]);
        }
      }
      this.stop();
    },
    body: function (t, e, i) {
      if (t.body) {
        this.start();
        if (t.body.type === a.Physics.ARCADE) {
          a.Physics.Arcade.Body.render(this.context, t.body, e, i);
        } else if (t.body.type === a.Physics.NINJA) {
          a.Physics.Ninja.Body.render(this.context, t.body, e, i);
        } else if (t.body.type === a.Physics.BOX2D) {
          a.Physics.Box2D.renderBody(this.context, t.body, e);
        }
        this.stop();
      }
    },
    bodyInfo: function (t, e, i, s) {
      if (t.body) {
        this.start(e, i, s, 210);
        if (t.body.type === a.Physics.ARCADE) {
          a.Physics.Arcade.Body.renderBodyInfo(this, t.body);
        } else if (t.body.type === a.Physics.BOX2D) {
          this.game.physics.box2d.renderBodyInfo(this, t.body);
        }
        this.stop();
      }
    },
    box2dWorld: function () {
      this.start();
      this.context.translate(-this.game.camera.view.x, -this.game.camera.view.y, 0);
      this.game.physics.box2d.renderDebugDraw(this.context);
      this.stop();
    },
    box2dBody: function (t, e) {
      this.start();
      a.Physics.Box2D.renderBody(this.context, t, e);
      this.stop();
    },
    displayList: function (t = this.game.world) {
      t.hasOwnProperty("renderOrderID");
      if (t.children && t.children.length > 0) {
        for (var e = 0; e < t.children.length; e++) {
          this.game.debug.displayList(t.children[e]);
        }
      }
    },
    destroy: function () {
      PIXI.CanvasPool.remove(this);
    }
  };
  a.Utils.Debug.prototype.constructor = a.Utils.Debug;
  a.DOM = {
    getOffset: function (t, e) {
      e = e || new a.Point();
      var i = t.getBoundingClientRect();
      var s = a.DOM.scrollY;
      var n = a.DOM.scrollX;
      var o = document.documentElement.clientTop;
      var r = document.documentElement.clientLeft;
      e.x = i.left + n - r;
      e.y = i.top + s - o;
      return e;
    },
    getBounds: function (t, e = 0) {
      return !!(t = t && !t.nodeType ? t[0] : t) && t.nodeType === 1 && this.calibrate(t.getBoundingClientRect(), e);
    },
    calibrate: function (t, e) {
      e = +e || 0;
      var i = {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      i.width = (i.right = t.right + e) - (i.left = t.left - e);
      i.height = (i.bottom = t.bottom + e) - (i.top = t.top - e);
      return i;
    },
    getAspectRatio: function (t) {
      t = t == null ? this.visualBounds : t.nodeType === 1 ? this.getBounds(t) : t;
      var e = t.width;
      var i = t.height;
      if (typeof e == "function") {
        e = e.call(t);
      }
      if (typeof i == "function") {
        i = i.call(t);
      }
      return e / i;
    },
    inLayoutViewport: function (t, e) {
      var i = this.getBounds(t, e);
      return !!i && i.bottom >= 0 && i.right >= 0 && i.top <= this.layoutBounds.width && i.left <= this.layoutBounds.height;
    },
    getScreenOrientation: function (t) {
      var e = window.screen;
      var i = e.orientation || e.mozOrientation || e.msOrientation;
      if (i && typeof i.type == "string") {
        return i.type;
      }
      if (typeof i == "string") {
        return i;
      }
      var s = "portrait-primary";
      var n = "landscape-primary";
      if (t === "screen") {
        if (e.height > e.width) {
          return s;
        } else {
          return n;
        }
      }
      if (t === "viewport") {
        if (this.visualBounds.height > this.visualBounds.width) {
          return s;
        } else {
          return n;
        }
      }
      if (t === "window.orientation" && typeof window.orientation == "number") {
        if (window.orientation === 0 || window.orientation === 180) {
          return s;
        } else {
          return n;
        }
      }
      if (window.matchMedia) {
        if (window.matchMedia("(orientation: portrait)").matches) {
          return s;
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
          return n;
        }
      }
      if (this.visualBounds.height > this.visualBounds.width) {
        return s;
      } else {
        return n;
      }
    },
    visualBounds: new a.Rectangle(),
    layoutBounds: new a.Rectangle(),
    documentBounds: new a.Rectangle()
  };
  a.Device.whenReady(function (t) {
    var e = window && "pageXOffset" in window ? function () {
      return window.pageXOffset;
    } : function () {
      return document.documentElement.scrollLeft;
    };
    var i = window && "pageYOffset" in window ? function () {
      return window.pageYOffset;
    } : function () {
      return document.documentElement.scrollTop;
    };
    Object.defineProperty(a.DOM, "scrollX", {
      get: e
    });
    Object.defineProperty(a.DOM, "scrollY", {
      get: i
    });
    Object.defineProperty(a.DOM.visualBounds, "x", {
      get: e
    });
    Object.defineProperty(a.DOM.visualBounds, "y", {
      get: i
    });
    Object.defineProperty(a.DOM.layoutBounds, "x", {
      value: 0
    });
    Object.defineProperty(a.DOM.layoutBounds, "y", {
      value: 0
    });
    if (t.desktop && document.documentElement.clientWidth <= window.innerWidth && document.documentElement.clientHeight <= window.innerHeight) {
      function s() {
        return Math.max(window.innerWidth, document.documentElement.clientWidth);
      }
      function n() {
        return Math.max(window.innerHeight, document.documentElement.clientHeight);
      }
      Object.defineProperty(a.DOM.visualBounds, "width", {
        get: s
      });
      Object.defineProperty(a.DOM.visualBounds, "height", {
        get: n
      });
      Object.defineProperty(a.DOM.layoutBounds, "width", {
        get: s
      });
      Object.defineProperty(a.DOM.layoutBounds, "height", {
        get: n
      });
    } else {
      Object.defineProperty(a.DOM.visualBounds, "width", {
        get: function () {
          return window.innerWidth;
        }
      });
      Object.defineProperty(a.DOM.visualBounds, "height", {
        get: function () {
          return window.innerHeight;
        }
      });
      Object.defineProperty(a.DOM.layoutBounds, "width", {
        get: function () {
          var t = document.documentElement.clientWidth;
          var e = window.innerWidth;
          if (t < e) {
            return e;
          } else {
            return t;
          }
        }
      });
      Object.defineProperty(a.DOM.layoutBounds, "height", {
        get: function () {
          var t = document.documentElement.clientHeight;
          var e = window.innerHeight;
          if (t < e) {
            return e;
          } else {
            return t;
          }
        }
      });
    }
    Object.defineProperty(a.DOM.documentBounds, "x", {
      value: 0
    });
    Object.defineProperty(a.DOM.documentBounds, "y", {
      value: 0
    });
    Object.defineProperty(a.DOM.documentBounds, "width", {
      get: function () {
        var t = document.documentElement;
        return Math.max(t.clientWidth, t.offsetWidth, t.scrollWidth);
      }
    });
    Object.defineProperty(a.DOM.documentBounds, "height", {
      get: function () {
        var t = document.documentElement;
        return Math.max(t.clientHeight, t.offsetHeight, t.scrollHeight);
      }
    });
  }, null, true);
  a.ArraySet = function (t) {
    this.position = 0;
    this.list = t || [];
  };
  a.ArraySet.prototype = {
    add: function (t) {
      if (!this.exists(t)) {
        this.list.push(t);
      }
      return t;
    },
    getIndex: function (t) {
      return this.list.indexOf(t);
    },
    getByKey: function (t, e) {
      for (var i = this.list.length; i--;) {
        if (this.list[i][t] === e) {
          return this.list[i];
        }
      }
      return null;
    },
    exists: function (t) {
      return this.list.indexOf(t) > -1;
    },
    reset: function () {
      this.list.length = 0;
    },
    remove: function (t) {
      var e = this.list.indexOf(t);
      if (e > -1) {
        this.list.splice(e, 1);
        return t;
      }
    },
    setAll: function (t, e) {
      for (var i = this.list.length; i--;) {
        if (this.list[i]) {
          this.list[i][t] = e;
        }
      }
    },
    callAll: function (t) {
      var e = Array.prototype.slice.call(arguments, 1);
      for (var i = this.list.length; i--;) {
        if (this.list[i] && this.list[i][t]) {
          this.list[i][t].apply(this.list[i], e);
        }
      }
    },
    removeAll: function (t = false) {
      for (var e = this.list.length; e--;) {
        if (this.list[e]) {
          var i = this.remove(this.list[e]);
          if (t) {
            i.destroy();
          }
        }
      }
      this.position = 0;
      this.list = [];
    }
  };
  Object.defineProperty(a.ArraySet.prototype, "total", {
    get: function () {
      return this.list.length;
    }
  });
  Object.defineProperty(a.ArraySet.prototype, "first", {
    get: function () {
      this.position = 0;
      if (this.list.length > 0) {
        return this.list[0];
      } else {
        return null;
      }
    }
  });
  Object.defineProperty(a.ArraySet.prototype, "next", {
    get: function () {
      if (this.position < this.list.length) {
        this.position++;
        return this.list[this.position];
      } else {
        return null;
      }
    }
  });
  a.ArraySet.prototype.constructor = a.ArraySet;
  a.ArrayUtils = {
    getRandomItem: function (t, e, i) {
      if (t === null) {
        return null;
      }
      if (e === undefined) {
        e = 0;
      }
      if (i === undefined) {
        i = t.length;
      }
      var s = e + Math.floor(Math.random() * i);
      if (t[s] === undefined) {
        return null;
      } else {
        return t[s];
      }
    },
    removeRandomItem: function (t, e, i) {
      if (t == null) {
        return null;
      }
      if (e === undefined) {
        e = 0;
      }
      if (i === undefined) {
        i = t.length;
      }
      var s = e + Math.floor(Math.random() * i);
      if (s < t.length) {
        var n = t.splice(s, 1);
        if (n[0] === undefined) {
          return null;
        } else {
          return n[0];
        }
      }
      return null;
    },
    shuffle: function (t) {
      for (var e = t.length - 1; e > 0; e--) {
        var i = Math.floor(Math.random() * (e + 1));
        var s = t[e];
        t[e] = t[i];
        t[i] = s;
      }
      return t;
    },
    transposeMatrix: function (t) {
      var e = t.length;
      for (var i = t[0].length, s = new Array(i), n = 0; n < i; n++) {
        s[n] = new Array(e);
        for (var a = e - 1; a > -1; a--) {
          s[n][a] = t[a][n];
        }
      }
      return s;
    },
    rotateMatrix: function (t, e) {
      if (typeof e != "string") {
        e = (e % 360 + 360) % 360;
      }
      if (e === 90 || e === -270 || e === "rotateLeft") {
        t = a.ArrayUtils.transposeMatrix(t);
        t = t.reverse();
      } else if (e === -90 || e === 270 || e === "rotateRight") {
        t = t.reverse();
        t = a.ArrayUtils.transposeMatrix(t);
      } else if (Math.abs(e) === 180 || e === "rotate180") {
        for (var i = 0; i < t.length; i++) {
          t[i].reverse();
        }
        t = t.reverse();
      }
      return t;
    },
    findClosest: function (t, e) {
      if (!e.length) {
        return NaN;
      }
      if (e.length === 1 || t < e[0]) {
        return e[0];
      }
      for (var i = 1; e[i] < t;) {
        i++;
      }
      var s = e[i - 1];
      var n = i < e.length ? e[i] : Number.POSITIVE_INFINITY;
      if (n - t <= t - s) {
        return n;
      } else {
        return s;
      }
    },
    rotateRight: function (t) {
      var e = t.pop();
      t.unshift(e);
      return e;
    },
    rotateLeft: function (t) {
      var e = t.shift();
      t.push(e);
      return e;
    },
    rotate: function (t) {
      var e = t.shift();
      t.push(e);
      return e;
    },
    numberArray: function (t, e) {
      var i = [];
      for (var s = t; s <= e; s++) {
        i.push(s);
      }
      return i;
    },
    numberArrayStep: function (t, e, i) {
      if (t === undefined || t === null) {
        t = 0;
      }
      if (e === undefined || e === null) {
        e = t;
        t = 0;
      }
      if (i === undefined) {
        i = 1;
      }
      var s = [];
      for (var n = Math.max(a.Math.roundAwayFromZero((e - t) / (i || 1)), 0), o = 0; o < n; o++) {
        s.push(t);
        t += i;
      }
      return s;
    }
  };
  a.LinkedList = function () {
    this.next = null;
    this.prev = null;
    this.first = null;
    this.last = null;
    this.total = 0;
  };
  a.LinkedList.prototype = {
    add: function (t) {
      if (this.total === 0 && this.first === null && this.last === null) {
        this.first = t;
        this.last = t;
        this.next = t;
        t.prev = this;
        this.total++;
        return t;
      } else {
        this.last.next = t;
        t.prev = this.last;
        this.last = t;
        this.total++;
        return t;
      }
    },
    reset: function () {
      this.first = null;
      this.last = null;
      this.next = null;
      this.prev = null;
      this.total = 0;
    },
    remove: function (t) {
      if (this.total === 1) {
        this.reset();
        t.next = t.prev = null;
        return;
      }
      if (t === this.first) {
        this.first = this.first.next;
      } else if (t === this.last) {
        this.last = this.last.prev;
      }
      if (t.prev) {
        t.prev.next = t.next;
      }
      if (t.next) {
        t.next.prev = t.prev;
      }
      t.next = t.prev = null;
      if (this.first === null) {
        this.last = null;
      }
      this.total--;
    },
    callAll: function (t) {
      if (this.first && this.last) {
        var e = this.first;
        do {
          if (e && e[t]) {
            e[t].call(e);
          }
          e = e.next;
        } while (e !== this.last.next);
      }
    }
  };
  a.LinkedList.prototype.constructor = a.LinkedList;
  a.Create = function (t) {
    this.game = t;
    this.bmd = null;
    this.canvas = null;
    this.ctx = null;
    this.palettes = [{
      0: "#000",
      1: "#9D9D9D",
      2: "#FFF",
      3: "#BE2633",
      4: "#E06F8B",
      5: "#493C2B",
      6: "#A46422",
      7: "#EB8931",
      8: "#F7E26B",
      9: "#2F484E",
      A: "#44891A",
      B: "#A3CE27",
      C: "#1B2632",
      D: "#005784",
      E: "#31A2F2",
      F: "#B2DCEF"
    }, {
      0: "#000",
      1: "#191028",
      2: "#46af45",
      3: "#a1d685",
      4: "#453e78",
      5: "#7664fe",
      6: "#833129",
      7: "#9ec2e8",
      8: "#dc534b",
      9: "#e18d79",
      A: "#d6b97b",
      B: "#e9d8a1",
      C: "#216c4b",
      D: "#d365c8",
      E: "#afaab9",
      F: "#f5f4eb"
    }, {
      0: "#000",
      1: "#2234d1",
      2: "#0c7e45",
      3: "#44aacc",
      4: "#8a3622",
      5: "#5c2e78",
      6: "#aa5c3d",
      7: "#b5b5b5",
      8: "#5e606e",
      9: "#4c81fb",
      A: "#6cd947",
      B: "#7be2f9",
      C: "#eb8a60",
      D: "#e23d69",
      E: "#ffd93f",
      F: "#fff"
    }, {
      0: "#000",
      1: "#fff",
      2: "#8b4131",
      3: "#7bbdc5",
      4: "#8b41ac",
      5: "#6aac41",
      6: "#3931a4",
      7: "#d5de73",
      8: "#945a20",
      9: "#5a4100",
      A: "#bd736a",
      B: "#525252",
      C: "#838383",
      D: "#acee8b",
      E: "#7b73de",
      F: "#acacac"
    }, {
      0: "#000",
      1: "#191028",
      2: "#46af45",
      3: "#a1d685",
      4: "#453e78",
      5: "#7664fe",
      6: "#833129",
      7: "#9ec2e8",
      8: "#dc534b",
      9: "#e18d79",
      A: "#d6b97b",
      B: "#e9d8a1",
      C: "#216c4b",
      D: "#d365c8",
      E: "#afaab9",
      F: "#fff"
    }];
  };
  a.Create.PALETTE_ARNE = 0;
  a.Create.PALETTE_JMP = 1;
  a.Create.PALETTE_CGA = 2;
  a.Create.PALETTE_C64 = 3;
  a.Create.PALETTE_JAPANESE_MACHINE = 4;
  a.Create.prototype = {
    texture: function (t, e, i = 8, s = i, n = 0) {
      var a = e[0].length * i;
      var o = e.length * s;
      if (this.bmd === null) {
        this.bmd = this.game.make.bitmapData();
        this.canvas = this.bmd.canvas;
        this.ctx = this.bmd.context;
      }
      this.bmd.resize(a, o);
      this.bmd.clear();
      for (var r = 0; r < e.length; r++) {
        for (var h = e[r], l = 0; l < h.length; l++) {
          var c = h[l];
          if (c !== "." && c !== " ") {
            this.ctx.fillStyle = this.palettes[n][c];
            this.ctx.fillRect(l * i, r * s, i, s);
          }
        }
      }
      return this.bmd.generateTexture(t);
    },
    grid: function (t, e, i, s, n, a) {
      if (this.bmd === null) {
        this.bmd = this.game.make.bitmapData();
        this.canvas = this.bmd.canvas;
        this.ctx = this.bmd.context;
      }
      this.bmd.resize(e, i);
      this.ctx.fillStyle = a;
      for (var o = 0; o < i; o += n) {
        this.ctx.fillRect(0, o, e, 1);
      }
      for (var r = 0; r < e; r += s) {
        this.ctx.fillRect(r, 0, 1, i);
      }
      return this.bmd.generateTexture(t);
    }
  };
  a.Create.prototype.constructor = a.Create;
  a.FlexGrid = function (t, e, i) {
    this.game = t.game;
    this.manager = t;
    this.width = e;
    this.height = i;
    this.boundsCustom = new a.Rectangle(0, 0, e, i);
    this.boundsFluid = new a.Rectangle(0, 0, e, i);
    this.boundsFull = new a.Rectangle(0, 0, e, i);
    this.boundsNone = new a.Rectangle(0, 0, e, i);
    this.positionCustom = new a.Point(0, 0);
    this.positionFluid = new a.Point(0, 0);
    this.positionFull = new a.Point(0, 0);
    this.positionNone = new a.Point(0, 0);
    this.scaleCustom = new a.Point(1, 1);
    this.scaleFluid = new a.Point(1, 1);
    this.scaleFluidInversed = new a.Point(1, 1);
    this.scaleFull = new a.Point(1, 1);
    this.scaleNone = new a.Point(1, 1);
    this.customWidth = 0;
    this.customHeight = 0;
    this.customOffsetX = 0;
    this.customOffsetY = 0;
    this.ratioH = e / i;
    this.ratioV = i / e;
    this.multiplier = 0;
    this.layers = [];
  };
  a.FlexGrid.prototype = {
    setSize: function (t, e) {
      this.width = t;
      this.height = e;
      this.ratioH = t / e;
      this.ratioV = e / t;
      this.scaleNone = new a.Point(1, 1);
      this.boundsNone.width = this.width;
      this.boundsNone.height = this.height;
      this.refresh();
    },
    createCustomLayer: function (t, e, i, s = true) {
      this.customWidth = t;
      this.customHeight = e;
      this.boundsCustom.width = t;
      this.boundsCustom.height = e;
      var n = new a.FlexLayer(this, this.positionCustom, this.boundsCustom, this.scaleCustom);
      if (s) {
        this.game.world.add(n);
      }
      this.layers.push(n);
      if (i !== undefined && typeof i !== null) {
        n.addMultiple(i);
      }
      return n;
    },
    createFluidLayer: function (t, e = true) {
      var i = new a.FlexLayer(this, this.positionFluid, this.boundsFluid, this.scaleFluid);
      if (e) {
        this.game.world.add(i);
      }
      this.layers.push(i);
      if (t !== undefined && typeof t !== null) {
        i.addMultiple(t);
      }
      return i;
    },
    createFullLayer: function (t) {
      var e = new a.FlexLayer(this, this.positionFull, this.boundsFull, this.scaleFluid);
      this.game.world.add(e);
      this.layers.push(e);
      if (t !== undefined) {
        e.addMultiple(t);
      }
      return e;
    },
    createFixedLayer: function (t) {
      var e = new a.FlexLayer(this, this.positionNone, this.boundsNone, this.scaleNone);
      this.game.world.add(e);
      this.layers.push(e);
      if (t !== undefined) {
        e.addMultiple(t);
      }
      return e;
    },
    reset: function () {
      for (var t = this.layers.length; t--;) {
        if (!this.layers[t].persist) {
          this.layers[t].position = null;
          this.layers[t].scale = null;
          this.layers.slice(t, 1);
        }
      }
    },
    onResize: function (t, e) {
      this.ratioH = t / e;
      this.ratioV = e / t;
      this.refresh(t, e);
    },
    refresh: function () {
      this.multiplier = Math.min(this.manager.height / this.height, this.manager.width / this.width);
      this.boundsFluid.width = Math.round(this.width * this.multiplier);
      this.boundsFluid.height = Math.round(this.height * this.multiplier);
      this.scaleFluid.set(this.boundsFluid.width / this.width, this.boundsFluid.height / this.height);
      this.scaleFluidInversed.set(this.width / this.boundsFluid.width, this.height / this.boundsFluid.height);
      this.scaleFull.set(this.boundsFull.width / this.width, this.boundsFull.height / this.height);
      this.boundsFull.width = Math.round(this.manager.width * this.scaleFluidInversed.x);
      this.boundsFull.height = Math.round(this.manager.height * this.scaleFluidInversed.y);
      this.boundsFluid.centerOn(this.manager.bounds.centerX, this.manager.bounds.centerY);
      this.boundsNone.centerOn(this.manager.bounds.centerX, this.manager.bounds.centerY);
      this.positionFluid.set(this.boundsFluid.x, this.boundsFluid.y);
      this.positionNone.set(this.boundsNone.x, this.boundsNone.y);
    },
    fitSprite: function (t) {
      this.manager.scaleSprite(t);
      t.x = this.manager.bounds.centerX;
      t.y = this.manager.bounds.centerY;
    },
    debug: function () {
      this.game.debug.text(this.boundsFluid.width + " x " + this.boundsFluid.height, this.boundsFluid.x + 4, this.boundsFluid.y + 16);
      this.game.debug.geom(this.boundsFluid, "rgba(255,0,0,0.9", false);
    }
  };
  a.FlexGrid.prototype.constructor = a.FlexGrid;
  a.FlexLayer = function (t, e, i, s) {
    a.Group.call(this, t.game, null, "__flexLayer" + t.game.rnd.uuid(), false);
    this.manager = t.manager;
    this.grid = t;
    this.persist = false;
    this.position = e;
    this.bounds = i;
    this.scale = s;
    this.topLeft = i.topLeft;
    this.topMiddle = new a.Point(i.halfWidth, 0);
    this.topRight = i.topRight;
    this.bottomLeft = i.bottomLeft;
    this.bottomMiddle = new a.Point(i.halfWidth, i.bottom);
    this.bottomRight = i.bottomRight;
  };
  a.FlexLayer.prototype = Object.create(a.Group.prototype);
  a.FlexLayer.prototype.constructor = a.FlexLayer;
  a.FlexLayer.prototype.resize = function () {};
  a.FlexLayer.prototype.debug = function () {
    this.game.debug.text(this.bounds.width + " x " + this.bounds.height, this.bounds.x + 4, this.bounds.y + 16);
    this.game.debug.geom(this.bounds, "rgba(0,0,255,0.9", false);
    this.game.debug.geom(this.topLeft, "rgba(255,255,255,0.9");
    this.game.debug.geom(this.topMiddle, "rgba(255,255,255,0.9");
    this.game.debug.geom(this.topRight, "rgba(255,255,255,0.9");
  };
  a.Color = {
    packPixel: function (t, e, i, s) {
      if (a.Device.LITTLE_ENDIAN) {
        return (s << 24 | i << 16 | e << 8 | t) >>> 0;
      } else {
        return (t << 24 | e << 16 | i << 8 | s) >>> 0;
      }
    },
    unpackPixel: function (t, e, i, s) {
      if (e === undefined || e === null) {
        e = a.Color.createColor();
      }
      if (i === undefined || i === null) {
        i = false;
      }
      if (s === undefined || s === null) {
        s = false;
      }
      if (a.Device.LITTLE_ENDIAN) {
        e.a = (t & -16777216) >>> 24;
        e.b = (t & 16711680) >>> 16;
        e.g = (t & 65280) >>> 8;
        e.r = t & 255;
      } else {
        e.r = (t & -16777216) >>> 24;
        e.g = (t & 16711680) >>> 16;
        e.b = (t & 65280) >>> 8;
        e.a = t & 255;
      }
      e.color = t;
      e.rgba = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a / 255 + ")";
      if (i) {
        a.Color.RGBtoHSL(e.r, e.g, e.b, e);
      }
      if (s) {
        a.Color.RGBtoHSV(e.r, e.g, e.b, e);
      }
      return e;
    },
    fromRGBA: function (t, e) {
      e ||= a.Color.createColor();
      e.r = (t & -16777216) >>> 24;
      e.g = (t & 16711680) >>> 16;
      e.b = (t & 65280) >>> 8;
      e.a = t & 255;
      e.rgba = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
      return e;
    },
    toRGBA: function (t, e, i, s) {
      return t << 24 | e << 16 | i << 8 | s;
    },
    toABGR: function (t, e, i, s) {
      return (s << 24 | i << 16 | e << 8 | t) >>> 0;
    },
    RGBtoHSL: function (t, e, i, s) {
      s ||= a.Color.createColor(t, e, i, 1);
      t /= 255;
      e /= 255;
      i /= 255;
      var n = Math.min(t, e, i);
      var o = Math.max(t, e, i);
      s.h = 0;
      s.s = 0;
      s.l = (o + n) / 2;
      if (o !== n) {
        var r = o - n;
        s.s = s.l > 0.5 ? r / (2 - o - n) : r / (o + n);
        if (o === t) {
          s.h = (e - i) / r + (e < i ? 6 : 0);
        } else if (o === e) {
          s.h = (i - t) / r + 2;
        } else if (o === i) {
          s.h = (t - e) / r + 4;
        }
        s.h /= 6;
      }
      return s;
    },
    HSLtoRGB: function (t, e, i, s) {
      if (s) {
        s.r = i;
        s.g = i;
        s.b = i;
      } else {
        s = a.Color.createColor(i, i, i);
      }
      if (e !== 0) {
        var n = i < 0.5 ? i * (1 + e) : i + e - i * e;
        var o = i * 2 - n;
        s.r = a.Color.hueToColor(o, n, t + 1 / 3);
        s.g = a.Color.hueToColor(o, n, t);
        s.b = a.Color.hueToColor(o, n, t - 1 / 3);
      }
      s.r = Math.floor(s.r * 255 | 0);
      s.g = Math.floor(s.g * 255 | 0);
      s.b = Math.floor(s.b * 255 | 0);
      a.Color.updateColor(s);
      return s;
    },
    RGBtoHSV: function (t, e, i, s) {
      s ||= a.Color.createColor(t, e, i, 255);
      t /= 255;
      e /= 255;
      i /= 255;
      var n = Math.min(t, e, i);
      var o = Math.max(t, e, i);
      var r = o - n;
      s.h = 0;
      s.s = o === 0 ? 0 : r / o;
      s.v = o;
      if (o !== n) {
        if (o === t) {
          s.h = (e - i) / r + (e < i ? 6 : 0);
        } else if (o === e) {
          s.h = (i - t) / r + 2;
        } else if (o === i) {
          s.h = (t - e) / r + 4;
        }
        s.h /= 6;
      }
      return s;
    },
    HSVtoRGB: function (t, e, i, s = a.Color.createColor(0, 0, 0, 1, t, e, 0, i)) {
      var n;
      var o;
      var r;
      var h = Math.floor(t * 6);
      var l = t * 6 - h;
      var c = i * (1 - e);
      var u = i * (1 - l * e);
      var d = i * (1 - (1 - l) * e);
      switch (h % 6) {
        case 0:
          n = i;
          o = d;
          r = c;
          break;
        case 1:
          n = u;
          o = i;
          r = c;
          break;
        case 2:
          n = c;
          o = i;
          r = d;
          break;
        case 3:
          n = c;
          o = u;
          r = i;
          break;
        case 4:
          n = d;
          o = c;
          r = i;
          break;
        case 5:
          n = i;
          o = c;
          r = u;
      }
      s.r = Math.floor(n * 255);
      s.g = Math.floor(o * 255);
      s.b = Math.floor(r * 255);
      a.Color.updateColor(s);
      return s;
    },
    hueToColor: function (t, e, i) {
      if (i < 0) {
        i += 1;
      }
      if (i > 1) {
        i -= 1;
      }
      if (i < 1 / 6) {
        return t + (e - t) * 6 * i;
      } else if (i < 0.5) {
        return e;
      } else if (i < 2 / 3) {
        return t + (e - t) * (2 / 3 - i) * 6;
      } else {
        return t;
      }
    },
    createColor: function (t, e, i, s, n, o, r, h) {
      var l = {
        r: t || 0,
        g: e || 0,
        b: i || 0,
        a: s || 1,
        h: n || 0,
        s: o || 0,
        l: r || 0,
        v: h || 0,
        color: 0,
        color32: 0,
        rgba: ""
      };
      return a.Color.updateColor(l);
    },
    updateColor: function (t) {
      t.rgba = "rgba(" + t.r.toString() + "," + t.g.toString() + "," + t.b.toString() + "," + t.a.toString() + ")";
      t.color = a.Color.getColor(t.r, t.g, t.b);
      t.color32 = a.Color.getColor32(t.a * 255, t.r, t.g, t.b);
      return t;
    },
    getColor32: function (t, e, i, s) {
      return t << 24 | e << 16 | i << 8 | s;
    },
    getColor: function (t, e, i) {
      return t << 16 | e << 8 | i;
    },
    RGBtoString: function (t, e, i, s = 255, n = "#") {
      if (n === "#") {
        return "#" + (16777216 + (t << 16) + (e << 8) + i).toString(16).slice(1);
      } else {
        return "0x" + a.Color.componentToHex(s) + a.Color.componentToHex(t) + a.Color.componentToHex(e) + a.Color.componentToHex(i);
      }
    },
    hexToRGB: function (t) {
      var e = a.Color.hexToColor(t);
      if (e) {
        return a.Color.getColor32(e.a, e.r, e.g, e.b);
      }
    },
    hexToColor: function (t, e) {
      t = t.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, s) {
        return e + e + i + i + s + s;
      });
      var i = /^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      if (i) {
        var s = parseInt(i[1], 16);
        var n = parseInt(i[2], 16);
        var o = parseInt(i[3], 16);
        if (e) {
          e.r = s;
          e.g = n;
          e.b = o;
        } else {
          e = a.Color.createColor(s, n, o);
        }
      }
      return e;
    },
    webToColor: function (t, e) {
      e ||= a.Color.createColor();
      var i = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(t);
      if (i) {
        e.r = parseInt(i[1], 10);
        e.g = parseInt(i[2], 10);
        e.b = parseInt(i[3], 10);
        e.a = i[4] !== undefined ? parseFloat(i[4]) : 1;
        a.Color.updateColor(e);
      }
      return e;
    },
    valueToColor: function (t, e) {
      e ||= a.Color.createColor();
      if (typeof t == "string") {
        if (t.indexOf("rgb") === 0) {
          return a.Color.webToColor(t, e);
        } else {
          e.a = 1;
          return a.Color.hexToColor(t, e);
        }
      }
      if (typeof t == "number") {
        var i = a.Color.getRGB(t);
        e.r = i.r;
        e.g = i.g;
        e.b = i.b;
        e.a = i.a / 255;
        return e;
      }
      return e;
    },
    componentToHex: function (t) {
      var e = t.toString(16);
      if (e.length === 1) {
        return "0" + e;
      } else {
        return e;
      }
    },
    HSVColorWheel: function (t = 1, e = 1) {
      var i = [];
      for (var s = 0; s <= 359; s++) {
        i.push(a.Color.HSVtoRGB(s / 359, t, e));
      }
      return i;
    },
    HSLColorWheel: function (t = 0.5, e = 0.5) {
      var i = [];
      for (var s = 0; s <= 359; s++) {
        i.push(a.Color.HSLtoRGB(s / 359, t, e));
      }
      return i;
    },
    interpolateColor: function (t, e, i, s, n = 255) {
      var o = a.Color.getRGB(t);
      var r = a.Color.getRGB(e);
      var h = (r.red - o.red) * s / i + o.red;
      var l = (r.green - o.green) * s / i + o.green;
      var c = (r.blue - o.blue) * s / i + o.blue;
      return a.Color.getColor32(n, h, l, c);
    },
    interpolateColorWithRGB: function (t, e, i, s, n, o) {
      var r = a.Color.getRGB(t);
      var h = (e - r.red) * o / n + r.red;
      var l = (i - r.green) * o / n + r.green;
      var c = (s - r.blue) * o / n + r.blue;
      return a.Color.getColor(h, l, c);
    },
    interpolateRGB: function (t, e, i, s, n, o, r, h) {
      var l = (s - t) * h / r + t;
      var c = (n - e) * h / r + e;
      var u = (o - i) * h / r + i;
      return a.Color.getColor(l, c, u);
    },
    getRandomColor: function (t = 0, e = 255, i = 255) {
      if (e > 255 || t > e) {
        return a.Color.getColor(255, 255, 255);
      }
      var s = t + Math.round(Math.random() * (e - t));
      var n = t + Math.round(Math.random() * (e - t));
      var o = t + Math.round(Math.random() * (e - t));
      return a.Color.getColor32(i, s, n, o);
    },
    getRGB: function (t) {
      if (t > 16777215) {
        return {
          alpha: t >>> 24,
          red: t >> 16 & 255,
          green: t >> 8 & 255,
          blue: t & 255,
          a: t >>> 24,
          r: t >> 16 & 255,
          g: t >> 8 & 255,
          b: t & 255
        };
      } else {
        return {
          alpha: 255,
          red: t >> 16 & 255,
          green: t >> 8 & 255,
          blue: t & 255,
          a: 255,
          r: t >> 16 & 255,
          g: t >> 8 & 255,
          b: t & 255
        };
      }
    },
    getWebRGB: function (t) {
      if (typeof t == "object") {
        return "rgba(" + t.r.toString() + "," + t.g.toString() + "," + t.b.toString() + "," + (t.a / 255).toString() + ")";
      }
      var e = a.Color.getRGB(t);
      return "rgba(" + e.r.toString() + "," + e.g.toString() + "," + e.b.toString() + "," + (e.a / 255).toString() + ")";
    },
    getAlpha: function (t) {
      return t >>> 24;
    },
    getAlphaFloat: function (t) {
      return (t >>> 24) / 255;
    },
    getRed: function (t) {
      return t >> 16 & 255;
    },
    getGreen: function (t) {
      return t >> 8 & 255;
    },
    getBlue: function (t) {
      return t & 255;
    },
    blendNormal: function (t) {
      return t;
    },
    blendLighten: function (t, e) {
      if (e > t) {
        return e;
      } else {
        return t;
      }
    },
    blendDarken: function (t, e) {
      if (e > t) {
        return t;
      } else {
        return e;
      }
    },
    blendMultiply: function (t, e) {
      return t * e / 255;
    },
    blendAverage: function (t, e) {
      return (t + e) / 2;
    },
    blendAdd: function (t, e) {
      return Math.min(255, t + e);
    },
    blendSubtract: function (t, e) {
      return Math.max(0, t + e - 255);
    },
    blendDifference: function (t, e) {
      return Math.abs(t - e);
    },
    blendNegation: function (t, e) {
      return 255 - Math.abs(255 - t - e);
    },
    blendScreen: function (t, e) {
      return 255 - ((255 - t) * (255 - e) >> 8);
    },
    blendExclusion: function (t, e) {
      return t + e - t * 2 * e / 255;
    },
    blendOverlay: function (t, e) {
      if (e < 128) {
        return t * 2 * e / 255;
      } else {
        return 255 - (255 - t) * 2 * (255 - e) / 255;
      }
    },
    blendSoftLight: function (t, e) {
      if (e < 128) {
        return (64 + (t >> 1)) * 2 * (e / 255);
      } else {
        return 255 - (255 - (64 + (t >> 1))) * 2 * (255 - e) / 255;
      }
    },
    blendHardLight: function (t, e) {
      return a.Color.blendOverlay(e, t);
    },
    blendColorDodge: function (t, e) {
      if (e === 255) {
        return e;
      } else {
        return Math.min(255, (t << 8) / (255 - e));
      }
    },
    blendColorBurn: function (t, e) {
      if (e === 0) {
        return e;
      } else {
        return Math.max(0, 255 - (255 - t << 8) / e);
      }
    },
    blendLinearDodge: function (t, e) {
      return a.Color.blendAdd(t, e);
    },
    blendLinearBurn: function (t, e) {
      return a.Color.blendSubtract(t, e);
    },
    blendLinearLight: function (t, e) {
      if (e < 128) {
        return a.Color.blendLinearBurn(t, e * 2);
      } else {
        return a.Color.blendLinearDodge(t, (e - 128) * 2);
      }
    },
    blendVividLight: function (t, e) {
      if (e < 128) {
        return a.Color.blendColorBurn(t, e * 2);
      } else {
        return a.Color.blendColorDodge(t, (e - 128) * 2);
      }
    },
    blendPinLight: function (t, e) {
      if (e < 128) {
        return a.Color.blendDarken(t, e * 2);
      } else {
        return a.Color.blendLighten(t, (e - 128) * 2);
      }
    },
    blendHardMix: function (t, e) {
      if (a.Color.blendVividLight(t, e) < 128) {
        return 0;
      } else {
        return 255;
      }
    },
    blendReflect: function (t, e) {
      if (e === 255) {
        return e;
      } else {
        return Math.min(255, t * t / (255 - e));
      }
    },
    blendGlow: function (t, e) {
      return a.Color.blendReflect(e, t);
    },
    blendPhoenix: function (t, e) {
      return Math.min(t, e) - Math.max(t, e) + 255;
    }
  };
  a.Physics = function (t, e) {
    e = e || {};
    this.game = t;
    this.config = e;
    this.arcade = null;
    this.p2 = null;
    this.ninja = null;
    this.box2d = null;
    this.chipmunk = null;
    this.matter = null;
    this.parseConfig();
  };
  a.Physics.ARCADE = 0;
  a.Physics.P2JS = 1;
  a.Physics.NINJA = 2;
  a.Physics.BOX2D = 3;
  a.Physics.CHIPMUNK = 4;
  a.Physics.MATTERJS = 5;
  a.Physics.prototype = {
    parseConfig: function () {
      if ((!this.config.hasOwnProperty("arcade") || this.config.arcade === true) && !!a.Physics.hasOwnProperty("Arcade")) {
        this.arcade = new a.Physics.Arcade(this.game);
      }
      if (this.config.hasOwnProperty("ninja") && this.config.ninja === true && a.Physics.hasOwnProperty("Ninja")) {
        this.ninja = new a.Physics.Ninja(this.game);
      }
      if (this.config.hasOwnProperty("p2") && this.config.p2 === true && a.Physics.hasOwnProperty("P2")) {
        this.p2 = new a.Physics.P2(this.game, this.config);
      }
      if (this.config.hasOwnProperty("box2d") && this.config.box2d === true && a.Physics.hasOwnProperty("BOX2D")) {
        this.box2d = new a.Physics.BOX2D(this.game, this.config);
      }
      if (this.config.hasOwnProperty("matter") && this.config.matter === true && a.Physics.hasOwnProperty("Matter")) {
        this.matter = new a.Physics.Matter(this.game, this.config);
      }
    },
    startSystem: function (t) {
      if (t === a.Physics.ARCADE) {
        this.arcade = new a.Physics.Arcade(this.game);
      } else if (t === a.Physics.P2JS) {
        if (this.p2 === null) {
          this.p2 = new a.Physics.P2(this.game, this.config);
        } else {
          this.p2.reset();
        }
      } else if (t === a.Physics.NINJA) {
        this.ninja = new a.Physics.Ninja(this.game);
      } else if (t === a.Physics.BOX2D) {
        if (this.box2d === null) {
          this.box2d = new a.Physics.Box2D(this.game, this.config);
        } else {
          this.box2d.reset();
        }
      } else if (t === a.Physics.MATTERJS) {
        if (this.matter === null) {
          this.matter = new a.Physics.Matter(this.game, this.config);
        } else {
          this.matter.reset();
        }
      }
    },
    enable: function (t, e = a.Physics.ARCADE, i = false) {
      if (e === a.Physics.ARCADE) {
        this.arcade.enable(t);
      } else if (e === a.Physics.P2JS && this.p2) {
        this.p2.enable(t, i);
      } else if (e === a.Physics.NINJA && this.ninja) {
        this.ninja.enableAABB(t);
      } else if (e === a.Physics.BOX2D && this.box2d) {
        this.box2d.enable(t);
      } else if (e === a.Physics.MATTERJS && this.matter) {
        this.matter.enable(t);
      }
    },
    preUpdate: function () {
      if (this.p2) {
        this.p2.preUpdate();
      }
      if (this.box2d) {
        this.box2d.preUpdate();
      }
      if (this.matter) {
        this.matter.preUpdate();
      }
    },
    update: function () {
      if (this.p2) {
        this.p2.update();
      }
      if (this.box2d) {
        this.box2d.update();
      }
      if (this.matter) {
        this.matter.update();
      }
    },
    setBoundsToWorld: function () {
      if (this.arcade) {
        this.arcade.setBoundsToWorld();
      }
      if (this.ninja) {
        this.ninja.setBoundsToWorld();
      }
      if (this.p2) {
        this.p2.setBoundsToWorld();
      }
      if (this.box2d) {
        this.box2d.setBoundsToWorld();
      }
      if (this.matter) {
        this.matter.setBoundsToWorld();
      }
    },
    clear: function () {
      if (this.p2) {
        this.p2.clear();
      }
      if (this.box2d) {
        this.box2d.clear();
      }
      if (this.matter) {
        this.matter.clear();
      }
    },
    reset: function () {
      if (this.p2) {
        this.p2.reset();
      }
      if (this.box2d) {
        this.box2d.reset();
      }
      if (this.matter) {
        this.matter.reset();
      }
    },
    destroy: function () {
      if (this.p2) {
        this.p2.destroy();
      }
      if (this.box2d) {
        this.box2d.destroy();
      }
      if (this.matter) {
        this.matter.destroy();
      }
      this.arcade = null;
      this.ninja = null;
      this.p2 = null;
      this.box2d = null;
      this.matter = null;
    }
  };
  a.Physics.prototype.constructor = a.Physics;
  a.Physics.Arcade = function (t) {
    this.game = t;
    this.gravity = new a.Point();
    this.bounds = new a.Rectangle(0, 0, t.world.width, t.world.height);
    this.checkCollision = {
      up: true,
      down: true,
      left: true,
      right: true
    };
    this.maxObjects = 10;
    this.maxLevels = 4;
    this.OVERLAP_BIAS = 4;
    this.forceX = false;
    this.sortDirection = a.Physics.Arcade.LEFT_RIGHT;
    this.skipQuadTree = true;
    this.isPaused = false;
    this.quadTree = new a.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels);
    this._total = 0;
    this.setBoundsToWorld();
  };
  a.Physics.Arcade.prototype.constructor = a.Physics.Arcade;
  a.Physics.Arcade.SORT_NONE = 0;
  a.Physics.Arcade.LEFT_RIGHT = 1;
  a.Physics.Arcade.RIGHT_LEFT = 2;
  a.Physics.Arcade.TOP_BOTTOM = 3;
  a.Physics.Arcade.BOTTOM_TOP = 4;
  a.Physics.Arcade.prototype = {
    setBounds: function (t, e, i, s) {
      this.bounds.setTo(t, e, i, s);
    },
    setBoundsToWorld: function () {
      this.bounds.copyFrom(this.game.world.bounds);
    },
    enable: function (t, e = true) {
      var i = 1;
      if (Array.isArray(t)) {
        for (i = t.length; i--;) {
          if (t[i] instanceof a.Group) {
            this.enable(t[i].children, e);
          } else {
            this.enableBody(t[i]);
            if (e && t[i].hasOwnProperty("children") && t[i].children.length > 0) {
              this.enable(t[i], true);
            }
          }
        }
      } else if (t instanceof a.Group) {
        this.enable(t.children, e);
      } else {
        this.enableBody(t);
        if (e && t.hasOwnProperty("children") && t.children.length > 0) {
          this.enable(t.children, true);
        }
      }
    },
    enableBody: function (t) {
      if (t.hasOwnProperty("body") && t.body === null) {
        t.body = new a.Physics.Arcade.Body(t);
        if (t.parent && t.parent instanceof a.Group) {
          t.parent.addToHash(t);
        }
      }
    },
    updateMotion: function (t) {
      var e = this.computeVelocity(0, t, t.angularVelocity, t.angularAcceleration, t.angularDrag, t.maxAngular) - t.angularVelocity;
      t.angularVelocity += e;
      t.rotation += t.angularVelocity * this.game.time.physicsElapsed;
      t.velocity.x = this.computeVelocity(1, t, t.velocity.x, t.acceleration.x, t.drag.x, t.maxVelocity.x);
      t.velocity.y = this.computeVelocity(2, t, t.velocity.y, t.acceleration.y, t.drag.y, t.maxVelocity.y);
    },
    computeVelocity: function (t, e, i, s, n, a = 10000) {
      if (t === 1 && e.allowGravity) {
        i += (this.gravity.x + e.gravity.x) * this.game.time.physicsElapsed;
      } else if (t === 2 && e.allowGravity) {
        i += (this.gravity.y + e.gravity.y) * this.game.time.physicsElapsed;
      }
      if (s) {
        i += s * this.game.time.physicsElapsed;
      } else if (n) {
        n *= this.game.time.physicsElapsed;
        if (i - n > 0) {
          i -= n;
        } else if (i + n < 0) {
          i += n;
        } else {
          i = 0;
        }
      }
      if (i > a) {
        i = a;
      } else if (i < -a) {
        i = -a;
      }
      return i;
    },
    overlap: function (t, e, i, s, n) {
      i = i || null;
      s = s || null;
      n = n || i;
      this._total = 0;
      if (!Array.isArray(t) && Array.isArray(e)) {
        for (var a = 0; a < e.length; a++) {
          this.collideHandler(t, e[a], i, s, n, true);
        }
      } else if (Array.isArray(t) && !Array.isArray(e)) {
        for (var a = 0; a < t.length; a++) {
          this.collideHandler(t[a], e, i, s, n, true);
        }
      } else if (Array.isArray(t) && Array.isArray(e)) {
        for (var a = 0; a < t.length; a++) {
          for (var o = 0; o < e.length; o++) {
            this.collideHandler(t[a], e[o], i, s, n, true);
          }
        }
      } else {
        this.collideHandler(t, e, i, s, n, true);
      }
      return this._total > 0;
    },
    collide: function (t, e, i, s, n) {
      i = i || null;
      s = s || null;
      n = n || i;
      this._total = 0;
      if (!Array.isArray(t) && Array.isArray(e)) {
        for (var a = 0; a < e.length; a++) {
          this.collideHandler(t, e[a], i, s, n, false);
        }
      } else if (Array.isArray(t) && !Array.isArray(e)) {
        for (var a = 0; a < t.length; a++) {
          this.collideHandler(t[a], e, i, s, n, false);
        }
      } else if (Array.isArray(t) && Array.isArray(e)) {
        for (var a = 0; a < t.length; a++) {
          for (var o = 0; o < e.length; o++) {
            this.collideHandler(t[a], e[o], i, s, n, false);
          }
        }
      } else {
        this.collideHandler(t, e, i, s, n, false);
      }
      return this._total > 0;
    },
    sortLeftRight: function (t, e) {
      if (t.body && e.body) {
        return t.body.x - e.body.x;
      } else {
        return 0;
      }
    },
    sortRightLeft: function (t, e) {
      if (t.body && e.body) {
        return e.body.x - t.body.x;
      } else {
        return 0;
      }
    },
    sortTopBottom: function (t, e) {
      if (t.body && e.body) {
        return t.body.y - e.body.y;
      } else {
        return 0;
      }
    },
    sortBottomTop: function (t, e) {
      if (t.body && e.body) {
        return e.body.y - t.body.y;
      } else {
        return 0;
      }
    },
    sort: function (t, e) {
      if (t.physicsSortDirection !== null) {
        e = t.physicsSortDirection;
      } else if (e === undefined) {
        e = this.sortDirection;
      }
      if (e === a.Physics.Arcade.LEFT_RIGHT) {
        t.hash.sort(this.sortLeftRight);
      } else if (e === a.Physics.Arcade.RIGHT_LEFT) {
        t.hash.sort(this.sortRightLeft);
      } else if (e === a.Physics.Arcade.TOP_BOTTOM) {
        t.hash.sort(this.sortTopBottom);
      } else if (e === a.Physics.Arcade.BOTTOM_TOP) {
        t.hash.sort(this.sortBottomTop);
      }
    },
    collideHandler: function (t, e, i, s, n, o) {
      if (e === undefined && t.physicsType === a.GROUP) {
        this.sort(t);
        this.collideGroupVsSelf(t, i, s, n, o);
        return;
      }
      if (t && e && t.exists && e.exists) {
        if (this.sortDirection !== a.Physics.Arcade.SORT_NONE) {
          if (t.physicsType === a.GROUP) {
            this.sort(t);
          }
          if (e.physicsType === a.GROUP) {
            this.sort(e);
          }
        }
        if (t.physicsType === a.SPRITE) {
          if (e.physicsType === a.SPRITE) {
            this.collideSpriteVsSprite(t, e, i, s, n, o);
          } else if (e.physicsType === a.GROUP) {
            this.collideSpriteVsGroup(t, e, i, s, n, o);
          } else if (e.physicsType === a.TILEMAPLAYER) {
            this.collideSpriteVsTilemapLayer(t, e, i, s, n, o);
          }
        } else if (t.physicsType === a.GROUP) {
          if (e.physicsType === a.SPRITE) {
            this.collideSpriteVsGroup(e, t, i, s, n, o);
          } else if (e.physicsType === a.GROUP) {
            this.collideGroupVsGroup(t, e, i, s, n, o);
          } else if (e.physicsType === a.TILEMAPLAYER) {
            this.collideGroupVsTilemapLayer(t, e, i, s, n, o);
          }
        } else if (t.physicsType === a.TILEMAPLAYER) {
          if (e.physicsType === a.SPRITE) {
            this.collideSpriteVsTilemapLayer(e, t, i, s, n, o);
          } else if (e.physicsType === a.GROUP) {
            this.collideGroupVsTilemapLayer(e, t, i, s, n, o);
          }
        }
      }
    },
    collideSpriteVsSprite: function (t, e, i, s, n, a) {
      return !!t.body && !!e.body && (this.separate(t.body, e.body, s, n, a) && (i && i.call(n, t, e), this._total++), true);
    },
    collideSpriteVsGroup: function (t, e, i, s, n, o) {
      if (e.length !== 0 && t.body) {
        if (this.skipQuadTree || t.body.skipQuadTree) {
          var r = {};
          for (var h = 0; h < e.hash.length; h++) {
            var l = e.hash[h];
            if (l && l.exists && l.body) {
              r = l.body.getBounds(r);
              if (this.sortDirection === a.Physics.Arcade.LEFT_RIGHT) {
                if (t.body.right < r.x) {
                  break;
                }
                if (r.right < t.body.x) {
                  continue;
                }
              } else if (this.sortDirection === a.Physics.Arcade.RIGHT_LEFT) {
                if (t.body.x > r.right) {
                  break;
                }
                if (r.x > t.body.right) {
                  continue;
                }
              } else if (this.sortDirection === a.Physics.Arcade.TOP_BOTTOM) {
                if (t.body.bottom < r.y) {
                  break;
                }
                if (r.bottom < t.body.y) {
                  continue;
                }
              } else if (this.sortDirection === a.Physics.Arcade.BOTTOM_TOP) {
                if (t.body.y > r.bottom) {
                  break;
                }
                if (r.y > t.body.bottom) {
                  continue;
                }
              }
              this.collideSpriteVsSprite(t, l, i, s, n, o);
            }
          }
        } else {
          this.quadTree.clear();
          this.quadTree.reset(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels);
          this.quadTree.populate(e);
          for (var c = this.quadTree.retrieve(t), h = 0; h < c.length; h++) {
            if (this.separate(t.body, c[h], s, n, o)) {
              if (i) {
                i.call(n, t, c[h].sprite);
              }
              this._total++;
            }
          }
        }
      }
    },
    collideGroupVsSelf: function (t, e, i, s, n) {
      if (t.length !== 0) {
        for (var o = 0; o < t.hash.length; o++) {
          var r = {};
          var h = t.hash[o];
          if (h && h.exists && h.body) {
            r = h.body.getBounds(r);
            for (var l = o + 1; l < t.hash.length; l++) {
              var c = {};
              var u = t.hash[l];
              if (u && u.exists && u.body) {
                c = u.body.getBounds(c);
                if (this.sortDirection === a.Physics.Arcade.LEFT_RIGHT) {
                  if (r.right < c.x) {
                    break;
                  }
                  if (c.right < r.x) {
                    continue;
                  }
                } else if (this.sortDirection === a.Physics.Arcade.RIGHT_LEFT) {
                  if (r.x > c.right) {
                    continue;
                  }
                  if (c.x > r.right) {
                    break;
                  }
                } else if (this.sortDirection === a.Physics.Arcade.TOP_BOTTOM) {
                  if (r.bottom < c.y) {
                    continue;
                  }
                  if (c.bottom < r.y) {
                    break;
                  }
                } else if (this.sortDirection === a.Physics.Arcade.BOTTOM_TOP) {
                  if (r.y > c.bottom) {
                    continue;
                  }
                  if (c.y > h.body.bottom) {
                    break;
                  }
                }
                this.collideSpriteVsSprite(h, u, e, i, s, n);
              }
            }
          }
        }
      }
    },
    collideGroupVsGroup: function (t, e, i, s, n, o) {
      if (t.length !== 0 && e.length !== 0) {
        for (var r = 0; r < t.children.length; r++) {
          if (t.children[r].exists) {
            if (t.children[r].physicsType === a.GROUP) {
              this.collideGroupVsGroup(t.children[r], e, i, s, n, o);
            } else {
              this.collideSpriteVsGroup(t.children[r], e, i, s, n, o);
            }
          }
        }
      }
    },
    separate: function (t, e, i, s, n) {
      if (!t.enable || !e.enable || t.checkCollision.none || e.checkCollision.none || !this.intersects(t, e)) {
        return false;
      }
      if (i && i.call(s, t.sprite, e.sprite) === false) {
        return false;
      }
      if (t.isCircle && e.isCircle) {
        return this.separateCircle(t, e, n);
      }
      if (t.isCircle !== e.isCircle) {
        var a = t.isCircle ? e : t;
        var o = t.isCircle ? t : e;
        var r = {
          x: a.x,
          y: a.y,
          right: a.right,
          bottom: a.bottom
        };
        var h = {
          x: o.x + o.radius,
          y: o.y + o.radius
        };
        if ((h.y < r.y || h.y > r.bottom) && (h.x < r.x || h.x > r.right)) {
          return this.separateCircle(t, e, n);
        }
      }
      var l = false;
      var c = false;
      if (this.forceX || Math.abs(this.gravity.y + t.gravity.y) < Math.abs(this.gravity.x + t.gravity.x)) {
        l = this.separateX(t, e, n);
        if (this.intersects(t, e)) {
          c = this.separateY(t, e, n);
        }
      } else {
        c = this.separateY(t, e, n);
        if (this.intersects(t, e)) {
          l = this.separateX(t, e, n);
        }
      }
      var u = l || c;
      if (u) {
        if (n) {
          if (t.onOverlap) {
            t.onOverlap.dispatch(t.sprite, e.sprite);
          }
          if (e.onOverlap) {
            e.onOverlap.dispatch(e.sprite, t.sprite);
          }
        } else {
          if (t.onCollide) {
            t.onCollide.dispatch(t.sprite, e.sprite);
          }
          if (e.onCollide) {
            e.onCollide.dispatch(e.sprite, t.sprite);
          }
        }
      }
      return u;
    },
    intersects: function (t, e) {
      return t !== e && (t.isCircle ? e.isCircle ? a.Math.distance(t.center.x, t.center.y, e.center.x, e.center.y) <= t.radius + e.radius : this.circleBodyIntersects(t, e) : e.isCircle ? this.circleBodyIntersects(e, t) : !(t.right <= e.position.x) && !(t.bottom <= e.position.y) && !(t.position.x >= e.right) && !(t.position.y >= e.bottom));
    },
    circleBodyIntersects: function (t, e) {
      var i = a.Math.clamp(t.center.x, e.left, e.right);
      var s = a.Math.clamp(t.center.y, e.top, e.bottom);
      return (t.center.x - i) * (t.center.x - i) + (t.center.y - s) * (t.center.y - s) <= t.radius * t.radius;
    },
    separateCircle: function (t, e, i) {
      this.getOverlapX(t, e);
      this.getOverlapY(t, e);
      var s = e.center.x - t.center.x;
      var n = e.center.y - t.center.y;
      var o = Math.atan2(n, s);
      var r = 0;
      if (t.isCircle !== e.isCircle) {
        var h = {
          x: e.isCircle ? t.position.x : e.position.x,
          y: e.isCircle ? t.position.y : e.position.y,
          right: e.isCircle ? t.right : e.right,
          bottom: e.isCircle ? t.bottom : e.bottom
        };
        var l = {
          x: t.isCircle ? t.position.x + t.radius : e.position.x + e.radius,
          y: t.isCircle ? t.position.y + t.radius : e.position.y + e.radius,
          radius: t.isCircle ? t.radius : e.radius
        };
        if (l.y < h.y) {
          if (l.x < h.x) {
            r = a.Math.distance(l.x, l.y, h.x, h.y) - l.radius;
          } else if (l.x > h.right) {
            r = a.Math.distance(l.x, l.y, h.right, h.y) - l.radius;
          }
        } else if (l.y > h.bottom) {
          if (l.x < h.x) {
            r = a.Math.distance(l.x, l.y, h.x, h.bottom) - l.radius;
          } else if (l.x > h.right) {
            r = a.Math.distance(l.x, l.y, h.right, h.bottom) - l.radius;
          }
        }
        r *= -1;
      } else {
        r = t.radius + e.radius - a.Math.distance(t.center.x, t.center.y, e.center.x, e.center.y);
      }
      if (i || r === 0 || t.immovable && e.immovable || t.customSeparateX || e.customSeparateX) {
        if (r !== 0) {
          if (t.onOverlap) {
            t.onOverlap.dispatch(t.sprite, e.sprite);
          }
          if (e.onOverlap) {
            e.onOverlap.dispatch(e.sprite, t.sprite);
          }
        }
        return r !== 0;
      }
      var c = {
        x: t.velocity.x * Math.cos(o) + t.velocity.y * Math.sin(o),
        y: t.velocity.x * Math.sin(o) - t.velocity.y * Math.cos(o)
      };
      var u = {
        x: e.velocity.x * Math.cos(o) + e.velocity.y * Math.sin(o),
        y: e.velocity.x * Math.sin(o) - e.velocity.y * Math.cos(o)
      };
      var d = ((t.mass - e.mass) * c.x + e.mass * 2 * u.x) / (t.mass + e.mass);
      var p = (t.mass * 2 * c.x + (e.mass - t.mass) * u.x) / (t.mass + e.mass);
      if (!t.immovable) {
        t.velocity.x = (d * Math.cos(o) - c.y * Math.sin(o)) * t.bounce.x;
        t.velocity.y = (c.y * Math.cos(o) + d * Math.sin(o)) * t.bounce.y;
      }
      if (!e.immovable) {
        e.velocity.x = (p * Math.cos(o) - u.y * Math.sin(o)) * e.bounce.x;
        e.velocity.y = (u.y * Math.cos(o) + p * Math.sin(o)) * e.bounce.y;
      }
      if (Math.abs(o) < Math.PI / 2) {
        if (t.velocity.x > 0 && !t.immovable && e.velocity.x > t.velocity.x) {
          t.velocity.x *= -1;
        } else if (e.velocity.x < 0 && !e.immovable && t.velocity.x < e.velocity.x) {
          e.velocity.x *= -1;
        } else if (t.velocity.y > 0 && !t.immovable && e.velocity.y > t.velocity.y) {
          t.velocity.y *= -1;
        } else if (e.velocity.y < 0 && !e.immovable && t.velocity.y < e.velocity.y) {
          e.velocity.y *= -1;
        }
      } else if (Math.abs(o) > Math.PI / 2) {
        if (t.velocity.x < 0 && !t.immovable && e.velocity.x < t.velocity.x) {
          t.velocity.x *= -1;
        } else if (e.velocity.x > 0 && !e.immovable && t.velocity.x > e.velocity.x) {
          e.velocity.x *= -1;
        } else if (t.velocity.y < 0 && !t.immovable && e.velocity.y < t.velocity.y) {
          t.velocity.y *= -1;
        } else if (e.velocity.y > 0 && !e.immovable && t.velocity.x > e.velocity.y) {
          e.velocity.y *= -1;
        }
      }
      if (!t.immovable) {
        t.x += t.velocity.x * this.game.time.physicsElapsed - r * Math.cos(o);
        t.y += t.velocity.y * this.game.time.physicsElapsed - r * Math.sin(o);
      }
      if (!e.immovable) {
        e.x += e.velocity.x * this.game.time.physicsElapsed + r * Math.cos(o);
        e.y += e.velocity.y * this.game.time.physicsElapsed + r * Math.sin(o);
      }
      if (t.onCollide) {
        t.onCollide.dispatch(t.sprite, e.sprite);
      }
      if (e.onCollide) {
        e.onCollide.dispatch(e.sprite, t.sprite);
      }
      return true;
    },
    getOverlapX: function (t, e, i) {
      var s = 0;
      var n = t.deltaAbsX() + e.deltaAbsX() + this.OVERLAP_BIAS;
      if (t.deltaX() === 0 && e.deltaX() === 0) {
        t.embedded = true;
        e.embedded = true;
      } else if (t.deltaX() > e.deltaX()) {
        s = t.right - e.x;
        if (s > n && !i || t.checkCollision.right === false || e.checkCollision.left === false) {
          s = 0;
        } else {
          t.touching.none = false;
          t.touching.right = true;
          e.touching.none = false;
          e.touching.left = true;
        }
      } else if (t.deltaX() < e.deltaX()) {
        s = t.x - e.width - e.x;
        if (-s > n && !i || t.checkCollision.left === false || e.checkCollision.right === false) {
          s = 0;
        } else {
          t.touching.none = false;
          t.touching.left = true;
          e.touching.none = false;
          e.touching.right = true;
        }
      }
      t.overlapX = s;
      e.overlapX = s;
      return s;
    },
    getOverlapY: function (t, e, i) {
      var s = 0;
      var n = t.deltaAbsY() + e.deltaAbsY() + this.OVERLAP_BIAS;
      if (t.deltaY() === 0 && e.deltaY() === 0) {
        t.embedded = true;
        e.embedded = true;
      } else if (t.deltaY() > e.deltaY()) {
        s = t.bottom - e.y;
        if (s > n && !i || t.checkCollision.down === false || e.checkCollision.up === false) {
          s = 0;
        } else {
          t.touching.none = false;
          t.touching.down = true;
          e.touching.none = false;
          e.touching.up = true;
        }
      } else if (t.deltaY() < e.deltaY()) {
        s = t.y - e.bottom;
        if (-s > n && !i || t.checkCollision.up === false || e.checkCollision.down === false) {
          s = 0;
        } else {
          t.touching.none = false;
          t.touching.up = true;
          e.touching.none = false;
          e.touching.down = true;
        }
      }
      t.overlapY = s;
      e.overlapY = s;
      return s;
    },
    separateX: function (t, e, i) {
      var s = this.getOverlapX(t, e, i);
      if (i || s === 0 || t.immovable && e.immovable || t.customSeparateX || e.customSeparateX) {
        return s !== 0 || t.embedded && e.embedded;
      }
      var n = t.velocity.x;
      var a = e.velocity.x;
      if (t.immovable || e.immovable) {
        if (t.immovable) {
          e.x += s;
          e.velocity.x = n - a * e.bounce.x;
          if (t.moves) {
            e.y += (t.y - t.prev.y) * t.friction.y;
          }
        } else {
          t.x -= s;
          t.velocity.x = a - n * t.bounce.x;
          if (e.moves) {
            t.y += (e.y - e.prev.y) * e.friction.y;
          }
        }
      } else {
        s *= 0.5;
        t.x -= s;
        e.x += s;
        var o = Math.sqrt(a * a * e.mass / t.mass) * (a > 0 ? 1 : -1);
        var r = Math.sqrt(n * n * t.mass / e.mass) * (n > 0 ? 1 : -1);
        var h = (o + r) * 0.5;
        o -= h;
        r -= h;
        t.velocity.x = h + o * t.bounce.x;
        e.velocity.x = h + r * e.bounce.x;
      }
      return true;
    },
    separateY: function (t, e, i) {
      var s = this.getOverlapY(t, e, i);
      if (i || s === 0 || t.immovable && e.immovable || t.customSeparateY || e.customSeparateY) {
        return s !== 0 || t.embedded && e.embedded;
      }
      var n = t.velocity.y;
      var a = e.velocity.y;
      if (t.immovable || e.immovable) {
        if (t.immovable) {
          e.y += s;
          e.velocity.y = n - a * e.bounce.y;
          if (t.moves) {
            e.x += (t.x - t.prev.x) * t.friction.x;
          }
        } else {
          t.y -= s;
          t.velocity.y = a - n * t.bounce.y;
          if (e.moves) {
            t.x += (e.x - e.prev.x) * e.friction.x;
          }
        }
      } else {
        s *= 0.5;
        t.y -= s;
        e.y += s;
        var o = Math.sqrt(a * a * e.mass / t.mass) * (a > 0 ? 1 : -1);
        var r = Math.sqrt(n * n * t.mass / e.mass) * (n > 0 ? 1 : -1);
        var h = (o + r) * 0.5;
        o -= h;
        r -= h;
        t.velocity.y = h + o * t.bounce.y;
        e.velocity.y = h + r * e.bounce.y;
      }
      return true;
    },
    getObjectsUnderPointer: function (t, e, i, s) {
      if (e.length !== 0 && t.exists) {
        return this.getObjectsAtLocation(t.x, t.y, e, i, s, t);
      }
    },
    getObjectsAtLocation: function (t, e, i, s, n, o) {
      this.quadTree.clear();
      this.quadTree.reset(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels);
      this.quadTree.populate(i);
      var r = new a.Rectangle(t, e, 1, 1);
      var h = [];
      for (var l = this.quadTree.retrieve(r), c = 0; c < l.length; c++) {
        if (l[c].hitTest(t, e)) {
          if (s) {
            s.call(n, o, l[c].sprite);
          }
          h.push(l[c].sprite);
        }
      }
      return h;
    },
    moveToObject: function (t, e, i = 60, s = 0) {
      var n = Math.atan2(e.y - t.y, e.x - t.x);
      if (s > 0) {
        i = this.distanceBetween(t, e) / (s / 1000);
      }
      t.body.velocity.x = Math.cos(n) * i;
      t.body.velocity.y = Math.sin(n) * i;
      return n;
    },
    moveToPointer: function (t, e = 60, i, s) {
      i = i || this.game.input.activePointer;
      if (s === undefined) {
        s = 0;
      }
      var n = this.angleToPointer(t, i);
      if (s > 0) {
        e = this.distanceToPointer(t, i) / (s / 1000);
      }
      t.body.velocity.x = Math.cos(n) * e;
      t.body.velocity.y = Math.sin(n) * e;
      return n;
    },
    moveToXY: function (t, e, i, s = 60, n = 0) {
      var a = Math.atan2(i - t.y, e - t.x);
      if (n > 0) {
        s = this.distanceToXY(t, e, i) / (n / 1000);
      }
      t.body.velocity.x = Math.cos(a) * s;
      t.body.velocity.y = Math.sin(a) * s;
      return a;
    },
    velocityFromAngle: function (t, e = 60, i) {
      i = i || new a.Point();
      return i.setTo(Math.cos(this.game.math.degToRad(t)) * e, Math.sin(this.game.math.degToRad(t)) * e);
    },
    velocityFromRotation: function (t, e = 60, i) {
      i = i || new a.Point();
      return i.setTo(Math.cos(t) * e, Math.sin(t) * e);
    },
    accelerationFromRotation: function (t, e = 60, i) {
      i = i || new a.Point();
      return i.setTo(Math.cos(t) * e, Math.sin(t) * e);
    },
    accelerateToObject: function (t, e, i = 60, s = 1000, n = 1000) {
      var a = this.angleBetween(t, e);
      t.body.acceleration.setTo(Math.cos(a) * i, Math.sin(a) * i);
      t.body.maxVelocity.setTo(s, n);
      return a;
    },
    accelerateToPointer: function (t, e = this.game.input.activePointer, i = 60, s = 1000, n = 1000) {
      var a = this.angleToPointer(t, e);
      t.body.acceleration.setTo(Math.cos(a) * i, Math.sin(a) * i);
      t.body.maxVelocity.setTo(s, n);
      return a;
    },
    accelerateToXY: function (t, e, i, s = 60, n = 1000, a = 1000) {
      var o = this.angleToXY(t, e, i);
      t.body.acceleration.setTo(Math.cos(o) * s, Math.sin(o) * s);
      t.body.maxVelocity.setTo(n, a);
      return o;
    },
    distanceBetween: function (t, e, i = false) {
      var s = i ? t.world.x - e.world.x : t.x - e.x;
      var n = i ? t.world.y - e.world.y : t.y - e.y;
      return Math.sqrt(s * s + n * n);
    },
    distanceToXY: function (t, e, i, s = false) {
      var n = s ? t.world.x - e : t.x - e;
      var a = s ? t.world.y - i : t.y - i;
      return Math.sqrt(n * n + a * a);
    },
    distanceToPointer: function (t, e = this.game.input.activePointer, i = false) {
      var s = i ? t.world.x - e.worldX : t.x - e.worldX;
      var n = i ? t.world.y - e.worldY : t.y - e.worldY;
      return Math.sqrt(s * s + n * n);
    },
    angleBetween: function (t, e, i = false) {
      if (i) {
        return Math.atan2(e.world.y - t.world.y, e.world.x - t.world.x);
      } else {
        return Math.atan2(e.y - t.y, e.x - t.x);
      }
    },
    angleBetweenCenters: function (t, e) {
      var i = e.centerX - t.centerX;
      var s = e.centerY - t.centerY;
      return Math.atan2(s, i);
    },
    angleToXY: function (t, e, i, s = false) {
      if (s) {
        return Math.atan2(i - t.world.y, e - t.world.x);
      } else {
        return Math.atan2(i - t.y, e - t.x);
      }
    },
    angleToPointer: function (t, e = this.game.input.activePointer, i = false) {
      if (i) {
        return Math.atan2(e.worldY - t.world.y, e.worldX - t.world.x);
      } else {
        return Math.atan2(e.worldY - t.y, e.worldX - t.x);
      }
    },
    worldAngleToPointer: function (t, e) {
      return this.angleToPointer(t, e, true);
    }
  };
  a.Physics.Arcade.Body = function (t) {
    this.sprite = t;
    this.game = t.game;
    this.type = a.Physics.ARCADE;
    this.enable = true;
    this.isCircle = false;
    this.radius = 0;
    this.offset = new a.Point();
    this.position = new a.Point(t.x, t.y);
    this.prev = new a.Point(this.position.x, this.position.y);
    this.allowRotation = true;
    this.rotation = t.angle;
    this.preRotation = t.angle;
    this.width = t.width;
    this.height = t.height;
    this.sourceWidth = t.width;
    this.sourceHeight = t.height;
    if (t.texture) {
      this.sourceWidth = t.texture.frame.width;
      this.sourceHeight = t.texture.frame.height;
    }
    this.halfWidth = Math.abs(t.width / 2);
    this.halfHeight = Math.abs(t.height / 2);
    this.center = new a.Point(t.x + this.halfWidth, t.y + this.halfHeight);
    this.velocity = new a.Point();
    this.newVelocity = new a.Point();
    this.deltaMax = new a.Point();
    this.acceleration = new a.Point();
    this.drag = new a.Point();
    this.allowGravity = true;
    this.gravity = new a.Point();
    this.bounce = new a.Point();
    this.worldBounce = null;
    this.onWorldBounds = null;
    this.onCollide = null;
    this.onOverlap = null;
    this.maxVelocity = new a.Point(10000, 10000);
    this.friction = new a.Point(1, 0);
    this.angularVelocity = 0;
    this.angularAcceleration = 0;
    this.angularDrag = 0;
    this.maxAngular = 1000;
    this.mass = 1;
    this.angle = 0;
    this.speed = 0;
    this.facing = a.NONE;
    this.immovable = false;
    this.moves = true;
    this.customSeparateX = false;
    this.customSeparateY = false;
    this.overlapX = 0;
    this.overlapY = 0;
    this.overlapR = 0;
    this.embedded = false;
    this.collideWorldBounds = false;
    this.checkCollision = {
      none: false,
      any: true,
      up: true,
      down: true,
      left: true,
      right: true
    };
    this.touching = {
      none: true,
      up: false,
      down: false,
      left: false,
      right: false
    };
    this.wasTouching = {
      none: true,
      up: false,
      down: false,
      left: false,
      right: false
    };
    this.blocked = {
      up: false,
      down: false,
      left: false,
      right: false
    };
    this.tilePadding = new a.Point();
    this.dirty = false;
    this.skipQuadTree = false;
    this.syncBounds = false;
    this.isMoving = false;
    this.stopVelocityOnCollide = true;
    this.moveTimer = 0;
    this.moveDistance = 0;
    this.moveDuration = 0;
    this.moveTarget = null;
    this.moveEnd = null;
    this.onMoveComplete = new a.Signal();
    this.movementCallback = null;
    this.movementCallbackContext = null;
    this._reset = true;
    this._sx = t.scale.x;
    this._sy = t.scale.y;
    this._dx = 0;
    this._dy = 0;
  };
  a.Physics.Arcade.Body.prototype = {
    updateBounds: function () {
      if (this.syncBounds) {
        var t = this.sprite.getBounds();
        t.ceilAll();
        if (t.width !== this.width || t.height !== this.height) {
          this.width = t.width;
          this.height = t.height;
          this._reset = true;
        }
      } else {
        var e = Math.abs(this.sprite.scale.x);
        var i = Math.abs(this.sprite.scale.y);
        if (e !== this._sx || i !== this._sy) {
          this.width = this.sourceWidth * e;
          this.height = this.sourceHeight * i;
          this._sx = e;
          this._sy = i;
          this._reset = true;
        }
      }
      if (this._reset) {
        this.halfWidth = Math.floor(this.width / 2);
        this.halfHeight = Math.floor(this.height / 2);
        this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
      }
    },
    preUpdate: function () {
      if (this.enable && !this.game.physics.arcade.isPaused) {
        this.dirty = true;
        this.wasTouching.none = this.touching.none;
        this.wasTouching.up = this.touching.up;
        this.wasTouching.down = this.touching.down;
        this.wasTouching.left = this.touching.left;
        this.wasTouching.right = this.touching.right;
        this.touching.none = true;
        this.touching.up = false;
        this.touching.down = false;
        this.touching.left = false;
        this.touching.right = false;
        this.blocked.up = false;
        this.blocked.down = false;
        this.blocked.left = false;
        this.blocked.right = false;
        this.embedded = false;
        this.updateBounds();
        this.position.x = this.sprite.world.x - this.sprite.anchor.x * this.sprite.width + this.sprite.scale.x * this.offset.x;
        this.position.x -= this.sprite.scale.x < 0 ? this.width : 0;
        this.position.y = this.sprite.world.y - this.sprite.anchor.y * this.sprite.height + this.sprite.scale.y * this.offset.y;
        this.position.y -= this.sprite.scale.y < 0 ? this.height : 0;
        this.rotation = this.sprite.angle;
        this.preRotation = this.rotation;
        if (this._reset || this.sprite.fresh) {
          this.prev.x = this.position.x;
          this.prev.y = this.position.y;
        }
        if (this.moves) {
          this.game.physics.arcade.updateMotion(this);
          this.newVelocity.set(this.velocity.x * this.game.time.physicsElapsed, this.velocity.y * this.game.time.physicsElapsed);
          this.position.x += this.newVelocity.x;
          this.position.y += this.newVelocity.y;
          if (this.position.x !== this.prev.x || this.position.y !== this.prev.y) {
            this.angle = Math.atan2(this.velocity.y, this.velocity.x);
          }
          this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
          if (this.collideWorldBounds && this.checkWorldBounds() && this.onWorldBounds) {
            this.onWorldBounds.dispatch(this.sprite, this.blocked.up, this.blocked.down, this.blocked.left, this.blocked.right);
          }
        }
        this._dx = this.deltaX();
        this._dy = this.deltaY();
        this._reset = false;
      }
    },
    updateMovement: function () {
      var t = 0;
      var e = this.overlapX !== 0 || this.overlapY !== 0;
      if (this.moveDuration > 0) {
        this.moveTimer += this.game.time.elapsedMS;
        t = this.moveTimer / this.moveDuration;
      } else {
        this.moveTarget.end.set(this.position.x, this.position.y);
        t = this.moveTarget.length / this.moveDistance;
      }
      if (this.movementCallback) {
        var i = this.movementCallback.call(this.movementCallbackContext, this, this.velocity, t);
      }
      return !e && !(t >= 1) && (i === undefined || i === true) || (this.stopMovement(t >= 1 || this.stopVelocityOnCollide && e), false);
    },
    stopMovement: function (t) {
      if (this.isMoving) {
        this.isMoving = false;
        if (t) {
          this.velocity.set(0);
        }
        this.onMoveComplete.dispatch(this.sprite, this.overlapX !== 0 || this.overlapY !== 0);
      }
    },
    postUpdate: function () {
      if (this.enable && this.dirty) {
        if (this.isMoving) {
          this.updateMovement();
        }
        this.dirty = false;
        if (this.deltaX() < 0) {
          this.facing = a.LEFT;
        } else if (this.deltaX() > 0) {
          this.facing = a.RIGHT;
        }
        if (this.deltaY() < 0) {
          this.facing = a.UP;
        } else if (this.deltaY() > 0) {
          this.facing = a.DOWN;
        }
        if (this.moves) {
          this._dx = this.deltaX();
          this._dy = this.deltaY();
          if (this.deltaMax.x !== 0 && this._dx !== 0) {
            if (this._dx < 0 && this._dx < -this.deltaMax.x) {
              this._dx = -this.deltaMax.x;
            } else if (this._dx > 0 && this._dx > this.deltaMax.x) {
              this._dx = this.deltaMax.x;
            }
          }
          if (this.deltaMax.y !== 0 && this._dy !== 0) {
            if (this._dy < 0 && this._dy < -this.deltaMax.y) {
              this._dy = -this.deltaMax.y;
            } else if (this._dy > 0 && this._dy > this.deltaMax.y) {
              this._dy = this.deltaMax.y;
            }
          }
          this.sprite.position.x += this._dx;
          this.sprite.position.y += this._dy;
          this._reset = true;
        }
        this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
        if (this.allowRotation) {
          this.sprite.angle += this.deltaZ();
        }
        this.prev.x = this.position.x;
        this.prev.y = this.position.y;
      }
    },
    checkWorldBounds: function () {
      var t = this.position;
      var e = this.game.physics.arcade.bounds;
      var i = this.game.physics.arcade.checkCollision;
      var s = this.worldBounce ? -this.worldBounce.x : -this.bounce.x;
      var n = this.worldBounce ? -this.worldBounce.y : -this.bounce.y;
      if (this.isCircle) {
        var a = {
          x: this.center.x - this.radius,
          y: this.center.y - this.radius,
          right: this.center.x + this.radius,
          bottom: this.center.y + this.radius
        };
        if (a.x < e.x && i.left) {
          t.x = e.x - this.halfWidth + this.radius;
          this.velocity.x *= s;
          this.blocked.left = true;
        } else if (a.right > e.right && i.right) {
          t.x = e.right - this.halfWidth - this.radius;
          this.velocity.x *= s;
          this.blocked.right = true;
        }
        if (a.y < e.y && i.up) {
          t.y = e.y - this.halfHeight + this.radius;
          this.velocity.y *= n;
          this.blocked.up = true;
        } else if (a.bottom > e.bottom && i.down) {
          t.y = e.bottom - this.halfHeight - this.radius;
          this.velocity.y *= n;
          this.blocked.down = true;
        }
      } else {
        if (t.x < e.x && i.left) {
          t.x = e.x;
          this.velocity.x *= s;
          this.blocked.left = true;
        } else if (this.right > e.right && i.right) {
          t.x = e.right - this.width;
          this.velocity.x *= s;
          this.blocked.right = true;
        }
        if (t.y < e.y && i.up) {
          t.y = e.y;
          this.velocity.y *= n;
          this.blocked.up = true;
        } else if (this.bottom > e.bottom && i.down) {
          t.y = e.bottom - this.height;
          this.velocity.y *= n;
          this.blocked.down = true;
        }
      }
      return this.blocked.up || this.blocked.down || this.blocked.left || this.blocked.right;
    },
    moveFrom: function (t, e = this.speed, i) {
      if (e === 0) {
        return false;
      }
      var s;
      if (i === undefined) {
        s = this.angle;
        i = this.game.math.radToDeg(s);
      } else {
        s = this.game.math.degToRad(i);
      }
      this.moveTimer = 0;
      this.moveDuration = t;
      if (i === 0 || i === 180) {
        this.velocity.set(Math.cos(s) * e, 0);
      } else if (i === 90 || i === 270) {
        this.velocity.set(0, Math.sin(s) * e);
      } else {
        this.velocity.set(Math.cos(s) * e, Math.sin(s) * e);
      }
      this.isMoving = true;
      return true;
    },
    moveTo: function (t, e, i) {
      var s = e / (t / 1000);
      if (s === 0) {
        return false;
      }
      var n;
      if (i === undefined) {
        n = this.angle;
        i = this.game.math.radToDeg(n);
      } else {
        n = this.game.math.degToRad(i);
      }
      e = Math.abs(e);
      this.moveDuration = 0;
      this.moveDistance = e;
      if (this.moveTarget === null) {
        this.moveTarget = new a.Line();
        this.moveEnd = new a.Point();
      }
      this.moveTarget.fromAngle(this.x, this.y, n, e);
      this.moveEnd.set(this.moveTarget.end.x, this.moveTarget.end.y);
      this.moveTarget.setTo(this.x, this.y, this.x, this.y);
      if (i === 0 || i === 180) {
        this.velocity.set(Math.cos(n) * s, 0);
      } else if (i === 90 || i === 270) {
        this.velocity.set(0, Math.sin(n) * s);
      } else {
        this.velocity.set(Math.cos(n) * s, Math.sin(n) * s);
      }
      this.isMoving = true;
      return true;
    },
    setSize: function (t, e, i = this.offset.x, s = this.offset.y) {
      this.sourceWidth = t;
      this.sourceHeight = e;
      this.width = this.sourceWidth * this._sx;
      this.height = this.sourceHeight * this._sy;
      this.halfWidth = Math.floor(this.width / 2);
      this.halfHeight = Math.floor(this.height / 2);
      this.offset.setTo(i, s);
      this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
      this.isCircle = false;
      this.radius = 0;
    },
    setCircle: function (t, e = this.offset.x, i = this.offset.y) {
      if (t > 0) {
        this.isCircle = true;
        this.radius = t;
        this.sourceWidth = t * 2;
        this.sourceHeight = t * 2;
        this.width = this.sourceWidth * this._sx;
        this.height = this.sourceHeight * this._sy;
        this.halfWidth = Math.floor(this.width / 2);
        this.halfHeight = Math.floor(this.height / 2);
        this.offset.setTo(e, i);
        this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
      } else {
        this.isCircle = false;
      }
    },
    reset: function (t, e) {
      this.velocity.set(0);
      this.acceleration.set(0);
      this.speed = 0;
      this.angularVelocity = 0;
      this.angularAcceleration = 0;
      this.position.x = t - this.sprite.anchor.x * this.sprite.width + this.sprite.scale.x * this.offset.x;
      this.position.x -= this.sprite.scale.x < 0 ? this.width : 0;
      this.position.y = e - this.sprite.anchor.y * this.sprite.height + this.sprite.scale.y * this.offset.y;
      this.position.y -= this.sprite.scale.y < 0 ? this.height : 0;
      this.prev.x = this.position.x;
      this.prev.y = this.position.y;
      this.rotation = this.sprite.angle;
      this.preRotation = this.rotation;
      this._sx = this.sprite.scale.x;
      this._sy = this.sprite.scale.y;
      this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
    },
    getBounds: function (t) {
      if (this.isCircle) {
        t.x = this.center.x - this.radius;
        t.y = this.center.y - this.radius;
        t.right = this.center.x + this.radius;
        t.bottom = this.center.y + this.radius;
      } else {
        t.x = this.x;
        t.y = this.y;
        t.right = this.right;
        t.bottom = this.bottom;
      }
      return t;
    },
    hitTest: function (t, e) {
      if (this.isCircle) {
        return a.Circle.contains(this, t, e);
      } else {
        return a.Rectangle.contains(this, t, e);
      }
    },
    onFloor: function () {
      return this.blocked.down;
    },
    onCeiling: function () {
      return this.blocked.up;
    },
    onWall: function () {
      return this.blocked.left || this.blocked.right;
    },
    deltaAbsX: function () {
      if (this.deltaX() > 0) {
        return this.deltaX();
      } else {
        return -this.deltaX();
      }
    },
    deltaAbsY: function () {
      if (this.deltaY() > 0) {
        return this.deltaY();
      } else {
        return -this.deltaY();
      }
    },
    deltaX: function () {
      return this.position.x - this.prev.x;
    },
    deltaY: function () {
      return this.position.y - this.prev.y;
    },
    deltaZ: function () {
      return this.rotation - this.preRotation;
    },
    destroy: function () {
      if (this.sprite.parent && this.sprite.parent instanceof a.Group) {
        this.sprite.parent.removeFromHash(this.sprite);
      }
      this.sprite.body = null;
      this.sprite = null;
    }
  };
  Object.defineProperty(a.Physics.Arcade.Body.prototype, "left", {
    get: function () {
      return this.position.x;
    }
  });
  Object.defineProperty(a.Physics.Arcade.Body.prototype, "right", {
    get: function () {
      return this.position.x + this.width;
    }
  });
  Object.defineProperty(a.Physics.Arcade.Body.prototype, "top", {
    get: function () {
      return this.position.y;
    }
  });
  Object.defineProperty(a.Physics.Arcade.Body.prototype, "bottom", {
    get: function () {
      return this.position.y + this.height;
    }
  });
  Object.defineProperty(a.Physics.Arcade.Body.prototype, "x", {
    get: function () {
      return this.position.x;
    },
    set: function (t) {
      this.position.x = t;
    }
  });
  Object.defineProperty(a.Physics.Arcade.Body.prototype, "y", {
    get: function () {
      return this.position.y;
    },
    set: function (t) {
      this.position.y = t;
    }
  });
  a.Physics.Arcade.Body.render = function (t, e, i, s = true) {
    i = i || "rgba(0,255,0,0.4)";
    t.fillStyle = i;
    t.strokeStyle = i;
    if (e.isCircle) {
      t.beginPath();
      t.arc(e.center.x - e.game.camera.x, e.center.y - e.game.camera.y, e.radius, 0, Math.PI * 2);
      if (s) {
        t.fill();
      } else {
        t.stroke();
      }
    } else if (s) {
      t.fillRect(e.position.x - e.game.camera.x, e.position.y - e.game.camera.y, e.width, e.height);
    } else {
      t.strokeRect(e.position.x - e.game.camera.x, e.position.y - e.game.camera.y, e.width, e.height);
    }
  };
  a.Physics.Arcade.Body.renderBodyInfo = function (t, e) {
    t.line("x: " + e.x.toFixed(2), "y: " + e.y.toFixed(2), "width: " + e.width, "height: " + e.height);
    t.line("velocity x: " + e.velocity.x.toFixed(2), "y: " + e.velocity.y.toFixed(2), "deltaX: " + e._dx.toFixed(2), "deltaY: " + e._dy.toFixed(2));
    t.line("acceleration x: " + e.acceleration.x.toFixed(2), "y: " + e.acceleration.y.toFixed(2), "speed: " + e.speed.toFixed(2), "angle: " + e.angle.toFixed(2));
    t.line("gravity x: " + e.gravity.x, "y: " + e.gravity.y, "bounce x: " + e.bounce.x.toFixed(2), "y: " + e.bounce.y.toFixed(2));
    t.line("touching left: " + e.touching.left, "right: " + e.touching.right, "up: " + e.touching.up, "down: " + e.touching.down);
    t.line("blocked left: " + e.blocked.left, "right: " + e.blocked.right, "up: " + e.blocked.up, "down: " + e.blocked.down);
  };
  a.Physics.Arcade.Body.prototype.constructor = a.Physics.Arcade.Body;
  a.Physics.Arcade.TilemapCollision = function () {};
  a.Physics.Arcade.TilemapCollision.prototype = {
    TILE_BIAS: 16,
    collideSpriteVsTilemapLayer: function (t, e, i, s, n, a) {
      if (t.body) {
        var o = e.getTiles(t.body.position.x - t.body.tilePadding.x, t.body.position.y - t.body.tilePadding.y, t.body.width + t.body.tilePadding.x, t.body.height + t.body.tilePadding.y, false, false);
        if (o.length !== 0) {
          for (var r = 0; r < o.length; r++) {
            if (s) {
              if (s.call(n, t, o[r]) && this.separateTile(r, t.body, o[r], e, a)) {
                this._total++;
                if (i) {
                  i.call(n, t, o[r]);
                }
              }
            } else if (this.separateTile(r, t.body, o[r], e, a)) {
              this._total++;
              if (i) {
                i.call(n, t, o[r]);
              }
            }
          }
        }
      }
    },
    collideGroupVsTilemapLayer: function (t, e, i, s, n, a) {
      if (t.length !== 0) {
        for (var o = 0; o < t.children.length; o++) {
          if (t.children[o].exists) {
            this.collideSpriteVsTilemapLayer(t.children[o], e, i, s, n, a);
          }
        }
      }
    },
    separateTile: function (t, e, i, s, n) {
      if (!e.enable) {
        return false;
      }
      var a = s.fixedToCamera ? 0 : s.position.x;
      var o = s.fixedToCamera ? 0 : s.position.y;
      if (!i.intersects(e.position.x - a, e.position.y - o, e.right - a, e.bottom - o)) {
        return false;
      }
      if (n) {
        return true;
      }
      if (i.collisionCallback && !i.collisionCallback.call(i.collisionCallbackContext, e.sprite, i)) {
        return false;
      }
      if (i.layer.callbacks !== undefined && i.layer.callbacks[i.index] && !i.layer.callbacks[i.index].callback.call(i.layer.callbacks[i.index].callbackContext, e.sprite, i)) {
        return false;
      }
      if (!i.faceLeft && !i.faceRight && !i.faceTop && !i.faceBottom) {
        return false;
      }
      var r = 0;
      var h = 0;
      var l = 0;
      var c = 1;
      if (e.deltaAbsX() > e.deltaAbsY()) {
        l = -1;
      } else if (e.deltaAbsX() < e.deltaAbsY()) {
        c = -1;
      }
      if (e.deltaX() !== 0 && e.deltaY() !== 0 && (i.faceLeft || i.faceRight) && (i.faceTop || i.faceBottom)) {
        l = Math.min(Math.abs(e.position.x - a - i.right), Math.abs(e.right - a - i.left));
        c = Math.min(Math.abs(e.position.y - o - i.bottom), Math.abs(e.bottom - o - i.top));
      }
      if (l < c) {
        if ((i.faceLeft || i.faceRight) && (r = this.tileCheckX(e, i, s)) !== 0 && !i.intersects(e.position.x - a, e.position.y - o, e.right - a, e.bottom - o)) {
          return true;
        }
        if (i.faceTop || i.faceBottom) {
          h = this.tileCheckY(e, i, s);
        }
      } else {
        if ((i.faceTop || i.faceBottom) && (h = this.tileCheckY(e, i, s)) !== 0 && !i.intersects(e.position.x - a, e.position.y - o, e.right - a, e.bottom - o)) {
          return true;
        }
        if (i.faceLeft || i.faceRight) {
          r = this.tileCheckX(e, i, s);
        }
      }
      return r !== 0 || h !== 0;
    },
    tileCheckX: function (t, e, i) {
      var s = 0;
      var n = i.fixedToCamera ? 0 : i.position.x;
      if (t.deltaX() < 0 && !t.blocked.left && e.collideRight && t.checkCollision.left) {
        if (e.faceRight && t.x - n < e.right && (s = t.x - n - e.right) < -this.TILE_BIAS) {
          s = 0;
        }
      } else if (t.deltaX() > 0 && !t.blocked.right && e.collideLeft && t.checkCollision.right && e.faceLeft && t.right - n > e.left && (s = t.right - n - e.left) > this.TILE_BIAS) {
        s = 0;
      }
      if (s !== 0) {
        if (t.customSeparateX) {
          t.overlapX = s;
        } else {
          this.processTileSeparationX(t, s);
        }
      }
      return s;
    },
    tileCheckY: function (t, e, i) {
      var s = 0;
      var n = i.fixedToCamera ? 0 : i.position.y;
      if (t.deltaY() < 0 && !t.blocked.up && e.collideDown && t.checkCollision.up) {
        if (e.faceBottom && t.y - n < e.bottom && (s = t.y - n - e.bottom) < -this.TILE_BIAS) {
          s = 0;
        }
      } else if (t.deltaY() > 0 && !t.blocked.down && e.collideUp && t.checkCollision.down && e.faceTop && t.bottom - n > e.top && (s = t.bottom - n - e.top) > this.TILE_BIAS) {
        s = 0;
      }
      if (s !== 0) {
        if (t.customSeparateY) {
          t.overlapY = s;
        } else {
          this.processTileSeparationY(t, s);
        }
      }
      return s;
    },
    processTileSeparationX: function (t, e) {
      if (e < 0) {
        t.blocked.left = true;
      } else if (e > 0) {
        t.blocked.right = true;
      }
      t.position.x -= e;
      if (t.bounce.x === 0) {
        t.velocity.x = 0;
      } else {
        t.velocity.x = -t.velocity.x * t.bounce.x;
      }
    },
    processTileSeparationY: function (t, e) {
      if (e < 0) {
        t.blocked.up = true;
      } else if (e > 0) {
        t.blocked.down = true;
      }
      t.position.y -= e;
      if (t.bounce.y === 0) {
        t.velocity.y = 0;
      } else {
        t.velocity.y = -t.velocity.y * t.bounce.y;
      }
    }
  };
  a.Utils.mixinPrototype(a.Physics.Arcade.prototype, a.Physics.Arcade.TilemapCollision.prototype);
  p2.Body.prototype.parent = null;
  p2.Spring.prototype.parent = null;
  a.Physics.P2 = function (t, e) {
    this.game = t;
    if (e === undefined) {
      e = {
        gravity: [0, 0],
        broadphase: new p2.SAPBroadphase()
      };
    } else {
      if (!e.hasOwnProperty("gravity")) {
        e.gravity = [0, 0];
      }
      if (!e.hasOwnProperty("broadphase")) {
        e.broadphase = new p2.SAPBroadphase();
      }
    }
    this.config = e;
    this.world = new p2.World(this.config);
    this.frameRate = 1 / 60;
    this.useElapsedTime = false;
    this.paused = false;
    this.materials = [];
    this.gravity = new a.Physics.P2.InversePointProxy(this, this.world.gravity);
    this.walls = {
      left: null,
      right: null,
      top: null,
      bottom: null
    };
    this.onBodyAdded = new a.Signal();
    this.onBodyRemoved = new a.Signal();
    this.onSpringAdded = new a.Signal();
    this.onSpringRemoved = new a.Signal();
    this.onConstraintAdded = new a.Signal();
    this.onConstraintRemoved = new a.Signal();
    this.onContactMaterialAdded = new a.Signal();
    this.onContactMaterialRemoved = new a.Signal();
    this.postBroadphaseCallback = null;
    this.callbackContext = null;
    this.onBeginContact = new a.Signal();
    this.onEndContact = new a.Signal();
    if (e.hasOwnProperty("mpx") && e.hasOwnProperty("pxm") && e.hasOwnProperty("mpxi") && e.hasOwnProperty("pxmi")) {
      this.mpx = e.mpx;
      this.mpxi = e.mpxi;
      this.pxm = e.pxm;
      this.pxmi = e.pxmi;
    }
    this.world.on("beginContact", this.beginContactHandler, this);
    this.world.on("endContact", this.endContactHandler, this);
    this.collisionGroups = [];
    this.nothingCollisionGroup = new a.Physics.P2.CollisionGroup(1);
    this.boundsCollisionGroup = new a.Physics.P2.CollisionGroup(2);
    this.everythingCollisionGroup = new a.Physics.P2.CollisionGroup(2147483648);
    this.boundsCollidesWith = [];
    this._toRemove = [];
    this._collisionGroupID = 2;
    this._boundsLeft = true;
    this._boundsRight = true;
    this._boundsTop = true;
    this._boundsBottom = true;
    this._boundsOwnGroup = false;
    this.setBoundsToWorld(true, true, true, true, false);
  };
  a.Physics.P2.prototype = {
    removeBodyNextStep: function (t) {
      this._toRemove.push(t);
    },
    preUpdate: function () {
      for (var t = this._toRemove.length; t--;) {
        this.removeBody(this._toRemove[t]);
      }
      this._toRemove.length = 0;
    },
    enable: function (t, e = false, i = true) {
      var s = 1;
      if (Array.isArray(t)) {
        for (s = t.length; s--;) {
          if (t[s] instanceof a.Group) {
            this.enable(t[s].children, e, i);
          } else {
            this.enableBody(t[s], e);
            if (i && t[s].hasOwnProperty("children") && t[s].children.length > 0) {
              this.enable(t[s], e, true);
            }
          }
        }
      } else if (t instanceof a.Group) {
        this.enable(t.children, e, i);
      } else {
        this.enableBody(t, e);
        if (i && t.hasOwnProperty("children") && t.children.length > 0) {
          this.enable(t.children, e, true);
        }
      }
    },
    enableBody: function (t, e) {
      if (t.hasOwnProperty("body") && t.body === null) {
        t.body = new a.Physics.P2.Body(this.game, t, t.x, t.y, 1);
        t.body.debug = e;
        if (t.anchor !== undefined) {
          t.anchor.set(0.5);
        }
      }
    },
    setImpactEvents: function (t) {
      if (t) {
        this.world.on("impact", this.impactHandler, this);
      } else {
        this.world.off("impact", this.impactHandler, this);
      }
    },
    setPostBroadphaseCallback: function (t, e) {
      this.postBroadphaseCallback = t;
      this.callbackContext = e;
      if (t !== null) {
        this.world.on("postBroadphase", this.postBroadphaseHandler, this);
      } else {
        this.world.off("postBroadphase", this.postBroadphaseHandler, this);
      }
    },
    postBroadphaseHandler: function (t) {
      if (this.postBroadphaseCallback && t.pairs.length !== 0) {
        for (var e = t.pairs.length - 2; e >= 0; e -= 2) {
          if (t.pairs[e].parent && t.pairs[e + 1].parent && !this.postBroadphaseCallback.call(this.callbackContext, t.pairs[e].parent, t.pairs[e + 1].parent)) {
            t.pairs.splice(e, 2);
          }
        }
      }
    },
    impactHandler: function (t) {
      if (t.bodyA.parent && t.bodyB.parent) {
        var e = t.bodyA.parent;
        var i = t.bodyB.parent;
        if (e._bodyCallbacks[t.bodyB.id]) {
          e._bodyCallbacks[t.bodyB.id].call(e._bodyCallbackContext[t.bodyB.id], e, i, t.shapeA, t.shapeB);
        }
        if (i._bodyCallbacks[t.bodyA.id]) {
          i._bodyCallbacks[t.bodyA.id].call(i._bodyCallbackContext[t.bodyA.id], i, e, t.shapeB, t.shapeA);
        }
        if (e._groupCallbacks[t.shapeB.collisionGroup]) {
          e._groupCallbacks[t.shapeB.collisionGroup].call(e._groupCallbackContext[t.shapeB.collisionGroup], e, i, t.shapeA, t.shapeB);
        }
        if (i._groupCallbacks[t.shapeA.collisionGroup]) {
          i._groupCallbacks[t.shapeA.collisionGroup].call(i._groupCallbackContext[t.shapeA.collisionGroup], i, e, t.shapeB, t.shapeA);
        }
      }
    },
    beginContactHandler: function (t) {
      if (t.bodyA && t.bodyB) {
        this.onBeginContact.dispatch(t.bodyA, t.bodyB, t.shapeA, t.shapeB, t.contactEquations);
        if (t.bodyA.parent) {
          t.bodyA.parent.onBeginContact.dispatch(t.bodyB.parent, t.bodyB, t.shapeA, t.shapeB, t.contactEquations);
        }
        if (t.bodyB.parent) {
          t.bodyB.parent.onBeginContact.dispatch(t.bodyA.parent, t.bodyA, t.shapeB, t.shapeA, t.contactEquations);
        }
      }
    },
    endContactHandler: function (t) {
      if (t.bodyA && t.bodyB) {
        this.onEndContact.dispatch(t.bodyA, t.bodyB, t.shapeA, t.shapeB);
        if (t.bodyA.parent) {
          t.bodyA.parent.onEndContact.dispatch(t.bodyB.parent, t.bodyB, t.shapeA, t.shapeB);
        }
        if (t.bodyB.parent) {
          t.bodyB.parent.onEndContact.dispatch(t.bodyA.parent, t.bodyA, t.shapeB, t.shapeA);
        }
      }
    },
    setBoundsToWorld: function (t, e, i, s, n) {
      this.setBounds(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, t, e, i, s, n);
    },
    setWorldMaterial: function (t, e = true, i = true, s = true, n = true) {
      if (e && this.walls.left) {
        this.walls.left.shapes[0].material = t;
      }
      if (i && this.walls.right) {
        this.walls.right.shapes[0].material = t;
      }
      if (s && this.walls.top) {
        this.walls.top.shapes[0].material = t;
      }
      if (n && this.walls.bottom) {
        this.walls.bottom.shapes[0].material = t;
      }
    },
    updateBoundsCollisionGroup: function (t = true) {
      var e = t ? this.boundsCollisionGroup.mask : this.everythingCollisionGroup.mask;
      if (this.walls.left) {
        this.walls.left.shapes[0].collisionGroup = e;
      }
      if (this.walls.right) {
        this.walls.right.shapes[0].collisionGroup = e;
      }
      if (this.walls.top) {
        this.walls.top.shapes[0].collisionGroup = e;
      }
      if (this.walls.bottom) {
        this.walls.bottom.shapes[0].collisionGroup = e;
      }
      this._boundsOwnGroup = t;
    },
    setBounds: function (t, e, i, s, n = this._boundsLeft, a = this._boundsRight, o = this._boundsTop, r = this._boundsBottom, h = this._boundsOwnGroup) {
      this.setupWall(n, "left", t, e, 1.5707963267948966, h);
      this.setupWall(a, "right", t + i, e, -1.5707963267948966, h);
      this.setupWall(o, "top", t, e, -3.141592653589793, h);
      this.setupWall(r, "bottom", t, e + s, 0, h);
      this._boundsLeft = n;
      this._boundsRight = a;
      this._boundsTop = o;
      this._boundsBottom = r;
      this._boundsOwnGroup = h;
    },
    setupWall: function (t, e, i, s, n, a) {
      if (t) {
        if (this.walls[e]) {
          this.walls[e].position = [this.pxmi(i), this.pxmi(s)];
        } else {
          this.walls[e] = new p2.Body({
            mass: 0,
            position: [this.pxmi(i), this.pxmi(s)],
            angle: n
          });
          this.walls[e].addShape(new p2.Plane());
          this.world.addBody(this.walls[e]);
        }
        if (a) {
          this.walls[e].shapes[0].collisionGroup = this.boundsCollisionGroup.mask;
        }
      } else if (this.walls[e]) {
        this.world.removeBody(this.walls[e]);
        this.walls[e] = null;
      }
    },
    pause: function () {
      this.paused = true;
    },
    resume: function () {
      this.paused = false;
    },
    update: function () {
      if (!this.paused) {
        if (this.useElapsedTime) {
          this.world.step(this.game.time.physicsElapsed);
        } else {
          this.world.step(this.frameRate);
        }
      }
    },
    reset: function () {
      this.world.on("beginContact", this.beginContactHandler, this);
      this.world.on("endContact", this.endContactHandler, this);
      this.nothingCollisionGroup = new a.Physics.P2.CollisionGroup(1);
      this.boundsCollisionGroup = new a.Physics.P2.CollisionGroup(2);
      this.everythingCollisionGroup = new a.Physics.P2.CollisionGroup(2147483648);
      this._collisionGroupID = 2;
      this.setBoundsToWorld(true, true, true, true, false);
    },
    clear: function () {
      this.world.time = 0;
      this.world.fixedStepTime = 0;
      if (this.world.solver && this.world.solver.equations.length) {
        this.world.solver.removeAllEquations();
      }
      var t = this.world.constraints;
      for (var e = t.length - 1; e >= 0; e--) {
        this.world.removeConstraint(t[e]);
      }
      var i = this.world.bodies;
      for (var e = i.length - 1; e >= 0; e--) {
        this.world.removeBody(i[e]);
      }
      var s = this.world.springs;
      for (var e = s.length - 1; e >= 0; e--) {
        this.world.removeSpring(s[e]);
      }
      var n = this.world.contactMaterials;
      for (var e = n.length - 1; e >= 0; e--) {
        this.world.removeContactMaterial(n[e]);
      }
      this.world.off("beginContact", this.beginContactHandler, this);
      this.world.off("endContact", this.endContactHandler, this);
      this.postBroadphaseCallback = null;
      this.callbackContext = null;
      this.impactCallback = null;
      this.collisionGroups = [];
      this._toRemove = [];
      this.boundsCollidesWith = [];
      this.walls = {
        left: null,
        right: null,
        top: null,
        bottom: null
      };
    },
    destroy: function () {
      this.clear();
      this.game = null;
    },
    addBody: function (t) {
      return !t.data.world && (this.world.addBody(t.data), this.onBodyAdded.dispatch(t), true);
    },
    removeBody: function (t) {
      if (t.data.world === this.world) {
        this.world.removeBody(t.data);
        this.onBodyRemoved.dispatch(t);
      }
      return t;
    },
    addSpring: function (t) {
      if (t instanceof a.Physics.P2.Spring || t instanceof a.Physics.P2.RotationalSpring) {
        this.world.addSpring(t.data);
      } else {
        this.world.addSpring(t);
      }
      this.onSpringAdded.dispatch(t);
      return t;
    },
    removeSpring: function (t) {
      if (t instanceof a.Physics.P2.Spring || t instanceof a.Physics.P2.RotationalSpring) {
        this.world.removeSpring(t.data);
      } else {
        this.world.removeSpring(t);
      }
      this.onSpringRemoved.dispatch(t);
      return t;
    },
    createDistanceConstraint: function (t, e, i, s, n, o) {
      t = this.getBody(t);
      e = this.getBody(e);
      if (t && e) {
        return this.addConstraint(new a.Physics.P2.DistanceConstraint(this, t, e, i, s, n, o));
      }
    },
    createGearConstraint: function (t, e, i, s) {
      t = this.getBody(t);
      e = this.getBody(e);
      if (t && e) {
        return this.addConstraint(new a.Physics.P2.GearConstraint(this, t, e, i, s));
      }
    },
    createRevoluteConstraint: function (t, e, i, s, n, o) {
      t = this.getBody(t);
      i = this.getBody(i);
      if (t && i) {
        return this.addConstraint(new a.Physics.P2.RevoluteConstraint(this, t, e, i, s, n, o));
      }
    },
    createLockConstraint: function (t, e, i, s, n) {
      t = this.getBody(t);
      e = this.getBody(e);
      if (t && e) {
        return this.addConstraint(new a.Physics.P2.LockConstraint(this, t, e, i, s, n));
      }
    },
    createPrismaticConstraint: function (t, e, i, s, n, o, r) {
      t = this.getBody(t);
      e = this.getBody(e);
      if (t && e) {
        return this.addConstraint(new a.Physics.P2.PrismaticConstraint(this, t, e, i, s, n, o, r));
      }
    },
    addConstraint: function (t) {
      this.world.addConstraint(t);
      this.onConstraintAdded.dispatch(t);
      return t;
    },
    removeConstraint: function (t) {
      this.world.removeConstraint(t);
      this.onConstraintRemoved.dispatch(t);
      return t;
    },
    addContactMaterial: function (t) {
      this.world.addContactMaterial(t);
      this.onContactMaterialAdded.dispatch(t);
      return t;
    },
    removeContactMaterial: function (t) {
      this.world.removeContactMaterial(t);
      this.onContactMaterialRemoved.dispatch(t);
      return t;
    },
    getContactMaterial: function (t, e) {
      return this.world.getContactMaterial(t, e);
    },
    setMaterial: function (t, e) {
      for (var i = e.length; i--;) {
        e[i].setMaterial(t);
      }
    },
    createMaterial: function (t, e) {
      t = t || "";
      var i = new a.Physics.P2.Material(t);
      this.materials.push(i);
      if (e !== undefined) {
        e.setMaterial(i);
      }
      return i;
    },
    createContactMaterial: function (t = this.createMaterial(), e = this.createMaterial(), i) {
      var s = new a.Physics.P2.ContactMaterial(t, e, i);
      return this.addContactMaterial(s);
    },
    getBodies: function () {
      var t = [];
      for (var e = this.world.bodies.length; e--;) {
        t.push(this.world.bodies[e].parent);
      }
      return t;
    },
    getBody: function (t) {
      if (t instanceof p2.Body) {
        return t;
      } else if (t instanceof a.Physics.P2.Body) {
        return t.data;
      } else if (t.body && t.body.type === a.Physics.P2JS) {
        return t.body.data;
      } else {
        return null;
      }
    },
    getSprings: function () {
      var t = [];
      for (var e = this.world.springs.length; e--;) {
        t.push(this.world.springs[e].parent);
      }
      return t;
    },
    getConstraints: function () {
      var t = [];
      for (var e = this.world.constraints.length; e--;) {
        t.push(this.world.constraints[e]);
      }
      return t;
    },
    hitTest: function (t, e = this.world.bodies, i = 5, s = false) {
      var n = [this.pxmi(t.x), this.pxmi(t.y)];
      var o = [];
      for (var r = e.length; r--;) {
        if (e[r] instanceof a.Physics.P2.Body && (!s || e[r].data.type !== p2.Body.STATIC)) {
          o.push(e[r].data);
        } else if (e[r] instanceof p2.Body && e[r].parent && (!s || e[r].type !== p2.Body.STATIC)) {
          o.push(e[r]);
        } else if (e[r] instanceof a.Sprite && e[r].hasOwnProperty("body") && (!s || e[r].body.data.type !== p2.Body.STATIC)) {
          o.push(e[r].body.data);
        }
      }
      return this.world.hitTest(n, o, i);
    },
    toJSON: function () {
      return this.world.toJSON();
    },
    createCollisionGroup: function (t) {
      var e = Math.pow(2, this._collisionGroupID);
      if (this.walls.left) {
        this.walls.left.shapes[0].collisionMask = this.walls.left.shapes[0].collisionMask | e;
      }
      if (this.walls.right) {
        this.walls.right.shapes[0].collisionMask = this.walls.right.shapes[0].collisionMask | e;
      }
      if (this.walls.top) {
        this.walls.top.shapes[0].collisionMask = this.walls.top.shapes[0].collisionMask | e;
      }
      if (this.walls.bottom) {
        this.walls.bottom.shapes[0].collisionMask = this.walls.bottom.shapes[0].collisionMask | e;
      }
      this._collisionGroupID++;
      var i = new a.Physics.P2.CollisionGroup(e);
      this.collisionGroups.push(i);
      if (t) {
        this.setCollisionGroup(t, i);
      }
      return i;
    },
    setCollisionGroup: function (t, e) {
      if (t instanceof a.Group) {
        for (var i = 0; i < t.total; i++) {
          if (t.children[i].body && t.children[i].body.type === a.Physics.P2JS) {
            t.children[i].body.setCollisionGroup(e);
          }
        }
      } else {
        t.body.setCollisionGroup(e);
      }
    },
    createSpring: function (t, e, i, s, n, o, r, h, l) {
      t = this.getBody(t);
      e = this.getBody(e);
      if (t && e) {
        return this.addSpring(new a.Physics.P2.Spring(this, t, e, i, s, n, o, r, h, l));
      }
    },
    createRotationalSpring: function (t, e, i, s, n) {
      t = this.getBody(t);
      e = this.getBody(e);
      if (t && e) {
        return this.addSpring(new a.Physics.P2.RotationalSpring(this, t, e, i, s, n));
      }
    },
    createBody: function (t, e, i, s = false, n, o) {
      var r = new a.Physics.P2.Body(this.game, null, t, e, i);
      if (o) {
        if (!r.addPolygon(n, o)) {
          return false;
        }
      }
      if (s) {
        this.world.addBody(r.data);
      }
      return r;
    },
    createParticle: function (t, e, i, s = false, n, o) {
      var r = new a.Physics.P2.Body(this.game, null, t, e, i);
      if (o) {
        if (!r.addPolygon(n, o)) {
          return false;
        }
      }
      if (s) {
        this.world.addBody(r.data);
      }
      return r;
    },
    convertCollisionObjects: function (t, e, i = true) {
      var s = [];
      for (var n = 0, a = t.collision[e].length; n < a; n++) {
        var o = t.collision[e][n];
        var r = this.createBody(o.x, o.y, 0, i, {}, o.polyline);
        if (r) {
          s.push(r);
        }
      }
      return s;
    },
    clearTilemapLayerBodies: function (t, e) {
      e = t.getLayer(e);
      for (var i = t.layers[e].bodies.length; i--;) {
        t.layers[e].bodies[i].destroy();
      }
      t.layers[e].bodies.length = 0;
    },
    convertTilemap: function (t, e, i, s) {
      e = t.getLayer(e);
      if (i === undefined) {
        i = true;
      }
      if (s === undefined) {
        s = true;
      }
      this.clearTilemapLayerBodies(t, e);
      var n = 0;
      var a = 0;
      var o = 0;
      for (var r = 0, h = t.layers[e].height; r < h; r++) {
        n = 0;
        for (var l = 0, c = t.layers[e].width; l < c; l++) {
          var u = t.layers[e].data[r][l];
          if (u && u.index > -1 && u.collides) {
            if (s) {
              var d = t.getTileRight(e, l, r);
              if (n === 0) {
                a = u.x * u.width;
                o = u.y * u.height;
                n = u.width;
              }
              if (d && d.collides) {
                n += u.width;
              } else {
                var p = this.createBody(a, o, 0, false);
                p.addRectangle(n, u.height, n / 2, u.height / 2, 0);
                if (i) {
                  this.addBody(p);
                }
                t.layers[e].bodies.push(p);
                n = 0;
              }
            } else {
              var p = this.createBody(u.x * u.width, u.y * u.height, 0, false);
              p.addRectangle(u.width, u.height, u.width / 2, u.height / 2, 0);
              if (i) {
                this.addBody(p);
              }
              t.layers[e].bodies.push(p);
            }
          }
        }
      }
      return t.layers[e].bodies;
    },
    mpx: function (t) {
      return t *= 20;
    },
    pxm: function (t) {
      return t * 0.05;
    },
    mpxi: function (t) {
      return t *= -20;
    },
    pxmi: function (t) {
      return t * -0.05;
    }
  };
  Object.defineProperty(a.Physics.P2.prototype, "friction", {
    get: function () {
      return this.world.defaultContactMaterial.friction;
    },
    set: function (t) {
      this.world.defaultContactMaterial.friction = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "restitution", {
    get: function () {
      return this.world.defaultContactMaterial.restitution;
    },
    set: function (t) {
      this.world.defaultContactMaterial.restitution = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "contactMaterial", {
    get: function () {
      return this.world.defaultContactMaterial;
    },
    set: function (t) {
      this.world.defaultContactMaterial = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "applySpringForces", {
    get: function () {
      return this.world.applySpringForces;
    },
    set: function (t) {
      this.world.applySpringForces = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "applyDamping", {
    get: function () {
      return this.world.applyDamping;
    },
    set: function (t) {
      this.world.applyDamping = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "applyGravity", {
    get: function () {
      return this.world.applyGravity;
    },
    set: function (t) {
      this.world.applyGravity = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "solveConstraints", {
    get: function () {
      return this.world.solveConstraints;
    },
    set: function (t) {
      this.world.solveConstraints = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "time", {
    get: function () {
      return this.world.time;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "emitImpactEvent", {
    get: function () {
      return this.world.emitImpactEvent;
    },
    set: function (t) {
      this.world.emitImpactEvent = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "sleepMode", {
    get: function () {
      return this.world.sleepMode;
    },
    set: function (t) {
      this.world.sleepMode = t;
    }
  });
  Object.defineProperty(a.Physics.P2.prototype, "total", {
    get: function () {
      return this.world.bodies.length;
    }
  });
  a.Physics.P2.FixtureList = function (t) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    this.rawList = t;
    this.init();
    this.parse(this.rawList);
  };
  a.Physics.P2.FixtureList.prototype = {
    init: function () {
      this.namedFixtures = {};
      this.groupedFixtures = [];
      this.allFixtures = [];
    },
    setCategory: function (t, e) {
      function i(e) {
        e.collisionGroup = t;
      }
      this.getFixtures(e).forEach(i);
    },
    setMask: function (t, e) {
      function i(e) {
        e.collisionMask = t;
      }
      this.getFixtures(e).forEach(i);
    },
    setSensor: function (t, e) {
      function i(e) {
        e.sensor = t;
      }
      this.getFixtures(e).forEach(i);
    },
    setMaterial: function (t, e) {
      function i(e) {
        e.material = t;
      }
      this.getFixtures(e).forEach(i);
    },
    getFixtures: function (t) {
      var e = [];
      if (t) {
        if (!(t instanceof Array)) {
          t = [t];
        }
        var i = this;
        t.forEach(function (t) {
          if (i.namedFixtures[t]) {
            e.push(i.namedFixtures[t]);
          }
        });
        return this.flatten(e);
      }
      return this.allFixtures;
    },
    getFixtureByKey: function (t) {
      return this.namedFixtures[t];
    },
    getGroup: function (t) {
      return this.groupedFixtures[t];
    },
    parse: function () {
      var t;
      var e;
      var i;
      var s;
      i = this.rawList;
      s = [];
      for (t in i) {
        e = i[t];
        if (isNaN(t - 0)) {
          this.namedFixtures[t] = this.flatten(e);
        } else {
          this.groupedFixtures[t] = this.groupedFixtures[t] || [];
          this.groupedFixtures[t] = this.groupedFixtures[t].concat(e);
        }
        s.push(this.allFixtures = this.flatten(this.groupedFixtures));
      }
    },
    flatten: function (t) {
      var e;
      var i;
      e = [];
      i = arguments.callee;
      t.forEach(function (t) {
        return Array.prototype.push.apply(e, Array.isArray(t) ? i(t) : [t]);
      });
      return e;
    }
  };
  a.Physics.P2.PointProxy = function (t, e) {
    this.world = t;
    this.destination = e;
  };
  a.Physics.P2.PointProxy.prototype.constructor = a.Physics.P2.PointProxy;
  Object.defineProperty(a.Physics.P2.PointProxy.prototype, "x", {
    get: function () {
      return this.world.mpx(this.destination[0]);
    },
    set: function (t) {
      this.destination[0] = this.world.pxm(t);
    }
  });
  Object.defineProperty(a.Physics.P2.PointProxy.prototype, "y", {
    get: function () {
      return this.world.mpx(this.destination[1]);
    },
    set: function (t) {
      this.destination[1] = this.world.pxm(t);
    }
  });
  Object.defineProperty(a.Physics.P2.PointProxy.prototype, "mx", {
    get: function () {
      return this.destination[0];
    },
    set: function (t) {
      this.destination[0] = t;
    }
  });
  Object.defineProperty(a.Physics.P2.PointProxy.prototype, "my", {
    get: function () {
      return this.destination[1];
    },
    set: function (t) {
      this.destination[1] = t;
    }
  });
  a.Physics.P2.InversePointProxy = function (t, e) {
    this.world = t;
    this.destination = e;
  };
  a.Physics.P2.InversePointProxy.prototype.constructor = a.Physics.P2.InversePointProxy;
  Object.defineProperty(a.Physics.P2.InversePointProxy.prototype, "x", {
    get: function () {
      return this.world.mpxi(this.destination[0]);
    },
    set: function (t) {
      this.destination[0] = this.world.pxmi(t);
    }
  });
  Object.defineProperty(a.Physics.P2.InversePointProxy.prototype, "y", {
    get: function () {
      return this.world.mpxi(this.destination[1]);
    },
    set: function (t) {
      this.destination[1] = this.world.pxmi(t);
    }
  });
  Object.defineProperty(a.Physics.P2.InversePointProxy.prototype, "mx", {
    get: function () {
      return this.destination[0];
    },
    set: function (t) {
      this.destination[0] = -t;
    }
  });
  Object.defineProperty(a.Physics.P2.InversePointProxy.prototype, "my", {
    get: function () {
      return this.destination[1];
    },
    set: function (t) {
      this.destination[1] = -t;
    }
  });
  a.Physics.P2.Body = function (t, e, i, s, n) {
    e = e || null;
    i = i || 0;
    s = s || 0;
    if (n === undefined) {
      n = 1;
    }
    this.game = t;
    this.world = t.physics.p2;
    this.sprite = e;
    this.type = a.Physics.P2JS;
    this.offset = new a.Point();
    this.data = new p2.Body({
      position: [this.world.pxmi(i), this.world.pxmi(s)],
      mass: n
    });
    this.data.parent = this;
    this.velocity = new a.Physics.P2.InversePointProxy(this.world, this.data.velocity);
    this.force = new a.Physics.P2.InversePointProxy(this.world, this.data.force);
    this.gravity = new a.Point();
    this.onBeginContact = new a.Signal();
    this.onEndContact = new a.Signal();
    this.collidesWith = [];
    this.removeNextStep = false;
    this.debugBody = null;
    this.dirty = false;
    this._collideWorldBounds = true;
    this._bodyCallbacks = {};
    this._bodyCallbackContext = {};
    this._groupCallbacks = {};
    this._groupCallbackContext = {};
    this._reset = false;
    if (e) {
      this.setRectangleFromSprite(e);
      if (e.exists) {
        this.game.physics.p2.addBody(this);
      }
    }
  };
  a.Physics.P2.Body.prototype = {
    createBodyCallback: function (t, e, i) {
      var s = -1;
      if (t.id) {
        s = t.id;
      } else if (t.body) {
        s = t.body.id;
      }
      if (s > -1) {
        if (e === null) {
          delete this._bodyCallbacks[s];
          delete this._bodyCallbackContext[s];
        } else {
          this._bodyCallbacks[s] = e;
          this._bodyCallbackContext[s] = i;
        }
      }
    },
    createGroupCallback: function (t, e, i) {
      if (e === null) {
        delete this._groupCallbacks[t.mask];
        delete this._groupCallbackContext[t.mask];
      } else {
        this._groupCallbacks[t.mask] = e;
        this._groupCallbackContext[t.mask] = i;
      }
    },
    getCollisionMask: function () {
      var t = 0;
      if (this._collideWorldBounds) {
        t = this.game.physics.p2.boundsCollisionGroup.mask;
      }
      for (var e = 0; e < this.collidesWith.length; e++) {
        t |= this.collidesWith[e].mask;
      }
      return t;
    },
    updateCollisionMask: function (t) {
      var e = this.getCollisionMask();
      if (t === undefined) {
        for (var i = this.data.shapes.length - 1; i >= 0; i--) {
          this.data.shapes[i].collisionMask = e;
        }
      } else {
        t.collisionMask = e;
      }
    },
    setCollisionGroup: function (t, e) {
      var i = this.getCollisionMask();
      if (e === undefined) {
        for (var s = this.data.shapes.length - 1; s >= 0; s--) {
          this.data.shapes[s].collisionGroup = t.mask;
          this.data.shapes[s].collisionMask = i;
        }
      } else {
        e.collisionGroup = t.mask;
        e.collisionMask = i;
      }
    },
    clearCollision: function (t = true, e = true, i) {
      if (i === undefined) {
        for (var s = this.data.shapes.length - 1; s >= 0; s--) {
          if (t) {
            this.data.shapes[s].collisionGroup = null;
          }
          if (e) {
            this.data.shapes[s].collisionMask = null;
          }
        }
      } else {
        if (t) {
          i.collisionGroup = null;
        }
        if (e) {
          i.collisionMask = null;
        }
      }
      if (t) {
        this.collidesWith.length = 0;
      }
    },
    removeCollisionGroup: function (t, e = true, i) {
      var s;
      if (Array.isArray(t)) {
        for (var n = 0; n < t.length; n++) {
          if ((s = this.collidesWith.indexOf(t[n])) > -1) {
            this.collidesWith.splice(s, 1);
            if (e) {
              delete this._groupCallbacks[t.mask];
              delete this._groupCallbackContext[t.mask];
            }
          }
        }
      } else if ((s = this.collidesWith.indexOf(t)) > -1) {
        this.collidesWith.splice(s, 1);
        if (e) {
          delete this._groupCallbacks[t.mask];
          delete this._groupCallbackContext[t.mask];
        }
      }
      var a = this.getCollisionMask();
      if (i === undefined) {
        for (var n = this.data.shapes.length - 1; n >= 0; n--) {
          this.data.shapes[n].collisionMask = a;
        }
      } else {
        i.collisionMask = a;
      }
    },
    collides: function (t, e, i, s) {
      if (Array.isArray(t)) {
        for (var n = 0; n < t.length; n++) {
          if (this.collidesWith.indexOf(t[n]) === -1) {
            this.collidesWith.push(t[n]);
            if (e) {
              this.createGroupCallback(t[n], e, i);
            }
          }
        }
      } else if (this.collidesWith.indexOf(t) === -1) {
        this.collidesWith.push(t);
        if (e) {
          this.createGroupCallback(t, e, i);
        }
      }
      var a = this.getCollisionMask();
      if (s === undefined) {
        for (var n = this.data.shapes.length - 1; n >= 0; n--) {
          this.data.shapes[n].collisionMask = a;
        }
      } else {
        s.collisionMask = a;
      }
    },
    adjustCenterOfMass: function () {
      this.data.adjustCenterOfMass();
      this.shapeChanged();
    },
    getVelocityAtPoint: function (t, e) {
      return this.data.getVelocityAtPoint(t, e);
    },
    applyDamping: function (t) {
      this.data.applyDamping(t);
    },
    applyImpulse: function (t, e, i) {
      this.data.applyImpulse(t, [this.world.pxmi(e), this.world.pxmi(i)]);
    },
    applyImpulseLocal: function (t, e, i) {
      this.data.applyImpulseLocal(t, [this.world.pxmi(e), this.world.pxmi(i)]);
    },
    applyForce: function (t, e, i) {
      this.data.applyForce(t, [this.world.pxmi(e), this.world.pxmi(i)]);
    },
    setZeroForce: function () {
      this.data.setZeroForce();
    },
    setZeroRotation: function () {
      this.data.angularVelocity = 0;
    },
    setZeroVelocity: function () {
      this.data.velocity[0] = 0;
      this.data.velocity[1] = 0;
    },
    setZeroDamping: function () {
      this.data.damping = 0;
      this.data.angularDamping = 0;
    },
    toLocalFrame: function (t, e) {
      return this.data.toLocalFrame(t, e);
    },
    toWorldFrame: function (t, e) {
      return this.data.toWorldFrame(t, e);
    },
    rotateLeft: function (t) {
      this.data.angularVelocity = this.world.pxm(-t);
    },
    rotateRight: function (t) {
      this.data.angularVelocity = this.world.pxm(t);
    },
    moveForward: function (t) {
      var e = this.world.pxmi(-t);
      var i = this.data.angle + Math.PI / 2;
      this.data.velocity[0] = e * Math.cos(i);
      this.data.velocity[1] = e * Math.sin(i);
    },
    moveBackward: function (t) {
      var e = this.world.pxmi(-t);
      var i = this.data.angle + Math.PI / 2;
      this.data.velocity[0] = -e * Math.cos(i);
      this.data.velocity[1] = -e * Math.sin(i);
    },
    thrust: function (t) {
      var e = this.world.pxmi(-t);
      var i = this.data.angle + Math.PI / 2;
      this.data.force[0] += e * Math.cos(i);
      this.data.force[1] += e * Math.sin(i);
    },
    thrustLeft: function (t) {
      var e = this.world.pxmi(-t);
      var i = this.data.angle;
      this.data.force[0] += e * Math.cos(i);
      this.data.force[1] += e * Math.sin(i);
    },
    thrustRight: function (t) {
      var e = this.world.pxmi(-t);
      var i = this.data.angle;
      this.data.force[0] -= e * Math.cos(i);
      this.data.force[1] -= e * Math.sin(i);
    },
    reverse: function (t) {
      var e = this.world.pxmi(-t);
      var i = this.data.angle + Math.PI / 2;
      this.data.force[0] -= e * Math.cos(i);
      this.data.force[1] -= e * Math.sin(i);
    },
    moveLeft: function (t) {
      this.data.velocity[0] = this.world.pxmi(-t);
    },
    moveRight: function (t) {
      this.data.velocity[0] = this.world.pxmi(t);
    },
    moveUp: function (t) {
      this.data.velocity[1] = this.world.pxmi(-t);
    },
    moveDown: function (t) {
      this.data.velocity[1] = this.world.pxmi(t);
    },
    preUpdate: function () {
      this.dirty = true;
      if (this.removeNextStep) {
        this.removeFromWorld();
        this.removeNextStep = false;
      }
    },
    postUpdate: function () {
      this.sprite.x = this.world.mpxi(this.data.position[0]) + this.offset.x;
      this.sprite.y = this.world.mpxi(this.data.position[1]) + this.offset.y;
      if (!this.fixedRotation) {
        this.sprite.rotation = this.data.angle;
      }
      if (this.debugBody) {
        this.debugBody.updateSpriteTransform();
      }
      this.dirty = false;
    },
    reset: function (t, e, i = false, s = false) {
      this.setZeroForce();
      this.setZeroVelocity();
      this.setZeroRotation();
      if (i) {
        this.setZeroDamping();
      }
      if (s) {
        this.mass = 1;
      }
      this.x = t;
      this.y = e;
    },
    addToWorld: function () {
      if (this.game.physics.p2._toRemove) {
        for (var t = 0; t < this.game.physics.p2._toRemove.length; t++) {
          if (this.game.physics.p2._toRemove[t] === this) {
            this.game.physics.p2._toRemove.splice(t, 1);
          }
        }
      }
      if (this.data.world !== this.game.physics.p2.world) {
        this.game.physics.p2.addBody(this);
      }
    },
    removeFromWorld: function () {
      if (this.data.world === this.game.physics.p2.world) {
        this.game.physics.p2.removeBodyNextStep(this);
      }
    },
    destroy: function () {
      this.removeFromWorld();
      this.clearShapes();
      this._bodyCallbacks = {};
      this._bodyCallbackContext = {};
      this._groupCallbacks = {};
      this._groupCallbackContext = {};
      if (this.debugBody) {
        this.debugBody.destroy(true, true);
      }
      this.debugBody = null;
      if (this.sprite) {
        this.sprite.body = null;
        this.sprite = null;
      }
    },
    clearShapes: function () {
      for (var t = this.data.shapes.length; t--;) {
        this.data.removeShape(this.data.shapes[t]);
      }
      this.shapeChanged();
    },
    addShape: function (t, e = 0, i = 0, s = 0) {
      this.data.addShape(t, [this.world.pxmi(e), this.world.pxmi(i)], s);
      this.shapeChanged();
      return t;
    },
    addCircle: function (t, e, i, s) {
      var n = new p2.Circle({
        radius: this.world.pxm(t)
      });
      return this.addShape(n, e, i, s);
    },
    addRectangle: function (t, e, i, s, n) {
      var a = new p2.Box({
        width: this.world.pxm(t),
        height: this.world.pxm(e)
      });
      return this.addShape(a, i, s, n);
    },
    addPlane: function (t, e, i) {
      var s = new p2.Plane();
      return this.addShape(s, t, e, i);
    },
    addParticle: function (t, e, i) {
      var s = new p2.Particle();
      return this.addShape(s, t, e, i);
    },
    addLine: function (t, e, i, s) {
      var n = new p2.Line({
        length: this.world.pxm(t)
      });
      return this.addShape(n, e, i, s);
    },
    addCapsule: function (t, e, i, s, n) {
      var a = new p2.Capsule({
        length: this.world.pxm(t),
        radius: this.world.pxm(e)
      });
      return this.addShape(a, i, s, n);
    },
    addPolygon: function (t, e) {
      t = t || {};
      if (!Array.isArray(e)) {
        e = Array.prototype.slice.call(arguments, 1);
      }
      var i = [];
      if (e.length === 1 && Array.isArray(e[0])) {
        i = e[0].slice(0);
      } else if (Array.isArray(e[0])) {
        i = e.slice();
      } else if (typeof e[0] == "number") {
        for (var s = 0, n = e.length; s < n; s += 2) {
          i.push([e[s], e[s + 1]]);
        }
      }
      var a = i.length - 1;
      if (i[a][0] === i[0][0] && i[a][1] === i[0][1]) {
        i.pop();
      }
      for (var o = 0; o < i.length; o++) {
        i[o][0] = this.world.pxmi(i[o][0]);
        i[o][1] = this.world.pxmi(i[o][1]);
      }
      var r = this.data.fromPolygon(i, t);
      this.shapeChanged();
      return r;
    },
    removeShape: function (t) {
      var e = this.data.removeShape(t);
      this.shapeChanged();
      return e;
    },
    setCircle: function (t, e, i, s) {
      this.clearShapes();
      return this.addCircle(t, e, i, s);
    },
    setRectangle: function (t = 16, e = 16, i, s, n) {
      this.clearShapes();
      return this.addRectangle(t, e, i, s, n);
    },
    setRectangleFromSprite: function (t = this.sprite) {
      this.clearShapes();
      return this.addRectangle(t.width, t.height, 0, 0, t.rotation);
    },
    setMaterial: function (t, e) {
      if (e === undefined) {
        for (var i = this.data.shapes.length - 1; i >= 0; i--) {
          this.data.shapes[i].material = t;
        }
      } else {
        e.material = t;
      }
    },
    shapeChanged: function () {
      if (this.debugBody) {
        this.debugBody.draw();
      }
    },
    addPhaserPolygon: function (t, e) {
      for (var i = this.game.cache.getPhysicsData(t, e), s = [], n = 0; n < i.length; n++) {
        var a = i[n];
        var o = this.addFixture(a);
        s[a.filter.group] = s[a.filter.group] || [];
        s[a.filter.group] = s[a.filter.group].concat(o);
        if (a.fixtureKey) {
          s[a.fixtureKey] = o;
        }
      }
      this.data.aabbNeedsUpdate = true;
      this.shapeChanged();
      return s;
    },
    addFixture: function (t) {
      var e = [];
      if (t.circle) {
        var i = new p2.Circle({
          radius: this.world.pxm(t.circle.radius)
        });
        i.collisionGroup = t.filter.categoryBits;
        i.collisionMask = t.filter.maskBits;
        i.sensor = t.isSensor;
        var s = p2.vec2.create();
        s[0] = this.world.pxmi(t.circle.position[0] - this.sprite.width / 2);
        s[1] = this.world.pxmi(t.circle.position[1] - this.sprite.height / 2);
        this.data.addShape(i, s);
        e.push(i);
      } else {
        for (var n = t.polygons, a = p2.vec2.create(), o = 0; o < n.length; o++) {
          for (var r = n[o], h = [], l = 0; l < r.length; l += 2) {
            h.push([this.world.pxmi(r[l]), this.world.pxmi(r[l + 1])]);
          }
          for (var i = new p2.Convex({
              vertices: h
            }), c = 0; c !== i.vertices.length; c++) {
            var u = i.vertices[c];
            p2.vec2.sub(u, u, i.centerOfMass);
          }
          p2.vec2.scale(a, i.centerOfMass, 1);
          a[0] -= this.world.pxmi(this.sprite.width / 2);
          a[1] -= this.world.pxmi(this.sprite.height / 2);
          i.updateTriangles();
          i.updateCenterOfMass();
          i.updateBoundingRadius();
          i.collisionGroup = t.filter.categoryBits;
          i.collisionMask = t.filter.maskBits;
          i.sensor = t.isSensor;
          this.data.addShape(i, a);
          e.push(i);
        }
      }
      return e;
    },
    loadPolygon: function (t, e) {
      if (t === null) {
        var i = e;
      } else {
        var i = this.game.cache.getPhysicsData(t, e);
      }
      var s = p2.vec2.create();
      for (var n = 0; n < i.length; n++) {
        var a = [];
        for (var o = 0; o < i[n].shape.length; o += 2) {
          a.push([this.world.pxmi(i[n].shape[o]), this.world.pxmi(i[n].shape[o + 1])]);
        }
        for (var r = new p2.Convex({
            vertices: a
          }), h = 0; h !== r.vertices.length; h++) {
          var l = r.vertices[h];
          p2.vec2.sub(l, l, r.centerOfMass);
        }
        p2.vec2.scale(s, r.centerOfMass, 1);
        s[0] -= this.world.pxmi(this.sprite.width / 2);
        s[1] -= this.world.pxmi(this.sprite.height / 2);
        r.updateTriangles();
        r.updateCenterOfMass();
        r.updateBoundingRadius();
        this.data.addShape(r, s);
      }
      this.data.aabbNeedsUpdate = true;
      this.shapeChanged();
      return true;
    }
  };
  a.Physics.P2.Body.prototype.constructor = a.Physics.P2.Body;
  a.Physics.P2.Body.DYNAMIC = 1;
  a.Physics.P2.Body.STATIC = 2;
  a.Physics.P2.Body.KINEMATIC = 4;
  Object.defineProperty(a.Physics.P2.Body.prototype, "static", {
    get: function () {
      return this.data.type === a.Physics.P2.Body.STATIC;
    },
    set: function (t) {
      if (t && this.data.type !== a.Physics.P2.Body.STATIC) {
        this.data.type = a.Physics.P2.Body.STATIC;
        this.mass = 0;
      } else if (!t && this.data.type === a.Physics.P2.Body.STATIC) {
        this.data.type = a.Physics.P2.Body.DYNAMIC;
        this.mass = 1;
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "dynamic", {
    get: function () {
      return this.data.type === a.Physics.P2.Body.DYNAMIC;
    },
    set: function (t) {
      if (t && this.data.type !== a.Physics.P2.Body.DYNAMIC) {
        this.data.type = a.Physics.P2.Body.DYNAMIC;
        this.mass = 1;
      } else if (!t && this.data.type === a.Physics.P2.Body.DYNAMIC) {
        this.data.type = a.Physics.P2.Body.STATIC;
        this.mass = 0;
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "kinematic", {
    get: function () {
      return this.data.type === a.Physics.P2.Body.KINEMATIC;
    },
    set: function (t) {
      if (t && this.data.type !== a.Physics.P2.Body.KINEMATIC) {
        this.data.type = a.Physics.P2.Body.KINEMATIC;
        this.mass = 4;
      } else if (!t && this.data.type === a.Physics.P2.Body.KINEMATIC) {
        this.data.type = a.Physics.P2.Body.STATIC;
        this.mass = 0;
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "allowSleep", {
    get: function () {
      return this.data.allowSleep;
    },
    set: function (t) {
      if (t !== this.data.allowSleep) {
        this.data.allowSleep = t;
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "angle", {
    get: function () {
      return a.Math.wrapAngle(a.Math.radToDeg(this.data.angle));
    },
    set: function (t) {
      this.data.angle = a.Math.degToRad(a.Math.wrapAngle(t));
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "angularDamping", {
    get: function () {
      return this.data.angularDamping;
    },
    set: function (t) {
      this.data.angularDamping = t;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "angularForce", {
    get: function () {
      return this.data.angularForce;
    },
    set: function (t) {
      this.data.angularForce = t;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "angularVelocity", {
    get: function () {
      return this.data.angularVelocity;
    },
    set: function (t) {
      this.data.angularVelocity = t;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "damping", {
    get: function () {
      return this.data.damping;
    },
    set: function (t) {
      this.data.damping = t;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "fixedRotation", {
    get: function () {
      return this.data.fixedRotation;
    },
    set: function (t) {
      if (t !== this.data.fixedRotation) {
        this.data.fixedRotation = t;
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "inertia", {
    get: function () {
      return this.data.inertia;
    },
    set: function (t) {
      this.data.inertia = t;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "mass", {
    get: function () {
      return this.data.mass;
    },
    set: function (t) {
      if (t !== this.data.mass) {
        this.data.mass = t;
        this.data.updateMassProperties();
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "motionState", {
    get: function () {
      return this.data.type;
    },
    set: function (t) {
      if (t !== this.data.type) {
        this.data.type = t;
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "rotation", {
    get: function () {
      return this.data.angle;
    },
    set: function (t) {
      this.data.angle = t;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "sleepSpeedLimit", {
    get: function () {
      return this.data.sleepSpeedLimit;
    },
    set: function (t) {
      this.data.sleepSpeedLimit = t;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "x", {
    get: function () {
      return this.world.mpxi(this.data.position[0]);
    },
    set: function (t) {
      this.data.position[0] = this.world.pxmi(t);
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "y", {
    get: function () {
      return this.world.mpxi(this.data.position[1]);
    },
    set: function (t) {
      this.data.position[1] = this.world.pxmi(t);
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "id", {
    get: function () {
      return this.data.id;
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "debug", {
    get: function () {
      return this.debugBody !== null;
    },
    set: function (t) {
      if (t && !this.debugBody) {
        this.debugBody = new a.Physics.P2.BodyDebug(this.game, this.data);
      } else if (!t && this.debugBody) {
        this.debugBody.destroy();
        this.debugBody = null;
      }
    }
  });
  Object.defineProperty(a.Physics.P2.Body.prototype, "collideWorldBounds", {
    get: function () {
      return this._collideWorldBounds;
    },
    set: function (t) {
      if (t && !this._collideWorldBounds) {
        this._collideWorldBounds = true;
        this.updateCollisionMask();
      } else if (!t && this._collideWorldBounds) {
        this._collideWorldBounds = false;
        this.updateCollisionMask();
      }
    }
  });
  a.Physics.P2.BodyDebug = function (t, e, i) {
    a.Group.call(this, t);
    var s = {
      pixelsPerLengthUnit: t.physics.p2.mpx(1),
      debugPolygons: false,
      lineWidth: 1,
      alpha: 0.5
    };
    this.settings = a.Utils.extend(s, i);
    this.ppu = this.settings.pixelsPerLengthUnit;
    this.ppu = this.ppu * -1;
    this.body = e;
    this.canvas = new a.Graphics(t);
    this.canvas.alpha = this.settings.alpha;
    this.add(this.canvas);
    this.draw();
    this.updateSpriteTransform();
  };
  a.Physics.P2.BodyDebug.prototype = Object.create(a.Group.prototype);
  a.Physics.P2.BodyDebug.prototype.constructor = a.Physics.P2.BodyDebug;
  a.Utils.extend(a.Physics.P2.BodyDebug.prototype, {
    updateSpriteTransform: function () {
      this.position.x = this.body.position[0] * this.ppu;
      this.position.y = this.body.position[1] * this.ppu;
      this.rotation = this.body.angle;
    },
    draw: function () {
      var t;
      var e;
      var i;
      var s;
      var n;
      var a;
      var o;
      var r;
      var h;
      var l;
      var c;
      var u;
      var d;
      var p;
      var f;
      r = this.body;
      l = this.canvas;
      l.clear();
      i = parseInt(this.randomPastelHex(), 16);
      a = 16711680;
      o = this.lineWidth;
      if (r instanceof p2.Body && r.shapes.length) {
        var g = r.shapes.length;
        for (s = 0; s !== g;) {
          e = r.shapes[s];
          h = e.position || 0;
          t = e.angle || 0;
          if (e instanceof p2.Circle) {
            this.drawCircle(l, h[0] * this.ppu, h[1] * this.ppu, t, e.radius * this.ppu, i, o);
          } else if (e instanceof p2.Capsule) {
            this.drawCapsule(l, h[0] * this.ppu, h[1] * this.ppu, t, e.length * this.ppu, e.radius * this.ppu, a, i, o);
          } else if (e instanceof p2.Plane) {
            this.drawPlane(l, h[0] * this.ppu, -h[1] * this.ppu, i, a, o * 5, o * 10, o * 10, this.ppu * 100, t);
          } else if (e instanceof p2.Line) {
            this.drawLine(l, e.length * this.ppu, a, o);
          } else if (e instanceof p2.Box) {
            this.drawRectangle(l, h[0] * this.ppu, h[1] * this.ppu, t, e.width * this.ppu, e.height * this.ppu, a, i, o);
          } else if (e instanceof p2.Convex) {
            u = [];
            d = p2.vec2.create();
            n = p = 0;
            f = e.vertices.length;
            for (; f >= 0 ? p < f : p > f; n = f >= 0 ? ++p : --p) {
              c = e.vertices[n];
              p2.vec2.rotate(d, c, t);
              u.push([(d[0] + h[0]) * this.ppu, -(d[1] + h[1]) * this.ppu]);
            }
            this.drawConvex(l, u, e.triangles, a, i, o, this.settings.debugPolygons, [h[0] * this.ppu, -h[1] * this.ppu]);
          }
          s++;
        }
      }
    },
    drawRectangle: function (t, e, i, s, n, a, o = 0, r, h = 1) {
      t.lineStyle(h, o, 1);
      t.beginFill(r);
      t.drawRect(e - n / 2, i - a / 2, n, a);
    },
    drawCircle: function (t, e, i, s, n, a = 16777215, o = 1) {
      t.lineStyle(o, 0, 1);
      t.beginFill(a, 1);
      t.drawCircle(e, i, -n * 2);
      t.endFill();
      t.moveTo(e, i);
      t.lineTo(e + n * Math.cos(-s), i + n * Math.sin(-s));
    },
    drawLine: function (t, e, i = 0, s = 1) {
      t.lineStyle(s * 5, i, 1);
      t.moveTo(-e / 2, 0);
      t.lineTo(e / 2, 0);
    },
    drawConvex: function (t, e, i, s, n, a, o, r) {
      var h;
      var l;
      var c;
      var u;
      var d;
      var p;
      var f;
      var g;
      var m;
      var y;
      var v;
      if (a === undefined) {
        a = 1;
      }
      if (s === undefined) {
        s = 0;
      }
      if (o) {
        h = [16711680, 65280, 255];
        l = 0;
        while (l !== e.length + 1) {
          u = e[l % e.length];
          d = e[(l + 1) % e.length];
          f = u[0];
          y = u[1];
          g = d[0];
          v = d[1];
          t.lineStyle(a, h[l % h.length], 1);
          t.moveTo(f, -y);
          t.lineTo(g, -v);
          t.drawCircle(f, -y, a * 2);
          l++;
        }
        t.lineStyle(a, 0, 1);
        return t.drawCircle(r[0], r[1], a * 2);
      }
      t.lineStyle(a, s, 1);
      t.beginFill(n);
      l = 0;
      while (l !== e.length) {
        c = e[l];
        p = c[0];
        m = c[1];
        if (l === 0) {
          t.moveTo(p, -m);
        } else {
          t.lineTo(p, -m);
        }
        l++;
      }
      t.endFill();
      if (e.length > 2) {
        t.moveTo(e[e.length - 1][0], -e[e.length - 1][1]);
        return t.lineTo(e[0][0], -e[0][1]);
      }
    },
    drawPath: function (t, e, i, s, n) {
      var a;
      var o;
      var r;
      var h;
      var l;
      var c;
      var u;
      var d;
      var p;
      var f;
      var g;
      var m;
      var y;
      if (n === undefined) {
        n = 1;
      }
      if (i === undefined) {
        i = 0;
      }
      t.lineStyle(n, i, 1);
      if (typeof s == "number") {
        t.beginFill(s);
      }
      r = null;
      h = null;
      o = 0;
      while (o < e.length) {
        g = e[o];
        m = g[0];
        y = g[1];
        if (m !== r || y !== h) {
          if (o === 0) {
            t.moveTo(m, y);
          } else {
            l = r;
            c = h;
            u = m;
            d = y;
            p = e[(o + 1) % e.length][0];
            f = e[(o + 1) % e.length][1];
            if ((a = (u - l) * (f - c) - (p - l) * (d - c)) !== 0) {
              t.lineTo(m, y);
            }
          }
          r = m;
          h = y;
        }
        o++;
      }
      if (typeof s == "number") {
        t.endFill();
      }
      if (e.length > 2 && typeof s == "number") {
        t.moveTo(e[e.length - 1][0], e[e.length - 1][1]);
        t.lineTo(e[0][0], e[0][1]);
      }
    },
    drawPlane: function (t, e, i, s, n, a, o, r, h, l) {
      var c;
      var u;
      var d;
      if (a === undefined) {
        a = 1;
      }
      if (s === undefined) {
        s = 16777215;
      }
      t.lineStyle(a, n, 11);
      t.beginFill(s);
      c = h;
      t.moveTo(e, -i);
      u = e + Math.cos(l) * this.game.width;
      d = i + Math.sin(l) * this.game.height;
      t.lineTo(u, -d);
      t.moveTo(e, -i);
      u = e + Math.cos(l) * -this.game.width;
      d = i + Math.sin(l) * -this.game.height;
      t.lineTo(u, -d);
    },
    drawCapsule: function (t, e, i, s, n, a, o = 0, r, h = 1) {
      t.lineStyle(h, o, 1);
      var l = Math.cos(s);
      var c = Math.sin(s);
      t.beginFill(r, 1);
      t.drawCircle(-n / 2 * l + e, -n / 2 * c + i, -a * 2);
      t.drawCircle(n / 2 * l + e, n / 2 * c + i, -a * 2);
      t.endFill();
      t.lineStyle(h, o, 0);
      t.beginFill(r, 1);
      t.moveTo(-n / 2 * l + a * c + e, -n / 2 * c + a * l + i);
      t.lineTo(n / 2 * l + a * c + e, n / 2 * c + a * l + i);
      t.lineTo(n / 2 * l - a * c + e, n / 2 * c - a * l + i);
      t.lineTo(-n / 2 * l - a * c + e, -n / 2 * c - a * l + i);
      t.endFill();
      t.lineStyle(h, o, 1);
      t.moveTo(-n / 2 * l + a * c + e, -n / 2 * c + a * l + i);
      t.lineTo(n / 2 * l + a * c + e, n / 2 * c + a * l + i);
      t.moveTo(-n / 2 * l - a * c + e, -n / 2 * c - a * l + i);
      t.lineTo(n / 2 * l - a * c + e, n / 2 * c - a * l + i);
    },
    randomPastelHex: function () {
      var t;
      var e;
      var i;
      var s;
      i = [255, 255, 255];
      s = Math.floor(Math.random() * 256);
      e = Math.floor(Math.random() * 256);
      t = Math.floor(Math.random() * 256);
      s = Math.floor((s + i[0] * 3) / 4);
      e = Math.floor((e + i[1] * 3) / 4);
      t = Math.floor((t + i[2] * 3) / 4);
      return this.rgbToHex(s, e, t);
    },
    rgbToHex: function (t, e, i) {
      return this.componentToHex(t) + this.componentToHex(e) + this.componentToHex(i);
    },
    componentToHex: function (t) {
      var e;
      e = t.toString(16);
      if (e.length === 2) {
        return e;
      } else {
        return e + "0";
      }
    }
  });
  a.Physics.P2.Spring = function (t, e, i, s, n, a, o, r, h, l) {
    this.game = t.game;
    this.world = t;
    if (s === undefined) {
      s = 1;
    }
    if (n === undefined) {
      n = 100;
    }
    if (a === undefined) {
      a = 1;
    }
    s = t.pxm(s);
    var c = {
      restLength: s,
      stiffness: n,
      damping: a
    };
    if (o !== undefined && o !== null) {
      c.worldAnchorA = [t.pxm(o[0]), t.pxm(o[1])];
    }
    if (r !== undefined && r !== null) {
      c.worldAnchorB = [t.pxm(r[0]), t.pxm(r[1])];
    }
    if (h !== undefined && h !== null) {
      c.localAnchorA = [t.pxm(h[0]), t.pxm(h[1])];
    }
    if (l !== undefined && l !== null) {
      c.localAnchorB = [t.pxm(l[0]), t.pxm(l[1])];
    }
    this.data = new p2.LinearSpring(e, i, c);
    this.data.parent = this;
  };
  a.Physics.P2.Spring.prototype.constructor = a.Physics.P2.Spring;
  a.Physics.P2.RotationalSpring = function (t, e, i, s, n, a) {
    this.game = t.game;
    this.world = t;
    if (s === undefined) {
      s = null;
    }
    if (n === undefined) {
      n = 100;
    }
    if (a === undefined) {
      a = 1;
    }
    s &&= t.pxm(s);
    var o = {
      restAngle: s,
      stiffness: n,
      damping: a
    };
    this.data = new p2.RotationalSpring(e, i, o);
    this.data.parent = this;
  };
  a.Physics.P2.Spring.prototype.constructor = a.Physics.P2.Spring;
  a.Physics.P2.Material = function (t) {
    this.name = t;
    p2.Material.call(this);
  };
  a.Physics.P2.Material.prototype = Object.create(p2.Material.prototype);
  a.Physics.P2.Material.prototype.constructor = a.Physics.P2.Material;
  a.Physics.P2.ContactMaterial = function (t, e, i) {
    p2.ContactMaterial.call(this, t, e, i);
  };
  a.Physics.P2.ContactMaterial.prototype = Object.create(p2.ContactMaterial.prototype);
  a.Physics.P2.ContactMaterial.prototype.constructor = a.Physics.P2.ContactMaterial;
  a.Physics.P2.CollisionGroup = function (t) {
    this.mask = t;
  };
  a.Physics.P2.DistanceConstraint = function (t, e, i, s = 100, n = [0, 0], a = [0, 0], o = Number.MAX_VALUE) {
    this.game = t.game;
    this.world = t;
    s = t.pxm(s);
    n = [t.pxmi(n[0]), t.pxmi(n[1])];
    a = [t.pxmi(a[0]), t.pxmi(a[1])];
    var r = {
      distance: s,
      localAnchorA: n,
      localAnchorB: a,
      maxForce: o
    };
    p2.DistanceConstraint.call(this, e, i, r);
  };
  a.Physics.P2.DistanceConstraint.prototype = Object.create(p2.DistanceConstraint.prototype);
  a.Physics.P2.DistanceConstraint.prototype.constructor = a.Physics.P2.DistanceConstraint;
  a.Physics.P2.GearConstraint = function (t, e, i, s = 0, n = 1) {
    this.game = t.game;
    this.world = t;
    var a = {
      angle: s,
      ratio: n
    };
    p2.GearConstraint.call(this, e, i, a);
  };
  a.Physics.P2.GearConstraint.prototype = Object.create(p2.GearConstraint.prototype);
  a.Physics.P2.GearConstraint.prototype.constructor = a.Physics.P2.GearConstraint;
  a.Physics.P2.LockConstraint = function (t, e, i, s = [0, 0], n = 0, a = Number.MAX_VALUE) {
    this.game = t.game;
    this.world = t;
    s = [t.pxm(s[0]), t.pxm(s[1])];
    var o = {
      localOffsetB: s,
      localAngleB: n,
      maxForce: a
    };
    p2.LockConstraint.call(this, e, i, o);
  };
  a.Physics.P2.LockConstraint.prototype = Object.create(p2.LockConstraint.prototype);
  a.Physics.P2.LockConstraint.prototype.constructor = a.Physics.P2.LockConstraint;
  a.Physics.P2.PrismaticConstraint = function (t, e, i, s = true, n = [0, 0], a = [0, 0], o = [0, 0], r = Number.MAX_VALUE) {
    this.game = t.game;
    this.world = t;
    n = [t.pxmi(n[0]), t.pxmi(n[1])];
    a = [t.pxmi(a[0]), t.pxmi(a[1])];
    var h = {
      localAnchorA: n,
      localAnchorB: a,
      localAxisA: o,
      maxForce: r,
      disableRotationalLock: !s
    };
    p2.PrismaticConstraint.call(this, e, i, h);
  };
  a.Physics.P2.PrismaticConstraint.prototype = Object.create(p2.PrismaticConstraint.prototype);
  a.Physics.P2.PrismaticConstraint.prototype.constructor = a.Physics.P2.PrismaticConstraint;
  a.Physics.P2.RevoluteConstraint = function (t, e, i, s, n, a = Number.MAX_VALUE, o = null) {
    this.game = t.game;
    this.world = t;
    i = [t.pxmi(i[0]), t.pxmi(i[1])];
    n = [t.pxmi(n[0]), t.pxmi(n[1])];
    o &&= [t.pxmi(o[0]), t.pxmi(o[1])];
    var r = {
      worldPivot: o,
      localPivotA: i,
      localPivotB: n,
      maxForce: a
    };
    p2.RevoluteConstraint.call(this, e, s, r);
  };
  a.Physics.P2.RevoluteConstraint.prototype = Object.create(p2.RevoluteConstraint.prototype);
  a.Physics.P2.RevoluteConstraint.prototype.constructor = a.Physics.P2.RevoluteConstraint;
  a.ImageCollection = function (t, e, i, s, n, a, o) {
    if (i === undefined || i <= 0) {
      i = 32;
    }
    if (s === undefined || s <= 0) {
      s = 32;
    }
    if (n === undefined) {
      n = 0;
    }
    if (a === undefined) {
      a = 0;
    }
    this.name = t;
    this.firstgid = e | 0;
    this.imageWidth = i | 0;
    this.imageHeight = s | 0;
    this.imageMargin = n | 0;
    this.imageSpacing = a | 0;
    this.properties = o || {};
    this.images = [];
    this.total = 0;
  };
  a.ImageCollection.prototype = {
    containsImageIndex: function (t) {
      return t >= this.firstgid && t < this.firstgid + this.total;
    },
    addImage: function (t, e) {
      this.images.push({
        gid: t,
        image: e
      });
      this.total++;
    }
  };
  a.ImageCollection.prototype.constructor = a.ImageCollection;
  a.Tile = function (t, e, i, s, n, a) {
    this.layer = t;
    this.index = e;
    this.x = i;
    this.y = s;
    this.rotation = 0;
    this.flipped = false;
    this.worldX = i * n;
    this.worldY = s * a;
    this.width = n;
    this.height = a;
    this.centerX = Math.abs(n / 2);
    this.centerY = Math.abs(a / 2);
    this.alpha = 1;
    this.properties = {};
    this.scanned = false;
    this.faceTop = false;
    this.faceBottom = false;
    this.faceLeft = false;
    this.faceRight = false;
    this.collideLeft = false;
    this.collideRight = false;
    this.collideUp = false;
    this.collideDown = false;
    this.collisionCallback = null;
    this.collisionCallbackContext = this;
  };
  a.Tile.prototype = {
    containsPoint: function (t, e) {
      return !(t < this.worldX) && !(e < this.worldY) && !(t > this.right) && !(e > this.bottom);
    },
    intersects: function (t, e, i, s) {
      return !(i <= this.worldX) && !(s <= this.worldY) && !(t >= this.worldX + this.width) && !(e >= this.worldY + this.height);
    },
    setCollisionCallback: function (t, e) {
      this.collisionCallback = t;
      this.collisionCallbackContext = e;
    },
    destroy: function () {
      this.collisionCallback = null;
      this.collisionCallbackContext = null;
      this.properties = null;
    },
    setCollision: function (t, e, i, s) {
      this.collideLeft = t;
      this.collideRight = e;
      this.collideUp = i;
      this.collideDown = s;
      this.faceLeft = t;
      this.faceRight = e;
      this.faceTop = i;
      this.faceBottom = s;
    },
    resetCollision: function () {
      this.collideLeft = false;
      this.collideRight = false;
      this.collideUp = false;
      this.collideDown = false;
      this.faceTop = false;
      this.faceBottom = false;
      this.faceLeft = false;
      this.faceRight = false;
    },
    isInteresting: function (t, e) {
      if (t && e) {
        return this.collideLeft || this.collideRight || this.collideUp || this.collideDown || this.faceTop || this.faceBottom || this.faceLeft || this.faceRight || this.collisionCallback;
      } else if (t) {
        return this.collideLeft || this.collideRight || this.collideUp || this.collideDown;
      } else {
        return !!e && (this.faceTop || this.faceBottom || this.faceLeft || this.faceRight);
      }
    },
    copy: function (t) {
      this.index = t.index;
      this.alpha = t.alpha;
      this.properties = t.properties;
      this.collideUp = t.collideUp;
      this.collideDown = t.collideDown;
      this.collideLeft = t.collideLeft;
      this.collideRight = t.collideRight;
      this.collisionCallback = t.collisionCallback;
      this.collisionCallbackContext = t.collisionCallbackContext;
    }
  };
  a.Tile.prototype.constructor = a.Tile;
  Object.defineProperty(a.Tile.prototype, "collides", {
    get: function () {
      return this.collideLeft || this.collideRight || this.collideUp || this.collideDown;
    }
  });
  Object.defineProperty(a.Tile.prototype, "canCollide", {
    get: function () {
      return this.collideLeft || this.collideRight || this.collideUp || this.collideDown || this.collisionCallback;
    }
  });
  Object.defineProperty(a.Tile.prototype, "left", {
    get: function () {
      return this.worldX;
    }
  });
  Object.defineProperty(a.Tile.prototype, "right", {
    get: function () {
      return this.worldX + this.width;
    }
  });
  Object.defineProperty(a.Tile.prototype, "top", {
    get: function () {
      return this.worldY;
    }
  });
  Object.defineProperty(a.Tile.prototype, "bottom", {
    get: function () {
      return this.worldY + this.height;
    }
  });
  a.Tilemap = function (t, e, i, s, n, o) {
    this.game = t;
    this.key = e;
    var r = a.TilemapParser.parse(this.game, e, i, s, n, o);
    if (r !== null) {
      this.width = r.width;
      this.height = r.height;
      this.tileWidth = r.tileWidth;
      this.tileHeight = r.tileHeight;
      this.orientation = r.orientation;
      this.format = r.format;
      this.version = r.version;
      this.properties = r.properties;
      this.widthInPixels = r.widthInPixels;
      this.heightInPixels = r.heightInPixels;
      this.layers = r.layers;
      this.tilesets = r.tilesets;
      this.imagecollections = r.imagecollections;
      this.tiles = r.tiles;
      this.objects = r.objects;
      this.collideIndexes = [];
      this.collision = r.collision;
      this.images = r.images;
      this.enableDebug = false;
      this.currentLayer = 0;
      this.debugMap = [];
      this._results = [];
      this._tempA = 0;
      this._tempB = 0;
    }
  };
  a.Tilemap.CSV = 0;
  a.Tilemap.TILED_JSON = 1;
  a.Tilemap.NORTH = 0;
  a.Tilemap.EAST = 1;
  a.Tilemap.SOUTH = 2;
  a.Tilemap.WEST = 3;
  a.Tilemap.prototype = {
    create: function (t, e, i, s, n, a = this.game.world) {
      this.width = e;
      this.height = i;
      this.setTileSize(s, n);
      this.layers.length = 0;
      return this.createBlankLayer(t, e, i, s, n, a);
    },
    setTileSize: function (t, e) {
      this.tileWidth = t;
      this.tileHeight = e;
      this.widthInPixels = this.width * t;
      this.heightInPixels = this.height * e;
    },
    addTilesetImage: function (t, e, i, s, n, o, r) {
      if (t === undefined) {
        return null;
      }
      if (i === undefined) {
        i = this.tileWidth;
      }
      if (s === undefined) {
        s = this.tileHeight;
      }
      if (n === undefined) {
        n = 0;
      }
      if (o === undefined) {
        o = 0;
      }
      if (r === undefined) {
        r = 0;
      }
      if (i === 0) {
        i = 32;
      }
      if (s === 0) {
        s = 32;
      }
      var h = null;
      if (e === undefined || e === null) {
        e = t;
      }
      if (e instanceof a.BitmapData) {
        h = e.canvas;
      } else {
        if (!this.game.cache.checkImageKey(e)) {
          return null;
        }
        h = this.game.cache.getImage(e);
      }
      var l = this.getTilesetIndex(t);
      if (l === null && this.format === a.Tilemap.TILED_JSON) {
        return null;
      }
      if (this.tilesets[l]) {
        this.tilesets[l].setImage(h);
        return this.tilesets[l];
      }
      var c = new a.Tileset(t, r, i, s, n, o, {});
      c.setImage(h);
      this.tilesets.push(c);
      for (var u = this.tilesets.length - 1, d = n, p = n, f = 0, g = 0, m = 0, y = r; y < r + c.total && (this.tiles[y] = [d, p, u], d += i + o, ++f !== c.total) && (++g !== c.columns || (d = n, p += s + o, g = 0, ++m !== c.rows)); y++);
      return c;
    },
    createFromObjects: function (t, e, i, s, n = true, o = false, r = this.game.world, h = a.Sprite, l = true) {
      if (this.objects[t]) {
        for (var c = 0; c < this.objects[t].length; c++) {
          var u = false;
          var d = this.objects[t][c];
          if (d.gid !== undefined && typeof e == "number" && d.gid === e) {
            u = true;
          } else if (d.id !== undefined && typeof e == "number" && d.id === e) {
            u = true;
          } else if (d.name !== undefined && typeof e == "string" && d.name === e) {
            u = true;
          }
          if (u) {
            var p = new h(this.game, parseFloat(d.x, 10), parseFloat(d.y, 10), i, s);
            p.name = d.name;
            p.visible = d.visible;
            p.autoCull = o;
            p.exists = n;
            if (d.width) {
              p.width = d.width;
            }
            if (d.height) {
              p.height = d.height;
            }
            if (d.rotation) {
              p.angle = d.rotation;
            }
            if (l) {
              p.y -= p.height;
            }
            r.add(p);
            for (var f in d.properties) {
              r.set(p, f, d.properties[f], false, false, 0, true);
            }
          }
        }
      }
    },
    createFromTiles: function (t, e, i, s, n, o) {
      if (typeof t == "number") {
        t = [t];
      }
      if (e === undefined || e === null) {
        e = [];
      } else if (typeof e == "number") {
        e = [e];
      }
      s = this.getLayer(s);
      if (n === undefined) {
        n = this.game.world;
      }
      if (o === undefined) {
        o = {};
      }
      if (o.customClass === undefined) {
        o.customClass = a.Sprite;
      }
      if (o.adjustY === undefined) {
        o.adjustY = true;
      }
      var r = this.layers[s].width;
      var h = this.layers[s].height;
      this.copy(0, 0, r, h, s);
      if (this._results.length < 2) {
        return 0;
      }
      var l = 0;
      var c;
      for (var u = 1, d = this._results.length; u < d; u++) {
        if (t.indexOf(this._results[u].index) !== -1) {
          c = new o.customClass(this.game, this._results[u].worldX, this._results[u].worldY, i);
          for (var p in o) {
            c[p] = o[p];
          }
          n.add(c);
          l++;
        }
      }
      if (e.length === 1) {
        for (u = 0; u < t.length; u++) {
          this.replace(t[u], e[0], 0, 0, r, h, s);
        }
      } else if (e.length > 1) {
        for (u = 0; u < t.length; u++) {
          this.replace(t[u], e[u], 0, 0, r, h, s);
        }
      }
      return l;
    },
    createLayer: function (t, e = this.game.width, i = this.game.height, s = this.game.world) {
      var n = t;
      if (typeof t == "string") {
        n = this.getLayerIndex(t);
      }
      if (n !== null && !(n > this.layers.length)) {
        if (e === undefined || e <= 0) {
          e = Math.min(this.game.width, this.layers[n].widthInPixels);
        } else if (e > this.game.width) {
          e = this.game.width;
        }
        if (i === undefined || i <= 0) {
          i = Math.min(this.game.height, this.layers[n].heightInPixels);
        } else if (i > this.game.height) {
          i = this.game.height;
        }
        this.enableDebug;
        var o = s.add(new a.TilemapLayer(this.game, this, n, e, i));
        this.enableDebug;
        return o;
      }
    },
    createBlankLayer: function (t, e, i, s, n, o = this.game.world) {
      if (this.getLayerIndex(t) === null) {
        var r = {
          name: t,
          x: 0,
          y: 0,
          width: e,
          height: i,
          widthInPixels: e * s,
          heightInPixels: i * n,
          alpha: 1,
          visible: true,
          properties: {},
          indexes: [],
          callbacks: [],
          bodies: [],
          data: null
        };
        var h;
        var l = [];
        for (var c = 0; c < i; c++) {
          h = [];
          for (var u = 0; u < e; u++) {
            h.push(new a.Tile(r, -1, u, c, s, n));
          }
          l.push(h);
        }
        r.data = l;
        this.layers.push(r);
        this.currentLayer = this.layers.length - 1;
        var d = r.widthInPixels;
        var p = r.heightInPixels;
        if (d > this.game.width) {
          d = this.game.width;
        }
        if (p > this.game.height) {
          p = this.game.height;
        }
        var l = new a.TilemapLayer(this.game, this, this.layers.length - 1, d, p);
        l.name = t;
        return o.add(l);
      }
    },
    getIndex: function (t, e) {
      for (var i = 0; i < t.length; i++) {
        if (t[i].name === e) {
          return i;
        }
      }
      return null;
    },
    getLayerIndex: function (t) {
      return this.getIndex(this.layers, t);
    },
    getTilesetIndex: function (t) {
      return this.getIndex(this.tilesets, t);
    },
    getImageIndex: function (t) {
      return this.getIndex(this.images, t);
    },
    setTileIndexCallback: function (t, e, i, s) {
      s = this.getLayer(s);
      if (typeof t == "number") {
        this.layers[s].callbacks[t] = {
          callback: e,
          callbackContext: i
        };
      } else {
        for (var n = 0, a = t.length; n < a; n++) {
          this.layers[s].callbacks[t[n]] = {
            callback: e,
            callbackContext: i
          };
        }
      }
    },
    setTileLocationCallback: function (t, e, i, s, n, a, o) {
      o = this.getLayer(o);
      this.copy(t, e, i, s, o);
      if (!(this._results.length < 2)) {
        for (var r = 1; r < this._results.length; r++) {
          this._results[r].setCollisionCallback(n, a);
        }
      }
    },
    setCollision: function (t, e = true, i, s = true) {
      i = this.getLayer(i);
      if (typeof t == "number") {
        return this.setCollisionByIndex(t, e, i, true);
      }
      if (Array.isArray(t)) {
        for (var n = 0; n < t.length; n++) {
          this.setCollisionByIndex(t[n], e, i, false);
        }
        if (s) {
          this.calculateFaces(i);
        }
      }
    },
    setCollisionBetween: function (t, e, i = true, s, n = true) {
      s = this.getLayer(s);
      if (!(t > e)) {
        for (var a = t; a <= e; a++) {
          this.setCollisionByIndex(a, i, s, false);
        }
        if (n) {
          this.calculateFaces(s);
        }
      }
    },
    setCollisionByExclusion: function (t, e = true, i, s = true) {
      i = this.getLayer(i);
      for (var n = 0, a = this.tiles.length; n < a; n++) {
        if (t.indexOf(n) === -1) {
          this.setCollisionByIndex(n, e, i, false);
        }
      }
      if (s) {
        this.calculateFaces(i);
      }
    },
    setCollisionByIndex: function (t, e = true, i = this.currentLayer, s = true) {
      if (e) {
        this.collideIndexes.push(t);
      } else {
        var n = this.collideIndexes.indexOf(t);
        if (n > -1) {
          this.collideIndexes.splice(n, 1);
        }
      }
      for (var a = 0; a < this.layers[i].height; a++) {
        for (var o = 0; o < this.layers[i].width; o++) {
          var r = this.layers[i].data[a][o];
          if (r && r.index === t) {
            if (e) {
              r.setCollision(true, true, true, true);
            } else {
              r.resetCollision();
            }
            r.faceTop = e;
            r.faceBottom = e;
            r.faceLeft = e;
            r.faceRight = e;
          }
        }
      }
      if (s) {
        this.calculateFaces(i);
      }
      return i;
    },
    getLayer: function (t = this.currentLayer) {
      return t;
    },
    setPreventRecalculate: function (t) {
      if (t === true && this.preventingRecalculate !== true) {
        this.preventingRecalculate = true;
        this.needToRecalculate = {};
      }
      if (t === false && this.preventingRecalculate === true) {
        this.preventingRecalculate = false;
        for (var e in this.needToRecalculate) {
          this.calculateFaces(e);
        }
        this.needToRecalculate = false;
      }
    },
    calculateFaces: function (t) {
      if (this.preventingRecalculate) {
        this.needToRecalculate[t] = true;
        return;
      }
      var e = null;
      var i = null;
      var s = null;
      var n = null;
      for (var a = 0, o = this.layers[t].height; a < o; a++) {
        for (var r = 0, h = this.layers[t].width; r < h; r++) {
          var l = this.layers[t].data[a][r];
          if (l) {
            e = this.getTileAbove(t, r, a);
            i = this.getTileBelow(t, r, a);
            s = this.getTileLeft(t, r, a);
            n = this.getTileRight(t, r, a);
            if (l.collides) {
              l.faceTop = true;
              l.faceBottom = true;
              l.faceLeft = true;
              l.faceRight = true;
            }
            if (e && e.collides) {
              l.faceTop = false;
            }
            if (i && i.collides) {
              l.faceBottom = false;
            }
            if (s && s.collides) {
              l.faceLeft = false;
            }
            if (n && n.collides) {
              l.faceRight = false;
            }
          }
        }
      }
    },
    getTileAbove: function (t, e, i) {
      if (i > 0) {
        return this.layers[t].data[i - 1][e];
      } else {
        return null;
      }
    },
    getTileBelow: function (t, e, i) {
      if (i < this.layers[t].height - 1) {
        return this.layers[t].data[i + 1][e];
      } else {
        return null;
      }
    },
    getTileLeft: function (t, e, i) {
      if (e > 0) {
        return this.layers[t].data[i][e - 1];
      } else {
        return null;
      }
    },
    getTileRight: function (t, e, i) {
      if (e < this.layers[t].width - 1) {
        return this.layers[t].data[i][e + 1];
      } else {
        return null;
      }
    },
    setLayer: function (t) {
      t = this.getLayer(t);
      if (this.layers[t]) {
        this.currentLayer = t;
      }
    },
    hasTile: function (t, e, i) {
      i = this.getLayer(i);
      return this.layers[i].data[e] !== undefined && this.layers[i].data[e][t] !== undefined && this.layers[i].data[e][t].index > -1;
    },
    removeTile: function (t, e, i) {
      i = this.getLayer(i);
      if (t >= 0 && t < this.layers[i].width && e >= 0 && e < this.layers[i].height && this.hasTile(t, e, i)) {
        var s = this.layers[i].data[e][t];
        this.layers[i].data[e][t] = new a.Tile(this.layers[i], -1, t, e, this.tileWidth, this.tileHeight);
        this.layers[i].dirty = true;
        this.calculateFaces(i);
        return s;
      }
    },
    removeTileWorldXY: function (t, e, i, s, n) {
      n = this.getLayer(n);
      t = this.game.math.snapToFloor(t, i) / i;
      e = this.game.math.snapToFloor(e, s) / s;
      return this.removeTile(t, e, n);
    },
    putTile: function (t, e, i, s) {
      if (t === null) {
        return this.removeTile(e, i, s);
      }
      s = this.getLayer(s);
      if (e >= 0 && e < this.layers[s].width && i >= 0 && i < this.layers[s].height) {
        var n;
        if (t instanceof a.Tile) {
          n = t.index;
          if (this.hasTile(e, i, s)) {
            this.layers[s].data[i][e].copy(t);
          } else {
            this.layers[s].data[i][e] = new a.Tile(s, n, e, i, t.width, t.height);
          }
        } else {
          n = t;
          if (this.hasTile(e, i, s)) {
            this.layers[s].data[i][e].index = n;
          } else {
            this.layers[s].data[i][e] = new a.Tile(this.layers[s], n, e, i, this.tileWidth, this.tileHeight);
          }
        }
        if (this.collideIndexes.indexOf(n) > -1) {
          this.layers[s].data[i][e].setCollision(true, true, true, true);
        } else {
          this.layers[s].data[i][e].resetCollision();
        }
        this.layers[s].dirty = true;
        this.calculateFaces(s);
        return this.layers[s].data[i][e];
      }
      return null;
    },
    putTileWorldXY: function (t, e, i, s, n, a) {
      a = this.getLayer(a);
      e = this.game.math.snapToFloor(e, s) / s;
      i = this.game.math.snapToFloor(i, n) / n;
      return this.putTile(t, e, i, a);
    },
    searchTileIndex: function (t, e = 0, i = false, s) {
      s = this.getLayer(s);
      var n = 0;
      if (i) {
        for (var a = this.layers[s].height - 1; a >= 0; a--) {
          for (var o = this.layers[s].width - 1; o >= 0; o--) {
            if (this.layers[s].data[a][o].index === t) {
              if (n === e) {
                return this.layers[s].data[a][o];
              }
              n++;
            }
          }
        }
      } else {
        for (var a = 0; a < this.layers[s].height; a++) {
          for (var o = 0; o < this.layers[s].width; o++) {
            if (this.layers[s].data[a][o].index === t) {
              if (n === e) {
                return this.layers[s].data[a][o];
              }
              n++;
            }
          }
        }
      }
      return null;
    },
    getTile: function (t, e, i, s = false) {
      i = this.getLayer(i);
      if (t >= 0 && t < this.layers[i].width && e >= 0 && e < this.layers[i].height) {
        if (this.layers[i].data[e][t].index === -1) {
          if (s) {
            return this.layers[i].data[e][t];
          } else {
            return null;
          }
        } else {
          return this.layers[i].data[e][t];
        }
      } else {
        return null;
      }
    },
    getTileWorldXY: function (t, e, i = this.tileWidth, s = this.tileHeight, n, a) {
      n = this.getLayer(n);
      t = this.game.math.snapToFloor(t, i) / i;
      e = this.game.math.snapToFloor(e, s) / s;
      return this.getTile(t, e, n, a);
    },
    copy: function (t, e, i, s, n) {
      n = this.getLayer(n);
      if (!this.layers[n]) {
        this._results.length = 0;
        return;
      }
      if (t === undefined) {
        t = 0;
      }
      if (e === undefined) {
        e = 0;
      }
      if (i === undefined) {
        i = this.layers[n].width;
      }
      if (s === undefined) {
        s = this.layers[n].height;
      }
      if (t < 0) {
        t = 0;
      }
      if (e < 0) {
        e = 0;
      }
      if (i > this.layers[n].width) {
        i = this.layers[n].width;
      }
      if (s > this.layers[n].height) {
        s = this.layers[n].height;
      }
      this._results.length = 0;
      this._results.push({
        x: t,
        y: e,
        width: i,
        height: s,
        layer: n
      });
      for (var a = e; a < e + s; a++) {
        for (var o = t; o < t + i; o++) {
          this._results.push(this.layers[n].data[a][o]);
        }
      }
      return this._results;
    },
    paste: function (t = 0, e = 0, i, s) {
      s = this.getLayer(s);
      if (i && !(i.length < 2)) {
        var n = t - i[1].x;
        var a = e - i[1].y;
        for (var o = 1; o < i.length; o++) {
          this.layers[s].data[a + i[o].y][n + i[o].x].copy(i[o]);
        }
        this.layers[s].dirty = true;
        this.calculateFaces(s);
      }
    },
    swap: function (t, e, i, s, n, a, o) {
      o = this.getLayer(o);
      this.copy(i, s, n, a, o);
      if (!(this._results.length < 2)) {
        this._tempA = t;
        this._tempB = e;
        this._results.forEach(this.swapHandler, this);
        this.paste(i, s, this._results, o);
      }
    },
    swapHandler: function (t) {
      if (t.index === this._tempA) {
        t.index = this._tempB;
      } else if (t.index === this._tempB) {
        t.index = this._tempA;
      }
    },
    forEach: function (t, e, i, s, n, a, o) {
      o = this.getLayer(o);
      this.copy(i, s, n, a, o);
      if (!(this._results.length < 2)) {
        this._results.forEach(t, e);
        this.paste(i, s, this._results, o);
      }
    },
    replace: function (t, e, i, s, n, a, o) {
      o = this.getLayer(o);
      this.copy(i, s, n, a, o);
      if (!(this._results.length < 2)) {
        for (var r = 1; r < this._results.length; r++) {
          if (this._results[r].index === t) {
            this._results[r].index = e;
          }
        }
        this.paste(i, s, this._results, o);
      }
    },
    random: function (t, e, i, s, n) {
      n = this.getLayer(n);
      this.copy(t, e, i, s, n);
      if (!(this._results.length < 2)) {
        var a = [];
        for (var o = 1; o < this._results.length; o++) {
          if (this._results[o].index) {
            var r = this._results[o].index;
            if (a.indexOf(r) === -1) {
              a.push(r);
            }
          }
        }
        for (var h = 1; h < this._results.length; h++) {
          this._results[h].index = this.game.rnd.pick(a);
        }
        this.paste(t, e, this._results, n);
      }
    },
    shuffle: function (t, e, i, s, n) {
      n = this.getLayer(n);
      this.copy(t, e, i, s, n);
      if (!(this._results.length < 2)) {
        var o = [];
        for (var r = 1; r < this._results.length; r++) {
          if (this._results[r].index) {
            o.push(this._results[r].index);
          }
        }
        a.ArrayUtils.shuffle(o);
        for (var h = 1; h < this._results.length; h++) {
          this._results[h].index = o[h - 1];
        }
        this.paste(t, e, this._results, n);
      }
    },
    fill: function (t, e, i, s, n, a) {
      a = this.getLayer(a);
      this.copy(e, i, s, n, a);
      if (!(this._results.length < 2)) {
        for (var o = 1; o < this._results.length; o++) {
          this._results[o].index = t;
        }
        this.paste(e, i, this._results, a);
      }
    },
    removeAllLayers: function () {
      this.layers.length = 0;
      this.currentLayer = 0;
    },
    dump: function () {
      var t = "";
      var e = [""];
      for (var i = 0; i < this.layers[this.currentLayer].height; i++) {
        for (var s = 0; s < this.layers[this.currentLayer].width; s++) {
          t += "%c  ";
          if (this.layers[this.currentLayer].data[i][s] > 1) {
            if (this.debugMap[this.layers[this.currentLayer].data[i][s]]) {
              e.push("background: " + this.debugMap[this.layers[this.currentLayer].data[i][s]]);
            } else {
              e.push("background: #ffffff");
            }
          } else {
            e.push("background: rgb(0, 0, 0)");
          }
        }
        t += "\n";
      }
      e[0] = t;
    },
    destroy: function () {
      this.removeAllLayers();
      this.data = [];
      this.game = null;
    }
  };
  a.Tilemap.prototype.constructor = a.Tilemap;
  Object.defineProperty(a.Tilemap.prototype, "layer", {
    get: function () {
      return this.layers[this.currentLayer];
    },
    set: function (t) {
      if (t !== this.currentLayer) {
        this.setLayer(t);
      }
    }
  });
  a.TilemapLayer = function (t, e, i, s, n) {
    s |= 0;
    n |= 0;
    a.Sprite.call(this, t, 0, 0);
    this.map = e;
    this.index = i;
    this.layer = e.layers[i];
    this.canvas = PIXI.CanvasPool.create(this, s, n);
    this.context = this.canvas.getContext("2d");
    this.setTexture(new PIXI.Texture(new PIXI.BaseTexture(this.canvas)));
    this.type = a.TILEMAPLAYER;
    this.physicsType = a.TILEMAPLAYER;
    this.renderSettings = {
      enableScrollDelta: false,
      overdrawRatio: 0.2,
      copyCanvas: null
    };
    this.debug = false;
    this.exists = true;
    this.debugSettings = {
      missingImageFill: "rgb(255,255,255)",
      debuggedTileOverfill: "rgba(0,255,0,0.4)",
      forceFullRedraw: true,
      debugAlpha: 0.5,
      facingEdgeStroke: "rgba(0,255,0,1)",
      collidingTileOverfill: "rgba(0,255,0,0.2)"
    };
    this.scrollFactorX = 1;
    this.scrollFactorY = 1;
    this.dirty = true;
    this.rayStepRate = 4;
    this._wrap = false;
    this._mc = {
      scrollX: 0,
      scrollY: 0,
      renderWidth: 0,
      renderHeight: 0,
      tileWidth: e.tileWidth,
      tileHeight: e.tileHeight,
      cw: e.tileWidth,
      ch: e.tileHeight,
      tilesets: []
    };
    this._scrollX = 0;
    this._scrollY = 0;
    this._results = [];
    if (!t.device.canvasBitBltShift) {
      this.renderSettings.copyCanvas = a.TilemapLayer.ensureSharedCopyCanvas();
    }
    this.fixedToCamera = true;
  };
  a.TilemapLayer.prototype = Object.create(a.Sprite.prototype);
  a.TilemapLayer.prototype.constructor = a.TilemapLayer;
  a.TilemapLayer.prototype.preUpdateCore = a.Component.Core.preUpdate;
  a.TilemapLayer.sharedCopyCanvas = null;
  a.TilemapLayer.ensureSharedCopyCanvas = function () {
    this.sharedCopyCanvas ||= PIXI.CanvasPool.create(this, 2, 2);
    return this.sharedCopyCanvas;
  };
  a.TilemapLayer.prototype.preUpdate = function () {
    return this.preUpdateCore();
  };
  a.TilemapLayer.prototype.postUpdate = function () {
    if (this.fixedToCamera) {
      this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x;
      this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y;
    }
    this._scrollX = this.game.camera.view.x * this.scrollFactorX / this.scale.x;
    this._scrollY = this.game.camera.view.y * this.scrollFactorY / this.scale.y;
  };
  a.TilemapLayer.prototype._renderCanvas = function (t) {
    if (this.fixedToCamera) {
      this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x;
      this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y;
    }
    this._scrollX = this.game.camera.view.x * this.scrollFactorX / this.scale.x;
    this._scrollY = this.game.camera.view.y * this.scrollFactorY / this.scale.y;
    this.render();
    PIXI.Sprite.prototype._renderCanvas.call(this, t);
  };
  a.TilemapLayer.prototype._renderWebGL = function (t) {
    if (this.fixedToCamera) {
      this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x;
      this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y;
    }
    this._scrollX = this.game.camera.view.x * this.scrollFactorX / this.scale.x;
    this._scrollY = this.game.camera.view.y * this.scrollFactorY / this.scale.y;
    this.render();
    PIXI.Sprite.prototype._renderWebGL.call(this, t);
  };
  a.TilemapLayer.prototype.destroy = function () {
    PIXI.CanvasPool.remove(this);
    a.Component.Destroy.prototype.destroy.call(this);
  };
  a.TilemapLayer.prototype.resize = function (t, e) {
    this.canvas.width = t;
    this.canvas.height = e;
    this.texture.frame.resize(t, e);
    this.texture.width = t;
    this.texture.height = e;
    this.texture.crop.width = t;
    this.texture.crop.height = e;
    this.texture.baseTexture.width = t;
    this.texture.baseTexture.height = e;
    this.texture.baseTexture.dirty();
    this.texture.requiresUpdate = true;
    this.texture._updateUvs();
    this.dirty = true;
  };
  a.TilemapLayer.prototype.resizeWorld = function () {
    this.game.world.setBounds(0, 0, this.layer.widthInPixels * this.scale.x, this.layer.heightInPixels * this.scale.y);
  };
  a.TilemapLayer.prototype._fixX = function (t) {
    if (this.scrollFactorX === 1 || this.scrollFactorX === 0 && this.position.x === 0) {
      return t;
    } else if (this.scrollFactorX === 0 && this.position.x !== 0) {
      return t - this.position.x;
    } else {
      return this._scrollX + (t - this._scrollX / this.scrollFactorX);
    }
  };
  a.TilemapLayer.prototype._unfixX = function (t) {
    if (this.scrollFactorX === 1) {
      return t;
    } else {
      return this._scrollX / this.scrollFactorX + (t - this._scrollX);
    }
  };
  a.TilemapLayer.prototype._fixY = function (t) {
    if (this.scrollFactorY === 1 || this.scrollFactorY === 0 && this.position.y === 0) {
      return t;
    } else if (this.scrollFactorY === 0 && this.position.y !== 0) {
      return t - this.position.y;
    } else {
      return this._scrollY + (t - this._scrollY / this.scrollFactorY);
    }
  };
  a.TilemapLayer.prototype._unfixY = function (t) {
    if (this.scrollFactorY === 1) {
      return t;
    } else {
      return this._scrollY / this.scrollFactorY + (t - this._scrollY);
    }
  };
  a.TilemapLayer.prototype.getTileX = function (t) {
    return Math.floor(this._fixX(t) / this._mc.tileWidth);
  };
  a.TilemapLayer.prototype.getTileY = function (t) {
    return Math.floor(this._fixY(t) / this._mc.tileHeight);
  };
  a.TilemapLayer.prototype.getTileXY = function (t, e, i) {
    i.x = this.getTileX(t);
    i.y = this.getTileY(e);
    return i;
  };
  a.TilemapLayer.prototype.getRayCastTiles = function (t, e, i, s) {
    e ||= this.rayStepRate;
    if (i === undefined) {
      i = false;
    }
    if (s === undefined) {
      s = false;
    }
    var n = this.getTiles(t.x, t.y, t.width, t.height, i, s);
    if (n.length === 0) {
      return [];
    }
    var a = t.coordinatesOnLine(e);
    var o = [];
    for (var r = 0; r < n.length; r++) {
      for (var h = 0; h < a.length; h++) {
        var l = n[r];
        var c = a[h];
        if (l.containsPoint(c[0], c[1])) {
          o.push(l);
          break;
        }
      }
    }
    return o;
  };
  a.TilemapLayer.prototype.getTiles = function (t, e, i, s, n = false, a = false) {
    var o = !n && !a;
    t = this._fixX(t);
    e = this._fixY(e);
    var r = Math.floor(t / (this._mc.cw * this.scale.x));
    var h = Math.floor(e / (this._mc.ch * this.scale.y));
    var l = Math.ceil((t + i) / (this._mc.cw * this.scale.x)) - r;
    var c = Math.ceil((e + s) / (this._mc.ch * this.scale.y)) - h;
    while (this._results.length) {
      this._results.pop();
    }
    for (var u = h; u < h + c; u++) {
      for (var d = r; d < r + l; d++) {
        var p = this.layer.data[u];
        if (p && p[d] && (o || p[d].isInteresting(n, a))) {
          this._results.push(p[d]);
        }
      }
    }
    return this._results.slice();
  };
  a.TilemapLayer.prototype.resolveTileset = function (t) {
    var e = this._mc.tilesets;
    if (t < 2000) {
      while (e.length < t) {
        e.push(undefined);
      }
    }
    var i = this.map.tiles[t] && this.map.tiles[t][2];
    if (i !== null) {
      var s = this.map.tilesets[i];
      if (s && s.containsTileIndex(t)) {
        return e[t] = s;
      }
    }
    return e[t] = null;
  };
  a.TilemapLayer.prototype.resetTilesetCache = function () {
    for (var t = this._mc.tilesets; t.length;) {
      t.pop();
    }
  };
  a.TilemapLayer.prototype.setScale = function (t, e) {
    t = t || 1;
    e = e || t;
    for (var i = 0; i < this.layer.data.length; i++) {
      for (var s = this.layer.data[i], n = 0; n < s.length; n++) {
        var a = s[n];
        a.width = this.map.tileWidth * t;
        a.height = this.map.tileHeight * e;
        a.worldX = a.x * a.width;
        a.worldY = a.y * a.height;
      }
    }
    this.scale.setTo(t, e);
  };
  a.TilemapLayer.prototype.shiftCanvas = function (t, e, i) {
    var s = t.canvas;
    var n = s.width - Math.abs(e);
    var a = s.height - Math.abs(i);
    var o = 0;
    var r = 0;
    var h = e;
    var l = i;
    if (e < 0) {
      o = -e;
      h = 0;
    }
    if (i < 0) {
      r = -i;
      l = 0;
    }
    var c = this.renderSettings.copyCanvas;
    if (c) {
      if (c.width < n || c.height < a) {
        c.width = n;
        c.height = a;
      }
      var u = c.getContext("2d");
      u.clearRect(0, 0, n, a);
      u.drawImage(s, o, r, n, a, 0, 0, n, a);
      t.clearRect(h, l, n, a);
      t.drawImage(c, 0, 0, n, a, h, l, n, a);
    } else {
      t.save();
      t.globalCompositeOperation = "copy";
      t.drawImage(s, o, r, n, a, h, l, n, a);
      t.restore();
    }
  };
  a.TilemapLayer.prototype.renderRegion = function (t, e, i, s, n, a) {
    var o = this.context;
    var r = this.layer.width;
    var h = this.layer.height;
    var l = this._mc.tileWidth;
    var c = this._mc.tileHeight;
    var u = this._mc.tilesets;
    var d = NaN;
    if (!this._wrap) {
      if (i <= n) {
        i = Math.max(0, i);
        n = Math.min(r - 1, n);
      }
      if (s <= a) {
        s = Math.max(0, s);
        a = Math.min(h - 1, a);
      }
    }
    var p = i * l - t;
    var f = s * c - e;
    var g = (i + r * 1048576) % r;
    var m = (s + h * 1048576) % h;
    var y;
    var v;
    var b;
    var _;
    var x;
    var w;
    _ = m;
    w = a - s;
    v = f;
    for (; w >= 0; _++, w--, v += c) {
      if (_ >= h) {
        _ -= h;
      }
      var P = this.layer.data[_];
      b = g;
      x = n - i;
      y = p;
      for (; x >= 0; b++, x--, y += l) {
        if (b >= r) {
          b -= r;
        }
        var T = P[b];
        if (T && !(T.index < 0)) {
          var S = T.index;
          var C = u[S];
          if (C === undefined) {
            C = this.resolveTileset(S);
          }
          if (T.alpha !== d && !this.debug) {
            o.globalAlpha = T.alpha;
            d = T.alpha;
          }
          if (C) {
            if (T.rotation || T.flipped) {
              o.save();
              o.translate(y + T.centerX, v + T.centerY);
              o.rotate(T.rotation);
              if (T.flipped) {
                o.scale(-1, 1);
              }
              C.draw(o, -T.centerX, -T.centerY, S);
              o.restore();
            } else {
              C.draw(o, y, v, S);
            }
          } else if (this.debugSettings.missingImageFill) {
            o.fillStyle = this.debugSettings.missingImageFill;
            o.fillRect(y, v, l, c);
          }
          if (T.debug && this.debugSettings.debuggedTileOverfill) {
            o.fillStyle = this.debugSettings.debuggedTileOverfill;
            o.fillRect(y, v, l, c);
          }
        }
      }
    }
  };
  a.TilemapLayer.prototype.renderDeltaScroll = function (t, e) {
    var i = this._mc.scrollX;
    var s = this._mc.scrollY;
    var n = this.canvas.width;
    var a = this.canvas.height;
    var o = this._mc.tileWidth;
    var r = this._mc.tileHeight;
    var h = 0;
    var l = -o;
    var c = 0;
    var u = -r;
    if (t < 0) {
      h = n + t;
      l = n - 1;
    } else if (t > 0) {
      l = t;
    }
    if (e < 0) {
      c = a + e;
      u = a - 1;
    } else if (e > 0) {
      u = e;
    }
    this.shiftCanvas(this.context, t, e);
    h = Math.floor((h + i) / o);
    l = Math.floor((l + i) / o);
    c = Math.floor((c + s) / r);
    u = Math.floor((u + s) / r);
    if (h <= l) {
      this.context.clearRect(h * o - i, 0, (l - h + 1) * o, a);
      var d = Math.floor((0 + s) / r);
      var p = Math.floor((a - 1 + s) / r);
      this.renderRegion(i, s, h, d, l, p);
    }
    if (c <= u) {
      this.context.clearRect(0, c * r - s, n, (u - c + 1) * r);
      var f = Math.floor((0 + i) / o);
      var g = Math.floor((n - 1 + i) / o);
      this.renderRegion(i, s, f, c, g, u);
    }
  };
  a.TilemapLayer.prototype.renderFull = function () {
    var t = this._mc.scrollX;
    var e = this._mc.scrollY;
    var i = this.canvas.width;
    var s = this.canvas.height;
    var n = this._mc.tileWidth;
    var a = this._mc.tileHeight;
    var o = Math.floor(t / n);
    var r = Math.floor((i - 1 + t) / n);
    var h = Math.floor(e / a);
    var l = Math.floor((s - 1 + e) / a);
    this.context.clearRect(0, 0, i, s);
    this.renderRegion(t, e, o, h, r, l);
  };
  a.TilemapLayer.prototype.render = function () {
    var t = false;
    if (this.visible) {
      if (this.dirty || this.layer.dirty) {
        this.layer.dirty = false;
        t = true;
      }
      var e = this.canvas.width;
      var i = this.canvas.height;
      var s = this._scrollX | 0;
      var n = this._scrollY | 0;
      var a = this._mc;
      var o = a.scrollX - s;
      var r = a.scrollY - n;
      if (t || o !== 0 || r !== 0 || a.renderWidth !== e || a.renderHeight !== i) {
        this.context.save();
        a.scrollX = s;
        a.scrollY = n;
        if (a.renderWidth !== e || a.renderHeight !== i) {
          a.renderWidth = e;
          a.renderHeight = i;
        }
        if (this.debug) {
          this.context.globalAlpha = this.debugSettings.debugAlpha;
          if (this.debugSettings.forceFullRedraw) {
            t = true;
          }
        }
        if (!t && this.renderSettings.enableScrollDelta && Math.abs(o) + Math.abs(r) < Math.min(e, i)) {
          this.renderDeltaScroll(o, r);
        } else {
          this.renderFull();
        }
        if (this.debug) {
          this.context.globalAlpha = 1;
          this.renderDebug();
        }
        this.texture.baseTexture.dirty();
        this.dirty = false;
        this.context.restore();
        return true;
      }
    }
  };
  a.TilemapLayer.prototype.renderDebug = function () {
    var t = this._mc.scrollX;
    var e = this._mc.scrollY;
    var i = this.context;
    var s = this.canvas.width;
    var n = this.canvas.height;
    var a = this.layer.width;
    var o = this.layer.height;
    var r = this._mc.tileWidth;
    var h = this._mc.tileHeight;
    var l = Math.floor(t / r);
    var c = Math.floor((s - 1 + t) / r);
    var u = Math.floor(e / h);
    var d = Math.floor((n - 1 + e) / h);
    var p = l * r - t;
    var f = u * h - e;
    var g = (l + a * 1048576) % a;
    var m = (u + o * 1048576) % o;
    var y;
    var v;
    var b;
    var _;
    var x;
    var w;
    i.strokeStyle = this.debugSettings.facingEdgeStroke;
    _ = m;
    w = d - u;
    v = f;
    for (; w >= 0; _++, w--, v += h) {
      if (_ >= o) {
        _ -= o;
      }
      var P = this.layer.data[_];
      b = g;
      x = c - l;
      y = p;
      for (; x >= 0; b++, x--, y += r) {
        if (b >= a) {
          b -= a;
        }
        var T = P[b];
        if (!!T && !(T.index < 0) && !!T.collides) {
          if (this.debugSettings.collidingTileOverfill) {
            i.fillStyle = this.debugSettings.collidingTileOverfill;
            i.fillRect(y, v, this._mc.cw, this._mc.ch);
          }
          if (this.debugSettings.facingEdgeStroke) {
            i.beginPath();
            if (T.faceTop) {
              i.moveTo(y, v);
              i.lineTo(y + this._mc.cw, v);
            }
            if (T.faceBottom) {
              i.moveTo(y, v + this._mc.ch);
              i.lineTo(y + this._mc.cw, v + this._mc.ch);
            }
            if (T.faceLeft) {
              i.moveTo(y, v);
              i.lineTo(y, v + this._mc.ch);
            }
            if (T.faceRight) {
              i.moveTo(y + this._mc.cw, v);
              i.lineTo(y + this._mc.cw, v + this._mc.ch);
            }
            i.closePath();
            i.stroke();
          }
        }
      }
    }
  };
  Object.defineProperty(a.TilemapLayer.prototype, "wrap", {
    get: function () {
      return this._wrap;
    },
    set: function (t) {
      this._wrap = t;
      this.dirty = true;
    }
  });
  Object.defineProperty(a.TilemapLayer.prototype, "scrollX", {
    get: function () {
      return this._scrollX;
    },
    set: function (t) {
      this._scrollX = t;
    }
  });
  Object.defineProperty(a.TilemapLayer.prototype, "scrollY", {
    get: function () {
      return this._scrollY;
    },
    set: function (t) {
      this._scrollY = t;
    }
  });
  Object.defineProperty(a.TilemapLayer.prototype, "collisionWidth", {
    get: function () {
      return this._mc.cw;
    },
    set: function (t) {
      this._mc.cw = t | 0;
      this.dirty = true;
    }
  });
  Object.defineProperty(a.TilemapLayer.prototype, "collisionHeight", {
    get: function () {
      return this._mc.ch;
    },
    set: function (t) {
      this._mc.ch = t | 0;
      this.dirty = true;
    }
  });
  a.TilemapParser = {
    INSERT_NULL: false,
    parse: function (t, e, i = 32, s = 32, n = 10, o = 10) {
      if (e === undefined) {
        return this.getEmptyData();
      }
      if (e === null) {
        return this.getEmptyData(i, s, n, o);
      }
      var r = t.cache.getTilemapData(e);
      if (r) {
        if (r.format === a.Tilemap.CSV) {
          return this.parseCSV(e, r.data, i, s);
        }
        if (!r.format || r.format === a.Tilemap.TILED_JSON) {
          return this.parseTiledJSON(r.data);
        }
      }
    },
    parseCSV: function (t, e, i, s) {
      var n = this.getEmptyData();
      e = e.trim();
      var o = [];
      for (var r = e.split("\n"), h = r.length, l = 0, c = 0; c < r.length; c++) {
        o[c] = [];
        for (var u = r[c].split(","), d = 0; d < u.length; d++) {
          o[c][d] = new a.Tile(n.layers[0], parseInt(u[d], 10), d, c, i, s);
        }
        if (l === 0) {
          l = u.length;
        }
      }
      n.format = a.Tilemap.CSV;
      n.name = t;
      n.width = l;
      n.height = h;
      n.tileWidth = i;
      n.tileHeight = s;
      n.widthInPixels = l * i;
      n.heightInPixels = h * s;
      n.layers[0].width = l;
      n.layers[0].height = h;
      n.layers[0].widthInPixels = n.widthInPixels;
      n.layers[0].heightInPixels = n.heightInPixels;
      n.layers[0].data = o;
      return n;
    },
    getEmptyData: function (t, e, i, s) {
      return {
        width: i !== undefined && i !== null ? i : 0,
        height: s !== undefined && s !== null ? s : 0,
        tileWidth: t !== undefined && t !== null ? t : 0,
        tileHeight: e !== undefined && e !== null ? e : 0,
        orientation: "orthogonal",
        version: "1",
        properties: {},
        widthInPixels: 0,
        heightInPixels: 0,
        layers: [{
          name: "layer",
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          widthInPixels: 0,
          heightInPixels: 0,
          alpha: 1,
          visible: true,
          properties: {},
          indexes: [],
          callbacks: [],
          bodies: [],
          data: []
        }],
        images: [],
        objects: {},
        collision: {},
        tilesets: [],
        tiles: []
      };
    },
    parseTiledJSON: function (t) {
      function e(t, e) {
        var i = {};
        for (var s in e) {
          var n = e[s];
          if (t[n] !== undefined) {
            i[n] = t[n];
          }
        }
        return i;
      }
      if (t.orientation !== "orthogonal") {
        return null;
      }
      var i = {
        width: t.width,
        height: t.height,
        tileWidth: t.tilewidth,
        tileHeight: t.tileheight,
        orientation: t.orientation,
        format: a.Tilemap.TILED_JSON,
        version: t.version,
        properties: t.properties,
        widthInPixels: t.width * t.tilewidth,
        heightInPixels: t.height * t.tileheight
      };
      var s = [];
      for (var n = 0; n < t.layers.length; n++) {
        if (t.layers[n].type === "tilelayer") {
          var o = t.layers[n];
          if (!o.compression && o.encoding && o.encoding === "base64") {
            var r = window.atob(o.data);
            for (var h = r.length, l = new Array(h), c = 0; c < h; c += 4) {
              l[c / 4] = (r.charCodeAt(c) | r.charCodeAt(c + 1) << 8 | r.charCodeAt(c + 2) << 16 | r.charCodeAt(c + 3) << 24) >>> 0;
            }
            o.data = l;
            delete o.encoding;
          } else if (o.compression) {
            continue;
          }
          var u = {
            name: o.name,
            x: o.x,
            y: o.y,
            width: o.width,
            height: o.height,
            widthInPixels: o.width * t.tilewidth,
            heightInPixels: o.height * t.tileheight,
            alpha: o.opacity,
            visible: o.visible,
            properties: {},
            indexes: [],
            callbacks: [],
            bodies: []
          };
          if (o.properties) {
            u.properties = o.properties;
          }
          var d = 0;
          var p = [];
          var f = [];
          var g;
          var m;
          var y;
          var v;
          for (var b = 0, h = o.data.length; b < h; b++) {
            g = 0;
            m = false;
            v = o.data[b];
            y = 0;
            if (v > 536870912) {
              if (v > 2147483648) {
                v -= 2147483648;
                y += 4;
              }
              if (v > 1073741824) {
                v -= 1073741824;
                y += 2;
              }
              if (v > 536870912) {
                v -= 536870912;
                y += 1;
              }
              switch (y) {
                case 5:
                  g = Math.PI / 2;
                  break;
                case 6:
                  g = Math.PI;
                  break;
                case 3:
                  g = Math.PI * 3 / 2;
                  break;
                case 4:
                  g = 0;
                  m = true;
                  break;
                case 7:
                  g = Math.PI / 2;
                  m = true;
                  break;
                case 2:
                  g = Math.PI;
                  m = true;
                  break;
                case 1:
                  g = Math.PI * 3 / 2;
                  m = true;
              }
            }
            if (v > 0) {
              var _ = new a.Tile(u, v, d, f.length, t.tilewidth, t.tileheight);
              _.rotation = g;
              _.flipped = m;
              if (y !== 0) {
                _.flippedVal = y;
              }
              p.push(_);
            } else if (a.TilemapParser.INSERT_NULL) {
              p.push(null);
            } else {
              p.push(new a.Tile(u, -1, d, f.length, t.tilewidth, t.tileheight));
            }
            d++;
            if (d === o.width) {
              f.push(p);
              d = 0;
              p = [];
            }
          }
          u.data = f;
          s.push(u);
        }
      }
      i.layers = s;
      var x = [];
      for (var n = 0; n < t.layers.length; n++) {
        if (t.layers[n].type === "imagelayer") {
          var w = t.layers[n];
          var P = {
            name: w.name,
            image: w.image,
            x: w.x,
            y: w.y,
            alpha: w.opacity,
            visible: w.visible,
            properties: {}
          };
          if (w.properties) {
            P.properties = w.properties;
          }
          x.push(P);
        }
      }
      i.images = x;
      var T = [];
      var S = [];
      var C = null;
      for (var n = 0; n < t.tilesets.length; n++) {
        var A = t.tilesets[n];
        if (A.image) {
          var E = new a.Tileset(A.name, A.firstgid, A.tilewidth, A.tileheight, A.margin, A.spacing, A.properties);
          if (A.tileproperties) {
            E.tileProperties = A.tileproperties;
          }
          E.updateTileData(A.imagewidth, A.imageheight);
          T.push(E);
        } else {
          var I = new a.ImageCollection(A.name, A.firstgid, A.tilewidth, A.tileheight, A.margin, A.spacing, A.properties);
          for (var B in A.tiles) {
            var P = A.tiles[B].image;
            var v = A.firstgid + parseInt(B, 10);
            I.addImage(v, P);
          }
          S.push(I);
        }
        if (C) {
          C.lastgid = A.firstgid - 1;
        }
        C = A;
      }
      i.tilesets = T;
      i.imagecollections = S;
      var M = {};
      var k = {};
      for (var n = 0; n < t.layers.length; n++) {
        if (t.layers[n].type === "objectgroup") {
          var O = t.layers[n];
          M[O.name] = [];
          k[O.name] = [];
          for (var D = 0, h = O.objects.length; D < h; D++) {
            if (O.objects[D].gid) {
              var L = {
                gid: O.objects[D].gid,
                name: O.objects[D].name,
                type: O.objects[D].hasOwnProperty("type") ? O.objects[D].type : "",
                x: O.objects[D].x,
                y: O.objects[D].y,
                visible: O.objects[D].visible,
                properties: O.objects[D].properties
              };
              if (O.objects[D].rotation) {
                L.rotation = O.objects[D].rotation;
              }
              M[O.name].push(L);
            } else if (O.objects[D].polyline) {
              var L = {
                name: O.objects[D].name,
                type: O.objects[D].type,
                x: O.objects[D].x,
                y: O.objects[D].y,
                width: O.objects[D].width,
                height: O.objects[D].height,
                visible: O.objects[D].visible,
                properties: O.objects[D].properties
              };
              if (O.objects[D].rotation) {
                L.rotation = O.objects[D].rotation;
              }
              L.polyline = [];
              for (var R = 0; R < O.objects[D].polyline.length; R++) {
                L.polyline.push([O.objects[D].polyline[R].x, O.objects[D].polyline[R].y]);
              }
              k[O.name].push(L);
              M[O.name].push(L);
            } else if (O.objects[D].polygon) {
              var L = e(O.objects[D], ["name", "type", "x", "y", "visible", "rotation", "properties"]);
              L.polygon = [];
              for (var R = 0; R < O.objects[D].polygon.length; R++) {
                L.polygon.push([O.objects[D].polygon[R].x, O.objects[D].polygon[R].y]);
              }
              M[O.name].push(L);
            } else if (O.objects[D].ellipse) {
              var L = e(O.objects[D], ["name", "type", "ellipse", "x", "y", "width", "height", "visible", "rotation", "properties"]);
              M[O.name].push(L);
            } else {
              var L = e(O.objects[D], ["name", "type", "x", "y", "width", "height", "visible", "rotation", "properties"]);
              L.rectangle = true;
              M[O.name].push(L);
            }
          }
        }
      }
      i.objects = M;
      i.collision = k;
      i.tiles = [];
      for (var n = 0; n < i.tilesets.length; n++) {
        for (var A = i.tilesets[n], d = A.tileMargin, F = A.tileMargin, G = 0, N = 0, U = 0, b = A.firstgid; b < A.firstgid + A.total && (i.tiles[b] = [d, F, n], d += A.tileWidth + A.tileSpacing, ++G !== A.total) && (++N !== A.columns || (d = A.tileMargin, F += A.tileHeight + A.tileSpacing, N = 0, ++U !== A.rows)); b++);
      }
      var u;
      var _;
      var j;
      var A;
      for (var n = 0; n < i.layers.length; n++) {
        u = i.layers[n];
        A = null;
        for (var c = 0; c < u.data.length; c++) {
          p = u.data[c];
          for (var X = 0; X < p.length; X++) {
            if ((_ = p[X]) !== null && !(_.index < 0)) {
              j = i.tiles[_.index][2];
              A = i.tilesets[j];
              if (A.tileProperties && A.tileProperties[_.index - A.firstgid]) {
                _.properties = a.Utils.mixin(A.tileProperties[_.index - A.firstgid], _.properties);
              }
            }
          }
        }
      }
      return i;
    }
  };
  a.Tileset = function (t, e, i, s, n, a, o) {
    if (i === undefined || i <= 0) {
      i = 32;
    }
    if (s === undefined || s <= 0) {
      s = 32;
    }
    if (n === undefined) {
      n = 0;
    }
    if (a === undefined) {
      a = 0;
    }
    this.name = t;
    this.firstgid = e | 0;
    this.tileWidth = i | 0;
    this.tileHeight = s | 0;
    this.tileMargin = n | 0;
    this.tileSpacing = a | 0;
    this.properties = o || {};
    this.image = null;
    this.rows = 0;
    this.columns = 0;
    this.total = 0;
    this.drawCoords = [];
  };
  a.Tileset.prototype = {
    draw: function (t, e, i, s) {
      var n = s - this.firstgid << 1;
      if (n >= 0 && n + 1 < this.drawCoords.length) {
        t.drawImage(this.image, this.drawCoords[n], this.drawCoords[n + 1], this.tileWidth, this.tileHeight, e, i, this.tileWidth, this.tileHeight);
      }
    },
    containsTileIndex: function (t) {
      return t >= this.firstgid && t < this.firstgid + this.total;
    },
    setImage: function (t) {
      this.image = t;
      this.updateTileData(t.width, t.height);
    },
    setSpacing: function (t, e) {
      this.tileMargin = t | 0;
      this.tileSpacing = e | 0;
      if (this.image) {
        this.updateTileData(this.image.width, this.image.height);
      }
    },
    updateTileData: function (t, e) {
      var i = (e - this.tileMargin * 2 + this.tileSpacing) / (this.tileHeight + this.tileSpacing);
      var s = (t - this.tileMargin * 2 + this.tileSpacing) / (this.tileWidth + this.tileSpacing);
      i = Math.floor(i);
      s = Math.floor(s);
      if (!this.rows || this.rows === i) {
        if (this.columns) {
          this.columns;
        }
      }
      this.rows = i;
      this.columns = s;
      this.total = i * s;
      this.drawCoords.length = 0;
      var n = this.tileMargin;
      var a = this.tileMargin;
      for (var o = 0; o < this.rows; o++) {
        for (var r = 0; r < this.columns; r++) {
          this.drawCoords.push(n);
          this.drawCoords.push(a);
          n += this.tileWidth + this.tileSpacing;
        }
        n = this.tileMargin;
        a += this.tileHeight + this.tileSpacing;
      }
    }
  };
  a.Tileset.prototype.constructor = a.Tileset;
  a.Particle = function (t, e, i, s, n) {
    a.Sprite.call(this, t, e, i, s, n);
    this.autoScale = false;
    this.scaleData = null;
    this._s = 0;
    this.autoAlpha = false;
    this.alphaData = null;
    this._a = 0;
  };
  a.Particle.prototype = Object.create(a.Sprite.prototype);
  a.Particle.prototype.constructor = a.Particle;
  a.Particle.prototype.update = function () {
    if (this.autoScale) {
      this._s--;
      if (this._s) {
        this.scale.set(this.scaleData[this._s].x, this.scaleData[this._s].y);
      } else {
        this.autoScale = false;
      }
    }
    if (this.autoAlpha) {
      this._a--;
      if (this._a) {
        this.alpha = this.alphaData[this._a].v;
      } else {
        this.autoAlpha = false;
      }
    }
  };
  a.Particle.prototype.onEmit = function () {};
  a.Particle.prototype.setAlphaData = function (t) {
    this.alphaData = t;
    this._a = t.length - 1;
    this.alpha = this.alphaData[this._a].v;
    this.autoAlpha = true;
  };
  a.Particle.prototype.setScaleData = function (t) {
    this.scaleData = t;
    this._s = t.length - 1;
    this.scale.set(this.scaleData[this._s].x, this.scaleData[this._s].y);
    this.autoScale = true;
  };
  a.Particle.prototype.reset = function (t, e, i) {
    a.Component.Reset.prototype.reset.call(this, t, e, i);
    this.alpha = 1;
    this.scale.set(1);
    this.autoScale = false;
    this.autoAlpha = false;
    return this;
  };
  a.Particles = function (t) {
    this.game = t;
    this.emitters = {};
    this.ID = 0;
  };
  a.Particles.prototype = {
    add: function (t) {
      this.emitters[t.name] = t;
      return t;
    },
    remove: function (t) {
      delete this.emitters[t.name];
    },
    update: function () {
      for (var t in this.emitters) {
        if (this.emitters[t].exists) {
          this.emitters[t].update();
        }
      }
    }
  };
  a.Particles.prototype.constructor = a.Particles;
  a.Particles.Arcade = {};
  a.Particles.Arcade.Emitter = function (t, e, i, s) {
    this.maxParticles = s || 50;
    a.Group.call(this, t);
    this.name = "emitter" + this.game.particles.ID++;
    this.type = a.EMITTER;
    this.physicsType = a.GROUP;
    this.area = new a.Rectangle(e, i, 1, 1);
    this.minParticleSpeed = new a.Point(-100, -100);
    this.maxParticleSpeed = new a.Point(100, 100);
    this.minParticleScale = 1;
    this.maxParticleScale = 1;
    this.scaleData = null;
    this.minRotation = -360;
    this.maxRotation = 360;
    this.minParticleAlpha = 1;
    this.maxParticleAlpha = 1;
    this.alphaData = null;
    this.gravity = 100;
    this.particleClass = a.Particle;
    this.particleDrag = new a.Point();
    this.angularDrag = 0;
    this.frequency = 100;
    this.lifespan = 2000;
    this.bounce = new a.Point();
    this.on = false;
    this.particleAnchor = new a.Point(0.5, 0.5);
    this.blendMode = a.blendModes.NORMAL;
    this.emitX = e;
    this.emitY = i;
    this.autoScale = false;
    this.autoAlpha = false;
    this.particleBringToTop = false;
    this.particleSendToBack = false;
    this._minParticleScale = new a.Point(1, 1);
    this._maxParticleScale = new a.Point(1, 1);
    this._quantity = 0;
    this._timer = 0;
    this._counter = 0;
    this._flowQuantity = 0;
    this._flowTotal = 0;
    this._explode = true;
    this._frames = null;
  };
  a.Particles.Arcade.Emitter.prototype = Object.create(a.Group.prototype);
  a.Particles.Arcade.Emitter.prototype.constructor = a.Particles.Arcade.Emitter;
  a.Particles.Arcade.Emitter.prototype.update = function () {
    if (this.on && this.game.time.time >= this._timer) {
      this._timer = this.game.time.time + this.frequency * this.game.time.slowMotion;
      if (this._flowTotal !== 0) {
        if (this._flowQuantity > 0) {
          for (var t = 0; t < this._flowQuantity; t++) {
            if (this.emitParticle() && (this._counter++, this._flowTotal !== -1 && this._counter >= this._flowTotal)) {
              this.on = false;
              break;
            }
          }
        } else if (this.emitParticle()) {
          this._counter++;
          if (this._flowTotal !== -1 && this._counter >= this._flowTotal) {
            this.on = false;
          }
        }
      } else if (this.emitParticle()) {
        this._counter++;
        if (this._quantity > 0 && this._counter >= this._quantity) {
          this.on = false;
        }
      }
    }
    for (var t = this.children.length; t--;) {
      if (this.children[t].exists) {
        this.children[t].update();
      }
    }
  };
  a.Particles.Arcade.Emitter.prototype.makeParticles = function (t, e = 0, i = this.maxParticles, s = false, n = false) {
    var a;
    var o = 0;
    var r = t;
    var h = e;
    this._frames = e;
    if (i > this.maxParticles) {
      this.maxParticles = i;
    }
    while (o < i) {
      if (Array.isArray(t)) {
        r = this.game.rnd.pick(t);
      }
      if (Array.isArray(e)) {
        h = this.game.rnd.pick(e);
      }
      a = new this.particleClass(this.game, 0, 0, r, h);
      this.game.physics.arcade.enable(a, false);
      if (s) {
        a.body.checkCollision.any = true;
        a.body.checkCollision.none = false;
      } else {
        a.body.checkCollision.none = true;
      }
      a.body.collideWorldBounds = n;
      a.body.skipQuadTree = true;
      a.exists = false;
      a.visible = false;
      a.anchor.copyFrom(this.particleAnchor);
      this.add(a);
      o++;
    }
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.kill = function () {
    this.on = false;
    this.alive = false;
    this.exists = false;
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.revive = function () {
    this.alive = true;
    this.exists = true;
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.explode = function (t, e) {
    this._flowTotal = 0;
    this.start(true, t, 0, e, false);
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.flow = function (t, e, i, s, n) {
    if (i === undefined || i === 0) {
      i = 1;
    }
    if (s === undefined) {
      s = -1;
    }
    if (n === undefined) {
      n = true;
    }
    if (i > this.maxParticles) {
      i = this.maxParticles;
    }
    this._counter = 0;
    this._flowQuantity = i;
    this._flowTotal = s;
    if (n) {
      this.start(true, t, e, i);
      this._counter += i;
      this.on = true;
      this._timer = this.game.time.time + e * this.game.time.slowMotion;
    } else {
      this.start(false, t, e, i);
    }
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.start = function (t = true, e = 0, i, s, n) {
    if (i === undefined || i === null) {
      i = 250;
    }
    if (s === undefined) {
      s = 0;
    }
    if (n === undefined) {
      n = false;
    }
    if (s > this.maxParticles) {
      s = this.maxParticles;
    }
    this.revive();
    this.visible = true;
    this.lifespan = e;
    this.frequency = i;
    if (t || n) {
      for (var a = 0; a < s; a++) {
        this.emitParticle();
      }
    } else {
      this.on = true;
      this._quantity = s;
      this._counter = 0;
      this._timer = this.game.time.time + i * this.game.time.slowMotion;
    }
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.emitParticle = function (t = null, e = null, i, s) {
    var n = this.getFirstExists(false);
    if (n === null) {
      return false;
    }
    var a = this.game.rnd;
    if (i !== undefined && s !== undefined) {
      n.loadTexture(i, s);
    } else if (i !== undefined) {
      n.loadTexture(i);
    }
    var o = this.emitX;
    var r = this.emitY;
    if (t !== null) {
      o = t;
    } else if (this.width > 1) {
      o = a.between(this.left, this.right);
    }
    if (e !== null) {
      r = e;
    } else if (this.height > 1) {
      r = a.between(this.top, this.bottom);
    }
    n.reset(o, r);
    n.angle = 0;
    n.lifespan = this.lifespan;
    if (this.particleBringToTop) {
      this.bringToTop(n);
    } else if (this.particleSendToBack) {
      this.sendToBack(n);
    }
    if (this.autoScale) {
      n.setScaleData(this.scaleData);
    } else if (this.minParticleScale !== 1 || this.maxParticleScale !== 1) {
      n.scale.set(a.realInRange(this.minParticleScale, this.maxParticleScale));
    } else if (this._minParticleScale.x !== this._maxParticleScale.x || this._minParticleScale.y !== this._maxParticleScale.y) {
      n.scale.set(a.realInRange(this._minParticleScale.x, this._maxParticleScale.x), a.realInRange(this._minParticleScale.y, this._maxParticleScale.y));
    }
    if (s === undefined) {
      if (Array.isArray(this._frames)) {
        n.frame = this.game.rnd.pick(this._frames);
      } else {
        n.frame = this._frames;
      }
    }
    if (this.autoAlpha) {
      n.setAlphaData(this.alphaData);
    } else {
      n.alpha = a.realInRange(this.minParticleAlpha, this.maxParticleAlpha);
    }
    n.blendMode = this.blendMode;
    var h = n.body;
    h.updateBounds();
    h.bounce.copyFrom(this.bounce);
    h.drag.copyFrom(this.particleDrag);
    h.velocity.x = a.between(this.minParticleSpeed.x, this.maxParticleSpeed.x);
    h.velocity.y = a.between(this.minParticleSpeed.y, this.maxParticleSpeed.y);
    h.angularVelocity = a.between(this.minRotation, this.maxRotation);
    h.gravity.y = this.gravity;
    h.angularDrag = this.angularDrag;
    n.onEmit();
    return true;
  };
  a.Particles.Arcade.Emitter.prototype.destroy = function () {
    this.game.particles.remove(this);
    a.Group.prototype.destroy.call(this, true, false);
  };
  a.Particles.Arcade.Emitter.prototype.setSize = function (t, e) {
    this.area.width = t;
    this.area.height = e;
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.setXSpeed = function (t, e) {
    t = t || 0;
    e = e || 0;
    this.minParticleSpeed.x = t;
    this.maxParticleSpeed.x = e;
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.setYSpeed = function (t, e) {
    t = t || 0;
    e = e || 0;
    this.minParticleSpeed.y = t;
    this.maxParticleSpeed.y = e;
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.setRotation = function (t, e) {
    t = t || 0;
    e = e || 0;
    this.minRotation = t;
    this.maxRotation = e;
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.setAlpha = function (t = 1, e = 1, i = 0, s = a.Easing.Linear.None, n = false) {
    this.minParticleAlpha = t;
    this.maxParticleAlpha = e;
    this.autoAlpha = false;
    if (i > 0 && t !== e) {
      var o = {
        v: t
      };
      var r = this.game.make.tween(o).to({
        v: e
      }, i, s);
      r.yoyo(n);
      this.alphaData = r.generateData(60);
      this.alphaData.reverse();
      this.autoAlpha = true;
    }
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.setScale = function (t = 1, e = 1, i = 1, s = 1, n = 0, o = a.Easing.Linear.None, r = false) {
    this.minParticleScale = 1;
    this.maxParticleScale = 1;
    this._minParticleScale.set(t, i);
    this._maxParticleScale.set(e, s);
    this.autoScale = false;
    if (n > 0 && (t !== e || i !== s)) {
      var h = {
        x: t,
        y: i
      };
      var l = this.game.make.tween(h).to({
        x: e,
        y: s
      }, n, o);
      l.yoyo(r);
      this.scaleData = l.generateData(60);
      this.scaleData.reverse();
      this.autoScale = true;
    }
    return this;
  };
  a.Particles.Arcade.Emitter.prototype.at = function (t) {
    if (t.center) {
      this.emitX = t.center.x;
      this.emitY = t.center.y;
    } else {
      this.emitX = t.world.x + t.anchor.x * t.width;
      this.emitY = t.world.y + t.anchor.y * t.height;
    }
    return this;
  };
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "width", {
    get: function () {
      return this.area.width;
    },
    set: function (t) {
      this.area.width = t;
    }
  });
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "height", {
    get: function () {
      return this.area.height;
    },
    set: function (t) {
      this.area.height = t;
    }
  });
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "x", {
    get: function () {
      return this.emitX;
    },
    set: function (t) {
      this.emitX = t;
    }
  });
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "y", {
    get: function () {
      return this.emitY;
    },
    set: function (t) {
      this.emitY = t;
    }
  });
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "left", {
    get: function () {
      return Math.floor(this.x - this.area.width / 2);
    }
  });
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "right", {
    get: function () {
      return Math.floor(this.x + this.area.width / 2);
    }
  });
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "top", {
    get: function () {
      return Math.floor(this.y - this.area.height / 2);
    }
  });
  Object.defineProperty(a.Particles.Arcade.Emitter.prototype, "bottom", {
    get: function () {
      return Math.floor(this.y + this.area.height / 2);
    }
  });
  a.Weapon = function (t, e) {
    a.Plugin.call(this, t, e);
    this.bullets = null;
    this.autoExpandBulletsGroup = false;
    this.autofire = false;
    this.shots = 0;
    this.fireLimit = 0;
    this.fireRate = 100;
    this.fireRateVariance = 0;
    this.fireFrom = new a.Rectangle(0, 0, 1, 1);
    this.fireAngle = a.ANGLE_UP;
    this.bulletInheritSpriteSpeed = false;
    this.bulletAnimation = "";
    this.bulletFrameRandom = false;
    this.bulletFrameCycle = false;
    this.bulletWorldWrap = false;
    this.bulletWorldWrapPadding = 0;
    this.bulletAngleOffset = 0;
    this.bulletAngleVariance = 0;
    this.bulletSpeed = 200;
    this.bulletSpeedVariance = 0;
    this.bulletLifespan = 0;
    this.bulletKillDistance = 0;
    this.bulletGravity = new a.Point(0, 0);
    this.bulletRotateToVelocity = false;
    this.bulletKey = "";
    this.bulletFrame = "";
    this._bulletClass = a.Bullet;
    this._bulletCollideWorldBounds = false;
    this._bulletKillType = a.Weapon.KILL_WORLD_BOUNDS;
    this._data = {
      customBody: false,
      width: 0,
      height: 0,
      offsetX: 0,
      offsetY: 0
    };
    this.bounds = new a.Rectangle();
    this.bulletBounds = t.world.bounds;
    this.bulletFrames = [];
    this.bulletFrameIndex = 0;
    this.anims = {};
    this.onFire = new a.Signal();
    this.onKill = new a.Signal();
    this.onFireLimit = new a.Signal();
    this.trackedSprite = null;
    this.trackedPointer = null;
    this.trackRotation = false;
    this.trackOffset = new a.Point();
    this._nextFire = 0;
    this._rotatedPoint = new a.Point();
  };
  a.Weapon.prototype = Object.create(a.Plugin.prototype);
  a.Weapon.prototype.constructor = a.Weapon;
  a.Weapon.KILL_NEVER = 0;
  a.Weapon.KILL_LIFESPAN = 1;
  a.Weapon.KILL_DISTANCE = 2;
  a.Weapon.KILL_WEAPON_BOUNDS = 3;
  a.Weapon.KILL_CAMERA_BOUNDS = 4;
  a.Weapon.KILL_WORLD_BOUNDS = 5;
  a.Weapon.KILL_STATIC_BOUNDS = 6;
  a.Weapon.prototype.createBullets = function (t = 1, e, i, s = this.game.world) {
    if (!this.bullets) {
      this.bullets = this.game.add.physicsGroup(a.Physics.ARCADE, s);
      this.bullets.classType = this._bulletClass;
    }
    if (t !== 0) {
      if (t === -1) {
        this.autoExpandBulletsGroup = true;
        t = 1;
      }
      this.bullets.createMultiple(t, e, i);
      this.bullets.setAll("data.bulletManager", this);
      this.bulletKey = e;
      this.bulletFrame = i;
    }
    return this;
  };
  a.Weapon.prototype.forEach = function (t, e) {
    this.bullets.forEachExists(t, e, arguments);
    return this;
  };
  a.Weapon.prototype.pauseAll = function () {
    this.bullets.setAll("body.enable", false);
    return this;
  };
  a.Weapon.prototype.resumeAll = function () {
    this.bullets.setAll("body.enable", true);
    return this;
  };
  a.Weapon.prototype.killAll = function () {
    this.bullets.callAllExists("kill", true);
    this.bullets.setAll("body.enable", true);
    return this;
  };
  a.Weapon.prototype.resetShots = function (t) {
    this.shots = 0;
    if (t !== undefined) {
      this.fireLimit = t;
    }
    return this;
  };
  a.Weapon.prototype.destroy = function () {
    this.parent.remove(this, false);
    this.bullets.destroy();
    this.game = null;
    this.parent = null;
    this.active = false;
    this.visible = false;
  };
  a.Weapon.prototype.update = function () {
    if (this._bulletKillType === a.Weapon.KILL_WEAPON_BOUNDS) {
      if (this.trackedSprite) {
        this.trackedSprite.updateTransform();
        this.bounds.centerOn(this.trackedSprite.worldPosition.x, this.trackedSprite.worldPosition.y);
      } else if (this.trackedPointer) {
        this.bounds.centerOn(this.trackedPointer.worldX, this.trackedPointer.worldY);
      }
    }
    if (this.autofire) {
      this.fire();
    }
  };
  a.Weapon.prototype.trackSprite = function (t, e = 0, i = 0, s = false) {
    this.trackedPointer = null;
    this.trackedSprite = t;
    this.trackRotation = s;
    this.trackOffset.set(e, i);
    return this;
  };
  a.Weapon.prototype.trackPointer = function (t = this.game.input.activePointer, e = 0, i = 0) {
    this.trackedPointer = t;
    this.trackedSprite = null;
    this.trackRotation = false;
    this.trackOffset.set(e, i);
    return this;
  };
  a.Weapon.prototype.fire = function (t, e, i) {
    if (this.game.time.now < this._nextFire || this.fireLimit > 0 && this.shots === this.fireLimit) {
      return false;
    }
    var s = this.bulletSpeed;
    if (this.bulletSpeedVariance !== 0) {
      s += a.Math.between(-this.bulletSpeedVariance, this.bulletSpeedVariance);
    }
    if (t) {
      if (this.fireFrom.width > 1) {
        this.fireFrom.centerOn(t.x, t.y);
      } else {
        this.fireFrom.x = t.x;
        this.fireFrom.y = t.y;
      }
    } else if (this.trackedSprite) {
      if (this.trackRotation) {
        this._rotatedPoint.set(this.trackedSprite.world.x + this.trackOffset.x, this.trackedSprite.world.y + this.trackOffset.y);
        this._rotatedPoint.rotate(this.trackedSprite.world.x, this.trackedSprite.world.y, this.trackedSprite.rotation);
        if (this.fireFrom.width > 1) {
          this.fireFrom.centerOn(this._rotatedPoint.x, this._rotatedPoint.y);
        } else {
          this.fireFrom.x = this._rotatedPoint.x;
          this.fireFrom.y = this._rotatedPoint.y;
        }
      } else if (this.fireFrom.width > 1) {
        this.fireFrom.centerOn(this.trackedSprite.world.x + this.trackOffset.x, this.trackedSprite.world.y + this.trackOffset.y);
      } else {
        this.fireFrom.x = this.trackedSprite.world.x + this.trackOffset.x;
        this.fireFrom.y = this.trackedSprite.world.y + this.trackOffset.y;
      }
      if (this.bulletInheritSpriteSpeed) {
        s += this.trackedSprite.body.speed;
      }
    } else if (this.trackedPointer) {
      if (this.fireFrom.width > 1) {
        this.fireFrom.centerOn(this.trackedPointer.world.x + this.trackOffset.x, this.trackedPointer.world.y + this.trackOffset.y);
      } else {
        this.fireFrom.x = this.trackedPointer.world.x + this.trackOffset.x;
        this.fireFrom.y = this.trackedPointer.world.y + this.trackOffset.y;
      }
    }
    var n = this.fireFrom.width > 1 ? this.fireFrom.randomX : this.fireFrom.x;
    var o = this.fireFrom.height > 1 ? this.fireFrom.randomY : this.fireFrom.y;
    var r = this.trackRotation ? this.trackedSprite.angle : this.fireAngle;
    if (e !== undefined && i !== undefined) {
      r = this.game.math.radToDeg(Math.atan2(i - o, e - n));
    }
    if (this.bulletAngleVariance !== 0) {
      r += a.Math.between(-this.bulletAngleVariance, this.bulletAngleVariance);
    }
    var h = 0;
    var l = 0;
    if (r === 0 || r === 180) {
      h = Math.cos(this.game.math.degToRad(r)) * s;
    } else if (r === 90 || r === 270) {
      l = Math.sin(this.game.math.degToRad(r)) * s;
    } else {
      h = Math.cos(this.game.math.degToRad(r)) * s;
      l = Math.sin(this.game.math.degToRad(r)) * s;
    }
    var c = null;
    if (this.autoExpandBulletsGroup) {
      c = this.bullets.getFirstExists(false, true, n, o, this.bulletKey, this.bulletFrame);
      c.data.bulletManager = this;
    } else {
      c = this.bullets.getFirstExists(false);
    }
    if (c) {
      c.reset(n, o);
      c.data.fromX = n;
      c.data.fromY = o;
      c.data.killType = this.bulletKillType;
      c.data.killDistance = this.bulletKillDistance;
      c.data.rotateToVelocity = this.bulletRotateToVelocity;
      if (this.bulletKillType === a.Weapon.KILL_LIFESPAN) {
        c.lifespan = this.bulletLifespan;
      }
      c.angle = r + this.bulletAngleOffset;
      if (this.bulletAnimation !== "") {
        if (c.animations.getAnimation(this.bulletAnimation) === null) {
          var u = this.anims[this.bulletAnimation];
          c.animations.add(u.name, u.frames, u.frameRate, u.loop, u.useNumericIndex);
        }
        c.animations.play(this.bulletAnimation);
      } else if (this.bulletFrameCycle) {
        c.frame = this.bulletFrames[this.bulletFrameIndex];
        if (++this.bulletFrameIndex >= this.bulletFrames.length) {
          this.bulletFrameIndex = 0;
        }
      } else if (this.bulletFrameRandom) {
        c.frame = this.bulletFrames[Math.floor(Math.random() * this.bulletFrames.length)];
      }
      if (c.data.bodyDirty) {
        if (this._data.customBody) {
          c.body.setSize(this._data.width, this._data.height, this._data.offsetX, this._data.offsetY);
        }
        c.body.collideWorldBounds = this.bulletCollideWorldBounds;
        c.data.bodyDirty = false;
      }
      c.body.velocity.set(h, l);
      c.body.gravity.set(this.bulletGravity.x, this.bulletGravity.y);
      if (this.bulletSpeedVariance !== 0) {
        var d = this.fireRate;
        d += a.Math.between(-this.fireRateVariance, this.fireRateVariance);
        if (d < 0) {
          d = 0;
        }
        this._nextFire = this.game.time.now + d;
      } else {
        this._nextFire = this.game.time.now + this.fireRate;
      }
      this.shots++;
      this.onFire.dispatch(c, this, s);
      if (this.fireLimit > 0 && this.shots === this.fireLimit) {
        this.onFireLimit.dispatch(this, this.fireLimit);
      }
    }
    return c;
  };
  a.Weapon.prototype.fireAtPointer = function (t = this.game.input.activePointer) {
    return this.fire(null, t.worldX, t.worldY);
  };
  a.Weapon.prototype.fireAtSprite = function (t) {
    return this.fire(null, t.world.x, t.world.y);
  };
  a.Weapon.prototype.fireAtXY = function (t, e) {
    return this.fire(null, t, e);
  };
  a.Weapon.prototype.setBulletBodyOffset = function (t, e, i = 0, s = 0) {
    this._data.customBody = true;
    this._data.width = t;
    this._data.height = e;
    this._data.offsetX = i;
    this._data.offsetY = s;
    this.bullets.callAll("body.setSize", "body", t, e, i, s);
    this.bullets.setAll("data.bodyDirty", false);
    return this;
  };
  a.Weapon.prototype.setBulletFrames = function (t, e, i = true, s = false) {
    this.bulletFrames = a.ArrayUtils.numberArray(t, e);
    this.bulletFrameIndex = 0;
    this.bulletFrameCycle = i;
    this.bulletFrameRandom = s;
    return this;
  };
  a.Weapon.prototype.addBulletAnimation = function (t, e, i, s, n) {
    this.anims[t] = {
      name: t,
      frames: e,
      frameRate: i,
      loop: s,
      useNumericIndex: n
    };
    this.bullets.callAll("animations.add", "animations", t, e, i, s, n);
    this.bulletAnimation = t;
    return this;
  };
  a.Weapon.prototype.debug = function (t = 16, e = 32, i = false) {
    this.game.debug.text("Weapon Plugin", t, e);
    this.game.debug.text("Bullets Alive: " + this.bullets.total + " - Total: " + this.bullets.length, t, e + 24);
    if (i) {
      this.bullets.forEachExists(this.game.debug.body, this.game.debug, "rgba(255, 0, 255, 0.8)");
    }
  };
  Object.defineProperty(a.Weapon.prototype, "bulletClass", {
    get: function () {
      return this._bulletClass;
    },
    set: function (t) {
      this._bulletClass = t;
      this.bullets.classType = this._bulletClass;
    }
  });
  Object.defineProperty(a.Weapon.prototype, "bulletKillType", {
    get: function () {
      return this._bulletKillType;
    },
    set: function (t) {
      switch (t) {
        case a.Weapon.KILL_STATIC_BOUNDS:
        case a.Weapon.KILL_WEAPON_BOUNDS:
          this.bulletBounds = this.bounds;
          break;
        case a.Weapon.KILL_CAMERA_BOUNDS:
          this.bulletBounds = this.game.camera.view;
          break;
        case a.Weapon.KILL_WORLD_BOUNDS:
          this.bulletBounds = this.game.world.bounds;
      }
      this._bulletKillType = t;
    }
  });
  Object.defineProperty(a.Weapon.prototype, "bulletCollideWorldBounds", {
    get: function () {
      return this._bulletCollideWorldBounds;
    },
    set: function (t) {
      this._bulletCollideWorldBounds = t;
      this.bullets.setAll("body.collideWorldBounds", t);
      this.bullets.setAll("data.bodyDirty", false);
    }
  });
  Object.defineProperty(a.Weapon.prototype, "x", {
    get: function () {
      return this.fireFrom.x;
    },
    set: function (t) {
      this.fireFrom.x = t;
    }
  });
  Object.defineProperty(a.Weapon.prototype, "y", {
    get: function () {
      return this.fireFrom.y;
    },
    set: function (t) {
      this.fireFrom.y = t;
    }
  });
  a.Bullet = function (t, e, i, s, n) {
    a.Sprite.call(this, t, e, i, s, n);
    this.anchor.set(0.5);
    this.data = {
      bulletManager: null,
      fromX: 0,
      fromY: 0,
      bodyDirty: true,
      rotateToVelocity: false,
      killType: 0,
      killDistance: 0
    };
  };
  a.Bullet.prototype = Object.create(a.Sprite.prototype);
  a.Bullet.prototype.constructor = a.Bullet;
  a.Bullet.prototype.kill = function () {
    this.alive = false;
    this.exists = false;
    this.visible = false;
    this.data.bulletManager.onKill.dispatch(this);
    return this;
  };
  a.Bullet.prototype.update = function () {
    if (this.exists) {
      if (this.data.killType > a.Weapon.KILL_LIFESPAN) {
        if (this.data.killType === a.Weapon.KILL_DISTANCE) {
          if (this.game.physics.arcade.distanceToXY(this, this.data.fromX, this.data.fromY, true) > this.data.killDistance) {
            this.kill();
          }
        } else if (!this.data.bulletManager.bulletBounds.intersects(this)) {
          this.kill();
        }
      }
      if (this.data.rotateToVelocity) {
        this.rotation = Math.atan2(this.body.velocity.y, this.body.velocity.x);
      }
      if (this.data.bulletManager.bulletWorldWrap) {
        this.game.world.wrap(this, this.data.bulletManager.bulletWorldWrapPadding);
      }
    }
  };
  a.Video = function (t, e = null, i = null) {
    this.game = t;
    this.key = e;
    this.width = 0;
    this.height = 0;
    this.type = a.VIDEO;
    this.disableTextureUpload = false;
    this.touchLocked = false;
    this.onPlay = new a.Signal();
    this.onChangeSource = new a.Signal();
    this.onComplete = new a.Signal();
    this.onAccess = new a.Signal();
    this.onError = new a.Signal();
    this.onTimeout = new a.Signal();
    this.timeout = 15000;
    this._timeOutID = null;
    this.video = null;
    this.videoStream = null;
    this.isStreaming = false;
    this.retryLimit = 20;
    this.retry = 0;
    this.retryInterval = 500;
    this._retryID = null;
    this._codeMuted = false;
    this._muted = false;
    this._codePaused = false;
    this._paused = false;
    this._pending = false;
    this._autoplay = false;
    this._endCallback = null;
    this._playCallback = null;
    if (e && this.game.cache.checkVideoKey(e)) {
      var s = this.game.cache.getVideo(e);
      if (s.isBlob) {
        this.createVideoFromBlob(s.data);
      } else {
        this.video = s.data;
      }
      this.width = this.video.videoWidth;
      this.height = this.video.videoHeight;
    } else if (i) {
      this.createVideoFromURL(i, false);
    }
    if (this.video && !i) {
      this.baseTexture = new PIXI.BaseTexture(this.video);
      this.baseTexture.forceLoaded(this.width, this.height);
    } else {
      this.baseTexture = new PIXI.BaseTexture(a.Cache.DEFAULT.baseTexture.source);
      this.baseTexture.forceLoaded(this.width, this.height);
    }
    this.texture = new PIXI.Texture(this.baseTexture);
    this.textureFrame = new a.Frame(0, 0, 0, this.width, this.height, "video");
    this.texture.setFrame(this.textureFrame);
    this.texture.valid = false;
    if (e !== null && this.video) {
      this.texture.valid = this.video.canplay;
    }
    this.snapshot = null;
    if (a.BitmapData) {
      this.snapshot = new a.BitmapData(this.game, "", this.width, this.height);
    }
    if (!this.game.device.cocoonJS && (this.game.device.iOS || this.game.device.android) || window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock) {
      this.setTouchLock();
    } else if (s) {
      s.locked = false;
    }
  };
  a.Video.prototype = {
    connectToMediaStream: function (t, e) {
      if (t && e) {
        this.video = t;
        this.videoStream = e;
        this.isStreaming = true;
        this.baseTexture.source = this.video;
        this.updateTexture(null, this.video.videoWidth, this.video.videoHeight);
        this.onAccess.dispatch(this);
      }
      return this;
    },
    startMediaStream: function (t = false, e = null, i = null) {
      if (!this.game.device.getUserMedia) {
        this.onError.dispatch(this, "No getUserMedia");
        return false;
      }
      if (this.videoStream !== null) {
        if (this.videoStream.active) {
          this.videoStream.active = false;
        } else {
          this.videoStream.stop();
        }
      }
      this.removeVideoElement();
      this.video = document.createElement("video");
      this.video.setAttribute("autoplay", "autoplay");
      if (e !== null) {
        this.video.width = e;
      }
      if (i !== null) {
        this.video.height = i;
      }
      this._timeOutID = window.setTimeout(this.getUserMediaTimeout.bind(this), this.timeout);
      try {
        navigator.getUserMedia({
          audio: t,
          video: true
        }, this.getUserMediaSuccess.bind(this), this.getUserMediaError.bind(this));
      } catch (t) {
        this.getUserMediaError(t);
      }
      return this;
    },
    getUserMediaTimeout: function () {
      clearTimeout(this._timeOutID);
      this.onTimeout.dispatch(this);
    },
    getUserMediaError: function (t) {
      clearTimeout(this._timeOutID);
      this.onError.dispatch(this, t);
    },
    getUserMediaSuccess: function (t) {
      clearTimeout(this._timeOutID);
      this.videoStream = t;
      if (this.video.mozSrcObject !== undefined) {
        this.video.mozSrcObject = t;
      } else {
        this.video.src = window.URL && window.URL.createObjectURL(t) || t;
      }
      var e = this;
      this.video.onloadeddata = function () {
        function t() {
          if (i > 0) {
            if (e.video.videoWidth > 0) {
              var s = e.video.videoWidth;
              var n = e.video.videoHeight;
              if (isNaN(e.video.videoHeight)) {
                n = s / (4 / 3);
              }
              e.video.play();
              e.isStreaming = true;
              e.baseTexture.source = e.video;
              e.updateTexture(null, s, n);
              e.onAccess.dispatch(e);
            } else {
              window.setTimeout(t, 500);
            }
          }
          i--;
        }
        var i = 10;
        t();
      };
    },
    createVideoFromBlob: function (t) {
      var e = this;
      this.video = document.createElement("video");
      this.video.controls = false;
      this.video.setAttribute("autoplay", "autoplay");
      this.video.addEventListener("loadeddata", function (t) {
        e.updateTexture(t);
      }, true);
      this.video.src = window.URL.createObjectURL(t);
      this.video.canplay = true;
      return this;
    },
    createVideoFromURL: function (t, e = false) {
      if (this.texture) {
        this.texture.valid = false;
      }
      this.video = document.createElement("video");
      this.video.controls = false;
      if (e) {
        this.video.setAttribute("autoplay", "autoplay");
      }
      this.video.src = t;
      this.video.canplay = true;
      this.video.load();
      this.retry = this.retryLimit;
      this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
      this.key = t;
      return this;
    },
    updateTexture: function (t, e, i) {
      var s = false;
      if (e === undefined || e === null) {
        e = this.video.videoWidth;
        s = true;
      }
      if (i === undefined || i === null) {
        i = this.video.videoHeight;
      }
      this.width = e;
      this.height = i;
      if (this.baseTexture.source !== this.video) {
        this.baseTexture.source = this.video;
      }
      this.baseTexture.forceLoaded(e, i);
      this.texture.frame.resize(e, i);
      this.texture.width = e;
      this.texture.height = i;
      this.texture.valid = true;
      if (this.snapshot) {
        this.snapshot.resize(e, i);
      }
      if (s && this.key !== null) {
        this.onChangeSource.dispatch(this, e, i);
        if (this._autoplay) {
          this.video.play();
          this.onPlay.dispatch(this, this.loop, this.playbackRate);
        }
      }
    },
    complete: function () {
      this.onComplete.dispatch(this);
    },
    play: function (t = false, e = 1) {
      if (this.game.sound.onMute) {
        this.game.sound.onMute.add(this.setMute, this);
        this.game.sound.onUnMute.add(this.unsetMute, this);
        if (this.game.sound.mute) {
          this.setMute();
        }
      }
      this.game.onPause.add(this.setPause, this);
      this.game.onResume.add(this.setResume, this);
      this._endCallback = this.complete.bind(this);
      this.video.addEventListener("ended", this._endCallback, true);
      this.video.addEventListener("webkitendfullscreen", this._endCallback, true);
      this.video.loop = t ? "loop" : "";
      this.video.playbackRate = e;
      if (this.touchLocked) {
        this._pending = true;
      } else {
        this._pending = false;
        if (this.key !== null) {
          if (this.video.readyState !== 4) {
            this.retry = this.retryLimit;
            this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
          } else {
            this._playCallback = this.playHandler.bind(this);
            this.video.addEventListener("playing", this._playCallback, true);
          }
        }
        this.video.play();
        this.onPlay.dispatch(this, t, e);
      }
      return this;
    },
    playHandler: function () {
      this.video.removeEventListener("playing", this._playCallback, true);
      this.updateTexture();
    },
    stop: function () {
      if (this.game.sound.onMute) {
        this.game.sound.onMute.remove(this.setMute, this);
        this.game.sound.onUnMute.remove(this.unsetMute, this);
      }
      this.game.onPause.remove(this.setPause, this);
      this.game.onResume.remove(this.setResume, this);
      if (this.isStreaming) {
        if (this.video.mozSrcObject) {
          this.video.mozSrcObject.stop();
          this.video.src = null;
        } else {
          this.video.src = "";
          if (this.videoStream.active) {
            this.videoStream.active = false;
          } else if (this.videoStream.getTracks) {
            this.videoStream.getTracks().forEach(function (t) {
              t.stop();
            });
          } else {
            this.videoStream.stop();
          }
        }
        this.videoStream = null;
        this.isStreaming = false;
      } else {
        this.video.removeEventListener("ended", this._endCallback, true);
        this.video.removeEventListener("webkitendfullscreen", this._endCallback, true);
        this.video.removeEventListener("playing", this._playCallback, true);
        if (this.touchLocked) {
          this._pending = false;
        } else {
          this.video.pause();
        }
      }
      return this;
    },
    add: function (t) {
      if (Array.isArray(t)) {
        for (var e = 0; e < t.length; e++) {
          if (t[e].loadTexture) {
            t[e].loadTexture(this);
          }
        }
      } else {
        t.loadTexture(this);
      }
      return this;
    },
    addToWorld: function (t, e, i, s, n, a) {
      n = n || 1;
      a = a || 1;
      var o = this.game.add.image(t, e, this);
      o.anchor.set(i, s);
      o.scale.set(n, a);
      return o;
    },
    render: function () {
      if (!this.disableTextureUpload && this.playing) {
        this.baseTexture.dirty();
      }
    },
    setMute: function () {
      if (!this._muted) {
        this._muted = true;
        this.video.muted = true;
      }
    },
    unsetMute: function () {
      if (this._muted && !this._codeMuted) {
        this._muted = false;
        this.video.muted = false;
      }
    },
    setPause: function () {
      if (!this._paused && !this.touchLocked) {
        this._paused = true;
        this.video.pause();
      }
    },
    setResume: function () {
      if (!!this._paused && !this._codePaused && !this.touchLocked) {
        this._paused = false;
        if (!this.video.ended) {
          this.video.play();
        }
      }
    },
    changeSource: function (t, e = true) {
      this.texture.valid = false;
      this.video.pause();
      this.retry = this.retryLimit;
      this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
      this.video.src = t;
      this.video.load();
      this._autoplay = e;
      if (!e) {
        this.paused = true;
      }
      return this;
    },
    checkVideoProgress: function () {
      if (this.video.readyState === 4) {
        this.updateTexture();
      } else if (--this.retry > 0) {
        this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval);
      }
    },
    setTouchLock: function () {
      this.game.input.touch.addTouchLockCallback(this.unlock, this);
      this.touchLocked = true;
    },
    unlock: function () {
      this.touchLocked = false;
      this.video.play();
      this.onPlay.dispatch(this, this.loop, this.playbackRate);
      if (this.key) {
        var t = this.game.cache.getVideo(this.key);
        if (t && !t.isBlob) {
          t.locked = false;
        }
      }
      return true;
    },
    grab: function (t = false, e = 1, i = null) {
      if (this.snapshot !== null) {
        if (t) {
          this.snapshot.cls();
        }
        this.snapshot.copy(this.video, 0, 0, this.width, this.height, 0, 0, this.width, this.height, 0, 0, 0, 1, 1, e, i);
        return this.snapshot;
      }
    },
    removeVideoElement: function () {
      if (this.video) {
        for (this.video.parentNode && this.video.parentNode.removeChild(this.video); this.video.hasChildNodes();) {
          this.video.removeChild(this.video.firstChild);
        }
        this.video.removeAttribute("autoplay");
        this.video.removeAttribute("src");
        this.video = null;
      }
    },
    destroy: function () {
      this.stop();
      this.removeVideoElement();
      if (this.touchLocked) {
        this.game.input.touch.removeTouchLockCallback(this.unlock, this);
      }
      if (this._retryID) {
        window.clearTimeout(this._retryID);
      }
    }
  };
  Object.defineProperty(a.Video.prototype, "currentTime", {
    get: function () {
      if (this.video) {
        return this.video.currentTime;
      } else {
        return 0;
      }
    },
    set: function (t) {
      this.video.currentTime = t;
    }
  });
  Object.defineProperty(a.Video.prototype, "duration", {
    get: function () {
      if (this.video) {
        return this.video.duration;
      } else {
        return 0;
      }
    }
  });
  Object.defineProperty(a.Video.prototype, "progress", {
    get: function () {
      if (this.video) {
        return this.video.currentTime / this.video.duration;
      } else {
        return 0;
      }
    }
  });
  Object.defineProperty(a.Video.prototype, "mute", {
    get: function () {
      return this._muted;
    },
    set: function (t) {
      if (t = t || null) {
        if (this._muted) {
          return;
        }
        this._codeMuted = true;
        this.setMute();
      } else {
        if (!this._muted) {
          return;
        }
        this._codeMuted = false;
        this.unsetMute();
      }
    }
  });
  Object.defineProperty(a.Video.prototype, "paused", {
    get: function () {
      return this._paused;
    },
    set: function (t) {
      t = t || null;
      if (!this.touchLocked) {
        if (t) {
          if (this._paused) {
            return;
          }
          this._codePaused = true;
          this.setPause();
        } else {
          if (!this._paused) {
            return;
          }
          this._codePaused = false;
          this.setResume();
        }
      }
    }
  });
  Object.defineProperty(a.Video.prototype, "volume", {
    get: function () {
      if (this.video) {
        return this.video.volume;
      } else {
        return 1;
      }
    },
    set: function (t) {
      if (t < 0) {
        t = 0;
      } else if (t > 1) {
        t = 1;
      }
      if (this.video) {
        this.video.volume = t;
      }
    }
  });
  Object.defineProperty(a.Video.prototype, "playbackRate", {
    get: function () {
      if (this.video) {
        return this.video.playbackRate;
      } else {
        return 1;
      }
    },
    set: function (t) {
      if (this.video) {
        this.video.playbackRate = t;
      }
    }
  });
  Object.defineProperty(a.Video.prototype, "loop", {
    get: function () {
      return !!this.video && this.video.loop;
    },
    set: function (t) {
      if (t && this.video) {
        this.video.loop = "loop";
      } else if (this.video) {
        this.video.loop = "";
      }
    }
  });
  Object.defineProperty(a.Video.prototype, "playing", {
    get: function () {
      return !this.video.paused || !this.video.ended;
    }
  });
  a.Video.prototype.constructor = a.Video;
  if (PIXI.blendModes === undefined) {
    PIXI.blendModes = a.blendModes;
  }
  if (PIXI.scaleModes === undefined) {
    PIXI.scaleModes = a.scaleModes;
  }
  if (PIXI.Texture.emptyTexture === undefined) {
    PIXI.Texture.emptyTexture = new PIXI.Texture(new PIXI.BaseTexture());
  }
  if (PIXI.DisplayObject._tempMatrix === undefined) {
    PIXI.DisplayObject._tempMatrix = new PIXI.Matrix();
  }
  if (PIXI.RenderTexture.tempMatrix === undefined) {
    PIXI.RenderTexture.tempMatrix = new PIXI.Matrix();
  }
  if (PIXI.Graphics && PIXI.Graphics.POLY === undefined) {
    PIXI.Graphics.POLY = a.POLYGON;
    PIXI.Graphics.RECT = a.RECTANGLE;
    PIXI.Graphics.CIRC = a.CIRCLE;
    PIXI.Graphics.ELIP = a.ELLIPSE;
    PIXI.Graphics.RREC = a.ROUNDEDRECTANGLE;
  }
  PIXI.TextureSilentFail = true;
  if (module !== undefined && module.exports) {
    exports = module.exports = a;
  }
  exports.Phaser = a;
  return a;
}).call(this);