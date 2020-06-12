const Character = require('../model/character')

module.exports = {
    saveCharacter : async(req, res) => {
        const character = new Character(req.body)
        await character.save()
        res.send(req.body)
    },

    findAllCharacters : async(req, res) => {
        const characters = await Character.find()
        res.send(characters)
    }
}