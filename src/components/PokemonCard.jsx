import { useNavigate, useLocation } from "react-router-dom";
import useGetImage from "../customHooks/useGetImage";
const PokemonCard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [image] = useGetImage(state.url);
  return (
    <div>
      <button onClick={() => navigate("/")}>Volver</button>
      <img src={image} alt={`Imagen de ${state.name}`} />
    </div>
  );
};

export default PokemonCard;
