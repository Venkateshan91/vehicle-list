import React from 'react';

function FavoriteButton({ isFavorited, onToggleFavorite }) {
  return (
    <button
      onClick={onToggleFavorite}
      className={`${
        isFavorited ? 'bg-blue-500' : 'bg-gray-300'
      } text-white px-2 py-1 rounded`}
    >
      {isFavorited ? 'Add to Favorites' : 'Remove from Favorites'}
    </button>
  );
}

export default FavoriteButton;
