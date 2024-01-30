const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path :'./config/config.env'});


mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

// creating connection with the database
mongoose.connect(process.env.parentDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
})
    .then(() => { console.log("Mongoose Connection Successful") })
    .catch((err) => { console.log(err) });


    //definning schema for the parent database    
const signinSchema = mongoose.Schema(
    {
        parentName: {
            type: String,
            required: true,
        },
        parentEmail: {
            type: String,
            unique: true,
            required: true
        },
        parentNumber: {
            type: String,
            required: true
        },
        parentPassword: {
            type: String,
            required: true,
        },
        tokens:[{
            token:{
                type:String,
                required:true,
            }
        }],


    }
);

// defining a method for generating token 
signinSchema.methods.generateAuthToken = async function(){
    try {
        const generated_token = jwt.sign({ _id: this._id.toString()}, "CareTracker-ASafetyBandforChildren",// (err , token)=>{
        //     console.log(`Your token is -> ${generated_token}`); 
        // }
        );

        // console.log(generated_token);
        this.tokens = this.tokens.concat({token:generated_token});
        // await this.save();
        return generated_token;
// jwt.de
    } catch (err) {
        console.log(`Token generation failed :\n ${err}`);
    }
}
// hashing the stored password
signinSchema.pre("save", async function go(next) {
    if (this.isModified("parentPassword")) {
        console.log(`The current password is ${this.parentPassword}`);
        this.parentPassword = await bcrypt.hash(this.parentPassword, 10);
    }
    next();
});

const Parent = new mongoose.model('Account', signinSchema);

const childSchema = new mongoose.Schema( 
    {
        childName:{
            type: String,
            required : true,
        },        
        childGender:{
            type: String,
            required : true,
        },        
        childAddress:{
            type: String,
            required : true,
        },        
        childCity:{
            type: String,
            required : true,
        },        
        childState:{
            type: String,
            required : true,
        },        
        parentEmail:{
            type: mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true,
        },        
        tokens: [
            {token:{
            type: String,
            // required : true,
        } }  ]    
    }
    );

const Child = new mongoose.model('Child', childSchema);


const userSchema = new mongoose.Schema( 
    {
        googleId:{
            type: String,
            required : true,
        },        
            
        displayName:{
            type: String,
            required : true,
        },        
        email:{
            type: String,
            required : true,
        },        
        tokens: [
            {token:{
            type: String,
            // required : true,
        } }  ]    
    }
    );

const User = new mongoose.model('User', userSchema);




 module.exports.Parent = Parent;
 module.exports.Child = Child;
 module.exports.User = User;


/** async function insert() {
        try {
            const record = new Parent({
            parentName: "Johnny Walker",
            parentEmail: "walker@gmail.com",
            parentNumber: "789789",
            parentPassword: "8980"

        });
        let result = await record.save();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}*/

