import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const HomeRoute = ({ topics = [], photos }) => {
  const [like, setLike] = useState([]);

  const toggleFav = (photoId) => {
    if (like.includes(photoId)) {
      setLike(like.filter(id => id !== photoId));
    } else {
      setLike([...like, photoId]);
    }
  };

  const isFav = (photoId) => {
    return like.includes(photoId);
  };
  console.log(like);

  const isFavPhotoExist = like.length > 0;


  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);


  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} toggleFav={toggleFav} isFav={isFav} showModal={showModal} />
      {modal && <PhotoDetailsModal />}
    </div>
  );
};

export default HomeRoute;