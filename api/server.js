const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

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


module.exports = server;