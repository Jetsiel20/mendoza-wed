(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu-principal');

  if (!toggle || !menu) return;

  const desktop = window.matchMedia('(min-width: 960px)');
  const label = toggle.querySelector('.menu-toggle__label');

  const setOpen = (open) => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Fechar' : 'Menu';
  };

  const syncLayout = () => {
    toggle.hidden = desktop.matches;
    if (desktop.matches) {
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'false');
      label.textContent = 'Menu';
    } else {
      setOpen(false);
    }
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (!desktop.matches && event.target instanceof Element && event.target.closest('a')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !desktop.matches && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (
      !desktop.matches &&
      !menu.hidden &&
      event.target instanceof Node &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  if (typeof desktop.addEventListener === 'function') {
    desktop.addEventListener('change', syncLayout);
  } else {
    desktop.addListener(syncLayout);
  }

  syncLayout();
})();
