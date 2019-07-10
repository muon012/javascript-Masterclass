// Event handling, callback functions, anonymous functions, ternary operator, .classList, state variable


var scores, roundScore, activePlayer, gamePlaying;

// We call the init() function to start a new game
init();

/************************************************
 Event Handling
*************************************************/
// Events are only handled after all the functions in the execution stack are returned. 
// The "Message Queue" is where all the events that happen in a browser are put.
// When you click on the webpage you trigger an event handler which is a function, so now this function gets put in the
// execution stack.
// The function "addEventListener()" takes two arguments: 1)the type of event, and 2)the function to be called when 
// that event happens.

/************************************************
 Callback Function
*************************************************/
// It is a function that's supplied as an argument to another function(parent function), such that when the parent 
// function is called (whatever condition, in this case below the event "click") and its function body completes, 
// the callback function is then invoked.
// In simple terms, a function that is an argument of another function.
// It gets its name 'callback' because you don't use '()' when you write in in the arguments' field of the parent 
// function, you put the '()' when you 'callback' such function inside the parent function's body. This applies to
// 'named functions' only because with anonymous functions you need to write '()' in the arguments' field.

/************************************************
 Anonymous Function
*************************************************/
// It's a nameless function that is typically used inside another function, and therefore CAN'T be used outside the scope
// of such parent function.


// Putting it all together:
// The "addEventListener()" function takes a callback function as an argument, the call back function could be an
// anonymous function, or a named (defined) function.In the case of anonymous functions, they could be defined inside
// the "addEventListener()" function. In the case of named functions, remember not to write "()" at the end of the named
// function.

/***********************************
 Pig Game
 **********************************/
// In this game, the first player to reach 100 points rolling a dice several times wins.
// How do you reach 100 points? The player rolls a dice as many times as he wants. The values of such rolls are added to a 
// sum, but if the players rolls a 1 then that sum goes back to 0 and it's the next player's turn.
// In order to avoid losing the sum before rolling a 1, the player can choose to "hold" that sum and add it to his total
// score, and then the next player goes.


// "Roll Dice" button event handling
document.querySelector(".btn-roll").addEventListener("click", function () {

    // If the state variable "gamePlaying" is true then we can use the buttons normally.
    if (gamePlaying) {

        // Random number
        var dice = Math.floor(Math.random() * 6 + 1);

        // Display the result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "./images/dice-" + dice + ".png";

        // Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add score to the current score of current player
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            lastRoll = dice;
        }
        else {
            nextPlayer();
        }
    }

})


// "Hold" button event handling
document.querySelector(".btn-hold").addEventListener("click", function () {

    if (gamePlaying) {
        // Add current score to player's score
        scores[activePlayer] += roundScore;

        // Update UI
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 50) {
            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";

            /************************************************
            classList
            *************************************************/
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

    /************************************************
    State Variable
    *************************************************/
    // A boolean variable that will allow the game to be played when set to true, and to do nothing when set to false.
    gamePlaying = true;


    // Hiding the dice picture
    document.querySelector(".dice").style.display = "none";

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

    /************************************************
     Ternary Operator
    *************************************************/
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
    document.querySelector(".dice").style.display = "none";
}

