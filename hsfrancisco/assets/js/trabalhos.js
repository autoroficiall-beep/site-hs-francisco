(function () {
  const grid = document.getElementById('works-grid');
  if (!grid || typeof TRABALHOS === 'undefined') return;
  const slug = grid.dataset.servico || '';
  const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const list = (slug ? [slug] : Object.keys(TRABALHOS)).flatMap(s => (TRABALHOS[s] || []).map(w => ({ ...w, servico: s })));
  if (!list.length) return; // fica visível a mensagem "Em breve"
  const empty = document.getElementById('works-empty');
  if (empty) empty.hidden = true;

  const cover = (w) => {
    const img = w.capa || (w.imagens && w.imagens[0] && w.imagens[0].src);
    if (img) return `<img src="${esc(img)}" alt="${esc(w.titulo)}" loading="lazy" width="800" height="600">`;
    const v = w.videos && w.videos[0];
    if (v) return `<video src="${esc(v.src)}" ${v.poster ? `poster="${esc(v.poster)}"` : ''} muted playsinline preload="metadata"></video>`;
    return '';
  };

  grid.insertAdjacentHTML('beforeend', list.map((w, i) => `
    <article class="work-card" role="button" tabindex="0" aria-haspopup="dialog" data-i="${i}">
      <div class="work-card-media">${cover(w)}</div>
      <div class="work-card-body">
        <span class="work-tag">${esc(SERVICE_NAMES[w.servico])}</span>
        <h3 class="work-title">${esc(w.titulo)}</h3>
        <p class="work-meta">${esc([w.local, w.ano].filter(Boolean).join(' · '))}</p>
        ${w.resumo ? `<p class="work-desc">${esc(w.resumo)}</p>` : ''}
      </div>
    </article>`).join(''));

  function workHTML(w) {
    const gallery = (w.imagens && w.imagens.length) ? w.imagens : (w.capa ? [{ src: w.capa }] : []);
    const imgs = gallery.map(m => `<img src="${esc(m.src)}" alt="${esc(m.alt || w.titulo)}" loading="lazy">`).join('');
    const vids = (w.videos || []).map(v => `<video src="${esc(v.src)}" ${v.poster ? `poster="${esc(v.poster)}"` : ''} controls playsinline preload="metadata"></video>`).join('');
    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(`Olá, vi o trabalho "${w.titulo}" no site e gostaria de pedir um orçamento de ${SERVICE_NAMES[w.servico]}.`);
    return `
      <div class="modal-overlay">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close" aria-label="Fechar">×</button>
          <div class="modal-body">
            <span class="modal-category">${esc(SERVICE_NAMES[w.servico])}</span>
            <h2 class="modal-title" id="modal-title">${esc(w.titulo)}</h2>
            <p class="modal-meta">${esc([w.local, w.ano].filter(Boolean).join(' · '))}</p>
            ${w.resumo ? `<div class="modal-section"><p class="modal-desc">${esc(w.resumo)}</p></div>` : ''}
            <div class="modal-section modal-media">${imgs}${vids}</div>
            <div class="modal-cta"><a class="btn btn-primary" href="${wa}" target="_blank" rel="noopener noreferrer">Pedir orçamento semelhante</a></div>
          </div>
        </div>
      </div>`;
  }

  const openCard = (card) => { const w = list[card.dataset.i]; if (w) HS.open(workHTML(w)); };
  grid.addEventListener('click', (e) => { const c = e.target.closest('.work-card'); if (c) openCard(c); });
  grid.addEventListener('keydown', (e) => {
    const c = e.target.closest('.work-card');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openCard(c); }
  });
})();
