//console.log("Up and running!");


const cards = [ 
  {
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
  },
  {
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
  },
  {
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
  },
  {
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
  }
]

let cardsInPlay = [];

function checkForMatch(){

    if (cardsInPlay.length === 2){
	    if (cardsInPlay[0] === cardsInPlay[1]){
	    	alert("You found a match!")
	    } else {
	    	alert("Sorry, not a match.")
        }
    }
}

function flipCard(){

    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);

    console.log(cardsInPlay);
    checkForMatch();


}


function createBoard(){
    for(i = 0; i < cards.length; i++){
    	 let cardElement = document.createElement('img');
    	 let gb = document.getElementById('game-board');
    	 cardElement.setAttribute('src', 'images/back.png');
    	 cardElement.setAttribute('data-id', i);
    	 cardElement.addEventListener('click', flipCard);
    	 gb.appendChild(cardElement);
    }

 
}




createBoard();

