const search = () => {
  const btn = document.querySelector('.search-btn');
  const searchEl = document.querySelector('.search');

  if (!btn || !searchEl) return;

  const closeBtn = searchEl.querySelector('.search__close');

  btn.addEventListener('click', () => {
    searchEl.classList.toggle('search--active');
  });

  closeBtn.addEventListener('click', () => {
    searchEl.classList.remove('search--active');
  });
};

export default search;
