var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var createBoard = function() {
	var x = document.getElementById('gameboard');
	for (n = 0; n < cards.length; n++) {
		var card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('data-card',cards[n]);
		card.addEventListener('click',isTwoCards);
		x.appendChild(card);
	}
}
var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("Match!");
	}
	else {
		alert("Try again!");
	}
	var reset = document.getElementsByClassName('card');
	for (n = 0; n < reset.length; n++) {
		reset[n].innerHTML = ' ';
	}
}
var isTwoCards = function() {
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = '<img src="king.png", alt="King of Spades">';
	}
	else {
		this.innerHTML = '<img src="queen.png", alt="Queen of Spades">';
	}
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch();
	}
}
createBoard();