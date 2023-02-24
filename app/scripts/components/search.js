const search = () => {
  const btn = document.querySelector('.search-btn');
  const searchEl = document.querySelector('.search');

  if (!btn || !searchEl) return;

  const clearBtn = searchEl.querySelector('.search__clear');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    searchEl.classList.toggle('search--active');
  });

  clearBtn.addEventListener('click', () => {
    const input = clearBtn.previousElementSibling;

    if (input.value !== '') {
      input.value = '';
    }
  });
};

export default search;
