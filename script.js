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

