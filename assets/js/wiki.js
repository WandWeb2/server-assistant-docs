/* ============================================================================
   Server Assistant Wiki — client behaviour (no external dependencies).
     1. Search   — a tiny token-scored search over /wiki/search.json.
     2. Stepper  — turns [data-wiz] blocks into a clickable step-through so a
                   multi-screen wizard can be walked one state at a time.
   Both are progressive enhancements: with JS off, search is simply absent and
   every wizard state renders stacked and fully visible.
   ============================================================================ */
(function () {
  "use strict";

  /* ---- 1. Search --------------------------------------------------------- */
  (function search() {
    var input = document.getElementById("wiki-search-input");
    var list  = document.getElementById("wiki-search-results");
    if (!input || !list) return;

    var index = null, loading = false;

    // Resolve /wiki/search.json against the site baseurl by reading it off the
    // input's own page URL prefix (everything up to "/wiki/").
    function indexUrl() {
      var p = window.location.pathname;
      var i = p.indexOf("/wiki/");
      var base = i >= 0 ? p.slice(0, i) : "";
      return base + "/wiki/search.json";
    }

    function load() {
      if (index || loading) return;
      loading = true;
      fetch(indexUrl())
        .then(function (r) { return r.ok ? r.json() : []; })
        .then(function (data) { index = data || []; render(input.value); })
        .catch(function () { index = []; });
    }

    function esc(s) {
      return String(s).replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
    }

    function score(entry, terms) {
      var hay = {
        title:    (entry.title || "").toLowerCase(),
        keywords: (Array.isArray(entry.keywords) ? entry.keywords.join(" ") : (entry.keywords || "")).toLowerCase(),
        category: (entry.category || "").toLowerCase(),
        summary:  (entry.summary || "").toLowerCase(),
        body:     (entry.body || "").toLowerCase()
      };
      var total = 0;
      for (var t = 0; t < terms.length; t++) {
        var term = terms[t], hit = 0;
        if (hay.title.indexOf(term) >= 0)    hit += 6;
        if (hay.keywords.indexOf(term) >= 0) hit += 4;
        if (hay.category.indexOf(term) >= 0) hit += 2;
        if (hay.summary.indexOf(term) >= 0)  hit += 2;
        if (hay.body.indexOf(term) >= 0)     hit += 1;
        if (hit === 0) return 0;        // every term must appear somewhere
        total += hit;
      }
      return total;
    }

    function render(q) {
      if (!index) { load(); return; }
      var query = (q || "").trim().toLowerCase();
      if (query.length < 2) { hide(); return; }
      var terms = query.split(/\s+/);
      var ranked = [];
      for (var i = 0; i < index.length; i++) {
        var s = score(index[i], terms);
        if (s > 0) ranked.push({ s: s, e: index[i] });
      }
      ranked.sort(function (a, b) { return b.s - a.s; });
      ranked = ranked.slice(0, 8);

      if (!ranked.length) {
        list.innerHTML = '<li class="wiki-sr-empty">No matches for “' + esc(q) + '”</li>';
        list.hidden = false;
        return;
      }
      var html = "";
      for (var j = 0; j < ranked.length; j++) {
        var e = ranked[j].e;
        html += '<li><a href="' + esc(e.url) + '">' +
                '<span class="wiki-sr-title">' + esc(e.title) + '</span>' +
                (e.category ? '<span class="wiki-sr-cat">' + esc(e.category) + '</span>' : "") +
                '</a></li>';
      }
      list.innerHTML = html;
      list.hidden = false;
    }

    function hide() { list.hidden = true; list.innerHTML = ""; }

    input.addEventListener("focus", load);
    input.addEventListener("input", function () { render(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { input.value = ""; hide(); input.blur(); }
      if (e.key === "Enter") {
        var first = list.querySelector("a");
        if (first) { e.preventDefault(); window.location = first.getAttribute("href"); }
      }
    });
    document.addEventListener("click", function (e) {
      if (!list.contains(e.target) && e.target !== input) hide();
    });
  })();

  /* ---- 2. Wizard step-through -------------------------------------------- */
  (function stepper() {
    var wizards = document.querySelectorAll("[data-wiz]");
    if (!wizards.length) return;

    Array.prototype.forEach.call(wizards, function (wiz) {
      var steps = wiz.querySelectorAll(".wiz-step");
      if (steps.length < 2) return;       // nothing to step through
      wiz.classList.add("wiz-ready");     // CSS switches to single-view mode

      var idx = 0;
      var label = wiz.querySelector(".wiz-label");
      var prev  = wiz.querySelector(".wiz-prev");
      var next  = wiz.querySelector(".wiz-next");
      var dotsBox = wiz.querySelector(".wiz-dots");
      var counter = wiz.querySelector(".wiz-counter");
      var dots = [];

      if (dotsBox) {
        for (var d = 0; d < steps.length; d++) {
          var dot = document.createElement("button");
          dot.type = "button";
          dot.className = "wiz-dot";
          dot.setAttribute("aria-label", "Go to step " + (d + 1));
          (function (n) { dot.addEventListener("click", function () { go(n); }); })(d);
          dotsBox.appendChild(dot);
          dots.push(dot);
        }
      }

      function go(n) {
        idx = Math.max(0, Math.min(steps.length - 1, n));
        for (var i = 0; i < steps.length; i++) {
          steps[i].classList.toggle("on", i === idx);
          if (dots[i]) dots[i].classList.toggle("on", i === idx);
        }
        if (label) label.textContent = steps[idx].getAttribute("data-step") || "";
        if (counter) counter.textContent = (idx + 1) + " / " + steps.length;
        if (prev) prev.disabled = (idx === 0);
        if (next) next.disabled = (idx === steps.length - 1);
      }

      if (prev) prev.addEventListener("click", function () { go(idx - 1); });
      if (next) next.addEventListener("click", function () { go(idx + 1); });
      go(0);
    });
  })();

})();
