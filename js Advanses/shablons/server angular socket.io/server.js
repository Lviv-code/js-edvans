// підключення бібліотеки
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 8000;

//клієнтська частина сайта знаходиться в папці public
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'}));

var arr=[];


io.sockets.on('connection', function(socket){
	socket.on('sendMessage', function(data){
		arr.push(data);
		socket.emit('getMessage', arr);
	});
});



app.get('*', function (req, res){
    res.sendFile(__dirname+ '/public/index.html');
});

server.listen(port, function (err){
          if (err) throw err;
console.log('Server start port 8000');
          });