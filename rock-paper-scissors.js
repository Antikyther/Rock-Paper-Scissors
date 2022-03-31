// part 1 - computer selection

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerPlay() {
  //Block Scope //
  if (getRandomInt(2) == 0) {
    return "scissors";
  } else if (getRandomInt(2) == 1) {
    return "rock";
  } else {
    return "paper";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

// part 2 - player vs computer
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You Lose! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You Lose! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You Lose! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "You Win!";
  }
}

console.log(playRound(playerSelection, computerSelection));
// return `You Lose! ${playerSelection} beats ${computerSelection}`;
// player and computer throw a hand
// Rock beats scissors
// paper beats rock
// scissors beats paper
