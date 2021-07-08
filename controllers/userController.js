const user = require('../models/user')
const fav = require('../models/fav')

const jwt = require('jsonwebtoken')

var userController = {
    create: async (req, res) => {
        try {
            var User = await PetOwner.findOne({ username: req.body.username })

            if(User != null)
                throw { error: true, message: "Username registrado" }

            var newUser = new user({
                username: req.body.username,
                password: req.body.password
            })

            await newUser.save()
            return res.status(201).json({ error: false, message: "Usuario creado" })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    login: async (req, res) => {
        try {
            var User = await user.findOne({ username: req.body.username })

            if(User == null)
                throw { error: true, message: "Usuario incorrecto" }

            if(User.password !== req.body.password)
                throw { error: true, message: "Contra incorrecta" }

            const token = jwt.sign({ _id: User._id }, process.env.TOKEN_KEY)

            return res.status(200).json({ error: false, message: "Loggeado", token: token })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = userController