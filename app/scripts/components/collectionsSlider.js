import Swiper, { Navigation } from 'swiper';

const collectionsSlider = () => {
  const collectionsSection = document.querySelector('.collections');
  let numSlides = 3;

  if (!collectionsSection) return;

  if (collectionsSection.classList.contains('collections--secondary')) {
    numSlides = 6;
  }

  new Swiper('.collections-slider', {
    modules: [Navigation],
    slidesPerView: 2.1,
    speed: 600,
    navigation: {
      nextEl: '.slider-with-square-btns__btn--next',
      prevEl: '.slider-with-square-btns__btn--prev',
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
      },
      901: {
        slidesPerView: 3,
      },
      1201: {
        slidesPerView: numSlides,
      },
    },
  });
};

export default collectionsSlider;
