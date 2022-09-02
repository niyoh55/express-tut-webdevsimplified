const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users");
});

router.get("/new", (req, res) => {
  res.send("new user");
});

router
  .route("/:user_id")
  .get((req, res) => {
    // console.log(req.params.user_id);
    console.log(req.user);
    res.send("eto yung para sa specific user");
  })
  .put((req, res) => {
    // console.log(req.params.user_id);
    res.send("eto yung para sa specific user");
  })
  .delete((req, res) => {
    // console.log(req.params.user_id);
    res.send("eto yung para sa specific user");
  });

const users = [{ name: "niyoh" }, { name: "eloisa" }, { name: "qweqwe" }];

router.param("user_id", (req, res, next, user_id) => {
  //console.log(users[user_id] ? users[user_id] : "User not found!");

  req.user = users[user_id] ? users[user_id] : "User not found!";
  next();
});

module.exports = router;
