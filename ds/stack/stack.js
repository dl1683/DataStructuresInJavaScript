function Node() {
	this.value;
	this.next ;
}

var Stack= function(){
	this.min;
	this.max;
	this.head;
}

Node.prototype.insert=function(value) {
	var current = this;
	if (current.value === undefined) { //has nothing yet
		current.value = value; //insert here
		return;
	}
	
	if(current.next === undefined) { //completely null
		current.next = new Node();//want new node
	}
	var c = current.next;
	c.insert(value);
}

Stack.prototype.push= function(value) {
	if(value==undefined || value==""){
		throw "Please input proper value (number)"
	}
	if(this.head==undefined){//nothing exists yet
		this.head=new Node();
		this.head.value=value;
	}else{//nonempty stack
		var c=this.head;
		c.next=this.head;
		c.value=value;
		this.head=c
	}	
}


Stack.prototype.top= function() {	
	if(this.head==undefined){//nothing exists yet
		throw "Trying to get top of null"
	}else{//nonempty stack
		return this.head.value;
	}	
}

Stack.prototype.pop= function() {
	
	if(this.head==undefined){//nothing exists yet
		throw "Trying to get top of null"
	}else{//nonempty stack
		var val=this.head.value;
		this.head=this.head.next;
		return val;
	}	
}
