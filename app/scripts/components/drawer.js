import * as focusTrap from 'focus-trap';
import removeAttributes from '../helpers/removeAttributes';
import setAttributes from '../helpers/setAttributes';

const drawer = () => {
  const btn = document.querySelector('.drawer-btn');
  const modal = document.querySelector('.drawer');

  if (!btn || !modal) return;

  const backdrop = modal.querySelector('.drawer__backdrop');
  const closeBtns = modal.querySelectorAll('.drawer-close');

  const trap = focusTrap.createFocusTrap(modal, {
    fallbackFocus: modal,
  });

  function show() {
    modal.classList.add('drawer--active');
    document.body.classList.add('scroll-lock');

    setAttributes(modal, {
      'aria-modal': true,
      role: 'dialog',
    });

    trap.activate();
  }

  function hide() {
    modal.classList.remove('drawer--active');
    document.body.removeAttribute('class');
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

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', hide);
  });

  window.addEventListener('keydown', (e) => handleEsc(e));
};

export default drawer;
