const { Router } = require('express')
const bodyParser = require('body-parser')

const characterRouter = require('./characterRoute')
const router = Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))

router.get('/', (req, res) => { res.send('<h1>Hello World!</h1>') })
router.use('/character', characterRouter)

module.exports = router