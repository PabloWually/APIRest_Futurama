const { Router } = require('express')
const router = Router()

const placeController = require('../controllers/placeController')

router.post('/', placeController.savePlace )
router.get('/', placeController.findAllPlaces)
router.delete('/:id', placeController.deletePlace)
router.put('/:idUpdate', placeController.updatePlace)

module.exports = router