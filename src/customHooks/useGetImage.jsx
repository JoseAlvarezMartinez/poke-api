import { useState, useEffect } from "react";
import { consumirImg } from "../helpers/pokemons";
const useGetImage = (url, pokemon) => {
  const [info, setInfo] = useState({
    image: "",
    informacion: [],
  });
  const consultarInformacion = async () => {
    const respuesta = await fetch(pokemon.url);
    const resultado = await respuesta.json();
    return resultado;
  };
  const getInfo = async () => {
    const newImages = await consumirImg(url);
    const newInfo = await consultarInformacion();
    setInfo({
      image: newImages,
      informacion: newInfo,
    });
  };
  useEffect(() => {
    getInfo();
  }, []);
  return [info];
};

export default useGetImage;
