const Episode = require('../model/episode')
const { request } = require('express')

module.exports = {
    saveEpisode : async(req, res, next) => {
        try {
            const episode = new Episode(req.body)
            const result = await episode.save()
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

    findAllEpisodes : async(req, res, next) => {
        try {
            const results = await Episode.find({}, { __v: 0 })
            res.send(results)
          } catch (error) {
            console.log(error.message)
          }
    },

    deleteEpisodes : async(req, res,next) => {
        const  id  = req.params.id
        try {
            const result = await Episode.deleteOne({_id:id});
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

    updateEpisodes : async(req, res, next) =>{
        const id = req.params.idUpdate
        const updates = req.body
        try {
            const result = await Episode.updateOne({_id:id}, req.body)
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