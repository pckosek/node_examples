#!/usr/bin/nodejs

// INITIALIZATION STUFF
var express = require('express'),
http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
server.listen(process.env.PORT || 8080);


// -------------- express getter -------------- //

app.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/index.html');
});


// -------------- socket functions -------------- //

io.on('connection',function(socket){
    
    // log to the local server file
    console.log('a connection from user: ' + socket.id);

    socket.on('list_all_users', function(data){
        consolle.log( Object.keys(io.sockets.sockets) );
    })
    
    socket.on('client_msg', function(data) {
        console.log('NEW SOCKET INFO');
        console.log(data);
        console.log(data.data);
    })
    
    socket.on('join_secret_room', function(data){
        console.log('secret join request');
        socket.join('secret_room');
    })
    
    socket.on('get_secret_message', function(room_name){
        console.log('secret message request');
        io.sockets.in('secret_room').emit('password', '12345');
    })
    
})

