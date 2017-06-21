const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data.js');

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');



//Listening on root
app.get('/todo/', function (req, res) {
  // res.send("Hi you've made it, you're so great!");
  res.render('todo', {cats: data.listItems});
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
