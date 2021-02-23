require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('./database')

class App {
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(helmet());
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

module.exports = new App().server;