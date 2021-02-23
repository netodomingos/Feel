const Sequelize = require('sequelize');
const { Model } = Sequelize;

const Post_Tags = require('./Post_Tags');

class Tags extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tag: Sequelize.STRING
        }, {
            sequelize,
            tableName: 'tags',
            timestamps: null
        });

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Post, { through: Post_Tags });
    }
}

module.exports = Tags;