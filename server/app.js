var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var session = require('express-session');
var MongoStore = require('connect-mongo');

dotenv.config();

var database = require('./database');
var components = require('./components');

var app = express();

app.use(session({
  key: 'user',
  secret: 'secret',
  saveUninitialized: false,
  resave: true,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URL,
    touchAfter: 24 * 3600
  }),
  cookie: {
    maxAge: 24000 * 60 * 60
  }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(components);

module.exports = app;
