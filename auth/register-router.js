const router = require('express').Router();
const bcrypt = require('bcryptjs');

const genToken  = require('./generateToken-helper.js');

const Users = require('../users/users-model.js');

// for endpoints beginning with /api/resgister

router.post('/', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
         .then(savedUser => {
             // generate the token for the user
             const token = genToken(savedUser);
             console.log("TCL: token", token)
             

             res.status(201).json({ created_user: savedUser, token: token });
         })
         .catch(err => {
             console.log('user', user);
             res.status(500).json({
                 message: 'Error adding the user to the database', error: err
             });
         });
});




module.exports = router;