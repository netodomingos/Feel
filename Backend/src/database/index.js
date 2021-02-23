const sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Users = require('../app/models/Users');
const Posts = require('../app/models/Post');
const Tags = require('../app/models/Tags');
const Post_Tags = require('../app/models/Post_Tags');

const models = [
    Users,
    Posts,
    Tags,
    Post_Tags
];

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new sequelize(databaseConfig);

        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();