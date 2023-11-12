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
