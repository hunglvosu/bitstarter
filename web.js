var express = require('express');
var app = express();
var fs = require('fs')
app.use(express.logger());

app.get('/', function(request, response) {
 var buff = fs.readFileSync('index.html')
 response.send(buff.toString('utf-8', 0, buff.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
