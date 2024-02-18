
// Generate a random choice for the computer's player
    function getCompuerChoice() {
        const choices = ['rock','paper','scissors'];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        return computerSelection;

    }
    console.log(getCompuerChoice());    
        
 // Play a single round of Rock Paper Scissors
    function playRound(playerSelection, computerSelection){
       if (playerSelection === computerSelection){
        return 'It\'s a tie!'; 
       }else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
                 playerSelection === 'paper' && computerSelection === 'rock' ||
                 playerSelection === 'scissors' && computerSelection === 'paper'  ){
        return 'You Win!'
       }else{
        return 'You Lose.';
       }
          
       
    }       
   


   
