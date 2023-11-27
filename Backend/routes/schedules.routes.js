const  {schedules} = require("../models")

module.exports = app => {
    const schedules = require("../controllers/schedule.controller");

    var router = require("express").Router();

        // Create a new schedules
        router.post("/", schedules.create);
  
        // Retrieve all schedules
        router.get("/", schedules.findAll);
    
        // Update a schedules with id
        router.put("/:id", schedules.update);
      
        // // Delete a User with id
        router.delete("/:id", schedules.delete);
      
        app.use('/api/schedules', router);
};