import React from "react";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) => (
        <li key={index} className='photo-list__item'>
          <PhotoFavButton />
          <img className="photo-list__image" src={photo.urls.regular} alt="Photo"
          />
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
      )
      )}
    </ul>
  );
};

export default PhotoList;
