var WebSocketServer = require('websocket').server,
    http = require('http');

var clients = [];
exports.clients = clients;

// websocket server
var server = http.createServer(function(request, response) {
    // Not important for us. We're writing WebSocket server,
    // not HTTP server
});
server.listen(1337, function() {
    console.log((new Date()) + " Server is listening on port 1337");
});
var wsServer = new WebSocketServer({
    // WebSocket server is tied to a HTTP server. WebSocket
    // request is just an enhanced HTTP request. For more info
    // http://tools.ietf.org/html/rfc6455#page-6
    httpServer: server
});
wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin '
        + request.origin + '.');

    console.log(request.origin);
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');
    var index = clients.push(connection) - 1;

    // user sent some message
    connection.on('message', function(message) {
        for (var i=0; i < clients.length; i++) {
            clients[i].send(message.utf8Data);
        }
    });

    connection.on('close', function(connection) {
        clients.splice(index, 1);
    });
});
