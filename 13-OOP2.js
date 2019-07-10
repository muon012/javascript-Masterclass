// Function constructors, prototype property, Object.create

/******************************************
Function Constructors
******************************************/
// This method does instanciation, it allows you to create objects.
// The 'new' operator creates an EMPTY object, and then the function creator is called with the arguments passed.
// The 'this' operator points to the newly created object NOT to the global object, that is the reason of using 'new'.
// The usual convection is to write function constructors with a capital letter first, like classes in Python.

 var Person = function(name, yearOfBirth, job){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
     this.retirement = function() {
         console.log(70 - (2019 - this.yearOfBirth));
     }
 }

 var john = new Person('John', 1990, 'teacher');
 var jane = new Person('Jane', 1969, 'designer');
 var mark = new Person('Mark', 1948, 'retired');
 john.retirement();

/******************************************
Protoype property
******************************************/
// We could write methods inside the function constructor (like the retirement method above), but that would make the 
// code inneficient because everytime you create a new object you are copying the methods, maybe it is 100 lines of 
// code, to each new instance. Instead we just add the methods to the prototype property, and call it later for each 
// instance. You can even add properties not just methods to the prototype property, but this isn't very common.

Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
}

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

Person.prototype.lastName = 'Smith';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// The protoype property has a lot of methods that you can call and use. For example we can check if the object has 
// a certain property like 'job'.
console.info(Person.prototype.__proto__);
console.log(john.hasOwnProperty('job'));
console.log(john instanceof Person);

/******************************************
Object.create
******************************************/
// This is just another way of creating an object. This method can be advantageous when we want to specify directly
// which prototype to inherit from.
// We need to create a prototype first, a Class that will act as the blueprint, and pass it as the first parameter.

var personProto = {
    yearsToRetirement: function(){
        console.log(70 - this.age);
    }
};

var billy = Object.create(personProto);
billy.name = "Billy";
billy.age = 20;

console.info(billy);
billy.yearsToRetirement();

// Instead of creating the properties one by one like above, we can pass them as the second parameter.
var lucy = Object.create(personProto, 
    {
        name: { value: 'Lucy'},
        age: { value: 30}
    }
);

console.info(lucy);
lucy.yearsToRetirement();