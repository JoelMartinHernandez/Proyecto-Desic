module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            allowNull:false
        },
        username: {
            type: Sequelize.STRING,
            allowNull:false
        },
        password: {
            type: Sequelize.STRING,
            allowNull:false
        },
        discriminator: {
            type: Sequelize.ENUM("administrator","user"),
        }
    });

    return User;
}