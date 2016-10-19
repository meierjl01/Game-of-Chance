// console.log('hi');
function PlayingCard (suit, value) {
  this.name = value + ' of ' + suit;
  this.suit = suit;
  this.value = value;
}

var card = new PlayingCard('spades' , 'ace');

console.log(card);


//Die will have to pick a number randomly for itself, only needs value. function will have to change it's value depending on what is rolled

function randomNumber() {
  var r = Math.random();
  return Math.ceil(r*6);
}

function Die (value, name) {
  this.name = name;
  this.value = value;
  this.roll = function() {
    randomNumber();
  };
}

var die1 = new Die(1, 'die');
var die2 = new Die(2, 'die2');

console.log(die);
