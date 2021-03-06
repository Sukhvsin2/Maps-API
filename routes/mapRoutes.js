const express = require('express')
const Router = express.Router()
const points = require('../mapPoints/points')
const specificPoints = require('../mapPoints/specificPoints')

Router.get('/', (req, res) => {
    res.status(200).json({points})
})
 
Router.get('/:location', (req, res) => {
    const data = specificPoints[req.params.location];
    res.status(200).json({'data': data})
})

module.exports = Router;