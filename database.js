// YOU GOT ME
// const url = require("url");
const {MongoClient} = require("mongodb");
const DBurl = "mongodb://localhost:27017";
const client = new MongoClient(DBurl);
const database = 'CareTracker';

async function dbConnect(){
    let clientConnection = await client.connect(database);

    let db = clientConnection.db("CareTracker");
    return db.collection("signin");
}
// dbConnect();
var db = dbConnect();

const insertInDB = async (insertObject)=>{
    let db = await dbConnect();
    
    data =  await db.insertOne( insertObject);
    console.log(data);
}

const readInDB = async( insertObject ) =>{
    let db = await dbConnect();
     data = await db.findOne(insertObject)
    console.log("Acknowledged");
    return data;
}

const obj = {
    parentEmail:"jarvis@gmail.com"
}
// readInDB(obj);
// mongo.connect
module.exports.insert = insertInDB;
module.exports.loginCheck = readInDB;
// module.exports.db = db;
module.exports.dbConnect = dbConnect;

