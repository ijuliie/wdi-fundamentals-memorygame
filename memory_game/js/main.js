const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch(){
    if(cardsInPlay[0] === cardsInPlay[2]){
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again!");
    }
}

function flipCard(cardId){
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards);
}

flipCard(0);
flipCard(2);
checkForMatch();