let TimeEl =document.querySelector("p.time");
let secondsLeft = 120;
let ScoreEl =document.querySelector("#score");

const introEl =document.querySelector("#intro");

const questionsEl =document.querySelector("#questions");
let questionEl =document.querySelector("question");
let questioncount = 0;

const yaynayEl =document.querySelector("#yaynay");

const FinalsEl =document.querySelector("#final");
let initialsinput =document.querySelector("#initials");

const highscoresEl =document.querySelector("#highscores");
let scoreslistEl =document.querySelector("#score-list");
let scorelist = [];

const startBtn = document.querySelector("#start");
const ansBtn = document.querySelectorAll("button.ansBtn")
const ans1Btn = document.querySelector("#answer1");
const ans2Btn = document.querySelector("#answer2");
const ans3Btn = document.querySelector("#answer3");
const ans4Btn = document.querySelector("#answer4");
const submitScrBtn = document.querySelector("#submit-score");
const goBackBtn = document.querySelector("#goback");
const clearScrBtn = document.querySelector("#clearscores");
const viewScrBtn = document.querySelector("#view-scores");

const questions = [
    {
        question: "What is the capital of the Czech Republic?",
        answers: ["1. Vienna", "2. Prague", "3. Manchester", "4. Kyiv"],
        correctAnswer: "2"
    },
    {
        question:"What is the capital of Spain?",
        answers: ["1. Barcelona", "2. Moscow", "3. Madrid", "4. Hamsburg"],
        correctAnswer:"3"
    },
    {
        question:"What is the capital of Estonia?",
        answers: ["1. Warsaw", "2. Tallinn", "3. Bucharest", "None of the above"],
        correctAnswer:"3"
    },
    {
        question:"What is the capital of Latvia?",
        answers: ["1. Riga", "2. Vilnius", "3. Bucharest", "4. Nur-Sultan"],
        correctAnswer:"1"
    },
]


function setTime({
    let timerInterval = setInterval(function(){
        secondsLeft--;
        TimeEl.textContent = "Time:${secondsLeft}s";
    })
})
