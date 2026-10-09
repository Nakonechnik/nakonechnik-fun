(function () {
  const cfg = window.NK_SITE || {};
  const host = cfg.playHost || "play.nakonechnik.fun";

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const hostLabel = document.getElementById("host-label");
  if (hostLabel) hostLabel.textContent = host;

  function wire(id, url, missingTitle) {
    const el = document.getElementById(id);
    if (!el) return;
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.classList.remove("is-disabled");
    } else {
      el.href = "#";
      el.classList.add("is-disabled");
      el.title = missingTitle || "Ссылка скоро появится";
      el.addEventListener("click", (e) => e.preventDefault());
    }
  }

  function copyHost(e) {
    if (e) e.preventDefault();
    const done = () => {
      const btn = document.getElementById("copy-host");
      const play = document.getElementById("link-play");
      if (btn) {
        btn.classList.add("is-copied");
        const span = document.getElementById("host-label");
        const prev = span ? span.textContent : host;
        if (span) span.textContent = "Скопировано";
        setTimeout(() => {
          btn.classList.remove("is-copied");
          if (span) span.textContent = prev;
        }, 1400);
      }
      if (play) {
        const old = play.textContent;
        play.textContent = "Адрес скопирован";
        setTimeout(() => {
          play.textContent = old;
        }, 1400);
      }
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

  const play = document.getElementById("link-play");
  if (play) {
    play.href = "#";
    play.addEventListener("click", copyHost);
  }

  const play2 = document.getElementById("link-play-2");
  if (play2) {
    play2.href = "#";
    play2.addEventListener("click", copyHost);
  }

  wire("link-tg", cfg.telegram, "Добавь ссылку в config.js → telegram");
  wire("link-tg-2", cfg.telegram, "Добавь ссылку в config.js → telegram");
  wire("link-donate", cfg.donate, "Добавь ссылку в config.js → donate");
  wire("link-donate-2", cfg.donate, "Добавь ссылку в config.js → donate");

  const copyBtn = document.getElementById("copy-host");
  if (copyBtn) copyBtn.addEventListener("click", copyHost);
})();
