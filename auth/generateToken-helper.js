const jwt = require('jsonwebtoken');

function genToken(user) {
    const payload = {
        userid: user.id,
        username: user.username,
        department: user.department
    };

    const options = { expiresIn: '1h' };

    const signedToken = jwt.sign(payload, jwtSecret, options);

    return signedToken;
}

module.exports = genToken;

