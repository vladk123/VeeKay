const sendEmail = require('../utils/send_email');

module.exports.sendEmail = async(req, res, next) => {
    // send email
    const {contactName, contactEmail, contactMessage} = req.body
    await sendEmail(undefined,undefined,`New Veekay Message`, "email.ejs", {contactName, contactEmail, contactMessage})

    return res.redirect('/?submitted=true');
}