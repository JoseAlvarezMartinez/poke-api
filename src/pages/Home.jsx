import { useLoaderData } from "react-router-dom";
const Home = () => {
  const pokemons = useLoaderData();
  console.log(pokemons)
  return <></>;
};

export default Home;
