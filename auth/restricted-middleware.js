const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js');

 // Remember that typically, the client will include the "type" identifier
  // (typically "Bearer") in addition to the token. We are assuming here that
  // there is no type identifier, and that the header value is just the token.
  // But if we were a better-behaved application, we would check, and strip off
  // the type indicator. If we didn't do that, then when it is included (like it
  // almost always is), verification will fail, because we will be trying to
  // verify "Bearer {token}" instead of "{token}". 

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

  // if we have already verified and decoded the token, no need to do it
  // again... plus, there may be some methods that modify req.decodedJwt, and
  // then a later middleware that calls this restricted-middleware, and we don't
  // want to overwrite req.decodedJwt with another call to this method, if we
  // have already verified the token. 

    if(req.decodedJwt) {
        next();
    } else if(token) {
        jwt.verify(token, jwtSecret, (err, decodedJwt) => {
            if(err) {
                res.status(400).json({ you: "shall not pass!" });
            } else {
                req.decodedJwt = decodedJwt;
                next();
            };
        });
    } else {
        res.status(401).json({ you: "cant touch that." });
    }
}