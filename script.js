var start = document.getElementById("start");

var quiz = document.getElementById("quiz");

var question = document.getElementById("question");
var answer = document.getElementById("choices");
var ans;


var scoreDiv = document.getElementById("scoreContainer");

var lastQuestion = -1;

var score = 0;

var timerEl = document.getElementById("timer");
var timeRemain = 120;

var saveBtn = document.querySelector("#submit");
var nameInput = document.querySelector("#name");

var questions = [{
        question: "What are variables used for in JavaScript Programs?",

        choices: ["Storing numbers, dates, or other values",
            "Varying randomly",
            "Undefined",
            "A method for choosing a value"
        ],

        correct: "Storing numbers, dates, or other values"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",

        choices: ["<js>",
            "<scripting>",
            "<script>",
            "<javascript>"
        ],

        correct: "<script>"
    },
    {
        question: "An Array is a...",

        choices: ["Ordered list of values",
            "Unordered list of objects",
            "Weapon on the Death Star",
            "String of characters"
        ],

        correct: "Unordered list of objects"
    },
    {
        question: "Which function is used to round a number down?",

        choices: ["Math.random",
            "Math.floor",
            "Else If",
            "Malfunction"
        ],

        correct: "Math.floor"
    },
    {
        question: "Where does the push method add a new item to an array?",

        choices: ["Beginning",
            "Middle",
            "Random",
            "End"
        ],

        correct: "End"
    },
    {
        question: "A for loop will execute -",

        choices: ["As long as a condition is true",
            "As long as a condition is false",
            "Endlessly",
            "Not at all"
        ],

        correct: "As long as a condition is true"
    }
];

function startQuiz() {
    start.style.display = "none";
    showQuest();
    quiz.style.display = "inline-flex";


    timer();
}

function timer() {


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

function showQuest() {
    document.getElementById("choices").innerHTML = "";
    lastQuestion++;
    if (lastQuestion > 5) {
        timeOut();
    } else {


        answer = questions[lastQuestion].correct;
        question.textContent = questions[lastQuestion].question;
        answer.innerText = "";


        var ansChoices = questions[lastQuestion].choices;

        for (var i = 0; i < ansChoices.length; i++) {
            var nextChoice = document.createElement("button");

            nextChoice.innerText = ansChoices[i]
            document.getElementById("choices").appendChild(nextChoice);
        }
    }
}

answer.addEventListener("click", function (event) {


    // check answer choice if correct
    if (answer === event.target.textContent) {

        score++;



    } else {

        
        timeRemain = timeRemain - 10;



    }

    showQuest()
});

function timeOut() {
    clearInterval(timeRemain);
    document.getElementById("choices").innerHTML = "";
    quiz.style.display = "none";
    scoreDiv.style.display = "inline-flex";


}

start.addEventListener("click", startQuiz);



saveBtn.addEventListener("click", function(event){
event.preventDefault();

var player = {
    name: nameInput.value.trim(),
    score: score
}

localStorage.setItem("player", JSON.stringify(player));


})

