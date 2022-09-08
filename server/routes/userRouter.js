const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMidlleware = require('../middleware/AuthMidlleware')

router.post('/registration',UserController.registration )
router.post('/login', UserController.login)
router.get('/auth', authMidlleware, UserController.check)


module.exports = router