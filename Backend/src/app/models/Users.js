const Sequelize = require('sequelize');
const { Model } = Sequelize;
const bcrypt = require('bcrypt');

class Users extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            vpassword: Sequelize.VIRTUAL,
            avatar: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${process.env.APP_URL}/files/${this.avatar}`
                }
            }
        }, {
            sequelize,
            tableName: 'users'
        });

        this.addHook('beforeSave', async (user) => {
            if(user.vpassword) {
                user.password = await bcrypt.hash(user.vpassword, 8);
            }
        });

        return this;
    }

    checkPass(vpassword) {
        return bcrypt.compare(vpassword, this.password);
    }
}

module.exports = Users;