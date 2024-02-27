import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {

  const [favoritePhoto, setFavoritePhoto] = useState(false);

  const toggleFavorite = () => {
    setFavoritePhoto(!favoritePhoto);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
      </div>
    </div>
  );
};

export default PhotoFavButton;