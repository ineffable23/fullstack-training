/*
append a quote to a text file and watch for the change every 5 seconds 
*/

var fs = require("fs");

fs.readFile("temp2.txt","utf-8",function(err, data){
    if(err){ console.log("Error ", err)}
    else{ console.log(data)};
});


fs.watchFile("temp2.txt",function(){
    console.log("file changed");
});

setTimeout(function(){
    fs.appendFileSync("temp2.txt","\nNode.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine)","utf-8");
},5000);