// CHALLEGES for the Pig Game


// 1) Make it so that if the player rolls 6 twice in a row, then he loses all his "total" score.
// 2) Add a field so that player's can choose to assign the total number of points to win the game.
// 3) Add a second dice to the game

var scores, roundScore, activePlayer, gamePlaying;

// Create a variable for the last roll
var lastRoll1, lastRoll2;

// We call the init() function to start a new game
init();


// "Roll Dice" button event handling
document.querySelector(".btn-roll").addEventListener("click", function () {

    // If the state variable "gamePlaying" is true then we can use the buttons normally.
    if (gamePlaying) {

        // Random number
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);

        // Display the result
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        document.getElementById("dice-1").src = "./images/dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "./images/dice-" + dice2 + ".png";

        // If player rolls 6 twice in a row, their "total" score is set to 0
        if((lastRoll1 === 6 && dice1 === 6) || (lastRoll2 === 6 && dice2 === 6)){
            scores[activePlayer] = 0;
            document.getElementById("score-" + activePlayer).textContent = "0";
            nextPlayer();
        }
        // Update the round score IF the rolled number was NOT a 1
        else if (dice1 !== 1 && dice2 !== 1) {
            // Add score to the current score of current player
            roundScore += dice1 + dice2;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }

        lastRoll1 = dice1;
        lastRoll2 = dice2;
    }

})


// "Hold" button event handling
document.querySelector(".btn-hold").addEventListener("click", function () {

    if (gamePlaying) {
        // Add current score to player's score
        scores[activePlayer] += roundScore;

        // Get the value from the input box
        var input = document.getElementById("final-score").value;
        var winningScore;

        // If there is an input value chosen, then set that value as the total points to win a game, if not, set it to 100
        // undefined, 0, null, and "" are COERCED to false
        if(input){
            winningScore = input;
        }
        else{
            winningScore = 100;
        }
        // Update UI
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";

            // classList allows you to access all the classes available to that element.
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

            // Set the state varaible to false to prevent "Roll Dice" and "Hold" buttons from doing anything
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }
})

// "New Game" button event handling
document.querySelector(".btn-new").addEventListener("click", init);


// Function to start the game
function init() {

    // Setting all initial values to 0
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // A boolean variable that will allow the game to be played when set to true, and to do nothing when set to false.
    gamePlaying = true;


    // Hiding the dice picture
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    // Setting content of selected HTML elements to 0 and removing all active/winner classes from the players
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1"
    document.getElementById("name-1").textContent = "Player 2"
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    // After removing classess, we only add the active class for player 1 when a new game is started
    document.querySelector(".player-0-panel").classList.add("active");

}

// Function to select new player
function nextPlayer() {

    // If the condition is true, the first option is done, if not true, then the second option is perfomed
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Setting both current score to 0
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // Highlighting current player, de-highlighting previous player
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Hiding dice picture
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
}

