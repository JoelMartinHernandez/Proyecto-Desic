module.exports = (sequelize, Sequelize) => {
    const BusStop = sequelize.define("busStop", {
      Location: {
        type: Sequelize.STRING,
        allowNull:false
      },
      idLine: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      filename: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  
    return BusStop;
  }