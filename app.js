const fs = require('fs');
const bcrypt = require("bcryptjs");
const { Parent, Child } = require('./mongoose.js');
// const mo = require('./database.js');

const methodOverride = require('method-override');
const morgan = require('morgan');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const multer = require('multer');
const bodyparser = require('body-parser');
const url = require('url');
// const {sendMail} = require('./contact');
// const {isLoggedIn, guestLoggedIn } = require('./config/passportConfig.js');
const expressLayouts = require('express-ejs-layouts'); 
const session = require('express-session');
const {initializePassport} = require('./config/passportConfig');
const passport = require("passport");
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');



dotenv.config({path :'./config'});
const port = process.env.PORT || 5566;
const lis=[];

//--------------------------logs-------------------------------------
// const addr =  "http://127.0.0.1:5500";//http://127.0.0.1:5500/

// 'http://localhost:8080/default.htm?year=2017&month=february';
const HTMLpath = path.join(__dirname, 'public');
console.log(`-------->  ${HTMLpath}  <----------`);

// const addr = "http://localhost:" + port + "/shit?man=10";
// const here = url.parse(addr, true);

// */ console.log(typeof(here));
// console.log("Hello" +process.env.URI);
//---------------------------------------------------------------

const app = express();

if( process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
     // --------------MORGAN USED TO LOG ALL STEPS -----------------------
}

var user;

app.use(express.static(HTMLpath));
app.set('view engine','ejs');
app.use(express.json());

// app.use( '/dashboardcss', express.static( __dirname+'public'))
app.use( express.static( __dirname+'public'));

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));

app.use(session(
        { secret: "CareTracker",
        resave:false ,
         saveUninitialized: false, // never choose true
         
        cookie :{ 
            secure:false,
            maxAge: 60*60*1000, //define the validity period of login session

        },

        store :  MongoStore.create({ 
            mongoUrl : process.env.ParentDatabase,
            collection : "session",
            autoRemove: 'disabled',
        
        } ),


        }));
    // No need to give parents address to again at the time of crud operations in dashboard.
    // app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(
        methodOverride(function (req, res) {
          if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            let method = req.body._method
            delete req.body._method
            return method
          }
        })
      )

    // Set global var
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
  })
  
initializePassport(passport);// running the google authorization using passport JS

 
   

// ----------------------------Google login------------------------------------------
// const store = 
//   function isLoggedIn (res, req, next) {
//     if(req.isAuthenticated()){
//       return next()
//     }else{
//       res.redirect('/nav/signin');
//     }

//    };

//     function guestLoggedIn(res,req,next){
//     if( !req.isAuthenticated()){
//       return next();
//     }else{
//       res.redirect('/');
//     }
//    };


// function isLoggedIn( req, res, next) {
//     req.user ? next(): res.sendStatus(401);
// }   
//------------------------------------------------------

app.use('/auth', require('./routes/auth'));

/*
app.get('/auth/google', 
passport.authenticate('google', { scope : [ ' email', 'profile']})
);

app.get('/auth/google/callback',
passport.authenticate('google',{
    successRedirect : '/protected',
    failureRedirect : '/auth/failure',
})
);


app.get('/auth/failure', (req,res)=>{
    res.send(`<h1>Login Failed</h1>`);
});

// app.get('/dashboard', (req, res,next)=>{
//     var message = null;
// try {
//     res.locals.displayName = req.user.displayName;
//     res.locals.email= req.user.email;
// }    
//  catch (error) {
//     message =  `<a href='/auth/google'>Login using Google</a>`
// }
//     user ={ 
//         name : res.locals.displayName,
//         email : res.locals.email,
//     };

//     const children = Child.find({childGender:'male'}).lean();

//     res.render('dashboard',{ 
//         user,
//         children, 
//         message  });
//     console.log(req.user);
    
// });


// @desc User Logout
// // @route POST /logout
// router.post('/logout', function(req, res, next){
//     req.logout(function(err) {
//       if (err) { return next(err); }
//       res.redirect('/');
//     });
//   });*/

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

 
app.use("/nav", require('./routes/nav'));
app.use('/child', require('./routes/child.js'));

// // user contacting the system 
// app.post('/',async (req,res)=>{
//     let passw;
//     res.write(`
//     <script> ${passw} = prompt("Enter the password");</script>
//     `);
//     // res.send('/');
//     res.end();
//     const pass = passw; 
//     const user = req.body.email;
//     const text = req.body.message;
//     await sendMail(user, pass , text );
// });


// API POST ROUTES
var insertObject = {
    'parentName': 'parentName',
    'parentNumber': ' parentNumber',
    'parentEmail': 'parentEmail',
    'parentPassword': 'parentPassword',
}

