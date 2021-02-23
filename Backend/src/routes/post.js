const express = require('express');
const multer = require('multer');

const uploadConfig = require('../config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const PostController = require('../app/controllers/PostController');

routes.route('/post')
        .post(upload.single('image'), PostController.store)
        .get(PostController.index);

routes.route('/post/:tag').get(PostController.listTag);

routes.route('/posts/:id').get(PostController.listOne);

module.exports = routes;