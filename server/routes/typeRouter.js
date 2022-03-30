const Router = require('express')
const router = new Router()
const {createTypes,getAllTypes} = require ('../controllers/typeController' )
router.post('/',createTypes)
router.get('/',getAllTypes)


module.exports = router