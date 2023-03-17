import { useEffect, useState } from "react";
import useGetImage from "../customHooks/useGetImage";
import styles from "./PokemonMapCards.module.css";
const PokemonMapCards = ({ pokemon }) => {
  let { name, url } = pokemon;
  const [statsInfo, setStatsInfo] = useState({});
  const [image] = useGetImage(url);
  const { stats } = image;

  useEffect(() => {
    if (stats == undefined) return;
    const statsInformacion = stats.map((stat) => stat.base_stat);
    setStatsInfo(statsInformacion);
  }, [stats]);
  return (
    <div className={styles.pokemonCard}>
      <div className={styles.pokeContainer}>
        <img src={image.sprites?.front_default} alt={`Imagen de ${name}`} />
        <h2>{name}</h2>
        <p>{image.weight}</p>
        <p>0{image.height}</p>
        <p>0{statsInfo[0]}</p>
        <p>0{statsInfo[1]}</p>
        <p>0{statsInfo[2]}</p>
      </div>
    </div>
  );
};

export default PokemonMapCards;
