//const connection = require('../conecction/Connection');


function getSingleUser(data){
    pass = req.body.password = bcrypt.hashSync("password", 8);
    var response ={
        rows = [{username:"usuario", password:pass, type:"type"}]
    };
    var promise = new Promise(function(reject,resolve){
        resolve(response);
    });
    return promise;
}

function registerDoctor(data){
    var promise = new Promise(function(reject,resolve){
        response = "OK";
        resolve(response);
    });
    return promise;

}

function registerAdministrator(data){
    var promise = new Promise(function(reject,resolve){
        response = "OK";
        resolve(response);
    });
    return promise;
}

function registerPatient(data){
    var promise = new Promise(function(reject,resolve){
        response = "OK";
        resolve(response);
    });
    return promise;
}

module.exports = {
    getSingleUser:getSingleUser,
    registerDoctor:registerDoctor,
    registerAdministrator:registerAdministrator,
    registerPatient:registerPatient
}