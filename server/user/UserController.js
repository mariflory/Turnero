const AuthController = require("../auth/AuthController");
var bcrypt = require("bcryptjs");
var model = require("./UserModel");
require("../others/Constants");

function login(req,res,next){

    var username = req.body.username || '';
    var password = req.body.password || '';

    //verify parameters
    if (username == '' || password == ''){
        logger.warn(__filename,nameFunction,'breach of preconditions, missing paramters');
        return res.status(400).send({code:400, message:'breach of preconditions, missing paramters'});
    }

   db.getSingleUser(req.body).then(
        function(error){
            res.status(500).send({code:500, message:error.message});
        },
        function(response){
            if(response.rowCount == 0){
                res.status(401).send({code:500, message:'user: '+username+' not exist'});
            }else{
                // check if the password is valid
                var user = response.rows[0];
                bcrypt.compare(password,user.password)
                .then(function(resp){
                    if (resp){
                        //generate token the according to the user
                        var token = AuthController.createToken(user);
                        res.status(201).send(model.loginResponse(token));
                    }else{
                        res.status(401).send({code:401, message:'incorrect password'});
                    }
                });
            }
        }
    );
}


function isValidParametersUser(req){
    var username = req.body.username || '';
    var password = req.body.password || '';
    var name = req.body.name || '';
    var lastName = req.body.lastName || '';
    var dni = req.body.dni || '';
    var email = req.body.email || '';
    var telefono = req.body.telefono || '';
    var domicilio = req.body.domicilio || '';
    var localidad = req.body.localidad || '';

    //verify parameters
    if (username === '' || password === '' || name === ''
        || lastName === '' || dni === ''| email === '' || telefono === 0
        || domicilio === 0 || localidad === 0){
        return false;
    }

    return true;
}



function registerDoctor(req,res,next){
    
    var totalSpecialities = req.body.specialities.length;
    req.body.typeUser =  USER_TYPE.USER_DOCTOR;

    //verify parameters
    if ( !isValidParametersUser || totalSpecialities === 0){
        return res.status(400).send({code:400, message:'breach of preconditions, missing paramters'});
    }

    req.body.password = bcrypt.hashSync(password, 8);
    db.registerDoctor(req.body).then(
        function(error){
            res.status(500).send({code:500, message:error.message});
        },
        function(response){
            res.status(201).send({code:500, message:'Doctor registered successfully'});
        }
    );
}


function registerPatient(req,res,next){

    req.body.typeUser =  USER_TYPE.USER_PATIENT;

    //verify parameters
    if (!isValidParametersUser){
        return res.status(400).send({code:400, message:'breach of preconditions, missing paramters'});
    }

    req.body.password = bcrypt.hashSync(password, 8);
    db.registerPatient(req.body).then(
        function(error){
            res.status(500).send({code:500, message:error.message});
        },
        function(response){
            res.status(201).send({code:500, message:'Patient registered successfully'});
        }
    );
}


function registerAdministrator(req,res,next){

    req.body.typeUser =  USER_TYPE.USER_ADMINISTRATOR;

    //verify parameters
    if (!isValidParametersUser){
        return res.status(400).send({code:400, message:'breach of preconditions, missing paramters'});
    }

    req.body.password = bcrypt.hashSync(password, 8);
    db.registerAdministrator(req.body).then(
        function(error){
            res.status(500).send({code:500, message:error.message});
        },
        function(response){
            res.status(201).send({code:500, message:'Administrator registered successfully'});
        }
    );
}



module.exports ={
    login:login,
    registerDoctor:registerDoctor,
    registerPatient:registerPatient,
    registerAdministrator:registerAdministrator,
}