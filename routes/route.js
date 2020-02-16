// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const router = require("express").Router();
// Requiring our Todo model
var db = require("../models");
const path = require("path");

// Routes
// =============================================================

// blog route loads blog.html
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// index route loads view.html
  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


  
  router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ day: 1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(1);
      })
      .catch(err => {
        res.json(err);
        // console.log(2);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(3);
      })
      .catch(err => {
        res.json(err);
        // console.log(4);
      });
  });

  router.post("/api/workouts/", (req, res) => {
    console.log("createWorkout", req.body);
    db.Workout.create({
      exercises: [req.body]
    })
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(5, dbWorkout);
      })
      .catch(err => {
        res.json(err);
        // console.log(6);
      });

    // const workout = {
    //   exercise: req.body.exercise,
    //   name: req.body.name,
    //   duration: req.body.duration,
    //   weight: req.body.weight,
    //   reps: req.body.reps,
    //   sets: req.body.sets,
    //   distance: req.body.distance
    // };
    // const workout = new Workout({
    //   _id: mongoose.Schema.Types.ObjectId(),
    //   exercise: req.body.exercise,
    //   name: req.body.name,
    //   duration: req.body.duration,
    //   weight: req.body.weight,
    //   reps: req.body.reps,
    //   sets: req.body.sets,
    //   distance: req.body.distance
    // });
    // workout
    // .save()
    // .then(result => {
    //   console.log(result);
    // })
    // .catch(err => console.log(err));

    // -------------------------------
  });

  // router.get("/populatedWorkout", (req, res) => {
  //   db.Workout.find({})
  //     .populate("Workouts")
  //     .then(dbWorkout => {
  //       res.json(dbWorkout);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  router.put("/api/workouts/:id", (req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true } 
    )
      // .populate("Workouts")
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(7);
      })
      .catch(err => {
        res.json(err);
        // console.log(8);
      });
  });



module.exports = router;
