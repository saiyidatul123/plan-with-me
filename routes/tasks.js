var express = require('express');
var router = express.Router();
const db = require("../model/helper");

// GET all tasks
router.get("/", function(req,res){
    db(`SELECT * FROM tasks;`)
    .then((results) => {
        res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
})

const getAllTasks = (req,res) => {
    db(`SELECT * FROM tasks;`)
    .then((results) => {
        res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
}

// GET one task
router.get('/:id', function(req,res){
    db(`SELECT * FROM tasks WHERE id=${req.params.id};`)
    .then(results => {
        res.send(results.data);
    })
    .catch(err => res.status(404).send(err));
})

// GET one user with user's tasks
router.get("/user/:user_id", function(req,res){
    db(`SELECT date, text, complete FROM tasks WHERE user_id=${req.params.user_id};`)
    .then(results=>{
        res.send(results.data);
    })
    .catch(err => res.status(404).send("user not found"));
})

// INSERT a new task
router.post("/", function(req,res){
    db(`INSERT INTO tasks (date,text,complete,user_id) VALUES ("${req.body.date}","${req.body.text}",${req.body.complete},${req.body.user_id});`)
    .then(() => {
        getAllTasks(req,res);
    })
    .catch(err => res.status(404).send(err));
})

// UPDATE everything in task
router.put("/:id", function(req,res){
    db(`UPDATE tasks SET date="${req.body.date}", text="${req.body.text}", complete=${req.body.complete} WHERE id=${req.params.id};`)
    .then(()=> {
        getAllTasks(req,res);
    })
    .catch(err => res.status(404).send("fail to update"));
})

// UPDATE date in task 
router.put("/:id/date", function(req,res){
    db(`UPDATE tasks SET date="${req.body.date}" WHERE id=${req.params.id};`)
    .then(()=> {
        getAllTasks(req,res);
    })
    .catch(err => res.status(404).send("task not found"));
})

// UPDATE text in task
router.put("/:id/text", function(req,res){
    db(`UPDATE tasks SET text="${req.body.text}" WHERE id=${req.params.id};`)
    .then((results)=> {
        getAllTasks(req,res);
    })
    .catch(err => res.status(404).send("task not found"));
})

// UPDATE complete in task
router.put("/:id/complete", function(req,res){
    db(`UPDATE tasks SET complete=${req.body.complete} WHERE id=${req.params.id};`)
    .then(()=> {
        getAllTasks(req,res);
    })
    .catch(err => res.status(404).send("task not found"));
})

// DELETE a task
router.delete("/:id", function(req,res){
    db(`DELETE FROM tasks WHERE id=${req.params.id};`)
    .then(() => {
        getAllTasks(req,res);
    })
    .catch(err => res.status(404).send(err))
})
module.exports = router;