var http = require('http');

var server = http.createServer(function(req, res) {
  if(req.url == '/kittens/') {
    res.end('Kittens! Yay!');
}
});

var port = 3040;
server.listen(port)
console.log('Lstening on port ' + port + "...")
