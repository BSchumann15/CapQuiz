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
