// selecting HTML elements
const plScore = document.querySelector(".player-score");
const pcScore = document.querySelector(".computer-score");
const gameResult = document.querySelector(".game-result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const lizard = document.querySelector("#lizard");
const spock = document.querySelector("#spock");
const resetBtn = document.createElement("div");

// player name
const playerName = document.querySelector(".player-name");
playerName.textContent = prompt("Enter your name:");

// Function, that returns random computer move
function computerPlay() {
  const computerMoves = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomComputerMove = Math.floor(Math.random() * computerMoves.length);
  const computerMove = computerMoves[randomComputerMove];
  return computerMove;
}

let playerScore = 0;
let computerScore = 0;

// Function, that defines game's logic
function playRound(playerSelection, computerSelection) {
  // Player chooses rock
  if (playerSelection === computerSelection) {
    gameResult.textContent = `It's a tie, no one gets a point!`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Paper covers rock.`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Rock crushes scissors.`;
  } else if (playerSelection === "rock" && computerSelection === "lizard") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Rock crushes lizard.`;
  } else if (playerSelection === "rock" && computerSelection === "spock") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Spock vaporizes rock.`;
  }

  // Player chooses paper
  if (playerSelection === "paper" && computerSelection === "rock") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Paper covers rock.`;
  } else if (playerSelection === computerSelection) {
    gameResult.textContent = `It's a tie, no one gets a point.`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Scissors cuts paper.`;
  } else if (playerSelection === "paper" && computerSelection === "lizard") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Lizard eats paper.`;
  } else if (playerSelection === "paper" && computerSelection === "spock") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Paper disproves Spock.`;
  }

  // Player chooses scissors
  if (playerSelection === "scissors" && computerSelection === "rock") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Rock crushes scissors.`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Scissors cuts paper.`;
  } else if (playerSelection === computerSelection) {
    gameResult.textContent = `It's a tie, no one gets a point.`;
  } else if (playerSelection === "scissors" && computerSelection === "lizard") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Scissors decapitates lizard.`;
  } else if (playerSelection === "scissors" && computerSelection === "spock") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Spock smashes scissors.`;
  }

  // Player chooses lizard
  if (playerSelection === "lizard" && computerSelection === "rock") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Rock crushes lizard.`;
  } else if (playerSelection === "lizard" && computerSelection === "paper") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Lizard eats paper.`;
  } else if (playerSelection === "lizard" && computerSelection === "scissors") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won. Scissors decapitates lizard.`;
  } else if (playerSelection === computerSelection) {
    gameResult.textContent = `It's a tie, no one gets a point`;
  } else if (playerSelection === "lizard" && computerSelection === "spock") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Lizard poisons Spock.`;
  }

  // Player chooses Spock
  if (playerSelection === "spock" && computerSelection === "rock") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Spock vaporizes rock.`;
  } else if (playerSelection === "spock" && computerSelection === "paper") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Paper disproves Spock.`;
  } else if (playerSelection === "spock" && computerSelection === "scissors") {
    ++playerScore;
    plScore.textContent = playerScore;
    gameResult.textContent = `You won! Spock smashes scissors.`;
  } else if (playerSelection === "spock" && computerSelection === "lizard") {
    ++computerScore;
    pcScore.textContent = computerScore;
    gameResult.textContent = `Computer won! Lizard poisons Spock.`;
  } else if (playerSelection === computerSelection) {
    gameResult.textContent = `It's a tie, no one gets a point.`;
  }

  determineWinner();
}

rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
lizard.addEventListener("click", () => playRound("lizard", computerPlay()));
spock.addEventListener("click", () => playRound("spock", computerPlay()));

function determineWinner() {
  if (playerScore === 5) {
    gameResult.textContent = `YOU DID IT! You have bested the coputer. Congratulations!`;
    resetBtn.style.cssText =
      "background-color: #001845; color: #f8f8f8;text-transform: uppercase; padding: 0.5rem 1.6rem; border-radius: 0.5rem; cursor: pointer; font-weight: 700; letter-spacing: 0.1rem; margin-top: 2rem;";
    resetBtn.textContent = "Play again?";
    gameResult.appendChild(resetBtn);
    reset();
  } else if (computerScore === 5) {
    gameResult.textContent = `HA, YOU'RE A LOSER! The computer is better than you.`;
    resetBtn.style.cssText =
      "background-color: #001845; color: #f8f8f8;text-transform: uppercase; padding: 0.5rem 1.6rem; border-radius: 0.5rem; cursor: pointer; font-weight: 700; letter-spacing: 0.1rem; margin-top: 2rem;";
    resetBtn.textContent = "Play again?";
    gameResult.appendChild(resetBtn);
    reset();
  }
}

function reset() {
  resetBtn.addEventListener("click", () => window.location.reload());
}
