import React from 'react';
import { useState } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics = [], isFavPhotoExist, getPhotosByTopic }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    getPhotosByTopic(topic.id);
  };

  return (
    <div className="top-nav-bar">
      <a href="/" className="top-nav-bar__logo">PhotoLabs</a>
      <TopicList topics={topics} handleTopicClick={handleTopicClick} selectedTopic={selectedTopic} className="top-nav-bar__topic-list" />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;