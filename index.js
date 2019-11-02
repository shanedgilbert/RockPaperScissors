let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector('.results');
const resultsStatement = document.createElement('p');
resultsStatement.classList.add('matchResult');
resultsDiv.appendChild(resultsStatement);

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRock);

const paper = document.querySelector('#paper');
paper.addEventListener('click', playPaper);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playScissors);

function playRock() {
    let computer = computerPlay();
    resultsStatement.textContent = playRound('rock', computer);
    if (playerScore == 5 || computerScore == 5) {
        calculateWinner();
    }
}

function playPaper() {
    let computer = computerPlay();
    resultsStatement.textContent = playRound('paper', computer);
    if (playerScore == 5 || computerScore == 5) {
        calculateWinner();
    }
}

function playScissors() {
    let computer = computerPlay();
    resultsStatement.textContent = playRound('scissors', computer);
    if (playerScore == 5 || computerScore == 5) {
        calculateWinner();
    }
}

function calculateWinner() {
    if (playerScore == computerScore) {
        winnterText.textContent = "Tie game!";
    } else if (playerScore > computerScore) {
        winnerText.textContent = "You win! You had a score of " + playerScore + " and the computer had a score of " + computerScore;
    } else {
        winnerText.textContent = "You lose! You had a score of " + playerScore + " and the computer had a score of " + computerScore;
    }
}

// Displays winner after 5 games have finished
const winnerText = document.createElement('p');
winnerText.classList.add('winner');
resultsDiv.appendChild(winnerText);

// Helper function to randomly select an option for the computer
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
        return "rock";
    } else if (selection == 1) {
        return "paper";
    } else if (selection == 2) {
        return "scissors";
    } else {
        return "error - computer can't select option";
    }
}


// Helper function that takes in a player selection and computer selection and compares both to determine a round winner. 
// Score is also kept here to determine a round winner. -1 = player loses. 0 = tie. 1 = player wins.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Tie! You both picked rock!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "You Win! Paper beats rock!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return "You lose! Scissors lose to rock!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return "You lose! Rock loses to paper!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Tie! You both picked paper!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You win! Scissors beat paper!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return "You win! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        return "You lose! Paper loses to scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Tie! You both picked scissors!";
    }
}


// Plays 5 rounds of the rock, paper, scissors game. Outputs the resuls of each round and keeps score of who wins
// function game() {
//     gameScore = 0;
//     // for (let i = 0; i < 5; i++) {
//     let player = window.prompt("Rock, Paper, or Scissors?");
//     if (player == null) return; // Stops if there is no input
//     let computer = computerPlay();
//     console.log(playRound(player, computer));
//     gameScore += score;
//     // }
//     if (gameScore == 0) {
//         return "Tie game!";
//     } else if (gameScore > 0) {
//         return "You win! You had a score of " + gameScore;
//     } else {
//         return "You lose! You had a score of " + gameScore;
//     }
// }