const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.urlencoded({extended : true}));

let rawdata = fs.readFileSync("./data/category.json");

let Category = JSON.parse(rawdata);

app.get("/",function(req,res){
    
    res.render("home.jade",{
        cat:Category.Categories,
        len:Category.Categories.length
       
    });
    
})

app.post("/",function(req,res){
    let myobj ={
        category:req.body.category,
        anstype:req.body.anstype
    }
    Category["Categories"].push(myobj);
    var json = JSON.stringify(Category,null,2);
    fs.writeFileSync("./data/category.json",json,"utf-8");
    res.redirect("/");
})

app.listen(8080,"localhost", function(error){
    if(error){
        console.log("Error",error);
    }
    else{
        console.log("server is now live on localhost:8080");
    }
});