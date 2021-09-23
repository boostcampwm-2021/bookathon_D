const router = require('express').Router();
const ctrl = require('./timer.controller');

router.post('',ctrl.insertTimeCtrl);
module.exports = router;
