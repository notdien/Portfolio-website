// main javascript file that holds all the files together

const express = require('express');
const app = express();

const nodeMailer = require('nodemailer');
app.use(express.json());

// const bodyParser = require('body-parser');

const config = require('./config');

const ejs = require('ejs');
const { email } = require('./config');
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
    };

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: config.email,
            pass: config.password,
        },
    });

    let info = await transporter.sendMail({
        from: user_info.email,
        to: 'dien7shoots@gmail.com',
        subject: user_info.name,
        text: user_info.message,
    });

    try {
        await transporter.sendMail(info);
        res.status(200).json({ message: 'Email sent successfully :)' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email :( '});
    }
});

app.listen(5678);
console.log("Server is running...")