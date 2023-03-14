import { Link, useLoaderData } from "react-router-dom";
import PokemonMapCards from "../components/PokemonMapCards";

const Home = () => {
  const pokemons = useLoaderData();
  return (
    <>
      {pokemons.map((pokemon) => (
        <Link to={`/${pokemon.name}`} key={pokemon.name} state={pokemon}>
          <PokemonMapCards pokemon={pokemon} />
        </Link>
      ))}
    </>
  );
};

export default Home;
