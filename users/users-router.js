const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkDepartment = require('../auth/check-department-middleware.js');

// router.get('/', restricted, (req, res) => {
//   Users.find()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });


router.get('/', restricted, (req, res) => {
  const { department } = req.decodedJwt;

  Users.findByDepartment(department)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


module.exports = router;