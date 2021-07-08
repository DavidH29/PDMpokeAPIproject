const router = require('express').Router()
const { add, create, remove, getFavs } = require('../controllers/favsController')
const Authenticate = require('./authentication')

router.post('/create', Authenticate, create)
router.post('/add', Authenticate, add)
router.post('/delete', Authenticate, remove)
router.post('/favs', Authenticate, getFavs)

module.exports = router