let router = require('express').Router()
let Lists = require('../models/list')

router.get('/', (req, res, next) => {
    Lists.find({ authorId: req.session.uid })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            next()
        })
})

router.post('/', (req, res, next) => {
    Lists.create(req.body)
        .then(newList => {
            res.send(newList)
        })
        .catch(err => {
            res.status(400).send(err)
            next()
        })
})

router.put('/:id', (req, res, next) => {
    Lists.findById(req.params.id)
        .then(list => {
            list.update(req.body, (err) => {
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
    Lists.findById(req.params.id)
        .then(list => {
            Lists.findByIdAndRemove(req.params.id)
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