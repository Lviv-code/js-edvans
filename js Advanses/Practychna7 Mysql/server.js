// підключення бібліотеки
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 8000;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '123456',
    database: 'test003'
});



//клієнтська частина сайта знаходиться в папці public
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'}));



io.sockets.on('connection', function(socket){
    socket.on('kokos', function(data){
        connection.query('SELECT*FROM users WHERE login=?',data.login ,
           function(err, rows){
           socket.emit('sendkokos', rows);
    })
       
       })
        

});



app.get('*', function (req, res){
    res.sendFile(__dirname+ '/public/index.html');
});

server.listen(port, function (err){
          if (err) throw err;
console.log('Server start port 8000');
          });