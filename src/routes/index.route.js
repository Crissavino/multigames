var express = require('express');
var router = express.Router();
const gameController = require('../controllers/game.controller')
const Game = require('../models/Game')

router.get('/', gameController.getGames)



module.exports = router;
