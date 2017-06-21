const express = require('express');
// ^^^ requires express to be present for pacakge to run
const app = express();
// ^^^ callback on the express() function

app.get('/', function(req, res) {
  res.send('OHAI WERLD');
});

//
// req = request
// res = response

app.listen(3000, function(){
  console.log("Successfully started express application!");
});
// tell express() to listen on port 3000
