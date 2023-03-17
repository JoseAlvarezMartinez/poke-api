import { useState,useEffect } from "react";
import { pokemonInfo } from "../helpers/pokemons";
const useGetImage = (url) => {
  const [image, setImage] = useState({});
  const getInfo = async () => {
    const newInfo = await pokemonInfo(url);
    setImage(newInfo);
  };
  useEffect(() => {
    getInfo();
  }, []);
  return [image]
};

export default useGetImage;
