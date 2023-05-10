// main javascript file that holds all the files together

const express = require('express');
const app = express();

const nodeMailer = require('nodemailer');
app.use(express.json());

// const bodyParser = require('body-parser');

const config = require('./config');

const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

app.use(express.static('./views'));

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

app.post('/send-email', async(req, res) => {
    
    var user_info = {
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
        "message": req.body.email
    }

    
})

app.listen(5678);
console.log("Server is running...")