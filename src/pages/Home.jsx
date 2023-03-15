import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonMapCards from "../components/PokemonMapCards";
import Logo from "../assets/logo.png";
import styles from "./Home.module.css";
const Home = () => {
  const pokemons = useLoaderData();
  const [inputPokemon, setInputPokemon] = useState("");
  const [pokemonFilter, setPokemonFilter] = useState([]);
  const filtrarPokemones = () => {
    if (inputPokemon) {
      const filtrado = pokemons.filter((pokemon) =>
        pokemon.name.includes(inputPokemon.toLowerCase())
      );
      setPokemonFilter(filtrado);
    } else {
      setPokemonFilter([]);
    }
  };
  useEffect(() => {
    filtrarPokemones();
  }, [inputPokemon]);
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} className={styles.logo} alt="Logotipo de Pokemon" />
        <input
          onChange={(e) => setInputPokemon(e.target.value)}
          autoFocus
          type="text"
          placeholder="Buscar pokemon"
        />
      </header>
      <main>
        {inputPokemon.length ? (
          <>
            {pokemonFilter.map((pokemon) => (
              <Link
                className={styles.navegacion}
                to={`/${pokemon.name}`}
                key={pokemon.name}
                state={pokemon}
              >
                <PokemonMapCards pokemon={pokemon} />
              </Link>
            ))}
          </>
        ) : (
          <>
            {pokemons.map((pokemon) => (
              <Link
                className={styles.navegacion}
                to={`/${pokemon.name}`}
                key={pokemon.name}
                state={pokemon}
              >
                <PokemonMapCards pokemon={pokemon} />
              </Link>
            ))}
          </>
        )}
      </main>
    </>
  );
};

export default Home;
