const db = require("../models");
const Line = db.line;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Create a Line
  const line = {
    number: req.body.number,
    firstStop: req.body.firstStop,
    lastStop: req.body.lastStop,
  }

  // Save Line in the database
  Line.create(line).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the line"
    })
  });
};

// Retrieve all lines from the database.
exports.findAll = (req, res) => {
    Line.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving all lines"
      })
    })
};

// Update a line by the id in the request
exports.update = (req, res) => {  
    const line = {
        number: req.body.number,
        firstStop: req.body.firstStop,
        lastStop: req.body.lastStop,
    }
    const id = req.params.id;
  
    Line.update(line, {
      where: { id: id }
    }).then(data => {
      res.send({ message: "se actualizo correctamente" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the line"
      })
    })
};

// Delete a line with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id.value)
    Line.destroy({ where: { id: id } }).then(data => {
      res.send({ message: "se elimino correctamente" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the line"
      })
    })
  };