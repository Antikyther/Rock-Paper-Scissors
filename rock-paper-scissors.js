// part 1 - computer selection

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerPlay() {
  //Block Scope //
  if (getRandomInt(2) == 0) {
    return "Scissors";
  } else if (getRandomInt(2) == 1) {
    return "Rock";
  } else {
    return "Paper";
  }
}

// part 2 - player vs computer
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (computer == player) {
    return "Tie! Play again!";
  } else if (computer == "rock" && player == "scissors") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (computer == "paper" && player == "rock") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (computer == "scissors" && player == "paper") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner);
  }
}

//Write a NEW function called game().
//Call the playRound function inside of
//this one to play a 5 round game that keeps
//score and reports a winner or loser at the end.

// Global Variables
sign = window.prompt("Try your hand at rock-paper-scissors!");
let playerSelection = sign;
let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
console.log(game(5));
