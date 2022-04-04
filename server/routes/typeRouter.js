const Router = require('express')
const router = new Router()
const {createTypes,getAllTypes} = require ('../controllers/typeController' )
const checkRole = require('../middleware/checkRoleMiddleware')
router.post('/',checkRole("ADMIN"), createTypes)
router.get('/',getAllTypes) 


module.exports = router