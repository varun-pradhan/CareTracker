
//Require the dependency
const nodemailer = require('nodemailer');
// const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: 'varunpradhan331@gmail.com',
        clientId:'764059992022-ll5310fhuv95bmbugok4j23d3iggt1ui.apps.googleusercontent.com',// 'YOUR_CLIENT_ID',
        clientSecret: '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', //'YOUR_CLIENT_SECRET',
        refreshToken: 'YOUR_REFRESH_TOKEN',
        accessToken: 'YOUR_ACCESS_TOKEN',
        expires: 1484314697598
    }
});

let mailOptions = {
    from: 'varunpradhan331@gmail.com',
    to: 'caretracker1.0@gmail.com',
    subject: 'Varun Here',
    text: 'This is a sample email sent from Node.js application without password'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});



/*
const googleAPImail= "https://www.googleapis.com/auth/gmail.send";

//Create a transporter
const sendMail = async (user, pass, text )=>{

  // let testAccount = 
  await nodemailer.createTestAccount( googleAPImail, (err,account)=>{
    if(err){
      console.error( "Test mail account not created."+ err.message)
      // return process.exit()
    }
    });  // createTestAccount()
 // let testuser = 

let transporter = nodemailer.createTransport
/*nodemailer.createTransport({
  // service: 'gmail',
  host: account.smtp.host,
  port : account.smtp.port,
  // secure: false,
  auth: {
    // type :'OAuth2',
    user:  account.user,//testAccount.user, // enter your email address
    pass: account.pass, // enter your email password
  }
});// createTrsnsport()

//Send mail
let mailOptions = {
  from: user, // enter your email address
  to: 'varunpradhan.scoe.it@gmail.com',
//   to: 'caretracker1.0@gmail.com', // enter the receiver's email address
  subject: 'Sending Email using Node.js', // enter the subject of the email
  text: text // enter the body of the email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports.sendMail = sendMail;*/