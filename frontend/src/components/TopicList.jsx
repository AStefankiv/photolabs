import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      <li>
        {topics.map((topic) => (
          <TopicListItem key={topic.id} topicLI={topic} />
        ))}
      </li>
    </div>
  );
};

export default TopicList;