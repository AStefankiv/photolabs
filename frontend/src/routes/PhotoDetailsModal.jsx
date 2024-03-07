import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ selectedPhoto, closeModal, toggleFav, showModal, isFav }) => {

  const similarPhotosArray = selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : [];//Object.values() to convert the object to an array

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => closeModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton onClick={() => toggleFav(selectedPhoto.id)} isFavorite={isFav(selectedPhoto.id)} photoId={selectedPhoto.id}></PhotoFavButton>
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
      <div className='photo-details-modal__similar-photos'>
        <PhotoList photos={similarPhotosArray} toggleFav={toggleFav} isFav={isFav} showModal={showModal} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
