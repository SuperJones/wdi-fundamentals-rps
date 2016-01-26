////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
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
    var move;
    // If a `move` has a value, your expression should evaluate to that value.
    if (move == !null){
        return move;
    }else {
        return getInput();
    }
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move;
    // If a `move` has a value, your expression should evaluate to that value.
    if (move == !null){
        return move;
    }else {
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     return  randomPlay();/* Your Expression */;
    } 
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == computerMove){
        winner = 'tie';
    } else if (playerMove == 'rock'){
        if (computerMove == 'scissors'){
            winner = 'player';
        }

    } else if (playerMove == 'paper'){
        if (computerMove == 'rock'){
            winner = 'player';
        }

    } else if (playerMove == 'scissors'){
        if (computerMove == 'paper')
            winner = 'player';
    }else{
        winner = 'computer';
    }
    return winner;

    //ALTERNATE SOLUTION
    /*
    if (playerMove == computerMove){
        winner = 'tie';
    }else if (getPlayerMove = 'rock' && computerMove == 'scissors') || (getPlayerMove == 'scissors' && computerMove == 'paper') || 
    (getPlayerMove == 'paper' && computerMove == 'rock'){
        winner = 'player';
    }else{
        winner = 'computer';
    }
    return winner;
    */

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if (getWinner = 'player'){
        playerWins = playerWins + 1
    } else if (getWinner = 'computer'){
        computerWins = computerWins + 1
    } else {
        playerWins = playerWins
        computerWins = computerWins
    }
    return [playerWins, computerWins];
}

