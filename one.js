(function () {
  var els = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (e) {
      e.classList.add("in");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (a) {
      a.forEach(function (x) {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  els.forEach(function (e) {
    io.observe(e);
  });
  var links = document.querySelectorAll(".nav a"),
    ids = ["home", "about", "experience", "contact"];
  window.addEventListener(
    "scroll",
    function () {
      var cur = "home";
      ids.forEach(function (i) {
        var s = document.getElementById(i);
        if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4)
          cur = i;
      });
      links.forEach(function (l) {
        l.classList.toggle("on", l.getAttribute("href") === "#" + cur);
      });
    },
    { passive: true },
  );
})();
