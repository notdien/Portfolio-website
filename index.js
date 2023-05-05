// main javascript file that holds all the files together

const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('pages', __dirname + '/pages');