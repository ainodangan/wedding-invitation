(function () {
  var WEDDING_DATETIME = new Date("2026-10-10T11:00:00+09:00");
  var el = document.getElementById("countdown");
  if (!el) return;

  function render() {
    var now = new Date();
    var diffMs = WEDDING_DATETIME - now;

    if (diffMs <= 0) {
      el.textContent = "本日、誠にありがとうございます";
      return;
    }

    var days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    el.textContent = "挙式まであと " + days + " 日";
  }

  render();
  setInterval(render, 1000 * 60 * 60);
})();
