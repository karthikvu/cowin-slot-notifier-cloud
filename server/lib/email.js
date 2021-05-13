const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

const notify = (to, pincode, name) => {
    var mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: to, 
        subject: `CoWIN vaccination slots available for ${pincode}`,
        text:  `CoWIN vaccination slots available for ${pincode}`
    }
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        } else{
           console.log(`Email dispatched to ${to}`)
        }
    });
}

module.exports = { notify }