const express = require("express");
const router = express.Router();
const main = require('../controllers/main');

router.route('/message/')
    // send message
    .post(main.sendEmail)

module.exports = router;