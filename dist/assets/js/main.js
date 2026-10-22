/* Navigation remains visible when JavaScript is unavailable. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu-principal');
  if (!toggle || !menu) return;
  const desktop = window.matchMedia('(min-width: 800px)');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Fechar menu' : 'Menu';
    menu.hidden = !open;
  };
  const syncLayout = () => {
    if (desktop.matches && document.activeElement === toggle) {
      menu.querySelector('a')?.focus();
    }
    toggle.hidden = desktop.matches;
    setOpen(desktop.matches);
    if (!desktop.matches && menu.contains(document.activeElement)) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (event) => {
    if (!desktop.matches && event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !desktop.matches && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  desktop.addEventListener('change', syncLayout);
  syncLayout();
})();

/* Service cards stay visible without observer support or with reduced motion. */
(() => {
  const cards = document.querySelectorAll('#solucoes .service-card');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || motion.matches) return;
  const reveal = (card) => {
    card.classList.remove('service-reveal-pending');
    card.classList.add('service-reveal-ready');
    observer.unobserve(card);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, { threshold: 0.08 });
  cards.forEach((card) => {
    card.classList.add('service-reveal-pending');
    observer.observe(card);
    card.addEventListener('focusin', () => reveal(card), { once: true });
    card.addEventListener('animationend', () => card.classList.remove('service-reveal-ready'));
  });
  motion.addEventListener('change', () => {
    if (motion.matches) {
      cards.forEach((card) => card.classList.remove('service-reveal-pending', 'service-reveal-ready'));
      observer.disconnect();
    }
  });
})();
