
  
    var nodemailer = require('nodemailer')
    
    var transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'bansalnishant316@gmail.com',
            pass:'nishant16'
        }
    })
    
    //Send mail
    
    var mailOptions = {
        from:"utkarshmishra2001@gmail.com",
        to:"bansalnishant1653@gmail.com",
        subject:"Email NodeJS test",
        text:"Hello Mr. B Nishanth Bansa, tu mujhe janta hai tereko pata nahi lekin tu janta hai"
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