const express = require('express')
const Router = express.Router()
const points = require('../mapPoints/points')

Router.get('/', (req, res) => {
    res.status(200).json({'message': points})
 })

module.exports = Router;