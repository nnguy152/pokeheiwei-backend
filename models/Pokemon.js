const mongoose = require('../db/connection')

const PokemonSchema = new mongoose.Schema({
   name: String,
   height: Number,
   weight: Number,
   img: String
})

const pokemon = mongoose.model('pokemon', PokemonSchema)

module.exports = pokemon