// Function, that returns random computer move
function computerPlay() {
    const computerMoves = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomComputerMove = Math.floor(Math.random() * computerMoves.length);
    const computerMove = computerMoves[randomComputerMove]
    return computerMove;
}

let playerScore = 0;
let computerScore = 0;

// Function, that defines game's logic
function playRound(playerSelection, computerSelection) {

    // IF statement, that checks if player input is valid
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" && playerSelection !== "lizard" && playerSelection !== "spock") {
        return `Please enter valid input. Valid inputs are "rock", "paper", "scissors", "lizard" or "spock" without quotation marks.`
    }

    // TIE
    if (playerSelection === computerSelection) {
        return `It is a tie! No one gets a point`;
    }

    // All combination when player wins
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "lizard" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "spock" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "lizard" || playerSelection === "lizard" && computerSelection === "paper" || playerSelection === "lizard" && computerSelection === "spock" || playerSelection === "spock" && computerSelection === "rock" || playerSelection === "spock" && computerSelection === "scissors") {
        return `You won, your score is now: ${++playerScore}`;

    }

    //All combination when player looses, i.e. computer wins
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "spock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "lizard" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "spock" || playerSelection === "lizard" && computerSelection === "rock" || playerSelection === "lizard" && computerSelection === "scissors" || playerSelection === "spock" && computerSelection === "paper" || playerSelection === "spock" && computerSelection === "lizard") {
        return `Computer won, its score is now: ${++computerScore}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper, scissors, lizard or Spock:").toLowerCase();
        const computerSelection = computerPlay();
        //playRound(playerSelection, computerSelection);
        console.log(`You played: ${playerSelection}, computer played: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log(`Congratulation, you are a winner, you have bested the computer!`);
    } else if (playerScore < computerScore) {
        console.log(`Sorry, you are a loser, computer has bested you!`);
    } else {
        console.log(`It's a tie!`);
    }
}

game();