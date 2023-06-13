import axios from 'axios';

export const searchImages = async (searchTerm, setImages, pageNumber, replace = true) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: searchTerm,
        page: pageNumber,
        key: '36787252-5c3b11e3b9a6e8386f9bae3e3', 
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 20
      }
    });

    const newImages = response.data.hits;

    if (replace) {
      setImages(newImages);
    } else {
      setImages((prevImages) => {
        const uniqueImages = newImages.filter(
          (newImage) => !prevImages.some((prevImage) => prevImage.id === newImage.id)
        );
        return [...prevImages, ...uniqueImages];
      });
    }

    return newImages;
  } catch (error) {
    console.error(error);
  }
};