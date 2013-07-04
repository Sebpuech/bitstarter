var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
      index = fs.readFileSync('index.html');
    buffer = new Buffer('index.html','utf-8');
    response.send(buffer.toString("utf8",0,12));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

