const router = require('express').Router()
const { create } = require('../controllers/pokemonController')

router.post('/create', create)

module.exports = router