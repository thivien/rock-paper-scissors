// Function, that returns random computer move
function computerPlay() {
    const computerMoves = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomComputerMove = Math.floor(Math.random() * computerMoves.length);
    const computerMove = computerMoves[randomComputerMove]
    return computerMove;
};

// Function, that defines game's logic
function playRound(playerSelection, computerSelection) {

    // IF statement, that checks if player input is valid
    // if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors" || playerSelection !== "lizard" || playerSelection !== "spock") return `Please enter valid input. Valid inputs are 'rock, 'paper', 'scissors', 'lizard' or 'spock' without quotation marks.`

    // Player chooses rock
    if (playerSelection === "rock" && computerSelection === "rock") {
        return `It's a tie, try again!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You loose! Paper covers rock.`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You win! Rock crushes scissors.`;
    } else if (playerSelection === "rock" && computerSelection === "lizard") {
        return `You win! Rock crushes lizard.`;
    } else if (playerSelection === "rock" && computerSelection === "spock") {
        return `You loose! Spock vaporizes rock.`;
    }

    //Player chooses paper
    if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win! Paper covers rock.`;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return `It's a tie, try again.`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You loose! Scissors cuts paper.`;
    } else if (playerSelection === "paper" && computerSelection === "lizard") {
        return `You loose! Lizard eats paper.`;
    } else if (playerSelection === "paper" && computerSelection === "spock") {
        return `You win! Paper disproves Spock.`;
    }

    //Player chooses scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You loose! Paper crushes scissors.`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! Scissors cuts paper.`;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return `It's a tie, try again.`;
    } else if (playerSelection === "scissors" && computerSelection === "lizard") {
        return `You win! Scissors decapitates lizard.`;
    } else if (playerSelection === "scissors" && computerSelection === "spock") {
        return `You loose! Spock smashes scissors.`;
    }

    //Player chooses lizard
    if (playerSelection === "lizard" && computerSelection === "rock") {
        return `You loose! Rock crushes lizard.`;
    } else if (playerSelection === "lizard" && computerSelection === "paper") {
        return `You win! Lizard eats paper.`;
    } else if (playerSelection === "lizard" && computerSelection === "scissors") {
        return `You loose. Scissors decapitates lizard.`;
    } else if (playerSelection === "lizard" && computerSelection === "lizard") {
        return `It's a tie, try again.`;
    } else if (playerSelection === "lizard" && computerSelection === "spock") {
        return `You win! Lizard poisons Spock.`;
    }

    //Player chooses Spock
    if (playerSelection === "spock" && computerSelection === "rock") {
        return `You win! Spock vaporizes rock.`;
    } else if (playerSelection === "spock" && computerSelection === "paper") {
        return `You loose! Paper disproves Spock.`;
    } else if (playerSelection === "spock" && computerSelection === "scissors") {
        return `You win! Spock smashes scissors.`;
    } else if (playerSelection === "spock" && computerSelection === "lizard") {
        return `You loose! Lizard poisons Spock.`;
    } else if (playerSelection === "spock" && computerSelection === "spock") {
        return `It's a tie, try again.`;
    }
};

const playerSelection = prompt("Choose rock, paper, scissors, lizard or Spock:").toLowerCase();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
console.log(`${playerSelection} ${computerSelection}`);