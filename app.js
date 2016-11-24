var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/as', function(request, response) {
  response.send('d');
});
