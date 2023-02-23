import { Fancybox } from '@fancyapps/ui';
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru';

const popup = () => {
  Fancybox.bind('[data-fancybox]', {
    l10n: ru,
    closeButton: false,
    dragToClose: false,
    autoFocus: false,
    showClass: 'fancybox-fadeIn',
  });
};

export default popup;
