const Place = require('../model/place')
const { request } = require('express')

module.exports = {
    savePlace : async(req, res, next) => {
        try {
            const place = new Place(req.body)
            const result = await place.save()
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

    findAllPlaces : async(req, res, next) => {
        try {
            const results = await Place.find({}, { __v: 0 })
            res.send(results)
          } catch (error) {
            console.log(error.message)
          }
    },

    deletePlace : async(req, res,next) => {
        const  id  = req.params.id
        try {
            const result = await Place.deleteOne({_id:id});
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

    updatePlace : async(req, res, next) =>{
        const id = req.params.idUpdate
        const updates = req.body
        try {
            const result = await Place.updateOne({_id:id}, req.body)
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