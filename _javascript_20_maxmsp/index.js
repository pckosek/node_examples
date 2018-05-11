#!/usr/bin/nodejs

// INITIALIZATION STUFF
var express = require('express');                     // import express
var app = express();                                  // create an app from express
var server =  require('http').createServer(app);      // import http and create a server
var io = require('socket.io').listen(server);         // attach socket.io to the server


// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
server.listen(process.env.PORT || 8080);              // listen for incoming connections

// -------------- variables  -------------- //
var button_count = 0;


// -------------- express getter -------------- //
app.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/index.html');
});

app.get('/max', function (req, res, next) {
    res.sendFile(__dirname+'/max.html');
});

app.get('/max_note', function (req, res, next) {
    res.sendFile(__dirname+'/max_note.html');
});

// -------------- socket initialization -------------- //
io.on('connection',function(socket){                  // called when a new socket connection is made

    console.log('new socket connection');
        
    socket.on('client_evt', function(obj){            // server side socket callbacks for events
        console.log('client message!');
        
        button_count++;                             // increment
        button_count %= 128;                        // keep in range
        
        io.emit('server_msg', button_count);        // server server-side emit to all clients
    })

})
