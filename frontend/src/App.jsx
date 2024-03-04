import './App.scss';
import HomeRoute from 'components/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import { React } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  // const [modal, setModal] = useState(false);//useState to manage the modal state
  // const [selectedPhoto, setSelectedPhoto] = useState(null);//useState to manage the selected photo

  // const showModal = (photo) => {
  //   setSelectedPhoto(photo);
  //   setModal(true);
  // };

  // const [like, setLike] = useState([]);

  // const toggleFav = (photoId) => {
  //   if (like.includes(photoId)) {
  //     setLike(like.filter(id => id !== photoId));
  //   } else {
  //     setLike([...like, photoId]);
  //   }
  // };

  // const isFav = (photoId) => like.includes(photoId);
  
  // console.log('Like: ' + like);

  // const isFavPhotoExist = like.length > 0;
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