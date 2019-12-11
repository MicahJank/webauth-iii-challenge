const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const jwt = require('jsonwebtoken');

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




server.get('/token', (req, res) => {
    const tokenSecret = process.env.JWT_SECRET || 'wethotiwasatoad';
    
    const payload = {
        subject: 'thisuser',
        userid: 'micah',
    };

    // const secret = tokenSecret;
    const options = {
        expiresIn: '1h'
    };

    const token = jwt.sign(payload, tokenSecret, options);

    res.json(token);
});


module.exports = server;