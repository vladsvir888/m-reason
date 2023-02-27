import * as focusTrap from 'focus-trap';
import getScrollbarWidth from '../helpers/getScrollbarWidth';
import removeAttributes from '../helpers/removeAttributes';

const mobileMenu = () => {
  const header = document.querySelector('.main-header');

  if (!header) return;

  const burger = header.querySelector('.burger');
  const menu = header.querySelector('.main-mobile-menu');

  const trap = focusTrap.createFocusTrap(header, {
    fallbackFocus: header,
  });

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('main-mobile-menu--active')) {
      const scrollbarWidth = `${getScrollbarWidth()}px`;

      document.body.classList.add('scroll-lock');
      document.body.style.setProperty('--scrollbar-size', scrollbarWidth);

      burger.setAttribute('aria-expanded', true);
      menu.classList.add('main-mobile-menu--active');

      trap.activate();
    } else {
      burger.setAttribute('aria-expanded', false);
      menu.classList.remove('main-mobile-menu--active');

      removeAttributes(document.body, 'style', 'class');

      trap.deactivate();
    }
  });
};

export default mobileMenu;
