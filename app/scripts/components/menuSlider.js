import Swiper, { Navigation, Mousewheel, Scrollbar } from 'swiper';

const menuSlider = () => {
  new Swiper('.menu-slider .menu-slider__inner', {
    modules: [Navigation, Mousewheel, Scrollbar],
    slidesPerView: 1,
    mousewheel: true,
    speed: 600,
    scrollbar: {
      el: '.menu-slider__scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: '.slider-with-square-btns__btn--next',
      prevEl: '.slider-with-square-btns__btn--prev',
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
      },
      1201: {
        allowTouchMove: false,
        slidesPerView: 2,
      },
    },
  });
};

export default menuSlider;
