let mysql = require("mysql");

// ----------------------------------------

let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    databse : "ischooldb",
    password : ""
});

connection.connect(function(error){
    if(error){
        console.log("Error ", error)
    }else{
        // console.log("MySQL connected to ischooldb")

        // let sql = "CREATE TABLE participants (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(300))";

        // connection.query(sql, function(error, result){
        //     if(error){
        //         console.log("Error ", error)
        //     }else{console.log("Result ", result)}
        // })

        connection.query("CREATE DATABASE ischooldb", function(error, result){
            if(error){
                console.log("Error ", error)
            }else{console.log("Result ", result)}
        })
    }
});