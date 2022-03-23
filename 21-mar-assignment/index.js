const express = require('express');
const mongoose = require('mongoose');
const app = express();

// middleware
// ------------------------------------------
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({
    extended: false
}));

// application configuration
// --------------------------------------
let errorHandler = function(error){ console.log("Error is ", error)};

// DB configuration
// ---------------------------
const url = 'mongodb+srv://Ineffable:Zxcvb99@mycluster.f2jpd.mongodb.net/onlinedb?retryWrites=true&w=majority';
// ORM - Object Relational Database
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Question = mongoose.model("Question", new Schema({
    id: ObjectId,
    qCategory : String,
    question : String,
    questionCode : String,
    aCategory : String,
    answer1 : String,
    answer2 : String,
    answer3 : String,
    answer4 : String,
    answer1_Point : String,
    answer2_Point : String,
    answer3_Point : String,
    answer4_Point : String
}));

let User = mongoose.model("User", new Schema({
    id: ObjectId,
    username : String,
    score : Number
}))

mongoose
.connect(url)
.then((res)=> console.log("DB connected"))
.catch(error => errorHandler(error));

// Routes
// ------------------------------------------
// Route: /
// ---------------------
app.get("/",function(req, res){
    Question.find()
        .then(dbres => {
            res.render("index.pug", {
                questions: dbres
            });
        })
        .catch(error => {
            console.log("Error: ", error);
        })
        .finally(() => {
            console.log("Promise Completed.");
        });
});


app.post("/",function(req,res){
    let {
        uname: username,
        ...scores       //spread operator
    } = req.body;
    let totalScore = 0;
    for (let score in scores) {
        totalScore += Number.parseInt(scores[score]);
    }

    let user = new User({
        username: username,
        score: totalScore
    });

    user
        .save()
        .then(function(dbRes){
                res.json({'message' : 'user added'})
        })
        .catch(function(error){
            errorhandler(error);
        })
});


// Route: /dashboard
// ---------------------
app.get("/dashboard",function(req, res){
    res.sendFile(__dirname+"/public/dashboard.html");
});


app.post("/dashboard",function(req, res){
    let obj = {
        qCategory: req.body.qCategory,
        question: req.body.question,
        aCategory: req.body.aCategory,
        answer1: req.body['answer-1'],
        answer1_Point: req.body['point-1'],
        answer2: req.body['answer-2'],
        answer2_Point: req.body['point-2'],
        questionCode: req.body.questionCode,
    }

    if (obj.aCategory == 4) {
        obj.answer3 = req.body['answer-3'];
        obj.answer3_Point = req.body['point-3'],
            obj.answer4 = req.body['answer-4'],
            obj.answer4_Point = req.body['point-4']
    }

    let question = new Question(obj);

    question
        .save()
        .then(function(dbRes){
            res.redirect('/dashboard');
        })
        .catch(function(error){
            errorhandler(error);
        })
});

// Route: /result
// ---------------------
app.get("/result",function(req, res){
    User
        .find()
        .then(function(dbres){
            res.render("result.pug", {
                results: dbres
            });
        })
        .catch(function(error){
            errorhandler(error);
        })
        .finally(() => {
            console.log("Promise Completed");
        });
});

app.listen(9090, () => console.log("Server is live on localhost:9090"));