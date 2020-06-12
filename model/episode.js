const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const episodeSchema =  new Schema({
    _id: String,
    name: String,
    season: String,
    IdCharacter: String,
    IdPlace: String
})

module.exports = mongoose.model('episodes', episodeSchema)