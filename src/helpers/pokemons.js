export async function loader() {
  const respuesta = await fetch(process.env.REACT_APP_POKE_API);
  const { results } = await respuesta.json();
  return results;
}
