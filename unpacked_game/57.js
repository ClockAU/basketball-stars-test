/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*
* @overview
*
* Phaser - http://phaser.io
*
* v2.6.4 "Kore Springs" - Built: Thu Nov 16 2017 13:53:48
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
(function () {
  var i = this;
  var s = s || {};
  /**
  * @author       Mat Groves http://matgroves.com @Doormat23
  * @author       Richard Davey <rich@photonstorm.com>
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  /**
  * @author       Richard Davey <rich@photonstorm.com>
  * @copyright    2016 Photon Storm Ltd.
  * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
  */
  s.game = null;
  s.WEBGL_RENDERER = 0;
  s.CANVAS_RENDERER = 1;
  s.VERSION = "v2.2.9";
  s._UID = 0;
  if (typeof Float32Array != "undefined") {
    s.Float32Array = Float32Array;
    s.Uint16Array = Uint16Array;
    s.Uint32Array = Uint32Array;
    s.ArrayBuffer = ArrayBuffer;
  } else {
    s.Float32Array = Array;
    s.Uint16Array = Array;
  }
  s.PI_2 = Math.PI * 2;
  s.RAD_TO_DEG = 180 / Math.PI;
  s.DEG_TO_RAD = Math.PI / 180;
  s.RETINA_PREFIX = "@2x";
  s.DisplayObject = function () {
    this.position = new s.Point(0, 0);
    this.scale = new s.Point(1, 1);
    this.pivot = new s.Point(0, 0);
    this.rotation = 0;
    this.alpha = 1;
    this.visible = true;
    this.hitArea = null;
    this.renderable = false;
    this.parent = null;
    this.worldAlpha = 1;
    this.worldTransform = new s.Matrix();
    this.worldPosition = new s.Point(0, 0);
    this.worldScale = new s.Point(1, 1);
    this.worldRotation = 0;
    this.filterArea = null;
    this._sr = 0;
    this._cr = 1;
    this._bounds = new s.Rectangle(0, 0, 0, 0);
    this._currentBounds = null;
    this._mask = null;
    this._cacheAsBitmap = false;
    this._cacheIsDirty = false;
  };
  s.DisplayObject.prototype.constructor = s.DisplayObject;
  s.DisplayObject.prototype = {
    destroy: function () {
      if (this.children) {
        for (var t = this.children.length; t--;) {
          this.children[t].destroy();
        }
        this.children = [];
      }
      this.hitArea = null;
      this.parent = null;
      this.worldTransform = null;
      this.filterArea = null;
      this.renderable = false;
      this._bounds = null;
      this._currentBounds = null;
      this._mask = null;
      this._destroyCachedSprite();
    },
    updateTransform: function (t) {
      if (!t && !this.parent && !this.game) {
        return this;
      }
      var e = this.parent;
      if (t) {
        e = t;
      } else if (!this.parent) {
        e = this.game.world;
      }
      var i = e.worldTransform;
      var n = this.worldTransform;
      var a;
      var o;
      var r;
      var h;
      var l;
      var c;
      if (this.rotation % s.PI_2) {
        if (this.rotation !== this.rotationCache) {
          this.rotationCache = this.rotation;
          this._sr = Math.sin(this.rotation);
          this._cr = Math.cos(this.rotation);
        }
        a = this._cr * this.scale.x;
        o = this._sr * this.scale.x;
        r = -this._sr * this.scale.y;
        h = this._cr * this.scale.y;
        l = this.position.x;
        c = this.position.y;
        if (this.pivot.x || this.pivot.y) {
          l -= this.pivot.x * a + this.pivot.y * r;
          c -= this.pivot.x * o + this.pivot.y * h;
        }
        n.a = a * i.a + o * i.c;
        n.b = a * i.b + o * i.d;
        n.c = r * i.a + h * i.c;
        n.d = r * i.b + h * i.d;
        n.tx = l * i.a + c * i.c + i.tx;
        n.ty = l * i.b + c * i.d + i.ty;
      } else {
        a = this.scale.x;
        h = this.scale.y;
        l = this.position.x - this.pivot.x * a;
        c = this.position.y - this.pivot.y * h;
        n.a = a * i.a;
        n.b = a * i.b;
        n.c = h * i.c;
        n.d = h * i.d;
        n.tx = l * i.a + c * i.c + i.tx;
        n.ty = l * i.b + c * i.d + i.ty;
      }
      this.worldAlpha = this.alpha * e.worldAlpha;
      this.worldPosition.set(n.tx, n.ty);
      this.worldScale.set(this.scale.x * Math.sqrt(n.a * n.a + n.c * n.c), this.scale.y * Math.sqrt(n.b * n.b + n.d * n.d));
      this.worldRotation = Math.atan2(-n.c, n.d);
      this._currentBounds = null;
      if (this.transformCallback) {
        this.transformCallback.call(this.transformCallbackContext, n, i);
      }
      return this;
    },
    preUpdate: function () {},
    generateTexture: function (t, e, i) {
      var n = this.getLocalBounds();
      var a = new s.RenderTexture(n.width | 0, n.height | 0, i, e, t);
      s.DisplayObject._tempMatrix.tx = -n.x;
      s.DisplayObject._tempMatrix.ty = -n.y;
      a.render(this, s.DisplayObject._tempMatrix);
      return a;
    },
    updateCache: function () {
      this._generateCachedSprite();
      return this;
    },
    toGlobal: function (t) {
      this.updateTransform();
      return this.worldTransform.apply(t);
    },
    toLocal: function (t, e) {
      if (e) {
        t = e.toGlobal(t);
      }
      this.updateTransform();
      return this.worldTransform.applyInverse(t);
    },
    _renderCachedSprite: function (t) {
      this._cachedSprite.worldAlpha = this.worldAlpha;
      if (t.gl) {
        s.Sprite.prototype._renderWebGL.call(this._cachedSprite, t);
      } else {
        s.Sprite.prototype._renderCanvas.call(this._cachedSprite, t);
      }
    },
    _generateCachedSprite: function () {
      this._cacheAsBitmap = false;
      var t = this.getLocalBounds();
      t.width = Math.max(1, Math.ceil(t.width));
      t.height = Math.max(1, Math.ceil(t.height));
      this.updateTransform();
      if (this._cachedSprite) {
        this._cachedSprite.texture.resize(t.width, t.height);
      } else {
        var e = new s.RenderTexture(t.width, t.height);
        this._cachedSprite = new s.Sprite(e);
        this._cachedSprite.worldTransform = this.worldTransform;
      }
      var i = this._filters;
      this._filters = null;
      this._cachedSprite.filters = i;
      s.DisplayObject._tempMatrix.tx = -t.x;
      s.DisplayObject._tempMatrix.ty = -t.y;
      this._cachedSprite.texture.render(this, s.DisplayObject._tempMatrix, true);
      this._cachedSprite.anchor.x = -t.x / t.width;
      this._cachedSprite.anchor.y = -t.y / t.height;
      this._filters = i;
      this._cacheAsBitmap = true;
    },
    _destroyCachedSprite: function () {
      if (this._cachedSprite) {
        this._cachedSprite.texture.destroy(true);
        this._cachedSprite = null;
      }
    }
  };
  s.DisplayObject.prototype.displayObjectUpdateTransform = s.DisplayObject.prototype.updateTransform;
  Object.defineProperties(s.DisplayObject.prototype, {
    x: {
      get: function () {
        return this.position.x;
      },
      set: function (t) {
        this.position.x = t;
      }
    },
    y: {
      get: function () {
        return this.position.y;
      },
      set: function (t) {
        this.position.y = t;
      }
    },
    worldVisible: {
      get: function () {
        if (this.visible) {
          var t = this.parent;
          if (!t) {
            return this.visible;
          }
          do {
            if (!t.visible) {
              return false;
            }
            t = t.parent;
          } while (t);
          return true;
        }
        return false;
      }
    },
    mask: {
      get: function () {
        return this._mask;
      },
      set: function (t) {
        if (this._mask) {
          this._mask.isMask = false;
        }
        this._mask = t;
        if (t) {
          this._mask.isMask = true;
        }
      }
    },
    filters: {
      get: function () {
        return this._filters;
      },
      set: function (t) {
        if (Array.isArray(t)) {
          var e = [];
          for (var i = 0; i < t.length; i++) {
            for (var n = t[i].passes, a = 0; a < n.length; a++) {
              e.push(n[a]);
            }
          }
          this._filterBlock = {
            target: this,
            filterPasses: e
          };
        }
        this._filters = t;
        if (this.blendMode && this.blendMode === s.blendModes.MULTIPLY) {
          this.blendMode = s.blendModes.NORMAL;
        }
      }
    },
    cacheAsBitmap: {
      get: function () {
        return this._cacheAsBitmap;
      },
      set: function (t) {
        if (this._cacheAsBitmap !== t) {
          if (t) {
            this._generateCachedSprite();
          } else {
            this._destroyCachedSprite();
          }
          this._cacheAsBitmap = t;
        }
      }
    }
  });
  s.DisplayObjectContainer = function () {
    s.DisplayObject.call(this);
    this.children = [];
    this.ignoreChildInput = false;
  };
  s.DisplayObjectContainer.prototype = Object.create(s.DisplayObject.prototype);
  s.DisplayObjectContainer.prototype.constructor = s.DisplayObjectContainer;
  s.DisplayObjectContainer.prototype.addChild = function (t) {
    return this.addChildAt(t, this.children.length);
  };
  s.DisplayObjectContainer.prototype.addChildAt = function (t, e) {
    if (e >= 0 && e <= this.children.length) {
      if (t.parent) {
        t.parent.removeChild(t);
      }
      t.parent = this;
      this.children.splice(e, 0, t);
      return t;
    }
    throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
  };
  s.DisplayObjectContainer.prototype.swapChildren = function (t, e) {
    if (t !== e) {
      var i = this.getChildIndex(t);
      var s = this.getChildIndex(e);
      if (i < 0 || s < 0) {
        throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
      }
      this.children[i] = e;
      this.children[s] = t;
    }
  };
  s.DisplayObjectContainer.prototype.getChildIndex = function (t) {
    var e = this.children.indexOf(t);
    if (e === -1) {
      throw new Error("The supplied DisplayObject must be a child of the caller");
    }
    return e;
  };
  s.DisplayObjectContainer.prototype.setChildIndex = function (t, e) {
    if (e < 0 || e >= this.children.length) {
      throw new Error("The supplied index is out of bounds");
    }
    var i = this.getChildIndex(t);
    this.children.splice(i, 1);
    this.children.splice(e, 0, t);
  };
  s.DisplayObjectContainer.prototype.getChildAt = function (t) {
    if (t < 0 || t >= this.children.length) {
      throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject must be a child of the caller");
    }
    return this.children[t];
  };
  s.DisplayObjectContainer.prototype.removeChild = function (t) {
    var e = this.children.indexOf(t);
    if (e !== -1) {
      return this.removeChildAt(e);
    }
  };
  s.DisplayObjectContainer.prototype.removeChildAt = function (t) {
    var e = this.getChildAt(t);
    if (e) {
      e.parent = undefined;
      this.children.splice(t, 1);
    }
    return e;
  };
  s.DisplayObjectContainer.prototype.removeChildren = function (t = 0, e = this.children.length) {
    var i = e - t;
    if (i > 0 && i <= e) {
      for (var s = this.children.splice(begin, i), n = 0; n < s.length; n++) {
        s[n].parent = undefined;
      }
      return s;
    }
    if (i === 0 && this.children.length === 0) {
      return [];
    }
    throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range");
  };
  s.DisplayObjectContainer.prototype.updateTransform = function () {
    if (this.visible && (this.displayObjectUpdateTransform(), !this._cacheAsBitmap)) {
      for (var t = 0; t < this.children.length; t++) {
        this.children[t].updateTransform();
      }
    }
  };
  s.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = s.DisplayObjectContainer.prototype.updateTransform;
  s.DisplayObjectContainer.prototype.getBounds = function (t) {
    var e = t && t instanceof s.DisplayObject;
    var i = true;
    if (e) {
      i = t instanceof s.DisplayObjectContainer && t.contains(this);
    } else {
      t = this;
    }
    var n;
    if (e) {
      var a = t.worldTransform;
      t.worldTransform = s.identityMatrix;
      n = 0;
      for (; n < t.children.length; n++) {
        t.children[n].updateTransform();
      }
    }
    var o = Infinity;
    var r = Infinity;
    var h = -Infinity;
    var l = -Infinity;
    var c;
    var u;
    var d;
    var p = false;
    for (n = 0; n < this.children.length; n++) {
      if (this.children[n].visible) {
        p = true;
        c = this.children[n].getBounds();
        o = o < c.x ? o : c.x;
        r = r < c.y ? r : c.y;
        u = c.width + c.x;
        d = c.height + c.y;
        h = h > u ? h : u;
        l = l > d ? l : d;
      }
    }
    var f = this._bounds;
    if (!p) {
      f = new s.Rectangle();
      var g = f.x;
      var m = f.width + f.x;
      var y = f.y;
      var v = f.height + f.y;
      var b = this.worldTransform;
      var _ = b.a;
      var x = b.b;
      var w = b.c;
      var P = b.d;
      var T = b.tx;
      var S = b.ty;
      var C = _ * m + w * v + T;
      var A = P * v + x * m + S;
      var E = _ * g + w * v + T;
      var I = P * v + x * g + S;
      var B = _ * g + w * y + T;
      var M = P * y + x * g + S;
      var k = _ * m + w * y + T;
      var O = P * y + x * m + S;
      h = C;
      l = A;
      o = C;
      r = A;
      o = E < o ? E : o;
      o = B < o ? B : o;
      o = k < o ? k : o;
      r = I < r ? I : r;
      r = M < r ? M : r;
      r = O < r ? O : r;
      h = E > h ? E : h;
      h = B > h ? B : h;
      h = k > h ? k : h;
      l = I > l ? I : l;
      l = M > l ? M : l;
      l = O > l ? O : l;
    }
    f.x = o;
    f.y = r;
    f.width = h - o;
    f.height = l - r;
    if (e) {
      t.worldTransform = a;
      n = 0;
      for (; n < t.children.length; n++) {
        t.children[n].updateTransform();
      }
    }
    if (!i) {
      var D = t.getBounds();
      f.x -= D.x;
      f.y -= D.y;
    }
    return f;
  };
  s.DisplayObjectContainer.prototype.getLocalBounds = function () {
    return this.getBounds(this);
  };
  s.DisplayObjectContainer.prototype.contains = function (t) {
    return !!t && (t === this || this.contains(t.parent));
  };
  s.DisplayObjectContainer.prototype._renderWebGL = function (t) {
    if (this.visible && !(this.alpha <= 0)) {
      if (this._cacheAsBitmap) {
        this._renderCachedSprite(t);
        return;
      }
      var e;
      if (this._mask || this._filters) {
        if (this._filters) {
          t.spriteBatch.flush();
          t.filterManager.pushFilter(this._filterBlock);
        }
        if (this._mask) {
          t.spriteBatch.stop();
          t.maskManager.pushMask(this.mask, t);
          t.spriteBatch.start();
        }
        e = 0;
        for (; e < this.children.length; e++) {
          this.children[e]._renderWebGL(t);
        }
        t.spriteBatch.stop();
        if (this._mask) {
          t.maskManager.popMask(this._mask, t);
        }
        if (this._filters) {
          t.filterManager.popFilter();
        }
        t.spriteBatch.start();
      } else {
        for (e = 0; e < this.children.length; e++) {
          this.children[e]._renderWebGL(t);
        }
      }
    }
  };
  s.DisplayObjectContainer.prototype._renderCanvas = function (t) {
    if (this.visible !== false && this.alpha !== 0) {
      if (this._cacheAsBitmap) {
        this._renderCachedSprite(t);
        return;
      }
      if (this._mask) {
        t.maskManager.pushMask(this._mask, t);
      }
      for (var e = 0; e < this.children.length; e++) {
        this.children[e]._renderCanvas(t);
      }
      if (this._mask) {
        t.maskManager.popMask(t);
      }
    }
  };
  Object.defineProperty(s.DisplayObjectContainer.prototype, "width", {
    get: function () {
      return this.getLocalBounds().width * this.scale.x;
    },
    set: function (t) {
      var e = this.getLocalBounds().width;
      this.scale.x = e !== 0 ? t / e : 1;
      this._width = t;
    }
  });
  Object.defineProperty(s.DisplayObjectContainer.prototype, "height", {
    get: function () {
      return this.getLocalBounds().height * this.scale.y;
    },
    set: function (t) {
      var e = this.getLocalBounds().height;
      this.scale.y = e !== 0 ? t / e : 1;
      this._height = t;
    }
  });
  s.Sprite = function (t) {
    s.DisplayObjectContainer.call(this);
    this.anchor = new s.Point();
    this.texture = t || s.Texture.emptyTexture;
    this._width = 0;
    this._height = 0;
    this.tint = 16777215;
    this.cachedTint = -1;
    this.tintedTexture = null;
    this.blendMode = s.blendModes.NORMAL;
    this.shader = null;
    this.exists = true;
    if (this.texture.baseTexture.hasLoaded) {
      this.onTextureUpdate();
    }
    this.renderable = true;
  };
  s.Sprite.prototype = Object.create(s.DisplayObjectContainer.prototype);
  s.Sprite.prototype.constructor = s.Sprite;
  Object.defineProperty(s.Sprite.prototype, "width", {
    get: function () {
      return this.scale.x * this.texture.frame.width;
    },
    set: function (t) {
      this.scale.x = t / this.texture.frame.width;
      this._width = t;
    }
  });
  Object.defineProperty(s.Sprite.prototype, "height", {
    get: function () {
      return this.scale.y * this.texture.frame.height;
    },
    set: function (t) {
      this.scale.y = t / this.texture.frame.height;
      this._height = t;
    }
  });
  s.Sprite.prototype.setTexture = function (t, e) {
    if (e !== undefined) {
      this.texture.baseTexture.destroy();
    }
    this.texture.baseTexture.skipRender = false;
    this.texture = t;
    this.texture.valid = true;
    this.cachedTint = -1;
  };
  s.Sprite.prototype.onTextureUpdate = function () {
    if (this._width) {
      this.scale.x = this._width / this.texture.frame.width;
    }
    if (this._height) {
      this.scale.y = this._height / this.texture.frame.height;
    }
  };
  s.Sprite.prototype.getBounds = function (t) {
    var e = this.texture.frame.width;
    var i = this.texture.frame.height;
    var s = e * (1 - this.anchor.x);
    var n = e * -this.anchor.x;
    var a = i * (1 - this.anchor.y);
    var o = i * -this.anchor.y;
    var r = t || this.worldTransform;
    var h = r.a;
    var l = r.b;
    var c = r.c;
    var u = r.d;
    var d = r.tx;
    var p = r.ty;
    var f = -Infinity;
    var g = -Infinity;
    var m = Infinity;
    var y = Infinity;
    if (l === 0 && c === 0) {
      if (h < 0) {
        h *= -1;
        var v = s;
        s = -n;
        n = -v;
      }
      if (u < 0) {
        u *= -1;
        var v = a;
        a = -o;
        o = -v;
      }
      m = h * n + d;
      f = h * s + d;
      y = u * o + p;
      g = u * a + p;
    } else {
      var b = h * n + c * o + d;
      var _ = u * o + l * n + p;
      var x = h * s + c * o + d;
      var w = u * o + l * s + p;
      var P = h * s + c * a + d;
      var T = u * a + l * s + p;
      var S = h * n + c * a + d;
      var C = u * a + l * n + p;
      m = b < m ? b : m;
      m = x < m ? x : m;
      m = P < m ? P : m;
      m = S < m ? S : m;
      y = _ < y ? _ : y;
      y = w < y ? w : y;
      y = T < y ? T : y;
      y = C < y ? C : y;
      f = b > f ? b : f;
      f = x > f ? x : f;
      f = P > f ? P : f;
      f = S > f ? S : f;
      g = _ > g ? _ : g;
      g = w > g ? w : g;
      g = T > g ? T : g;
      g = C > g ? C : g;
    }
    var A = this._bounds;
    A.x = m;
    A.width = f - m;
    A.y = y;
    A.height = g - y;
    this._currentBounds = A;
    return A;
  };
  s.Sprite.prototype.getLocalBounds = function () {
    var t = this.worldTransform;
    this.worldTransform = s.identityMatrix;
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
  s.Sprite.prototype._renderWebGL = function (t, e) {
    if (this.visible && !(this.alpha <= 0) && this.renderable) {
      var i = this.worldTransform;
      if (e) {
        i = e;
      }
      if (this._mask || this._filters) {
        var s = t.spriteBatch;
        if (this._filters) {
          s.flush();
          t.filterManager.pushFilter(this._filterBlock);
        }
        if (this._mask) {
          s.stop();
          t.maskManager.pushMask(this.mask, t);
          s.start();
        }
        s.render(this);
        for (var n = 0; n < this.children.length; n++) {
          this.children[n]._renderWebGL(t);
        }
        s.stop();
        if (this._mask) {
          t.maskManager.popMask(this._mask, t);
        }
        if (this._filters) {
          t.filterManager.popFilter();
        }
        s.start();
      } else {
        t.spriteBatch.render(this);
        for (var n = 0; n < this.children.length; n++) {
          this.children[n]._renderWebGL(t, i);
        }
      }
    }
  };
  s.Sprite.prototype._renderCanvas = function (t, e) {
    if (!!this.visible && this.alpha !== 0 && !!this.renderable && !(this.texture.crop.width <= 0) && !(this.texture.crop.height <= 0)) {
      var i = this.worldTransform;
      if (e) {
        i = e;
      }
      if (this.blendMode !== t.currentBlendMode) {
        t.currentBlendMode = this.blendMode;
        t.context.globalCompositeOperation = s.blendModesCanvas[t.currentBlendMode];
      }
      if (this._mask) {
        t.maskManager.pushMask(this._mask, t);
      }
      if (this.texture.valid) {
        var n = this.texture.baseTexture.resolution / t.resolution;
        t.context.globalAlpha = this.worldAlpha;
        if (t.smoothProperty && t.scaleMode !== this.texture.baseTexture.scaleMode) {
          t.scaleMode = this.texture.baseTexture.scaleMode;
          t.context[t.smoothProperty] = t.scaleMode === s.scaleModes.LINEAR;
        }
        var a = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width;
        var o = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;
        var r = i.tx * t.resolution + t.shakeX;
        var h = i.ty * t.resolution + t.shakeY;
        if (t.roundPixels) {
          t.context.setTransform(i.a, i.b, i.c, i.d, r | 0, h | 0);
          a |= 0;
          o |= 0;
        } else {
          t.context.setTransform(i.a, i.b, i.c, i.d, r, h);
        }
        var l = this.texture.crop.width;
        var c = this.texture.crop.height;
        a /= n;
        o /= n;
        if (this.tint !== 16777215) {
          if (this.texture.requiresReTint || this.cachedTint !== this.tint) {
            this.tintedTexture = s.CanvasTinter.getTintedTexture(this, this.tint);
            this.cachedTint = this.tint;
            this.texture.requiresReTint = false;
          }
          t.context.drawImage(this.tintedTexture, 0, 0, l, c, a, o, l / n, c / n);
        } else {
          var u = this.texture.crop.x;
          var d = this.texture.crop.y;
          t.context.drawImage(this.texture.baseTexture.source, u, d, l, c, a, o, l / n, c / n);
        }
      }
      for (var p = 0; p < this.children.length; p++) {
        this.children[p]._renderCanvas(t);
      }
      if (this._mask) {
        t.maskManager.popMask(t);
      }
    }
  };
  s.SpriteBatch = function (t) {
    s.DisplayObjectContainer.call(this);
    this.textureThing = t;
    this.ready = false;
  };
  s.SpriteBatch.prototype = Object.create(s.DisplayObjectContainer.prototype);
  s.SpriteBatch.prototype.constructor = s.SpriteBatch;
  s.SpriteBatch.prototype.initWebGL = function (t) {
    this.fastSpriteBatch = new s.WebGLFastSpriteBatch(t);
    this.ready = true;
  };
  s.SpriteBatch.prototype.updateTransform = function () {
    this.displayObjectUpdateTransform();
  };
  s.SpriteBatch.prototype._renderWebGL = function (t) {
    if (!!this.visible && !(this.alpha <= 0) && !!this.children.length) {
      if (!this.ready) {
        this.initWebGL(t.gl);
      }
      if (this.fastSpriteBatch.gl !== t.gl) {
        this.fastSpriteBatch.setContext(t.gl);
      }
      t.spriteBatch.stop();
      t.shaderManager.setShader(t.shaderManager.fastShader);
      this.fastSpriteBatch.begin(this, t);
      this.fastSpriteBatch.render(this);
      t.spriteBatch.start();
    }
  };
  s.SpriteBatch.prototype._renderCanvas = function (t) {
    if (this.visible && !(this.alpha <= 0) && this.children.length) {
      var e = t.context;
      e.globalAlpha = this.worldAlpha;
      this.displayObjectUpdateTransform();
      var i = this.worldTransform;
      var s = true;
      for (var n = 0; n < this.children.length; n++) {
        var a = this.children[n];
        if (a.visible) {
          var o = a.texture;
          var r = o.frame;
          e.globalAlpha = this.worldAlpha * a.alpha;
          if (a.rotation % (Math.PI * 2) == 0) {
            if (s) {
              e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty);
              s = false;
            }
            e.drawImage(o.baseTexture.source, r.x, r.y, r.width, r.height, a.anchor.x * (-r.width * a.scale.x) + a.position.x + 0.5 + t.shakeX | 0, a.anchor.y * (-r.height * a.scale.y) + a.position.y + 0.5 + t.shakeY | 0, r.width * a.scale.x, r.height * a.scale.y);
          } else {
            s ||= true;
            a.displayObjectUpdateTransform();
            var h = a.worldTransform;
            var l = h.tx * t.resolution + t.shakeX;
            var c = h.ty * t.resolution + t.shakeY;
            if (t.roundPixels) {
              e.setTransform(h.a, h.b, h.c, h.d, l | 0, c | 0);
            } else {
              e.setTransform(h.a, h.b, h.c, h.d, l, c);
            }
            e.drawImage(o.baseTexture.source, r.x, r.y, r.width, r.height, a.anchor.x * -r.width + 0.5 | 0, a.anchor.y * -r.height + 0.5 | 0, r.width, r.height);
          }
        }
      }
    }
  };
  s.hex2rgb = function (t) {
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255];
  };
  s.rgb2hex = function (t) {
    return (t[0] * 255 << 16) + (t[1] * 255 << 8) + t[2] * 255;
  };
  s.canUseNewCanvasBlendModes = function () {
    if (document === undefined) {
      return false;
    }
    var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/";
    var e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==";
    var i = new Image();
    i.src = t + "AP804Oa6" + e;
    var n = new Image();
    n.src = t + "/wCKxvRF" + e;
    var a = s.CanvasPool.create(this, 6, 1);
    var o = a.getContext("2d");
    o.globalCompositeOperation = "multiply";
    o.drawImage(i, 0, 0);
    o.drawImage(n, 2, 0);
    if (!o.getImageData(2, 0, 1, 1)) {
      return false;
    }
    var r = o.getImageData(2, 0, 1, 1).data;
    s.CanvasPool.remove(this);
    return r[0] === 255 && r[1] === 0 && r[2] === 0;
  };
  s.getNextPowerOfTwo = function (t) {
    if (t > 0 && (t & t - 1) == 0) {
      return t;
    }
    for (var e = 1; e < t;) {
      e <<= 1;
    }
    return e;
  };
  s.isPowerOfTwo = function (t, e) {
    return t > 0 && (t & t - 1) == 0 && e > 0 && (e & e - 1) == 0;
  };
  s.CanvasPool = {
    create: function (t, e, i) {
      var n = s.CanvasPool.getFirst();
      var a;
      if (n === -1) {
        var o = {
          parent: t,
          canvas: document.createElement("canvas")
        };
        s.CanvasPool.pool.push(o);
        a = o.canvas;
      } else {
        s.CanvasPool.pool[n].parent = t;
        a = s.CanvasPool.pool[n].canvas;
      }
      if (e !== undefined) {
        a.width = e;
        a.height = i;
      }
      return a;
    },
    getFirst: function () {
      for (var t = s.CanvasPool.pool, e = 0; e < t.length; e++) {
        if (!t[e].parent) {
          return e;
        }
      }
      return -1;
    },
    remove: function (t) {
      for (var e = s.CanvasPool.pool, i = 0; i < e.length; i++) {
        if (e[i].parent === t) {
          e[i].parent = null;
          e[i].canvas.width = 1;
          e[i].canvas.height = 1;
        }
      }
    },
    removeByCanvas: function (t) {
      for (var e = s.CanvasPool.pool, i = 0; i < e.length; i++) {
        if (e[i].canvas === t) {
          e[i].parent = null;
          e[i].canvas.width = 1;
          e[i].canvas.height = 1;
        }
      }
    },
    getTotal: function () {
      for (var t = s.CanvasPool.pool, e = 0, i = 0; i < t.length; i++) {
        if (t[i].parent) {
          e++;
        }
      }
      return e;
    },
    getFree: function () {
      for (var t = s.CanvasPool.pool, e = 0, i = 0; i < t.length; i++) {
        if (!t[i].parent) {
          e++;
        }
      }
      return e;
    }
  };
  s.CanvasPool.pool = [];
  s.initDefaultShaders = function () {};
  s.CompileVertexShader = function (t, e) {
    return s._CompileShader(t, e, t.VERTEX_SHADER);
  };
  s.CompileFragmentShader = function (t, e) {
    return s._CompileShader(t, e, t.FRAGMENT_SHADER);
  };
  s._CompileShader = function (t, e, i) {
    var s = e;
    if (Array.isArray(e)) {
      s = e.join("\n");
    }
    var n = t.createShader(i);
    t.shaderSource(n, s);
    t.compileShader(n);
    if (t.getShaderParameter(n, t.COMPILE_STATUS)) {
      return n;
    } else {
      window.console.log(t.getShaderInfoLog(n));
      return null;
    }
  };
  s.compileProgram = function (t, e, i) {
    var n = s.CompileFragmentShader(t, i);
    var a = s.CompileVertexShader(t, e);
    var o = t.createProgram();
    t.attachShader(o, a);
    t.attachShader(o, n);
    t.linkProgram(o);
    if (!t.getProgramParameter(o, t.LINK_STATUS)) {
      window.console.log(t.getProgramInfoLog(o));
      window.console.log("Could not initialise shaders");
    }
    return o;
  };
  s.PixiShader = function (t) {
    this._UID = s._UID++;
    this.gl = t;
    this.program = null;
    this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"];
    this.textureCount = 0;
    this.firstRun = true;
    this.dirty = true;
    this.attributes = [];
    this.init();
  };
  s.PixiShader.prototype.constructor = s.PixiShader;
  s.PixiShader.prototype.init = function () {
    var t = this.gl;
    var e = s.compileProgram(t, this.vertexSrc || s.PixiShader.defaultVertexSrc, this.fragmentSrc);
    t.useProgram(e);
    this.uSampler = t.getUniformLocation(e, "uSampler");
    this.projectionVector = t.getUniformLocation(e, "projectionVector");
    this.offsetVector = t.getUniformLocation(e, "offsetVector");
    this.dimensions = t.getUniformLocation(e, "dimensions");
    this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition");
    this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord");
    this.colorAttribute = t.getAttribLocation(e, "aColor");
    if (this.colorAttribute === -1) {
      this.colorAttribute = 2;
    }
    this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
    for (var i in this.uniforms) {
      this.uniforms[i].uniformLocation = t.getUniformLocation(e, i);
    }
    this.initUniforms();
    this.program = e;
  };
  s.PixiShader.prototype.initUniforms = function () {
    this.textureCount = 1;
    var t = this.gl;
    var e;
    for (var i in this.uniforms) {
      e = this.uniforms[i];
      var s = e.type;
      if (s === "sampler2D") {
        e._init = false;
        if (e.value !== null) {
          this.initSampler2D(e);
        }
      } else if (s === "mat2" || s === "mat3" || s === "mat4") {
        e.glMatrix = true;
        e.glValueLength = 1;
        if (s === "mat2") {
          e.glFunc = t.uniformMatrix2fv;
        } else if (s === "mat3") {
          e.glFunc = t.uniformMatrix3fv;
        } else if (s === "mat4") {
          e.glFunc = t.uniformMatrix4fv;
        }
      } else {
        e.glFunc = t["uniform" + s];
        e.glValueLength = s === "2f" || s === "2i" ? 2 : s === "3f" || s === "3i" ? 3 : s === "4f" || s === "4i" ? 4 : 1;
      }
    }
  };
  s.PixiShader.prototype.initSampler2D = function (t) {
    if (t.value && t.value.baseTexture && t.value.baseTexture.hasLoaded) {
      var e = this.gl;
      e.activeTexture(e["TEXTURE" + this.textureCount]);
      e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]);
      if (t.textureData) {
        var i = t.textureData;
        var s = i.magFilter ? i.magFilter : e.LINEAR;
        var n = i.minFilter ? i.minFilter : e.LINEAR;
        var a = i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE;
        var o = i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE;
        var r = i.luminance ? e.LUMINANCE : e.RGBA;
        if (i.repeat) {
          a = e.REPEAT;
          o = e.REPEAT;
        }
        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !!i.flipY);
        if (i.width) {
          var h = i.width ? i.width : 512;
          var l = i.height ? i.height : 2;
          var c = i.border ? i.border : 0;
          e.texImage2D(e.TEXTURE_2D, 0, r, h, l, c, r, e.UNSIGNED_BYTE, null);
        } else {
          e.texImage2D(e.TEXTURE_2D, 0, r, e.RGBA, e.UNSIGNED_BYTE, t.value.baseTexture.source);
        }
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, s);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, a);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, o);
      }
      e.uniform1i(t.uniformLocation, this.textureCount);
      t._init = true;
      this.textureCount++;
    }
  };
  s.PixiShader.prototype.syncUniforms = function () {
    this.textureCount = 1;
    var t;
    var e = this.gl;
    for (var i in this.uniforms) {
      t = this.uniforms[i];
      if (t.glValueLength === 1) {
        if (t.glMatrix === true) {
          t.glFunc.call(e, t.uniformLocation, t.transpose, t.value);
        } else {
          t.glFunc.call(e, t.uniformLocation, t.value);
        }
      } else if (t.glValueLength === 2) {
        t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y);
      } else if (t.glValueLength === 3) {
        t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z);
      } else if (t.glValueLength === 4) {
        t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w);
      } else if (t.type === "sampler2D") {
        if (t._init) {
          e.activeTexture(e["TEXTURE" + this.textureCount]);
          if (t.value.baseTexture._dirty[e.id]) {
            s.instances[e.id].updateTexture(t.value.baseTexture);
          } else {
            e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]);
          }
          e.uniform1i(t.uniformLocation, this.textureCount);
          this.textureCount++;
        } else {
          this.initSampler2D(t);
        }
      }
    }
  };
  s.PixiShader.prototype.destroy = function () {
    this.gl.deleteProgram(this.program);
    this.uniforms = null;
    this.gl = null;
    this.attributes = null;
  };
  s.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"];
  s.PixiFastShader = function (t) {
    this._UID = s._UID++;
    this.gl = t;
    this.program = null;
    this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"];
    this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"];
    this.textureCount = 0;
    this.init();
  };
  s.PixiFastShader.prototype.constructor = s.PixiFastShader;
  s.PixiFastShader.prototype.init = function () {
    var t = this.gl;
    var e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
    t.useProgram(e);
    this.uSampler = t.getUniformLocation(e, "uSampler");
    this.projectionVector = t.getUniformLocation(e, "projectionVector");
    this.offsetVector = t.getUniformLocation(e, "offsetVector");
    this.dimensions = t.getUniformLocation(e, "dimensions");
    this.uMatrix = t.getUniformLocation(e, "uMatrix");
    this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition");
    this.aPositionCoord = t.getAttribLocation(e, "aPositionCoord");
    this.aScale = t.getAttribLocation(e, "aScale");
    this.aRotation = t.getAttribLocation(e, "aRotation");
    this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord");
    this.colorAttribute = t.getAttribLocation(e, "aColor");
    if (this.colorAttribute === -1) {
      this.colorAttribute = 2;
    }
    this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute];
    this.program = e;
  };
  s.PixiFastShader.prototype.destroy = function () {
    this.gl.deleteProgram(this.program);
    this.uniforms = null;
    this.gl = null;
    this.attributes = null;
  };
  s.StripShader = function (t) {
    this._UID = s._UID++;
    this.gl = t;
    this.program = null;
    this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;", "}"];
    this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"];
    this.init();
  };
  s.StripShader.prototype.constructor = s.StripShader;
  s.StripShader.prototype.init = function () {
    var t = this.gl;
    var e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
    t.useProgram(e);
    this.uSampler = t.getUniformLocation(e, "uSampler");
    this.projectionVector = t.getUniformLocation(e, "projectionVector");
    this.offsetVector = t.getUniformLocation(e, "offsetVector");
    this.colorAttribute = t.getAttribLocation(e, "aColor");
    this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition");
    this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord");
    this.attributes = [this.aVertexPosition, this.aTextureCoord];
    this.translationMatrix = t.getUniformLocation(e, "translationMatrix");
    this.alpha = t.getUniformLocation(e, "alpha");
    this.program = e;
  };
  s.StripShader.prototype.destroy = function () {
    this.gl.deleteProgram(this.program);
    this.uniforms = null;
    this.gl = null;
    this.attribute = null;
  };
  s.PrimitiveShader = function (t) {
    this._UID = s._UID++;
    this.gl = t;
    this.program = null;
    this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"];
    this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"];
    this.init();
  };
  s.PrimitiveShader.prototype.constructor = s.PrimitiveShader;
  s.PrimitiveShader.prototype.init = function () {
    var t = this.gl;
    var e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
    t.useProgram(e);
    this.projectionVector = t.getUniformLocation(e, "projectionVector");
    this.offsetVector = t.getUniformLocation(e, "offsetVector");
    this.tintColor = t.getUniformLocation(e, "tint");
    this.flipY = t.getUniformLocation(e, "flipY");
    this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition");
    this.colorAttribute = t.getAttribLocation(e, "aColor");
    this.attributes = [this.aVertexPosition, this.colorAttribute];
    this.translationMatrix = t.getUniformLocation(e, "translationMatrix");
    this.alpha = t.getUniformLocation(e, "alpha");
    this.program = e;
  };
  s.PrimitiveShader.prototype.destroy = function () {
    this.gl.deleteProgram(this.program);
    this.uniforms = null;
    this.gl = null;
    this.attributes = null;
  };
  s.ComplexPrimitiveShader = function (t) {
    this._UID = s._UID++;
    this.gl = t;
    this.program = null;
    this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"];
    this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "uniform float flipY;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"];
    this.init();
  };
  s.ComplexPrimitiveShader.prototype.constructor = s.ComplexPrimitiveShader;
  s.ComplexPrimitiveShader.prototype.init = function () {
    var t = this.gl;
    var e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
    t.useProgram(e);
    this.projectionVector = t.getUniformLocation(e, "projectionVector");
    this.offsetVector = t.getUniformLocation(e, "offsetVector");
    this.tintColor = t.getUniformLocation(e, "tint");
    this.color = t.getUniformLocation(e, "color");
    this.flipY = t.getUniformLocation(e, "flipY");
    this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition");
    this.attributes = [this.aVertexPosition, this.colorAttribute];
    this.translationMatrix = t.getUniformLocation(e, "translationMatrix");
    this.alpha = t.getUniformLocation(e, "alpha");
    this.program = e;
  };
  s.ComplexPrimitiveShader.prototype.destroy = function () {
    this.gl.deleteProgram(this.program);
    this.uniforms = null;
    this.gl = null;
    this.attribute = null;
  };
  s.glContexts = [];
  s.instances = [];
  s.WebGLRenderer = function (t) {
    this.game = t;
    s.defaultRenderer ||= this;
    this.type = s.WEBGL_RENDERER;
    this.resolution = t.resolution;
    this.transparent = t.transparent;
    this.autoResize = false;
    this.preserveDrawingBuffer = t.preserveDrawingBuffer;
    this.clearBeforeRender = t.clearBeforeRender;
    this.width = t.width;
    this.height = t.height;
    this.view = t.canvas;
    this._contextOptions = {
      alpha: this.transparent,
      antialias: t.antialias,
      premultipliedAlpha: this.transparent && this.transparent !== "notMultiplied",
      stencil: true,
      preserveDrawingBuffer: this.preserveDrawingBuffer
    };
    this.projection = new s.Point();
    this.offset = new s.Point();
    this.shaderManager = new s.WebGLShaderManager();
    this.spriteBatch = new s.WebGLSpriteBatch();
    this.maskManager = new s.WebGLMaskManager();
    this.filterManager = new s.WebGLFilterManager();
    this.stencilManager = new s.WebGLStencilManager();
    this.blendModeManager = new s.WebGLBlendModeManager();
    this.renderSession = {};
    this.renderSession.game = this.game;
    this.renderSession.gl = this.gl;
    this.renderSession.drawCount = 0;
    this.renderSession.shaderManager = this.shaderManager;
    this.renderSession.maskManager = this.maskManager;
    this.renderSession.filterManager = this.filterManager;
    this.renderSession.blendModeManager = this.blendModeManager;
    this.renderSession.spriteBatch = this.spriteBatch;
    this.renderSession.stencilManager = this.stencilManager;
    this.renderSession.renderer = this;
    this.renderSession.resolution = this.resolution;
    this.initContext();
    this.mapBlendModes();
  };
  s.WebGLRenderer.prototype.constructor = s.WebGLRenderer;
  s.WebGLRenderer.prototype.initContext = function () {
    var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
    this.gl = t;
    if (!t) {
      throw new Error("This browser does not support webGL. Try using the canvas renderer");
    }
    this.glContextId = t.id = s.WebGLRenderer.glContextId++;
    s.glContexts[this.glContextId] = t;
    s.instances[this.glContextId] = this;
    t.disable(t.DEPTH_TEST);
    t.disable(t.CULL_FACE);
    t.enable(t.BLEND);
    this.shaderManager.setContext(t);
    this.spriteBatch.setContext(t);
    this.maskManager.setContext(t);
    this.filterManager.setContext(t);
    this.blendModeManager.setContext(t);
    this.stencilManager.setContext(t);
    this.renderSession.gl = this.gl;
    this.resize(this.width, this.height);
  };
  s.WebGLRenderer.prototype.render = function (t) {
    if (!this.contextLost) {
      var e = this.gl;
      e.viewport(0, 0, this.width, this.height);
      e.bindFramebuffer(e.FRAMEBUFFER, null);
      if (this.game.clearBeforeRender) {
        e.clearColor(t._bgColor.r, t._bgColor.g, t._bgColor.b, t._bgColor.a);
        e.clear(e.COLOR_BUFFER_BIT);
      }
      this.offset.x = this.game.camera._shake.x;
      this.offset.y = this.game.camera._shake.y;
      this.renderDisplayObject(t, this.projection);
    }
  };
  s.WebGLRenderer.prototype.renderDisplayObject = function (t, e, i, n) {
    this.renderSession.blendModeManager.setBlendMode(s.blendModes.NORMAL);
    this.renderSession.drawCount = 0;
    this.renderSession.flipY = i ? -1 : 1;
    this.renderSession.projection = e;
    this.renderSession.offset = this.offset;
    this.spriteBatch.begin(this.renderSession);
    this.filterManager.begin(this.renderSession, i);
    t._renderWebGL(this.renderSession, n);
    this.spriteBatch.end();
  };
  s.WebGLRenderer.prototype.resize = function (t, e) {
    this.width = t * this.resolution;
    this.height = e * this.resolution;
    this.view.width = this.width;
    this.view.height = this.height;
    if (this.autoResize) {
      this.view.style.width = this.width / this.resolution + "px";
      this.view.style.height = this.height / this.resolution + "px";
    }
    this.gl.viewport(0, 0, this.width, this.height);
    this.projection.x = this.width / 2 / this.resolution;
    this.projection.y = -this.height / 2 / this.resolution;
  };
  s.WebGLRenderer.prototype.updateTexture = function (t) {
    if (!t.hasLoaded) {
      return false;
    }
    var e = this.gl;
    t._glTextures[e.id] ||= e.createTexture();
    e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]);
    e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha);
    e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === s.scaleModes.LINEAR ? e.LINEAR : e.NEAREST);
    if (t.mipmap && s.isPowerOfTwo(t.width, t.height)) {
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === s.scaleModes.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST);
      e.generateMipmap(e.TEXTURE_2D);
    } else {
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === s.scaleModes.LINEAR ? e.LINEAR : e.NEAREST);
    }
    if (t._powerOf2) {
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT);
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT);
    } else {
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
    }
    t._dirty[e.id] = false;
    return true;
  };
  s.WebGLRenderer.prototype.destroy = function () {
    s.glContexts[this.glContextId] = null;
    this.projection = null;
    this.offset = null;
    this.shaderManager.destroy();
    this.spriteBatch.destroy();
    this.maskManager.destroy();
    this.filterManager.destroy();
    this.shaderManager = null;
    this.spriteBatch = null;
    this.maskManager = null;
    this.filterManager = null;
    this.gl = null;
    this.renderSession = null;
    s.CanvasPool.remove(this);
    s.instances[this.glContextId] = null;
    s.WebGLRenderer.glContextId--;
  };
  s.WebGLRenderer.prototype.mapBlendModes = function () {
    var t = this.gl;
    if (!s.blendModesWebGL) {
      var e = [];
      var i = s.blendModes;
      e[i.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.ADD] = [t.SRC_ALPHA, t.DST_ALPHA];
      e[i.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA];
      e[i.SCREEN] = [t.SRC_ALPHA, t.ONE];
      e[i.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      e[i.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA];
      s.blendModesWebGL = e;
    }
  };
  s.WebGLRenderer.glContextId = 0;
  s.WebGLBlendModeManager = function () {
    this.currentBlendMode = 99999;
  };
  s.WebGLBlendModeManager.prototype.constructor = s.WebGLBlendModeManager;
  s.WebGLBlendModeManager.prototype.setContext = function (t) {
    this.gl = t;
  };
  s.WebGLBlendModeManager.prototype.setBlendMode = function (t) {
    if (this.currentBlendMode === t) {
      return false;
    }
    this.currentBlendMode = t;
    var e = s.blendModesWebGL[this.currentBlendMode];
    if (e) {
      this.gl.blendFunc(e[0], e[1]);
    }
    return true;
  };
  s.WebGLBlendModeManager.prototype.destroy = function () {
    this.gl = null;
  };
  s.WebGLMaskManager = function () {};
  s.WebGLMaskManager.prototype.constructor = s.WebGLMaskManager;
  s.WebGLMaskManager.prototype.setContext = function (t) {
    this.gl = t;
  };
  s.WebGLMaskManager.prototype.pushMask = function (t, e) {
    var i = e.gl;
    if (t.dirty) {
      s.WebGLGraphics.updateGraphics(t, i);
    }
    if (t._webGL[i.id] !== undefined && t._webGL[i.id].data !== undefined && t._webGL[i.id].data.length !== 0) {
      e.stencilManager.pushStencil(t, t._webGL[i.id].data[0], e);
    }
  };
  s.WebGLMaskManager.prototype.popMask = function (t, e) {
    var i = this.gl;
    if (t._webGL[i.id] !== undefined && t._webGL[i.id].data !== undefined && t._webGL[i.id].data.length !== 0) {
      e.stencilManager.popStencil(t, t._webGL[i.id].data[0], e);
    }
  };
  s.WebGLMaskManager.prototype.destroy = function () {
    this.gl = null;
  };
  s.WebGLStencilManager = function () {
    this.stencilStack = [];
    this.reverse = true;
    this.count = 0;
  };
  s.WebGLStencilManager.prototype.setContext = function (t) {
    this.gl = t;
  };
  s.WebGLStencilManager.prototype.pushStencil = function (t, e, i) {
    var s = this.gl;
    this.bindGraphics(t, e, i);
    if (this.stencilStack.length === 0) {
      s.enable(s.STENCIL_TEST);
      s.clear(s.STENCIL_BUFFER_BIT);
      this.reverse = true;
      this.count = 0;
    }
    this.stencilStack.push(e);
    var n = this.count;
    s.colorMask(false, false, false, false);
    s.stencilFunc(s.ALWAYS, 0, 255);
    s.stencilOp(s.KEEP, s.KEEP, s.INVERT);
    if (e.mode === 1) {
      s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0);
      if (this.reverse) {
        s.stencilFunc(s.EQUAL, 255 - n, 255);
        s.stencilOp(s.KEEP, s.KEEP, s.DECR);
      } else {
        s.stencilFunc(s.EQUAL, n, 255);
        s.stencilOp(s.KEEP, s.KEEP, s.INCR);
      }
      s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, (e.indices.length - 4) * 2);
      if (this.reverse) {
        s.stencilFunc(s.EQUAL, 255 - (n + 1), 255);
      } else {
        s.stencilFunc(s.EQUAL, n + 1, 255);
      }
      this.reverse = !this.reverse;
    } else {
      if (this.reverse) {
        s.stencilFunc(s.EQUAL, n, 255);
        s.stencilOp(s.KEEP, s.KEEP, s.INCR);
      } else {
        s.stencilFunc(s.EQUAL, 255 - n, 255);
        s.stencilOp(s.KEEP, s.KEEP, s.DECR);
      }
      s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0);
      if (this.reverse) {
        s.stencilFunc(s.EQUAL, n + 1, 255);
      } else {
        s.stencilFunc(s.EQUAL, 255 - (n + 1), 255);
      }
    }
    s.colorMask(true, true, true, true);
    s.stencilOp(s.KEEP, s.KEEP, s.KEEP);
    this.count++;
  };
  s.WebGLStencilManager.prototype.bindGraphics = function (t, e, i) {
    this._currentGraphics = t;
    var n = this.gl;
    var a = i.projection;
    var o = i.offset;
    var r;
    if (e.mode === 1) {
      r = i.shaderManager.complexPrimitiveShader;
      i.shaderManager.setShader(r);
      n.uniform1f(r.flipY, i.flipY);
      n.uniformMatrix3fv(r.translationMatrix, false, t.worldTransform.toArray(true));
      n.uniform2f(r.projectionVector, a.x, -a.y);
      n.uniform2f(r.offsetVector, -o.x, -o.y);
      n.uniform3fv(r.tintColor, s.hex2rgb(t.tint));
      n.uniform3fv(r.color, e.color);
      n.uniform1f(r.alpha, t.worldAlpha * e.alpha);
      n.bindBuffer(n.ARRAY_BUFFER, e.buffer);
      n.vertexAttribPointer(r.aVertexPosition, 2, n.FLOAT, false, 8, 0);
      n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer);
    } else {
      r = i.shaderManager.primitiveShader;
      i.shaderManager.setShader(r);
      n.uniformMatrix3fv(r.translationMatrix, false, t.worldTransform.toArray(true));
      n.uniform1f(r.flipY, i.flipY);
      n.uniform2f(r.projectionVector, a.x, -a.y);
      n.uniform2f(r.offsetVector, -o.x, -o.y);
      n.uniform3fv(r.tintColor, s.hex2rgb(t.tint));
      n.uniform1f(r.alpha, t.worldAlpha);
      n.bindBuffer(n.ARRAY_BUFFER, e.buffer);
      n.vertexAttribPointer(r.aVertexPosition, 2, n.FLOAT, false, 24, 0);
      n.vertexAttribPointer(r.colorAttribute, 4, n.FLOAT, false, 24, 8);
      n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer);
    }
  };
  s.WebGLStencilManager.prototype.popStencil = function (t, e, i) {
    var s = this.gl;
    this.stencilStack.pop();
    this.count--;
    if (this.stencilStack.length === 0) {
      s.disable(s.STENCIL_TEST);
    } else {
      var n = this.count;
      this.bindGraphics(t, e, i);
      s.colorMask(false, false, false, false);
      if (e.mode === 1) {
        this.reverse = !this.reverse;
        if (this.reverse) {
          s.stencilFunc(s.EQUAL, 255 - (n + 1), 255);
          s.stencilOp(s.KEEP, s.KEEP, s.INCR);
        } else {
          s.stencilFunc(s.EQUAL, n + 1, 255);
          s.stencilOp(s.KEEP, s.KEEP, s.DECR);
        }
        s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, (e.indices.length - 4) * 2);
        s.stencilFunc(s.ALWAYS, 0, 255);
        s.stencilOp(s.KEEP, s.KEEP, s.INVERT);
        s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0);
        if (this.reverse) {
          s.stencilFunc(s.EQUAL, n, 255);
        } else {
          s.stencilFunc(s.EQUAL, 255 - n, 255);
        }
      } else {
        if (this.reverse) {
          s.stencilFunc(s.EQUAL, n + 1, 255);
          s.stencilOp(s.KEEP, s.KEEP, s.DECR);
        } else {
          s.stencilFunc(s.EQUAL, 255 - (n + 1), 255);
          s.stencilOp(s.KEEP, s.KEEP, s.INCR);
        }
        s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0);
        if (this.reverse) {
          s.stencilFunc(s.EQUAL, n, 255);
        } else {
          s.stencilFunc(s.EQUAL, 255 - n, 255);
        }
      }
      s.colorMask(true, true, true, true);
      s.stencilOp(s.KEEP, s.KEEP, s.KEEP);
    }
  };
  s.WebGLStencilManager.prototype.destroy = function () {
    this.stencilStack = null;
    this.gl = null;
  };
  s.WebGLShaderManager = function () {
    this.maxAttibs = 10;
    this.attribState = [];
    this.tempAttribState = [];
    for (var t = 0; t < this.maxAttibs; t++) {
      this.attribState[t] = false;
    }
    this.stack = [];
  };
  s.WebGLShaderManager.prototype.constructor = s.WebGLShaderManager;
  s.WebGLShaderManager.prototype.setContext = function (t) {
    this.gl = t;
    this.primitiveShader = new s.PrimitiveShader(t);
    this.complexPrimitiveShader = new s.ComplexPrimitiveShader(t);
    this.defaultShader = new s.PixiShader(t);
    this.fastShader = new s.PixiFastShader(t);
    this.stripShader = new s.StripShader(t);
    this.setShader(this.defaultShader);
  };
  s.WebGLShaderManager.prototype.setAttribs = function (t) {
    var e;
    for (e = 0; e < this.tempAttribState.length; e++) {
      this.tempAttribState[e] = false;
    }
    for (e = 0; e < t.length; e++) {
      var i = t[e];
      this.tempAttribState[i] = true;
    }
    var s = this.gl;
    for (e = 0; e < this.attribState.length; e++) {
      if (this.attribState[e] !== this.tempAttribState[e]) {
        this.attribState[e] = this.tempAttribState[e];
        if (this.tempAttribState[e]) {
          s.enableVertexAttribArray(e);
        } else {
          s.disableVertexAttribArray(e);
        }
      }
    }
  };
  s.WebGLShaderManager.prototype.setShader = function (t) {
    return this._currentId !== t._UID && (this._currentId = t._UID, this.currentShader = t, this.gl.useProgram(t.program), this.setAttribs(t.attributes), true);
  };
  s.WebGLShaderManager.prototype.destroy = function () {
    this.attribState = null;
    this.tempAttribState = null;
    this.primitiveShader.destroy();
    this.complexPrimitiveShader.destroy();
    this.defaultShader.destroy();
    this.fastShader.destroy();
    this.stripShader.destroy();
    this.gl = null;
  };
  s.WebGLSpriteBatch = function () {
    this.vertSize = 5;
    this.size = 2000;
    var t = this.size * 4 * 4 * this.vertSize;
    var e = this.size * 6;
    this.vertices = new s.ArrayBuffer(t);
    this.positions = new s.Float32Array(this.vertices);
    this.colors = new s.Uint32Array(this.vertices);
    this.indices = new s.Uint16Array(e);
    this.lastIndexCount = 0;
    for (var i = 0, n = 0; i < e; i += 6, n += 4) {
      this.indices[i + 0] = n + 0;
      this.indices[i + 1] = n + 1;
      this.indices[i + 2] = n + 2;
      this.indices[i + 3] = n + 0;
      this.indices[i + 4] = n + 2;
      this.indices[i + 5] = n + 3;
    }
    this.drawing = false;
    this.currentBatchSize = 0;
    this.currentBaseTexture = null;
    this.dirty = true;
    this.textures = [];
    this.blendModes = [];
    this.shaders = [];
    this.sprites = [];
    this.defaultShader = new s.AbstractFilter(["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"]);
  };
  s.WebGLSpriteBatch.prototype.setContext = function (t) {
    this.gl = t;
    this.vertexBuffer = t.createBuffer();
    this.indexBuffer = t.createBuffer();
    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW);
    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
    t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW);
    this.currentBlendMode = 99999;
    var e = new s.PixiShader(t);
    e.fragmentSrc = this.defaultShader.fragmentSrc;
    e.uniforms = {};
    e.init();
    this.defaultShader.shaders[t.id] = e;
  };
  s.WebGLSpriteBatch.prototype.begin = function (t) {
    this.renderSession = t;
    this.shader = this.renderSession.shaderManager.defaultShader;
    this.start();
  };
  s.WebGLSpriteBatch.prototype.end = function () {
    this.flush();
  };
  s.WebGLSpriteBatch.prototype.render = function (t, e) {
    var i = t.texture;
    var s = t.worldTransform;
    if (e) {
      s = e;
    }
    if (this.currentBatchSize >= this.size) {
      this.flush();
      this.currentBaseTexture = i.baseTexture;
    }
    var n = i._uvs;
    if (n) {
      var a = t.anchor.x;
      var o = t.anchor.y;
      var r;
      var h;
      var l;
      var c;
      if (i.trim) {
        var u = i.trim;
        h = u.x - a * u.width;
        r = h + i.crop.width;
        c = u.y - o * u.height;
        l = c + i.crop.height;
      } else {
        r = i.frame.width * (1 - a);
        h = i.frame.width * -a;
        l = i.frame.height * (1 - o);
        c = i.frame.height * -o;
      }
      var d = this.currentBatchSize * 4 * this.vertSize;
      var p = i.baseTexture.resolution;
      var f = s.a / p;
      var g = s.b / p;
      var m = s.c / p;
      var y = s.d / p;
      var v = s.tx;
      var b = s.ty;
      var _ = this.colors;
      var x = this.positions;
      if (this.renderSession.roundPixels) {
        x[d] = f * h + m * c + v | 0;
        x[d + 1] = y * c + g * h + b | 0;
        x[d + 5] = f * r + m * c + v | 0;
        x[d + 6] = y * c + g * r + b | 0;
        x[d + 10] = f * r + m * l + v | 0;
        x[d + 11] = y * l + g * r + b | 0;
        x[d + 15] = f * h + m * l + v | 0;
        x[d + 16] = y * l + g * h + b | 0;
      } else {
        x[d] = f * h + m * c + v;
        x[d + 1] = y * c + g * h + b;
        x[d + 5] = f * r + m * c + v;
        x[d + 6] = y * c + g * r + b;
        x[d + 10] = f * r + m * l + v;
        x[d + 11] = y * l + g * r + b;
        x[d + 15] = f * h + m * l + v;
        x[d + 16] = y * l + g * h + b;
      }
      x[d + 2] = n.x0;
      x[d + 3] = n.y0;
      x[d + 7] = n.x1;
      x[d + 8] = n.y1;
      x[d + 12] = n.x2;
      x[d + 13] = n.y2;
      x[d + 17] = n.x3;
      x[d + 18] = n.y3;
      var w = t.tint;
      _[d + 4] = _[d + 9] = _[d + 14] = _[d + 19] = (w >> 16) + (w & 65280) + ((w & 255) << 16) + (t.worldAlpha * 255 << 24);
      this.sprites[this.currentBatchSize++] = t;
    }
  };
  s.WebGLSpriteBatch.prototype.renderTilingSprite = function (t) {
    var e = t.tilingTexture;
    if (this.currentBatchSize >= this.size) {
      this.flush();
      this.currentBaseTexture = e.baseTexture;
    }
    t._uvs ||= new s.TextureUvs();
    var i = t._uvs;
    var n = e.baseTexture.width;
    var a = e.baseTexture.height;
    t.tilePosition.x %= n * t.tileScaleOffset.x;
    t.tilePosition.y %= a * t.tileScaleOffset.y;
    var o = t.tilePosition.x / (n * t.tileScaleOffset.x);
    var r = t.tilePosition.y / (a * t.tileScaleOffset.y);
    var h = t.width / n / (t.tileScale.x * t.tileScaleOffset.x);
    var l = t.height / a / (t.tileScale.y * t.tileScaleOffset.y);
    i.x0 = 0 - o;
    i.y0 = 0 - r;
    i.x1 = h * 1 - o;
    i.y1 = 0 - r;
    i.x2 = h * 1 - o;
    i.y2 = l * 1 - r;
    i.x3 = 0 - o;
    i.y3 = l * 1 - r;
    var c = t.tint;
    var u = (c >> 16) + (c & 65280) + ((c & 255) << 16) + (t.worldAlpha * 255 << 24);
    var d = this.positions;
    var p = this.colors;
    var f = t.width;
    var g = t.height;
    var m = t.anchor.x;
    var y = t.anchor.y;
    var v = f * (1 - m);
    var b = f * -m;
    var _ = g * (1 - y);
    var x = g * -y;
    var w = this.currentBatchSize * 4 * this.vertSize;
    var P = e.baseTexture.resolution;
    var T = t.worldTransform;
    var S = T.a / P;
    var C = T.b / P;
    var A = T.c / P;
    var E = T.d / P;
    var I = T.tx;
    var B = T.ty;
    d[w++] = S * b + A * x + I;
    d[w++] = E * x + C * b + B;
    d[w++] = i.x0;
    d[w++] = i.y0;
    p[w++] = u;
    d[w++] = S * v + A * x + I;
    d[w++] = E * x + C * v + B;
    d[w++] = i.x1;
    d[w++] = i.y1;
    p[w++] = u;
    d[w++] = S * v + A * _ + I;
    d[w++] = E * _ + C * v + B;
    d[w++] = i.x2;
    d[w++] = i.y2;
    p[w++] = u;
    d[w++] = S * b + A * _ + I;
    d[w++] = E * _ + C * b + B;
    d[w++] = i.x3;
    d[w++] = i.y3;
    p[w++] = u;
    this.sprites[this.currentBatchSize++] = t;
  };
  s.WebGLSpriteBatch.prototype.flush = function () {
    if (this.currentBatchSize !== 0) {
      var t = this.gl;
      var e;
      if (this.dirty) {
        this.dirty = false;
        t.activeTexture(t.TEXTURE0);
        t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        e = this.defaultShader.shaders[t.id];
        var i = this.vertSize * 4;
        t.vertexAttribPointer(e.aVertexPosition, 2, t.FLOAT, false, i, 0);
        t.vertexAttribPointer(e.aTextureCoord, 2, t.FLOAT, false, i, 8);
        t.vertexAttribPointer(e.colorAttribute, 4, t.UNSIGNED_BYTE, true, i, 16);
      }
      if (this.currentBatchSize > this.size * 0.5) {
        t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
      } else {
        var n = this.positions.subarray(0, this.currentBatchSize * 4 * this.vertSize);
        t.bufferSubData(t.ARRAY_BUFFER, 0, n);
      }
      var a;
      var o;
      var r;
      var h = 0;
      var l = 0;
      var c = null;
      var u = this.renderSession.blendModeManager.currentBlendMode;
      var d = null;
      var p = false;
      var f = false;
      var g;
      for (var m = 0, y = this.currentBatchSize; m < y; m++) {
        g = this.sprites[m];
        a = g.tilingTexture ? g.tilingTexture.baseTexture : g.texture.baseTexture;
        o = g.blendMode;
        r = g.shader || this.defaultShader;
        p = u !== o;
        f = d !== r;
        var v = a.skipRender;
        if (v && g.children.length > 0) {
          v = false;
        }
        if ((c !== a && !v || p || f) && (this.renderBatch(c, h, l), l = m, h = 0, c = a, p && (u = o, this.renderSession.blendModeManager.setBlendMode(u)), f)) {
          d = r;
          e = d.shaders[t.id];
          if (!e) {
            e = new s.PixiShader(t);
            e.fragmentSrc = d.fragmentSrc;
            e.uniforms = d.uniforms;
            e.init();
            d.shaders[t.id] = e;
          }
          this.renderSession.shaderManager.setShader(e);
          if (e.dirty) {
            e.syncUniforms();
          }
          var b = this.renderSession.projection;
          t.uniform2f(e.projectionVector, b.x, b.y);
          var _ = this.renderSession.offset;
          t.uniform2f(e.offsetVector, _.x, _.y);
        }
        h++;
      }
      this.renderBatch(c, h, l);
      this.currentBatchSize = 0;
    }
  };
  s.WebGLSpriteBatch.prototype.renderBatch = function (t, e, i) {
    if (e !== 0) {
      var s = this.gl;
      if (t._dirty[s.id]) {
        if (!this.renderSession.renderer.updateTexture(t)) {
          return;
        }
      } else {
        s.bindTexture(s.TEXTURE_2D, t._glTextures[s.id]);
      }
      s.drawElements(s.TRIANGLES, e * 6, s.UNSIGNED_SHORT, i * 6 * 2);
      this.renderSession.drawCount++;
    }
  };
  s.WebGLSpriteBatch.prototype.stop = function () {
    this.flush();
    this.dirty = true;
  };
  s.WebGLSpriteBatch.prototype.start = function () {
    this.dirty = true;
  };
  s.WebGLSpriteBatch.prototype.destroy = function () {
    this.vertices = null;
    this.indices = null;
    this.gl.deleteBuffer(this.vertexBuffer);
    this.gl.deleteBuffer(this.indexBuffer);
    this.currentBaseTexture = null;
    this.gl = null;
  };
  s.WebGLFastSpriteBatch = function (t) {
    this.vertSize = 10;
    this.maxSize = 6000;
    this.size = this.maxSize;
    var e = this.size * 4 * this.vertSize;
    var i = this.maxSize * 6;
    this.vertices = new s.Float32Array(e);
    this.indices = new s.Uint16Array(i);
    this.vertexBuffer = null;
    this.indexBuffer = null;
    this.lastIndexCount = 0;
    for (var n = 0, a = 0; n < i; n += 6, a += 4) {
      this.indices[n + 0] = a + 0;
      this.indices[n + 1] = a + 1;
      this.indices[n + 2] = a + 2;
      this.indices[n + 3] = a + 0;
      this.indices[n + 4] = a + 2;
      this.indices[n + 5] = a + 3;
    }
    this.drawing = false;
    this.currentBatchSize = 0;
    this.currentBaseTexture = null;
    this.currentBlendMode = 0;
    this.renderSession = null;
    this.shader = null;
    this.matrix = null;
    this.setContext(t);
  };
  s.WebGLFastSpriteBatch.prototype.constructor = s.WebGLFastSpriteBatch;
  s.WebGLFastSpriteBatch.prototype.setContext = function (t) {
    this.gl = t;
    this.vertexBuffer = t.createBuffer();
    this.indexBuffer = t.createBuffer();
    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW);
    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
    t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW);
  };
  s.WebGLFastSpriteBatch.prototype.begin = function (t, e) {
    this.renderSession = e;
    this.shader = this.renderSession.shaderManager.fastShader;
    this.matrix = t.worldTransform.toArray(true);
    this.start();
  };
  s.WebGLFastSpriteBatch.prototype.end = function () {
    this.flush();
  };
  s.WebGLFastSpriteBatch.prototype.render = function (t) {
    var e = t.children;
    var i = e[0];
    if (i.texture._uvs) {
      this.currentBaseTexture = i.texture.baseTexture;
      if (i.blendMode !== this.renderSession.blendModeManager.currentBlendMode) {
        this.flush();
        this.renderSession.blendModeManager.setBlendMode(i.blendMode);
      }
      for (var s = 0, n = e.length; s < n; s++) {
        this.renderSprite(e[s]);
      }
      this.flush();
    }
  };
  s.WebGLFastSpriteBatch.prototype.renderSprite = function (t) {
    if (t.visible && (t.texture.baseTexture === this.currentBaseTexture || t.texture.baseTexture.skipRender || (this.flush(), this.currentBaseTexture = t.texture.baseTexture, t.texture._uvs))) {
      var e;
      var i = this.vertices;
      var s;
      var n;
      var a;
      var o;
      var r;
      var h;
      var l;
      e = t.texture._uvs;
      s = t.texture.frame.width;
      n = t.texture.frame.height;
      if (t.texture.trim) {
        var c = t.texture.trim;
        o = c.x - t.anchor.x * c.width;
        a = o + t.texture.crop.width;
        h = c.y - t.anchor.y * c.height;
        r = h + t.texture.crop.height;
      } else {
        a = t.texture.frame.width * (1 - t.anchor.x);
        o = t.texture.frame.width * -t.anchor.x;
        r = t.texture.frame.height * (1 - t.anchor.y);
        h = t.texture.frame.height * -t.anchor.y;
      }
      l = this.currentBatchSize * 4 * this.vertSize;
      i[l++] = o;
      i[l++] = h;
      i[l++] = t.position.x;
      i[l++] = t.position.y;
      i[l++] = t.scale.x;
      i[l++] = t.scale.y;
      i[l++] = t.rotation;
      i[l++] = e.x0;
      i[l++] = e.y1;
      i[l++] = t.alpha;
      i[l++] = a;
      i[l++] = h;
      i[l++] = t.position.x;
      i[l++] = t.position.y;
      i[l++] = t.scale.x;
      i[l++] = t.scale.y;
      i[l++] = t.rotation;
      i[l++] = e.x1;
      i[l++] = e.y1;
      i[l++] = t.alpha;
      i[l++] = a;
      i[l++] = r;
      i[l++] = t.position.x;
      i[l++] = t.position.y;
      i[l++] = t.scale.x;
      i[l++] = t.scale.y;
      i[l++] = t.rotation;
      i[l++] = e.x2;
      i[l++] = e.y2;
      i[l++] = t.alpha;
      i[l++] = o;
      i[l++] = r;
      i[l++] = t.position.x;
      i[l++] = t.position.y;
      i[l++] = t.scale.x;
      i[l++] = t.scale.y;
      i[l++] = t.rotation;
      i[l++] = e.x3;
      i[l++] = e.y3;
      i[l++] = t.alpha;
      this.currentBatchSize++;
      if (this.currentBatchSize >= this.size) {
        this.flush();
      }
    }
  };
  s.WebGLFastSpriteBatch.prototype.flush = function () {
    if (this.currentBatchSize !== 0) {
      var t = this.gl;
      if (!this.currentBaseTexture._glTextures[t.id]) {
        this.renderSession.renderer.updateTexture(this.currentBaseTexture, t);
      }
      t.bindTexture(t.TEXTURE_2D, this.currentBaseTexture._glTextures[t.id]);
      if (this.currentBatchSize > this.size * 0.5) {
        t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
      } else {
        var e = this.vertices.subarray(0, this.currentBatchSize * 4 * this.vertSize);
        t.bufferSubData(t.ARRAY_BUFFER, 0, e);
      }
      t.drawElements(t.TRIANGLES, this.currentBatchSize * 6, t.UNSIGNED_SHORT, 0);
      this.currentBatchSize = 0;
      this.renderSession.drawCount++;
    }
  };
  s.WebGLFastSpriteBatch.prototype.stop = function () {
    this.flush();
  };
  s.WebGLFastSpriteBatch.prototype.start = function () {
    var t = this.gl;
    t.activeTexture(t.TEXTURE0);
    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    var e = this.renderSession.projection;
    t.uniform2f(this.shader.projectionVector, e.x, e.y);
    t.uniformMatrix3fv(this.shader.uMatrix, false, this.matrix);
    var i = this.vertSize * 4;
    t.vertexAttribPointer(this.shader.aVertexPosition, 2, t.FLOAT, false, i, 0);
    t.vertexAttribPointer(this.shader.aPositionCoord, 2, t.FLOAT, false, i, 8);
    t.vertexAttribPointer(this.shader.aScale, 2, t.FLOAT, false, i, 16);
    t.vertexAttribPointer(this.shader.aRotation, 1, t.FLOAT, false, i, 24);
    t.vertexAttribPointer(this.shader.aTextureCoord, 2, t.FLOAT, false, i, 28);
    t.vertexAttribPointer(this.shader.colorAttribute, 1, t.FLOAT, false, i, 36);
  };
  s.WebGLFilterManager = function () {
    this.filterStack = [];
    this.offsetX = 0;
    this.offsetY = 0;
  };
  s.WebGLFilterManager.prototype.constructor = s.WebGLFilterManager;
  s.WebGLFilterManager.prototype.setContext = function (t) {
    this.gl = t;
    this.texturePool = [];
    this.initShaderBuffers();
  };
  s.WebGLFilterManager.prototype.begin = function (t, e) {
    this.renderSession = t;
    this.defaultShader = t.shaderManager.defaultShader;
    var i = this.renderSession.projection;
    this.width = i.x * 2;
    this.height = -i.y * 2;
    this.buffer = e;
  };
  s.WebGLFilterManager.prototype.pushFilter = function (t) {
    var e = this.gl;
    var i = this.renderSession.projection;
    var n = this.renderSession.offset;
    t._filterArea = t.target.filterArea || t.target.getBounds();
    t._previous_stencil_mgr = this.renderSession.stencilManager;
    this.renderSession.stencilManager = new s.WebGLStencilManager();
    this.renderSession.stencilManager.setContext(e);
    e.disable(e.STENCIL_TEST);
    this.filterStack.push(t);
    var a = t.filterPasses[0];
    this.offsetX += t._filterArea.x;
    this.offsetY += t._filterArea.y;
    var o = this.texturePool.pop();
    if (o) {
      o.resize(this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);
    } else {
      o = new s.FilterTexture(this.gl, this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);
    }
    e.bindTexture(e.TEXTURE_2D, o.texture);
    var r = t._filterArea;
    var h = a.padding;
    r.x -= h;
    r.y -= h;
    r.width += h * 2;
    r.height += h * 2;
    if (r.x < 0) {
      r.x = 0;
    }
    if (r.width > this.width) {
      r.width = this.width;
    }
    if (r.y < 0) {
      r.y = 0;
    }
    if (r.height > this.height) {
      r.height = this.height;
    }
    e.bindFramebuffer(e.FRAMEBUFFER, o.frameBuffer);
    e.viewport(0, 0, r.width * this.renderSession.resolution, r.height * this.renderSession.resolution);
    i.x = r.width / 2;
    i.y = -r.height / 2;
    n.x = -r.x;
    n.y = -r.y;
    e.colorMask(true, true, true, true);
    e.clearColor(0, 0, 0, 0);
    e.clear(e.COLOR_BUFFER_BIT);
    t._glFilterTexture = o;
  };
  s.WebGLFilterManager.prototype.popFilter = function () {
    var t = this.gl;
    var e = this.filterStack.pop();
    var i = e._filterArea;
    var n = e._glFilterTexture;
    var a = this.renderSession.projection;
    var o = this.renderSession.offset;
    if (e.filterPasses.length > 1) {
      t.viewport(0, 0, i.width * this.renderSession.resolution, i.height * this.renderSession.resolution);
      t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
      this.vertexArray[0] = 0;
      this.vertexArray[1] = i.height;
      this.vertexArray[2] = i.width;
      this.vertexArray[3] = i.height;
      this.vertexArray[4] = 0;
      this.vertexArray[5] = 0;
      this.vertexArray[6] = i.width;
      this.vertexArray[7] = 0;
      t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray);
      t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer);
      this.uvArray[2] = i.width / this.width;
      this.uvArray[5] = i.height / this.height;
      this.uvArray[6] = i.width / this.width;
      this.uvArray[7] = i.height / this.height;
      t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
      var r = n;
      var h = this.texturePool.pop();
      h ||= new s.FilterTexture(this.gl, this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);
      h.resize(this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);
      t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer);
      t.clear(t.COLOR_BUFFER_BIT);
      t.disable(t.BLEND);
      for (var l = 0; l < e.filterPasses.length - 1; l++) {
        var c = e.filterPasses[l];
        t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer);
        t.activeTexture(t.TEXTURE0);
        t.bindTexture(t.TEXTURE_2D, r.texture);
        this.applyFilterPass(c, i, i.width, i.height);
        var u = r;
        r = h;
        h = u;
      }
      t.enable(t.BLEND);
      n = r;
      this.texturePool.push(h);
    }
    var d = e.filterPasses[e.filterPasses.length - 1];
    this.offsetX -= i.x;
    this.offsetY -= i.y;
    var p = this.width;
    var f = this.height;
    var g = 0;
    var m = 0;
    var y = this.buffer;
    if (this.filterStack.length === 0) {
      t.colorMask(true, true, true, true);
    } else {
      var v = this.filterStack[this.filterStack.length - 1];
      i = v._filterArea;
      p = i.width;
      f = i.height;
      g = i.x;
      m = i.y;
      y = v._glFilterTexture.frameBuffer;
    }
    a.x = p / 2;
    a.y = -f / 2;
    o.x = g;
    o.y = m;
    i = e._filterArea;
    var b = i.x - g;
    var _ = i.y - m;
    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
    this.vertexArray[0] = b;
    this.vertexArray[1] = _ + i.height;
    this.vertexArray[2] = b + i.width;
    this.vertexArray[3] = _ + i.height;
    this.vertexArray[4] = b;
    this.vertexArray[5] = _;
    this.vertexArray[6] = b + i.width;
    this.vertexArray[7] = _;
    t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray);
    t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer);
    this.uvArray[2] = i.width / this.width;
    this.uvArray[5] = i.height / this.height;
    this.uvArray[6] = i.width / this.width;
    this.uvArray[7] = i.height / this.height;
    t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
    t.viewport(0, 0, p * this.renderSession.resolution, f * this.renderSession.resolution);
    t.bindFramebuffer(t.FRAMEBUFFER, y);
    t.activeTexture(t.TEXTURE0);
    t.bindTexture(t.TEXTURE_2D, n.texture);
    if (this.renderSession.stencilManager) {
      this.renderSession.stencilManager.destroy();
    }
    this.renderSession.stencilManager = e._previous_stencil_mgr;
    e._previous_stencil_mgr = null;
    if (this.renderSession.stencilManager.count > 0) {
      t.enable(t.STENCIL_TEST);
    } else {
      t.disable(t.STENCIL_TEST);
    }
    this.applyFilterPass(d, i, p, f);
    this.texturePool.push(n);
    e._glFilterTexture = null;
  };
  s.WebGLFilterManager.prototype.applyFilterPass = function (t, e, i, n) {
    var a = this.gl;
    var o = t.shaders[a.id];
    if (!o) {
      o = new s.PixiShader(a);
      o.fragmentSrc = t.fragmentSrc;
      o.uniforms = t.uniforms;
      o.init();
      t.shaders[a.id] = o;
    }
    this.renderSession.shaderManager.setShader(o);
    a.uniform2f(o.projectionVector, i / 2, -n / 2);
    a.uniform2f(o.offsetVector, 0, 0);
    if (t.uniforms.dimensions) {
      t.uniforms.dimensions.value[0] = this.width;
      t.uniforms.dimensions.value[1] = this.height;
      t.uniforms.dimensions.value[2] = this.vertexArray[0];
      t.uniforms.dimensions.value[3] = this.vertexArray[5];
    }
    o.syncUniforms();
    a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
    a.vertexAttribPointer(o.aVertexPosition, 2, a.FLOAT, false, 0, 0);
    a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer);
    a.vertexAttribPointer(o.aTextureCoord, 2, a.FLOAT, false, 0, 0);
    a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer);
    a.vertexAttribPointer(o.colorAttribute, 2, a.FLOAT, false, 0, 0);
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0);
    this.renderSession.drawCount++;
  };
  s.WebGLFilterManager.prototype.initShaderBuffers = function () {
    var t = this.gl;
    this.vertexBuffer = t.createBuffer();
    this.uvBuffer = t.createBuffer();
    this.colorBuffer = t.createBuffer();
    this.indexBuffer = t.createBuffer();
    this.vertexArray = new s.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer);
    t.bufferData(t.ARRAY_BUFFER, this.vertexArray, t.STATIC_DRAW);
    this.uvArray = new s.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
    t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer);
    t.bufferData(t.ARRAY_BUFFER, this.uvArray, t.STATIC_DRAW);
    this.colorArray = new s.Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]);
    t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer);
    t.bufferData(t.ARRAY_BUFFER, this.colorArray, t.STATIC_DRAW);
    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW);
  };
  s.WebGLFilterManager.prototype.destroy = function () {
    var t = this.gl;
    this.filterStack = null;
    this.offsetX = 0;
    this.offsetY = 0;
    for (var e = 0; e < this.texturePool.length; e++) {
      this.texturePool[e].destroy();
    }
    this.texturePool = null;
    t.deleteBuffer(this.vertexBuffer);
    t.deleteBuffer(this.uvBuffer);
    t.deleteBuffer(this.colorBuffer);
    t.deleteBuffer(this.indexBuffer);
  };
  s.FilterTexture = function (t, e, i, n) {
    this.gl = t;
    this.frameBuffer = t.createFramebuffer();
    this.texture = t.createTexture();
    n = n || s.scaleModes.DEFAULT;
    t.bindTexture(t.TEXTURE_2D, this.texture);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, n === s.scaleModes.LINEAR ? t.LINEAR : t.NEAREST);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n === s.scaleModes.LINEAR ? t.LINEAR : t.NEAREST);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE);
    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
    t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer);
    t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer);
    t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0);
    this.renderBuffer = t.createRenderbuffer();
    t.bindRenderbuffer(t.RENDERBUFFER, this.renderBuffer);
    t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.renderBuffer);
    this.resize(e, i);
  };
  s.FilterTexture.prototype.constructor = s.FilterTexture;
  s.FilterTexture.prototype.clear = function () {
    var t = this.gl;
    t.clearColor(0, 0, 0, 0);
    t.clear(t.COLOR_BUFFER_BIT);
  };
  s.FilterTexture.prototype.resize = function (t, e) {
    if (this.width !== t || this.height !== e) {
      this.width = t;
      this.height = e;
      var i = this.gl;
      i.bindTexture(i.TEXTURE_2D, this.texture);
      i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null);
      i.bindRenderbuffer(i.RENDERBUFFER, this.renderBuffer);
      i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e);
    }
  };
  s.FilterTexture.prototype.destroy = function () {
    var t = this.gl;
    t.deleteFramebuffer(this.frameBuffer);
    t.deleteTexture(this.texture);
    this.frameBuffer = null;
    this.texture = null;
  };
  s.CanvasBuffer = function (t, e) {
    this.width = t;
    this.height = e;
    this.canvas = s.CanvasPool.create(this, this.width, this.height);
    this.context = this.canvas.getContext("2d");
    this.canvas.width = t;
    this.canvas.height = e;
  };
  s.CanvasBuffer.prototype.constructor = s.CanvasBuffer;
  s.CanvasBuffer.prototype.clear = function () {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.width, this.height);
  };
  s.CanvasBuffer.prototype.resize = function (t, e) {
    this.width = this.canvas.width = t;
    this.height = this.canvas.height = e;
  };
  s.CanvasBuffer.prototype.destroy = function () {
    s.CanvasPool.remove(this);
  };
  s.CanvasMaskManager = function () {};
  s.CanvasMaskManager.prototype.constructor = s.CanvasMaskManager;
  s.CanvasMaskManager.prototype.pushMask = function (t, e) {
    var i = e.context;
    i.save();
    var n = t.alpha;
    var a = t.worldTransform;
    var o = e.resolution;
    i.setTransform(a.a * o, a.b * o, a.c * o, a.d * o, a.tx * o, a.ty * o);
    s.CanvasGraphics.renderGraphicsMask(t, i);
    i.clip();
    t.worldAlpha = n;
  };
  s.CanvasMaskManager.prototype.popMask = function (t) {
    t.context.restore();
  };
  s.CanvasTinter = function () {};
  s.CanvasTinter.getTintedTexture = function (t, e) {
    var i = t.tintedTexture || s.CanvasPool.create(this);
    s.CanvasTinter.tintMethod(t.texture, e, i);
    return i;
  };
  s.CanvasTinter.tintWithMultiply = function (t, e, i) {
    var s = i.getContext("2d");
    var n = t.crop;
    if (i.width !== n.width || i.height !== n.height) {
      i.width = n.width;
      i.height = n.height;
    }
    s.clearRect(0, 0, n.width, n.height);
    s.fillStyle = "#" + ("00000" + (e | 0).toString(16)).substr(-6);
    s.fillRect(0, 0, n.width, n.height);
    s.globalCompositeOperation = "multiply";
    s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
    s.globalCompositeOperation = "destination-atop";
    s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
  };
  s.CanvasTinter.tintWithPerPixel = function (t, e, i) {
    var n = i.getContext("2d");
    var a = t.crop;
    i.width = a.width;
    i.height = a.height;
    n.globalCompositeOperation = "copy";
    n.drawImage(t.baseTexture.source, a.x, a.y, a.width, a.height, 0, 0, a.width, a.height);
    var o = s.hex2rgb(e);
    var r = o[0];
    var h = o[1];
    var l = o[2];
    var c = n.getImageData(0, 0, a.width, a.height);
    for (var u = c.data, d = 0; d < u.length; d += 4) {
      u[d + 0] *= r;
      u[d + 1] *= h;
      u[d + 2] *= l;
      if (!s.CanvasTinter.canHandleAlpha) {
        var p = u[d + 3];
        u[d + 0] /= 255 / p;
        u[d + 1] /= 255 / p;
        u[d + 2] /= 255 / p;
      }
    }
    n.putImageData(c, 0, 0);
  };
  s.CanvasTinter.checkInverseAlpha = function () {
    var t = new s.CanvasBuffer(2, 1);
    t.context.fillStyle = "rgba(10, 20, 30, 0.5)";
    t.context.fillRect(0, 0, 1, 1);
    var e = t.context.getImageData(0, 0, 1, 1);
    if (e === null) {
      return false;
    }
    t.context.putImageData(e, 1, 0);
    var i = t.context.getImageData(1, 0, 1, 1);
    return i.data[0] === e.data[0] && i.data[1] === e.data[1] && i.data[2] === e.data[2] && i.data[3] === e.data[3];
  };
  s.CanvasTinter.canHandleAlpha = s.CanvasTinter.checkInverseAlpha();
  s.CanvasTinter.canUseMultiply = s.canUseNewCanvasBlendModes();
  s.CanvasTinter.tintMethod = s.CanvasTinter.canUseMultiply ? s.CanvasTinter.tintWithMultiply : s.CanvasTinter.tintWithPerPixel;
  s.CanvasRenderer = function (t) {
    this.game = t;
    s.defaultRenderer ||= this;
    this.type = s.CANVAS_RENDERER;
    this.resolution = t.resolution;
    this.clearBeforeRender = t.clearBeforeRender;
    this.transparent = t.transparent;
    this.autoResize = false;
    this.width = t.width * this.resolution;
    this.height = t.height * this.resolution;
    this.view = t.canvas;
    this.context = this.view.getContext("2d", {
      alpha: this.transparent
    });
    this.refresh = true;
    this.count = 0;
    this.maskManager = new s.CanvasMaskManager();
    this.renderSession = {
      context: this.context,
      maskManager: this.maskManager,
      scaleMode: null,
      smoothProperty: Phaser.Canvas.getSmoothingPrefix(this.context),
      roundPixels: false
    };
    this.mapBlendModes();
    this.resize(this.width, this.height);
  };
  s.CanvasRenderer.prototype.constructor = s.CanvasRenderer;
  s.CanvasRenderer.prototype.render = function (t) {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.globalAlpha = 1;
    this.renderSession.currentBlendMode = 0;
    this.renderSession.shakeX = this.game.camera._shake.x;
    this.renderSession.shakeY = this.game.camera._shake.y;
    this.context.globalCompositeOperation = "source-over";
    if (navigator.isCocoonJS && this.view.screencanvas) {
      this.context.fillStyle = "black";
      this.context.clear();
    }
    if (this.clearBeforeRender) {
      if (this.transparent) {
        this.context.clearRect(0, 0, this.width, this.height);
      } else if (t._bgColor) {
        this.context.fillStyle = t._bgColor.rgba;
        this.context.fillRect(0, 0, this.width, this.height);
      }
    }
    this.renderDisplayObject(t);
  };
  s.CanvasRenderer.prototype.destroy = function (t = true) {
    if (t && this.view.parent) {
      this.view.parent.removeChild(this.view);
    }
    this.view = null;
    this.context = null;
    this.maskManager = null;
    this.renderSession = null;
  };
  s.CanvasRenderer.prototype.resize = function (t, e) {
    this.width = t * this.resolution;
    this.height = e * this.resolution;
    this.view.width = this.width;
    this.view.height = this.height;
    if (this.autoResize) {
      this.view.style.width = this.width / this.resolution + "px";
      this.view.style.height = this.height / this.resolution + "px";
    }
    if (this.renderSession.smoothProperty) {
      this.context[this.renderSession.smoothProperty] = this.renderSession.scaleMode === s.scaleModes.LINEAR;
    }
  };
  s.CanvasRenderer.prototype.renderDisplayObject = function (t, e, i) {
    this.renderSession.context = e || this.context;
    this.renderSession.resolution = this.resolution;
    t._renderCanvas(this.renderSession, i);
  };
  s.CanvasRenderer.prototype.mapBlendModes = function () {
    if (!s.blendModesCanvas) {
      var t = [];
      var e = s.blendModes;
      var i = s.canUseNewCanvasBlendModes();
      t[e.NORMAL] = "source-over";
      t[e.ADD] = "lighter";
      t[e.MULTIPLY] = i ? "multiply" : "source-over";
      t[e.SCREEN] = i ? "screen" : "source-over";
      t[e.OVERLAY] = i ? "overlay" : "source-over";
      t[e.DARKEN] = i ? "darken" : "source-over";
      t[e.LIGHTEN] = i ? "lighten" : "source-over";
      t[e.COLOR_DODGE] = i ? "color-dodge" : "source-over";
      t[e.COLOR_BURN] = i ? "color-burn" : "source-over";
      t[e.HARD_LIGHT] = i ? "hard-light" : "source-over";
      t[e.SOFT_LIGHT] = i ? "soft-light" : "source-over";
      t[e.DIFFERENCE] = i ? "difference" : "source-over";
      t[e.EXCLUSION] = i ? "exclusion" : "source-over";
      t[e.HUE] = i ? "hue" : "source-over";
      t[e.SATURATION] = i ? "saturation" : "source-over";
      t[e.COLOR] = i ? "color" : "source-over";
      t[e.LUMINOSITY] = i ? "luminosity" : "source-over";
      s.blendModesCanvas = t;
    }
  };
  s.BaseTexture = function (t, e) {
    this.resolution = 1;
    this.width = 100;
    this.height = 100;
    this.scaleMode = e || s.scaleModes.DEFAULT;
    this.hasLoaded = false;
    this.source = t;
    this.premultipliedAlpha = true;
    this._glTextures = [];
    this.mipmap = false;
    this._dirty = [true, true, true, true];
    if (t) {
      if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) {
        this.hasLoaded = true;
        this.width = this.source.naturalWidth || this.source.width;
        this.height = this.source.naturalHeight || this.source.height;
        this.dirty();
      }
      this.skipRender = false;
      this._powerOf2 = false;
    }
  };
  s.BaseTexture.prototype.constructor = s.BaseTexture;
  s.BaseTexture.prototype.forceLoaded = function (t, e) {
    this.hasLoaded = true;
    this.width = t;
    this.height = e;
    this.dirty();
  };
  s.BaseTexture.prototype.destroy = function () {
    if (this.source) {
      s.CanvasPool.removeByCanvas(this.source);
    }
    this.source = null;
    this.unloadFromGPU();
  };
  s.BaseTexture.prototype.updateSourceImage = function (t) {};
  s.BaseTexture.prototype.dirty = function () {
    for (var t = 0; t < this._glTextures.length; t++) {
      this._dirty[t] = true;
    }
  };
  s.BaseTexture.prototype.unloadFromGPU = function () {
    this.dirty();
    for (var t = this._glTextures.length - 1; t >= 0; t--) {
      var e = this._glTextures[t];
      var i = s.glContexts[t];
      if (i && e) {
        i.deleteTexture(e);
      }
    }
    this._glTextures.length = 0;
    this.dirty();
  };
  s.BaseTexture.fromCanvas = function (t, e) {
    if (t.width === 0) {
      t.width = 1;
    }
    if (t.height === 0) {
      t.height = 1;
    }
    return new s.BaseTexture(t, e);
  };
  s.TextureSilentFail = false;
  s.Texture = function (t, e, i, n) {
    this.noFrame = false;
    if (!e) {
      this.noFrame = true;
      e = new s.Rectangle(0, 0, 1, 1);
    }
    if (t instanceof s.Texture) {
      t = t.baseTexture;
    }
    this.baseTexture = t;
    this.frame = e;
    this.trim = n;
    this.valid = false;
    this.isTiling = false;
    this.requiresUpdate = false;
    this.requiresReTint = false;
    this._uvs = null;
    this.width = 0;
    this.height = 0;
    this.crop = i || new s.Rectangle(0, 0, 1, 1);
    if (t.hasLoaded) {
      if (this.noFrame) {
        e = new s.Rectangle(0, 0, t.width, t.height);
      }
      this.setFrame(e);
    }
  };
  s.Texture.prototype.constructor = s.Texture;
  s.Texture.prototype.onBaseTextureLoaded = function () {
    var t = this.baseTexture;
    if (this.noFrame) {
      this.frame = new s.Rectangle(0, 0, t.width, t.height);
    }
    this.setFrame(this.frame);
  };
  s.Texture.prototype.destroy = function (t) {
    if (t) {
      this.baseTexture.destroy();
    }
    this.valid = false;
  };
  s.Texture.prototype.setFrame = function (t) {
    this.noFrame = false;
    this.frame = t;
    this.width = t.width;
    this.height = t.height;
    this.crop.x = t.x;
    this.crop.y = t.y;
    this.crop.width = t.width;
    this.crop.height = t.height;
    if (!this.trim && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) {
      if (!s.TextureSilentFail) {
        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
      }
      this.valid = false;
      return;
    }
    this.valid = t && t.width && t.height && this.baseTexture.source && this.baseTexture.hasLoaded;
    if (this.trim) {
      this.width = this.trim.width;
      this.height = this.trim.height;
      this.frame.width = this.trim.width;
      this.frame.height = this.trim.height;
    }
    if (this.valid) {
      this._updateUvs();
    }
  };
  s.Texture.prototype._updateUvs = function () {
    this._uvs ||= new s.TextureUvs();
    var t = this.crop;
    var e = this.baseTexture.width;
    var i = this.baseTexture.height;
    this._uvs.x0 = t.x / e;
    this._uvs.y0 = t.y / i;
    this._uvs.x1 = (t.x + t.width) / e;
    this._uvs.y1 = t.y / i;
    this._uvs.x2 = (t.x + t.width) / e;
    this._uvs.y2 = (t.y + t.height) / i;
    this._uvs.x3 = t.x / e;
    this._uvs.y3 = (t.y + t.height) / i;
  };
  s.Texture.fromCanvas = function (t, e) {
    var i = s.BaseTexture.fromCanvas(t, e);
    return new s.Texture(i);
  };
  s.TextureUvs = function () {
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.x3 = 0;
    this.y3 = 0;
  };
  s.RenderTexture = function (t, e, i, n, a) {
    this.width = t || 100;
    this.height = e || 100;
    this.resolution = a || 1;
    this.frame = new s.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);
    this.crop = new s.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);
    this.baseTexture = new s.BaseTexture();
    this.baseTexture.width = this.width * this.resolution;
    this.baseTexture.height = this.height * this.resolution;
    this.baseTexture._glTextures = [];
    this.baseTexture.resolution = this.resolution;
    this.baseTexture.scaleMode = n || s.scaleModes.DEFAULT;
    this.baseTexture.hasLoaded = true;
    s.Texture.call(this, this.baseTexture, new s.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution));
    this.renderer = i || s.defaultRenderer;
    if (this.renderer.type === s.WEBGL_RENDERER) {
      var o = this.renderer.gl;
      this.baseTexture._dirty[o.id] = false;
      this.textureBuffer = new s.FilterTexture(o, this.width, this.height, this.baseTexture.scaleMode);
      this.baseTexture._glTextures[o.id] = this.textureBuffer.texture;
      this.render = this.renderWebGL;
      this.projection = new s.Point(this.width * 0.5, -this.height * 0.5);
    } else {
      this.render = this.renderCanvas;
      this.textureBuffer = new s.CanvasBuffer(this.width * this.resolution, this.height * this.resolution);
      this.baseTexture.source = this.textureBuffer.canvas;
    }
    this.valid = true;
    this.tempMatrix = new Phaser.Matrix();
    this._updateUvs();
  };
  s.RenderTexture.prototype = Object.create(s.Texture.prototype);
  s.RenderTexture.prototype.constructor = s.RenderTexture;
  s.RenderTexture.prototype.resize = function (t, e, i) {
    if (t !== this.width || e !== this.height) {
      this.valid = t > 0 && e > 0;
      this.width = t;
      this.height = e;
      this.frame.width = this.crop.width = t * this.resolution;
      this.frame.height = this.crop.height = e * this.resolution;
      if (i) {
        this.baseTexture.width = this.width * this.resolution;
        this.baseTexture.height = this.height * this.resolution;
      }
      if (this.renderer.type === s.WEBGL_RENDERER) {
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;
      }
      if (this.valid) {
        this.textureBuffer.resize(this.width, this.height);
      }
    }
  };
  s.RenderTexture.prototype.clear = function () {
    if (this.valid) {
      if (this.renderer.type === s.WEBGL_RENDERER) {
        this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
      }
      this.textureBuffer.clear();
    }
  };
  s.RenderTexture.prototype.renderWebGL = function (t, e, i) {
    if (this.valid && t.alpha !== 0) {
      var s = t.worldTransform;
      s.identity();
      s.translate(0, this.projection.y * 2);
      if (e) {
        s.append(e);
      }
      s.scale(1, -1);
      for (var n = 0; n < t.children.length; n++) {
        t.children[n].updateTransform();
      }
      var a = this.renderer.gl;
      a.viewport(0, 0, this.width * this.resolution, this.height * this.resolution);
      a.bindFramebuffer(a.FRAMEBUFFER, this.textureBuffer.frameBuffer);
      if (i) {
        this.textureBuffer.clear();
      }
      this.renderer.spriteBatch.dirty = true;
      this.renderer.renderDisplayObject(t, this.projection, this.textureBuffer.frameBuffer, e);
      this.renderer.spriteBatch.dirty = true;
    }
  };
  s.RenderTexture.prototype.renderCanvas = function (t, e, i) {
    if (this.valid && t.alpha !== 0) {
      var s = t.worldTransform;
      s.identity();
      if (e) {
        s.append(e);
      }
      for (var n = 0; n < t.children.length; n++) {
        t.children[n].updateTransform();
      }
      if (i) {
        this.textureBuffer.clear();
      }
      var a = this.renderer.resolution;
      this.renderer.resolution = this.resolution;
      this.renderer.renderDisplayObject(t, this.textureBuffer.context, e);
      this.renderer.resolution = a;
    }
  };
  s.RenderTexture.prototype.getImage = function () {
    var t = new Image();
    t.src = this.getBase64();
    return t;
  };
  s.RenderTexture.prototype.getBase64 = function () {
    return this.getCanvas().toDataURL();
  };
  s.RenderTexture.prototype.getCanvas = function () {
    if (this.renderer.type === s.WEBGL_RENDERER) {
      var t = this.renderer.gl;
      var e = this.textureBuffer.width;
      var i = this.textureBuffer.height;
      var n = new Uint8Array(e * 4 * i);
      t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer);
      t.readPixels(0, 0, e, i, t.RGBA, t.UNSIGNED_BYTE, n);
      t.bindFramebuffer(t.FRAMEBUFFER, null);
      var a = new s.CanvasBuffer(e, i);
      var o = a.context.getImageData(0, 0, e, i);
      o.data.set(n);
      a.context.putImageData(o, 0, 0);
      return a.canvas;
    }
    return this.textureBuffer.canvas;
  };
  s.AbstractFilter = function (t, e) {
    this.passes = [this];
    this.shaders = [];
    this.dirty = true;
    this.padding = 0;
    this.uniforms = e || {};
    this.fragmentSrc = t || [];
  };
  s.AbstractFilter.prototype.constructor = s.AbstractFilter;
  s.AbstractFilter.prototype.syncUniforms = function () {
    for (var t = 0, e = this.shaders.length; t < e; t++) {
      this.shaders[t].dirty = true;
    }
  };
  s.Strip = function (t) {
    s.DisplayObjectContainer.call(this);
    this.texture = t;
    this.uvs = new s.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]);
    this.vertices = new s.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);
    this.colors = new s.Float32Array([1, 1, 1, 1]);
    this.indices = new s.Uint16Array([0, 1, 2, 3]);
    this.dirty = true;
    this.blendMode = s.blendModes.NORMAL;
    this.canvasPadding = 0;
    this.drawMode = s.Strip.DrawModes.TRIANGLE_STRIP;
  };
  s.Strip.prototype = Object.create(s.DisplayObjectContainer.prototype);
  s.Strip.prototype.constructor = s.Strip;
  s.Strip.prototype._renderWebGL = function (t) {
    if (!!this.visible && !(this.alpha <= 0)) {
      t.spriteBatch.stop();
      if (!this._vertexBuffer) {
        this._initWebGL(t);
      }
      t.shaderManager.setShader(t.shaderManager.stripShader);
      this._renderStrip(t);
      t.spriteBatch.start();
    }
  };
  s.Strip.prototype._initWebGL = function (t) {
    var e = t.gl;
    this._vertexBuffer = e.createBuffer();
    this._indexBuffer = e.createBuffer();
    this._uvBuffer = e.createBuffer();
    this._colorBuffer = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
    e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW);
    e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer);
    e.bufferData(e.ARRAY_BUFFER, this.uvs, e.STATIC_DRAW);
    e.bindBuffer(e.ARRAY_BUFFER, this._colorBuffer);
    e.bufferData(e.ARRAY_BUFFER, this.colors, e.STATIC_DRAW);
    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW);
  };
  s.Strip.prototype._renderStrip = function (t) {
    var e = t.gl;
    var i = t.projection;
    var n = t.offset;
    var a = t.shaderManager.stripShader;
    var o = this.drawMode === s.Strip.DrawModes.TRIANGLE_STRIP ? e.TRIANGLE_STRIP : e.TRIANGLES;
    t.blendModeManager.setBlendMode(this.blendMode);
    e.uniformMatrix3fv(a.translationMatrix, false, this.worldTransform.toArray(true));
    e.uniform2f(a.projectionVector, i.x, -i.y);
    e.uniform2f(a.offsetVector, -n.x, -n.y);
    e.uniform1f(a.alpha, this.worldAlpha);
    if (this.dirty) {
      this.dirty = false;
      e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
      e.bufferData(e.ARRAY_BUFFER, this.vertices, e.STATIC_DRAW);
      e.vertexAttribPointer(a.aVertexPosition, 2, e.FLOAT, false, 0, 0);
      e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer);
      e.bufferData(e.ARRAY_BUFFER, this.uvs, e.STATIC_DRAW);
      e.vertexAttribPointer(a.aTextureCoord, 2, e.FLOAT, false, 0, 0);
      e.activeTexture(e.TEXTURE0);
      if (this.texture.baseTexture._dirty[e.id]) {
        t.renderer.updateTexture(this.texture.baseTexture);
      } else {
        e.bindTexture(e.TEXTURE_2D, this.texture.baseTexture._glTextures[e.id]);
      }
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
      e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW);
    } else {
      e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
      e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
      e.vertexAttribPointer(a.aVertexPosition, 2, e.FLOAT, false, 0, 0);
      e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer);
      e.vertexAttribPointer(a.aTextureCoord, 2, e.FLOAT, false, 0, 0);
      e.activeTexture(e.TEXTURE0);
      if (this.texture.baseTexture._dirty[e.id]) {
        t.renderer.updateTexture(this.texture.baseTexture);
      } else {
        e.bindTexture(e.TEXTURE_2D, this.texture.baseTexture._glTextures[e.id]);
      }
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    }
    e.drawElements(o, this.indices.length, e.UNSIGNED_SHORT, 0);
  };
  s.Strip.prototype._renderCanvas = function (t) {
    var e = t.context;
    var i = this.worldTransform;
    var n = i.tx * t.resolution + t.shakeX;
    var a = i.ty * t.resolution + t.shakeY;
    if (t.roundPixels) {
      e.setTransform(i.a, i.b, i.c, i.d, n | 0, a | 0);
    } else {
      e.setTransform(i.a, i.b, i.c, i.d, n, a);
    }
    if (this.drawMode === s.Strip.DrawModes.TRIANGLE_STRIP) {
      this._renderCanvasTriangleStrip(e);
    } else {
      this._renderCanvasTriangles(e);
    }
  };
  s.Strip.prototype._renderCanvasTriangleStrip = function (t) {
    var e = this.vertices;
    var i = this.uvs;
    var s = e.length / 2;
    this.count++;
    for (var n = 0; n < s - 2; n++) {
      var a = n * 2;
      this._renderCanvasDrawTriangle(t, e, i, a, a + 2, a + 4);
    }
  };
  s.Strip.prototype._renderCanvasTriangles = function (t) {
    var e = this.vertices;
    var i = this.uvs;
    var s = this.indices;
    var n = s.length;
    this.count++;
    for (var a = 0; a < n; a += 3) {
      var o = s[a] * 2;
      var r = s[a + 1] * 2;
      var h = s[a + 2] * 2;
      this._renderCanvasDrawTriangle(t, e, i, o, r, h);
    }
  };
  s.Strip.prototype._renderCanvasDrawTriangle = function (t, e, i, s, n, a) {
    var o = this.texture.baseTexture.source;
    var r = this.texture.width;
    var h = this.texture.height;
    var l = e[s];
    var c = e[n];
    var u = e[a];
    var d = e[s + 1];
    var p = e[n + 1];
    var f = e[a + 1];
    var g = i[s] * r;
    var m = i[n] * r;
    var y = i[a] * r;
    var v = i[s + 1] * h;
    var b = i[n + 1] * h;
    var _ = i[a + 1] * h;
    if (this.canvasPadding > 0) {
      var x = this.canvasPadding / this.worldTransform.a;
      var w = this.canvasPadding / this.worldTransform.d;
      var P = (l + c + u) / 3;
      var T = (d + p + f) / 3;
      var S = l - P;
      var C = d - T;
      var A = Math.sqrt(S * S + C * C);
      l = P + S / A * (A + x);
      d = T + C / A * (A + w);
      S = c - P;
      C = p - T;
      A = Math.sqrt(S * S + C * C);
      c = P + S / A * (A + x);
      p = T + C / A * (A + w);
      S = u - P;
      C = f - T;
      A = Math.sqrt(S * S + C * C);
      u = P + S / A * (A + x);
      f = T + C / A * (A + w);
    }
    t.save();
    t.beginPath();
    t.moveTo(l, d);
    t.lineTo(c, p);
    t.lineTo(u, f);
    t.closePath();
    t.clip();
    var E = g * b + v * y + m * _ - b * y - v * m - g * _;
    var I = l * b + v * u + c * _ - b * u - v * c - l * _;
    var B = g * c + l * y + m * u - c * y - l * m - g * u;
    var M = g * b * u + v * c * y + l * m * _ - l * b * y - v * m * u - g * c * _;
    var k = d * b + v * f + p * _ - b * f - v * p - d * _;
    var O = g * p + d * y + m * f - p * y - d * m - g * f;
    var D = g * b * f + v * p * y + d * m * _ - d * b * y - v * m * f - g * p * _;
    t.transform(I / E, k / E, B / E, O / E, M / E, D / E);
    t.drawImage(o, 0, 0);
    t.restore();
  };
  s.Strip.prototype.renderStripFlat = function (t) {
    var e = this.context;
    var i = t.vertices;
    var s = i.length / 2;
    this.count++;
    e.beginPath();
    for (var n = 1; n < s - 2; n++) {
      var a = n * 2;
      var o = i[a];
      var r = i[a + 2];
      var h = i[a + 4];
      var l = i[a + 1];
      var c = i[a + 3];
      var u = i[a + 5];
      e.moveTo(o, l);
      e.lineTo(r, c);
      e.lineTo(h, u);
    }
    e.fillStyle = "#FF0000";
    e.fill();
    e.closePath();
  };
  s.Strip.prototype.onTextureUpdate = function () {
    this.updateFrame = true;
  };
  s.Strip.prototype.getBounds = function (t) {
    var e = t || this.worldTransform;
    var i = e.a;
    var n = e.b;
    var a = e.c;
    var o = e.d;
    var r = e.tx;
    var h = e.ty;
    var l = -Infinity;
    var c = -Infinity;
    var u = Infinity;
    var d = Infinity;
    var p = this.vertices;
    for (var f = 0, g = p.length; f < g; f += 2) {
      var m = p[f];
      var y = p[f + 1];
      var v = i * m + a * y + r;
      var b = o * y + n * m + h;
      u = v < u ? v : u;
      d = b < d ? b : d;
      l = v > l ? v : l;
      c = b > c ? b : c;
    }
    if (u === -Infinity || c === Infinity) {
      return s.EmptyRectangle;
    }
    var _ = this._bounds;
    _.x = u;
    _.width = l - u;
    _.y = d;
    _.height = c - d;
    this._currentBounds = _;
    return _;
  };
  s.Strip.DrawModes = {
    TRIANGLE_STRIP: 0,
    TRIANGLES: 1
  };
  s.Rope = function (t, e) {
    s.Strip.call(this, t);
    this.points = e;
    this.vertices = new s.Float32Array(e.length * 4);
    this.uvs = new s.Float32Array(e.length * 4);
    this.colors = new s.Float32Array(e.length * 2);
    this.indices = new s.Uint16Array(e.length * 2);
    this.refresh();
  };
  s.Rope.prototype = Object.create(s.Strip.prototype);
  s.Rope.prototype.constructor = s.Rope;
  s.Rope.prototype.refresh = function () {
    var t = this.points;
    if (!(t.length < 1)) {
      var e = this.uvs;
      var i = t[0];
      var s = this.indices;
      var n = this.colors;
      this.count -= 0.2;
      e[0] = 0;
      e[1] = 0;
      e[2] = 0;
      e[3] = 1;
      n[0] = 1;
      n[1] = 1;
      s[0] = 0;
      s[1] = 1;
      for (var a = t.length, o, r, h, l = 1; l < a; l++) {
        o = t[l];
        r = l * 4;
        h = l / (a - 1);
        e[r] = h;
        e[r + 1] = 0;
        e[r + 2] = h;
        e[r + 3] = 1;
        r = l * 2;
        n[r] = 1;
        n[r + 1] = 1;
        r = l * 2;
        s[r] = r;
        s[r + 1] = r + 1;
        i = o;
      }
    }
  };
  s.Rope.prototype.updateTransform = function () {
    var t = this.points;
    if (!(t.length < 1)) {
      var e = t[0];
      var i;
      var n = {
        x: 0,
        y: 0
      };
      this.count -= 0.2;
      var a = this.vertices;
      for (var o = t.length, r, h, l, c, u, d = 0; d < o; d++) {
        r = t[d];
        h = d * 4;
        i = d < t.length - 1 ? t[d + 1] : r;
        n.y = -(i.x - e.x);
        n.x = i.y - e.y;
        l = (1 - d / (o - 1)) * 10;
        if (l > 1) {
          l = 1;
        }
        c = Math.sqrt(n.x * n.x + n.y * n.y);
        u = this.texture.height / 2;
        n.x /= c;
        n.y /= c;
        n.x *= u;
        n.y *= u;
        a[h] = r.x + n.x;
        a[h + 1] = r.y + n.y;
        a[h + 2] = r.x - n.x;
        a[h + 3] = r.y - n.y;
        e = r;
      }
      s.DisplayObjectContainer.prototype.updateTransform.call(this);
    }
  };
  s.Rope.prototype.setTexture = function (t) {
    this.texture = t;
  };
  s.TilingSprite = function (t, e, i) {
    s.Sprite.call(this, t);
    this._width = e || 128;
    this._height = i || 128;
    this.tileScale = new s.Point(1, 1);
    this.tileScaleOffset = new s.Point(1, 1);
    this.tilePosition = new s.Point();
    this.renderable = true;
    this.tint = 16777215;
    this.textureDebug = false;
    this.blendMode = s.blendModes.NORMAL;
    this.canvasBuffer = null;
    this.tilingTexture = null;
    this.tilePattern = null;
    this.refreshTexture = true;
    this.frameWidth = 0;
    this.frameHeight = 0;
  };
  s.TilingSprite.prototype = Object.create(s.Sprite.prototype);
  s.TilingSprite.prototype.constructor = s.TilingSprite;
  s.TilingSprite.prototype.setTexture = function (t) {
    if (this.texture !== t) {
      this.texture = t;
      this.refreshTexture = true;
      this.cachedTint = 16777215;
    }
  };
  s.TilingSprite.prototype._renderWebGL = function (t) {
    if (this.visible && this.renderable && this.alpha !== 0) {
      if (this._mask) {
        t.spriteBatch.stop();
        t.maskManager.pushMask(this.mask, t);
        t.spriteBatch.start();
      }
      if (this._filters) {
        t.spriteBatch.flush();
        t.filterManager.pushFilter(this._filterBlock);
      }
      if (this.refreshTexture) {
        this.generateTilingTexture(true, t);
        if (!this.tilingTexture) {
          return;
        }
        if (this.tilingTexture.needsUpdate) {
          t.renderer.updateTexture(this.tilingTexture.baseTexture);
          this.tilingTexture.needsUpdate = false;
        }
      }
      t.spriteBatch.renderTilingSprite(this);
      for (var e = 0; e < this.children.length; e++) {
        this.children[e]._renderWebGL(t);
      }
      t.spriteBatch.stop();
      if (this._filters) {
        t.filterManager.popFilter();
      }
      if (this._mask) {
        t.maskManager.popMask(this._mask, t);
      }
      t.spriteBatch.start();
    }
  };
  s.TilingSprite.prototype._renderCanvas = function (t) {
    if (this.visible && this.renderable && this.alpha !== 0) {
      var e = t.context;
      if (this._mask) {
        t.maskManager.pushMask(this._mask, t);
      }
      e.globalAlpha = this.worldAlpha;
      var i = this.worldTransform;
      var n = t.resolution;
      var a = i.tx * n + t.shakeX;
      var o = i.ty * n + t.shakeY;
      e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, a, o);
      if (this.refreshTexture) {
        this.generateTilingTexture(false, t);
        if (!this.tilingTexture) {
          return;
        }
        this.tilePattern = e.createPattern(this.tilingTexture.baseTexture.source, "repeat");
      }
      var r = t.currentBlendMode;
      if (this.blendMode !== t.currentBlendMode) {
        t.currentBlendMode = this.blendMode;
        e.globalCompositeOperation = s.blendModesCanvas[t.currentBlendMode];
      }
      var h = this.tilePosition;
      var l = this.tileScale;
      h.x %= this.tilingTexture.baseTexture.width;
      h.y %= this.tilingTexture.baseTexture.height;
      e.scale(l.x, l.y);
      e.translate(h.x + this.anchor.x * -this._width, h.y + this.anchor.y * -this._height);
      e.fillStyle = this.tilePattern;
      var a = -h.x;
      var o = -h.y;
      var c = this._width / l.x;
      var u = this._height / l.y;
      if (t.roundPixels) {
        a |= 0;
        o |= 0;
        c |= 0;
        u |= 0;
      }
      e.fillRect(a, o, c, u);
      e.scale(1 / l.x, 1 / l.y);
      e.translate(-h.x + this.anchor.x * this._width, -h.y + this.anchor.y * this._height);
      if (this._mask) {
        t.maskManager.popMask(t);
      }
      for (var d = 0; d < this.children.length; d++) {
        this.children[d]._renderCanvas(t);
      }
      if (r !== this.blendMode) {
        t.currentBlendMode = r;
        e.globalCompositeOperation = s.blendModesCanvas[r];
      }
    }
  };
  s.TilingSprite.prototype.onTextureUpdate = function () {};
  s.TilingSprite.prototype.generateTilingTexture = function (t, e) {
    if (this.texture.baseTexture.hasLoaded) {
      var i = this.texture;
      var n = i.frame;
      var a = this._frame.sourceSizeW || this._frame.width;
      var o = this._frame.sourceSizeH || this._frame.height;
      var r = 0;
      var h = 0;
      if (this._frame.trimmed) {
        r = this._frame.spriteSourceSizeX;
        h = this._frame.spriteSourceSizeY;
      }
      if (t) {
        a = s.getNextPowerOfTwo(a);
        o = s.getNextPowerOfTwo(o);
      }
      if (this.canvasBuffer) {
        this.canvasBuffer.resize(a, o);
        this.tilingTexture.baseTexture.width = a;
        this.tilingTexture.baseTexture.height = o;
        this.tilingTexture.needsUpdate = true;
      } else {
        this.canvasBuffer = new s.CanvasBuffer(a, o);
        this.tilingTexture = s.Texture.fromCanvas(this.canvasBuffer.canvas);
        this.tilingTexture.isTiling = true;
        this.tilingTexture.needsUpdate = true;
      }
      if (this.textureDebug) {
        this.canvasBuffer.context.strokeStyle = "#00ff00";
        this.canvasBuffer.context.strokeRect(0, 0, a, o);
      }
      var l = i.crop.width;
      var c = i.crop.height;
      if (l !== a || c !== o) {
        l = a;
        c = o;
      }
      this.canvasBuffer.context.drawImage(i.baseTexture.source, i.crop.x, i.crop.y, i.crop.width, i.crop.height, r, h, l, c);
      this.tileScaleOffset.x = n.width / a;
      this.tileScaleOffset.y = n.height / o;
      this.refreshTexture = false;
      this.tilingTexture.baseTexture._powerOf2 = true;
    }
  };
  s.TilingSprite.prototype.getBounds = function () {
    var t = this._width;
    var e = this._height;
    var i = t * (1 - this.anchor.x);
    var s = t * -this.anchor.x;
    var n = e * (1 - this.anchor.y);
    var a = e * -this.anchor.y;
    var o = this.worldTransform;
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
    var x = -Infinity;
    var w = -Infinity;
    var P = Infinity;
    var T = Infinity;
    P = p < P ? p : P;
    P = g < P ? g : P;
    P = y < P ? y : P;
    P = b < P ? b : P;
    T = f < T ? f : T;
    T = m < T ? m : T;
    T = v < T ? v : T;
    T = _ < T ? _ : T;
    x = p > x ? p : x;
    x = g > x ? g : x;
    x = y > x ? y : x;
    x = b > x ? b : x;
    w = f > w ? f : w;
    w = m > w ? m : w;
    w = v > w ? v : w;
    w = _ > w ? _ : w;
    var S = this._bounds;
    S.x = P;
    S.width = x - P;
    S.y = T;
    S.height = w - T;
    this._currentBounds = S;
    return S;
  };
  s.TilingSprite.prototype.destroy = function () {
    s.Sprite.prototype.destroy.call(this);
    if (this.canvasBuffer) {
      this.canvasBuffer.destroy();
      this.canvasBuffer = null;
    }
    this.tileScale = null;
    this.tileScaleOffset = null;
    this.tilePosition = null;
    if (this.tilingTexture) {
      this.tilingTexture.destroy(true);
      this.tilingTexture = null;
    }
  };
  Object.defineProperty(s.TilingSprite.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (t) {
      this._width = t;
    }
  });
  Object.defineProperty(s.TilingSprite.prototype, "height", {
    get: function () {
      return this._height;
    },
    set: function (t) {
      this._height = t;
    }
  });
  if (module !== undefined && module.exports) {
    exports = module.exports = s;
  }
  exports.PIXI = s;
  return s;
}).call(this);