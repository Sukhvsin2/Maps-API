const express = require('express')
const cors = require('cors')
const route = require('./routes/mapRoutes');
const e = require('express');

const app = express()

app.use(cors());
app.use(route);

const port = 2727 || process.env.PORT

app.listen(port, () => {
    console.log('Server running at 2727');
 })