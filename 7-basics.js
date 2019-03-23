// Loops, iteration,for-loop, while-loop, continue, break, CHALLENGE 5


console.log("********* for-loops *********");
/******************************
 for-loops
 ******************************/
for(var i = 0; i < 10; i++){
    console.log(i);
}

var john = ["John", "Smith", 1990, "teacher", false];

for(var i = 0; i < john.length; i++){
    console.log(john[i]); 
}


console.log("********* while-loops ********* ");
/*******************************
 while-loops
 ******************************/
// You must define and initialize a variable for the conditional inside the while-loop.
// You must create an expression inside the while-block that makes the conditional fail.Otherwise you get an infinite loop.
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}


console.log("********* Print the array except non-string elements (using 'continue') *********");
/*******************************
 continue
 *******************************/
// In a loop, the "continue" statement makes the loop go to the next iteration without executing the code below it.
// Here we only want to print elements that are strings:
for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== "string"){
        continue;
    }
    console.log(john[i]); 
}


console.log("********* Print the array until it reaches a non-string (using 'break') and exit the loop immediately after *********");
/*******************************
 break
 *******************************/
// In a loop, the "break" statement exits out of the loop and doesn't execute the code below it if the condition is met.
// Here we exit the loop as soon as we find a "non-string" in the array:

for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== "string"){
        break;
    }
    console.log(john[i]); 
}

console.log("********* Looping through the array backwards *********");
// Looping backwards:
for(var i = john.length - 1; i >= 0; i--){
    console.log(john[i]); 
}

/*******************************
 Challenge 5
 *******************************/
// Create the challenge 3 again using arrays, objects, methods:

console.log("******************** Challenge ********************");

var billsJohnFamily = {
    name: "John's family",
    mealPrices: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tipBills = [];
        this.totalBills = [];
        var tipPercentage = 0;
        var tipAmount = 0;
        var totalAmount = 0;
        for(var i = 0; i < this.mealPrices.length; i++){
            var bill = this.mealPrices[i];
            if(bill < 50){
                tipPercentage = 20 / 100;
            }
            else if(bill >= 50 && bill < 200){
                tipPercentage = 15 / 100;
            }
            else{
                tipPercentage = 10 / 100;
            }
            tipAmount = bill * tipPercentage;
            totalAmount = bill + tipAmount;    
            this.tipBills.push(tipAmount);
            this.totalBills.push(totalAmount);
        }
    }
}

var billsMarkFamily = {
    name: "Mark's family",
    mealPrices: [77, 475, 110, 45],
    calcTip: function(){
        this.tipBills = [];
        this.totalBills = [];
        var tipPercentage = 0;
        var tipAmount = 0;
        var totalAmount = 0;
        for(var i = 0; i < this.mealPrices.length; i++){
            var bill = this.mealPrices[i];
            if(bill < 100){
                tipPercentage = 20 / 100;
            }
            else if(bill >= 100 && bill <= 300){
                tipPercentage = 10 / 100;
            }
            else{
                tipPercentage = 25 / 100;
            }
            tipAmount = bill * tipPercentage;
            totalAmount = bill + tipAmount;    
            this.tipBills.push(tipAmount);
            this.totalBills.push(totalAmount);
        }
    }
}

function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function highestAverage(obj1, obj2){
    var winner = "";
    var highest = 0;
    if(obj1.average > obj2.average){
        winner = obj1.name;
        highest = obj1.average;
    }
    else if(obj2.average > obj1.average){
        winner = obj2.name;
        highest = obj2.average;

    }
    else {
        winner = "neither"
        highest = obj1.average; 
    }

    console.log("The family with the highest average tip was: " + winner + " with an average tip of: $" + highest);
    
}
billsJohnFamily.calcTip();
billsMarkFamily.calcTip();

// Store the average in a property of the object:
billsJohnFamily.average = average(billsJohnFamily.tipBills);
billsMarkFamily.average = average(billsMarkFamily.tipBills);

console.log(billsMarkFamily);
console.log(billsJohnFamily);
highestAverage(billsJohnFamily, billsMarkFamily);