app.post('/', async (req, res) => { // parent signing in
    try {
        if(req.body.parentEmail =='') throw "Email info not filled"
        if(req.body.parentNumber =='') throw "Number  not filled"
        if(req.body.parentName =='') throw "Parent Name not filled"
        if(req.body.parentPassword =='') throw " Password not filled"
        // if(req.body.parent)
        // if(req.body.parent)
        // if(req.body.parent)


        if (req.body.parentPassword === req.body.confirmPassword) {
            console.log("SECRET password : " + req.body.parentPassword);
            //    insert(req.body); 

            try {  //using Mongoose insert
                const record = new Parent({
                    parentName: req.body.parentName,//" Walker",
                    parentEmail: req.body.parentEmail,// "walker@gmail.com",
                    parentNumber: req.body.parentNumber,//"789789",
                    parentPassword: req.body.parentPassword,//"8980"

                });

                const generateToken = await record.generateAuthToken();
                console.log(generateToken);

                let result = await record.save();
                console.log(result);

            } catch (error) {
                let err = error;
                // res.send(err);
                console.table(err);
                console.info(err);
                console.info(err.errors_message.parentNumber);
                if (err.code === 11000) {
                    res.status(400).send(`This email id is already in use. Login from another email id `);
                }
            }
            if (result.acknowledged == 1) {
                res.status(200).send(`Hello ${req.body.parentName} . Your email ID is ${req.body.parentEmail}              <button class="btn btn-primary" ><a href="/signin">Login</a> </button>
            `);
            }
            // const insertObject= JSON.parse(req.body);
            // console.log("Parsed - "+ insertObject);/
        } else {
            throw 'Password and Confirm password do not match.'
            // res.send('Password and Confirm password do not match.');
        }

    } catch (error) {
        res.status(400).send(error);
    }
});
//Adding child
//---------------------------------------------------------------------------
app.post('/addchild', async (req,res,next)=>{ //route to add child info in the Database
   
        try{
            // console.table(req.body,);
            // console.log(`parentEmail : ${req.session.parentEmail} stored`);
            req.body.parentEmail = req.user.id;

        const result = await Child.create(req.body)
       
        console.table( result );
        console.log(`Child of ${req.locals.user} is stored !!` )
        // deprecated res.send(req.body);
        
        // res.render('dashboard', {user});
        res.redirect('/nav/dashboard')
        }catch(err){
            res.send(err);
            console.table(err);
        }
         
    // console.log(req.body.file);
    // res.status(200).send("Child Information Added");

});


app.post('/dashboard', async (req, res) => {//parent logging in
    try {
        if(req.body.parentEmail =='') throw "Email field not filled"        
        if(req.body.parentPassword =='') throw " Password not filled"                
    const email = req.body.parentEmail;
    const inputPassword = req.body.parentPassword;
    lis[0]=email; // (deprecated) list to storre current user 
    console.log(`${email} and  password is ${inputPassword}`);
    // const db = await dbConnect();
    // const userdata = await db.findOne({ parentEmail: email });
    // console.log(userdata);
    // loginCheck({
    // parentEmail:email,
    // parentPassword: 
    try {
    var userdata = await Parent.findOne({ parentEmail: email });

    // res.send(userdata);
    } catch(error){ res.status(400).send(`<h1>Invalid Credentials</h1>`);
    console.table(error);
}


    // res.send(userdata);

     if (userdata === null) throw 'Account Not found' 
     else console.table( `This account logged in ${userdata}`)
    const isMatched = await bcrypt.compare(inputPassword, userdata.parentPassword);
    if (isMatched) {
        // req.session.user = userdata.parentEmail;
        // console.log(` ${req.session.user.username} Login successful !!`);
        res.sendFile(HTMLpath + "/dashboard.html");
    } else {
        res.send(`<h1>Invalid Credential</h1>`);

    }
    } catch (error) {        res.status(400).send(`<h1>${error}</h1>`);
    // console.info(error);
    }
    
});




app.listen(port, () => {
    console.log("CareTracker Running in "+ process.env.NODE_ENV+ " mode");
    console.log("Server available at  : http://localhost:" + port + "/auth/google ");
    console.log(" Server available at  : http://localhost:" + port + "/nav/signin");
});

// *********************TRASH**********************
/*
childName
childGender
childAddress
childCity
childState
 }

module.exports.port =port;
app.get("/:email-:password" , (req,res)=>{
    // const loginEmail = req.body.loginEmail;
    console.log(req.params.email);
    console.log(loginEmail);
    console(req.body.loginEmail);
    // if (loginEmail == ) {} else {}
});*/

/*if(parcel === {}){
    return res.send('Status:Failed');
}
res.send(req.body.parentEmail);*/

// res.send( HTMLpath+"/signin.html");
// module.exports =app;