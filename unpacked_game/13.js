e.prototype.update = function (e) {
    // MULTIPLAYER GUEST: bypass local physics and interpolate to Host's coordinates
    if (window.netState && window.netState.isGuest) {
      if (window.latestHostState) {
        var s = window.latestHostState;
        if (this.ball && this.ball.body && s.ball) {
          this.ball.body.position.x = s.ball.x;
          this.ball.body.position.y = s.ball.y;
          this.ball.updateGraphic();
        }
        if (this.playersLeft[0] && this.playersLeft[0].body && s.p1) {
          this.playersLeft[0].body.position.x = s.p1.x;
          this.playersLeft[0].body.position.y = s.p1.y;
          this.playersLeft[0].updateGraphic();
        }
        if (this.playersRight[0] && this.playersRight[0].body && s.p2) {
          this.playersRight[0].body.position.x = s.p2.x;
          this.playersRight[0].body.position.y = s.p2.y;
          this.playersRight[0].updateGraphic();
        }
        if (s.scores) {
          c.Inventory.instance.matchData.matchScore = s.scores;
          this.timer.updateScore(-1, s.scores[0]);
          this.timer.updateScore(1, s.scores[1]);
        }
      }
      return; 
    }

    // ORIGINAL OFFLINE/HOST PHYSICS LOOP
    if (this.isPaused) {
      if (this.m_tribune) {
        this.m_tribune.volume = 0;
      }
    } else {
      if (this.m_tribune) {
        this.m_tribune.volume = u.default.getInstance().sfx ? 1 : 0;
      }
      if (this.isPlaying) {
        if (this.isAlleyOop) {
          this.physics2.update(e);
        }
        t.prototype.update.call(this, e);
        if (this.isEnd) {
          this.deltaEndTime += e;
          if (this.deltaEndTime > this.delayEndTime) {
            if (this.isOvertime) {
              this.startMatch(false);
            } else {
              this.isPlaying = false;
              this.nextState = "PostMatch";
              this.finishMatch();
            }
          }
        } else if (!this.isWaiting && !this.isScored && !this.isTraining && !this.isSuperShot) {
          this.matchTime += e;
          this.timer.process(this.matchTime);
          if (this.matchTime >= this.endTime) {
            this.endOfTime();
          }
        }
      } else if (this.countDown.process(e)) {
        l.default.getInstance().play(m.Sounds.m_whistle);
        this.isPlaying = true;
      }
    }

    // MULTIPLAYER HOST: Broadcast state packets to the Guest
    if (window.netState && window.netState.isHost && window.socket) {
      window.socket.emit("host_state", {
        ball: this.ball && this.ball.body ? { x: this.ball.body.position.x, y: this.ball.body.position.y } : null,
        p1: this.playersLeft[0] && this.playersLeft[0].body ? { x: this.playersLeft[0].body.position.x, y: this.playersLeft[0].body.position.y } : null,
        p2: this.playersRight[0] && this.playersRight[0].body ? { x: this.playersRight[0].body.position.x, y: this.playersRight[0].body.position.y } : null,
        scores: c.Inventory.instance.matchData.matchScore
      });
    }
  };