// Callback functions

// Some facts about functions:
// Functions are an instace of the Object type.
// Functions behave like any other object.
// Functions can be stored in variables (function expressions).
// Functions can be passed as arguments of other functions.
// Functions can return functions from other functions.

/****************************
 Callback Functions 
 ***************************/
// Remember that a callback function is a function that is an argument of another function.
// It gets its name 'callback' because you don't use '()' when you write in in the arguments' field of the parent 
// function, you put the '()' when you 'call back' such function inside the parent function's body.

var years = [1990, 1984, 1945, 2004, 2018];

function arrayCalc(arr, fn){
    arrRes = [];
    for(var i = 0; i< arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el){
    return 2019 - el;
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

function isAdult(el){
    return el >= 18;
}

var adults = arrayCalc(ages, isAdult);
console.log(adults);

function maxHeartRate(el){
    if(el >= 18 && el < 81){
        return Math.round(206.9 - (.67 * el));
    }
    else{
        return -1;
    }
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

