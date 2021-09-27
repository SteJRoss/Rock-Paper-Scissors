//Sets up variables
let playerSelection;
let computerSelection;

let userScore = 0;
let compScore = 0;


//Buttons
const start = document.querySelector('#start_btn');
const rock = document.querySelector('#rock_btn');
const paper = document.querySelector('#paper_btn');
const scissors = document.querySelector('#scissors_btn');


//DOM Manipulation
const output = document.querySelector('.output');
const userScoreOutput = document.createElement('p');
const compScoreOutput = document.createElement('p');
const resultOutput = document.createElement('p');


//Event Listeners
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);


//Functions

// Randomly returns either 'Rock', 'Paper' or 'Scissors'
function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

//Deletes Output and Creates New Game
const deleteData = () => {
    userScore = 0;
    compScore = 0;
    output.removeChild(userScoreOutput);
    output.removeChild(compScoreOutput);
    output.removeChild(resultOutput);    
}

start.addEventListener('click', deleteData);


function playRound(playerSelection, computerSelection){
   
    computerSelection = computerPlay();
    playerSelection = this.id;
    
        if (playerSelection == 'rock_btn'){
            
            if (computerSelection == 'Rock'){
                userScoreOutput.textContent = "Your Score: " + userScore;
                compScoreOutput.textContent = "Computer Score: " + compScore;
                resultOutput.textContent = 'Draw';
                
                output.appendChild(userScoreOutput);
                output.appendChild(compScoreOutput);
                output.appendChild(resultOutput);
                
            }
                else if (computerSelection == 'Paper'){
                    compScore = compScore + 1;
                    userScoreOutput.textContent = "Your Score: " + userScore;
                    compScoreOutput.textContent = "Computer Score: " + compScore;
                    resultOutput.textContent = 'Sorry! You Lose! Paper beats Rock!';
                    output.appendChild(userScoreOutput);
                    output.appendChild(compScoreOutput);
                    output.appendChild(resultOutput);
                }

                else if (computerSelection == 'Scissors'){
                    userScore = userScore + 1;
                    userScoreOutput.textContent = "Your Score: " + userScore;
                    compScoreOutput.textContent = "Computer Score: " + compScore;
                    resultOutput.textContent = 'Well Done! You Win! Rock beats Scissors';
                    output.appendChild(userScoreOutput);
                    output.appendChild(compScoreOutput);
                    output.appendChild(resultOutput);
                }
        }



            else if (playerSelection == "paper_btn"){
                    if (computerSelection == 'Rock'){
                        userScore = userScore + 1;
                        userScoreOutput.textContent = "Your Score: " + userScore;
                        compScoreOutput.textContent = "Computer Score: " + compScore;
                        resultOutput.textContent = 'Well Done! You Win! Paper beats Rock';
                        output.appendChild(userScoreOutput);
                        output.appendChild(compScoreOutput);
                        output.appendChild(resultOutput);
                    }
                        else if (computerSelection == 'Paper'){
                            userScoreOutput.textContent = "Your Score: " + userScore;
                            compScoreOutput.textContent = "Computer Score: " + compScore;
                            resultOutput.textContent = 'Draw';
                            output.appendChild(userScoreOutput);
                            output.appendChild(compScoreOutput);
                            output.appendChild(resultOutput);
                        }
                        else if (computerSelection == 'Scissors'){
                            compScore = compScore + 1;
                            userScoreOutput.textContent = "Your Score: " + userScore;
                            compScoreOutput.textContent = "Computer Score: " + compScore;
                            resultOutput.textContent = 'Sorry! You Lose! Scissors beats Paper';
                            output.appendChild(userScoreOutput);
                            output.appendChild(compScoreOutput);
                            output.appendChild(resultOutput);
                        }
                }
    
            else {
                            if (computerSelection == 'Rock'){
                                compScore = compScore + 1;
                                userScoreOutput.textContent = "Your Score: " + userScore;
                                compScoreOutput.textContent = "Computer Score: " + compScore;
                                resultOutput.textContent = 'Sorry! You Lose! Rock beats Scissors';
                                output.appendChild(userScoreOutput);
                                output.appendChild(compScoreOutput);
                                output.appendChild(resultOutput);
                            }
                                else if (computerSelection == 'Paper'){
                                    userScore = userScore + 1;
                                    userScoreOutput.textContent = "Your Score: " + userScore;
                                    compScoreOutput.textContent = "Computer Score: " + compScore;
                                    resultOutput.textContent = 'Well Done! You Win! Scissors beats Paper';
                                    output.appendChild(userScoreOutput);
                                    output.appendChild(compScoreOutput);
                                    output.appendChild(resultOutput);

                                }
                                else if (computerSelection == 'Scissors'){
                                    userScoreOutput.textContent = "Your Score: " + userScore;
                                    compScoreOutput.textContent = "Computer Score: " + compScore;
                                    resultOutput.textContent = 'Draw';
                                    output.appendChild(userScoreOutput);
                                    output.appendChild(compScoreOutput);
                                    output.appendChild(resultOutput);
                                }
                            }
                            
        

                if (userScore >= 5){
                                    compScore = 0;
                                    userScore = 0;
                                    resultOutput.textContent = 'CONGRATULATIONS! YOU ARE VICTORIOUS! Chose a new weapon above to fight again!';
                                    output.removeChild(userScoreOutput);
                                    output.removeChild(compScoreOutput);
                                    output.appendChild(resultOutput);
                            };
                                if (compScore >= 5){
                                    compScore = 0;
                                    userScore = 0;
                                    resultOutput.textContent = 'BAD LUCK! TRY AGAIN, VICTORY IS IN SIGHT... Chose a new weapon above to start a new game!';
                                    output.removeChild(userScoreOutput);
                                    output.removeChild(compScoreOutput);
                                    output.appendChild(resultOutput);
                                }


    }

