import { useLoaderData, Link } from "react-router-dom";
import PokeCardIndividual from "../components/PokeCardIndividual";
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
          <PokeCardIndividual pokemon={pokemon} />
        </Link>
      ))}
    </>
  );
};

export default Home;
