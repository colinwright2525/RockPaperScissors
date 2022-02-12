'use strict';

console.log('Hello World');

const title = document.querySelector('div');
const btn = document.querySelector('button');
const res = document.querySelector('#result');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const human = document.querySelector('#human');
const computer = document.querySelector('#computer');
const reset = document.querySelector('#reset');



console.log(title);
console.log(res);


let playerSelection;
let computerSelection;
let result;
let computerScore;
let playerScore;
let totalComputerScore = 0;
let totalPlayerScore = 0;
let gameVerdict;


rock.addEventListener('click', () => {
        playerSelection = 'rock';
        playerSelection = playerSelection.toLowerCase();
        game(playerSelection);
    });

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playerSelection = playerSelection.toLowerCase();
    game(playerSelection);
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playerSelection = playerSelection.toLowerCase();
    game(playerSelection);
});

reset.addEventListener('click', () => {
    human.textContent = 'Human you(dumbass): ';
    totalPlayerScore = 0;
    computer.textContent = 'THE MACHINES: ';
    totalComputerScore = 0;
    title.textContent = 'The fight continues. Who will win this time, man or machine??';
});


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
            computerScore = 0;
            return {result, playerScore, computerScore};
        }
        else if (computerSelection === 'paper') {
            result = 'You lose, paper beats rock!';
            playerScore = 0;
            computerScore = 1;
            return {result, playerScore, computerScore};
        }
        else {
            result = 'Tie! Play again!';
            playerScore = 0;
            computerScore = 0;
            return {result, playerScore, computerScore};
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'You win, paper beats rock!';
            playerScore = 1;
            computerScore = 0;
            return {result, playerScore, computerScore};
        }
        else if (computerSelection === 'scissors') {
            result = 'You lose, scissor beats paper!';
            playerScore = 0;
            computerScore = 1;
            return {result, playerScore, computerScore};
        }
        else {
            result = 'Tie! Play again!';
            playerScore = 0;
            computerScore = 0;
            return {result, playerScore, computerScore};
        }
    }
    else {
        if (computerSelection === 'paper') {
            result = 'You win, scissors beat paper!';
            playerScore = 1;
            computerScore = 0;
            return {result, playerScore, computerScore};
        }
        else if (computerSelection === 'rock') {
            result = 'You lose, rock beats scissors!';
            playerScore = 0;
            computerScore = 1;
            return {result, playerScore, computerScore};
        }
        else {
            result = 'Tie! Play again!';
            playerScore = 0;
            computerScore = 0;
            return {result, playerScore, computerScore};
        }
    }
}




function game(playerSelection) {
        console.log(playerSelection);
        computerPlay();
        console.log(computerSelection);
        playRound(playerSelection,computerSelection);
      
     
        console.log(result);
        totalPlayerScore += playerScore;
        totalComputerScore += computerScore;
        console.log(totalPlayerScore);
        console.log(totalComputerScore);
    

        res.textContent = result;
        human.textContent = `Human you(dumbass): ${totalPlayerScore}`;
        computer.textContent = `THE MACHINES: ${totalComputerScore}`;
        
     
    
        if (totalPlayerScore === 5) {
            gameVerdict = 'Yay! You won!';
            title.textContent = (gameVerdict + ' If you had fun, click the button to play again!');
         

        }

        else if (totalComputerScore === 5) {
            gameVerdict = 'Oh no, you lost...';
            title.textContent = (gameVerdict + ' If you had fun, click the button to play again!');
        

        }
    
  
  
}





