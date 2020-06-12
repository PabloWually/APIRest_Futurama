const Character = require('../model/character')

module.exports = {
    saveCharecter : async(req, res) => {
        const character = new Character(req.body)
        await character.save()
        res.send(req.body)
    }
}