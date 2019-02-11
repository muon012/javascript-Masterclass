// Program flow.
// If-else statements, boolean logic, ternary operator, switch statements.


/***************************
if-else Statements
****************************/

var firstName = "John";
var civilStatus = "single";

if(civilStatus === "married"){
    console.log(firstName + " is married!");
}
else{
    console.log(firstName + " is not married.");
}

var isMarried = false;
if(isMarried){
    console.log(firstName + " is married already.");
}
else{
    console.log(firstName + " needs to find THE one love fast.");
}

/***************************
Boolean Logic
****************************/
var age = 24;

console.log("The age is " + age);


if (age < 13){
    console.log(firstName + " is a boy.");   
}
else if(13 <= age && age < 20){
    console.log(firstName + " is a teenager.");
}
else if(age >= 20 && age < 30){
    console.log(firstName + " is a young man.");
}
else{
    console.log(firstName + " is a man.");
}

/***************************
Ternary operator
****************************/
// If the conditional is "true", the first option before the ":" will be executed, if "false" then the next one will be.

age >= 18 ? console.log(firstName + " can drink beer.") : console.log(firstName + " better drink juice only.");

// THe variable "drink" will be given "beer" or "juice" depending on the result of the conditional "age >= 18".
var drink = age >= 18 ? "beer" : "juice";
console.log(drink);


/***************************
Switch Statements
****************************/

var job = "driver";

switch(job){
    case "instructor":
    case "teacher" : console.log(firstName + " teaches kids how to code.");
    break;
    case "driver" : console.log(firstName + " drives an Uber in Lisbon.");
    break;
    case "designer" : console.log(firstName + " designs beautiful websites.");
    break;
    default: console.log(firstName + " does something else.");
}

// Using swtich statements for logical operators:
// We check if the conditional is true or not.

var ageRange = "";
switch(true){
    case age < 13 : ageRange = "boy";
    break;
    case age >= 13 && age < 20: ageRange = "teenager";
    break;
    case age >= 20 && age < 30 : ageRange = "young man";
    default: ageRange = "man";
}

console.log(firstName + " is a " + ageRange);
