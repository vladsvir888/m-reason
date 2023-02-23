import * as focusTrap from 'focus-trap';
import getScrollbarWidth from '../helpers/getScrollbarWidth';
import removeAttributes from '../helpers/removeAttributes';
import setAttributes from '../helpers/setAttributes';

const drawer = () => {
  const btn = document.querySelector('.drawer-btn');
  const modal = document.querySelector('.drawer');

  if (!btn && !modal) return;

  const backdrop = modal.querySelector('.drawer__backdrop');
  const close = modal.querySelector('.drawer__close');

  const trap = focusTrap.createFocusTrap(modal, {
    fallbackFocus: modal,
  });

  function show() {
    const scrollbarWidth = `${getScrollbarWidth()}px`;

    modal.classList.add('drawer--active');
    document.body.classList.add('scroll-lock');
    document.body.style.setProperty('--scrollbar-size', scrollbarWidth);

    setAttributes(modal, {
      'aria-modal': true,
      role: 'dialog',
    });

    trap.activate();
  }

  function hide() {
    modal.classList.remove('drawer--active');
    removeAttributes(document.body, 'style', 'class');
    removeAttributes(modal, 'aria-modal', 'role');

    trap.deactivate();
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      hide();
    }
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    show();
  });

  backdrop.addEventListener('click', hide);

  close.addEventListener('click', hide);

  window.addEventListener('keydown', (e) => handleEsc(e));
};

export default drawer;
