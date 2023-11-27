module.exports = (sequelize, Sequelize) => {
    const Schedule = sequelize.define("schedule", {
      HourAndMinutes: {
        type: Sequelize.TIME
      },
      idLine: {
        type: Sequelize.INTEGER,
        allowNull:false
      }
    });
  
    return Schedule;
  }