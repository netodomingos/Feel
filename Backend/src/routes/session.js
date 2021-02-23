const express = require('express');

const routes = express.Router();

const authMiddlware = require('../app/middlewares/auth');

const SessionController = require('../app/controllers/SessionController');

routes.route('/session')
        .post(SessionController.create)
        .delete(authMiddlware, SessionController.logout);

module.exports = routes;