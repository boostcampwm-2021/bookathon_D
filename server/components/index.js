const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/timer', require('./timer'));
router.get('/*', (req, res, next) => {
  res.render('index.html');
});
module.exports = router;
