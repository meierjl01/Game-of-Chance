// console.log('hi');
function PlayingCard(suit, value) {
    this.name = value + ' of ' + suit;
    this.suit = suit;
    this.value = value;
}
// var card = new PlayingCard('spades', 'ace');




//deck needs one of each card and shuffle and draw methods
function Deck() {
 'use strict';

 var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
 var cardValues = [2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 'Jack' , 'Queen' , 'King' , 'Ace'];
 this.allCards = [];

 for(var i = 0; i < suits.length; i++) {
   for(var v = 0; v < cardValues.length; v++) {
     this.allCards.push(new PlayingCard(suits[i], cardValues[v]));
   }
 }

 this.shuffle = function () {};
 this.draw = function () {};

 // define other factors of what a deck is

}

console.log(new Deck());



//Die will have to pick a number randomly for itself, only needs value. function will have to change it's value depending on what is rolled

function randomNumber() {
    var r = Math.random();
    return Math.ceil(r * 6);
}

function newValue() {
    //context of this needs to be from die
    return (this.value = randomNumber());
}

function Die(value, name) {
    this.name = name;
    this.value = value;
    this.roll = function() {
        return (this.value = newValue.call(Die));
    };
}
//die has to have a value that stays the same until the roll function is called
var die1 = new Die(1, 'die');
var die2 = new Die(2, 'die2');

// die2.roll();
//
// console.log(die2.value);

//make getProbabilities function
//create empty array

//map out values of each key (2-12) -- every time they show up, add one to that key
function getProbabilities(die1, die2) {
    //make a function inside that that is going to roll two dice 1000 times
    var i = 0;
    var rolls = [];
    do {
        var sum = die1.roll() + die2.roll();
        rolls.push(sum);
        i++;
    } while (i < 1000);

console.log(rolls);

var counter = [];

rolls.forEach(function(roll, i, arr) {
  if (!counter[roll-2]) {
    counter[roll-2] = 1;
  } else {
    counter[roll-2] = counter[roll-2] + 1;
  }
});
console.log(counter);
return counter;

}

var counter = getProbabilities(die1, die2);
