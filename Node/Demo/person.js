var Person = function(){
	var name = '';
	this.getName = function() {
		return name;
	}
	this.setName = (value) => name = value;
}

module.exports = Person;