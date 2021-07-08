const { Schema, model } = require('mongoose')

var pokemon = new Schema({
    idPokemon:{
        type: String,
        required: true
    },
    name: String,
    description: String,
    baseExperience: Number,
    height: Number,
    weight: Number,
    types: [String],
    urlSprites: [String]
})

module.exports = model("pokemon", pokemon)