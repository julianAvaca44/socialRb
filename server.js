//server.js
var express = require('express');
var path = require('path');

const DEFAULT_PORT = 9000;
const HTML_INDEX = path.join(__dirname, 'public/index.html');
const DIST_DIR = path.join(__dirname,'dist');
const app = express();

console.log(`path-dist: ${DIST_DIR}`);
app.use('/dist',express.static(DIST_DIR));

app.get('/', function(req, res, next){
	res.sendFile(HTML_INDEX);
});

app.listen(DEFAULT_PORT, function(error){
	console.log(`SERVER ESCUCHANDO EN PUERTO ${DEFAULT_PORT}`);
	if(error){
		console.log(error);
	}
});