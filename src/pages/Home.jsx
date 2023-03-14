import { useLoaderData, Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
const Home = () => {
  const pokemons = useLoaderData();

  return (
    <>
      {pokemons.map((pokemon) => (
        <Link
          to={`/pokemon/${pokemon.name}`}
          key={pokemon.name}
          state={pokemon}
        >
          <PokemonCard pokemon={pokemon} />
        </Link>
      ))}
    </>
  );
};

export default Home;
