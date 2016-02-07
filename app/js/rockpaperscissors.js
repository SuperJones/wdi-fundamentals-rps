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
    console.log(playerMove);
    var computerMove = getComputerMove();
    console.log(computerMove);
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
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
//test
getWinner();


var playToFive = function() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    for(var i=5; playerWins<i || computerWins<i; i--){
       var getWinner = 'computer';
           /* YOUR CODE HERE */
        if (getWinner === 'player'){
            playerWins += 1;
        } else if (getWinner === 'computer'){
            computerWins += 1;
        } else {
            playerWins = playerWins;
            computerWins = computerWins;
        }
    }    
    return [playerWins, computerWins];

};

playToFive();


