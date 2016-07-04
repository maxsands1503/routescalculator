var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('calculating things');
});
// app.get('/add/:num/:numb', function(req, res){
//   var added = parseInt(req.params.num) + parseInt(req.params.numb);
//   res.send(`Total equals: ${added} `);
// });

// app.get('/sub/:num/:numb', function(req, res){
//   var subt = parseInt(req.params.num) - parseInt(req.params.numb);
//   res.send(`Total equals: ${subt} `);
// });

// app.get('/mult/:num/:numb', function(req, res){
//   var mul = parseInt(req.params.num) * parseInt(req.params.numb);
//   res.send(`Total equals: ${mul} `)
// });

// app.get('/div/:num/:numb', function(req, res){
//   var divi = parseInt(req.params.num)/parseInt(req.params.numb);
//   res.send(`Total equals: ${divi} `)
// });
app.get("/:operator/:num/:numb", function(req, res){
  if(req.params.operator === "add"){
    var added = Number(req.params.num) + Number(req.params.numb);
    res.send(`Total equals: ${added} `);
  }else if (req.params.operator === "sub") {
    var subt = Number(req.params.num) - Number(req.params.numb);
    res.send(`Total equals: ${subt} `);
  }else if (req.params.operator === "mult") {
    var mul = Number(req.params.num) * Number(req.params.numb);
    res.send(`Total equals: ${mul} `)
  }else if(req.params.operator === "div"){
    var divi = Number(req.params.num)/Number(req.params.numb);
    res.send(`Total equals: ${divi} `)
  }
})

app.listen(8080, function () {
  console.log('Things are happening');
});
