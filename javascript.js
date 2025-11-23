// DOM elements
const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

// Game state
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);

    return choice[randomIndex];
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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);
    let message = `You chose ${ humanChoice }. Computer chose ${ computerChoice }. `;
    if (result === "tie") {
        message += "It's a tie!";
    } else if (result === "human") {
        message += "You win this round!";
        humanScore++;
    } else {
        message += "Computer wins this round!";
        computerScore++;
    }

    // Update DOM
    resultDiv.textContent = message;
    scoreDiv.textConent = scoreDiv.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

    // Declare overall winner at 5 points
    if (humanScore === 5 || computerScore === 5) {
        const finalMessage = humanScore === 5 ? "You" : "Computer";
        resultDiv.textContent += `\n\n\n${ finalMessage } win the game!`;
        buttons.forEach(button => button.disabled = true);
    }
}

// Add click listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});