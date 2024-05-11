function getComputerChoice() {
    let random = Math.random() * 100;
    let computerChoice = "";
    if (random < 33) {
        computerChoice = "rock";
    } else if (random > 33 && random < 66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getPlayerChoice() {
    humanChoice = window.prompt("What your choice rock, paper or scissors?").toLowerCase();
    if (humanChoice != "rock" || humanChoice != "paper" || humanChoice != "scissors") {
        humanChoice = window.prompt("You can enter only rock, paper or scissors!!!");
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win, rock beats scissors!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win, scissors beat paper!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win!, paper beats rock!");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        alert("Draw!!!");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        alert("You lose! Rock beats scissors!");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice == "paper") {
        alert("You lose! scissors beat paper!");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        alert("You lose! Paper beats rock!");
        computerScore++;
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
const humanSelection = getPlayerChoice();
console.log(humanSelection);
playRound(humanSelection, computerSelection);

