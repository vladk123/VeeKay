const express = require("express");
const router = express.Router();
const game = require('../controllers/game');


router.route('/resume/')
    //show resume page
    .get(game.renderContact)

router.route('/message/')
    // send message
    .post(game.sendEmail)

module.exports = router;