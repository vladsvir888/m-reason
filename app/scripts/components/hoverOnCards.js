const hoverOnCards = () => {
  const collectionCards = document.querySelectorAll('.collection-card');

  if (!collectionCards.length) return;

  collectionCards.forEach((collectionCard) => {
    collectionCard.addEventListener('mouseover', () => {
      collectionCard.classList.add('collection-card--active-media');
    });

    collectionCard.addEventListener('mouseout', () => {
      collectionCard.classList.remove('collection-card--active-media');
    });
  });
};

export default hoverOnCards;
