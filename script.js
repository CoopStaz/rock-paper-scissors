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
    
    if (playerSelection == computerSelection) {
        return `Draw! ${playerSelection} and ${computerSelection} are the same.`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    } else {
        return "You lose! Rock beats scissors";
    }

    console.log(playerSelection);
    console.log(computerSelection);
}

