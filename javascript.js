function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
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

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);
    if (result === "tie") {
        alert("It's a tie");
    } else if (result === "human") {
        alert("You win this round");
        return 1;
    } else {
        alert("Computer wins this round!");
        return -1;  // Computer point
    }

    return 0; // Tie 
}

export function runGame() {
    let humanScore = 0;
    let computerScore = 0;
    while (true) {
        let winner = playRound();
        if (winner === 1) { humanScore++; }
        if (winner === -1) { computerScore++; }
        console.log(`Score - You: ${ humanScore } | Computer: ${ computerScore }`);
        const playAgain = prompt("Play another round? (yes/no)").toLowerCase();
        if (!playAgain.startsWith('y')) {
            break;
        }
    }
    console.log(`\n=== FINAL SCORE ===`);
    console.log(`You: ${ humanScore }`);
    console.log(`Computer: ${ computerScore }`);
    alert(`Game Over!\nFinal Score - You: ${ humanScore } | Computer: ${ computerScore }`);
}

runGame();