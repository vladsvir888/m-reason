import IMask from 'imask';

const maskForPhoneInput = () => {
  const phone = document.querySelector('.input-phone');

  if (!phone) return;

  IMask(
    phone, {
      mask: '+{7}(000)000-00-00',
    },
  );
};

export default maskForPhoneInput;
