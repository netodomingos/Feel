const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')

const PostController = require('./Controllers/PostController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/post', upload.single('image') ,PostController.store)
routes.get('/post', PostController.index)

module.exports = routes