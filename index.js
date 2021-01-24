const express = require('express')
const cors = require('cors')
const route = require('./routes/mapRoutes');

const app = express()

app.use(cors());
app.use(route);

const port = process.env.PORT || 2727

app.listen(port, () => {
    console.log('Server running at ' +port);
 })