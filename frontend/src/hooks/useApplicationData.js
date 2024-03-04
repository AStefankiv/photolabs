import { useState } from "react";

export default function useApplicationData() {
  // const [modal, setModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [like, setLike] = useState([]);

  // const showModal = (photo) => {
  //   setSelectedPhoto(photo);
  //   setModal(true);
  // };

  // const toggleFav = (photoId) => {
  //   if (like.includes(photoId)) {
  //     setLike(like.filter((id) => id !== photoId));
  //   } else {
  //     setLike([...like, photoId]);
  //   }
  // };

  // const isFav = (photoId) => like.includes(photoId);

  // const isFavPhotoExist = like.length > 0;

  // return {
  //   modal,
  //   setModal,
  //   selectedPhoto,
  //   setSelectedPhoto,
  //   like,
  //   setLike,
  //   showModal,
  //   toggleFav,
  //   isFav,
  //   isFavPhotoExist,
  // };

  const [modal, setModal] = useState(false);//useState to manage the modal state
  const [selectedPhoto, setSelectedPhoto] = useState(null);//useState to manage the selected photo

  const showModal = (photo) => {
    setSelectedPhoto(photo);
    setModal(true);
  };

  const [like, setLike] = useState([]);

  const toggleFav = (photoId) => {
    if (like.includes(photoId)) {
      setLike(like.filter(id => id !== photoId));
    } else {
      setLike([...like, photoId]);
    }
  };

  const isFav = (photoId) => like.includes(photoId);
  
  console.log('Like: ' + like);

  const isFavPhotoExist = like.length > 0;
  
  return {
    modal,
    setModal,
    selectedPhoto,
    setSelectedPhoto,
    like,
    setLike,
    showModal,
    toggleFav,
    isFav,
    isFavPhotoExist,
  };
}