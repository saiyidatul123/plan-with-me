var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  db("SELECT * FROM contacts;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

const getAllContacts = (req, res) => {
  db("SELECT * FROM contacts;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
};

// GET one contact
router.get("/:id", function(req, res){
  db(`SELECT * FROM contacts where id=${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch(err => res.status(404).send("contact not found"));
})

// INSERT a new contact
router.post("/", function(req, res) {
  db(
    `INSERT INTO contacts (name,phone,birthday) VALUES ("${req.body.name}","${req.body.phone}","${req.body.birthday}");`
  )
    .then(() => {
      getAllContacts(req, res);
    })
    .catch(err => res.status(404).send(err));
});


// DELETE a contact from the DB
router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM contacts WHERE id=${req.params.id};`)
    .then(() => {
      getAllContacts(req, res);
    })
    .catch(err => res.status(404).send(err));
});
module.exports = router;
