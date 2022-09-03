const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api-routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({limit:'50mb'}));
app.use(cors());

app.use('/api', routes);

app.listen(5000);