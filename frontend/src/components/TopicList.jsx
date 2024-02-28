import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      <ul>
        {topics.map((topic) => (
          <TopicListItem key={topic.id} topic={topic} />
        ))}
      </ul>
    </div>
  );
};

export default TopicList;