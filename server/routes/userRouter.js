const Router = require('express')
const router = new Router()
const  {registration, login, check} = require('../controllers/userController')

router.post('/registration',registration)
router.get('/login',login)
router.get('/auth', check)


module.exports = router