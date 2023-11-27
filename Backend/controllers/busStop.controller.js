const db = require("../models");
const BusStop = db.BusStop;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Create a busLine
  const busStop = {
    Location: req.body.Location,
    idLine: req.body.idLine,
    filename: req.file ? req.file.filename : ""
  }

  // Save busLine in the database
  BusStop.create(busStop).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the busStop"
    })
  });
};

// Retrieve all busLines from the database.
exports.findAll = (req, res) => {
    BusStop.findAll().then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving all busStop"
      })
    })
};

// Update a busLine by the id in the request
exports.update = (req, res) => {  
    const busStop = {
        Location: req.body.Location,
        idLine: req.body.idLine,
        filename: req.file ? req.file.filename : ""
      }
    const id = req.params.id;
  
    BusStop.update(busStop, {
      where: { id: id }
    }).then(data => {
      res.send({ message: "se actualizo correctamente" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the busStop"
      })
    })
};

// Delete a busLine with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    BusStop.destroy({ where: { id: id } }).then(data => {
      res.send({ message: "se elimino correctamente" });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the busStop"
      })
    })
  };