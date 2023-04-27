import focusTrapObj from '../helpers/focusTrapObj';

const lookbookPopup = () => {
  const cards = document.querySelectorAll('.collection-card__full-btn');
  const popup = document.querySelector('.lookbook');

  if (!cards.length || !popup) return;

  const close = popup.querySelector('.lookbook__close');

  function hide() {
    popup.classList.remove('lookbook--active');

    document.body.removeAttribute('class');

    focusTrapObj.popup.deactivate();
  }

  function show() {
    document.body.classList.add('scroll-lock');

    popup.classList.add('lookbook--active');

    focusTrapObj.popup.activate();
  }

  function handleEsc(e) {
    if (e.key === 'Escape' && !document.querySelector('.fancybox__container')) {
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
