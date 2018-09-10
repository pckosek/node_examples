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
var page1_hbs = generate_template('page1');

// -------------- socket initialization -------------- //

io.on('connection',function(socket){
    
    socket.on('req_new_body_str', function(){
        console.log('req_new_body_str');
        generate_document(socket);
    })

})


// -------------- socket functions -------------- //
function generate_document(socket) {
    var context = { title : 'My New Page' };
    var html_str = page1_hbs.run(context);
    console.log(html_str);

    io.sockets.in(socket.id).emit('set_new_body_content',html_str)
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