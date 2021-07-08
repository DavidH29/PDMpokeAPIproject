const router = require('express').Router()
const { login, create } = require('../controllers/userController')

router.post('/login', login)
router.post('/register', create)

module.exports = router