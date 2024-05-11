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
    let humanChoice = "";
    humanChoice = window.prompt("What's your choice? Enter rock, paper, or scissors:").toLowerCase();
    if (humanChoice !== "paper" && humanChoice !== "rock" && humanChoice && "scissors") {
        humanChoice = window.prompt("You can choose only rock, paper or scissors!!!").toLowerCase();
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

let computerSelection = getComputerChoice();
console.log(computerSelection);
let humanSelection = getPlayerChoice();
console.log(humanSelection);
playRound(humanSelection, computerSelection);

computerSelection = getComputerChoice();
console.log(computerSelection);
humanSelection = getPlayerChoice();
console.log(humanSelection);
playRound(humanSelection, computerSelection);

computerSelection = getComputerChoice();
console.log(computerSelection);
humanSelection = getPlayerChoice();
console.log(humanSelection);
playRound(humanSelection, computerSelection);

console.log(`Player: ${humanScore} | Computer: ${computerScore}`);

if (computerScore > humanScore) {
    alert("You lose the game!" + ` With score ${humanScore} < ${computerScore}`);
} else if (humanScore > computerScore) {
    alert("You win the game!" + ` With score ${humanScore} > ${computerScore}`);
} else {
    alert(`Score is ${humanScore} : ${computerScore} so its dawn`);
}