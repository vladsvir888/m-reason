const tooltipToggle = () => {
  const tooltip = document.querySelector('.tooltip');
  const mobileMQ = window.matchMedia('(min-width: 601px)');

  if (!tooltip) return;

  if (mobileMQ.matches) {
    const target = document.querySelector('.promo');

    if (!target) return;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          tooltip.classList.add('tooltip--active');
        } else {
          tooltip.classList.remove('tooltip--active');
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(target);
  }

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('tooltip__trigger')) {
      tooltip.classList.toggle('tooltip--show');
    }

    if (!e.target.classList.contains('tooltip__btn') && !e.target.classList.contains('tooltip__trigger')) {
      tooltip.classList.remove('tooltip--show');
    }
  });
};

export default tooltipToggle;
