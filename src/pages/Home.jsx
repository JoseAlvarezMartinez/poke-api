import { Link, useLoaderData } from "react-router-dom";
import PokemonMapCards from "../components/PokemonMapCards";
import Logo from "../assets/logo.png";
import styles from "./Home.module.css";
const Home = () => {
  const pokemons = useLoaderData();
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} className={styles.logo} alt="Logotipo de Pokemon" />
        <input autoFocus type="text" placeholder="Buscar pokemon"/>
      </header>
      <main>
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
      </main>
    </>
  );
};

export default Home;
