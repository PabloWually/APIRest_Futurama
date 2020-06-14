const { Router } = require('express')
const router = Router()

const characterController = require('../controllers/characterController')

router.post('/', characterController.saveCharacter )
router.get('/', characterController.findAllCharacters)
router.delete('/:id', characterController.deleteCharacter)
router.put('/:idUpdate', characterController.updateCharacter)

module.exports = router