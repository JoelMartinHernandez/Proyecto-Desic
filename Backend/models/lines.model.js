module.exports = (sequelize, Sequelize) => {
    const Line = sequelize.define("line", {
      number: {
        type: Sequelize.NUMBER
      },
      firstStop: {
        type: Sequelize.STRING
      },
      lastStop: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      }
    });
  
    return Line;
  }