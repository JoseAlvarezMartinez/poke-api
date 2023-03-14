import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { consumirImg } from "../helpers/pokemons";
const PokemonCard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [image, setImage] = useState("");
  const imgPokemon = async () => {
    const newImages = await consumirImg(state.url);
    setImage(newImages);
  };
  useEffect(() => {
    imgPokemon();
  });
  return (
    <div>
      <button onClick={() => navigate("/")}>Volver</button>
      <img src={image} alt={`Imagen de ${state.name}`} />
    </div>
  );
};

export default PokemonCard;
