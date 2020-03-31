const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://feel:feel@feel-1ei6p.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(require('./Routes'))

app.listen(3333)