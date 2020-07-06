var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require("firebase");
var admin = require("firebase-admin");


const config = {
    apiKey: " AIzaSyCLNGJivjmEU36a2-ikNl89tSiZwCqc3oQ",
    authDomain: "rubicamp-6d4b7.firebaseapp.com",
    databaseURL: "https://rubicamp-6d4b7.firebaseio.com",
    projectId: "rubicamp-6d4b7",
    storageBucket: "rubicamp-6d4b7.appspot.com",
    messagingSenderId: "1008636708451"
  };
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
