const express = require("express");
const mongoose = require("mongoose");
let app = express();

// schema
let Schema = mongoose.Schema;

// objectid
let ObjectId = Schema.ObjectId;

// model
let Hero = mongoose.model("Hero", Schema({
    id : ObjectId,
    list : Array
}) );

mongoose.connect("mongodb+srv://Ineffable:Zxcvb99@mycluster.f2jpd.mongodb.net/onlinedb?retryWrites=true&w=majority");
//for security purpose load this into a configuration file and load that file here.

app.get("/",function(req, res){
    let herolist = [];
    Hero.find().then((dbres)=>{
        herolist = dbres[0].list;
        // console.log(dbres[0].list);
        res.render("home.pug",{
            templist : herolist
        })
    }).catch((error)=>{
        console.log("Error ", error);
    }).finally(()=>{
        console.log("promise completed")
    });
    
})

app.listen(5050);
console.log("server is now running on localhost:5050");