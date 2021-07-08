const pokemon = require('../models/pokemon')

var pokemonController = {
    create: async (req, res) => {
        try{
            var Pokemon = await pokemon.findOne({ idPokemon: req.body.idPokemon })

            if(Pokemon != null)
                throw { error:  true, message: "Pokemon ya existente"}

            var newPokemon = new pokemon({
                idPokemon: req.body.idPokemon,
                name: req.body.name,
                description: req.body.description,
                baseExperience: req.body.baseExperience,
                height: req.body.height,
                weight: req.body.weight,
                types: req.body.types,
                urlSprites: req.body.urlSprites
            })

            await newPokemon.save()
            return res.status(201).json({ error: false, message: "Pokemon creado exitosamente" })
        }
        catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = pokemonController