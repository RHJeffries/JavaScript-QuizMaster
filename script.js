var startButton = document.querySelector(".start-button");
var questionSpot = document.getElementById("question-spot");
//timer
var timerEl = document.getElementById("timer");
var questEl = document.getElementById("question");
var ansButtons = document.getElementById("ans-buttons");

var shuffledQuestion, currentQuestIndex;

var score = 0;



function startGame() {
console.log("started");

startButton.classList.add("hide");
shuffledQuestion = questions.sort(() => Math.random() - .5);
currentQuestIndex = 0;
questionSpot.classList.remove("hide");
timer();
nxtQuestion();

}








function timeOut() {
    popQuiz.textContent = "Game Over";
   
    //number correct plus time remaining for score
    //startButton.disabled = false;
    //highScore()
}

function timer() {
    
    var timeRemain = 10;
    var timeLeft = setInterval(function () {
        
        if (timeRemain > 0) {
            timerEl.textContent = timeRemain;
            timeRemain--;
        }
        if (timeRemain === 0) {
            clearInterval(timeLeft);
            timeOut();
        }
    }, 1000);
}





// Quiz questions, each question an object



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
console.log(questions)




 // click start button to being quiz and start timer
startButton.addEventListener("click", startGame);
