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

// -------------- variables -------------- //
var x = 0;
var game_rooms = {};
// -------------- socket initialization -------------- //

io.on('connection',function(socket){
    
    // log to the local server file
    console.log('a connection from user: ' + socket.id);
    x += 1;

    socket.on('list_all_users', function(data){
        console.log( Object.keys(io.sockets.sockets) );
    })
    
    socket.on('client_msg', function(data) {
        console.log('NEW SOCKET INFO');
        console.log(data);
        console.log(data.data);
    })
    
    socket.on('join_secret_room', function(data){
        join_room(socket,data)
    });
    
    socket.on('list_all_rooms', function(){
        list_all_rooms(socket);
    })
    
})


// -------------- socket functions -------------- //
function join_room(socket, room_name) {
    console.log(game_rooms);

    if (game_rooms.hasOwnProperty(room_name)) {
        game_rooms[room_name].push(socket.id);
    } else {
        game_rooms[room_name] = [socket.id];
    }    

    console.log(game_rooms);
    socket.join(room_name);
}

function list_all_rooms(socket) {
    socket.emit('all_rooms', game_rooms);
}
