//server.js
var express = require('express');
var path = require('path');

const port = 9000;
const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function(error){
	console.log(`SERVER ESCUCHANDO EN PUERTO ${port}`);
	if(error){
		console.log(error);
	}
});