import { useEffect, useState } from "react";
import { consumirImg } from "../helpers/pokemons";
const PokemonMapCards = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [image, setImage] = useState("");
  const getImages = async () => {
    const newImages = await consumirImg(url);
    setImage(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`Imagen de ${name}`} />
    </div>
  );
};

export default PokemonMapCards;
