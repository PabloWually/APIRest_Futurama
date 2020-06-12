const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema =  new Schema({
    _id: String,
    name: String,
    location: String,
    nativeSpecies: String,
    memberOf: String,
    image: String
})

module.exports = mongoose.model('places', placeSchema)
