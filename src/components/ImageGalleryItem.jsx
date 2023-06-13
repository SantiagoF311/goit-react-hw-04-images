import React from "react";
import { ImageGalleryItemStyled } from "./styledComponents/ImageGallery";
import { ImageGalleryItemImage } from "./styledComponents/ImageGallery";

const ImageGalleryItem = ({ image, onItemClick }) => {
  const handleClick = () => {
    onItemClick(image);
  };

  return (
    <ImageGalleryItemStyled onClick={handleClick}>
      <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
    </ImageGalleryItemStyled>
  );
};

export default ImageGalleryItem;