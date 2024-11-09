
const express = require('express')
const router = express.Router()

router.get("/1", (req, res) => {
    res.send({ endpoint: 1 })
})
router.get("/2", (req, res) => {
    res.send({ endpoint: 2 })
})
router.get("/users/:id", (req, res) => {
    res.send({ user: req.params.id })
})
router.route('/route/:id')
    .get((req, res) => {
        res.send({ get: req.params.id })
    })
    .put((req, res) => {
        res.send({ put: req.params.id })
    })
    .delete((req, res) => {
        res.send({ delete: req.params.id })
    })

//middleware
router.param("id", (req, res, next, id) => {
    console.log(id)
    req.params.id = req.params.id + "_middleware"
    next()
})
module.exports = router