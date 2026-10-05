var s = this && this.__extends || function () {
  var t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) {
      if (e.hasOwnProperty(i)) {
        t[i] = e[i];
      }
    }
  };
  return function (e, i) {
    function s() {
      this.constructor = e;
    }
    t(e, i);
    e.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
}();
exports.__esModule = true;
var n = require("./3.js");
var a = require("./2.js");
var o = require("./0.js");
var r = require("./1.js");
var h = require("./7.js");
var l = require("./5.js");
var c = function (t) {
  function e(e, i, s, o = true) {
    var l = t.call(this, n.default.game) || this;
    l.team = 0;
    l.id = e;
    l.manager = a.Inventory.instance;
    l.armature1 = i;
    l.armature2 = s;
    l.bg = l.game.add.sprite(0, 15, r.Atlases.Interface, "0bg100000");
    l.bg.anchor.set(0.5, 0.22);
    l.addChild(l.bg);
    if (e === 0) {
      l.bg.scale.set(-0.85, 0.9);
    } else {
      l.bg.scale.set(0.85, 0.9);
    }
    l.isLocal = l.manager.isLocal;
    l.btnLeft = new h.default(l.game, "", {}, l.changeTeam1, l, r.Atlases.Interface);
    l.btnRight = new h.default(l.game, "", {}, l.changeTeam2, l, r.Atlases.Interface);
    l.superHint1 = new h.default(l.game, "", r.Constants.styleSkillName, null, null, r.Atlases.Interface);
    l.superHint2 = new h.default(l.game, "", r.Constants.styleSkillName, null, null, r.Atlases.Interface);
    l.p1Name = new h.default(l.game, "", r.Constants.stylePlayerName, null, null, r.Atlases.Interface);
    l.p2Name = new h.default(l.game, "", r.Constants.stylePlayerName, null, null, r.Atlases.Interface);
    l.label1 = new h.default(l.game, "", r.Constants.stylePlayer, null, null, r.Atlases.Interface);
    l.label2 = new h.default(l.game, "", r.Constants.stylePlayer, null, null, r.Atlases.Interface);
    l.p1Name.label.setMaxSize(150, 60);
    l.p2Name.label.setMaxSize(150, 60);
    l.p1Name.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    l.p2Name.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    l.label1.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    l.label2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    l.superHint1.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    l.superHint2.setFrames("bg0000", "bg0000", "bg0000", "bg0000");
    l.btnLeft.setFrames("BtnLeft0000", "BtnLeft0000", "BtnLeft0000", "BtnLeft0000");
    l.btnRight.setFrames("BtnLeft0000", "BtnLeft0000", "BtnLeft0000", "BtnLeft0000");
    l.btnLeft.x = -89;
    l.btnLeft.y = 10;
    l.btnRight.x = 89;
    l.btnRight.y = 10;
    l.btnRight.scale.set(-1, 1);
    if (!o) {
      l.btnLeft.visible = false;
      l.btnRight.visible = false;
    }
    l.shadow1 = l.game.add.image(-75, 160, r.Atlases.Interface, "loginSelect0000");
    l.shadow1.anchor.set(0.5);
    l.shadow1.scale.set(1.2);
    l.addChild(l.shadow1);
    l.shadow2 = l.game.add.image(80, 160, r.Atlases.Interface, "loginSelect0000");
    l.shadow2.anchor.set(0.5);
    l.shadow2.scale.set(1.2);
    l.addChild(l.shadow2);
    l.addChild(l.btnLeft);
    l.addChild(l.btnRight);
    var c;
    c = l.game.add.image(-110, 250, r.Atlases.Gameplay, "btn_bg0000");
    c.anchor.set(0.5);
    c.scale.set(0.258);
    l.addChild(c);
    c = l.game.add.image(49, 250, r.Atlases.Gameplay, "btn_bg0000");
    c.anchor.set(0.5);
    c.scale.set(0.258);
    l.addChild(c);
    l.superHint1Img = l.game.add.image(-110, 250, r.Atlases.Gameplay, "icon_ball0000");
    l.superHint1Img.anchor.set(0.5);
    l.superHint1Img.scale.set(0.3);
    l.addChild(l.superHint1Img);
    l.superHint2Img = l.game.add.image(49, 250, r.Atlases.Gameplay, "icon_ball0001");
    l.superHint2Img.anchor.set(0.5);
    l.superHint2Img.scale.set(0.3);
    l.addChild(l.superHint2Img);
    if (a.Inventory.instance.matchData.teams[e] === 0) {
      if (e === 1 && a.Inventory.instance.matchData.teams[0] === 2) {
        l.emblem = 1;
      } else if (e !== 0 || l.isLocal) {
        l.emblem = e + 1;
      } else {
        l.emblem = 17;
      }
      a.Inventory.instance.matchData.teams[e] = l.emblem;
    } else {
      l.emblem = a.Inventory.instance.matchData.teams[e];
    }
    l.emblems = l.game.add.image(0, 0, r.Atlases.Interface, "Emblems00" + (l.emblem <= 10 ? "0" : "") + (l.emblem - 1));
    l.setSuperHint();
    l.emblems.anchor.set(0.5);
    l.emblems.scale.set(0.35);
    l.addChild(l.emblems);
    l.addChild(l.p1Name);
    l.addChild(l.p2Name);
    l.addChild(l.label1);
    l.addChild(l.label2);
    l.addChild(l.superHint1);
    l.addChild(l.superHint2);
    l.label1.x = -80;
    l.label2.x = 80;
    l.label1.y = 70;
    l.label2.y = 70;
    l.p1Name.x = -78;
    l.p1Name.y = 90;
    l.p2Name.x = 78;
    l.p2Name.y = 90;
    l.superHint1.x = -63;
    l.superHint1.y = 250;
    l.superHint2.x = 98;
    l.superHint2.y = 250;
    l.initPlayers();
    l.game.add.existing(l);
    return l;
  }
  s(e, t);
  e.prototype.updateEmblems = function () {
    this.emblems.loadTexture(r.Atlases.Interface, "Emblems00" + (this.emblem <= 10 ? "0" : "") + (this.emblem - 1));
  };
  e.prototype.setSuperHint = function () {
    if (this.emblem < 16) {
      this.superHint1.setText("Mega Dunk");
      this.superHint2.setText("Defence");
      this.superHint1Img.loadTexture(r.Atlases.Gameplay, "icon_ball0000");
      this.superHint2Img.loadTexture(r.Atlases.Gameplay, "icon_ball0001");
    } else {
      this.superHint1.setText("Alley-Oop");
      this.superHint2.setText("Fast Break");
      this.superHint1Img.loadTexture(r.Atlases.Gameplay, "icon_ball0002");
      this.superHint2Img.loadTexture(r.Atlases.Gameplay, "icon_ball0003");
    }
  };
  e.prototype.setUp = function (t = 0) {
    if (t === 0) {
      this.label1.setText("Player " + (this.id + 1).toString());
      this.label1.visible = true;
      this.label2.visible = false;
      this.shadow1.visible = true;
      this.shadow2.visible = false;
    } else if (t === 1) {
      this.label1.visible = true;
      this.label2.visible = true;
      this.label1.setText("Player 1");
      this.label2.setText("Player 2");
      this.shadow1.visible = true;
      this.shadow2.visible = true;
    } else if (t === 2) {
      this.label1.visible = false;
      this.label2.visible = false;
      this.shadow1.visible = true;
      this.shadow2.visible = false;
    }
  };
  e.prototype.initPlayers = function () {
    this.player1 = new o.Sprite(this.game, 0, 0, r.Atlases.Interface, "bg0000");
    this.player2 = new o.Sprite(this.game, 0, 0, r.Atlases.Interface, "bg0000");
    this.player1.x = -40;
    this.player2.x = 55;
    this.player1.y = this.player2.y = 179;
    this.player1.scale.set(0.65);
    this.player1.anchor.set(0.5);
    this.player2.scale.set(0.65);
    this.player2.anchor.set(0.5);
    this.addChild(this.player1);
    this.addChild(this.player2);
    this.showPlayers();
    this.player1.addChild(this.armature1.display);
    this.player2.addChild(this.armature2.display);
    this.player1.inputEnabled = true;
    this.player2.inputEnabled = true;
    this.player1.events.onInputDown.add(this.onArmature1Click, this);
    this.player2.events.onInputDown.add(this.onArmature2Click, this);
  };
  e.prototype.showPlayers = function () {
    var t = this.emblem * 2 - 2;
    var e = this.emblem * 2 - 1;
    if (this.armature1) {
      a.PlayersData.switchPlayer(this.armature1, t, t + this.id);
      a.PlayersData.switchPlayer(this.armature2, e, t + this.id);
    }
    this.p1Name.setText("");
    this.p2Name.setText("");
    if (a.Inventory.instance.matchData.players[this.id][0] === 0) {
      this.onArmature1Click(null, true);
    } else {
      this.onArmature2Click(null, true);
    }
  };
  e.prototype.onArmature1Click = function (t = null, e = false) {
    if (a.Inventory.instance.matchData.players[this.id][0] === 1 || e) {
      this.armature1.animation.play("idle", -1);
      this.armature2.animation.gotoAndStopByTime("idle", 0);
      this.shadow1.x = -75;
      this.shadow2.x = 80;
      this.label1.x = -78;
      this.label2.x = 78;
      a.Inventory.instance.matchData.players[this.id][0] = 0;
    }
  };
  e.prototype.onArmature2Click = function (t = null, e = false) {
    if (a.Inventory.instance.matchData.players[this.id][0] === 0 || e) {
      this.armature2.animation.play("idle", -1);
      this.armature1.animation.gotoAndStopByTime("idle", 0);
      this.shadow1.x = 80;
      this.shadow2.x = -75;
      this.label1.x = 78;
      this.label2.x = -78;
      a.Inventory.instance.matchData.players[this.id][0] = 1;
    }
  };
  e.prototype.changeTeam1 = function (t) {
    l.default.getInstance().play(r.Sounds.button);
    this.team = -1;
    this.checkEmblem();
    if (this.emblem === a.Inventory.instance.matchData.teams[(this.id + 1) % 2]) {
      this.checkEmblem();
    }
    this.updateClub();
  };
  e.prototype.changeTeam2 = function (t) {
    l.default.getInstance().play(r.Sounds.button);
    this.team = 1;
    this.checkEmblem();
    if (this.emblem === a.Inventory.instance.matchData.teams[(this.id + 1) % 2]) {
      this.checkEmblem();
    }
    this.updateClub();
  };
  e.prototype.updateClub = function () {
    a.Inventory.instance.matchData.teams[this.id] = this.emblem;
    this.updateEmblems();
    this.setSuperHint();
    this.showPlayers();
  };
  e.prototype.checkEmblem = function () {
    this.emblem += this.team;
    if (this.emblem === 0) {
      this.emblem = 17;
    } else if (this.emblem === 18) {
      this.emblem = 1;
    }
  };
  e.prototype.destroy = function () {
    this.armature1 = null;
    this.armature2 = null;
    this.player1 = null;
    this.player2 = null;
    this.manager = null;
    t.prototype.destroy.call(this);
  };
  return e;
}(Phaser.Group);
exports.SelectPlayer = c;