var express = require('express');

var app = express();
var server = app.listen(3000);

console.log("Running...")

app.use(express.static('public'));