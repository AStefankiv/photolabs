import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';


// const photos = new Array(3).fill(sampleDataForPhotoListItem);

const App = () => {
  return (
    <div className="App">
      <div className="photo-list">
        {/* {photos.map((photo, index) => (
          <PhotoListItem key={index} sampleData={photo} />
        ))} */}
        <PhotoList />
        <TopicList />
      </div>
    </div>
  );
};

export default App;