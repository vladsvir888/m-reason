import * as focusTrap from 'focus-trap';

const lookbookPopup = () => {
  const cards = document.querySelectorAll('.collection-card__full-btn');
  const popup = document.querySelector('.lookbook');

  if (!cards.length || !popup) return;

  const close = popup.querySelector('.lookbook__close');

  const trap = focusTrap.createFocusTrap(popup, {
    fallbackFocus: popup,
    initialFocus: false,
  });

  function hide() {
    popup.classList.remove('lookbook--active');

    document.body.removeAttribute('class');

    trap.deactivate();
  }

  function show() {
    document.body.classList.add('scroll-lock');

    popup.classList.add('lookbook--active');

    trap.activate();
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      hide();
    }
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      show();
    });
  });

  close.addEventListener('click', () => {
    hide();
  });

  window.addEventListener('keydown', (e) => handleEsc(e));
};

export default lookbookPopup;
