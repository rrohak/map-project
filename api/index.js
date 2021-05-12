const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const main_router = require('./routes/main_router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', main_router);

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
    console.log(`Express server started on port: ${port}`)
});
