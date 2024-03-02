import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, toggleFav, isFav }) => {
  return (
    <li className='photo-list__item'>
      <PhotoFavButton onClick={() => toggleFav(photo.id)} isFavorite={isFav(photo.id)} />
      <img className="photo-list__image" src={photo.urls.regular} alt="Photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt='Profile' />
        <div className="photo-list__user-info">
          {photo.user.username} {' '} {photo.user.name}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;