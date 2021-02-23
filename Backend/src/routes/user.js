const express = require('express');
const multer = require('multer');

const uploadConfig = require('../config/upload');
const authMiddlware = require('../app/middlewares/auth');

const routes = express.Router();
const upload = multer(uploadConfig);

const UserController = require('../app/controllers/UserController');

routes.route('/user')
        .post(UserController.register)
        .get(authMiddlware, UserController.selectOne);

routes.route('/avatar')
        .post(authMiddlware, upload.single('image'), UserController.avatar);

module.exports = routes;