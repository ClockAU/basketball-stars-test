exports.__esModule = true;
var s = Phaser.Keyboard;
var n = require("./1.js");
var a = require("./7.js");
var o = function () {
  function t() {
    this.container = null;
    this.keyLeft = null;
    this.keyRight = null;
    this.keyA = null;
    this.keyD = null;
    this.keyL = null;
    this.keyX = null;
    this.keyB = null;
    this.btnUp = null;
    this.btnZ = null;
    this.btnDown = null;
    this.btnLeft = null;
    this.btnLeftDownTime = 0;
    this.btnLeftUpTime = 0;
    this.btnRight = null;
    this.btnRightDownTime = 0;
    this.btnRightUpTime = 0;
    this._isbtnZ = false;
    this._isbtnK = false;
    this._isbtnX = false;
    this._isbtnL = false;
    this._isbtnV = false;
    this._isbtnB = false;
    this._isbtnUp = false;
    this._isbtnDown = false;
    this._isbtnLeft = false;
    this._isbtnRight = false;
    this._isbtnLeftDouble = false;
    this._isbtnRightDouble = false;
    this._isbtnADouble = false;
    this._isbtnDDouble = false;
  }
  Object.defineProperty(t.prototype, "isbtnZ", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.Z);
      } else {
        return this._isbtnZ;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnX", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.X);
      } else {
        return this._isbtnX;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnK", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.K);
      } else {
        return this._isbtnK;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnL", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.L);
      } else {
        return this._isbtnL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnV", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.V);
      } else {
        return this._isbtnV;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnB", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.B);
      } else {
        return this._isbtnB;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnUp", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.UP);
      } else {
        return this._isbtnUp;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnDown", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.DOWN);
      } else {
        return this._isbtnDown;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnLeft", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.LEFT);
      } else {
        return this._isbtnLeft;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnLeftDouble", {
    get: function () {
      if (this.game.device.desktop) {
        if (this.keyLeft === null) {
          this.keyLeft = this.game.input.keyboard.addKey(s.LEFT);
        }
        this.keyTimer = this.keyLeft.timeDown - this.keyLeft.timeUp;
        return this.keyTimer < 460 && this.keyLeft.justDown;
      }
      var t = this.game.time.time;
      var e = t - this.btnLeftDownTime < 100;
      return this.btnLeftDownTime - this.btnLeftUpTime < 460 && e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnRight", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.RIGHT);
      } else {
        return this._isbtnRight;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnRightDouble", {
    get: function () {
      if (this.game.device.desktop) {
        if (this.keyRight === null) {
          this.keyRight = this.game.input.keyboard.addKey(s.RIGHT);
        }
        this.keyTimer = this.keyRight.timeDown - this.keyRight.timeUp;
        return this.keyTimer < 460 && this.keyRight.justDown;
      }
      var t = this.game.time.time;
      var e = t - this.btnRightDownTime < 100;
      var i = this.btnRightDownTime - this.btnRightUpTime < 460;
      return i && e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnW", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.W);
      } else {
        return this._isbtnUp;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnS", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.S);
      } else {
        return this._isbtnDown;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnADouble", {
    get: function () {
      if (this.keyA === null) {
        this.keyA = this.game.input.keyboard.addKey(s.A);
      }
      this.keyTimer = this.keyA.timeDown - this.keyA.timeUp;
      return this.keyTimer < 460 && this.keyA.justDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnA", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.A);
      } else {
        return this._isbtnLeft;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnDDouble", {
    get: function () {
      if (this.keyD === null) {
        this.keyD = this.game.input.keyboard.addKey(s.D);
      }
      this.keyTimer = this.keyD.timeDown - this.keyD.timeUp;
      return this.keyTimer < 460 && this.keyD.justDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isbtnD", {
    get: function () {
      if (this.game.device.desktop) {
        return this.game.input.keyboard.isDown(s.D);
      } else {
        return this._isbtnRight;
      }
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.init = function (t, e) {
    this.container = t;
    this.game = e;
    this.container.inputEnableChildren = true;
    if (this.game.device.desktop) {
      this.game.input.keyboard.addKeyCapture(s.RIGHT);
      this.game.input.keyboard.addKeyCapture(s.LEFT);
      this.game.input.keyboard.addKeyCapture(s.DOWN);
      this.game.input.keyboard.addKeyCapture(s.UP);
      this.game.input.keyboard.addKeyCapture(s.A);
      this.game.input.keyboard.addKeyCapture(s.W);
      this.game.input.keyboard.addKeyCapture(s.S);
      this.game.input.keyboard.addKeyCapture(s.D);
      this.game.input.keyboard.addKeyCapture(s.Z);
      this.game.input.keyboard.addKeyCapture(s.X);
      this.game.input.keyboard.addKeyCapture(s.K);
      this.game.input.keyboard.addKeyCapture(s.L);
    } else {
      this.createButtons();
    }
  };
  t.prototype.createButtons = function () {
    var t = this.game.add.image(0, 0, n.Atlases.Gameplay, "arrow_icon20000");
    t.anchor.set(0.5);
    this.btnUp = new a.default(this.game, "", {}, function () {}, this, n.Atlases.Gameplay);
    this.btnUp.setFrames("btn_bg20000", "btn_bg20000", "btn_bg20000", "btn_bg20000");
    this.btnUp.x = 725;
    this.btnUp.y = 427;
    this.btnUp.btn.alpha = 0.9;
    this.container.addChild(this.btnUp);
    this.btnUp.label.parent.addChild(t);
    var e = this.game.make.graphics();
    e.beginFill(16711680, 0);
    e.drawRect((this.btnUp.width + 5) / -2, (this.btnUp.height + 5) / -2, this.btnUp.width + 30, this.btnUp.height + 10);
    e.endFill();
    e.inputEnabled = true;
    e.events.onInputDown.add(this.upTap, this);
    e.events.onInputUp.add(this.upUnTap, this);
    this.btnUp.label.parent.addChild(e);
    this.btnZ = new a.default(this.game, "", {}, function () {}, this, n.Atlases.Gameplay);
    this.btnZ.setFrames("btn_bg20000", "btn_bg20000", "btn_bg20000", "btn_bg20000");
    this.btnZ.x = 745;
    this.btnZ.y = 327;
    this.btnZ.btn.events.onInputDown.add(this.ZTap, this);
    this.btnZ.btn.events.onInputUp.add(this.ZUnTap, this);
    this.btnZ.btn.alpha = 0.9;
    this.container.addChild(this.btnZ);
    t = this.game.add.image(0, 0, n.Atlases.Gameplay, "shoot_icon0000");
    t.anchor.set(0.5);
    this.btnDown = new a.default(this.game, "", {}, function () {}, this, n.Atlases.Gameplay);
    this.btnDown.setFrames("btn_bg20000", "btn_bg20000", "btn_bg20000", "btn_bg20000");
    this.btnDown.x = 615;
    this.btnDown.y = 427;
    this.btnDown.btn.events.onInputDown.add(this.XTap, this);
    this.btnDown.btn.events.onInputUp.add(this.XUnTap, this);
    this.btnDown.btn.alpha = 0.9;
    this.container.addChild(this.btnDown);
    this.btnDown.labelState = t;
    t = this.game.add.image(0, 0, n.Atlases.Gameplay, "arrow_icon0000");
    t.anchor.set(0.5);
    t.scale.set(0.85);
    this.btnLeft = new a.default(this.game, "", {}, function () {}, this, n.Atlases.Gameplay);
    this.btnLeft.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.btnLeft.x = 75;
    this.btnLeft.y = 415;
    this.btnLeft.sScale = 0.57;
    this.btnLeft.btn.alpha = 0.9;
    this.container.addChild(this.btnLeft);
    t.angle = -180;
    this.btnLeft.label.parent.addChild(t);
    e = this.game.make.graphics();
    e.beginFill(16711680, 0);
    e.drawRect((this.btnLeft.width + 59) / -2, (this.btnLeft.height + 5) / -2, this.btnLeft.width + 34, this.btnLeft.height + 10);
    e.endFill();
    e.inputEnabled = true;
    e.events.onInputDown.add(this.leftTap, this);
    e.events.onInputUp.add(this.leftUnTap, this);
    this.btnLeft.label.parent.addChild(e);
    t = this.game.add.image(0, 0, n.Atlases.Gameplay, "arrow_icon0000");
    t.anchor.set(0.5);
    t.scale.set(0.85);
    this.btnRight = new a.default(this.game, "", {}, function () {}, this, n.Atlases.Gameplay);
    this.btnRight.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    this.btnRight.x = 185;
    this.btnRight.y = 415;
    this.btnRight.sScale = 0.57;
    this.btnRight.btn.alpha = 0.9;
    this.container.addChild(this.btnRight);
    this.btnRight.label.parent.addChild(t);
    e = this.game.make.graphics();
    e.beginFill(16711680, 0);
    e.drawRect((this.btnRight.width + 59) / -2, (this.btnRight.height + 5) / -2, this.btnRight.width + 34, this.btnRight.height + 10);
    e.endFill();
    e.inputEnabled = true;
    e.events.onInputDown.add(this.rightTap, this);
    e.events.onInputUp.add(this.rightUnTap, this);
    this.btnRight.label.parent.addChild(e);
  };
  t.prototype.upTap = function () {
    this.btnUp.onDownLabel();
    this._isbtnUp = true;
  };
  t.prototype.leftTap = function () {
    this.btnLeft.onDownLabel();
    this.btnLeftDownTime = this.game.time.time;
    this._isbtnLeft = true;
  };
  t.prototype.rightTap = function () {
    this.btnRight.onDownLabel();
    this.btnRightDownTime = this.game.time.time;
    this._isbtnRight = true;
  };
  t.prototype.ZTap = function () {
    this._isbtnZ = true;
  };
  t.prototype.XTap = function () {
    this._isbtnX = true;
  };
  t.prototype.upUnTap = function () {
    this.btnUp.onOut();
    this._isbtnUp = false;
  };
  t.prototype.leftUnTap = function () {
    this.btnLeft.onOut();
    this.btnLeftUpTime = this.game.time.time;
    this._isbtnLeft = false;
  };
  t.prototype.rightUnTap = function () {
    this.btnRight.onOut();
    this.btnRightUpTime = this.game.time.time;
    this._isbtnRight = false;
  };
  t.prototype.ZUnTap = function () {
    this._isbtnZ = false;
  };
  t.prototype.XUnTap = function () {
    this._isbtnX = false;
  };
  t.prototype.resize = function (t) {
    if (this.container.parent) {
      this.container.parent.parent;
    }
    if (this.container) {
      this.container.scale.set(t);
      var e = 0;
      if (t >= 1 && this.game.width > n.Constants.WIDTH) {
        e = (this.game.width - n.Constants.WIDTH) * 0.5 / this.container.parent.scale.x;
      }
      this.btnUp.x = 725 + e;
      this.btnUp.y = 427;
      this.btnZ.x = 745 + e;
      this.btnZ.y = 327;
      this.btnDown.x = 615 + e;
      this.btnDown.y = 427;
      this.btnLeft.x = 75 - e;
      this.btnLeft.y = 415;
      this.btnRight.x = 185 - e;
      this.btnRight.y = 415;
    }
  };
  Object.defineProperty(t, "instance", {
    get: function () {
      t._instance ||= new t();
      return t._instance;
    },
    enumerable: true,
    configurable: true
  });
  return t;
}();
exports.default = o;