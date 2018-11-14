'use strict'
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('./UserController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));


//login user api/user/login
router.post('/login',controller.login);



 // VER COMO HACEMOS CON ESTO

//register  api/user/register/
router.post('/register/doctor',controller.registerDoctor);
router.post('/register/patient',controller.registerPatient);
router.post('/register/administrator',controller.registerAdministrator);

module.exports = router;