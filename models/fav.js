const { Schema, model } = require("mongoose")

var fav = new Schema({
    idOwner:{
        type: String,
        required: true,
        unique: true
    },
    favs: [Number]
})

module.exports = model("fav", fav)