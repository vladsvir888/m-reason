import Swiper, { Navigation } from 'swiper';

const trendsSlider = () => {
  new Swiper('.trends-slider', {
    modules: [Navigation],
    slidesPerView: 1.05,
    speed: 600,
    navigation: {
      nextEl: '.slider-with-square-btns__btn--next',
      prevEl: '.slider-with-square-btns__btn--prev',
    },
    breakpoints: {
      601: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
};

export default trendsSlider;
