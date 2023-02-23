// components
import collectionsSlider from './components/collectionsSlider';
import drawer from './components/drawer';
import hoverOnCards from './components/hoverOnCards';
import maskForPhoneInput from './components/maskForPhoneInput';
import mediaSlider from './components/mediaSlider';
import popup from './components/popup';
import trendsSlider from './components/trendsSlider';

document.addEventListener('DOMContentLoaded', () => {
  trendsSlider();
  mediaSlider();
  collectionsSlider();
  popup();
  hoverOnCards();
  maskForPhoneInput();
  drawer();
});
