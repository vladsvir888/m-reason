// helpers
import getScrollbarWidth from './helpers/getScrollbarWidth';

// components
import search from './components/search';
import accordion from './components/accordion';
import collectionsSlider from './components/collectionsSlider';
import drawer from './components/drawer';
import maskForPhoneInput from './components/maskForPhoneInput';
import mediaSlider from './components/mediaSlider';
import popup from './components/popup';
import topBtn from './components/topBtn';
import trendsSlider from './components/trendsSlider';
import mobileNav from './components/mobileNav';
import menu from './components/menu';
import menuSlider from './components/menuSlider';
import lookbookSlider from './components/lookbookSlider';
import lookbookPopup from './components/lookbookPopup';
import tooltipToggle from './components/tooltipToggle';

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.setProperty('--scrollbar-size', `${getScrollbarWidth()}px`);

  trendsSlider();
  mediaSlider();
  collectionsSlider();
  popup();
  maskForPhoneInput();
  drawer();
  topBtn();
  accordion();
  search();
  mobileNav();
  menu();
  menuSlider();
  lookbookSlider();
  lookbookPopup();
  tooltipToggle();
});
