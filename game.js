
funcion game() {
		var wordBank = ["Rudolph", "Frosty", "Santa", "Christmas", "Winter", "Turkey", "Prancer"];
		var randomWord = Math.floor(Math.random() * wordBank.length);
		return wordBank[randomWord];
};
