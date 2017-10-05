#!/usr/bin/nodejs

var express = require('express'),
http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 8080);

io.on('connection',function(socket){
    console.log("a connection!");
    socket.on("testMessage", function(data){
        console.log(data);
        socket.emit('foo', {data: 1} );
    })
})

// GET, POST

app.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/index.html');
});