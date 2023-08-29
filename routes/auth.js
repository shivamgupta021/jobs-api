const express = require('express');
const router = express.Router();

const { login, register } = require('../controllers/auth');

//we can setup the routes this way as well
// router.post('/register', register);
// router.post('/login', login);

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;
