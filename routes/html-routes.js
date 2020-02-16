// *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************
// const router = require("express").Router();
// // Dependencies
// // =============================================================
// var path = require("path");

// // Routes
// // =============================================================
// module.exports = function(router) {

//   // Each of the below routes just handles the HTML page that the user gets sent to.

//   // index route loads view.html
//   router.get("/exercise", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });

//   router.get("/stats", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
//   });

//   // blog route loads blog.html
//   router.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

// };
