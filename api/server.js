const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js')

const apiRouter = require('./apiRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// use routers
server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send("The serverrrr is aliiiiiveee with the souuuund of developerrrrrssss!");
});




// server.get('/token', (req, res) => {

//     const payload = {
//         subject: 'thisuser',
//         userid: 'micah',
//     };

//     // const secret = tokenSecret;
//     const options = {
//         expiresIn: '1h'
//     };

//     const token = jwt.sign(payload, jwtSecret, options);

//     res.json(token);
// });


module.exports = server;