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

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        results.textContent=`Draw! ${playerSelection} and ${computerSelection} are the same.\n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWinCount += 1;
        results.textContent=`You win! Rock beats scissors. \n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWinCount += 1;
        results.textContent=`You lose! Paper beats rock.\n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWinCount += 1;
        results.textContent=`You lose! Scissors beats paper.\n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWinCount += 1;
        results.textContent=`You win! Paper beats rock.\n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWinCount += 1;
        results.textContent=`You win! Scissors beats paper.\nPlayer Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWinCount += 1;
        results.textContent=`You lose! Rock beats scissors.\n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
    }
    if (playerWinCount == 5) {
        results.textContent = `Player Wins! \n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
        playerWinCount = 0;
        computerWinCount = 0;
    } else if (computerWinCount == 5) {
        results.textContent = `Computer Wins! \n Player Score = ${playerWinCount} | Computer Score = ${computerWinCount}`;
        playerWinCount = 0;
        computerWinCount = 0;
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');

rock.addEventListener('click',function() {
    playRound("rock");
});

paper.addEventListener('click',function() {
    playRound("paper");
});

scissors.addEventListener('click',function() {
    playRound("scissors");
});