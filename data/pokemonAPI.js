const fetch = require('cross-fetch');

async function getPokemonApi() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');

    const pokemonName = await res.json();

    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return pokemonName;
  } catch (err) {
    //eslint-disable-next-line no-console
    console.error(err);
  }
}

module.exports = { getPokemonApi };
