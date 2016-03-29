function Car (color) {
	this.color = color || "black";
}

Car.prototype.honk = function(){
	this.honking = true;
	
	setTimeout(function() {
		this.honking = false;
	}.bind(this),1000);
};

Car.prototype.run = function() {
	this.running = true;
}

greenCar = new Car("green");
blackCar = new Car ();




// function add (x) {
// 	if (arguments.length === 2) {
// 		return arguments[0] + arguments[1];

// 	}
// 	else {
// 		return function(y) {
// 			return x+y;
// 		};
// 	}
// }








// var addf = function applyf(binary) {
// 	return function (x) {
// 		return function (y) {
// 			return binary (x,y);
// 		};
// 	};
// }





// var add = function (firstNum) {
// 	return function (secondNum) {
// 		return firstNum+secondNum;
// 	};
// }