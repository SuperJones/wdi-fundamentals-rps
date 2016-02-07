////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    var answer = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return answer;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    if((move === 'rock') || (move === 'scissors') || (move === 'paper')) {
        return move;
    }else {
        return getInput();
    }
}


    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    if ((move === 'rock') || (move === 'scissors') || (move === 'paper')) {
        return move;
    }else {
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return  randomPlay();
    }
}


function getWinner() {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    /* YOUR CODE HERE */
    if (playerMove === computerMove){
        winner = 'tie';
    }else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')){
        winner = 'player';
    }else{
        winner = 'computer';
    }
    return winner;
}

var playToFive = function() {
    
    var playerWins = 0;
    var computerWins = 0;
    console.log("Let's play Rock, Paper, Scissors, Go!");

    while((playerWins <= 5) || (computerWins <= 5)){
        var winner = getWinner();
           /* YOUR CODE HERE */
        if (winner === 'player'){
            playerWins += 1;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
            
        } else if (winner === 'computer'){
            computerWins += 1;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

        } else {
            playerWins = playerWins + 0;
            computerWins = computerWins + 0;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        }
    }    
    return [playerWins, computerWins];

};

playToFive();


