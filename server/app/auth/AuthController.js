var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
require('../others/Constants'); // get our config file

function verifyToken(req, res, next) {
    
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];

    if (!token){
        logger.warn(__filename,nameFunction,'Unauthorized Access');
        return res.status(401).send({ code:401, message: 'Unauthorized' });
    }

    // verifies secret and checks id is expired
    jwt.verify(token, SECRET_KEY, function(err, decoded) {
        if (err) {
            return res.status(401).send({ code:401, message: 'Unauthorized' }); 
        }else{
            req.id = decoded.body.id; //save because it can be used to data access
            req.typeUser = decoded.body.typeUser; //save because it can be used to data access
            next();
        }
    });

}


function createToken(user) {
    var payload = {id:user.id, typeUser:user.type, currentTime: Date.now() };
    var token = jwt.sign(payload,SECRET_KEY,{
        expiresIn:EXPIRING_TIME
    });
    return token;
}

module.exports = {
    verifyToken:verifyToken,
    createToken:createToken,
};