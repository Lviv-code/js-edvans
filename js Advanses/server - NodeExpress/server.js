// підключення бібліотеки
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8001;

//клієнтська частина сайта знаходиться в папці public
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));

app.get('*', function (req, res){
    res.sendFile(__dirname+ '/public/index.html');
});

app.listen(port, function (err){
          if (err) throw err;
console.log('Server start port 8001');
          });