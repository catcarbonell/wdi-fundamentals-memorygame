console.log("Up and running!");


const cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

const cardOne = cards[0];
const cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
} else {
	alert("Sorry, not a match. Try again!");
}