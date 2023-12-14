module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
      HourAndMinutes: {
        type: Sequelize.TIME,
        allowNull:false
      },
      idLine: {
        type: Sequelize.INTEGER,
        allowNull:false
      }
    });
  
    return Schedule;
  }