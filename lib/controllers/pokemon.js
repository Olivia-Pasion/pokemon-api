const { Router } = require('express');
const Pokemon = require('../models/Pokemon')

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const pokemonSingular = await Pokemon.getById(req.params.id);
    console.log(pokemonSingular);
    res.json(pokemonSingular);
  })



