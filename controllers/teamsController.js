const team = require('../models/team')

var teamController = {
    create: async (req, res) => {
        try {
            var team = await team.findOne({ name: req.body.name })

            if(team != null)
                throw { error: true, message: "Equipo con nombre ya creado" }

            var newTeam = new team({
            idOwner: req.body.idOwner,
            name: req.body.name,
            members: []
            })

            await team.save()
            return res.status(200).json({error: false, message: "Creado"})
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    add: async (req, res) => {
        try {
            var team = await team.findOne({ name: req.body.name })

            if(team == null)
                throw { error: true, message: "Equipo inexistente" }

            team.members = [...team.members, req.body._id]

            await team.save()
            return res.status(200).json({error: false, message: "Agregado"})
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    remove: async (req, res) => {
        var Owner = await team.findOne({ name: req.body.name })

            if(Owner == null)
                throw { error: true, message: "Usuario inexistente" }

            var array = Owner.members

            var index = array.indexOf(item);
            if (index !== -1) {
                array.splice(index, 1);
            }

            Owner.members = array

            await Owner.save()
            return res.status(200).json({error: false, message: "Eliminado"})
    },

    getTeams: async (req, res) => {
        try {
            var teams = await team.find({ idOwner: req.body.idOwner })

            return res.status(200).json(teams)
        }
        catch(err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = teamController