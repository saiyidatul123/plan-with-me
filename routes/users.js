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
router.get("/:id", function(req, res){
  db(`SELECT * FROM users where id=${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch(err => res.status(404).send("user not found"));
})

// INSERT a new user into the DB
router.post("/", function(req, res) {
  db(
    `INSERT INTO users (name,username,password) VALUES ("${req.body.name}","${req.body.username}","${req.body.password}");`
  )
    .then(() => {
      getAllUsers(req, res);
    })
    .catch(err => res.status(404).send(err));
});

// SELECT correct username and password (KIV)
router.post("/login", function(req,res){
  db(`SELECT * FROM users WHERE username="${req.params.username}" AND password="${req.params.password}";`)
  .then((results) => {
    res.send(results.data);
  })
  .catch(() => res.status(404).send("Username and password do not match."))
})

// DELETE a user from the DB
router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM users WHERE id=${req.params.id};`)
    .then(() => {
      getAllStudents(req, res);
    })
    .catch(err => res.status(404).send(err));
});
module.exports = router;
