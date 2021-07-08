const { Schema, model } = require("mongoose")

var team = new Schema({
    idOwner: String,
    name: String,
    members: [Number]
})

module.exports = model("team", team)