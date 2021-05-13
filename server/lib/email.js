const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

const notify = (to, pincode, name) => {
    console.log(`${new Date()} | notif::email - ${to}`)

    var mailOptions = {
        from: `CoWIN Slot Notifier <${process.env.GMAIL_EMAIL}>`,
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