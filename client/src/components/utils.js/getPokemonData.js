const pokemonApiCall = async (pokemon) => {
  const response = await fetch(`/pokemon/${pokemon}`);
  if (!response?.ok) {
    throw new Error(`An error has occurred: ${response.status}`);
  }
  const pokemonData = await response.json();
  return pokemonData;
};

const getPokemonData = async (query) => {
  const pokemonData = await pokemonApiCall(query);
  const { name, description, is_legendary, sprites, type } = pokemonData;
  const data = {
    name,
    description,
    is_legendary,
    sprites,
    type,
  };
  return data;
};

export { getPokemonData, pokemonApiCall };
