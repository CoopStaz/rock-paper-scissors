//Declare getComputerChoice function
//Create array with possible choices
//Create variable that randomizes the array

function getComputerChoice() {
    const gameOptions = ["rock", "paper", "scissors"];
    let computerChoice = Math.ceil(Math.random() * gameOptions.length - 1);

    if (computerChoice == 1) {
        return (computerChoice = "rock");
    } else if (computerChoice == 2) {
        return (computerChoice = "paper");
    } else {
        return (computerChoice = "scissors");
    }
}

//Create a function
//Function must take two parameters: playerSelection and computerSelection
//Use prompt for user input

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose?").toLowerCase();
    computerSelection = getComputerChoice();
    let playerWinCount;
    let computerWinCount;
    
    if (playerSelection == computerSelection) {
        return `Draw! ${playerSelection} and ${computerSelection} are the same.`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
        playerWinCount =+ 1;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
        computerWinCount =+ 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper.";
        computerWinCount =+ 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
        playerWinCount =+ 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
        playerWinCount =+ 1;
    } else {
        return "You lose! Rock beats scissors";
        computerWinCount =+ 1;
    }
}

//Write a function called game()
//Must use previous function to play 5 rounds
//Must keep score
//Report the winner or loser at the end.

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}


