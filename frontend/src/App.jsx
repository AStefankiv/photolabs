import './App.scss';
import HomeRoute from 'components/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import { React } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const {
    modal,
    setModal,
    selectedPhoto,
    setSelectedPhoto,
    like,
    setLike,
    showModal,
    toggleFav,
    isFav,
    isFavPhotoExist,
  } = useApplicationData();
  
  
  return (
    <div className="App">
      <div className="photo-list">
        <HomeRoute topics={topics} photos={photos} showModal={showModal} like={like} setLike={setLike} toggleFav={toggleFav} isFav={isFav} isFavPhotoExist={isFavPhotoExist} setSelectedPhoto={setSelectedPhoto} />
        {modal && <PhotoDetailsModal selectedPhoto={selectedPhoto} setModal={setModal} like={like} setLike={setLike} toggleFav={toggleFav} isFav={isFav} isFavPhotoExist={isFavPhotoExist} setSelectedPhoto={setSelectedPhoto} />}
      </div>
    </div>
  );
};

export default App;