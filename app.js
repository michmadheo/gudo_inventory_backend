const express = require('express');
const bodyParser = require('body-parser');
const appinforoutes = require('./routes/appinfo-routes');
const warehouseroutes = require('./routes/warehouse-routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({limit:'50mb'}));
app.use(cors());

app.use('/gudo_api/info', appinforoutes);
app.use('/gudo_api/warehouse', warehouseroutes);

app.listen(process.env.PORT || 5000);