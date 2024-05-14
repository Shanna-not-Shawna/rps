var wins = 0;
var losses = 0;
var ties = 0;

var moves = ["R", "P", "S"];

var playGame = function() {
    var userMove = prompt("What's your move? Type R for Rock, P for Paper or S for Scissors.");

    if(!userMove) {
        return;
    }

    userMove = userMove.toUpperCase();

    var computerChoice = Math.floor(Math.random() * moves.length);
    var computerMove = moves[computerChoice];

    alert("The computer chose " + computerMove);

    if (userMove === computerMove) {
        alert("Tie!");
        ties++;
    } else if (
        userMove === "R" && computerMove === "S" ||
        userMove === "P" && computerMove === "R" ||
        userMove === "S" && computerMove === "P"
     ) {
        alert("You win!");
        wins++;
    } else {
        alert("You lose!");
        losses++;
    }

    var playAgain = confirm("Here are your stats:\nWins = " + wins + "\nLosses = " + losses + "\nTies = " + ties + "\nWant to play again?");

    if (playAgain) {
        playGame();
    }
}

playGame();