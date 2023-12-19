module.exports = (sequelize, Sequelize) => {
    const Line = sequelize.define("line", {
      number: {
        type: Sequelize.INTEGER,
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