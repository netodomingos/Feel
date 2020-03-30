const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

mongoose.connect('mongodb+srv://feel:feel@feel-1ei6p.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(require('./Routes'))

app.listen(3333)