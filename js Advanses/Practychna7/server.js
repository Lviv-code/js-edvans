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

var users = [
    
]

function test(a){
    if(users[0] == undefined) users.push(a);    
    else {
       for(let i =0; i< users.length; i++){
           
           if(Object.keys(user[i]).length<2){
               
               if(Object.keys(users[i])[0] != Object.keys(a)[0]){
                   
                   users[i][Object.keys(users[i])] = a[Object.keys(a)];
               }
               else{
                   users.push(a);
                   break;
               }
           }
       }
       users[0][Object.keys(users[i])] = a[Object.keys(a)];}
}





io.sockets.on('connection', function (socket) {

	 socket.on('sendLogin', function (data) {	
         test(data);
         socket.emit('userLogin', users);
	})
    socket.on('sendPassword', function (data) {			
         test(data);
         socket.emit('userPassword', users);
	})

});



//Усі адреси контролюються клієнтським ангуляром
app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});


server.listen(port, function (err) {
	if (err) throw err;
	console.log('Server start on port 8000!');
});
