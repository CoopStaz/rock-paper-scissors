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

    let playerWinCount;
    let computerWinCount;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose?").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        return `Draw! ${playerSelection} and ${computerSelection} are the same.`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
        playerWinCount += 1;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
        computerWinCount += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper.";
        computerWinCount += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
        playerWinCount += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
        playerWinCount += 1;
    } else {
        return "You lose! Rock beats scissors";
        computerWinCount += 1;
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
}


