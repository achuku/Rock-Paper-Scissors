
// Generate a random choice for the computer
    function getCompuerChoice() {
        const choices = ['rock','paper','scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        return computerChoice;

    }
    console.log(getCompuerChoice());    
        
        
   


   
