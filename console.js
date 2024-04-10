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
    const compuerChoice = computerSelection.toLowerCase();
    
    if(playerChoice == 'rock' && compuerChoice == 'scissor') {
        return "You won! Rock beats Scissor";
    }

    else if(playerChoice == 'rock' && compuerChoice == 'paper') {
        return "You lose! Paper beats Rock";
    }

    else if(playerChoice == 'paper' && compuerChoice == 'scissor') {
        return "You lose! Scissor beats Paper";
    }

    else if(playerChoice == 'paper' && compuerChoice == 'rock') {
        return "You won! Paper beats Rock";
    }

    else if(playerChoice == 'scissor' && compuerChoice == 'paper') {
        return "You won! Scissor beats Paper";
    }

    else if(playerChoice == 'scissor' && compuerChoice == 'rock') {
        return "You lose! Rock beats Scissor";
    }

    else {
        return "It's a draw! You both choose the same"
    }
}

function playGame() {
    let userPoints = 0;
    let computerPoints = 0;

    for(let i = 0; i<5;i++){
        const playerSelection = prompt("Enter your Choice: ");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
        if(result.charAt(4).toLowerCase() == 'l') {
            computerPoints++;
        }
        else if(result.charAt(4).toLowerCase() == 'w'){
            userPoints++;
        }
        else {

        }
    }

    if(userPoints>computerPoints){
        console.log(`You Won the Game by ${userPoints}(Your points) : ${computerPoints}(Computer Points)`);
    }
    else if(userPoints<computerPoints){
        console.log(`You Lose the Game by ${userPoints}(Your points) : ${computerPoints}(Computer Points)`);
    }
    else {
        console.log(`This is a draw ${userPoints}(Your points) : ${computerPoints}(Computer Points)`);
    }
}

playGame();