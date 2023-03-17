import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useGetImage from "../customHooks/useGetImage";
import styles from "./PokemonCard.module.css";
const PokemonCard = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const [image] = useGetImage(state.url);
  state.name = state.name.charAt().toUpperCase() + state.name.slice(1);
  return (
    <main>
      <div className={styles.contenedorSuperior}>
        <button className={styles.volverBoton} onClick={() => navigate("/")}>
          <AiOutlineArrowLeft />
        </button>
        <h1 className={styles.name}>{state.name}</h1>
      </div>
      <img src={image} alt={`Imagen de ${state.name}`} />
    </main>
  );
};

export default PokemonCard;
