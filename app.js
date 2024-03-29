const express = require('express');
const bodyParser = require('body-parser');


const feedRoutes = require('./routes/feed');

const app = express();

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message =error.message;
    const data = error.data;
    res.status(status).json({message: message});
});

const server = app.listen(8080);

