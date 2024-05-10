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

let computer = getComputerChoice();
console.log(computer);

let humanChoice = "";
function getPlayerChoice() {
    humanChoice = window.prompt("What your choice rock, paper or scissors?").toLowerCase();
    if (humanChoice != "rock" || humanChoice != "paper" || humanChoice != "scissors") {
        humanChoice = window.prompt("You can enter only rock, paper or scissors!!!");
    }
}

getPlayerChoice();
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}