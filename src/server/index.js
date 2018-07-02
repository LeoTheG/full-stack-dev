const express = require("express");
const os = require("os");
const app = express();
const path = require('path');

app.use(express.static('public'));
app.get("/test",(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public','test.html'));
});
app.listen(8081, () => console.log("Listening on port 8081!"));
