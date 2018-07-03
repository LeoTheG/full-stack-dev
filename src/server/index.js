const express = require("express");
const os = require("os");
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

let data = fs.readFileSync(path.join(__dirname,'..','..','test_file.json'),'utf8');
let dict = JSON.parse(data);

// adds a new collection to given database
function addNewCollection(db,colName,callback,params){
    db.createCollection(colName,(err,res)=>{
        if(err) throw err;
        if(callback)
            callback(params);
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
function listDocuments(db,col){
    const cursor = db.collection(col).find();

    cursor.each((err,item)=>{
        if(err) throw err;
        if(item)
            console.log(item);
    })
}
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
        let db = client.db('admin');
        console.log("Connected to database");
        //db.createCollection('workers');
        //db.collection('workers').insert({name:'Bob Smith'});
        //db.collection('workers').remove({name:'Bob'});
        listDocuments(db,'workers');
        /*
        ((callback,db,col)=>{
            callback(db,col);
        })(printAllDocuments,db,'customers');
        */
    }
})

const port = 8081

app.use(express.static(path.join(__dirname,'..','public')));
app.get("/test",(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public','test.html'));
});
app.listen(port, () => console.log("Listening on port %s!",port));
