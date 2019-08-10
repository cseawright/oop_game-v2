class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    
    createPhrases(){
        const phrases = [
            new Phrase ("Two birds one stone"),
            new Phrase ("Armed to the teeth"),
            new Phrase ("Meek as a lamb"),
            new Phrase ("Burn the midnight oil"),
            new Phrase ("Play it close to the chest")
        ];
        return phrases;
    }
    
    getRandomPhrase(){
     var randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
        return randomPhrase;
    }
    
    startGame(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase(); 
        this.activePhrase.addPhraseToDisplay();
    }
    
    checkForWin(){
        
        let checkLetters = document.querySelectorAll('.letter');
        if(checkLetters.length === 0){
            return true;
        }else{
            return false;
        }
        
    }
    
    removeLife(){
        const hearts = document.querySelectorAll('img'); //Removes life from scoreboard if wrong letter is chosen
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false)
        }
        
    }
    
    gameOver (gameWon){
        document.getElementById('overlay').style.display = 'block';
        const startOverlay = document.getElementsByClassName('.start');
        const gameOverMessage = document.getElementById('game-over-message');
        
        if(gameWon){
            gameOverMessage.style.display = 'block';
            gameOverMessage.textContent = 'You Won!';
            startOverlay.className = 'win';
        }else{
            gameOverMessage.textContent = 'You Lose';
            startOverlay.className = 'lose';
        }
        
        const phraseSection = document.querySelector('#phrase ul');
        phraseSection.innerHTML = '';

        const heart = document.querySelectorAll('.tries img');
        
        const keys = document.querySelectorAll('.keyrow button');
        
        for (let i = 0; i < keys.length; i++){
            keys[i].className = 'key';
            keys[i].disabled = false;
        }
        
        
        for (let i = 0; i < heart.length; i++){
            if(heart[i].src.includes('images/lostHeart.png')){
                heart[i].setAttribute('src', 'images/liveHeart.png');
            }
            
        }
        
        this.missed = 0;
        
    }
    
    handleInteraction(button){
        button = event.target;
        let selectedLetter = button.textContent;
        let currentPhrase = this.activePhrase.phrase;
    
        button.disabled = true;
        if (currentPhrase.includes(selectedLetter) === false) {
          button.className = 'wrong';
          this.removeLife();
        } else if (currentPhrase.includes(selectedLetter)) {
          button.className = 'chosen';
          this.activePhrase.showMatchedLetter(selectedLetter);
          if (this.checkForWin()) {
            this.gameOver(true);
            }
        }
        
        }
    
        
}

//new Phrase ("Two birds one stone"),
//            new Phrase ("Armed to the teeth"),
//            new Phrase ("Meek as a lamb"),
//            new Phrase ("Burn the midnight oil"),
//            new Phrase ("Play it close to the chest")

//{phrase: "Two birds one stone"},
//            {phrase: "Armed to the teeth"},
//            {phrase: "Meek as a lamb"},
//            {phrase: "Burn the midnight oil"},
//            {phrase: "Play it close to the chest"}