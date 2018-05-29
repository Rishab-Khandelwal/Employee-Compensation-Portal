const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const http = require('http');
//nodeconst cors = require('cors');


 var connectionString = '';
 if(process.env.MLAB_USERNAME) {
   var username = process.env.MLAB_USERNAME;
   var password = process.env.MLAB_PASSWORD;
   connectionString = 'mongodb://' + username + ':' + password;
   console.log(connectionString);
   connectionString += '@ds237700.mlab.com:37700/heroku_0k5mjsrg';
 }


var mongoose = require("mongoose");
mongoose.connect(connectionString, { socketTimeoutMS: 30000, keepAlive: true, reconnectTries: 3000});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

const api = require('./server/routes/api');

app.use('/api', api);

const port = '9000';
app.set('port', port);

const server = http.createServer(app);

var serverSide = require('./server/app');
serverSide(app);

//app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(__dirname + '/dist/Payroll-app' ));

//app.use('/', function (req, res) {
//  res.sendFile(path.join(__dirname,  'dist/index.html'));
//})

app.get('*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/Payroll-app/index.html'));
});


var PPORT = process.env.PORT || port;
//var PPORT = process.env.PORT || 8080;
server.listen(PPORT, ()=> console.log(`API running on localhost:${port}`));
//app.listen(port, ()=> console.log(`API running on localhost:${port}`));
