/* ============================================================================
   Server Assistant docs: landing page motion (index.md only).
   Self-contained, no libraries. Three jobs:
     1. Scroll progress bar (.sa-progress).
     2. Gentle parallax on the hero art (writes --hero-shift).
     3. Staggered reveal-on-scroll for the cards INSIDE sections (.lr),
        complementing the coarser top-level reveal in _includes/footer.html.
   Doctrine: content is fully visible with JS off. The hidden pre-reveal state
   only exists once this script adds .lr-armed to <body>, and it never does so
   for prefers-reduced-motion users or browsers without IntersectionObserver.
   ============================================================================ */
(function () {
  "use strict";
  var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  /* 1 ── Scroll progress bar */
  onReady(function () {
    if (reduced) return;
    var bar = document.querySelector(".sa-progress");
    if (!bar) return;
    var ticking = false;
    function paint() {
      ticking = false;
      var doc = document.documentElement;
      var max = (doc.scrollHeight - doc.clientHeight) || 1;
      var p = Math.min(1, Math.max(0, (window.scrollY || doc.scrollTop || 0) / max));
      bar.style.transform = "scaleX(" + p + ")";
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(paint); }
    }, { passive: true });
    window.addEventListener("resize", paint, { passive: true });
    paint();
  });

  /* 2 ── Hero parallax: the Allay drifts up slightly slower than the page. */
  onReady(function () {
    if (reduced) return;
    var art = document.querySelector(".hero-art");
    if (!art) return;
    var ticking = false;
    function paint() {
      ticking = false;
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      /* Only meaningful near the top; clamp so it never wanders far. */
      var shift = Math.min(60, y * 0.18);
      art.style.setProperty("--hero-shift", shift.toFixed(1) + "px");
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(paint); }
    }, { passive: true });
    paint();
  });

  /* 3 ── Staggered card reveals */
  onReady(function () {
    if (reduced || !("IntersectionObserver" in window)) return;
    var groups = document.querySelectorAll("[data-stagger]");
    if (!groups.length) return;
    document.body.classList.add("lr-armed");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    Array.prototype.forEach.call(groups, function (group) {
      var kids = group.children;
      for (var i = 0; i < kids.length; i++) {
        kids[i].classList.add("lr");
        /* Stagger within the group, capped so late cards never feel laggy. */
        kids[i].style.setProperty("--lr-delay", (Math.min(i, 5) * 0.08).toFixed(2) + "s");
        io.observe(kids[i]);
      }
    });
  });
})();
