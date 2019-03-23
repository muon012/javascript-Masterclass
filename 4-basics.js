// Function Expressions, function declarations, expressions vs statements

/******************************************
Function Declaration
******************************************/
// Creating a function starting with the keyword "function".
// These functions can be used even before declaring them (writing the function block of what the function does).
// You can place them at the end of the code and still call them on the first line of your js file.

function calculateAge(birthYear){
    return 2019 - birthYear;
}

var myAge = calculateAge(1989);
console.log(myAge);

function yrsToRetirement(birthYear, name){
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(name + " retires in " + retirement + " years.");
    }
    else {
        console.log(name + " is already retired.");
    }
}

yrsToRetirement(1990, "John");
yrsToRetirement(1950, "Mike");

/******************************************
Function Expression
******************************************/
// Creating a function starting with the keyword "var".
// You can only call these functions AFTER writing their defintions.
var whatDoYouDo = function(job, name){
    switch(job){
        case "teacher":
            return name + " teaches kids how to code."
        case "driver":
            return name + " drives an Uber in Lisbon."
        case "designer":
            return name + " designs beautiful websites."
        default:
            return name + " does something."
    }
}

console.log(whatDoYouDo("teacher", "Jane"));
console.log(whatDoYouDo("MMA Fighter", "Jim"));
console.log(whatDoYouDo("driver", "Liz"));

// Expressions
// Expressions are things that return something. They evaluate to something i.e. 3 + 5 is an expression that returns 8.
// Function expressions return something.

// Statements
// Statements are things that do something i.e. console.log(23), map(x), etc;
// Fucntion Declarations don't return anything.
