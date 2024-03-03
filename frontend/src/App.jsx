import React from 'react';

import './App.scss';
import HomeRoute from 'components/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import { useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {

  const [modal, setModal] = useState(false);//useState to manage the modal state
  const [selectedPhoto, setSelectedPhoto] = useState(null);//useState to manage the selected photo

  const showModal = (photo) => {
    setSelectedPhoto(photo);
    setModal(true);
  };

  return (
    <div className="App">
      <div className="photo-list">
        <HomeRoute topics={topics} photos={photos} showModal={showModal} />
        {modal && <PhotoDetailsModal photo={selectedPhoto} setModal={setModal} />}
      </div>
    </div>
  );
};

export default App;