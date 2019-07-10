
// Create a function constructor
var Question = function(questionText, choices, answer) {
    this.questionText = questionText;
    this.choices = choices;
    this.answer = answer;

    // Create a method that loops through all the available choices:
    this.loopingInObject = function() {
        var values = Object.keys(choices).map(function(e) {
            return choices[e]
        });

        return values
    };
}

// We will create a prototype method for getting the key variable from the 'Question.choices' object, if it is equal
// to the 'answer' in the 'Qestion' constructor. We could have placed this method inside but chose to practice writing
// prototypes methods instead.

Question.prototype.getKeyByValue = function() {
    return Object.keys(this.choices).find(key => this.choices[key] === this.answer);
}


// Create the questions, they will serve as the first argument of the Question constructor.
var text_1 = "Square root of 625: ";
var text_2 = "太阳是什么颜色的? ";
var text_3 = "Capital of Japan: ";
var text_4 = "Organelle referred to as the 'energy factory': ";
var text_5 = "Which has the longer wavelenght: ";
var text_6 = "Which is bigger? ";
var text_7 = "Who is the primarch of the Thousand Sons? ";

// Create the answers to the questions.
var choices_1 = {
    0: "25",
    1: "15",
    2: "55"
};
var choices_2 = {
    0: "橙色",
    1: "黄色",
    2: "白色"
};
var choices_3 = {
    0: "Kyoto",
    1: "Tokyo",
    2: "Osaka"
};
var choices_4 = {
    0: "mitochondria",
    1: "nucleus",
    2: "vacuole"
};
var choices_5 = {
    0: "infrared",
    1: "radiowaves",
    2: "microwaves"
};
var choices_6 = {
    0: "proton",
    1: "electron",
    2: "neutron"
};
var choices_7 = {
    0: "Magnus the Red",
    1: "Leman Russ",
    2: "Roboute Guilliman"
};

/***************************************
// Create a function that loop through the choices.
function loopingInObject(obj) {
    var values = Object.keys(obj).map(function(e) {
        return obj[e]
    });
    console.log(values);
    
}

// Getting the key from the value of the choices object.
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
***************************************/

// Declare and initialize all the questions
var question_1 = new Question(text_1, choices_1, "25");
var question_2 = new Question(text_2, choices_2, "白色");
var question_3 = new Question(text_3, choices_3, "Tokyo");
var question_4 = new Question(text_4, choices_4, "mitochondria");
var question_5 = new Question(text_5, choices_5, "radiowaves");
var question_6 = new Question(text_6, choices_6, "neutron");
var question_7 = new Question(text_7, choices_7, "Magnus the Red");


// Store the questions in an array:
var questions = [question_1, question_2, question_3, question_4, question_5, question_6, question_7];


// Random number generator according to length of array:
function rand (arrLength) {
    var randomNumber = Math.floor(Math.random() * arrLength);
    return randomNumber;
}


function testStart(objects_array) {
    var promptText = "Choose and type in your answer: ";
    var arrayLength = objects_array.length;

    // We make a copy of the array. We will take out elements from this array to make sure we dont display a question 
    // twice.
    var objects_array_copy = objects_array.slice();

    // Create a score variable with correct and wrong answers:
    var score = [0, 0];



    for(var i = 0;i < arrayLength; i++) {

        console.log("---------------------------------------");


        // Call the random number function using the array copy:
        var randNum = rand(objects_array_copy.length);


        // Current Question object:
        var currentQuestionObject = objects_array_copy[randNum];

        // Get and display the actual question:
        var presentQuestion = currentQuestionObject.questionText;
        console.log(presentQuestion);

        // Get the value of the key for the answer.
        // We added one because the range is 0-2, and we want 1-3.
        var answerFromQuestion = parseInt(currentQuestionObject.getKeyByValue()) + 1;                

        // Loop through the choices and display them in the console:
        var choicesFromQuestion = currentQuestionObject.loopingInObject();        
        for(var j = 0; j < choicesFromQuestion.length; j++) {
            console.log(j + 1 + ") " + choicesFromQuestion[j]);
        }

        // Prompt the user for an answer to the question:
        var userInput = prompt(promptText);
        
        // We use double equality because we are only checking for the value, not the type to be exact.
        if(userInput == answerFromQuestion) {
            console.log("Correct!");
            score[0] += 1;
            console.log("Your score is:\nCorrect: "+ score[0] + "\nWrong: " + score[1]);
            
        }
        // Here we do convert the input into an integer in order to check greater/less than:
        else if(parseInt(userInput) > answerFromQuestion || parseInt(userInput) < answerFromQuestion) {
            console.log("Sorry, wrong answer.");   
            score[1] += 1;
            console.log("Your score is:\nCorrect: "+ score[0] + "\nWrong: " + score[1]);

        }
        else if(userInput === "exit"){
            console.log("Bye, thanks for playing!");
            
            break;
        }
        else{
            console.log("Unexpected input.");
        }

        // We then remove that element we randomly chose, so that the next random number will not be out of range.
        objects_array_copy.splice(randNum, 1);

    }
    
}

testStart(questions);


// If you want to make this code private, you wrap it all and make it an IIFE.