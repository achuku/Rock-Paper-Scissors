
// Generate a random choice for the computer
    function getCompuerChoice() {
        const choices = ['Rock','Paper','Scissors'];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        return computerSelection;

    }        
    
    
    const body = document.querySelector('body');
    const btn1 = document.createElement('button');
    btn1.textContent = 'Rock';
    body.appendChild(btn1);
    const btn2 = document.createElement('button');
    btn2.textContent = 'Paper';
    body.appendChild(btn2);
    const btn3 = document.createElement('button');
    btn3.textContent = 'Scissors';
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
        playerSelection = 'Rock';
        console.log('Player selected:', playerSelection);
        div.textContent = `Player selected: ${playerSelection}`;
        playGame();    
        
    });
    btn2.addEventListener('click', () => {
        playerSelection = 'Paper';
        console.log('Player selected:', playerSelection); 
        div.textContent = `Player selected: ${playerSelection}`
        playGame();  
         
    });
    btn3.addEventListener('click', () => {
        playerSelection = 'Scissors';
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

            
            }else if (  playerSelection === 'Rock' && computerSelection === 'Scissors' ||
                        playerSelection === 'Paper' && computerSelection === 'Rock' ||
                        playerSelection === 'Scissors' && computerSelection === 'Paper'  ){
            return div3.textContent = 'Player Scores!'; 
        
            }else if (  playerSelection === 'Rock' && computerSelection === 'Paper' ||
                        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
                        playerSelection === 'Scissors' && computerSelection === 'Rock' ) {
            return div3.textContent = 'Computer Scores!'; 
            
            }

        }   
        
        console.log(playRound(playerSelection, computerSelection));
    }   

    
     
     
    
        
    
    
   


   
