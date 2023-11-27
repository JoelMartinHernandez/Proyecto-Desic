module.exports = (sequelize, Sequelize) => {
    const Line = sequelize.define("line", {
      number: {
        type: Sequelize.INTEGER
      },
      firstStop: {
        type: Sequelize.STRING
      },
      lastStop: {
        type: Sequelize.STRING
      },
      // cuando termine el backend bien
      // quitar de line el filename y pasarlo a busStop
      filename: {
        type: Sequelize.STRING
      }
    });
  
    return Line;
  }