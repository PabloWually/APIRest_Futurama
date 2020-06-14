const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const episodeSchema =  new Schema({
    _id: String,
    name: String,
    season: String,
    IdCharacter: {type: String, ref: 'characters', required: true},
    IdPlace: {type: String, ref: 'places', required: true}
})

module.exports = mongoose.model('episodes', episodeSchema)