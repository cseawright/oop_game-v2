class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    
    createPhrases(){
        const phrases = [
            {phrase: "Two birds one stone"},
            {phrase: "Armed to the teeth"},
            {phrase: "Meek as a lamb"},
            {phrase: "Burn the midnight oil"},
            {phrase: "Play it close to the chest"}
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
}