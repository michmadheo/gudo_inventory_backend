const express = require('express');
const appinfo = require('../controllers/appinfo-controller');

const router = express.Router()

router.get('/', appinfo.appInitial);
router.get('/appDescription', appinfo.appDescription);

module.exports = router;