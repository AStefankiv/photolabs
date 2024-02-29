import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      <li className="top-nav-bar__topic-list">
        {topics.map((topic) => (
          <TopicListItem key={topic.id} topicLI={topic} />
        ))}
      </li>
    </div>
  );
};

export default TopicList;