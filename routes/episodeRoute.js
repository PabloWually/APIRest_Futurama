const { Router } = require('express')
const router = Router()

const episodeController = require('../controllers/episodeController')

router.post('/', episodeController.saveEpisode )
router.get('/', episodeController.findAllEpisodes)

module.exports = router