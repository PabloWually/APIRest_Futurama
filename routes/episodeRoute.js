const { Router } = require('express')
const router = Router()

const episodeController = require('../controllers/episodeController')

router.post('/', episodeController.saveEpisode )
router.get('/', episodeController.findAllEpisodes)
router.delete('/:id', episodeController.deleteEpisodes)
router.put('/:idUpdate', episodeController.updateEpisodes)

module.exports = router