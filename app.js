'use strict'

const express = require('express')
const router = require('./routes')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://Pablo:pablo12345@cluster0-z04rg.gcp.mongodb.net/Futurama?retryWrites=true&w=majority')
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err))

app.use('/', router)

app.listen(`${port}`, () => {
    console.log(`Api-Rest running in http://localhost:${port}`)
})