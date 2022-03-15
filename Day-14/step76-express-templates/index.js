const express = require("express");
const app = express();

// express configurations set / use
// express middleware use

// middlewares
// app.use(express.static(__dirname));
// app.use("/assets",express.static(__dirname+"/images"));

app.locals.pretty = true;

let heroes = ['Ironman', 'Antman', 'Black Widwo', 'Hulk', 'Thor'];

app.get("/", function(req,res){
    // res.send("hello from express !!!");
    // res.sendFile(__dirname+"/indexedDB.html");

    res.render("home.jade",{
        companyname : "iSchool Connect",
        registereduser : true,
        heroes : heroes
    });
})

app.post("/", function(req,res){
    res.send();
})


app.listen(5040, "localhost", function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("server is running")
    }
});

// npm i nodemon -g
//nodemon .
// npm i ejs pug jade