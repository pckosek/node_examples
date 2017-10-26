#!/usr/bin/nodejs

// INITIALIZATION STUFF
var express = require('express'),
http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var fs = require('fs');
var hbs = require('hbs');
hbs.Handlebars = require('handlebars');

// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
server.listen(process.env.PORT || 8080);


// -------------- express getter -------------- //

app.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/index.html');
});

// -------------- variables -------------- //
var page_1 = generate_template('page1');

// -------------- socket initialization -------------- //

io.on('connection',function(socket){
    
    socket.on('get_body', function(){
        console.log('get body');
        generate_document(socket);
    })

})


// -------------- socket functions -------------- //
function generate_document(socket) {
    var context = { title : 'My New Page' };
    var p1 = page_1.run(context);
    console.log(p1);
    io.sockets.in(socket.id).emit('set_content',p1)
}


// -------------- fs|hbs functions -------------- //
function generate_template(f_name) {
	template = {};
	template['run'] = hbs.Handlebars.compile(
			read_file_sync(f_name)
		);
	return template;
}

function read_file_sync(f_name) {
	return fs.readFileSync(__dirname + '/views/'+f_name+'.hbs').toString();
}