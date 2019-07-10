// Functions that return functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name) {
            console.log(name + ", Can you please explain what UX design is?");
        }
    }
    else if(job === 'teacher'){
        return function(name) {
            console.log("What subject do you teach, " + name + "?");
        }
    }
    else {
        return function(name) {
            console.log("Hello " + name + ", What do you do?");   
        }
    }
}

// The variable 'teacherQuestion' will have a function assign as its value.
var teacherQuestion = interviewQuestion("teacher");

// We can then call such function but remember we must pass an argument too.
teacherQuestion("John");

// We can also call the function that is returned from the other function in a SINGLE line of code.
// JS reads from left to right, so it evaluates the left part first then the right part.
interviewQuestion('designer')('lucy');