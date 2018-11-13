require('../others/Constants');

function loginResponse(token){
    login = {
        "expiresTime": EXPIRING_TIME,
        "token": token
    };
    return login;
}

module.exports = {
    loginResponse:loginResponse
}