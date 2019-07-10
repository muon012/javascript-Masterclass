/************************************************
 How JS is executed
*************************************************/
// JS must be hosted in an environment, , mainly a web browser. In the environment there is usually an engine that executes
// the JS code. The first step to this execution is done by a "parser" that looks at the syntax of the JS code and 
// checks for errors, stopping execution if there is one.
// If no errors, the parser produces a data structure called "abstract syntax tree" which is then translated into machine 
// code and run. 

/************************************************
 Execution of the machine code
*************************************************/
// Once the source code is transformed into machine code, the code is run.
// The code is run in an environment called "execution context" , which is like a box that stores variables and where a 
// piece of the code is evaluated and executed. Execution contexts are associated with an object!!!!!!
// By default, JS code is run in the "Global exection context" which is all the code that is not stored in a function.
// All this code is part of the "global object", which in a browser is the "window" object.
// if you check: 'lastName === window.lastName' it will return "true".

// So when the code is run, the first exection context is the global execution context, if there are functions in the 
// code then those functions get their own execution context, in other words, the machine leaves the global context for
//  a while until it evaluates that function's execution code. The variables in these execution contexts are evaluated
// and executed. If this function has a function in it that must be executed,then we leave the current function's context
// and enter the nested function's execution context. This process is known as execution stack. All the execution contexts
// keep getting piled up on the execution stack. Once all the functions are executed, we keep removing each nested 
// execution context from the exection stack until we get back to the global context. This process is repeated throughout 
// all the code.

/************************************************
 How are Execution Contexts created
*************************************************/
// All execution contexts are associated with an object, and they have 3 properties:
// The variable object - function arguments, inner variable declarations, and function declarations.
// The scope chain - contains the current variable object and all its parent objects.
// The "this" variable - use to access and refer to the current variable object.
// At the execution stack, execution contexts go through 2 phases: creation and execution.
// Creation phase - creation of variable object, scope chain, and evaluation of "this" variable.
// Execution phase - code in the function is run, line by line.

// In the VARIABLE OBJECT, the arguments object is created containing all the arguments passed into the function, remember 
// we are talking about the execution context. The code is scanned for function declarations, and a property is 
// also created (in the variable object) pointing to that function. Variable declarations are also scanned, but their 
// values are set to "undefined". This is called HOISTING. Functions (when written as function declarations) and variables
// are available before the execution phase starts. However, variables are only defined (they go from "undefined" to their 
// actual value written in the code)only in the execution phase. This is why you can put function declarations at the end 
// of your program, call them at the start, and still the program will run but can't do this with function expressions.

/************************************************
 Hoisting
*************************************************/
// Thanks to hoisting, you can call functions that were written as function declarations at the start of your code, but 
// you can't call functions that were written as function expressions at the start.

// Using function declarations
calcAge(1990);
function calcAge(birthYear){
    console.log(2019 - birthYear);
   
}
calcAge(1990);

// Using function expressions.
// We need to call the function AFTER it is defined.

// retirement(1990); // This returns an error because the function was not written as a function declaration
var retirement = function(birthYear){
    console.log(65 - (2019 - birthYear));
}

retirement(1990);

// Variables
console.log(age); // Variables are set to "undefined" when the global variable object is created.
var age = 40;
console.log(age);

// Scoping
// Variables that are declared inside a function are different than the ones declared in the global variable object
// even if they have the same name.

function foo(){
    console.log(age);
    var age = 50;
    console.log(age);
}

foo();
console.log(age);

/************************************************
 Scope
*************************************************/
// A function creates an environment/space where variables are defined and can be accessed. This is the function's SCOPE!
// In JS, the only way to create a scope is to write a function. In other programming languages, scopes could be built 
// by writing loops, if-else statements, but not in JS.
// Functions within functions(nested functions) have access to the variables of their parent functions, but not the other
// way around.

// In this example, "second" function has access to the variable "b" in the "first" function, which in turn has access to
// the variable "a" in the global variable object.

var a = "Hello!";
first();

function first(){
    var b = "Hi!";
    second();
    function second(){
        var c = "hey!";
        console.log(a + b + c);
    }
}

// DON'T confuse execution stack (order in which functions are called) with scope chain (order in which functions are
// written lexically (nested or unested).
// What determines the scope of variables is where the variables are written.
// In this example below, the "foo3" function cannot access the variables "y" and "z" because it's not a nested function of "foo2".
// Running the console.log() statement in the foo3() function leads to an error.
var x = "Hello!";
foo1();

function foo1(){
    var y = "Hi!";
    foo2();
    function foo2(){
        var z = "hey!";
        foo3();
    }
}
function foo3(){
    var w = "howdy!"
    // console.log(x + y + z + w);   
}

/************************************************
 "this" keyword
*************************************************/
// The "this" keyword, as method of an object, points to the object that is calling the method.
// In a regular function call, "this" points to the global object,
// "this" is only assigned a value as soon as the function where it is defined is called.

// "this" points to the window object in these 2 examples:
console.log(this);

function calculateAge(birthYear){
    console.log(2019 - birthYear);
    console.log(this);
}

// "this" points to the object "Mark", but check the method and its nested function
var mark = {
    name: "Mark",
    birthYear: 1985,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.birthYear);
        
        // Here we add a regular function whose "this" points to the window object not "mark" object:
        function inside(){
            console.log(this);
        }
        inside();
    }
}

mark.calculateAge();

// Method borrowing:
var mike = {
    name: "Mike",
    birthYear: 1990
}

mike.calculateAge = mark.calculateAge;
mike.calculateAge();
