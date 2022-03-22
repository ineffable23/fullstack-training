const express = require("express");
const mongoose = require("mongoose");
const config = require("./config.json");
const routes = require("./routes/user.routes");
const errorHandler = require("./helpers/errorhandler.helper");

const app = express();
// middleware
//----------------------------------------
app.use(express.static(__dirname+"/public"))
.use(express.json())
.use(routes);
// DB configuration
//----------------------------------------
const url = config.cloudDB;
mongoose
.connect(url)
.then((res)=>console.log("DB Connected"))
.catch(error => errorHandler(error));

app.listen(config.port,config.host,function(error){
    if(error){errorHandler(error)}
    else{ console.log(`Server is now live on ${config.host}:${config.port}`) }
});