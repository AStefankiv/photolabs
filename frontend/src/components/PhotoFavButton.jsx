// import React, { useCallback, useState } from 'react';

// import FavIcon from './FavIcon';
// import '../styles/PhotoFavButton.scss';

// const PhotoFavButton = () => {

//   const [favoritePhoto, setFavoritePhoto] = useState(false);

//   const toggleFavorite = () => {
//     setFavoritePhoto(prevFavoritePhoto => !prevFavoritePhoto);
//   };

//   return (
//     <div className="photo-list__fav-icon" onClick={toggleFavorite}>
//       <div className="photo-list__fav-icon-svg">
//         <FavIcon selected={favoritePhoto} />
//       </div>
//     </div>
//   );
// };

// export default PhotoFavButton;


import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ onClick, isFavorite }) => {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
