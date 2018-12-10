let router = require('express').Router()
let Tasks = require('../models/task')

router.get('/:listId', (req, res, next) => {
    Tasks.find({ listId: req.params.listId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(newTask => {
            res.send(newTask)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

router.put('/:id', (req, res, next) => {
    Tasks.findById(req.params.id)
        .then(task => {
            task.update(req.body, (err) => {
                if (err) {
                    console.log(err)
                    next()
                    return
                }
                res.send("Successfully Updated")
            });
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

router.delete('/:id', (req, res, next) => {
    Tasks.findById(req.params.id)
        .then(task => {
            Tasks.findByIdAndRemove(req.params.id)
                .then(data => {
                    res.send('DELORTED')
                })
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

module.exports = router