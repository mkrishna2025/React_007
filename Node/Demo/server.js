var SUB = require('./sub.js');
var Calc1 = require('./calculator1.js');
var { sub } = require('./calculator1.js');
var Calc2 = require('./calculator2.js');
var { mul } = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');

var http = require('http');
var fs = require('fs');

var addition = function(x, y) {
	return x + y;
}

console.log('Welcome to Demo');
console.log('Add of 5 & 10 is ' + addition(5, 10));
console.log('Sub of 5 & 10 is ' + SUB(5, 10));
console.log('Add of 5 & 10 is ' + Calc1.add(5, 10));
console.log('Sub of 5 & 10 is ' + sub(5, 10));
console.log('Add of 5 & 10 is ' + Calc2.add(5, 10));
console.log('Mul of 5 & 10 is ' + mul(5, 10));

var neha = new Person();
neha.setName('Neha Choudary');

console.log('Welcome to ' + neha.getName());

var obj = new Son();
console.log(obj.getName() + ', ' + obj.getGender() + ', ' + obj.getCity());

/*
http.createServer(function (req,res) {
	console.log('Server Executed')
	res.write('Welcome to HTTP Demo')
	res.end();
}).listen(3000);*/

http.createServer(function (req,res) {
	fs.readFile('pages/Test13.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3000);



