import Swiper, { Navigation, Scrollbar } from 'swiper';

const mediaSlider = () => {
  new Swiper('.media-slider .media-slider__inner', {
    modules: [Navigation, Scrollbar],
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 10,
    navigation: {
      nextEl: '.media-slider__btn--next',
      prevEl: '.media-slider__btn--prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
};

export default mediaSlider;
