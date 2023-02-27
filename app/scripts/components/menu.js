import * as focusTrap from 'focus-trap';
import getScrollbarWidth from '../helpers/getScrollbarWidth';
import removeAttributes from '../helpers/removeAttributes';

const menu = () => {
  const header = document.querySelector('.main-header');

  if (!header) return;

  const burger = header.querySelector('.burger');
  const menuEl = header.querySelector('.main-menu');

  const trap = focusTrap.createFocusTrap(header, {
    fallbackFocus: header,
  });

  burger.addEventListener('click', () => {
    if (!menuEl.classList.contains('main-menu--active')) {
      const scrollbarWidth = `${getScrollbarWidth()}px`;

      document.body.classList.add('scroll-lock');
      document.body.style.setProperty('--scrollbar-size', scrollbarWidth);

      burger.setAttribute('aria-expanded', true);
      menuEl.classList.add('main-menu--active');

      trap.activate();
    } else {
      burger.setAttribute('aria-expanded', false);
      menuEl.classList.remove('main-menu--active');

      removeAttributes(document.body, 'style', 'class');

      trap.deactivate();
    }
  });
};

export default menu;
