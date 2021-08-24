var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET all stickers
router.get("/", function(req,res){
    db(`SELECT * FROM stickers`)
    .then((results) => {
        res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
})

const getAllStickers = (req,res) => {
    db(`SELECT * FROM stickers;`)
    .then(results => {
        res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
}

// GET one sticker
router.get("/:id", function(req,res){
    db(`SELECT * FROM stickers WHERE id=${req.params.id};`)
    .then(results => {
        res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
})

// GET a theme
router.get("/theme/:theme", function(req,res){
    db(`SELECT * FROM stickers WHERE theme="${req.params.theme}";`)
    .then(results => {
        res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
})

// INSERT a sticker
router.post("/", function(req,res){
    db(`INSERT INTO stickers (title,url,creator,theme) VALUES ("${req.body.title}","${req.body.url}","${req.body.creator}","${req.body.theme}");`)
    .then(() => {
        getAllStickers(req,res);
    })
    .catch(err => res.status(404).send(err));
})

// DELETE a sticker
router.delete("/:id", function(req,res) {
    db(`DELETE FROM stickers WHERE id=${req.params.id};`)
    .then(()=>{
        getAllStickers(req,res)
    })
    .catch(err => res.status(404).send(err));
})

module.exports = router;