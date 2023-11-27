const { BusStop } = require("../models");

module.exports = app => {
  const busStop = require("../controllers/busStop.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new line
  router.post("/", upload.single('file'), busStop.create);

  // Retrieve all lines
  router.get("/", busStop.findAll);

  // Retrieve a single line with id
  // router.get("/:id", lines.findOne);

  // Update a line with id
  router.put("/:id", upload.single('file'), busStop.update);

  // Delete a line with id
  router.delete("/:id", busStop.delete);

  app.use("/api/bus_stop", router);
}