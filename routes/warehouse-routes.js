const express = require('express');
const warehouse = require('../controllers/warehouse-controller');

const router = express.Router()

router.get('/getAllWarehouseList', warehouse.getAllWarehouseList);
router.post('/getWarehouseList', warehouse.getWarehouseList);

module.exports = router;