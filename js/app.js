


//console.log(phrase);
//const game = new Game();
//game.phrases.forEach((phrase, index) => {
//console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//});

//const logPhrase = (phrase) => {
//    console.log(`Phrase - phrase: `, phrase.phrase);
//};
//
//const game = new Game();
//const randomPhrase = game.getRandomPhrase();
//const phrase = new Phrase(randomPhrase.phrase);
//phrase.addPhraseToDisplay();

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);