const express = require('express')
const cors = require('cors')
const route = require('./routes/mapRoutes')

const app = express()

app.use(route);

app.listen(2727, () => {
    console.log('Server running at 2727');
 })