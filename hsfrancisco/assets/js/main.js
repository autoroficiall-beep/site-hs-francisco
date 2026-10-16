const WHATSAPP_NUMBER = "244923212197";

// Links antigos com âncora (/#sobre) redireccionam para as novas páginas
(() => {
  const map = { '#sobre': '/sobre/', '#servicos': '/servicos/', '#contacto': '/contactos/' };
  if ((location.pathname === '/' || location.pathname === '/index.html') && map[location.hash]) {
    location.replace(map[location.hash]);
  }
})();

// Navbar com fundo ao fazer scroll
const navbar = document.querySelector('.navbar');
const onScroll = () => navbar && navbar.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', onScroll);
onScroll();

// Menu móvel
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navToggleBar = document.querySelector('.nav-toggle-bar');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggleBar.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggleBar.classList.remove('open');
    });
  });
}

// Animação de entrada ao fazer scroll
const reveal = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add('revealed');
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Vídeo do hero: visível no PC e no telemóvel
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.muted = true;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  } else {
    const tryPlay = () => { const p = heroVideo.play(); if (p && p.catch) p.catch(() => {}); };
    tryPlay();
    // Alguns telemóveis (poupança de bateria) só deixam arrancar após o primeiro toque
    ['touchstart', 'click', 'scroll'].forEach(ev => window.addEventListener(ev, tryPlay, { once: true, passive: true }));
  }
}

// Janela modal partilhada (serviços e trabalhos)
const HS = (() => {
  let lastFocus = null;
  function open(html) {
    if (document.querySelector('.modal-overlay')) return;
    lastFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    document.body.insertAdjacentHTML('beforeend', html);
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }
  function close() {
    const m = document.querySelector('.modal-overlay');
    if (!m) return;
    m.remove();
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) close();
  });
  document.addEventListener('keydown', (e) => {
    const overlay = document.querySelector('.modal-overlay');
    if (!overlay) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'Tab') {
      const items = overlay.querySelectorAll('button, a[href], video[controls]');
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  return { open, close };
})();
