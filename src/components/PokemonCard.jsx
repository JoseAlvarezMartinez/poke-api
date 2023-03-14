import { useEffect, useState } from "react";
import { consumirImg } from "../helpers/pokemons";
const PokemonCard = ({ pokemon }) => {
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
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
