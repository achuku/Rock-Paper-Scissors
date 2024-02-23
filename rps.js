
// Generate a random choice for the computer
    function getCompuerChoice() {
        const choices = ['rock','paper','scissors'];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        return computerSelection;

    }        
    
    
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

    const div = document.createElement('div');
    body.appendChild(div);
    const div2 = document.createElement('div');
    body.appendChild(div2);
    const div3 = document.createElement('div');
    body.appendChild(div3);
    const div4 = document.createElement('div');
    body.appendChild(div4);
    const div5 = document.createElement('div');
    body.appendChild(div5);

    
    //Player's Choice
    btn1.addEventListener('click', () => {
        playerSelection = 'rock';
        console.log('Player selected:', playerSelection);
        div.textContent = `Player selected: ${playerSelection}`;
        playGame();    
        
    });
    btn2.addEventListener('click', () => {
        playerSelection = 'paper';
        console.log('Player selected:', playerSelection); 
        div.textContent = `Player selected: ${playerSelection}`
        playGame();  
         
    });
    btn3.addEventListener('click', () => {
        playerSelection = 'scissors';
        console.log('Player selected:', playerSelection);
        div.textContent = `Player selected: ${playerSelection}`
        playGame();    
        
    });

    
    
    function playGame(){
        const computerSelection = getCompuerChoice();
        console.log('Computer selected:', computerSelection); 
        div2.textContent = `Computer selected: ${computerSelection}`;

        function playRound(playerSelection, computerSelection){
            
        if ( playerSelection === computerSelection ){
            
            return div3.textContent = 'It\'s a tie!'; 

            
            }else if (  playerSelection === 'rock' && computerSelection === 'scissors' ||
                        playerSelection === 'paper' && computerSelection === 'rock' ||
                        playerSelection === 'scissors' && computerSelection === 'paper'  ){
            return div3.textContent = 'Player Scores!'; 
        
            }else if (  playerSelection === 'rock' && computerSelection === 'paper' ||
                        playerSelection === 'paper' && computerSelection === 'scissors' ||
                        playerSelection === 'scissors' && computerSelection === 'rock' ) {
            return div3.textContent = 'Computer Scores!'; 
            
        }

        }   
        
        console.log(playRound(playerSelection, computerSelection));
    }   

    
     
     
    
        
    
    
   


   
