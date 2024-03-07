import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topicLI, selected, onSelect }) => {
  return (
    <li
      className={`topic-list__item ${selected ? 'top-nav-bar__selected_topic' : ''}`}
      onClick={onSelect}>
      {topicLI.title}
    </li>
  );
};

export default TopicListItem;
