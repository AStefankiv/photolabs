import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';


const HomeRoute = ({ topics = [], photos, showModal, toggleFav, isFav, isFavPhotoExist }) => {
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} toggleFav={toggleFav} isFav={isFav} showModal={showModal} />
    </div>
  );
};

export default HomeRoute;