//timer
var timerEl = document.getElementById("timer");

function timer() {
var timeRemain = 30;

var timeLeft = setInterval(function ()  {
    
    if (timeRemain > 1) {
        timerEl.textContent = timeRemain;
        timeRemain--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeLeft);
    }
}, 1000);

}
timer();

// Quiz questions, each an object

var questions = [
{
    question: "What are variables used for in JavaScript Programs?",
    answers: {
        a: "Storing numbers, dates, or other values",
        b: "Varying randomly",
        c: "Undefined",
        d: "A method for choosing a value"
    },
    correctAnswer: "a"
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>"
    },
    correctAnswer: "c"
},
{
    question: "An Array is a...",
    answers: {
        a: "Ordered list of values",
        b: "Unordered list of objects",
        c: "Weapon on the Death Star",
        d: "String of characters"
    },
    correctAnswer: "b"
},
{
    question: "Which function is used to round a number down?",
    answers: {
        a: "Math.random",
        b: "Math.floor",
        c: "Else If",
        d: "Malfunction"
    },
    correctAnswer: "b"
},
{
    question: "Where does the push method add a new item to an array?",
    answers: {
        a: "Beginning",
        b: "Middle",
        c: "Random",
        d: "End"
    },
    correctAnswer: "d"
},
{
    question: "A for loop will execute -",
    answers: {
        a: "As long as a condition is true",
        b: "As long as a condition is false",
        c: "Endlessly",
        d: "Not at all"
    },
    correctAnswer: "a"
}

];
