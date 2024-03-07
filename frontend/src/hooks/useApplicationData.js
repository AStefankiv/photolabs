import { useReducer, useEffect }  from "react";


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
  } else {
    throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};



const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    modal: false,
    selectedPhoto: null,
    like: [],
    photoData: [],
    topicData: [],
  });

  const showModal = (photo) => {
    dispatch({ type: 'SELECT_PHOTO', photo });
    dispatch({ type: 'DISPLAY_PHOTO_DETAILS' });
  };

  const closeModal = (value) => {//previous name 'setModal'
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

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((photos) => dispatch({ type: 'SET_PHOTO_DATA', photoData: photos }));
  }, []);

  return {
    ...state,
    showModal,
    toggleFav,
    isFav,
    isFavPhotoExist,
    closeModal,
  };
};

export default useApplicationData;