// define the stack
var stack = new Stack();

function addCol(value) {
	var t = document.getElementById("row");
	var tr = document.createElement("tr");
	tr.setAttribute("id", value);
	var td = document.createElement("td");
	td.setAttribute("class", "highlight custom")
	td.innerHTML = value;
	tr.appendChild(td);
	$("#row").prepend(tr);

}

var defaultValueCounter = 0;
function push() {
	stack=new Stack();
	var value = document.getElementById("add").value;
	if (value === "") {
		defaultValueCounter++;
		value = defaultValueCounter;
	}
	console.log(stack+", "+value)
	stack.push(value);
	addCol(value);

	document.getElementById("add").value = "";
}

function pop() {
	stack=new Stack();
	setTimeout(function() {
		try {
			var value = stack.pop();
			removeCol(value);
		} catch (e) {
			showMessage("#status", "Stack Underflow", "red")
		}
	}, 200)
}

function top() {
	stack=new Stack();
	setTimeout(function() {
		try {
			var value = stack.top();
		} catch (e) {
			showMessage("#status", "No top", "red")
		}
	}, 200)
}



function highlightCol(value, css) {
	$("#" + value).animate({
		top : "20px"
	});
	$("#" + value).find('td').addClass(css);
}

function removeCol(value) {
	$("#" + value).animate({
		top : "20px"
	});
	$("#" + value).find('td').addClass("focus");
	setTimeout(function() {
		$("#" + value).fadeOut(500).delay(1000).remove();
		showMessage("#status", "Finished", "green")
	}, 500);

}

function showMessage(id, html, color) {
	$(id).html(html);
	$(id).css("color", color);
}