import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { filtrarPokemones } from "../helpers/funciones";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PokemonMapCards from "../components/PokemonMapCards";
import Logo from "../assets/logo.png";
import styles from "./Home.module.css";
const Home = () => {
  const pokemons = useLoaderData();
  const [inputPokemon, setInputPokemon] = useState("");
  const [pokemonFilter, setPokemonFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);
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
              <PokemonMapCards key={pokemon.name} pokemon={pokemon} />
            ))}
            {pokemonFilter.length == 0 && (
              <p className={styles.noEncontrado}>
                El pokemon filtrado no se encontró
              </p>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <Box sx={{ display: "flex",alignItems:"center",height:"50vh" }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                {pokemons.map((pokemon) => (
                  <PokemonMapCards key={pokemon.name} pokemon={pokemon} />
                ))}
              </>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Home;
