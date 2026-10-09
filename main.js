(function () {
  const cfg = window.NK_SITE || {};
  const host = cfg.playHost || "play.nakonechnik.fun:7777";

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const hostLabel = document.getElementById("host-label");
  if (hostLabel) hostLabel.textContent = host;

  function wire(id, url) {
    const el = document.getElementById(id);
    if (!el || !url) return;
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }

  function copyHost(e) {
    if (e) e.preventDefault();
    const done = () => {
      const btn = document.getElementById("copy-host");
      const span = document.getElementById("host-label");
      if (!btn || !span) return;
      btn.classList.add("is-copied");
      const prev = span.textContent;
      span.textContent = "Скопировано";
      setTimeout(() => {
        btn.classList.remove("is-copied");
        span.textContent = prev;
      }, 1400);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(host).then(done).catch(() => fallbackCopy(host, done));
    } else {
      fallbackCopy(host, done);
    }
  }

  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (_) {
      /* ignore */
    }
    document.body.removeChild(ta);
    done();
  }

  wire("link-tg", cfg.telegram);
  wire("link-donate", cfg.donate);

  const copyBtn = document.getElementById("copy-host");
  if (copyBtn) copyBtn.addEventListener("click", copyHost);
})();
