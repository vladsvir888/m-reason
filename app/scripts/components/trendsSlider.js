import Swiper, { Navigation } from 'swiper';

const trendsSlider = () => {
  new Swiper('.trends-slider', {
    modules: [Navigation],
    slidesPerView: 1.05,
    speed: 600,
    navigation: {
      nextEl: '.trends-slider__btn--next',
      prevEl: '.trends-slider__btn--prev',
      // disabledClass: 'trends-slider__btn--disabled',
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
