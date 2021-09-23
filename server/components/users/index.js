const router = require('express').Router();
const ctrl = require('./users.controller');

router.post('/login',ctrl.login);
router.post('/register',ctrl.register);
