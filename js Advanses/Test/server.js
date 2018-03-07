const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));


var arr = [{
    name: 'admin',
    password: '1234'
}];
var arrChat = [];

io.sockets.on('connection', function (socket) {
    // chat
    socket.on('sendMessage', function (data) {
        arrChat.push(data);
        socket.emit('getMessage', arrChat);
    });

    //SignIn
    socket.on('signIn', function (data) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name == data.name) {
                if (arr[i].password == data.password) {
                    socket.emit('enter', "Welcome " + arr[i].name);
                    socket.emit('addUser', arr[i].name);
                    socket.emit('validUser', true);
                    break;
                } else {
                    socket.emit('enter', "Wrong password ");
                    break;
                }
            } else if (i == arr.length - 1) {
                socket.emit('enter', "Wrong login ");
                break;

            }
        }

    });

});


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start port 8000');
});
