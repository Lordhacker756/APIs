var nodemailer = require('nodemailer')

export function emailSender(email)
{

var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    ignoreTLS: false,
    secure: false,
    service:'gmail',
    auth:{
        user:'bansalnishant3516@gmail.com',
        pass:'nishant16'
    }
})

//Send mail

var mailOptions = {
    from:"utkarshmishra2001@gmail.com",
    to:email,
    subject:"Email NodeJS test",
    text:"Hello Mr. B Nishanth Bansal This is sent using dynamic text feild"
};

transport.sendMail(mailOptions,function(error, info) {
    if(error){
        console.log(error);
    }
    else
    {
        console.log("Email Sent" + info.response);
    }
})

} 