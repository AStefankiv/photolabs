import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';


const sampleDataForTopicList = [
  {id: "1", slug: "topic-1", title: "Nature",},
  {id: "2", slug: "topic-2", title: "Travel",},
  {id: "3", slug: "topic-3", title: "People",},
];
// const photos = new Array(3).fill(sampleDataForPhotoListItem);

const App = () => {
  return (
    <div className="App">
      <div className="photo-list">
        {/* {photos.map((photo, index) => (
          <PhotoListItem key={index} sampleData={photo} />
        ))} */}
        <PhotoList />
        <TopicList topics={sampleDataForTopicList} />
      </div>
    </div>
  );
};

export default App;