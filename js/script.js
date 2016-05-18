" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 10; i++) {
		output += i + "<br/>";
	}
	display.innerHTML = output;
}

function oddNumbers() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 20; i++) {
		if(i % 2 != 0) {
			output += i + "<br/>";
		}
	}
	display.innerHTML = output;
}

function squares() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 100; i++) {
		var square = parseInt(Math.sqrt(i));
		if((square*square) == i) {
			output += i + "<br/>";
		}
	}
	display.innerHTML = output;
}

function random() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 4; i++) {
		var rando = Math.random() * (100 - 1) + 1;
		output += rando + "<br/>";
	}
	display.innerHTML = output;
}

function even() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i < 20; i++) {
		if(i % 2 == 0) {
			output += i + "<br/>";
		}
	}
	display.innerHTML = output;
}

function powers() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 8; i++) {
		output += Math.pow(2, i) + "<br/>";
	}
	display.innerHTML = output;
}

function areWeThereYet() {
	var play = true;
	while (play) {
		display.innerHTML = "Arewethereyet?";
		var answer = prompt("What's your answer?");
		display.innerHTML = answer;
		if(answer == "yes") {
		display.innerHTML = "Good!";
		play = false;
		}
	}
}

function pyramids() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 5; i++) {
		output += "<br/>";
		for(var j = 0; j < i; j ++) {
			output += "*";
		}
	}
	display.innerHTML = output;
}

function tableSquare() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 5; i++) {
		output += "| " + (1 * i) + " | " + (2 * i) + " | " + (3 * i) + " | " + (4 * i) + " |<br/>";
	}
	display.innerHTML = output;
}

function tableSquares() {
	var output = "*** Output ***<br/>";
	for(var i = 1; i <= 6; i++) {
		for (var j = 1; j <= 6; j++) {
            output += "| " + (i * j) + " ";
        }
        output += "|<br/>";
	}
	display.innerHTML = output;
}

























