const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema =  new Schema({
    _id: String,
    name: String,
    gender: String,
    age: Number,
    specie: String,
    ocupation: String,
    image: String,
    location: String,
    isAlive: Boolean
})

module.exports = mongoose.model('characters', characterSchema)