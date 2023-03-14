import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { consumirImg } from "../helpers/pokemons";
const PokeCardIndividual = ({ pokemon }) => {
  const { state } = useLocation();
  const [img, setImg] = useState("");
  const getImgFunction = async () => {
    const respuesta = await consumirImg(state.url);
    setImg(respuesta);
  };
  useEffect(() => {
    getImgFunction();
  }, []);
  return (
    <main>
      {/* <img src={pokemon.img} alt={`Imagen de ${state.name}`} /> */}

      {pokemon ? <h2>{pokemon.name}</h2> : <h2>{state.name}</h2>}
    </main>
  );
};

export default PokeCardIndividual;
