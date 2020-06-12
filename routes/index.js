const { Router } = require('express')
const bodyParser = require('body-parser')

const characterRouter = require('./characterRoute')
const placeRouter = require('./placeRoute')
const episodeRouter = require('./episodeRoute')
const router = Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))

router.get('/', (req, res) => { res.send('<h1>Hello World!</h1>') })
router.use('/character', characterRouter)
router.use('/place', placeRouter)
router.use('/episode', episodeRouter)

module.exports = router