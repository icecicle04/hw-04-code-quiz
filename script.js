console.log("hello World!");

// add variable for quiz start button to use in render quiz function
var quizStartButton = document.querySelector("#startQuiz");
// variables to clear rest of screen
var timer = document.querySelector("timer");

// vars for answers

// insert questions array
var quizQuestions = [
  {
    0: "Commonly used data types DO NOT include:",
    1: "1. strings",
    2: "2. booleans",
    3: "3. alerts",
    4: "4. numbers",
    correct: "3",
  },
  {
    0: "The condition in an if / else statement is enclosed within ______.",
    1: "1. quotes",
    2: "2. curley brackets",
    3: "3. parenthesis",
    4: "4. numbers",
    correct: "3",
  },
  {
    0: "Arrays in JavaScript can be used to store ______.",
    1: "1. numbers and strings",
    2: "2. other arrays",
    3: "3. booleans",
    4: "4. all of the above",
    correct: "4",
  },
  {
    0: "String values must be enclosed within ______ when being assigned to variables.",
    1: "1. commas",
    2: "2. curley brackets",
    3: "3. quotes",
    4: "4. parenthesis",
    correct: "3",
  },
  {
    0: "A very useful tool used during development and debugging for printing content to the debugger is:",
    1: "1. JavaScript",
    2: "2. terminal / bash",
    3: "3. for loops",
    4: "4. console log",
    correct: "4",
  },
];

// renderQuiz();
// start quiz

// quizStartButton.addEventListener("click"), function() {
//     var questionOne = ;
// }

function renderQuiz() {
  quizStartButton.addEventListener("click"),
    function () {
      console.log("ive been clickedd!");
    };
}
// clear current content on screen
