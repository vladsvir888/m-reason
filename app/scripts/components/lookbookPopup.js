import * as focusTrap from 'focus-trap';
import getScrollbarWidth from '../helpers/getScrollbarWidth';
import removeAttributes from '../helpers/removeAttributes';

const lookbookPopup = () => {
  const cards = document.querySelectorAll('.collection-card__full-btn');
  const popup = document.querySelector('.lookbook');

  if (!cards.length || !popup) return;

  const close = popup.querySelector('.lookbook__close');

  const trap = focusTrap.createFocusTrap(popup, {
    fallbackFocus: popup,
    initialFocus: false,
  });

  const scrollbarWidth = `${getScrollbarWidth()}px`;

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      document.body.classList.add('scroll-lock');
      document.body.style.setProperty('--scrollbar-size', scrollbarWidth);

      popup.classList.add('lookbook--active');

      trap.activate();
    });
  });

  close.addEventListener('click', () => {
    popup.classList.remove('lookbook--active');

    removeAttributes(document.body, 'style', 'class');

    trap.deactivate();
  });
};

export default lookbookPopup;
