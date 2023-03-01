import throttle from 'lodash-es/throttle';

const mobileNav = () => {
  const mql = window.matchMedia('(max-width: 600px)');

  if (!mql.matches) return;

  const mobileNavEl = document.querySelector('.mobile-nav');

  if (!mobileNavEl) return;

  let prevScrollpos = window.pageYOffset;

  function toggle() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      mobileNavEl.classList.add('mobile-nav--active');
    } else {
      mobileNavEl.classList.remove('mobile-nav--active');
    }

    prevScrollpos = currentScrollPos;
  }

  window.addEventListener('scroll', throttle(toggle, 300));
};

export default mobileNav;
