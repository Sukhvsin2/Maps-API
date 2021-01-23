const express = require('express')
const Router = express.Router()
const points = require('../mapPoints/points')

Router.get('/', (req, res) => {
    res.status(200).json({points})
})
 
Router.get('/:location', (req, res) => {
    console.log(req.params.location);
    res.status(200).json({'data': 'check'})
})

module.exports = Router;