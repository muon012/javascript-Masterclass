// Objects, methods, "this", CHALLENGE 4

// Objects have properties, which are variables attached to an object, the value of that variable (property) is called
// property-value.

// Object literal 
// It is a way of defining an object using the "{}" symbols.
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    calAge: function(yearNOw){  // Creating a method and using "this" to create an "age" property.
        this.age = yearNOw - this.birthYear;
    }
}

console.log(john.isMarried);
console.log(john["firstName"]);

// Object properties mutation
var y = "birthYear";
console.log(john[y]);

john.job = "designer";
john.isMarried = true;
console.log(john);

// new Object syntax
// Another way of initializing an object.
var jane = new Object();
jane.firstName = "Jane";
jane["lastName"] = "Smith";
jane.birthYear = 1991;

console.log(jane);
console.log("\n")
console.log(john.calAge(2019)); // This is returning 'undefined' because this method is a -function declaration- and they don't return anything.
console.log(john); // Thanks to the line before, the 'age' property has been created.

/*******************************************
 Challenge 4
 *******************************************/
// Recreate the BMI challenge 1 using objects now

var p1 = {
    name: "Mark",
    height: 1.69,
    mass: 78,
    calcBmi:function(){
        this.bmi = this.mass / (this.height ** 2);
    }
}

var p2 = {
    name: "John",
    height: 1.95,
    mass: 92,
    calcBmi:function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

// Call the "calBmi()" methods to define their BMI and use that BMI in the function below:
p1.calcBmi();
p2.calcBmi();

function highestBmi(objPerson1, objPerson2){
    var winner = "";
    var winnerBmi = "";
    if(objPerson1.bmi > objPerson2.bmi){
        winnerBmi = objPerson1.bmi;
        winner = objPerson1.name;
    }
    else if(objPerson2.bmi > objPerson1.bmi){
        winnerBmi = objPerson2.bmi;
        winner = objPerson2.name;
    }
    else{
        winnerBmi = objPerson1.bmi;
        winner = "neither";
    }
    console.log("The one with the highest BMI is " + winner + ". BMI value is: " + winnerBmi);
}

highestBmi(p1, p2)