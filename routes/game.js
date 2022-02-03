const express = require("express");
const router = express.Router();
const game = require('../controllers/game');


router.route('/resume/')
    //show resume page
    .get(game.renderContact)

module.exports = router;