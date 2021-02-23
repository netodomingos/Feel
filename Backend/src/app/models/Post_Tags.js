const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Post_Tags extends Model {
    static init(sequelize) {
        super.init({}, {
            sequelize,
            tableName: 'post_tags',
            timestamps: false
        });

        return this;
    }
}

module.exports = Post_Tags;