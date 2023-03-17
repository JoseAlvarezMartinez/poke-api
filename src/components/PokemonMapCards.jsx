import useGetImage from "../customHooks/useGetImage";
import styles from "./PokemonMapCards.module.css";
const PokemonMapCards = ({ pokemon }) => {
  let { name, url } = pokemon;
  const [image] = useGetImage(url);
  return (
    <div className={styles.pokemonCard}>
      <div className={styles.pokeContainer}>
        <img src={image.sprites?.front_default} alt={`Imagen de ${name}`} />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default PokemonMapCards;
