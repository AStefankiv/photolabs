import './App.scss';
import HomeRoute from 'components/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import { React, useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {

  const [modal, setModal] = useState(false);//useState to manage the modal state
  const [selectedPhoto, setSelectedPhoto] = useState(null);//useState to manage the selected photo

  const showModal = (photo) => {
    setSelectedPhoto(photo);
    setModal(true);
  };

  const [like, setLike] = useState([]);

  const toggleFav = (photoId) => {
    if (like.includes(photoId)) {
      setLike(like.filter(id => id !== photoId));
    } else {
      setLike([...like, photoId]);
    }
  };

  const isFav = (photoId) => like.includes(photoId);
  
  console.log(like);

  const isFavPhotoExist = like.length > 0;


  return (
    <div className="App">
      <div className="photo-list">
        <HomeRoute topics={topics} photos={photos} showModal={showModal} like={like} setLike={setLike} toggleFav={toggleFav} isFav={isFav} isFavPhotoExist={isFavPhotoExist}/>
        {modal && <PhotoDetailsModal selectedPhoto={selectedPhoto} setModal={setModal} like={like} setLike={setLike} toggleFav={toggleFav} isFav={isFav} isFavPhotoExist={isFavPhotoExist}/>}
      </div>
    </div>
  );
};

export default App;