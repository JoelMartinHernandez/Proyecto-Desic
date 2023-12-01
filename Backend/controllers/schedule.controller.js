const db = require("../models");
const Schedule = db.Schedule;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Create a Line
  const schedule = {
    HourAndMinutes: req.body.HourAndMinutes,
    idLine: req.body.idLine
  }
  console.log(schedule)

  // Save Line in the database
  Schedule.create(schedule).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the schedule"
    })
  });
};

// Retrieve all Schedule from the database.
exports.findAll = (req, res) => {
  console.log(req.params)
    Schedule.findAll({where:{
      idLine:req.params.idLine
    }}).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving all schedule"
      })
    })
};

// Update a line by the id in the request
exports.update = (req, res) => {  
    const schedule = {
        HourAndMinutes: req.body.HourAndMinutes,
        idLine: req.body.idLine
    }
    const id = req.params.id;
  
    Schedule.update(schedule, {
      where: { id: id }
    }).then(data => {
      res.send({ message: "se actualizo correctamente" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the schedule"
      })
    })
};

// Delete a line with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Schedule.destroy({ where: { id: id } }).then(data => {
      res.send({ message: "se elimino correctamente" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the line"
      })
    })
  };