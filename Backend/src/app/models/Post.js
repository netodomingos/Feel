const Sequelize = require('sequelize');
const { Model } = Sequelize;

const Post_Tags = require('./Post_Tags');

class Post extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            image: Sequelize.STRING,
            postcontent: Sequelize.STRING,
            userid: Sequelize.INTEGER,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${process.env.APP_URL}/files/${this.image}`
                }
            }
        }, {
            sequelize,
            tableName: 'posts'
        });

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Tags, { through: Post_Tags });
        this.belongsTo(models.Users, { foreignKey: 'userid', as: 'users' });
    }
}

module.exports = Post;