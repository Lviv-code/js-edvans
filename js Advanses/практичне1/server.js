const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));

var a = '';
var arr = [
    {
        name: 'User'
    }, 
    {
        name: 'Admin'
    }];


app.post('/test', function (req,res) {
    a = req.body.testik;
    res.sendStatus(200);
})


app.get('/test', function (req, res) {
    var comparison = 0;
    for (let i = 0; i<arr.length; i++){
        if(arr[i].name == a) comparison = 1;
    }
    (comparison == 1)? res.send('<p>' + "Вітаємо" + '</p>'):  res.send('<p>' + "Вас немає в базі" + '</p>');
});


//Усі адреси контролюються клієнтським ангуляром
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start on port 8000!');
});
