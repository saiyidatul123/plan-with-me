var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM users;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

const getAllUsers = (req, res) => {
  db("SELECT * FROM users;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
};

// GET one user
router.get("/:id")

module.exports = router;
