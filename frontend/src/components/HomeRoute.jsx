// import React from 'react';
// import '../styles/HomeRoute.scss';
// import PhotoList from 'components/PhotoList';
// import TopNavigationBar from 'components/TopNavigationBar';


// const HomeRoute = ({ topics = [], photos }) => {
//   //Build a function that takes in a photo id and returns an array of those ids selected
//   //remove if the id exists in array. Add if it does not exist
//   //Implement use state to keep track of the selected photos

//   return (
//     <div className="home-route">
//       <TopNavigationBar topics={topics} />
//       <PhotoList photos={photos} />
//     </div>
//   );
// };

// export default HomeRoute;


import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({ topics = [], photos }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photo) => {
    if (!favorites.some(fav => fav.id === photo.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, photo]);
    }
  };

  const removeFavorite = (photoId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((photo) => photo.id !== photoId)
    );
  };

  const isFavorite = (photoId) => {
    return favorites.some((photo) => photo.id === photoId);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} addFavorite={addFavorite} removeFavorite={removeFavorite} isFavorite={isFavorite} />
    </div>
  );
};

export default HomeRoute;
