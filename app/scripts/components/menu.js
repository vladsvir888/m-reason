import * as focusTrap from 'focus-trap';

const menu = () => {
  const header = document.querySelector('.main-header');

  if (!header) return;

  const burger = header.querySelector('.burger');
  const menuEl = header.querySelector('.main-menu');
  const inertEls = header.querySelectorAll('.inert-element');

  const trap = focusTrap.createFocusTrap(header, {
    fallbackFocus: header,
    initialFocus: false,
  });

  function hide() {
    burger.setAttribute('aria-expanded', false);
    menuEl.classList.remove('main-menu--active');

    document.body.removeAttribute('class');

    inertEls.forEach((inertEl) => {
      inertEl.removeAttribute('tabindex');
    });

    trap.deactivate();
  }

  function show() {
    document.body.classList.add('scroll-lock');

    burger.setAttribute('aria-expanded', true);
    menuEl.classList.add('main-menu--active');

    inertEls.forEach((inertEl) => {
      // eslint-disable-next-line no-param-reassign
      inertEl.tabIndex = -1;
    });

    trap.activate();
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      hide();
    }
  }

  burger.addEventListener('click', () => {
    if (!menuEl.classList.contains('main-menu--active')) {
      show();
    } else {
      hide();
    }
  });

  window.addEventListener('keydown', (e) => handleEsc(e));
};

export default menu;
