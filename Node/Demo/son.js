class Father {
	getName(){
		return "Venkat";
	}
	getGender(){
		return "M";
	}
}

class Son extends Father {
	getName(){
		return "Pratul";
	}
	getCity(){
		return "HYD";
	}
}

module.exports = Son;