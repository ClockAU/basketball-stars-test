exports.__esModule = true;
var s = function () {
  function t() {}
  t.show = function () {
    var t = document.getElementById("loader");
    if (t) {
      t.style.display = "block";
    }
  };
  t.hide = function () {
    var t = document.getElementById("loader");
    if (t) {
      t.style.display = "none";
    }
  };
  return t;
}();
exports.default = s;