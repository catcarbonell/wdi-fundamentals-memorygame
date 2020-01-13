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
	cardImage : "images/king-of-hearts.png"
  }
]

let cardsInPlay = [];




function flipCard(){

    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    
    checkForMatch(cards[cardId], cards[cardId]);

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

function checkForMatch(){

	if ( cards[0].rank === cards[1].rank){
	console.log("You found a match!");
    } else {
	console.log("Sorry, not a match. Try again!");
    }
}


createBoard();

