import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonMapCards from "../components/PokemonMapCards";
import Logo from "../assets/logo.png";
import styles from "./Home.module.css";
import { filtrarPokemones } from "../helpers/funciones";
const Home = () => {
  const pokemons = useLoaderData();
  const [inputPokemon, setInputPokemon] = useState("");
  const [pokemonFilter, setPokemonFilter] = useState([]);

  useEffect(() => {
    filtrarPokemones(inputPokemon, pokemons, setPokemonFilter);
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
            {pokemonFilter.length == 0 && (
              <p className={styles.noEncontrado}>
                El pokemon filtrado no existe
              </p>
            )}
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
