import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      <p>
        {topics.map((topic, index) => (
          <li key={index} className="topic-list__item">{topic.title}</li>
        ))}
      </p>
    </div>
  );
};

export default TopicList;
