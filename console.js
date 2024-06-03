let playerSelection = '';
let computerSelection = getComputerChoice();
let result = '';
let buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{button.addEventListener('click',()=>{playGame(playRound(button.textContent,getComputerChoice()))})}); 
let userPoints = 0;
let computerPoints = 0;
const div = document.querySelector('div');
let para = document.createElement('p');
 
function getComputerChoice() {
    let x = Math.floor((Math.random() * 3 ) + 1);
    switch(x) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }
}

function playRound(playerSelection,computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    div.textContent = `You choose ${playerChoice} and Computer Choose ${computerChoice}`;
    
    if(playerChoice == 'rock' && computerChoice == 'scissor') {
        return "You won! Rock beats Scissor";
    }

    else if(playerChoice == 'rock' && computerChoice == 'paper') {
        return "You lose! Paper beats Rock";
    }

    else if(playerChoice == 'paper' && computerChoice == 'scissor') {
        return "You lose! Scissor beats Paper";
    }

    else if(playerChoice == 'paper' && computerChoice == 'rock') {
        return "You won! Paper beats Rock";
    }

    else if(playerChoice == 'scissor' && computerChoice == 'paper') {
        return "You won! Scissor beats Paper";
    }

    else if(playerChoice == 'scissor' && computerChoice == 'rock') {
        return "You lose! Rock beats Scissor";
    }

    else {
        return "It's a draw! You both choose the same"
    }
}

function playGame(valStr) {
    div.textContent = valStr;
    if(userPoints+computerPoints>=9) {
        userPoints = 0;
        computerPoints = 0;
        para.textContent = 'New Game';
    }
    if(valStr.charAt(4).toLowerCase() == 'l') {
            computerPoints++;
            para.textContent = `Your Points ${userPoints} and Computer Points ${computerPoints}`;
    }
    else if(valStr.charAt(4).toLowerCase() == 'w'){
        userPoints++;
        para.textContent = `Your Points ${userPoints} and Computer Points ${computerPoints}`;

    }
    else {

    }
    if(userPoints == 5 || computerPoints ==5) {
        if(userPoints>computerPoints){
            div.textContent=`You Won the Game by ${userPoints}(Your points) : ${computerPoints}(Computer Points)`;
        }
        else if(userPoints<computerPoints){
            div.textContent = `You Lose the Game by ${userPoints}(Your points) : ${computerPoints}(Computer Points)`;
        }
        else {
            div.textContent = `This is a draw ${userPoints}(Your points) : ${computerPoints}(Computer Points)`;
        }
    }
    div.appendChild(para);
}

