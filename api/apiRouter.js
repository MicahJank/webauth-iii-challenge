const router = require('express').Router();

// import routers
const loginRouter = require('../auth/login-router.js');
const registerRouter = require('../auth/register-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/users', usersRouter);


module.exports = router;