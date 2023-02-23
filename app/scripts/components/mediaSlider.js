import Swiper, { Navigation, Scrollbar } from 'swiper';

const mediaSlider = () => {
  new Swiper('.media-slider .media-slider__inner', {
    modules: [Navigation, Scrollbar],
    slidesPerView: 2.15,
    speed: 600,
    navigation: {
      nextEl: '.media-slider__btn--next',
      prevEl: '.media-slider__btn--prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      601: {
        slidesPerView: 1,
      },
    },
  });
};

export default mediaSlider;
