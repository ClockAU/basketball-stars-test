exports.__esModule = true;
var s = function () {
  function t() {
    this.brandInstances = {};
    this.brandDomains = [];
    this.brandInstances[t.YEP10] = "";
    this.brandInstances[t.Google] = "https://play.google.com/store/apps/details?id=air.com.madpuffers.football";
    this.brandInstances[t.Apple] = "";
    t.Current = t.YEP10;
    this.brandDomains = [];
    this.brandDomains.push("y8.com");
    this.brandDomains.push("id.net");
    this.brandDomains.push("pog.com");
    this.brandDomains.push("gamepost.com");
    this.brandDomains.push("dollmania.com");
    this.brandDomains.push("madpuffers.com");
    this.brandDomains.push("localhost:");
  }
  t.getInstance = function () {
    if (t.instance === null) {
      t.instance = new t();
    }
    return t.instance;
  };
  t.prototype.checkDomain = function (t) {
    for (var e = 0; e < this.brandDomains.length; e++) {
      var i = this.brandDomains[e];
      if (t.indexOf(i) !== -1) {
        return true;
      }
    }
    return false;
  };
  t.prototype.getUrlLock = function () {
    if (t.Current !== null) {
      return this.brandInstances[t.Current];
    } else {
      return "";
    }
  };
  t.prototype.getUrl = function (t) {
    return this.brandInstances[t];
  };
  t.instance = null;
  t.YEP10 = "yep10";
  t.Current = t.YEP10;
  t.Google = "google";
  t.Apple = "itunes";
  return t;
}();
exports.default = s;