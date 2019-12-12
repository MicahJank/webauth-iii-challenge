const router = require('express').Router();
const bcrypt = require('bcryptjs');

const genToken = require('./generateToken-helper.js');

const Users = require('../users/users-model.js');

// for endpoints beginning with /api/login

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
         .first()
         .then(user => {
             if(user && bcrypt.compareSync(password, user.password)) {
                 const token = genToken(user);
                 res.json({ userId: user.id, token: token });
             } else {
                 res.status(401).json({ message: 'Invalid Credentials' });
             };
         })
         .catch(err => {
             res.status(500).json({
                 message: 'Error trying to log in',
                 error: err
             });
         });
});


module.exports = router;