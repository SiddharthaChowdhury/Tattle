var express = require('express');
var app = express();
var server = app.listen(1337);
var io = require('socket.io').listen('server');