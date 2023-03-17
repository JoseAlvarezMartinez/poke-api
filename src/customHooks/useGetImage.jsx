import { useState,useEffect } from "react";
import { consumirImg } from "../helpers/pokemons";
const useGetImage = (url) => {
  const [image, setImage] = useState({});
  const getImages = async () => {
    const newImages = await consumirImg(url);
    setImage(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);
  return [image]
};

export default useGetImage;
