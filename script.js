function getComputerChoice() {
    const gameOptions = ["rock", "paper", "scissors"];
    let computerChoice = Math.ceil(Math.random() * gameOptions.length) -1 ;

    if (computerChoice == 1) {
        return computerChoice = "rock";
    } else if (computerChoice == 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

    let playerWinCount = 0;
    let computerWinCount = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose?").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        console.log(`Draw! ${playerSelection} and ${computerSelection} are the same.`);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWinCount += 1;
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWinCount += 1;
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWinCount += 1;
        console.log("You lose! Scissors beats paper.");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWinCount += 1;
        console.log("You win! Paper beats rock.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWinCount += 1;
        console.log("You win! Scissors beats paper.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWinCount += 1;
        console.log("You lose! Rock beats scissors");
    }
}

function game() {
    playRound();
    console.log(`Player score: ${playerWinCount}`);
    console.log(`Computer score: ${computerWinCount}`);
    playRound();
    console.log(`Player score: ${playerWinCount}`);
    console.log(`Computer score: ${computerWinCount}`);
    playRound();
    console.log(`Player score: ${playerWinCount}`);
    console.log(`Computer score: ${computerWinCount}`);
    playRound();
    console.log(`Player score: ${playerWinCount}`);
    console.log(`Computer score: ${computerWinCount}`);
    playRound();
    console.log(`Player score: ${playerWinCount}`);
    console.log(`Computer score: ${computerWinCount}`);
    
    if (playerWinCount > computerWinCount) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins! Better luck next time.")
    }
}