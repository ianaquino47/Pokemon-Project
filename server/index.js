const express = require('express');
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get('/pokemon/:pokemon', async (req, res, next) => {
  const { pokemon } = req.params;

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const { name, species, sprites, types } = response.data;
    const moreInfo = await axios.get(species.url);
    const { flavor_text_entries, is_legendary } = moreInfo.data;

    const findEnglishDescription = (entries) => {
      english_entry = entries.find((entry) => entry.language.name === 'en');
      return english_entry.flavor_text;
    };

    const description = findEnglishDescription(flavor_text_entries).replace(
      /\n|\f/g,
      ' '
    );

    const type = types[0].type.name;

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
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
