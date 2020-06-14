const Place = require('../model/place')

module.exports = {
    savePlace : async(req, res) => {
        const place = new Place(req.body)
        await place.save()
        res.send(req.body)
    },

    findAllPlaces : async(req, res) => {
        const places = await Place.find()
        res.send(places)
    },

    deletePlace : async(req, res) => {
        const  id  = req.params.id
        res.send(await Place.deleteOne({_id:id}))
    },

    updatePlace : async(req, res) =>{
        const id = req.params.idUpdate
        res.send(await Place.updateOne({_id:id}, req.body))
    }
}