const express = require("express");
const app = express();

const fs = require('fs');

// express configuration 
// express middleware use
app.use(express.urlencoded({
    extended: false
}));


app.locals.pretty = true;

var herolist = [];

// reading data from json file
fs.readFile('data/heros.json', 'utf-8', function (error, data) {
    if (error) {
        throw error
    }
    // console.log(data);
    let { heros } = JSON.parse(data);
    herolist = heros;
});

app.get('/', (req, res) => {
    res.render('home.pug', {
        companyName: 'iSchool Connect',
        registeredUser: true,
        herolist: herolist
    });
});

app.post('/', (req, res) => {
    // res.send('You made a post request.');
    let hero = req.body.nextHero;
    herolist.push(hero);

    // data format to be inserted in json file
    let data = {
        "heros": herolist
    };

    // writing to json file
    fs.writeFile('data/heros.json', JSON.stringify(data), 'utf-8', function (error) {
        if (error) throw error
        console.log('Data Added...')
    })
    // console.log(heros);
    res.redirect('/');
});

app.listen(5050, 'localhost', function (error) {
    if (error) {
        console.log('Error: ', error);
    } else {
        console.log('server is now running...');
    }
});