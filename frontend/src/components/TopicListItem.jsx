import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topicLI }) => {
  return (
    <li className="topic-list__item">{topicLI.title}</li>
  );
};

export default TopicListItem;
