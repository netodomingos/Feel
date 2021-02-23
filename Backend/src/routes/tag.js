const express = require('express');

const routes = express.Router();

const TagController = require('../app/controllers/TagController');

routes.route('/tag')
        .post(TagController.register)
        .get(TagController.index);

module.exports = routes;