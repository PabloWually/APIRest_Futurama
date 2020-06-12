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
    }
}