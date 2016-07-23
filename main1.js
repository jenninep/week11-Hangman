// will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.


// require your modules

var prompt = require('prompt')
// var Letter = require('./letter1');
var Word = require('./word1');
// var tWord = new Word('apple');
var Game = require('./game')



prompt.start();

game = {
	wordBank: ["Rudolph", "Frosty", "Santa", "Christmas", "Winter", "Turkey", "Prancer"],
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		this.currentWrd.convertString(); //populate currentWrd (made from Word constructor function) object with letters

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;


		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
		    console.log('  The letter or space you guessed is: ' + result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var isLetterThere = self.currentWrd.checkLetter(result.guessLetter);

		    //if the user guessed incorrectly minus the number of guesses they have left
		    if (!isLetterThere === false){
		    	console.log('You guessed wrong!');
		    	self.guessesRemaining -=1;
		    }else{
		    	console.log('You guessed right!');

		    	//check if you win only when you are right
	    		if(self.currentWrd.charArray() === true){
			    	console.log('You Won!!!');
			    	return 1; //end game
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.displayWord());
		    console.log('here are the letters you guessed already: ');

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found === false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining === 0){
		    	console.log('Game over bro it was ', self.currentWrd.word);
		    	console.log('Get with the program man');
		    }else{
		    	console.log(self.currentWrd.displayWord());
		    }
		});
	}


};

game.startGame();