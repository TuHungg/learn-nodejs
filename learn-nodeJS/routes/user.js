const express = require("express");
const router = express.Router();
const path = require("path");
const userControllers = require("../controllers/userController");

router.route("/").get().post(userControllers.createUser);

// router
//   .route("/")
//   .get((req, res) => {
//     res.send("Get Sucess");
//   })
//   .post((req, res) => {
//     res.json({
//       name: req.body.name,
//       age: req.body.age,
//     });
//   });

// // router dynamic
// router.route("/:id").get((req, res) => {
//   res.json({ Id: req.params.id });
//   // res.send("Detail user: ", req.params.id);
// });

module.exports = router;
