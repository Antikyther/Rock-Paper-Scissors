// part 1 - computer selection

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function computerPlay(){
  //Block Scope //
  if (getRandomInt(2) == 0){
    return 'Scissors';}
    
 else if (getRandomInt(2) == 1){
    return 'Rock';}
        
 else{
    return 'Paper'; }
}

// part 2 - player vs computer 

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    return `You Lose! ${playerSelection} beats ${computerSelection}`;

  }

}

 // return `You Lose! ${playerSelection} beats ${computerSelection}`;

// Pseudo Code 

  
  
  

// if player choose rock and computer chooses paper 
  // return player selection and computer selection and You lose 
  // if player chooses scissors and computer chooses rock 
  // return You lose! and the selection 
  
  // else return You Win!

 
// In JavaScript, scope refers to the visibility of variables. 
// Variables which are defined outside of a function block have Global scope.
let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

