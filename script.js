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
    if (playerSelection !== "rock" && playerSelection !== "paper" &&
        playerSelection !== "scissors" && playerSelection !== "lizard" &&
        playerSelection !== "spock") {
        return `Please enter valid input. Valid inputs are "rock", "paper", "scissors", "lizard" or "spock" without quotation marks.`
    }

    // TIE
    // if (playerSelection === computerSelection) {
    //     return `It is a tie! No one gets a point`;
    // }

    // All combination when player wins
    // if (playerSelection === "rock" && computerSelection === "scissors" ||
    //     playerSelection === "rock" && computerSelection === "lizard" ||
    //     playerSelection === "paper" && computerSelection === "rock" ||
    //     playerSelection === "paper" && computerSelection === "spock" ||
    //     playerSelection === "scissors" && computerSelection === "paper" ||
    //     playerSelection === "scissors" && computerSelection === "lizard" ||
    //     playerSelection === "lizard" && computerSelection === "paper" ||
    //     playerSelection === "lizard" && computerSelection === "spock" ||
    //     playerSelection === "spock" && computerSelection === "rock" ||
    //     playerSelection === "spock" && computerSelection === "scissors") {
    //     return `You won, your score is now: ${++playerScore}`;
    // }

    //All combination when player looses, i.e. computer wins
    // if (playerSelection === "rock" && computerSelection === "paper" ||
    //     playerSelection === "rock" && computerSelection === "spock" ||
    //     playerSelection === "paper" && computerSelection === "scissors" ||
    //     playerSelection === "paper" && computerSelection === "lizard" ||
    //     playerSelection === "scissors" && computerSelection === "rock" ||
    //     playerSelection === "scissors" && computerSelection === "spock" ||
    //     playerSelection === "lizard" && computerSelection === "rock" ||
    //     playerSelection === "lizard" && computerSelection === "scissors" ||
    //     playerSelection === "spock" && computerSelection === "paper" ||
    //     playerSelection === "spock" && computerSelection === "lizard") {
    //     return `Computer won, its score is now: ${++computerScore}`;
    // }

    // Player chooses rock
    if (playerSelection === "rock" && computerSelection === "rock") {
        return `It's a tie, no one gets a point!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `Computer won! Paper covers rock. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You won! Rock crushes scissors. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "rock" && computerSelection === "lizard") {
        return `You won! Rock crushes lizard. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "rock" && computerSelection === "spock") {
        return `Computer won! Spock vaporizes rock. Its score is now ${++computerScore}.`;
    }

    //Player chooses paper
    if (playerSelection === "paper" && computerSelection === "rock") {
        return `You won! Paper covers rock. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return `It's a tie, no one gets a point.`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `Computer won! Scissors cuts paper. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "paper" && computerSelection === "lizard") {
        return `Computer won! Lizard eats paper. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "paper" && computerSelection === "spock") {
        return `You won! Paper disproves Spock. Your score is now ${++playerScore}.`;
    }

    //Player chooses scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return `Computer won! Rock crushes scissors. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You won! Scissors cuts paper. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return `It's a tie, no one gets a point.`;
    } else if (playerSelection === "scissors" && computerSelection === "lizard") {
        return `You won! Scissors decapitates lizard. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "scissors" && computerSelection === "spock") {
        return `Computer won! Spock smashes scissors. Its score is now ${++computerScore}.`;
    }

    if (playerSelection === "lizard" && computerSelection === "rock") {
        return `Computer won! Rock crushes lizard. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "lizard" && computerSelection === "paper") {
        return `You won! Lizard eats paper. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "lizard" && computerSelection === "scissors") {
        return `Computer won. Scissors decapitates lizard. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "lizard" && computerSelection === "lizard") {
        return `It's a tie, no one gets a point`;
    } else if (playerSelection === "lizard" && computerSelection === "spock") {
        return `You won! Lizard poisons Spock. Your score is now ${++playerScore}.`;
    }

    //Player chooses Spock
    if (playerSelection === "spock" && computerSelection === "rock") {
        return `You won! Spock vaporizes rock. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "spock" && computerSelection === "paper") {
        return `Computer won! Paper disproves Spock. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "spock" && computerSelection === "scissors") {
        return `You won! Spock smashes scissors. Your score is now ${++playerScore}.`;
    } else if (playerSelection === "spock" && computerSelection === "lizard") {
        return `Computer won! Lizard poisons Spock. Its score is now ${++computerScore}.`;
    } else if (playerSelection === "spock" && computerSelection === "spock") {
        return `It's a tie, no one gets a point.`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper, scissors, lizard or Spock:").toLowerCase();
        const computerSelection = computerPlay();
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