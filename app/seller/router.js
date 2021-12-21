var express = require('express');
var router = express.Router();
const {create} = require('./controller');

router.post('/create', create);

module.exports = router;