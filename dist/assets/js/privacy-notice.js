(() => {
  const notice = document.querySelector('#aviso-privacidade');
  if (!notice) return;

  const close = notice.querySelector('.privacy-notice__close');
  if (!close) return;

  notice.hidden = false;
  close.addEventListener('click', () => {
    const hadFocus = document.activeElement === close;
    notice.hidden = true;
    if (hadFocus) document.querySelector('.brand').focus({ preventScroll: true });
  });
})();
