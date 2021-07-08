const fav = require('../models/fav')

var favsController = {
    create: async (req, res) => {
        try {
            var Owner = await fav.findOne({ idOwner: req.body.idOwner })

            if(Owner != null)
                throw { error: true, message: "Lista ya creada" }

            var newFavList = new fav({
            idOwner: req.body.idOwner,
            favs: []
            })

            await Owner.save()
            return res.status(200).json({error: false, message: "Creada"})
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    add: async (req, res) => {
        try {
            var Owner = await fav.findOne({ idOwner: req.body.idOwner })

            if(Owner == null)
                throw { error: true, message: "Usuario inexistente" }

            Owner.favs = [...Owner.favs, req.body._id]

            await Owner.save()
            return res.status(200).json({error: false, message: "Agregado"})
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    remove: async (req, res) => {
        var Owner = await fav.findOne({ idOwner: req.body.idOwner })

            if(Owner == null)
                throw { error: true, message: "Usuario inexistente" }

            var array = Owner.favs

            var index = array.indexOf(item);
            if (index !== -1) {
                array.splice(index, 1);
            }

            Owner.favs = array

            await Owner.save()
            return res.status(200).json({error: false, message: "Eliminado"})
    },

    getFavs: async (req, res) => {
        try {
            var Owner = await fav.findOne({ idOwner: req.body.idOwner })

            if(Owner == null)
                throw { error: true, message: "Usuario inexistente" }

            return res.status(200).json(Owner.favs)
        }
        catch(err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = favsController