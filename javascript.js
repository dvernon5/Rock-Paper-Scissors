function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);

    return choice[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid selection. Please enter Rock, Paper, or Scissors").toLowerCase();
    }

    return choice;
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) { return "tie"; }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    }

    return "computer";
}

function runGame() {
    let humanScore = 0;
    let computerScore = 0;
    let replayGame;
    while (1) {

    }
}

function main() {
    console.log(getComputerChoice());
    console.log(getHumanChoice());
}

main();