const { lines } = require("../models");

module.exports = app => {
  const lines = require("../controllers/lines.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new line
  router.post("/", upload.single('file'), lines.create);

  // Retrieve all lines
  router.get("/", lines.findAll);

  // Retrieve a single line with id
  // router.get("/:id", lines.findOne);

  // Update a line with id
  router.put("/:id", upload.single('file'), lines.update);

  // Delete a line with id
  router.delete("/:id", lines.delete);

  app.use("/api/line", router);
}