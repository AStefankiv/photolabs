import React from 'react';

import './App.scss';
import HomeRoute from 'components/HomeRoute';
import topics from './mocks/topics';



const App = () => {
  return (
    <div className="App">
      <div className="photo-list">
        <HomeRoute topics={topics} />
      </div>
    </div>
  );
};

export default App;