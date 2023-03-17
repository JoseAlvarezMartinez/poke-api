import { useEffect, useState } from "react";
import { TbWeight } from "react-icons/tb";
import { TfiRuler } from "react-icons/tfi";
import useGetImage from "../customHooks/useGetImage";
import styles from "./PokemonMapCards.module.css";

const PokemonMapCards = ({ pokemon }) => {
  let { name, url } = pokemon;
  const [statsInfo, setStatsInfo] = useState({});
  const [peso,setPeso] = useState("")
  const [image] = useGetImage(url);
  const { stats } = image;

  useEffect(() => {
    if (stats == undefined) return;
    const statsInformacion = stats.map((stat) => stat.base_stat);
    setStatsInfo(statsInformacion);
    setPeso(image.weight.toString().slice(0,-1))
  }, [stats]);
  return (
    <div className={styles.pokemonCard}>
      <div className={styles.pokeContainer}>
        <img src={image.sprites?.front_default} alt={`Imagen de ${name}`} />

        <h2>{name}</h2>

        <div className={styles.iconContainer}>
          <TbWeight />

          <p>{peso}</p>
        </div>
        <div className={styles.iconContainer}>
          <TfiRuler />
          <p>0{image.height}</p>
        </div>
        <p>HP: 0{statsInfo[0]}</p>
        <p>ATK: 0{statsInfo[1]}</p>
        <p>DEF: 0{statsInfo[2]}</p>
      </div>
    </div>
  );
};

export default PokemonMapCards;
