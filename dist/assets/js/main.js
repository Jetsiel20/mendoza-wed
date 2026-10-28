
/* ==========================================
   MENDOZA — SEGURANÇA E TECNOLOGIA
   MAIN JS | VERSÃO 2.0

   Navegação responsiva
   Acessibilidade
   Interações leves
   Animações progressivas

   JavaScript Vanilla — sem dependências
========================================== */


/* ==========================================
   01. NAVEGAÇÃO RESPONSIVA
========================================== */

(() => {

  const toggle = document.querySelector(
    '.menu-toggle'
  );

  const menu = document.querySelector(
    '#menu-principal'
  );

  if (!toggle || !menu) return;

  /*
    Deve coincidir com o breakpoint
    definido em components.css.
  */

  const desktop = window.matchMedia(
    '(min-width: 1100px)'
  );


  /* ----------------------------------------
     Abrir ou fechar menu móvel
  ---------------------------------------- */

  const setMenuOpen = (open) => {

    if (desktop.matches) return;

    menu.hidden = !open;

    toggle.setAttribute(
      'aria-expanded',
      String(open)
    );

    toggle.textContent = open
      ? 'Fechar menu'
      : 'Menu';

  };


  /* ----------------------------------------
     Sincronizar layout
  ---------------------------------------- */

  const syncLayout = () => {

    const focusOnToggle =
      document.activeElement === toggle;

    const focusInMenu =
      menu.contains(document.activeElement);

    toggle.hidden = desktop.matches;

    if (desktop.matches) {

      menu.hidden = false;

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

      toggle.textContent = 'Menu';

      /*
        Evita perder o foco quando
        o botão desaparece.
      */

      if (focusOnToggle) {
        menu.querySelector('a')?.focus();
      }

      return;
    }

    /*
      No layout móvel, começamos
      com o menu fechado.
    */

    setMenuOpen(false);

    /*
      Evita deixar o foco em um
      elemento que ficou oculto.
    */

    if (focusInMenu) {
      toggle.focus();
    }

  };


  /* ----------------------------------------
     Clique no botão
  ---------------------------------------- */

  toggle.addEventListener('click', () => {

    const isOpen =
      toggle.getAttribute(
        'aria-expanded'
      ) === 'true';

    setMenuOpen(!isOpen);

  });


  /* ----------------------------------------
     Fechar após selecionar um link
  ---------------------------------------- */

  menu.addEventListener('click', (event) => {

    if (
      desktop.matches ||
      !(event.target instanceof Element)
    ) {
      return;
    }

    if (
      event.target.closest('a[href]')
    ) {
      setMenuOpen(false);
    }

  });


  /* ----------------------------------------
     Fechar com Escape
  ---------------------------------------- */

  document.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key !== 'Escape' ||
        desktop.matches ||
        menu.hidden
      ) {
        return;
      }

      setMenuOpen(false);

      toggle.focus();

    }
  );


  /* ----------------------------------------
     Fechar ao clicar fora
  ---------------------------------------- */

  document.addEventListener(
    'pointerdown',
    (event) => {

      if (
        desktop.matches ||
        menu.hidden
      ) {
        return;
      }

      if (
        menu.contains(event.target) ||
        toggle.contains(event.target)
      ) {
        return;
      }

      setMenuOpen(false);

    }
  );


  /* ----------------------------------------
     Fechar quando o foco sai do menu
  ---------------------------------------- */

  document.addEventListener(
    'focusin',
    (event) => {

      if (
        desktop.matches ||
        menu.hidden
      ) {
        return;
      }

      if (
        menu.contains(event.target) ||
        toggle.contains(event.target)
      ) {
        return;
      }

      setMenuOpen(false);

    }
  );


  /* ----------------------------------------
     Detectar mudanças de largura
  ---------------------------------------- */

  if (
    typeof desktop.addEventListener ===
    'function'
  ) {

    desktop.addEventListener(
      'change',
      syncLayout
    );

  } else {

    desktop.addListener(syncLayout);

  }


  /* Inicialização */

  syncLayout();

})();


/* ==========================================
   02. ANIMAÇÃO DOS CARTÕES
========================================== */

(() => {

  const cards = document.querySelectorAll(
    '#solucoes .service-card'
  );

  if (
    !cards.length ||
    !('IntersectionObserver' in window)
  ) {
    return;
  }


  /* ----------------------------------------
     Respeitar movimento reduzido
  ---------------------------------------- */

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  if (reducedMotion.matches) {
    return;
  }


  /* ----------------------------------------
     Revelar cartão
  ---------------------------------------- */

  const reveal = (card) => {

    if (
      !card.classList.contains(
        'service-reveal-pending'
      )
    ) {
      return;
    }

    card.classList.remove(
      'service-reveal-pending'
    );

    card.classList.add(
      'service-reveal-ready'
    );

    observer.unobserve(card);

  };


  /* ----------------------------------------
     Observar entrada na tela
  ---------------------------------------- */

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          reveal(entry.target);
        }

      });

    },

    {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    }

  );


  /* ----------------------------------------
     Preparar cartões
  ---------------------------------------- */

  cards.forEach((card) => {

    card.classList.add(
      'service-reveal-pending'
    );

    observer.observe(card);


    /*
      Revelar imediatamente quando
      o cartão recebe foco.
    */

    card.addEventListener(
      'focusin',
      () => reveal(card),
      { once: true }
    );


    /*
      Limpar a classe de animação
      para evitar repetições.
    */

    card.addEventListener(
      'animationend',
      (event) => {

        if (event.target === card) {

          card.classList.remove(
            'service-reveal-ready'
          );

        }

      }
    );

  });


  /* ----------------------------------------
     Mudança na preferência de movimento
  ---------------------------------------- */

  const updateMotion = () => {

    if (!reducedMotion.matches) {
      return;
    }

    observer.disconnect();

    cards.forEach((card) => {

      card.classList.remove(
        'service-reveal-pending',
        'service-reveal-ready'
      );

    });

  };


  if (
    typeof reducedMotion.addEventListener ===
    'function'
  ) {

    reducedMotion.addEventListener(
      'change',
      updateMotion
    );

  } else {

    reducedMotion.addListener(
      updateMotion
    );

  }

})();


/* ==========================================
   FIM — MENDOZA MAIN JS
========================================== */
