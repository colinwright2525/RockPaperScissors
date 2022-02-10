'use strict';

console.log('Hello World');

let playerSelection;
let computerSelection;
let result;
let playerScore;
let totalPlayerScore = 0;
let gameVerdict;

function playerPlay () {
    playerSelection = prompt('Choose rock, paper, or scissors','');
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

function computerPlay () {
    let num = Math.floor(Math.random()*3) + 1;
    console.log(num);

    if (num === 1) {
        computerSelection = 'rock';
        return computerSelection;
    }
    else if (num === 2) {
        computerSelection = 'paper';
        return computerSelection;
    }
    else {
        computerSelection = 'scissors';
        return computerSelection;
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            result = 'You win, rock beats scissors!'
            playerScore = 1;
            return {result, playerScore};
        }
        else if (computerSelection === 'paper') {
            result = 'You lose, paper beats rock!';
            playerScore = -1;
            return {result, playerScore};
        }
        else {
            result = 'Tie! Play again!';
            playerScore = 0;
            return {result, playerScore};
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'You win, paper beats rock!';
            playerScore = 1;
            return {result, playerScore};
        }
        else if (computerSelection === 'scissors') {
            result = 'You lose, scissor beats paper!';
            playerScore = -1;
            return {result, playerScore};
        }
        else {
            result = 'Tie! Play again!';
            playerScore = 0;
            return {result, playerScore};
        }
    }
    else {
        if (computerSelection === 'paper') {
            result = 'You win, scissors beat paper!';
            playerScore = 1;
            return {result, playerScore};
        }
        else if (computerSelection === 'rock') {
            result = 'You lose, rock beats scissors!';
            playerScore = -1;
            return {result, playerScore};
        }
        else {
            result = 'Tie! Play again!';
            playerScore = 0;
            return {result, playerScore};
        }
    }
}







function game() {
    for (let i = 0; i < 5 && totalPlayerScore !== 3 && totalPlayerScore !== -3; i++) {
        playerPlay();
        console.log(playerSelection);
        computerPlay();
        playRound(playerSelection,computerSelection);
      
     
        console.log(result);
        totalPlayerScore += playerScore;
        console.log(totalPlayerScore);
    }
    if (totalPlayerScore > 0) {
        gameVerdict = 'Yay! You won!';
    }
    else {
        gameVerdict = 'Oh no, you lost...';
    }
  document.write(gameVerdict + ' If you had fun, refresh the page to play again!');
        
}





