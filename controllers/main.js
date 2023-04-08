const sendEmail = require('../utils/send_email');

module.exports.sendEmail = async(req, res, next) => {
    
    const {contactName, contactEmail, contactMessage, contactConfirm} = req.body

    // If not all fields are filled out or answer is incorrect
    if(!contactName || !contactEmail || !contactMessage || !contactConfirm || contactConfirm !== 'five' || contactConfirm !== 'Five' || contactConfirm !== '5'){
        console.log('Spam...')
        return res.redirect('/?submitted=true');
    }

    // Send email
    await sendEmail(undefined,undefined,`New Veekay Message`, "email.ejs", {contactName, contactEmail, contactMessage, contactConfirm})

    return res.redirect('/?submitted=true');
}