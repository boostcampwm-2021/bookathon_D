const router = require('express').Router();
const ctrl = require('./timer.controller');

router.post('',ctrl.insertTimerCtrl);
router.get('',ctrl.AllTimerCtrl);
router.get('/daily',ctrl.dailyTimerCtrl);
router.get('/top',ctrl.topCtrl);

module.exports = router;
