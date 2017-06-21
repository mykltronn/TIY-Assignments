const express = require('express');
const app = express();

app.get('/:op/:num1/:num2', function(req, res){
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  if(req.params.op == "add"){
    res.send(String(num1 + num2))
  }
  else if (req.params.op == "subtract") {
    res.send(String(num1 - num2))
  }

  else if (req.params.op == "divide") {
    res.send(String(num1 / num2))
  }

  else if (req.params.op == "multiply") {
    res.send(String(num1 * num2))
  }
  else if (req.params.op == "pow") {
    res.send(String(Math.pow(num1, num2)))
  }
});


app.listen(3000, function(){
  console.log("Successfully started express application!");
});
