import Swiper, { Navigation, Pagination } from 'swiper';

const lookbookSlider = () => {
  new Swiper('.lookbook-slider', {
    modules: [Navigation, Pagination],
    speed: 600,
    slidesPerView: 1,
    pagination: {
      el: '.lookbook__pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.lookbook__control--next',
      prevEl: '.lookbook__control--prev',
    },
  });
};

export default lookbookSlider;
