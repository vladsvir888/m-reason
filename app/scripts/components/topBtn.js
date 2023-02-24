const topBtn = () => {
  const btn = document.querySelector('.top-btn');
  const target = document.querySelector('.promo');

  if (!btn || !target) return;

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        btn.classList.add('top-btn--active');
      } else {
        btn.classList.remove('top-btn--active');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  observer.observe(target);

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
};

export default topBtn;
