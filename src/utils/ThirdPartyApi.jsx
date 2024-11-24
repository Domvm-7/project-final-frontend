//thirdPartyApi.jsx

import React, { useState, useEffect } from "react";
import { fetchUnsplashImages } from "../utils/ThirdPartyApi";

const ImageGallery = ({ searchTerm }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const results = await fetchUnsplashImages(searchTerm);
        setImages(results);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (searchTerm) fetchImages();
  }, [searchTerm]);

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
