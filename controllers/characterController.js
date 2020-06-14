const Character = require('../model/character')
const { request } = require('express')

module.exports = {
    saveCharacter : async(req, res, next) => {
        try {
            const character = new Character(req.body)
            const result = await character.save()
            res.send(result)
        } catch (error) {
            console.log(error.message);
            if (error.name === 'ValidationError') {
            next(createError(422, error.message))
            return
            }
            next(error)
        }
    },

    findAllCharacters : async(req, res, next) => {
        try {
            const results = await Character.find({}, { __v: 0 })
            res.send(results)
          } catch (error) {
            console.log(error.message)
          }
    },

    deleteCharacter : async(req, res,next) => {
        const  id  = req.params.id
        try {
            const result = await Character.deleteOne({_id:id});
            if (!result) {
              throw createError(404, 'Product does not exist.');
            }
            res.send(result);
          } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
              next(createError(400, 'Invalid Product id'));
              return;
            }
            next(error);
          }
    },

    updateCharacter : async(req, res, next) =>{
        const id = req.params.idUpdate
        const updates = req.body
        try {
            const result = await Character.updateOne({_id:id}, req.body)
            if (!result) {
              throw createError(404, 'Product does not exist')
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
              return next(createError(400, 'Invalid Product Id'))
            }
            next(error);
        }
    }
}