import React from "react";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import PhotoListItem from "./PhotoListItem";


// const PhotoList = (props) => {
//   return (
//     <ul className="photo-list">
//       {props.photos.map((photo, index) => (
//         <PhotoListItem key={index} photo={photo} />
//       )
//       )}
//     </ul>
//   );
// };

// export default PhotoList;


const PhotoList = ({ photos, addFavorite, removeFavorite, isFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isFavorite={isFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;