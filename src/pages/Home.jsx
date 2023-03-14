import { useLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
const Home = () => {
  const pokemons = useLoaderData();

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </>
  );
};

export default Home;
