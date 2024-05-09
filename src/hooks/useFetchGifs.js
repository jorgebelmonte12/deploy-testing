import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getGifs(category).then((newImages) => {
        setImages(newImages);
        setIsLoading(false);
      });
    }, 2000);
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
