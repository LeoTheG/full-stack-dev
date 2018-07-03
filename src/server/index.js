const express = require("express");
const os = require("os");
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 8081
let db = null;

// for secure user authentication/registration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri:''
    }),
    audience:'',
    issuer:'',
    algorithms:['RS256']
})

// reads data from a randomly generated json file
let data = fs.readFileSync(path.join(__dirname,'..','..','test_file.json'),'utf8');
let dict = JSON.parse(data);

// adds a new collection to given database
function addNewCollection(db,colName,callback,param){
    db.createCollection(colName,(err,res)=>{
        if(err) throw err;
        if(callback)
            callback(param);
    })
}
// lists all collections of given database
function listCollections(db){
    db.listCollections().toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
    })
}
function removeAllCollections(db){
    db.listCollections().toArray((err,res)=>{
        if(err) throw err;
        for(const key in res){
            //console.log(res[key].name);
            db.collection(res[key].name).drop();
        }
    })
}
//print documents of collection of db
function listDocuments(db,col){
    const cursor = db.collection(col).find();
    cursor.each((err,item)=>{
        if(err) throw err;
        if(item)
            console.log(item);
    })
}
//prints all dbs
function listDatabases(db){
    db.admin().listDatabases((err,res)=>{
        if(err) throw err;
        for(const key in res.databases){
            console.log(res.databases[key].name);
        }
    })
}


// Connect to DB
MongoClient.connect("mongodb://localhost:27017/somecol",{useNewUrlParser:true}, (err,client)=>{
    if(!err){
        db = client.db('admin');
        console.log("Connected to database");
    }
})

// sends json object of workers collection as response
// excludes _id field
function getWorkers(res){
    db.collection('workers', (err,collection)=>{
        collection.find({},{fields:{_id:0}}).toArray((err,items)=>{
            console.log(items);
            res.jsonp(items);
        })
    })
}


app.use(express.static(path.join(__dirname,'..','public')));

// test page for webdev server proxy
app.get("/test",(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public','test.html'));
});

// api endpoint
app.get('/api/workers', (req,res)=>{
    getWorkers(res);
})

app.listen(port, () => console.log("Listening on port %s!",port));
