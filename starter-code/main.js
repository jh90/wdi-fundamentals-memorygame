console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";
/*if (cardOne === cardThree) {
	alert("You found a match!");
}
else {
	alert("Try again!");
}*/
var createBoard = function() {
	var x = document.getElementById('gameboard');
	for (n = 0; n < 4; n++) {
		var card = document.createElement('div');
		card.className = 'card';
		x.appendChild(card);
	}
}