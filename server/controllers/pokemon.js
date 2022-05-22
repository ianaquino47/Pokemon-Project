const axios = require('axios');

const getPokemon = async (req, res) => {
  const { pokemon } = req.params;

  try {
    const info = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const { name, species, sprites, types } = info.data;
    const moreInfo = await axios.get(species.url);
    const { flavor_text_entries, is_legendary } = moreInfo.data;

    const findEnglishDescription = (entries) => {
      english_entry =
        entries?.find((entry) => entry.language.name === 'en') || '';
      return english_entry.flavor_text;
    };

    const description = findEnglishDescription(flavor_text_entries).replace(
      /\n|\f/g,
      ' '
    );

    const type = types[0]?.type?.name || '';

    const pokemonData = {
      name,
      description,
      is_legendary,
      sprites,
      type,
    };
    res.send(pokemonData);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).send({
        message: `${error.response.statusText}`,
      });
    }
  }
};

module.exports = { getPokemon };
