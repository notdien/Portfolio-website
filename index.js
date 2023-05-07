// main javascript file that holds all the files together

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// web server
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/portfolio', function(req, res) {
    res.render('portfolio');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.listen(5678);
console.log("Server is running...")