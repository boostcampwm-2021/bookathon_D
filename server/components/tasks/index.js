const router = require('express').Router();
const ctrl = require('./task.controller');

router.post('',ctrl.addTaskCtrl)
router.get('',ctrl.showTaskCtrl)
router.delete('',ctrl.deleteTaskCtrl)
module.exports = router;
