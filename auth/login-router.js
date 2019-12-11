const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { genToken } = require('./generateToken-helper.js');

const { jwtSecret } = require('../config/secrets.js');

const Users = require('../users/users-model.js');

// for endpoints beginning with /api/login




module.exports = router;