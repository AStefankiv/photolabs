import './App.scss';
import HomeRoute from 'components/HomeRoute';
// import topics from './mocks/topics';
// import photos from './mocks/photos';
import { React } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const {
    modal,
    closeModal,
    selectedPhoto,
    setSelectedPhoto,
    like,
    setLike,
    showModal,
    toggleFav,
    isFav,
    isFavPhotoExist,
    photoData,
    topicData,
    getPhotosByTopic,
  } = useApplicationData();
  
  
  return (
    <div className="App">
      <div className="photo-list">
        <HomeRoute
          topics={topicData} photos={photoData} showModal={showModal} like={like} setLike={setLike}
          toggleFav={toggleFav} isFav={isFav} isFavPhotoExist={isFavPhotoExist}
          setSelectedPhoto={setSelectedPhoto} getPhotosByTopic={getPhotosByTopic} />

        {modal && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeModal={closeModal}
          like={like} setLike={setLike} toggleFav={toggleFav} isFav={isFav}
          isFavPhotoExist={isFavPhotoExist} setSelectedPhoto={setSelectedPhoto} />}
      </div>
    </div>
  );
};

export default App;