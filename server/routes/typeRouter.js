const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMidlleware')



router.post('/',checkRole('ADMIN') ,typeController.create )
router.get('/', typeController.getAll)
router.get('/:id',typeController.getOne )



module.exports = router