import { useState, useReducer } from "react";

// export default function useApplicationData() {

//   const [modal, setModal] = useState(false);//useState to manage the modal state
//   const [selectedPhoto, setSelectedPhoto] = useState(null);//useState to manage the selected photo

//   const showModal = (photo) => {
//     setSelectedPhoto(photo);
//     setModal(true);
//   };

//   const [like, setLike] = useState([]);

//   // const toggleFav = (photoId) => {//Do not use this function
//   //   if (like.includes(photoId)) {
//   //     setLike(like.filter(id => id !== photoId));
//   //   } else {
//   //     setLike([...like, photoId]);
//   //   }
//   // };

//   const toggleFav = (photoId) => {
//     setLike((prevLike) => {
//       if (prevLike.includes(photoId)) {
//         return prevLike.filter((id) => id !== photoId);
//       } else {
//         return [...prevLike, photoId];
//       }
//     });
//   };

//   const isFav = (photoId) => like.includes(photoId);
  
//   console.log('Like: ' + like);

//   const isFavPhotoExist = like.length > 0;
  
//   return {
//     modal,
//     setModal,
//     selectedPhoto,
//     setSelectedPhoto,
//     like,
//     setLike,
//     showModal,
//     toggleFav,
//     isFav,
//     isFavPhotoExist,
//   };
// }


//Remove useState from useApplicationData and replace it with useReducer
const reducer = (state, action) => {
  if (action.type === 'FAV_PHOTO_ADDED') {
    return { ...state, like: [...state.like, action.photoId] };
  }
  if (action.type === 'FAV_PHOTO_REMOVED') {
    return { ...state, like: state.like.filter((id) => id !== action.photoId) };
  }
  if (action.type === 'SET_PHOTO_DATA') {
    return { ...state, photos: action.photos };
  }
  if (action.type === 'SET_TOPIC_DATA') {
    return { ...state, topics: action.topics };
  }
  if (action.type === 'SELECT_PHOTO') {
    return { ...state, selectedPhoto: action.photo };
  }
  if (action.type === 'DISPLAY_PHOTO_DETAILS') {
    return { ...state, modal: true };
  }
  if (action.type === 'HIDE_PHOTO_DETAILS') {
    return { ...state, modal: false, selectedPhoto: null };
  }
  return state;
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    modal: false,
    selectedPhoto: null,
    like: [],
    photos: [],
    topics: [],
    setModal: true,
  });

  const showModal = (photo) => {
    dispatch({ type: 'SELECT_PHOTO', photo });
    dispatch({ type: 'DISPLAY_PHOTO_DETAILS' });
  };

  const setModal = (value) => {
    if (value === false) {
      dispatch({ type: 'HIDE_PHOTO_DETAILS' });
    }
  };

  const toggleFav = (photoId) => {
    if (state.like.includes(photoId)) {
      dispatch({ type: 'FAV_PHOTO_REMOVED', photoId });
    } else {
      dispatch({ type: 'FAV_PHOTO_ADDED', photoId });
    }
  };

  const isFav = (photoId) => state.like.includes(photoId);

  const isFavPhotoExist = state.like.length > 0;

  return {
    ...state,
    showModal,
    toggleFav,
    isFav,
    isFavPhotoExist,
    setModal,
  };
};

export default useApplicationData;