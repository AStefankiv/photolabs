import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topicLI }) => {
  return (
    <div className="topic-list__item">{topicLI.title}</div>
  );
};

export default TopicListItem;
