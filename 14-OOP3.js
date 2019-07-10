// Primitive variables, object variables, functions and their mutations

// Varaibles with primitives
// Variables that are assigned the value of another variable, which contains primitive values, actually hold that data
// in themselves. That means, they contain a copy of the value from the variable that was assigned to them. 
// The code below shows that variable 'b' was given a value equal to 'a', so it copied that value and assign it to 
// itself. Both a and b are stored in different parts of the computer's memory, but they just happen to have the same 
// data. Changing one variable's data will not affect the other variable's data value.
var a = 23;
var b = a;

a = 23.5

console.log("\na is " + a);
console.log("b is " + b);

// Object variables
// If you declare a variable and assign it an value equal to an object already defined, it doesn't actually contain
// a copy of the defined object's value but a reference to where that object (the one with values 
// already defined) is located in the computer's memory. If you change a property from any of these objects that
// were assigned an object value, then all these object variables that are associated with the original object will 
// also have that change because they just point to the original object, they are not new objects with copied values.
// Below, it shows that changing the value of the property 'age' from either 'obj1' or 'obj2' results in both having 
// that change. That is because 'obj2' is just poiting to 'obj1' in the computer's memory, it is not a new object with
// copied values.

var obj1 = {
    name: "John",
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log("\nobj1.age is " + obj1.age);
console.log("obj2.age is " + obj2.age);

obj2.age = 30.3

console.log("obj1.age is " + obj1.age);
console.log("obj2.age is " + obj2.age);

// Functions
// If you pass a primitive to a function it will not be affected. The function only creates a copy of the primitive, 
// but i cannot change the actual variable that was passed.
// However, with objects, functions can change the value of an object. Because you are not passing an object and
// creating a copy, you are passing the reference of that object, so that gives you access to the actual object 
// variable. 
var age = 27;
var obj = {
    name: "旺旺",
    city: "台北"
};

function change(a, b){
    a = 50,
    b.city = '洛杉矶'
}

console.log("\nage is " + age);
console.log("obj.city is " + obj.city );

change(age, obj);

console.log("age is " + age);
console.log("obj.city is " + obj.city );


