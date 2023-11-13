//Declare getComputerChoice function
//Create array with possible choices
//Create variable that randomizes the array
let computerChoice;

function getComputerChoice() {
    const gameOptions = ["rock", "paper", "scissors"];
    computerChoice = Math.ceil(Math.random() * gameOptions.length - 1);

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
let playerSelection = prompt("What do you choose?");

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return `Draw! ${playerSelection} and ${computerSelection} are the same.`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    }
}

console.log(playerSelection);