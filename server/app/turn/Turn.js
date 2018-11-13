'use strict'
const express = require("express");
const router = express.Router();

var bodyParser = require("body-parser");
var controller = require("./TurnController");


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));

//define API

//get all turns
router.get('/', controller.getAllTurns);

router.post('/',controller.requestTurn);

router.delete('/:id_turn',controller.cancelTurn);

router.put('/:id_turn',controller.updateTurn);


module.exports = router;