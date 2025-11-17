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

function main() {
    console.log(getComputerChoice());
    console.log(getHumanChoice());
}

main();