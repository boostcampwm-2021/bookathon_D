const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/timers', require('./timers'));
router.use('/tasks', require('./tasks'));

router.get('/*', (req, res, next) => {
  res.render('index.html');
});

module.exports = router;
