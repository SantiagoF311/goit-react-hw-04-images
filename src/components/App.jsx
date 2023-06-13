import React, { useState, useEffect } from 'react';
import Searcher from './Searchbar';
import ImageGallery from './ImageGallery';
import { searchImages } from './api/SearchImages';
import ButtonLoadMore from './Button';
import Load from './Loader';
import Modal from './Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageName, setImageName] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChangeImageName = e => {
    e.preventDefault();
    const { value } = e.target;
    setImageName(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setPageNumber(1);
    setImages([]);
    try {
      setLoading(true);
      const newImages = await searchImages(imageName, setImages, 1, true); // Pasa setImages en lugar de pageNumber
      setImages(newImages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  const loadMorePics = async (e) => {
    e.preventDefault();
    const nextPageNumber = pageNumber + 1;
  
    try {
      setLoadingMore(true);
      const newImages = await searchImages(imageName, setImages, nextPageNumber, false);
      
      setImages((prevImages) => {
        const uniqueImages = newImages.filter(
          (newImage) => !prevImages.some((prevImage) => prevImage.id === newImage.id)
        );
        return [...prevImages, ...uniqueImages];
      });
  
      setPageNumber(nextPageNumber);
    } catch (error) {
      setError(error);
    } finally {
      setLoadingMore(false);
    }
  };
  
  
  

  const handleImageClick = image => {
    setSelectedImage(image);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const loader = spinner => {
    if (loading) {
      return spinner;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return null;
  };

  return (
    <div>
      <Searcher
        imageName={imageName}
        onChangeImageName={handleChangeImageName}
        onSubmit={onSubmit}
      />

      <ImageGallery images={images} onItemClick={handleImageClick} />

      <ButtonLoadMore onLoadPics={loadMorePics} />

      <Load onLoader={loader} loadingMore={loadingMore} />

      {showModal && (
        <Modal image={selectedImage} onRequestClose={handleModalClose} />
      )}
    </div>
  );
};