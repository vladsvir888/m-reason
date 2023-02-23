import Swiper, { Navigation } from 'swiper';

const collectionsSlider = () => {
  const collectionsSection = document.querySelector('.collections');

  if (!collectionsSection) return;

  const slider = collectionsSection.querySelector('.collections-slider');

  if (!slider) {
    collectionsSection.classList.add('collections--secondary');
    return;
  }

  let numSlides = slider.querySelectorAll('.swiper-slide').length;

  if (numSlides <= 5) {
    numSlides = 3;
  } else if (numSlides <= 11) {
    numSlides = 6;
    collectionsSection.classList.add('collections--secondary');
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
