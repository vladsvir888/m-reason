import calcScrollHeight from '../helpers/calcScrollHeight';
import setAttributes from '../helpers/setAttributes';

const accordion = () => {
  const elements = document.querySelectorAll('.main-accordion');

  if (!elements.length) return;

  function toggleContent(item) {
    item.classList.toggle('active');

    const link = item.querySelector('.main-accordion__btn');
    const content = item.querySelector('.main-accordion__list');

    if (item.classList.contains('active')) {
      setTimeout(() => {
        setAttributes(link, {
          href: link.dataset.href,
          role: 'link',
        });
      }, 0);

      content.style.maxHeight = calcScrollHeight(content);
    } else {
      setTimeout(() => {
        link.setAttribute('role', 'button');
        link.removeAttribute('href');
      }, 0);

      content.removeAttribute('style');
    }
  }

  elements.forEach((element) => {
    const items = element.querySelectorAll('.main-accordion__btn');

    items.forEach((item) => {
      item.addEventListener('click', () => {
        const itemActive = element.querySelector('.main-accordion__item.active');
        const parent = item.parentElement;

        if (itemActive && itemActive !== parent) {
          toggleContent(itemActive);
        }

        toggleContent(parent);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const itemActive = element.querySelector('.main-accordion__item.active');
          const parent = item.parentElement;

          if (itemActive && itemActive !== item) {
            toggleContent(itemActive);
          }

          toggleContent(parent);
        }
      });
    });
  });
};

export default accordion;
