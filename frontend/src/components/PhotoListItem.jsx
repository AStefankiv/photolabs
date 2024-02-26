import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleData }) => {
  return (
    <div className="photo-list__item">
      <div>
        <img
          src={sampleData.imageSource}
          alt='Photo'
        />
      </div>
      <div>
        <img
          src={sampleData.profile}
          alt='Profile'
        />
      </div>
      <div>
        {sampleData.username}
      </div>
      <div>
        {sampleData.location.city}{" "}
        {sampleData.location.country}
      </div>
    </div>
  );
};

export default PhotoListItem;
