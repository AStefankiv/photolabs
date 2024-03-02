import React from "react";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, toggleFav, isFav }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} toggleFav={toggleFav} isFav={isFav} />
      ))}
    </ul>
  );
};

export default PhotoList;