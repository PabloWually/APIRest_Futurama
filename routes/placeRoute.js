const { Router } = require('express')
const router = Router()

const placeController = require('../controllers/placeController')

router.post('/', placeController.savePlace )
router.get('/', placeController.findAllPlaces)

module.exports = router