


//console.log(phrase);
//const game = new Game();
//game.phrases.forEach((phrase, index) => {
//console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//});

//const logPhrase = (phrase) => {
//    console.log(`Phrase - phrase: `, phrase.phrase);
//};
//

//const randomPhrase = game.getRandomPhrase();
//const phrase = new Phrase(randomPhrase.phrase);
//phrase.addPhraseToDisplay();

const game = new Game();
//
//const gameRandom = game.getRandomPhrase();
//console.log(gameRandom);
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);



const startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", function(){
    game.startGame();
    //game.resetGame();
});

let button = document.getElementById('qwerty')

button.addEventListener("click", function(e){
    if (e.target.tagName === 'BUTTON'){
        game.handleInteraction()
    }
})

