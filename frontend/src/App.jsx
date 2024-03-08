import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import { React } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const {
    modal,
    closeModal,
    selectedPhoto,
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
          topics={topicData} photos={photoData} showModal={showModal}
          toggleFav={toggleFav} isFav={isFav} isFavPhotoExist={isFavPhotoExist} getPhotosByTopic={getPhotosByTopic} />

        {modal && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeModal={closeModal}
          toggleFav={toggleFav} isFav={isFav}
          isFavPhotoExist={isFavPhotoExist} />}
      </div>
    </div>
  );
};

export default App;