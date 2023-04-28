import * as focusTrap from 'focus-trap';

export default {
  header: focusTrap.createFocusTrap('.main-header', {
    fallbackFocus: '.main-header',
    initialFocus: false,
  }),
  popup: focusTrap.createFocusTrap('.lookbook', {
    fallbackFocus: '.lookbook',
    initialFocus: false,
  }),
  drawer: focusTrap.createFocusTrap('.drawer', {
    fallbackFocus: '.drawer',
    initialFocus: false,
  }),
};
