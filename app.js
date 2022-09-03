const express = require('express');
const bodyParser = require('body-parser');
const appinforoutes = require('./routes/appinfo-routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({limit:'50mb'}));
app.use(cors());

app.use('/api/info', appinforoutes);

app.listen(5000);