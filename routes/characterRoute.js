const { Router } = require('express')
const router = Router()

const characterController = require('../controllers/characterController')

router.post('/', characterController.saveCharacter )
router.get('/', characterController.findAllCharacters)

module.exports = router