const express = require('express');

const session = require('../config/session');

const routes = express.Router();

const authMiddlware = require('../app/middlewares/auth');

const user = require('./user');
const sessionRoute = require('./session');
const tag = require('./tag');
const post = require('./post');

routes.use(session);

routes.use(user);
routes.use(sessionRoute);

routes.use(authMiddlware);
routes.use(tag);
routes.use(post);

module.exports = routes