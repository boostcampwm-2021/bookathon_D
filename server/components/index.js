const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/timer', require('./timer'));

module.exports = router;
