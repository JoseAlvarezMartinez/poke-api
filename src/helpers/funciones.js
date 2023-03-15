export const filtrarPokemones = (inputPokemon,pokemons,setPokemonFilter) => {
    if (inputPokemon) {
      const filtrado = pokemons.filter((pokemon) =>
        pokemon.name.includes(inputPokemon.toLowerCase())
      );
      setPokemonFilter(filtrado);
    } else {
      setPokemonFilter([]);
    }
  };