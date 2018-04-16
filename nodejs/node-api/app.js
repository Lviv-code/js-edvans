const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./api/models/user');
const userRoutes = require('./api/routes/userRoutes');

const app = express();
mongoose.connect("mongodb://localhost:27017/nodeApi");

var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.on('open', function(){
    console.log("connected")
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    if(req.method==="OPTION") res.header("Access-Control-Allow-Metods", "PUT", "POST", "GET", "DELETE");

    next();
});

app.use("/user", userRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.use("/", (req, res)=>{
    res.status(200).json({
        "mssage": "Default respons on main routes"
    })
})



module.exports =app;
