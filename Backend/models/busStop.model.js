module.exports = (sequelize, Sequelize) => {
    const BusStop = sequelize.define("busStop", {
      Location: {
        type: Sequelize.STRING
      },
      idLine: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      filename: {
        type: Sequelize.STRING
      }
    });
  
    return BusStop;
  }