// Closures

// A JavaScript closure is a function that has a pointer reference to a free variable. 
// A free variable is one that has fallen out of scope after its parent function has returned. 
// However, if that outer function still has some reference to the free var (normally through a function that 
// gets returned, or through a method property), the variable will not get garbage collected because it will have 
// a non-zero reference count. Thus, from outside the function, we can still access the inner variable by means of 
// the closure.
// Remember that inner functions have access to the parent function's variables and parameters even after the outer 
// function is returned.


function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUSA = retirement(66);
retirementUSA(1990);

retirement(66)(2003);


function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ", Can you please explain what UX design is?");
        }
        else if(job === 'teacher'){
            console.log("What subject do you teach, " + name + "?");
        }
        else {
            console.log("Hello " + name + ", What do you do?");   
        }
    }
}

interviewQuestion('teacher')('Eddie');