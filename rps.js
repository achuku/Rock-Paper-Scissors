
// Generate a random choice for the computer's player
    function getCompuerChoice() {
        const choices = ['rock','paper','scissors'];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        return computerSelection;

    }
       
    function playGame(){
        // Play a single round of Rock Paper Scissors    
        const playerSelection = prompt('Make your choice: rock, paper or scissors', '') ;
        const computerSelection = getCompuerChoice();
        console.log('You selected:', playerSelection);
        console.log('Computer selected:', computerSelection); 

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
        }
        }   
        
        console.log(playRound(playerSelection, computerSelection));
    }   
    
    //Play 5 round games and display winner
    /* for (let i = 1; i <= 5; i++) {
        playGame();
    } */
    const body = document.querySelector('body');
    const btn1 = document.createElement('button');
    btn1.textContent = 'rock';
    body.appendChild(btn1);
    const btn2 = document.createElement('button');
    btn2.textContent = 'paper';
    body.appendChild(btn2);
    const btn3 = document.createElement('button');
    btn3.textContent = 'scissors';
    body.appendChild(btn3);
    
        
    
    
   


   
