const Character = require('../model/character')
const { request } = require('express')

module.exports = {
    saveCharacter : async(req, res) => {
        const character = new Character(req.body)
        await character.save()
        res.send(req.body)
    },

    findAllCharacters : async(req, res) => {
        const characters = await Character.find()
        res.send(characters)
    },

    deleteCharacter : async(req, res) => {
        const  id  = req.params.id
        await Character.findByIdAndDelete(id)
    },

    updateCharacter : async(req, res) =>{
        const id = req.params.idUpdate
        res.send(await Character.updateOne({_id:id}, req.body))
    }
}