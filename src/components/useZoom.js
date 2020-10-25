import { useState } from 'react';

const useZoom = () => {
  const [zoomMode, setZoomMode] = useState(false);
  const [selectedItem, setItem] = useState({
    image: '',
    title: '',
    category: '',
    description: '',
    isFavorite: false,
    id: '',
  });
  return {
    zoomMode,
    setZoomMode,
    selectedItem,
    setItem,
  };
};

export default useZoom;
