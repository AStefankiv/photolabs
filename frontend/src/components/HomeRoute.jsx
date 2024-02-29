import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({ topics = [] }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;