// DOM, Math object, querySelector(), .textcontent, .innerHTML, .style.display

/************************************************
 DOM
*************************************************/
// DOM = document object model.
// The "Math.random()" statement returns a random decimal number between 0 (inclusive) and 1 (exclusive).
// "Math.floor()" removes the decimal part of a number.


var scores, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;
activePlayer = 0; // 0 for the first player, 1 for second player.

/************************************************
 Math  object
*************************************************/

var randNum = Math.random() * 6;  // Random decimal number between 0.00 - 5.99;
dice = Math.floor(Math.random() * 6 + 1); // Random number between 1 - 6.

console.log(randNum);
console.log(dice);

/************************************************
 document.querySelector()
*************************************************/

// .textContent:
// "textcontent" can only access text, not HTML. It can be used to set the text to something (setter) or to
//  get the text from the HTML (getter).
var x = document.querySelector("#score-" + activePlayer).textContent;
console.log(x);

// .innerHTML:
// Make sure the html elements are written as strings.
document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";


// style.display:
// We can access css properties of HTML elements easily with this.
document.querySelector(".dice").style.display = "none";

