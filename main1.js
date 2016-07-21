// will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.


// require your modules
var Letter = require('./letter');
var Word = require('./word');
// var tWord = new Word('apple');
var Game = require('./game')

wordBank : ["Rudolph", "Frosty", "Santa", "Christmas", "Winter", "Turkey", "Prancer"],
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		this.currentWrd.checkLetter(); //populate currentWrd (made from Word constructor function) object with letters







// // tWord.testWord();
// // tWord.convertString();
// console.log('preguess');
// console.log(tWord.displayWord());
// tWord.checkLetter('p');
// console.log('postguess');

// console.log(tWord.displayWord());