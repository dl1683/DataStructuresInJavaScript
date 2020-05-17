function Stack(max) {
	var counter = 0;
	var items = [];
	var max = max;
	var minValue = -1;
	var maxValue = -1;
	
	this.push = function(value) {
		counter ++;
		if(counter > max) {
		    throw "stack overflow"
		}
		
		if (minValue === -1 || value < minValue) {
			minValue = value;
		}

		if (minValue === -1 || value > maxValue) {
			maxValue = value;
		}

		items[counter] = value;
		return value;
	}

	this.pop = function() {
		if(counter < 0) {
			minValue = -1;
			maxValue = -1;
			throw "stack underflow"
		}
		var value = items[counter];
		delete items[counter];
		counter --;
		
		return value;
		
	}

	this.print = function() {
		for(var i=0; i < counter; i++) {
			console.log(items[i]);
		}
	}

	this.minValue = function() {
		return minValue
	}

	this.maxValue = function() {
		return maxValue;
	}

}

