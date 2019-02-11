
/*
*************************************
Javascript data types:
Number - numbers are always floating point numbers even if we define them as integers.
String - sequence of characters.
Boolean - "true" or "false".
Undefined - Data type of a variable that does not have a value yet. Nonexisting.
Null - Also a nonexisting type, but more specific than 'Undefined'.
*/

// JS is a dynamically typed language, so it will automatically assign a data type to the variable according to the value given.
// Variable names must start with a letter, underscore, or dollar sign. Nothing else.

var firstName = "John";
console.log(firstName);

var age = 25;
console.log(age);

var fullAge = true;
console.log(fullAge)

var job;
console.log(job) // This returns "undefined".

// Variable mutation and type coercion.
// Type coercion in JS: If you want to console.log() two vairable of different types, JS thinks you want to do string 
// concatenation and it will covert the int, boolean, undefined, etc, types into string types only for the 
// console.log() operation. All variables will still preserve their initial type declaration.
// Variable mutation: We can easily change the value of a variable by assigning a new value to it.

var name = "Eddie"
var age = 10 // Example of variable mutation.
console.log(name + " is " + age + " and " + job); // Example of type coercion.

alert(name + " is " + age + " and " + job); // alert pops up a pop-up window in the browser.

// Prompt the user to input a number:
var userNumber = prompt("Please enter a number: ")
console.log("The number you entered was: " + userNumber);
console.log("The type of the input entered is: " + typeof userName);


var year, myAge, anotherAge;
year = 2019;
myAge = 30;
anotherAge = 45;

// Logical operator
var meOlder = myAge > anotherAge
console.log("Am I older than the other person?: " + meOlder);

// typeof operator
console.log(typeof meOlder);
console.log(typeof age);
console.log(typeof name);

// Operator precedence
var now = 2019;
var yearJohn = 1989;
var drinkingAge = 21;

// Here the "minus" sign will be evaluated first, then the "greater than or equal" sign, finally the "assignment operator".
var canDrink = now - yearJohn >= drinkingAge;
console.log(canDrink);

var ageJohn = now - yearJohn;
var averageAge = (ageJohn + myAge) / 2;
console.log(averageAge);

// Multiple assignment.
// We can give assign values to multiple variables like this:
var alpha, gamma;
alpha = gamma = (3 + 5) * 4 - 6;
console.log(alpha, gamma);

// More operators.
alpha++;
console.log(alpha);
alpha--;
console.log(alpha);
alpha *= 10;
console.log(alpha);

/*
Challenge 1:
Calculate the BMI of two people, then console.log a statement showing if ono person's is higher than the other.
*/

// Heights of the two people in meters:
var p1_height = 1.60;
var p2_height = 1.85;

// mass of the two people in kilograms:
var p1_mass = 88;
var p2_mass = 60;

// Calculate their BMI's:
var p1_bmi = p1_mass / (p1_height ** 2);
var p2_bmi = p2_mass / (p2_height ** 2);

console.log(p1_bmi);
console.log(p2_bmi);

var p1IsHigher = p1_bmi > p2_bmi;

console.log("Is person 1's BMI higher than person 2's BMI?: " + p1IsHigher);



