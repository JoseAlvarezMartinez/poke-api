
export async function loader() {
  const respuesta = await fetch(process.env.REACT_APP_POKE_API);
  const { results } = await respuesta.json();
  return results;
}
export async function consumirImg(urlPokemon) {
  const respuesta = await fetch(urlPokemon);
  const resultado = await respuesta.json();
  return resultado;
}
