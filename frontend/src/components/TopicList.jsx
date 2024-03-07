import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, handleTopicClick, selectedTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      <div className="top-nav-bar__topic-list">
        {topics.map((topic) => (
          <TopicListItem key={topic.id} topicLI={topic} onSelect={() => handleTopicClick(topic)} selected={selectedTopic && selectedTopic.id === topic.id} />
        ))}
      </div>
    </div>
  );
};

export default TopicList;