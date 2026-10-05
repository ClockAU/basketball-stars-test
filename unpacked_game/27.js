var i;
i = function () {
  return this;
}();
try {
  i = i || Function("return this")() || (0, eval)("this");
} catch (t) {
  if (typeof window == "object") {
    i = window;
  }
}
module.exports = i;