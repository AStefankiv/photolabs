import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ selectedPhoto, setModal, toggleFav, showModal, isFav }) => {
  console.log(selectedPhoto);
  console.log('selectedPhoto.SIMILAR_PHOTOS' + selectedPhoto.SIMILAR_PHOTOS);

  const similarPhotosArray = selectedPhoto.SIMILAR_PHOTOS ? Object.values(selectedPhoto.SIMILAR_PHOTOS) : [];//Object.values() to convert the object to an array
  console.log('similarPhotosArray' + similarPhotosArray);
  console.log('Array???' + Array.isArray(similarPhotosArray));

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton isFav={isFav} toggleFav={toggleFav} photoId={selectedPhoto.id}></PhotoFavButton>
        <img className="photo-details-modal__image" src={selectedPhoto.urls.regular} alt="Image"></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt={`Profile Image for ${selectedPhoto.user.username}`}></img>
          <div className="photo-list__user-info">
            <span>{selectedPhoto.user.name}</span>
            <div className="photo-list__user-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        <PhotoList photos={similarPhotosArray} toggleFav={toggleFav} isFav={isFav} showModal={showModal} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
