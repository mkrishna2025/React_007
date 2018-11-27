
var print = (value) => console.log('Result is ' + value);

module.exports.add = (x, y) => {
	var z = x + y;
	print(z);
	return z;
}

module.exports.sub = (x, y) => {
	return x - y;
}

module.exports.mul = (x, y) => {
	return x * y;
}