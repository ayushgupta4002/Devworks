const express = require('express');
const cors = require('cors')
var nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;
const validator = require("validator")
const app = express();
require("dotenv").config();


app.use(express.json());
app.use(cors());




app.get("/",(req,res) => {
    res.json({
        message:"welcome to this server"
    });
});

app.post("/send",(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const requirement = req.body.requirement;
    try {
  
        if (validator.isEmpty(name) || validator.isEmpty(requirement)) {
          res.send({ message: 'one or more fields are empty' });
    
        }
        if (!validator.isEmail(email)) {
          res.send({ message: 'Email is not Valid' });
        }
         if (validator.isEmail(email) == true && validator.isEmpty(name) == false && validator.isEmpty(requirement) == false) {
            var transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: process.env.EMAIL_SENDER,
                    pass: process.env.GMAIL_KEY
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
    
            var mailOptions = {
                from: `"DevWorks.in" <${process.env.EMAIL_SENDER}>`,
                to: `${process.env.EMAIL_RECEIVER1},${process.env.EMAIL_RECEIVER2}`,
                subject: `you got a request`,
                text: `Hey there, Welcome to DevFeed.in , Your daily solution to keep you updated`,
                html: `<b>name:</b> ${name} <p><b>email:</b> ${email} <p><b>requirement:</b> ${requirement}`,
    
            };
    
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
    
                    return console.log(error);
                }
              
                res.send({ message: 'Message Sent' });
                
            });
 
    
        }
      } catch (error) {
        console.log(error);
    
      }


});








app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
  });