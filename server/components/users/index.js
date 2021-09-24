const router = require('express').Router();
const ctrl = require('./users.controller');

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.post('/logout', ctrl.logout);

module.exports = router;
