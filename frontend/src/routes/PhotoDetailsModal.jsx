import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, setModal }) => {
  console.log(selectedPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className="photo-details-modal__image" src={selectedPhoto.urls.regular} alt="Photo" />
      <div className="photo-details-modal__user-details">
        <img className="photo-details-modal__user-profile" src={selectedPhoto.user.profile} alt="Profile" />
        <div className="photo-details-modal__user-info">
          {selectedPhoto.user.username} {selectedPhoto.user.name}
          <div className="photo-details-modal__user-location">
            {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
