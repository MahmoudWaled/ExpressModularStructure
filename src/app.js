const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// View engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// Routes 
app.use('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

module.exports = app;
