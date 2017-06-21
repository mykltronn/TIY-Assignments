const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.send('Hello there!');
});

app.get('/goodbye/:name', function (req, res) {
  res.send('PEace out, ' + req.params.name + ', l8rz!');
});

//       vv this is the request vv
app.get('/hello/:name', function (req, res){
  res.send('Hello there ' + req.params.name)
})

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
