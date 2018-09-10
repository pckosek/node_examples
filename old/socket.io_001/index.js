#!/usr/bin/nodejs

// INITIALIZATION STUFF
var express = require('express'),
http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
server.listen(process.env.PORT || 8080);

// WHAT TO DO WHEN A CONNECTION IS ESTABLISHED
io.on('connection',function(socket){
    
    // here, I log to the server
    console.log("a connection!");

    // I write a callback as to what to do when a message named testMessage arrives 
    socket.on("testMessage", function(data){
        socket.emit('foo', {data: data+1} );
        console.log('testMessage with data:' + data);
    })
})


// EXPRESS GETTER FOR PAGES
app.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/index.html');
});