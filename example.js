var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.url == '/kittens/') {
        res.end("kittens yay");
    }
    if(req.url == '/turtles/') {
        res.end('I like turtles');
    }

});

var port = 3040;
server.listen(port)
console.log('Lstening on port ' + port + "...")
