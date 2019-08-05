class Phrase {
    constructor (phrase){
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay(){
        const ulPhrase = document.getElementById('phrase').firstElementChild;
        
        let letters = this.phrase.split('');
        
        for (let i = 0; i < letters.length; i++){
            let li = document.createElement('li');
            li.textContent = letters[i];
            
            ulPhrase.appendChild(li);
            
            if (li.textContent === " "){
                li.className = 'space';
            } else{
                li.className = `hide letter ${letters[i]}`;
            }
        }
        
    }
    
    checkLetter(letter){
        if (this.phrase.includes(letter)){
            return true;
        }else{
            return false;
        }
    }
    
    showMatchedLetter(letter){
        if(this.checkLetter){
            let letterElements = document.querySelectorAll(`.${letter}`);
            for (let i = 0; i < letterElements.length; i++){
                letterElements[i].className = 'show';
            }
        }
        
    }
    
    
}

