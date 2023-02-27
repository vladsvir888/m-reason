// components
import search from './components/search';
import accordion from './components/accordion';
import collectionsSlider from './components/collectionsSlider';
import drawer from './components/drawer';
import hoverOnCards from './components/hoverOnCards';
import maskForPhoneInput from './components/maskForPhoneInput';
import mediaSlider from './components/mediaSlider';
import popup from './components/popup';
import topBtn from './components/topBtn';
import trendsSlider from './components/trendsSlider';
import mobileNav from './components/mobileNav';
import mobileMenu from './components/mobileMenu';
import mobileMenuSlider from './components/mobileMenuSlider';

document.addEventListener('DOMContentLoaded', () => {
  trendsSlider();
  mediaSlider();
  collectionsSlider();
  popup();
  hoverOnCards();
  maskForPhoneInput();
  drawer();
  topBtn();
  accordion();
  search();
  mobileNav();
  mobileMenu();
  mobileMenuSlider();
});
