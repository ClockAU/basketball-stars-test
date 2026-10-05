e.prototype.update = function () {
    this.currentMove = 0;
    this.currentDash = 0;

    // MULTIPLAYER: Use remote network inputs when hosting online
    if (window.netState && window.netState.isHost && window.remoteP2Input) {
      var inp = window.remoteP2Input;
      if (inp.left) this.currentMove--;
      if (inp.right) this.currentMove++;
      this.currentJump = !!inp.jump;
      this.currentAction = !!inp.action;
      this.currentSuper = !!inp.super;
      this.currentBlockOrPump = !!inp.down;
      return;
    }

    // ORIGINAL OFFLINE CONTROLS
    if (n.default.instance.isbtnLeft) {
      if (n.default.instance.isbtnLeftDouble) {
        this.currentDash = -1;
      }
      this.currentMove--;
    }
    if (n.default.instance.isbtnRight) {
      if (n.default.instance.isbtnRightDouble) {
        this.currentDash = 1;
      }
      this.currentMove++;
    }
    this.currentJump = n.default.instance.isbtnUp;
    this.currentAction = n.default.instance.isbtnL;
    this.currentSuper = n.default.instance.isbtnK;
    this.currentBlockOrPump = n.default.instance.isbtnDown;
  };