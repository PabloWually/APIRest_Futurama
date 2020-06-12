const { Router } = require('express')
const router = Router()

const characterController = require('../controllers/characterController')

router.post('/', characterController.saveCharecter )

module.exports = router