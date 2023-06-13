import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import { ImageGalleryStyled } from "./styledComponents/ImageGallery";

const ImageGallery = ({ images, onItemClick }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ImageGalleryStyled className="gallery">
      {images.map((image, index) => (
  <ImageGalleryItem
    key={index}
    image={image}
    onItemClick={onItemClick}
  />
))}
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
