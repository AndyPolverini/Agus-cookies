/* SCRIPT.JS — libro de recuerdos. Todo el contenido sale de config.js */
(() => {
  const C = CONFIG, $ = s => document.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  const placeholder = t => "data:image/svg+xml," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 360'><rect width='300' height='360' fill='#e9c9a4'/><text x='150' y='170' text-anchor='middle' font-family='monospace' font-size='18'>${esc(t)}</text><text x='150' y='200' text-anchor='middle' font-family='monospace' font-size='14'>(falta la foto)</text></svg>`);

  /* ---------- 3. LIBRO (páginas armadas desde config.js) ---------- */
  const book = $("#book");
  const MES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  const mesTxt = f => { const m = /^(\d{4})-(\d{2})/.exec(f || ""); return m ? MES[+m[2] - 1] + " " + m[1] : "más recuerdos"; };
  const store = k => { try { return localStorage.getItem("pibble-" + k) || ""; } catch (e) { return ""; } };
  let used = []; try { used = JSON.parse(store("vales")) || []; } catch (e) {}

  const pages = [];
  // Portada: collage con fotos tuyas (C.portada = lista de archivos; si está vacía, elige 3 solas)
  const fl = C.recuerdos.filter(r => r.tipo === "foto");
  const portada = ((C.portada && C.portada.length) ? C.portada : [0, Math.floor(fl.length / 3), Math.floor(fl.length * 2 / 3)].map(k => fl[k] && fl[k].archivo).filter(Boolean)).slice(0, 3);
  const tape = "FELIZ CUMPLE ✶ ".repeat(6);
  const letras = [...C.nombre].map((ch, k) => `<span style="--d:${k}">${ch === " " ? "&nbsp;" : esc(ch)}</span>`).join("");
  const pics = portada.map((f, k) => `<figure style="--r:${[-8, 5, -3][k]}deg;--x:${[0, 30, 60][k]}%;--y:${[10, 0, 16][k]}%;--d:${k * .7}s"><img src="assets/fotos/${esc(f)}" alt="" decoding="async"></figure>`).join("");
  pages.push({ cls: "bk-cover", html: `<div class="cv-tape"><div class="mq"><span>${tape}</span><span>${tape}</span></div></div><p class="para">para</p><h2 class="cv-name" style="--n:${[...C.nombre].length}" aria-label="${esc(C.nombre)}">${letras}</h2><div class="cv-pics">${pics}</div><h3>${esc(C.tituloLibro)}</h3><p class="cv-msg">${esc(C.mensajeCumple)}</p><small>${esc(C.fecha)}</small><button class="btn cv-open" data-go type="button">abrir ✶</button>` });
  pages.push({ cls: "bk-note", html: `<h3>${esc(C.carta.saludo)}</h3>${C.carta.texto.map(p => `<p>${esc(p)}</p>`).join("")}<p class="firma">${esc(C.firma)}</p>` });

  // Agrupa recuerdos consecutivos del mismo tipo y mes: 4 fotos o 2 videos por página
  const groups = []; let cur = null;
  C.recuerdos.forEach(r => {
    const mes = mesTxt(r.fecha), max = r.tipo === "video" ? 2 : 4;
    if (!cur || cur.tipo !== r.tipo || cur.mes !== mes || cur.items.length >= max) { cur = { tipo: r.tipo, mes, items: [] }; groups.push(cur); }
    cur.items.push(r);
  });
  groups.forEach(g => {
    if (g.tipo === "video") {
      pages.push({ cls: "bk-vids", html: `<span class="bk-mes">${g.mes} · video</span>` + g.items.map(r => `<figure class="bk-vid"><video controls playsinline preload="metadata" src="assets/videos/${esc(r.archivo)}#t=0.3"></video>${r.descripcion ? `<figcaption>${esc(r.descripcion)}</figcaption>` : ""}</figure>`).join("") });
    } else {
      pages.push({ cls: "bk-photos", html: `<span class="bk-mes">${g.mes}</span><div class="bk-grid n${g.items.length}">` + g.items.map(r => `<figure><img src="assets/fotos/${esc(r.archivo)}" alt="${esc(r.descripcion || "Foto de " + g.mes)}" loading="lazy" decoding="async" data-big><figcaption>${esc(r.descripcion)}</figcaption></figure>`).join("") + `</div>` });
    }
  });
  (C.paginasNota || []).forEach(p => pages.push({ cls: "bk-write", html: `<h3>${esc(p.titulo)}</h3><textarea data-key="${esc(p.clave)}" placeholder="${esc(p.ayuda)}" aria-label="${esc(p.titulo)}">${esc(store(p.clave))}</textarea><button class="btn" data-copy="${esc(p.clave)}" type="button">Copiar mi texto</button>` }));
  const valePage = () => C.vales.reduce((a, v, i) => { (a[Math.floor(i / 3)] = a[Math.floor(i / 3)] || []).push(v); return a; }, []).map(g => ({ cls: "bk-valepg", html: `<h3>Vales</h3><div class="bk-vales">` + g.map(v => `<article class="vale ${esc(v.color)}${used.includes(v.id) ? " used" : ""}"><h3>${esc(v.titulo)}</h3><p>${esc(v.detalle)}</p><span class="stamp">USADO</span><button class="btn" data-vale="${esc(v.id)}" type="button">${used.includes(v.id) ? "Deshacer" : "Canjear"}</button></article>`).join("") + `</div>` }));
  const vi = pages.findIndex(p => p.cls === "bk-write");   // vales antes de las páginas de escritura
  pages.splice(vi < 0 ? pages.length : vi, 0, ...valePage());

  const band = (t, cls, dur) => { const x = (esc(t.toUpperCase()) + " ✶ ").repeat(7); return `<div class="bk-band ${cls}"><div class="mq" style="--dur:${dur}s"><span>${x}</span><span>${x}</span></div></div>`; };
  const cols = ["#ff2e93", "#c8ff2e", "#000", "#fffdf7"], gl = ["✶", "✦", "●", "✿"];
  const fondo = `<div class="bk-bg" aria-hidden="true">${band("feliz cumple", "b1", 38)}${band(C.nombre, "b2", 30)}${band("tu libro de recuerdos", "b3", 46)}` +
    Array.from({ length: 14 }, (_, k) => `<i style="left:${(k * 37) % 96}%;top:${(k * 53) % 90}%;--s:${1.6 + (k % 4) * .6}rem;--t:${6 + (k % 5) * 2}s;--r:${k * 40}deg;color:${cols[k % 4]}">${gl[k % 4]}</i>`).join("") + `</div>`;
  book.innerHTML = fondo + `<div class="bk-spread"><section class="bk-page bk-l" id="bkL"></section><section class="bk-page bk-r" id="bkR"></section></div>
    <nav class="bk-nav"><button class="btn" id="bkPrev" type="button" aria-label="Página anterior">‹</button><span id="bkPg"></span><button class="btn" id="bkNext" type="button" aria-label="Página siguiente">›</button></nav>`;
  const L = $("#bkL"), R = $("#bkR"), wide = () => matchMedia("(min-width:900px)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0;
  const view = () => (wide() ? [null, ...pages] : pages);
  const fill = (el, p, side) => { el.className = `bk-page ${side} ${p ? p.cls : "bk-empty"}`; el.innerHTML = p ? `<div class="bk-in">${p.html}</div>` : ""; };
  function draw() {
    const v = view(), st = wide() ? 2 : 1;
    i = Math.max(0, Math.min(i, v.length - 1)); if (wide()) i -= i % 2;
    fill(L, wide() ? v[i] : null, "bk-l"); fill(R, wide() ? v[i + 1] : v[i], "bk-r");
    $("#bkPg").textContent = `${Math.min(i + st, v.length)} / ${v.length}`;
    $("#bkPrev").disabled = i === 0; $("#bkNext").disabled = i + st >= v.length;
  }
  function turn(d) {
    const st = wide() ? 2 : 1, n = i + d * st, len = view().length;
    if (n < 0 || n >= len) return;
    if (reduce) { i = n; draw(); return; }
    const el = d > 0 || !wide() ? R : L, a = d > 0 ? -90 : 90;
    el.animate([{ transform: "rotateY(0)" }, { transform: `rotateY(${a}deg)` }], { duration: 200, easing: "ease-in" }).finished.then(() => {
      i = n; draw();
      (d > 0 || !wide() ? R : L).animate([{ transform: `rotateY(${-a}deg)` }, { transform: "rotateY(0)" }], { duration: 260, easing: "ease-out" });
    });
  }
  $("#bkPrev").onclick = () => turn(-1); $("#bkNext").onclick = () => turn(1);
  addEventListener("keydown", e => { if (book.hidden || /TEXTAREA/.test(e.target.tagName)) return; if (e.key === "ArrowRight") turn(1); if (e.key === "ArrowLeft") turn(-1); });
  addEventListener("resize", draw);
  let startTouch = null;                           // deslizar para pasar de página
  book.addEventListener("touchstart", e => {
    startTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true, capture: true });
  book.addEventListener("touchend", e => {
    if (!startTouch) return;
    const dx = e.changedTouches[0].clientX - startTouch.x, dy = e.changedTouches[0].clientY - startTouch.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) turn(dx < 0 ? 1 : -1);
    startTouch = null;
  }, { passive: true, capture: true });
  book.addEventListener("touchcancel", () => { startTouch = null; }, { passive: true, capture: true });

  book.addEventListener("input", e => { const k = e.target.dataset.key; if (k) try { localStorage.setItem("pibble-" + k, e.target.value); } catch (_) {} });
  book.addEventListener("click", e => {
    const t = e.target;
    if (t.dataset.go !== undefined) turn(1);
    if (t.matches("img[data-big]")) { const lb = document.createElement("div"); lb.className = "bk-lb"; lb.innerHTML = `<img src="${t.src}" alt="${esc(t.alt)}">`; lb.onclick = () => lb.remove(); document.body.appendChild(lb); }
    if (t.dataset.vale) { const id = t.dataset.vale; used = used.includes(id) ? used.filter(x => x !== id) : [...used, id]; try { localStorage.setItem("pibble-vales", JSON.stringify(used)); } catch (_) {} t.closest(".vale").classList.toggle("used", used.includes(id)); t.textContent = used.includes(id) ? "Deshacer" : "Canjear"; }
    if (t.dataset.copy) { navigator.clipboard && navigator.clipboard.writeText(store(t.dataset.copy)).then(() => { t.textContent = "¡Copiado!"; }); }
  });
  book.addEventListener("error", e => { if (e.target.tagName === "IMG") e.target.src = placeholder("falta la foto"); }, true);
  draw();

  /* ---------- 4. MÚSICA (solo con un toque) ---------- */
  function initMusic() {
    if (!C.musica) return;
    const bgm = $("#bgm"), btn = $("#musicBtn"); bgm.src = C.musica; btn.hidden = false;
    bgm.addEventListener("error", () => { btn.hidden = true; });
    btn.onclick = () => {
      const on = bgm.paused;
      if (on) { const p = bgm.play(); if (p) p.catch(() => (btn.hidden = true)); } else bgm.pause();
      btn.textContent = "♪ música: " + (on ? "sí" : "no"); btn.setAttribute("aria-pressed", on);
    };
  }
  initMusic();
})();
