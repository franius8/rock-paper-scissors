const resultDiv = document.querySelector('#results');
const roundResult = document.createElement('div');
const gameResult = document.createElement('div');
const buttons = document.querySelectorAll('button');
const playerScoreSpan = document.querySelector('#playerScore');
const computerScoreSpan = document.querySelector('#computerScore');

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
       return "rock";
    } else if (choice > 0.66) {
       return "paper";
    } else {
       return "scissors";
    }
   }

   let playerScore = 0;
   let computerScore = 0;
   playerScoreSpan.textContent = (playerScore);
   computerScoreSpan.textContent = (computerScore);

   buttons.forEach(button => {
    button.addEventListener('click', initializeRound)
   })

   function initializeRound (e) {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    roundResult.textContent = (playRound(playerSelection, computerSelection));
    resultDiv.appendChild(roundResult);
    playerScoreSpan.textContent = (playerScore);
    computerScoreSpan.textContent = (computerScore);
    checkIfGameEnded();
   }

   function playRound (playerSelection, computerSelection) {
       if (playerSelection === computerSelection) {
           return "Tie!";
       } else if (playerSelection === "rock" && computerSelection === "paper") {
           computerScore++;
           return "You Lose! Paper beats Rock.";
       } else if (playerSelection === "paper" && computerSelection === "scissors") {
           computerScore++;
           return "You Lose! Scissors beat Paper.";
       } else if (playerSelection === "scissors" && computerSelection === "rock") {
           computerScore++;
           return "You Lose! Rock beats Scissors.";
       } else if (playerSelection === "rock" && computerSelection === "scissors") {
           playerScore++;
           return "You win. Rock beats Scissors."
       } else if (playerSelection === "paper" && computerSelection === "rock") {
           playerScore++;
           return "You win. Paper beats rock."
       } else if (playerSelection === "scissors" && computerSelection === "paper") {
           playerScore++;
           return "You win. Scissors beat paper."
       } else {
           return "Invalid player choice. Enter only rock, paper or scissors."
       }
   }

   function checkIfGameEnded () {
    if (playerScore >= 5) {
        gameResult.textContent = "You won the game! Congrats!";
        resultDiv.appendChild(gameResult);
    } else if (computerScore >= 5) {
        gameResult.textContent = "You lost the game! Try again!";
        resultDiv.appendChild(gameResult);
    }
    return;
   }