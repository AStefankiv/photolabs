import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleData }) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={sampleData.imageSource} alt='Photo' />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={sampleData.profile} alt='Profile' />
        <div className="photo-list__user-info">
          {sampleData.username}
          <div className="photo-list__user-location">
            {sampleData.location.city}, {sampleData.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;