import IMask from 'imask';

const maskForPhoneInput = () => {
  const phones = document.querySelectorAll('.input-phone');

  if (!phones.length) return;

  phones.forEach((phone) => {
    IMask(
      phone, {
        mask: '+{7}(000)000-00-00',
      },
    );
  });
};

export default maskForPhoneInput;
