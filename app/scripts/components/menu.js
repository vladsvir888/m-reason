import focusTrapObj from '../helpers/focusTrapObj';

const menu = () => {
  const header = document.querySelector('.main-header');

  if (!header) return;

  const burger = header.querySelector('.burger');
  const menuEl = header.querySelector('.main-menu');
  const inertEls = header.querySelectorAll('.inert-element');

  function hide() {
    burger.setAttribute('aria-expanded', false);
    menuEl.classList.remove('main-menu--active');

    document.body.removeAttribute('class');

    header.classList.remove('main-header--container-small');

    inertEls.forEach((inertEl) => {
      inertEl.removeAttribute('tabindex');
    });

    focusTrapObj.header.deactivate();
  }

  function show() {
    document.body.classList.add('scroll-lock');

    burger.setAttribute('aria-expanded', true);
    menuEl.classList.add('main-menu--active');

    header.classList.add('main-header--container-small');

    inertEls.forEach((inertEl) => {
      // eslint-disable-next-line no-param-reassign
      inertEl.tabIndex = -1;
    });

    focusTrapObj.header.activate();
  }

  function handleEsc(e) {
    if (e.key === 'Escape' && !document.querySelector('.fancybox__container')) {
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
