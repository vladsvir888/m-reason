import { Fancybox } from '@fancyapps/ui';
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru';

import focusTrapObj from '../helpers/focusTrapObj';

const popup = () => {
  window.Fancybox = window.Fancybox ? window.Fancybox : Fancybox;

  Fancybox.bind('[data-fancybox]', {
    l10n: ru,
    closeButton: false,
    dragToClose: false,
    autoFocus: false,
    showClass: 'fancybox-fadeIn',
    on: {
      done: () => {
        if (document.querySelector('.main-menu--active')) {
          focusTrapObj.header.pause();
        }

        if (document.querySelector('.lookbook--active')) {
          focusTrapObj.popup.pause();
        }
      },

      closing: () => {
        if (document.querySelector('.main-menu--active')) {
          focusTrapObj.header.unpause();
        }

        if (document.querySelector('.lookbook--active')) {
          focusTrapObj.popup.unpause();
        }
      },
    },
  });
};

export default popup;
