import React from 'react';

import './App.scss';
import HomeRoute from 'components/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';


const App = () => {
  return (
    <div className="App">
      <div className="photo-list">
        <HomeRoute topics={topics} photos={photos} />
      </div>
    </div>
  );
};

export default App;