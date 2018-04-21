const express = require('express')
const app = express();
const path = require('path');
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ExpeditionGames2018@gmail.com',
      pass: 'I ate the peanut'
    }
  });

  var mailOptions = {
    from: 'adam035827@gmail.com',
    to: 'adam035827@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

