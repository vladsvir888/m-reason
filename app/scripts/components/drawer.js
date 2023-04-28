import removeAttributes from '../helpers/removeAttributes';
import setAttributes from '../helpers/setAttributes';
import focusTrapObj from '../helpers/focusTrapObj';

const drawer = () => {
  const header = document.querySelector('.main-header');

  if (!header) return;

  function show() {
    const modal = header.querySelector('.drawer');

    if (!modal) return;

    modal.classList.add('drawer--active');
    document.body.classList.add('scroll-lock');

    setAttributes(modal, {
      'aria-modal': true,
      role: 'dialog',
    });

    focusTrapObj.drawer.activate();
  }

  function hide() {
    const modal = header.querySelector('.drawer');

    if (!modal) return;

    modal.classList.remove('drawer--active');
    document.body.removeAttribute('class');
    removeAttributes(modal, 'aria-modal', 'role');

    focusTrapObj.drawer.deactivate();
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      hide();
    }
  }

  header.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.drawer-btn')) {
      show();
    }

    if (target.classList.contains('drawer__backdrop')) {
      hide();
    }

    if (target.closest('.drawer-close')) {
      hide();
    }
  });

  window.addEventListener('keydown', (e) => handleEsc(e));
};

export default drawer;
