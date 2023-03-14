import useGetImage from "../customHooks/useGetImage";
const PokemonMapCards = ({ pokemon }) => {
  const { name, url } = pokemon;
  const [image] = useGetImage(url);
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`Imagen de ${name}`} />
    </div>
  );
};

export default PokemonMapCards;
