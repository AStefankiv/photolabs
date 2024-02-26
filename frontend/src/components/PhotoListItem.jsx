import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    
    <div>
      <div>
        <img
          src={props.sampleData.imageSource}
        />
      </div>
      <div>
        <img
          src={props.sampleData.profile}
        />
      </div>
      <div>
        {props.sampleData.username}
      </div>
      <div>
        {props.sampleData.location.city}{" "}
        {props.sampleData.location.country}
      </div>
    </div>
  );
};

export default PhotoListItem;
