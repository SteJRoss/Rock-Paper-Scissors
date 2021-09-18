//Sets up variables
let playerSelection;
let computerSelection;

// Randomly returns either 'Rock', 'Paper' or 'Scissors'
function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// A single round of RPS:
function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay();
    playerSelection = prompt("Enter");
    
        if (playerSelection == 'Rock'){
            if (computerSelection == 'Rock'){
                return('Draw')}
                else if (computerSelection == 'Paper'){
                    return('Sorry! You Lose! Paper beats Rock')
                }
                else if (computerSelection == 'Scissors'){
                    return('Well Done! You Win! Rock beats Scissors')
                }
            }
            else if (playerSelection == "Paper"){
                    if (computerSelection == 'Rock'){
                        return('Well Done! You Win! Paper beats Rock')}
                        else if (computerSelection == 'Paper'){
                            return('Draw')
                        }
                        else if (computerSelection == 'Scissors'){
                            return('Sorry! You Lose! Scissors beats Paper')
                        }
                }
    
            else if (playerSelection == "Scissors"){
                            if (computerSelection == 'Rock'){
                                return('Sorry! You Lose! Rock beats Scissors')}
                                else if (computerSelection == 'Paper'){
                                    return('Well Done! You Win! Scissors beats Paper')
                                }
                                else if (computerSelection == 'Scissors'){
                                    return('Draw')
                                }}
                            
            else {
    
                alert('Wrong Input')
                
                }
    }

// 5 rounds of RPS:
function game(){
    let gameCounter = 5;
    for (let i = 1; i <= gameCounter; i++){

        console.log(playRound(playerSelection, computerSelection));
        }
    }

// Plays 5 rounds of RPS:
console.log(game());