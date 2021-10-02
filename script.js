var start = document.getElementById("start");

var quiz = document.getElementById("quiz");

var question = document.getElementById("question");
var answer = document.getElementById("choices");
var ans;


var scoreDiv = document.getElementById("scoreContainer");

var lastQuestion = -1;

var count = 0;

var score = 0;

var timerEl = document.getElementById("timer");
var timeRemain = 120;

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
