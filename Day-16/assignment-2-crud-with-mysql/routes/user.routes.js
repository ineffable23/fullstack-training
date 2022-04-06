const express = require("express");
const User = require("mysql");
const config = require("../config.json");
const errorHandler = require("../helpers/errorhandler.helper");

let connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
  });

let routes = express.Router();
// CRUD Routes
//----------------------------------------
routes.get("/data",function(req, res){
    console.log("Get request for data recieved");
    let sql = "SELECT * FROM students";
    connection.query(sql, (err, users) => {
      if (err) {
        errorHandler(err);
      } else {
        res.json({
          users,
        });
      }
    });
});

routes.post("/add", function(req, res){
    // console.log("add user post request recieved", req.body);
  console.log(req.body);
  connection.query(
        `INSERT INTO students (username,usercity,useremail) VALUES ('${req.body.username}','${req.body.usercity}','${req.body.useremail}')`,
        (err, data) => {
          if (err) {
            errorHandler(err);
          } else {
            console.log("value is added");
          }
        }
    );
})

routes.delete("/delete/:id",function(req, res){
    // console.log("delete request recieved for user with id "+req.params.id);
    connection.query(
        `DELETE FROM students WHERE id=${req.params.id}`,
        (err, deletedUser) => {
          if (err) {
            console.log("Error is delete: ", err);
          } else {
            console.log("User got deleted.");
          }
        }
      );
});

routes.get("/edit/:id",function(req, res){
    connection.query(
        `SELECT * FROM students WHERE id=${req.params.id}`,
        (err, EditUser) => {
          if (err) {
            console.log("Error in edit get: ", err);
          } else {
            console.log(EditUser);
            res.json(EditUser[0]);
          }
        }
      );
});

routes.post("/edit/:id",function(req, res){
    connection.query(
        `SELECT * FROM students WHERE id=${req.params.id}`,
        (err, updateUser) => {
          if (err) {
            console.log("Error in edit post: ", err);
          } else {
            updateUser[0].username = req.body.username;
            updateUser[0].useremail = req.body.useremail;
            updateUser[0].usercity = req.body.usercity;
    
            connection.query(
              `UPDATE students SET username='${updateUser[0].username}', usercity='${updateUser[0].usercity}' ,useremail='${updateUser[0].useremail}' WHERE id=${req.params.id}`,
              (err, data) => {
                if (err) {
                  errorHandler(err);
                } else {
                  console.log("user Updates");
                }
              }
            );
          }
        }
    );
});

module.exports = routes;