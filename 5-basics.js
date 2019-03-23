// Arrays, push(), unshift(), pop(), shift(), indexof(), CHALLENGE 3


// Arrays in JS can have different data types in them.
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948); // Another method to create arrays.

console.log(names);
console.log(names[0]);
console.log(names.length);

// Mutate the array data
names[1] = "Ben";
names[5] = "Mary";
names[names.length] = "Jim";
console.log(names);

// Different data types:
var john = ["John", "Smith", 1990, "teacher", false];

/**********************************
push() Method
***********************************/
// This method inserts an element at the end of the specified array.
john.push("blue");
console.log(john);

/**********************************
unshift() Method
***********************************/
// This method inserts an element at the start of the specified array.
john.unshift("Mr.");
console.log(john);

/**********************************
pop() Method
***********************************/
// This method removes an element at the end of the specified array.
// It takes no arguments.
john.pop();
console.log(john);

/**********************************
shift() Method
***********************************/
// This method removes an element at the start of the specified array.
// It takes no arguments.
john.shift();
console.log(john);

/**********************************
indexof() Method
***********************************/
// This method returns the position of the argument passed in the array.
// If the argument is an element in the array then it will return its position, if such argument is not present in the
// array then it returns -1.
console.log(john.indexOf("John"));
console.log(john.indexOf(1990));

var isDesigner = john.indexOf("designer") === -1 ? "John is not a designer" : "John is a designer";
console.log(isDesigner);

/**********************************
Challenge 3
***********************************/
// Create arrays containing the total amount of each bill's tips, and the total amount paid (bill + tip).

var bills = [124, 48, 268];

function tipCalculator(bill){
    var tipAmount = 0;
    if(bill < 50){
        tipAmount = bill * 20 / 100;
    }
    else if(bill >= 50 && bill <= 200){
        tipAmount = bill * 15 / 100;
    }
    else if(bill > 200){
        tipAmount = bill * 10 / 100;
    }
    else {
        tipAmount = "Error";
    }
    return tipAmount;
}

var tip1 = tipCalculator(bills[0]);
var tip2 = tipCalculator(bills[1]);
var tip3 = tipCalculator(bills[2]);

var tips = [tip1, tip2, tip3];

var totalAmount = [tip1 + bills[0], tip2 + bills[1], tip3 + bills[2]];

console.log(tips);
console.log(totalAmount);

