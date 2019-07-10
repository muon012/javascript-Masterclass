// call, apply, bind

/*************************************
Call 
*************************************/
// The method allows you to use the "this" variable with other objects. It allows you to borrow methods from other
// objects. 
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log("Good " + timeOfDay + ", Ladies and gentlemen! I'm " + this.name + ", I'm a " + this.job +
            " and I'm " + this.age + " years old.");
        }
        else if(style === 'friendly') {
            console.log("Hey! What's up? I'm " + this.name + ", I'm a " + this.job +
            " and I'm " + this.age + " years old. Have a nice " + timeOfDay + ".");
        }
    }
}

john.presentation('formal', 'morning');

var emily = {
    name: "Emily",
    age: 35,
    job: "desginer"
}

// We use the presentation method and pass 'emily' as the object.

john.presentation.call(emily, "friendly", "evening");


/*************************************
Apply 
*************************************/
// The apply method is very similar to the call method except it aceepts 2 arguments only. The first is the object,
// and the second is an array with the arguments for such method.
john.presentation.apply(emily, ["friendly", "evening"]);

/*************************************
Bind 
*************************************/
// The bind method stores a function with presets arguments into a variable. This allows you to call that variable 
// and only pass the remaining variables that you didn't enter when you use the bind method to define the variable.
// You must pass the object first, and then the method's arguments you wish to preset.
// This method of storing a function with preset arguments is also called "currying".
// The bind method prepends the presets arguments, that means you can only pass the arguments in the order that your 
// original function is expecting them. If you want to pass the second, or nth argument, you need to create another
// method.
var emilyFriendly = john.presentation.bind(emily, "friendly");
var johnFormal = john.presentation.bind(john, "formal", "evening");

emilyFriendly("上午");
johnFormal();

// Using the code from "15-OOP4.js" file but with bind method now.
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

// We now change the adult age limit into a variable so it can be preset for any country.
function isAdult(limit, el){
    return el >= limit;
}

// Notice that we didn't use an object before the method "arrayCalc" and that the "bind" method is inside the arguments.
var fullJapan = arrayCalc(ages, isAdult.bind(this, 20));

console.log(ages);
console.log(fullJapan);



