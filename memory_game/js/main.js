const cards = ["queen", "queen", "king", "king"];
let = cardsInPlay = [];

const cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User picked " + cardOne);

const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User picked " + cardTwo);

if(cardsInPlay[0] === cardsInPlay[2]){
    alert("You found a match!");
} else {
    alert("Sorry, try again!");
}