module.exports = (sequelize, Sequelize) => {
    const Line = sequelize.define("line", {
      number: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      firstStop: {
        type: Sequelize.STRING,
      },
      lastStop: {
        type: Sequelize.STRING,
      },
    });
  
    return Line;
  }