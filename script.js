const resultDiv = document.querySelector('#results');
const results = document.createElement('div');
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
    resultDiv.textContent = (playRound(playerSelection, computerSelection));
    playerScoreSpan.textContent = (playerScore);
    computerScoreSpan.textContent = (computerScore);
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

   function game() {
       for (let i = 0; i < 1; i++) {
           let playerSelection = prompt("Please enter rock, paper or scissors.").toLowerCase();
           let computerSelection = getComputerChoice();
           resultDiv.textContent = (playRound(playerSelection, computerSelection));
       }
       if (playerScore === 1) {
           console.log("You scored 1 point.")
       } else {
           console.log("You scored " + playerScore + " points.");
       }
       if (computerScore === 1) {
           console.log("The computer scored 1 point.")
       } else {
           console.log("The computer scored " + computerScore + " points.");
       }
       if (playerScore > computerScore) {
           console.log("You won the game! Congrats!");
       } else if (playerScore < computerScore){
           console.log("You lost the game! Try again");
       } else {
           console.log("The final result is a tie. Play again.")
       }
   }