import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topicLI, getPhotosByTopic }) => {
  return (
    // <li className="topic-list__item">{topicLI.title}</li>
    <li className="topic-list__item" onClick={() => getPhotosByTopic(topicLI.id)}>{topicLI.title}</li>
  );
};

export default TopicListItem;
