
// Generate a random choice for the computer's player
    function getCompuerChoice() {
        const choices = ['rock','paper','scissors'];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        return computerSelection;

    }
       
        
 // Play a single round of Rock Paper Scissors
    
    const playerSelection = prompt('Make your choice: rock, paper or scissors', '') ;
    const computerSelection = getCompuerChoice();
    console.log(computerSelection); 

    function playRound(playerSelection, computerSelection){
       if ( playerSelection === computerSelection ){
        return 'It\'s a tie!'; 
        }else if (  playerSelection === 'rock' && computerSelection === 'scissors' ||
                    playerSelection === 'paper' && computerSelection === 'rock' ||
                    playerSelection === 'scissors' && computerSelection === 'paper'  ){
        return 'You Win!';
       }else if (   playerSelection === 'rock' && computerSelection === 'paper' ||
                    playerSelection === 'paper' && computerSelection === 'scissors' ||
                    playerSelection === 'scissors' && computerSelection === 'rock' ) {
        return 'Computer Wins!';
       }else {
        return 'You Lose!';
       }
    }   
    
    
    console.log(playRound(playerSelection, computerSelection));
    
    
   


   
