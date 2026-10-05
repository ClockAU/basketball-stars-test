exports.__esModule = true;
var s = function () {
  function t(t) {
    this.type = -1;
    this.player = t;
    this.SIDE = t.SIDE;
  }
  t.prototype.playerOnGround = function () {};
  t.prototype.playerOnBlock = function () {};
  t.prototype.ballInOwnHands = function (t = 0) {};
  t.prototype.ballInOpponentsHands = function (t = 0) {};
  t.prototype.ballOwnShoot = function (t = 0) {};
  t.prototype.ballOpponentShoot = function (t = 0) {};
  t.prototype.ballOthers = function () {};
  t.prototype.readyForAction = function () {
    return false;
  };
  t.prototype.releaseBlockOrPump = function (t) {
    return false;
  };
  t.prototype.restart = function (t) {};
  t.prototype.update = function (t) {};
  t.prototype.dispose = function () {
    this.player = null;
  };
  return t;
}();
exports.BaseController = s;