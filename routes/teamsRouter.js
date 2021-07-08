const router = require('express').Router()
const { add, create, remove, getTeams } = require('../controllers/teamsController')
const Authenticate = require('./authentication')

router.post('/create', Authenticate, create)
router.post('/add', Authenticate, add)
router.post('/delete', Authenticate, remove)
router.post('/teams', Authenticate, getTeams)

module.exports = router